// ==UserScript==
// @name          Extractor Reporte Incidencias Despliegue (Conteo Global caso_asociado)
// @namespace     http://tampermonkey.net/
// @version       2.1
// @description   Filtra por Devuelta NO y ResponsableICF INCIDENCIAS DESPLIEGUE, cuenta cuántas veces aparece cada caso_asociado en la tabla y copia para correo con diseño IATelecom y botón mailto
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
    'clipboard': '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>',
    'mail':      '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    'x':         '<path d="M18 6 6 18M6 6l12 12"/>',
    'minimize':  '<path d="M4 14h6v6M20 10h-6V4"/>',
    'maximize':  '<path d="M14 4h6v6M10 20H4v-6"/>',
    'trash':     '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    'filter':    '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    'layers':    '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    'check':     '<path d="m5 12 5 5 9-10"/>'
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

    .ia-btn-secondary {
      background: rgba(255, 255, 255, 0.08);
      border-color: var(--ia-border);
      color: #ffffff;
    }
    .ia-btn-secondary:hover {
      background: rgba(255, 255, 255, 0.14);
      border-color: var(--ia-brand-500);
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
    { titulo: "causa_especif", origen: "causa_especif", exacto: false },
    { titulo: "Prevision", origen: "Prevision", exacto: false },
    { titulo: "causa", origen: "causa", exacto: true },
    { titulo: "Nodo", origen: "Nodo", exacto: true },
    { titulo: "Celda", origen: "Celda", exacto: true },
    { titulo: "ICF ASOCIADAS", origen: "ICF ASOCIADAS", exacto: false },
    { titulo: "caso_asociado", origen: "caso_asociado", exacto: true },
    { titulo: "ResponsableICF", origen: "ResponsableICF", exacto: true }
  ];

  let bufferFilas = [];

  function obtenerFechaCorta() {
    const ahora = new Date();
    const dd = String(ahora.getDate()).padStart(2, '0');
    const mm = String(ahora.getMonth() + 1).padStart(2, '0');
    return `${dd}/${mm}`;
  }

  function abrirOutlookMailto() {
    const fecha = obtenerFechaCorta();
    const to = "n3.masorange@orange.es,IMaccytransp.masorange@orange.es,gloria.arias@masorange.es";
    const cc = "net.cso@masorange.es,icf@iatelecom.es";
    const subject = `PRIORIZACIÓN INCIDENCIAS DESPLIEGUE ${fecha}`;

    const mailtoUrl = `mailto:${to}?cc=${encodeURIComponent(cc)}&subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoUrl;
  }

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
    let listaFilas = [];

    const idxIcfAsociadas = 12; // Índice de ICF ASOCIADAS
    const idxCasoAsociado = 13; // Índice de caso_asociado

    // 1. Extraer filas
    filas.forEach(tr => {
      if (tr.querySelector('td.dataTables_empty') || tr.innerText.includes('No matching') || tr.innerText.includes('Loading')) return;

      const tds = Array.from(tr.querySelectorAll('td'));
      if (tds.length <= 3) return;

      const filaDatos = indices.map(idx => {
        return (idx !== -1 && tds[idx]) ? tds[idx].innerText.trim() : '';
      });

      listaFilas.push(filaDatos);
    });

    // 2. Conteo global de apariciones de caso_asociado
    const frecuenciasCasos = {};
    listaFilas.forEach(fila => {
      const caso = fila[idxCasoAsociado] || '';
      if (caso) {
        frecuenciasCasos[caso] = (frecuenciasCasos[caso] || 0) + 1;
      }
    });

    // 3. Asignar frecuencia a la columna ICF ASOCIADAS
    listaFilas.forEach(fila => {
      const caso = fila[idxCasoAsociado] || '';
      const totalRepeticiones = frecuenciasCasos[caso] || 1;
      fila[idxIcfAsociadas] = String(totalRepeticiones);
    });

    bufferFilas = listaFilas;
    return listaFilas.length;
  }

  function construirHTMLCompleto() {
    let theadHtml = configuracionColumnas.map(col =>
      `<th style="background-color: #0288d1; color: #ffffff; font-family: Calibri, Arial, sans-serif; font-size: 9.5pt; font-weight: bold; padding: 5px 8px; border: 1px solid #777; text-align: left; white-space: nowrap;">${col.titulo}</th>`
    ).join('');

    let tbodyHtml = '';

    bufferFilas.forEach((fila, filaIndex) => {
      const bgColor = (filaIndex % 2 === 0) ? '#ffffff' : '#f8f9fa';
      tbodyHtml += `<tr style="background-color: ${bgColor};">`;

      fila.forEach((valor, colIdx) => {
        const titulo = configuracionColumnas[colIdx].titulo;
        let estiloCelda = 'color: #212529;';

        if (titulo === "caso_asociado") {
          estiloCelda = 'background-color: #0070ba; color: #ffffff; font-weight: bold; text-align: center;';
        } else if (titulo === "ICF ASOCIADAS") {
          estiloCelda = 'font-weight: bold; text-align: center; color: #111;';
        } else if (titulo === "ResponsableICF") {
          estiloCelda = 'background-color: #fff3cd; color: #856404; font-weight: bold;';
        }

        tbodyHtml += `<td style="padding: 5px 8px; border: 1px solid #777; font-family: Calibri, Arial, sans-serif; font-size: 9pt; vertical-align: middle; ${estiloCelda}">${valor.replace(/\n/g, '<br>')}</td>`;
      });

      tbodyHtml += '</tr>';
    });

    return `
      <div style="font-family: Calibri, Arial, sans-serif; font-size: 11pt; color: #212529;">
        <p style="margin: 0 0 14px 0;">Buenos días,</p>
        <p style="margin: 0 0 16px 0;">solicitamos FB, priorización y previsión de estas incidencias, los casos marcados en azul son por donde los estáis tratando.</p>
        <br/>
        <table style="border-collapse: collapse; width: 100%; border: 1px solid #777; background-color: #ffffff; margin: 8px 0;">
          <thead><tr>${theadHtml}</tr></thead>
          <tbody>${tbodyHtml}</tbody>
        </table>
        <br/>
        <p style="margin: 16px 0 0 0;">Saludos</p>
      </div>
    `;
  }

  async function copiarAlPortapapeles() {
    if (bufferFilas.length === 0) {
      alert("No hay registros en memoria. Pulsa primero el botón de filtrar.");
      return;
    }

    const htmlFinal = construirHTMLCompleto();
    const btnCopiar = hostRef?.shadowRoot?.getElementById('btn-copiar-despliegue');

    const divOculto = document.createElement('div');
    divOculto.style.position = 'fixed';
    divOculto.style.left = '-9999px';
    divOculto.style.top = '0';
    divOculto.innerHTML = htmlFinal;
    document.body.appendChild(divOculto);

    const range = document.createRange();
    range.selectNodeContents(divOculto);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    try {
      const exito = document.execCommand('copy');
      if (exito) {
        if (btnCopiar) {
          btnCopiar.innerHTML = `${iaIcon('check', 14)} ¡Copiado con éxito!`;
          btnCopiar.style.background = 'var(--ia-success)';
          btnCopiar.style.borderColor = 'var(--ia-success)';
          setTimeout(() => {
            btnCopiar.innerHTML = `${iaIcon('clipboard', 14)} Copiar para Correo`;
            btnCopiar.style.background = 'var(--ia-brand-500)';
            btnCopiar.style.borderColor = 'var(--ia-brand-500)';
          }, 2500);
        }
      } else {
        alert("No se pudo copiar. Inténtalo de nuevo.");
      }
    } catch (err) {
      console.error(err);
      alert("Error al copiar.");
    } finally {
      sel.removeAllRanges();
      document.body.removeChild(divOculto);
    }
  }

  // =====================================================================
  // PANEL SHADOW DOM (IATelecom Design)
  // =====================================================================

  let hostRef = null;

  function iniciarPanel() {
    if (document.getElementById('reporte-despliegue-host')) return;

    const host = document.createElement('div');
    host.id = 'reporte-despliegue-host';
    document.body.appendChild(host);
    hostRef = host;

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
          <span class="ia-badge">${iaIcon('layers', 10)} DESPLIEGUE</span>
        </div>
        <div class="ia-actions">
          <button id="btn-minimize-panel" class="ia-icon-btn" title="Minimizar / Restaurar">${iaIcon('minimize', 14)}</button>
          <button id="btn-cerrar-panel" class="ia-icon-btn btn-close" title="Cerrar">${iaIcon('x', 14)}</button>
        </div>
      </div>
      <div id="ia-panel-content" class="ia-panel-body">
        <div class="ia-status-box">
          <span>Filas en memoria:</span>
          <span id="status-cache-despliegue" class="ia-status-num">0</span>
        </div>
        <button id="btn-filtro-despliegue" class="ia-btn ia-btn-outline">
          ${iaIcon('filter', 13)} Filtrar y Guardar
        </button>
        <button id="btn-copiar-despliegue" class="ia-btn ia-btn-primary">
          ${iaIcon('clipboard', 14)} Copiar para Correo
        </button>
        <button id="btn-abrir-outlook" class="ia-btn ia-btn-secondary" title="Abrir Outlook con destinatarios y asunto">
          ${iaIcon('mail', 14)} Abrir Outlook
        </button>
        <button id="btn-borrar-despliegue" class="ia-btn ia-btn-danger-outline">
          ${iaIcon('trash', 12)} Vaciar Memoria
        </button>
      </div>
    `;

    shadowRoot.appendChild(panel);

    const statusEl = shadowRoot.getElementById('status-cache-despliegue');
    const panelContent = shadowRoot.getElementById('ia-panel-content');
    const btnMinimizar = shadowRoot.getElementById('btn-minimize-panel');
    const btnFiltro = shadowRoot.getElementById('btn-filtro-despliegue');
    let isMinimized = false;

    const actualizarContador = () => {
      if (statusEl) statusEl.innerText = bufferFilas.length;
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

    // Filtrar y guardar
    btnFiltro.onclick = async () => {
      btnFiltro.innerHTML = `<span class="ia-spinner"></span> Filtrando...`;
      btnFiltro.style.pointerEvents = 'none';

      setInput("Search causa", "");
      setInput("Search Devuelta", "NO");
      setInput("Search ResponsableICF", "INCIDENCIAS DESPLIEGUE");

      await esperarCargaCompleta(4500);

      const agregadas = capturarFilasVisibles();
      actualizarContador();

      btnFiltro.innerHTML = `${iaIcon('filter', 13)} Filtrar y Guardar`;
      btnFiltro.style.pointerEvents = 'auto';

      alert(`Filtro procesado.\nFilas capturadas: ${agregadas}\nTotal acumulado: ${bufferFilas.length}`);
    };

    // Copiar
    shadowRoot.getElementById('btn-copiar-despliegue').onclick = copiarAlPortapapeles;

    // Abrir Outlook
    shadowRoot.getElementById('btn-abrir-outlook').onclick = abrirOutlookMailto;

    // Vaciar
    shadowRoot.getElementById('btn-borrar-despliegue').onclick = () => {
      bufferFilas = [];
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