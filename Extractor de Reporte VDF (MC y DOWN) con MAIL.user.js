// ==UserScript==
// @name         Extractor de Reporte VDF (MC y DOWN) con MAIL
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Filtra, consolida filas y copia tabla en formato enriquecido para correo
// @match        http://mxmefm01.wnet/private/zc/tools/smc/edt_icfs*
// @grant        GM_setClipboard
// @run-at       document-idle
// ==/UserScript==

(function() {
  'use strict';

  // Configuración de columnas
  const configuracionColumnas = [
    { titulo: "aging", origen: "aging", exacto: true },
    { titulo: "Prio", origen: "Prio", exacto: true },
    { titulo: "codigo_oceane", origen: "codigo_oceane", exacto: true },
    { titulo: "fecha_creacion", origen: "fecha_creacion", exacto: true },
    { titulo: "fecha_inicio", origen: "fecha_inicio", exacto: true },
    { titulo: "tipo_icf", origen: "tipo_icf", exacto: true },
    { titulo: "ICF_RED", origen: "ICF_RED", exacto: true },
    { titulo: "causa_especif", origen: "causa_especif", exacto: false },
    { titulo: "VODAFONE", origen: "Prevision", exacto: false },
    { titulo: "Nivel de escalado 3PP", origen: "escalado_3PP", exacto: false },
    { titulo: "causa", origen: "causa", exacto: true },
    { titulo: "Nodo", origen: "Nodo", exacto: true },
    { titulo: "Celda", origen: "Celda", exacto: true },
    { titulo: "caso_asociado", origen: "caso_asociado", exacto: true },
    { titulo: "ResponsableICF", origen: "ResponsableICF", exacto: true }
  ];

  let bufferFilas = new Map();

  function setInput(placeholderText, value) {
    const input = document.querySelector(`input.im[placeholder="${placeholderText}"]`) ||
                  document.querySelector(`input[placeholder*="${placeholderText}"]`);

    if (!input) {
      console.warn(`No se encontró el input con placeholder: ${placeholderText}`);
      return false;
    }

    input.focus();
    input.value = value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    input.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'Enter', keyCode: 13 }));
    input.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, key: 'Enter', keyCode: 13 }));
    input.blur();
    return true;
  }

  const wait = (ms) => new Promise(res => setTimeout(res, ms));

  async function esperarCargaCompleta(delayBase = 4500) {
    const inicio = Date.now();
    while (Date.now() - inicio < delayBase) {
      const cargando = document.querySelector('.dataTables_processing[style*="display: block"]');
      if (!cargando && (Date.now() - inicio >= delayBase)) break;
      await wait(300);
    }
  }

  function resolverIndices(tabla) {
    const ths = Array.from(tabla.querySelectorAll('thead tr:first-child th, thead tr:first-child td'));
    return configuracionColumnas.map(col => {
      const idx = ths.findIndex(th => {
        const texto = th.innerText.replace(/\s+/g, ' ').trim().toLowerCase();
        const placeholder = (th.querySelector('input')?.getAttribute('placeholder') || '').toLowerCase();
        const buscado = col.origen.toLowerCase();

        if (col.exacto) {
          return texto === buscado ||
                 placeholder === `search ${buscado}` ||
                 placeholder === buscado;
        } else {
          return texto.includes(buscado) || placeholder.includes(buscado);
        }
      });
      return idx;
    });
  }

  function capturarFilasVisibles() {
    const tabla = document.querySelector('table.dataTable') || document.querySelector('table');
    if (!tabla) {
      alert("No se encontró la tabla de datos.");
      return 0;
    }

    const indices = resolverIndices(tabla);
    const filas = tabla.querySelectorAll('tbody tr');
    let nuevas = 0;

    filas.forEach(tr => {
      if (tr.querySelector('td.dataTables_empty') || tr.innerText.includes('No matching') || tr.innerText.includes('Loading')) return;

      const tds = Array.from(tr.querySelectorAll('td'));
      if (tds.length <= 3) return;

      const filaDatos = indices.map(idx => {
        return (idx !== -1 && tds[idx]) ? tds[idx].innerText.trim() : '';
      });

      const claveUnica = filaDatos[2] || JSON.stringify(filaDatos);
      if (!bufferFilas.has(claveUnica)) {
        bufferFilas.set(claveUnica, filaDatos);
        nuevas++;
      }
    });

    return nuevas;
  }

  async function aplicarFiltro(tipoCausa, boton) {
    if (boton) boton.innerText = "Cargando...";

    setInput("Search Devuelta", "NO");
    setInput("Search ResponsableICF", "VDF");
    setInput("Search causa", tipoCausa);

    await esperarCargaCompleta(4500);

    const agregadas = capturarFilasVisibles();
    actualizarContador();

    if (boton) {
      boton.innerText = (tipoCausa === "MC") ? "1. Filtrar y Guardar MC" : "2. Filtrar y Guardar DOWN";
    }

    alert(`Filtro "${tipoCausa}" procesado.\nFilas añadidas: ${agregadas}\nTotal acumulado: ${bufferFilas.size}`);
  }

  function construirHTMLTabla() {
    let theadHtml = configuracionColumnas.map(col =>
      `<th style="background-color: #1e7e34; color: #ffffff; font-family: Segoe UI, Arial, sans-serif; font-size: 11px; font-weight: 600; padding: 7px 9px; border: 1px solid #dcdcdc; text-align: left; white-space: nowrap;">${col.titulo}</th>`
    ).join('');

    let tbodyHtml = '';
    let filaIndex = 0;

    bufferFilas.forEach(fila => {
      const bgColor = (filaIndex % 2 === 0) ? '#ffffff' : '#f8f9fa';
      tbodyHtml += `<tr style="background-color: ${bgColor};">`;

      fila.forEach((valor, colIdx) => {
        const esCasoAsociado = (configuracionColumnas[colIdx].titulo === "caso_asociado");
        const celdaColor = esCasoAsociado ? 'background-color: #fff3cd; color: #856404; font-weight: bold;' : 'color: #212529;';

        tbodyHtml += `<td style="padding: 6px 9px; border: 1px solid #dee2e6; font-family: Segoe UI, Arial, sans-serif; font-size: 11px; vertical-align: middle; ${celdaColor}">${valor.replace(/\n/g, '<br>')}</td>`;
      });

      tbodyHtml += '</tr>';
      filaIndex++;
    });

    return `<table style="border-collapse: collapse; width: 100%; border: 1px solid #dee2e6; background-color: #ffffff; margin: 8px 0;">
      <thead><tr>${theadHtml}</tr></thead>
      <tbody>${tbodyHtml}</tbody>
    </table>`;
  }

  function generarCuerpoCorreoCompleto() {
    const tabla = construirHTMLTabla();
    return `<div style="font-family: Segoe UI, Arial, sans-serif; font-size: 13px; color: #000000; line-height: 1.5;">
      <p>Buenos días @MASORANGE, IMaccytransp @Escalado N3</p>
      <p>Para los casos de la tabla marcados en <span style="background-color: #fff3cd; font-weight: bold; color: #856404; padding: 1px 4px;">amarillo</span>, actualmente en N1 Y N2, ¿podéis por favor gestionar el escalado al nivel correspondiente de <span style="background-color: #fff3cd; font-weight: bold; color: #856404; padding: 1px 4px;">VDF</span> y darnos previsión? (el TT Huawei escalado a <span style="background-color: #fff3cd; font-weight: bold; color: #856404; padding: 1px 4px;">VDF</span> aparece en la columna “caso_asociado”)</p>
      ${tabla}
      <p>Un saludo.</p>
    </div>`;
  }

  function obtenerFechaActualFormato() {
    const hoy = new Date();
    const dia = String(hoy.getDate()).padStart(2, '0');
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    return `${dia}/${mes}`;
  }

  async function prepararReporteYOutlook() {
    if (bufferFilas.size === 0) {
      alert("No hay registros en memoria. Filtra primero por MC y DOWN.");
      return;
    }

    const htmlCompleto = generarCuerpoCorreoCompleto();

    // 1. Copiar contenido enriquecido (texto + tabla con estilos) al portapapeles
    try {
      const blobHtml = new Blob([htmlCompleto], { type: 'text/html' });
      const blobText = new Blob([htmlCompleto.replace(/<[^>]+>/g, '')], { type: 'text/plain' });
      const data = [new ClipboardItem({ 'text/html': blobHtml, 'text/plain': blobText })];
      await navigator.clipboard.write(data);
    } catch (err) {
      const divOculto = document.createElement('div');
      divOculto.style.position = 'fixed';
      divOculto.style.left = '-9999px';
      divOculto.innerHTML = htmlCompleto;
      document.body.appendChild(divOculto);

      const range = document.createRange();
      range.selectNodeContents(divOculto);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      document.execCommand('copy');
      document.body.removeChild(divOculto);
    }

    // 2. Destinatarios y asunto con el día actual
    const para = "imaccytransp.masorange@masorange.es; n3.masorange@masorange.es; gloria.arias@masorange.es";
    const cc = "net.cso@masorange.es; icf@iatelecom.es; Fernando Martin Rodriguez";
    const asunto = `NODOS DOWN/MC VDF ${obtenerFechaActualFormato()}`;

    // 3. Abrir la aplicación instalada de Outlook mediante mailto
    const mailtoUrl = `mailto:${encodeURIComponent(para)}?cc=${encodeURIComponent(cc)}&subject=${encodeURIComponent(asunto)}`;
    window.location.href = mailtoUrl;

    alert(`¡Reporte preparado!\n\n1. Asunto: ${asunto}\n2. Se ha abierto la aplicación de Outlook con Para, CC y Asunto listos.\n3. El texto y la tabla están copiados: pulsa Ctrl + V en el cuerpo del correo.`);
  }

  function iniciarPanel() {
    if (document.getElementById('report-tool-panel')) return;

    const panel = document.createElement('div');
    panel.id = 'report-tool-panel';
    panel.style.cssText = `
      position: fixed;
      top: 15px;
      right: 15px;
      z-index: 9999999;
      background: #ffffff;
      border: 2px solid #1e7e34;
      padding: 12px;
      border-radius: 6px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.25);
      display: flex;
      flex-direction: column;
      gap: 8px;
      color: #333;
      font-family: Segoe UI, Arial, sans-serif;
      font-size: 12px;
      min-width: 200px;
    `;

    panel.innerHTML = `
      <div style="font-weight:bold; color:#1e7e34; text-align:center; font-size:13px;">Extractor de Reporte</div>
      <div id="status-cache" style="color:#666; text-align:center; font-size:11px;">Filas acumuladas: 0</div>
      <button id="btn-filtro-mc" style="background:#1e7e34; color:#fff; border:none; padding:7px; cursor:pointer; border-radius:4px; font-weight:bold;">1. Filtrar y Guardar MC</button>
      <button id="btn-filtro-down" style="background:#1e7e34; color:#fff; border:none; padding:7px; cursor:pointer; border-radius:4px; font-weight:bold;">2. Filtrar y Guardar DOWN</button>
      <button id="btn-preparar-correo" style="background:#0056b3; color:#fff; border:none; padding:8px; cursor:pointer; font-weight:bold; border-radius:4px;">✉️ 3. Preparar Reporte</button>
      <button id="btn-borrar-cache" style="background:#6c757d; color:#fff; border:none; padding:4px; cursor:pointer; font-size:10px; border-radius:3px;">Vaciar Memoria</button>
    `;

    document.body.appendChild(panel);

    document.getElementById('btn-filtro-mc').onclick = function() { aplicarFiltro("MC", this); };
    document.getElementById('btn-filtro-down').onclick = function() { aplicarFiltro("DOWN", this); };
    document.getElementById('btn-preparar-correo').onclick = prepararReporteYOutlook;
    document.getElementById('btn-borrar-cache').onclick = () => {
      bufferFilas.clear();
      actualizarContador();
      alert("Memoria vaciada.");
    };
  }

  function actualizarContador() {
    const el = document.getElementById('status-cache');
    if (el) el.innerText = `Filas acumuladas: ${bufferFilas.size}`;
  }

  // Comprobar que el DOM esté listo antes de montar la interfaz
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarPanel);
  } else {
    iniciarPanel();
  }
})();