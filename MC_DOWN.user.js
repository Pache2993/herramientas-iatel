// ==UserScript==
// @name          Extractor de Reporte VDF (MC y DOWN) con MAIL
// @namespace     http://tampermonkey.net/
// @version       2.0
// @description   Filtra, consolida filas y copia tabla en formato enriquecido para correo con diseño IATelecom
// @match         http://mxmefm01.wnet/private/zc/tools/smc/edt_icfs*
// @grant         GM_setClipboard
// @run-at        document-idle
// ==/UserScript==

(function() {
  'use strict';

  // =====================================================================
  // IATELECOM DESIGN SYSTEM - LOGO & ASSETS VECTORIALES
  // =====================================================================

  const IADS_LOGO_SVG = `
    <svg class="ia-logo-svg" viewBox="0 0 420 100" fill="none" xmlns="http://www.w3.org/2000/svg" height="20" aria-label="IATelecom">
      <defs>
        <linearGradient id="iaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00c6ff" />
          <stop offset="100%" stop-color="#0072ff" />
        </linearGradient>
      </defs>
      <path d="M22 68 A 36 36 0 0 1 22 28" stroke="url(#iaGrad)" stroke-width="8" stroke-linecap="round"/>
      <path d="M36 60 A 24 24 0 0 1 36 36" stroke="url(#iaGrad)" stroke-width="8" stroke-linecap="round"/>
      <circle cx="50" cy="48" r="7" fill="url(#iaGrad)"/>
      <text x="75" y="62" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="44" fill="#ffffff" letter-spacing="-0.5">IA<tspan fill="url(#iaGrad)">Telecom</tspan></text>
    </svg>
  `;

  const IADS_ICONS = {
    'mail':      '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    'filter':    '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    'trash':     '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    'minimize':  '<path d="M4 14h6v6M20 10h-6V4"/>',
    'maximize':  '<path d="M14 4h6v6M10 20H4v-6"/>',
    'x':         '<path d="M18 6 6 18M6 6l12 12"/>',
    'radio':     '<circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>'
  };

  function iaIcon(name, size = 14) {
    return `<svg class="ia-icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IADS_ICONS[name] || ''}</svg>`;
  }

  const IADS_CSS = `
    :host { all: initial; }
    *, *::before, *::after { box-sizing: border-box; }

    :host {
      --ia-brand-500: #0099ff;
      --ia-brand-600: #007acc;
      --ia-brand-glow: rgba(0, 153, 255, 0.35);
      --ia-brand-soft: rgba(0, 153, 255, 0.12);
      --ia-success: #3fb950;
      --ia-danger: #f85149;
      --ia-surface-panel: rgba(13, 17, 23, 0.95);
      --ia-surface-item: rgba(255, 255, 255, 0.04);
      --ia-hover: rgba(255, 255, 255, 0.08);
      --ia-border: rgba(255, 255, 255, 0.12);
      --ia-text: #f0f6fc;
      --ia-text-2: #c9d1d9;
      --ia-text-3: #8b949e;
      --ia-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      --ia-mono: "JetBrains Mono", "SF Mono", Consolas, monospace;
      --ia-r-sm: 4px;
      --ia-r-md: 6px;
      --ia-r-lg: 10px;
      --ia-sh-panel: 0 16px 40px rgba(0, 0, 0, 0.65), 0 0 1px rgba(255, 255, 255, 0.2);
      --ia-ease: cubic-bezier(0.16, 1, 0.3, 1);
      --ia-z-top: 2147483647;
    }

    .ia-side-panel {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 330px;
      background: var(--ia-surface-panel);
      backdrop-filter: blur(16px) saturate(180%);
      -webkit-backdrop-filter: blur(16px) saturate(180%);
      border: 1px solid var(--ia-border);
      border-radius: var(--ia-r-lg);
      box-shadow: var(--ia-sh-panel);
      color: var(--ia-text);
      font-family: var(--ia-font);
      z-index: var(--ia-z-top);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: all 0.25s var(--ia-ease);
    }

    .ia-side-panel.is-minimized {
      max-height: 48px !important;
      width: 290px;
    }

    .ia-panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      background: rgba(255, 255, 255, 0.02);
      border-bottom: 1px solid var(--ia-border);
      user-select: none;
    }
    .ia-panel-brand {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .ia-logo-svg {
      display: block;
      height: 18px;
      width: auto;
    }
    .ia-badge {
      font-size: 10px;
      font-family: var(--ia-mono);
      background: var(--ia-brand-soft);
      color: var(--ia-brand-500);
      border: 1px solid var(--ia-brand-glow);
      padding: 2px 6px;
      border-radius: 10px;
    }

    .ia-actions {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .ia-icon-btn {
      background: transparent;
      border: none;
      color: var(--ia-text-3);
      width: 26px;
      height: 26px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--ia-r-sm);
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .ia-icon-btn:hover {
      color: var(--ia-text);
      background: var(--ia-hover);
    }
    .ia-icon-btn.btn-close:hover {
      color: var(--ia-danger);
      background: rgba(248, 81, 73, 0.15);
    }

    .ia-panel-body {
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .ia-status-box {
      background: var(--ia-surface-item);
      border: 1px solid var(--ia-border);
      border-radius: var(--ia-r-md);
      padding: 8px 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 11px;
      color: var(--ia-text-2);
    }
    .ia-status-num {
      font-family: var(--ia-mono);
      font-weight: 700;
      color: var(--ia-brand-500);
    }

    .ia-btn {
      width: 100%;
      height: 32px;
      border-radius: var(--ia-r-md);
      font-family: var(--ia-font);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: all 0.18s var(--ia-ease);
      border: 1px solid transparent;
    }

    .ia-btn-primary {
      background: var(--ia-brand-500);
      border-color: var(--ia-brand-500);
      color: #ffffff;
    }
    .ia-btn-primary:hover {
      background: var(--ia-brand-600);
      box-shadow: 0 0 12px var(--ia-brand-glow);
    }

    .ia-btn-outline {
      background: rgba(255, 255, 255, 0.04);
      border-color: var(--ia-border);
      color: var(--ia-text);
    }
    .ia-btn-outline:hover {
      background: var(--ia-hover);
      border-color: var(--ia-brand-500);
      color: var(--ia-brand-500);
    }

    .ia-btn-danger-outline {
      background: transparent;
      border-color: rgba(248, 81, 73, 0.25);
      color: var(--ia-text-3);
      height: 26px;
      font-size: 11px;
    }
    .ia-btn-danger-outline:hover {
      background: rgba(248, 81, 73, 0.12);
      border-color: var(--ia-danger);
      color: var(--ia-danger);
    }

    .ia-spinner {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 2px solid var(--ia-brand-glow);
      border-top-color: var(--ia-brand-500);
      animation: ia-spin 0.7s linear infinite;
    }
    @keyframes ia-spin { to { transform: rotate(360deg); } }
  `;

  // =====================================================================
  // CONFIGURACIÓN DE COLUMNAS & LÓGICA
  // =====================================================================

  const configuracionColumnas = [
    { titulo: "aging", origen: "aging", exacto: true },
    { titulo: "Prio", origen: "Prio", exacto: true },
    { titulo: "codigo_oceane", origen: "codigo_oceane", exacto: true },
    { titulo: "fecha_creacion", origen: "fecha_creacion", exacto: true },
    { titulo: "fecha_inicio", origen: "fecha_inicio", exacto: true },
    { titulo: "tipo_icf", origen: "tipo_icf", exacto: true },
    { titulo: "ICF_RED", origen: "ICF_RED", exacto: true },
    { titulo: "causa_especif", origen: "causa_especif", exacto: true },
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
        if (idx === -1 || !tds[idx]) return '';

        const celda = tds[idx];
        const elementoConTitle = celda.querySelector('[title]');
        if (elementoConTitle && elementoConTitle.getAttribute('title').trim()) {
          return elementoConTitle.getAttribute('title').trim();
        }

        if (celda.getAttribute('title') && celda.getAttribute('title').trim()) {
          return celda.getAttribute('title').trim();
        }

        return celda.innerText.trim();
      });

      const claveUnica = filaDatos[2] || JSON.stringify(filaDatos);
      if (!bufferFilas.has(claveUnica)) {
        bufferFilas.set(claveUnica, filaDatos);
        nuevas++;
      }
    });

    return nuevas;
  }

  function construirHTMLTabla() {
    // Cabecera unificada en azul #0288d1
    let theadHtml = configuracionColumnas.map(col =>
      `<th style="background-color: #0288d1; color: #ffffff; font-family: Segoe UI, Arial, sans-serif; font-size: 11px; font-weight: 600; padding: 7px 9px; border: 1px solid #777; text-align: left; white-space: nowrap;">${col.titulo}</th>`
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

    const para = "imaccytransp.masorange@masorange.es; n3.masorange@masorange.es; gloria.arias@masorange.es";
    const cc = "net.cso@masorange.es; icf@iatelecom.es; Fernando Martin Rodriguez";
    const asunto = `NODOS DOWN/MC VDF ${obtenerFechaActualFormato()}`;

    const mailtoUrl = `mailto:${encodeURIComponent(para)}?cc=${encodeURIComponent(cc)}&subject=${encodeURIComponent(asunto)}`;
    window.location.href = mailtoUrl;

    alert(`¡Reporte preparado!\n\n1. Asunto: ${asunto}\n2. Se ha abierto la aplicación de Outlook con Para, CC y Asunto listos.\n3. El texto y la tabla están copiados: pulsa Ctrl + V en el cuerpo del correo.`);
  }

  // =====================================================================
  // PANEL SHADOW DOM (IATelecom Design)
  // =====================================================================

  function iniciarPanel() {
    if (document.getElementById('reporte-vdf-host')) return;

    const host = document.createElement('div');
    host.id = 'reporte-vdf-host';
    document.body.appendChild(host);

    const shadowRoot = host.attachShadow({ mode: 'open' });

    const styleEl = document.createElement('style');
    styleEl.textContent = IADS_CSS;
    shadowRoot.appendChild(styleEl);

    const panel = document.createElement('div');
    panel.id = 'ia-side-panel';
    panel.className = 'ia-side-panel';

    panel.innerHTML = `
      <div class="ia-panel-header">
        <div class="ia-panel-brand">
          ${IADS_LOGO_SVG}
          <span class="ia-badge">${iaIcon('radio', 10)} VDF (MC/DOWN)</span>
        </div>
        <div class="ia-actions">
          <button id="btn-minimize-panel" class="ia-icon-btn" title="Minimizar / Restaurar">${iaIcon('minimize', 14)}</button>
          <button id="btn-cerrar-panel" class="ia-icon-btn btn-close" title="Cerrar">${iaIcon('x', 14)}</button>
        </div>
      </div>
      <div id="ia-panel-content" class="ia-panel-body">
        <div class="ia-status-box">
          <span>Filas en memoria:</span>
          <span id="status-cache-vdf" class="ia-status-num">0</span>
        </div>
        <button id="btn-filtro-mc" class="ia-btn ia-btn-outline">
          ${iaIcon('filter', 13)} 1. Filtrar y Guardar MC
        </button>
        <button id="btn-filtro-down" class="ia-btn ia-btn-outline">
          ${iaIcon('filter', 13)} 2. Filtrar y Guardar DOWN
        </button>
        <button id="btn-preparar-correo" class="ia-btn ia-btn-primary">
          ${iaIcon('mail', 14)} 3. Preparar Reporte
        </button>
        <button id="btn-borrar-cache" class="ia-btn ia-btn-danger-outline">
          ${iaIcon('trash', 12)} Vaciar Memoria
        </button>
      </div>
    `;

    shadowRoot.appendChild(panel);

    const statusEl = shadowRoot.getElementById('status-cache-vdf');
    const panelContent = shadowRoot.getElementById('ia-panel-content');
    const btnMinimizar = shadowRoot.getElementById('btn-minimize-panel');
    const btnMC = shadowRoot.getElementById('btn-filtro-mc');
    const btnDOWN = shadowRoot.getElementById('btn-filtro-down');
    let isMinimized = false;

    const actualizarContador = () => {
      if (statusEl) statusEl.innerText = bufferFilas.size;
    };

    // Minimizar / Restaurar
    btnMinimizar.onclick = () => {
      isMinimized = !isMinimized;
      panel.classList.toggle('is-minimized', isMinimized);
      panelContent.style.display = isMinimized ? 'none' : 'flex';
      btnMinimizar.innerHTML = isMinimized ? iaIcon('maximize', 14) : iaIcon('minimize', 14);
    };

    // Cerrar
    shadowRoot.getElementById('btn-cerrar-panel').onclick = () => host.remove();

    // Filtros
    async function ejecutarFiltro(tipoCausa, boton) {
      const textoOriginal = boton.innerHTML;
      boton.innerHTML = `<span class="ia-spinner"></span> Filtrando ${tipoCausa}...`;
      boton.style.pointerEvents = 'none';

      setInput("Search Devuelta", "NO");
      setInput("Search ResponsableICF", "VDF");
      setInput("Search causa", tipoCausa);

      await esperarCargaCompleta(4500);

      const agregadas = capturarFilasVisibles();
      actualizarContador();

      boton.innerHTML = textoOriginal;
      boton.style.pointerEvents = 'auto';

      alert(`Filtro "${tipoCausa}" procesado.\nFilas añadidas: ${agregadas}\nTotal acumulado: ${bufferFilas.size}`);
    }

    btnMC.onclick = () => ejecutarFiltro("MC", btnMC);
    btnDOWN.onclick = () => ejecutarFiltro("DOWN", btnDOWN);

    // Preparar Correo
    shadowRoot.getElementById('btn-preparar-correo').onclick = prepararReporteYOutlook;

    // Vaciar Memoria
    shadowRoot.getElementById('btn-borrar-cache').onclick = () => {
      bufferFilas.clear();
      actualizarContador();
      alert("Memoria vaciada.");
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarPanel);
  } else {
    iniciarPanel();
  }
})();
