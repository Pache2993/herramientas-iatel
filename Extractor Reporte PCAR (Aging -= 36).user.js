// ==UserScript==
// @name         Extractor Reporte PCAR (Aging >= 36)
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Filtra por Devuelta NO, Causa PCAR y aging >= 36. Panel no bloqueante para estado vacío.
// @match        http://mxmefm01.wnet/private/zc/tools/smc/edt_icfs*
// @grant        GM_setClipboard
// @run-at       document-idle
// ==/UserScript==

(function() {
  'use strict';

  const configuracionColumnas = [
    { titulo: "aging", origen: "aging", exacto: true },
    { titulo: "codigo_oceane", origen: "codigo_oceane", exacto: true },
    { titulo: "fecha_creacion", origen: "fecha_creacion", exacto: true },
    { titulo: "tipo_icf", origen: "tipo_icf", exacto: true },
    { titulo: "ICF_RED", origen: "ICF_RED", exacto: true },
    { titulo: "Nodo", origen: "Nodo", exacto: true },
    { titulo: "Celda", origen: "Celda", exacto: true },
    { titulo: "caso_asociado", origen: "caso_asociado", exacto: true },
    { titulo: "ResponsableICF", origen: "ResponsableICF", exacto: true },
    { titulo: "RS", origen: "RS", exacto: true },
    { titulo: "status", origen: "status", exacto: true },
    { titulo: "descripcion", origen: "descripcion", exacto: true },
    { titulo: "IATEL ACTUALIZACIONES DE ESTADO", origen: "causa_especif", exacto: false }
  ];

  let bufferFilas = new Map();

  function setInput(placeholderText, value) {
    const input = document.querySelector(`input.im[placeholder="${placeholderText}"]`) ||
                  document.querySelector(`input[placeholder*="${placeholderText}"]`);

    if (!input) {
      console.warn(`No se encontró el input: ${placeholderText}`);
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

  function pedirDatosEnPanelFlotante(filasPendientes) {
    return new Promise(resolve => {
      if (document.getElementById('modal-iatel-flotante')) {
        document.getElementById('modal-iatel-flotante').remove();
      }

      const modal = document.createElement('div');
      modal.id = 'modal-iatel-flotante';
      modal.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 480px;
        max-height: 80vh;
        background: #ffffff;
        border: 2px solid #9c6500;
        border-radius: 8px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.35);
        z-index: 99999999;
        display: flex;
        flex-direction: column;
        font-family: Segoe UI, Arial, sans-serif;
        font-size: 12px;
      `;

      let itemsHtml = '';
      filasPendientes.forEach((item, index) => {
        itemsHtml += `
          <div style="border-bottom: 1px solid #e0e0e0; padding: 10px 0;">
            <div style="font-weight: bold; color: #9c6500; margin-bottom: 4px;">
              [${index + 1}/${filasPendientes.length}] Océane: <span style="user-select: all; background: #eee; padding: 1px 4px; border-radius: 3px; color: #111;">${item.codigoOceane}</span>
              <span style="color: #666; font-weight: normal; font-size: 11px;">(Aging: ${item.aging} | Fecha: ${item.fecha})</span>
            </div>
            <div style="color: #555; font-size: 11px; margin-bottom: 5px; max-height: 40px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${item.descripcion}">
              ${item.descripcion || 'Sin descripción'}
            </div>
            <textarea id="iatel-input-${index}" placeholder="Escribe aquí IATEL ACTUALIZACIONES DE ESTADO..." style="width: 96%; height: 50px; font-family: inherit; font-size: 11px; padding: 6px; border: 1px solid #ccc; border-radius: 4px; resize: vertical;"></textarea>
          </div>
        `;
      });

      modal.innerHTML = `
        <div style="background: #9c6500; color: #fff; padding: 10px 14px; font-weight: bold; border-top-left-radius: 6px; border-top-right-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
          <span>Rellenar Estado IATEL (Aging ≥ 36)</span>
          <span style="font-size: 10px; font-weight: normal; opacity: 0.9;">Puedes usar la web libremente</span>
        </div>
        <div style="overflow-y: auto; padding: 10px 14px; flex: 1;">
          ${itemsHtml}
        </div>
        <div style="padding: 10px 14px; background: #f8f9fa; border-top: 1px solid #e0e0e0; display: flex; justify-content: flex-end; gap: 8px;">
          <button id="btn-cancelar-iatel" style="background: #6c757d; color: #fff; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">Omitir</button>
          <button id="btn-guardar-iatel" style="background: #1e7e34; color: #fff; border: none; padding: 6px 16px; border-radius: 4px; font-weight: bold; cursor: pointer;">Guardar y Continuar</button>
        </div>
      `;

      document.body.appendChild(modal);

      document.getElementById('btn-guardar-iatel').onclick = () => {
        filasPendientes.forEach((item, index) => {
          const val = document.getElementById(`iatel-input-${index}`).value.trim();
          if (val) {
            item.fila[12] = val;
          }
        });
        modal.remove();
        resolve(true);
      };

      document.getElementById('btn-cancelar-iatel').onclick = () => {
        modal.remove();
        resolve(false);
      };
    });
  }

  async function capturarFilasVisibles() {
    const tabla = document.querySelector('table.dataTable') || document.querySelector('table');
    if (!tabla) {
      alert("No se encontró la tabla de datos.");
      return 0;
    }

    const indices = resolverIndices(tabla);
    const filas = tabla.querySelectorAll('tbody tr');
    let listaFilasTemp = [];
    let filasSinEstado = [];

    filas.forEach(tr => {
      if (tr.querySelector('td.dataTables_empty') || tr.innerText.includes('No matching') || tr.innerText.includes('Loading')) return;

      const tds = Array.from(tr.querySelectorAll('td'));
      if (tds.length <= 3) return;

      const filaDatos = indices.map(idx => {
        return (idx !== -1 && tds[idx]) ? tds[idx].innerText.trim() : '';
      });

      // Validar aging >= 36 (índice 0)
      const agingTexto = (filaDatos[0] || '').replace(',', '.');
      const agingNumero = parseFloat(agingTexto);

      // Si no es un número válido o es menor de 36, se descarta
      if (isNaN(agingNumero) || agingNumero < 36) {
        return;
      }

      listaFilasTemp.push(filaDatos);

      // Revisar si falta estado (columna 12)
      const estadoActual = filaDatos[12];
      if (!estadoActual || estadoActual.trim() === '') {
        filasSinEstado.push({
          codigoOceane: filaDatos[1] || 'Sin Código',
          fecha: filaDatos[2] || '',
          aging: filaDatos[0] || '',
          descripcion: filaDatos[11] || '',
          fila: filaDatos
        });
      }
    });

    if (filasSinEstado.length > 0) {
      await pedirDatosEnPanelFlotante(filasSinEstado);
    }

    let nuevas = 0;
    listaFilasTemp.forEach(filaDatos => {
      const claveUnica = filaDatos[1] || JSON.stringify(filaDatos);
      if (!bufferFilas.has(claveUnica)) {
        bufferFilas.set(claveUnica, filaDatos);
        nuevas++;
      }
    });

    return nuevas;
  }

  async function aplicarFiltroPCAR(boton) {
    if (boton) boton.innerText = "Cargando...";

    setInput("Search ResponsableICF", "");
    setInput("Search Devuelta", "NO");
    setInput("Search causa", "PCAR");

    await esperarCargaCompleta(4500);

    if (boton) boton.innerText = "1. Filtrar y Guardar PCAR";

    const agregadas = await capturarFilasVisibles();
    actualizarContador();

    alert(`Filtro "PCAR" completado.\nFilas añadidas (Aging ≥ 36): ${agregadas}\nTotal acumulado: ${bufferFilas.size}`);
  }

  function construirHTMLTabla() {
    let theadHtml = configuracionColumnas.map(col =>
      `<th style="background-color: #9c6500; color: #ffffff; font-family: Segoe UI, Arial, sans-serif; font-size: 11px; font-weight: 600; padding: 7px 9px; border: 1px solid #7d5200; text-align: left; white-space: nowrap;">${col.titulo}</th>`
    ).join('');

    let tbodyHtml = '';
    let filaIndex = 0;

    bufferFilas.forEach(fila => {
      const bgColor = (filaIndex % 2 === 0) ? '#ffffff' : '#f8f9fa';
      tbodyHtml += `<tr style="background-color: ${bgColor};">`;

      fila.forEach((valor, colIdx) => {
        const esAging = (configuracionColumnas[colIdx].titulo === "aging");

        let estiloCelda = 'color: #212529;';
        if (esAging) {
          estiloCelda = 'background-color: #b71c1c; color: #ffffff; font-weight: bold; text-align: center;';
        }

        tbodyHtml += `<td style="padding: 6px 9px; border: 1px solid #dee2e6; font-family: Segoe UI, Arial, sans-serif; font-size: 11px; vertical-align: middle; ${estiloCelda}">${valor.replace(/\n/g, '<br>')}</td>`;
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
      alert("No hay registros en memoria. Filtra primero por PCAR.");
      return;
    }

    const htmlTabla = construirHTMLTabla();

    try {
      const blobHtml = new Blob([htmlTabla], { type: 'text/html' });
      const blobText = new Blob([htmlTabla.replace(/<[^>]+>/g, '\t')], { type: 'text/plain' });
      const data = [new ClipboardItem({ 'text/html': blobHtml, 'text/plain': blobText })];

      await navigator.clipboard.write(data);
      alert("¡Tabla PCAR copiada con éxito!\n\nVe a tu correo y pulsa Ctrl + V para pegarla.");
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

      alert("¡Tabla PCAR copiada con éxito!\n\nVe a tu correo y pulsa Ctrl + V para pegarla.");
    }
  }

  function iniciarPanel() {
    if (document.getElementById('report-tool-pcar-panel')) return;

    const panel = document.createElement('div');
    panel.id = 'report-tool-pcar-panel';
    panel.style.cssText = `
      position: fixed;
      top: 15px;
      right: 445px;
      z-index: 9999999;
      background: #ffffff;
      border: 2px solid #9c6500;
      padding: 12px;
      border-radius: 6px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.25);
      display: flex;
      flex-direction: column;
      gap: 8px;
      color: #333;
      font-family: Segoe UI, Arial, sans-serif;
      font-size: 12px;
      min-width: 195px;
    `;

    panel.innerHTML = `
      <div style="font-weight:bold; color:#9c6500; text-align:center; font-size:13px;">Reporte PCAR (≥36)</div>
      <div id="status-cache-pcar" style="color:#666; text-align:center; font-size:11px;">Filas acumuladas: 0</div>
      <button id="btn-filtro-pcar" style="background:#9c6500; color:#fff; border:none; padding:7px; cursor:pointer; border-radius:4px; font-weight:bold;">1. Filtrar y Guardar PCAR</button>
      <button id="btn-copiar-pcar" style="background:#0056b3; color:#fff; border:none; padding:8px; cursor:pointer; font-weight:bold; border-radius:4px;">📋 2. Copiar para Correo</button>
      <button id="btn-borrar-pcar" style="background:#6c757d; color:#fff; border:none; padding:4px; cursor:pointer; font-size:10px; border-radius:3px;">Vaciar Memoria</button>
    `;

    document.body.appendChild(panel);

    document.getElementById('btn-filtro-pcar').onclick = function() { aplicarFiltroPCAR(this); };
    document.getElementById('btn-copiar-pcar').onclick = copiarAlPortapapeles;
    document.getElementById('btn-borrar-pcar').onclick = () => {
      bufferFilas.clear();
      actualizarContador();
      alert("Memoria vaciada.");
    };
  }

  function actualizarContador() {
    const el = document.getElementById('status-cache-pcar');
    if (el) el.innerText = `Filas acumuladas: ${bufferFilas.size}`;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarPanel);
  } else {
    iniciarPanel();
  }
})();