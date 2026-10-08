// ==UserScript==
// @name         Extractor Reporte Bloqueos (GESTION DE BLOQUEOS)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Filtra por GESTION DE BLOQUEOS y Devuelta NO, guarda y copia la tabla para correo
// @match        http://mxmefm01.wnet/private/zc/tools/smc/edt_icfs*
// @grant        GM_setClipboard
// @run-at       document-idle
// ==/UserScript==

(function() {
  'use strict';

  // Configuración de las 16 columnas exactas de la captura
  const configuracionColumnas = [
    { titulo: "aging", origen: "aging", exacto: true },
    { titulo: "Prio", origen: "Prio", exacto: true },
    { titulo: "codigo_oceane", origen: "codigo_oceane", exacto: true },
    { titulo: "fecha_creacion", origen: "fecha_creacion", exacto: true },
    { titulo: "fecha_inicio", origen: "fecha_inicio", exacto: true },
    { titulo: "tipo_icf", origen: "tipo_icf", exacto: true },
    { titulo: "ICF_RED", origen: "ICF_RED", exacto: true },
    { titulo: "causa_especif", origen: "causa_especif", exacto: false },
    { titulo: "Prevision", origen: "Prevision", exacto: false },
    { titulo: "causa", origen: "causa", exacto: true },
    { titulo: "Nodo", origen: "Nodo", exacto: true },
    { titulo: "Celda", origen: "Celda", exacto: true },
    { titulo: "site", origen: "site", exacto: true },
    { titulo: "caso_asociado", origen: "caso_asociado", exacto: true },
    { titulo: "ResponsableICF", origen: "ResponsableICF", exacto: true },
    { titulo: "Siebel", origen: "Siebel", exacto: true }
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

      // Clave única basada en codigo_oceane (columna índice 2)
      const claveUnica = filaDatos[2] || JSON.stringify(filaDatos);
      if (!bufferFilas.has(claveUnica)) {
        bufferFilas.set(claveUnica, filaDatos);
        nuevas++;
      }
    });

    return nuevas;
  }

  async function aplicarFiltroBloqueos(boton) {
    if (boton) boton.innerText = "Cargando...";

    // Limpiar causa por si tenía un filtro previo de la otra herramienta
    setInput("Search causa", "");
    setInput("Search Devuelta", "NO");
    setInput("Search ResponsableICF", "GESTION DE BLOQUEOS");

    await esperarCargaCompleta(4500);

    const agregadas = capturarFilasVisibles();
    actualizarContador();

    if (boton) boton.innerText = "1. Filtrar y Guardar Bloqueos";

    alert(`Filtro procesado.\nFilas añadidas: ${agregadas}\nTotal acumulado: ${bufferFilas.size}`);
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
        // En esta tabla se resalta la columna ResponsableICF
        const esResponsable = (configuracionColumnas[colIdx].titulo === "ResponsableICF");
        const celdaColor = esResponsable
          ? 'background-color: #fff3cd; color: #856404; font-weight: bold;'
          : 'color: #212529;';

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

  async function copiarAlPortapapeles() {
    if (bufferFilas.size === 0) {
      alert("No hay registros en memoria. Pulsa primero el botón de filtrar.");
      return;
    }

    const htmlTabla = construirHTMLTabla();

    try {
      const blobHtml = new Blob([htmlTabla], { type: 'text/html' });
      const blobText = new Blob([htmlTabla.replace(/<[^>]+>/g, '\t')], { type: 'text/plain' });
      const data = [new ClipboardItem({ 'text/html': blobHtml, 'text/plain': blobText })];

      await navigator.clipboard.write(data);
      alert("¡Tabla copiada con éxito!\n\nVe a tu correo y pulsa Ctrl + V para pegarla.");
    } catch (err) {
      const divOculto = document.createElement('div');
      divOculto.style.position = 'fixed';
      divOculto.style.left = '-9999px';
      divOculto.innerHTML = htmlTabla;
      document.body.appendChild(divOculto);

      const range = document.createRange();
      range.selectNodeContents(divOculto);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      document.execCommand('copy');
      document.body.removeChild(divOculto);

      alert("¡Tabla copiada con éxito!\n\nVe a tu correo y pulsa Ctrl + V para pegarla.");
    }
  }

  function iniciarPanel() {
    if (document.getElementById('report-tool-bloqueos-panel')) return;

    const panel = document.createElement('div');
    panel.id = 'report-tool-bloqueos-panel';
    panel.style.cssText = `
      position: fixed;
      top: 15px;
      right: 230px;
      z-index: 9999999;
      background: #ffffff;
      border: 2px solid #856404;
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
      <div style="font-weight:bold; color:#856404; text-align:center; font-size:13px;">Reporte Bloqueos</div>
      <div id="status-cache-bloqueos" style="color:#666; text-align:center; font-size:11px;">Filas acumuladas: 0</div>
      <button id="btn-filtro-bloqueos" style="background:#856404; color:#fff; border:none; padding:7px; cursor:pointer; border-radius:4px; font-weight:bold;">1. Filtrar y Guardar Bloqueos</button>
      <button id="btn-copiar-bloqueos" style="background:#0056b3; color:#fff; border:none; padding:8px; cursor:pointer; font-weight:bold; border-radius:4px;">📋 2. Copiar para Correo</button>
      <button id="btn-borrar-bloqueos" style="background:#6c757d; color:#fff; border:none; padding:4px; cursor:pointer; font-size:10px; border-radius:3px;">Vaciar Memoria</button>
    `;

    document.body.appendChild(panel);

    document.getElementById('btn-filtro-bloqueos').onclick = function() { aplicarFiltroBloqueos(this); };
    document.getElementById('btn-copiar-bloqueos').onclick = copiarAlPortapapeles;
    document.getElementById('btn-borrar-bloqueos').onclick = () => {
      bufferFilas.clear();
      actualizarContador();
      alert("Memoria vaciada.");
    };
  }

  function actualizarContador() {
    const el = document.getElementById('status-cache-bloqueos');
    if (el) el.innerText = `Filas acumuladas: ${bufferFilas.size}`;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarPanel);
  } else {
    iniciarPanel();
  }
})();