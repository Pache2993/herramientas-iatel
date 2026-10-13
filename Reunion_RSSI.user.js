// ==UserScript==
// @name         Generador Informe Completo Reunión RSSI casos pendientes de 3PP, FLM y otros.
// @namespace    http://violentmonkey.net/
// @version      6.1
// @description  Filtra con retardo, extrae las 15 columnas requeridas, agrupa por categorías y proporciona botones para Copiar Tablas y Abrir Outlook con diseño IATelecom.
// @match        http://mxmefm01.wnet/private/zc/tools/smc/edt_icfs*
// @grant        GM_setClipboard
// ==/UserScript==

(function () {
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
        'filter':    '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
        'minimize':  '<path d="M4 14h6v6M20 10h-6V4"/>',
        'maximize':  '<path d="M14 4h6v6M10 20H4v-6"/>',
        'x':         '<path d="M18 6 6 18M6 6l12 12"/>',
        'check':     '<path d="m5 12 5 5 9-10"/>',
        'users':     '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
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
            --ia-warning: #d29922;
            --ia-danger: #f85149;
            --ia-surface-panel: rgba(13, 17, 23, 0.95);
            --ia-surface-item: rgba(255, 255, 255, 0.04);
            --ia-hover: rgba(255, 255, 255, 0.08);
            --ia-border: rgba(255, 255, 255, 0.12);
            --ia-border-strong: rgba(255, 255, 255, 0.20);
            --ia-border-focus: rgba(0, 153, 255, 0.60);
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
            width: 350px;
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
            font-size: 11px;
            color: var(--ia-text-2);
            line-height: 1.4;
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
        .ia-btn-primary:hover:not(:disabled) {
            background: var(--ia-brand-600);
            box-shadow: 0 0 12px var(--ia-brand-glow);
        }

        .ia-btn-outline {
            background: rgba(255, 255, 255, 0.04);
            border-color: var(--ia-border);
            color: var(--ia-text);
        }
        .ia-btn-outline:hover:not(:disabled) {
            background: var(--ia-hover);
            border-color: var(--ia-brand-500);
            color: var(--ia-brand-500);
        }

        .ia-btn:disabled {
            opacity: 0.45;
            cursor: not-allowed !important;
            border-color: transparent !important;
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
    // CORE LOGIC & HELPERS
    // =====================================================================

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const DELAY_DEVUELTA = 3000;
    const DELAY_RESPONSABLE = 7500;

    const MAIL_TO = 'gloria.arias@masorange.es';
    const MAIL_CC = 'net.cso@masorange.es,icf@iatelecom.es';

    function getTodayFormatted() {
        const now = new Date();
        const dd = String(now.getDate()).padStart(2, '0');
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const yyyy = now.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
    }

    const TARGET_COLUMNS = [
        'aging',
        'Prio',
        'codigo_oceane',
        'tipo_icf',
        'ICF_RED',
        'causa_especif',
        'Prevision',
        'causa',
        'Nodo',
        'Celda',
        'site',
        'caso_asociado',
        'ResponsableICF',
        'codigo_atenea',
        'Oceane_RSSI'
    ];

    let generatedReportHtml = '';
    let generatedReportText = '';

    function setInputValue(input, val) {
        input.focus();
        input.value = val;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
        input.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, key: 'Enter' }));
    }

    function showAllRowsIfPaginated() {
        const lengthSelect = document.querySelector('select[name*="length" i], select[name*="dt" i], .dataTables_length select');
        if (lengthSelect) {
            const hasAll = Array.from(lengthSelect.options).find(opt => opt.value === '-1' || /tod/i.test(opt.text));
            if (hasAll) {
                lengthSelect.value = hasAll.value;
            } else {
                lengthSelect.selectedIndex = lengthSelect.options.length - 1;
            }
            lengthSelect.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }

    async function countdownWait(statusElem, baseText, totalMs) {
        let remaining = Math.ceil(totalMs / 1000);
        while (remaining > 0) {
            statusElem.innerHTML = `<span style="display:inline-flex; align-items:center; gap:6px;"><span class="ia-spinner"></span> ${baseText} (${remaining}s)...</span>`;
            await sleep(1000);
            remaining--;
        }
    }

    function extractGroupCategory(text) {
        if (!text) return 'OTROS';

        if (/\bTME\b/i.test(text)) {
            return 'TME';
        }

        const match = text.match(/\b\d{1,2}[\/\-\.]\d{1,2}(?:[\/\-\.]\d{2,4})?\s*[:\-\/]?\s*([A-ZÑÁÉÍÓÚ]{3,})/);
        if (match && match[1]) {
            const word = match[1].trim();
            if (['MAQA', 'JEFATURA', 'REPUESTOS', 'EVOLUTIVO', 'ACCESO', 'ESCALADO'].includes(word)) {
                return word;
            }
        }

        const keywords = ['MAQA', 'JEFATURA', 'REPUESTOS', 'EVOLUTIVO', 'ACCESO', 'ESCALADO'];
        for (const kw of keywords) {
            if (new RegExp('\\b' + kw + '\\b', 'i').test(text)) {
                return kw;
            }
        }

        return 'OTROS';
    }

    function buildReportStrings(sortedKeys, groupedData) {
        let html = `<p style="font-family: Calibri, Arial, sans-serif; font-size: 13px; color: #000000; margin-bottom: 20px;">`;
        html += `Después de la reunión realizada con MAQA y jefatura los casos pendientes son:<br></p>`;

        let textPlain = `Después de la reunión realizada con MAQA y jefatura los casos pendientes son:\n\n`;

        sortedKeys.forEach(groupName => {
            const rowsList = groupedData[groupName];

            html += `<div style="font-family: Calibri, Arial, sans-serif; font-size: 13px; font-weight: bold; color: #111111; margin-top: 25px; margin-bottom: 8px; text-transform: uppercase;">${groupName}</div>`;
            textPlain += `${groupName}\n`;

            html += `<table border="1" cellspacing="0" cellpadding="4" style="border-collapse: collapse; font-family: Calibri, Arial, sans-serif; font-size: 10pt; border: 1px solid #777; margin-bottom: 20px; width: 100%;">`;

            // Cabecera unificada en azul corporativo #0288d1
            html += `<tr style="background-color: #0288d1; color: #ffffff;">`;
            TARGET_COLUMNS.forEach(h => {
                html += `<th style="background-color: #0288d1; padding: 4px 8px; border: 1px solid #777; color: #ffffff; font-weight: bold; text-align: left; font-size: 10pt; white-space: nowrap;">${h}</th>`;
            });
            html += `</tr>`;
            textPlain += TARGET_COLUMNS.join('\t') + '\n';

            rowsList.forEach((rowCells, rIndex) => {
                const rowBg = (rIndex % 2 === 0) ? '#ffffff' : '#f9f9f9';
                html += `<tr style="background-color: ${rowBg};">`;
                const textRow = [];
                rowCells.forEach(cellHtml => {
                    html += `<td style="background-color: ${rowBg}; padding: 4px 6px; border: 1px solid #777; color: #000000; font-size: 10pt; vertical-align: top;">${cellHtml}</td>`;
                    const div = document.createElement('div');
                    div.innerHTML = cellHtml;
                    textRow.push(div.innerText.replace(/(\r\n|\n|\r)/gm, ' '));
                });
                html += `</tr>`;
                textPlain += textRow.join('\t') + '\n';
            });

            html += `</table><br>`;
            textPlain += '\n';
        });

        generatedReportHtml = html;
        generatedReportText = textPlain;
    }

    // =====================================================================
    // UI BUILDER (SHADOW DOM ISOLATED)
    // =====================================================================

    function createUI() {
        const prev = document.getElementById('reporte-reunion-rssi-host');
        if (prev) prev.remove();

        const host = document.createElement('div');
        host.id = 'reporte-reunion-rssi-host';
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
                    <span class="ia-badge">${iaIcon('users', 10)} REUNIÓN RSSI</span>
                </div>
                <div class="ia-actions">
                    <button id="btn-minimize-panel" class="ia-icon-btn" title="Minimizar / Restaurar">${iaIcon('minimize', 14)}</button>
                    <button id="btn-cerrar-panel" class="ia-icon-btn btn-close" title="Cerrar">${iaIcon('x', 14)}</button>
                </div>
            </div>
            <div id="ia-panel-content" class="ia-panel-body">
                <button id="smc-btn-filter" class="ia-btn ia-btn-outline">
                    ${iaIcon('filter', 13)} 1. Filtrar y Cargar Tablas
                </button>
                <button id="smc-btn-copy" disabled class="ia-btn ia-btn-primary">
                    ${iaIcon('clipboard', 14)} 2. Copiar Tablas
                </button>
                <button id="smc-btn-outlook" disabled class="ia-btn ia-btn-outline">
                    ${iaIcon('mail', 14)} 3. Preparar en Outlook
                </button>
                <div id="smc-status" class="ia-status-box">
                    Pulsa "1. Filtrar y Cargar Tablas" para comenzar.
                </div>
            </div>
        `;

        shadowRoot.appendChild(panel);

        const btnFilter = shadowRoot.getElementById('smc-btn-filter');
        const btnCopy = shadowRoot.getElementById('smc-btn-copy');
        const btnOutlook = shadowRoot.getElementById('smc-btn-outlook');
        const status = shadowRoot.getElementById('smc-status');
        const btnMinimizar = shadowRoot.getElementById('btn-minimize-panel');
        const panelContent = shadowRoot.getElementById('ia-panel-content');
        let isMinimized = false;

        // Minimizar / Restaurar
        btnMinimizar.onclick = () => {
            isMinimized = !isMinimized;
            panel.classList.toggle('is-minimized', isMinimized);
            panelContent.style.display = isMinimized ? 'none' : 'flex';
            btnMinimizar.innerHTML = isMinimized ? iaIcon('maximize', 14) : iaIcon('minimize', 14);
        };

        // Cerrar
        shadowRoot.getElementById('btn-cerrar-panel').onclick = () => host.remove();

        // 1. Filtrar
        btnFilter.onclick = async () => {
            btnFilter.disabled = true;
            btnCopy.disabled = true;
            btnOutlook.disabled = true;

            showAllRowsIfPaginated();
            await sleep(500);

            const inputDevuelta = document.querySelector('input.im[placeholder*="Devuelta" i]');
            const inputResponsable = document.querySelector('input.im[placeholder*="ResponsableICF" i]');

            if (!inputDevuelta || !inputResponsable) {
                status.innerHTML = `<span style="color:var(--ia-danger);">❌ Error: No se localizan los campos de búsqueda.</span>`;
                btnFilter.disabled = false;
                return;
            }

            // Filtrar Devuelta: NO
            setInputValue(inputDevuelta, 'NO');
            await countdownWait(status, 'Aplicando Devuelta: "NO"', DELAY_DEVUELTA);

            // Filtrar ResponsableICF: MAQA
            setInputValue(inputResponsable, 'MAQA');
            await countdownWait(status, 'Esperando respuesta del servidor', DELAY_RESPONSABLE);

            status.innerHTML = `<span style="display:inline-flex; align-items:center; gap:6px;"><span class="ia-spinner"></span> Extrayendo datos de la tabla...</span>`;

            const mainTable = document.querySelector('table');
            if (!mainTable) {
                status.innerHTML = `<span style="color:var(--ia-danger);">❌ No se detectó ninguna tabla visible.</span>`;
                btnFilter.disabled = false;
                return;
            }

            const headerElements = Array.from(mainTable.querySelectorAll('thead th, thead td, tr:first-child th'));
            const domHeaders = headerElements.map(th => th.innerText.trim());

            const colIndices = {};
            TARGET_COLUMNS.forEach(colName => {
                const idx = domHeaders.findIndex(h => h.toLowerCase() === colName.toLowerCase());
                colIndices[colName] = idx;
            });

            const causaIndex = colIndices['causa_especif'];

            const rows = Array.from(mainTable.querySelectorAll('tbody tr')).filter(tr => {
                return tr.style.display !== 'none' && tr.querySelectorAll('td').length > 0;
            });

            if (rows.length === 0) {
                status.innerHTML = `<span style="color:var(--ia-warning);">⚠️ No hay filas disponibles tras filtrar.</span>`;
                btnFilter.disabled = false;
                return;
            }

            const groupedData = {};

            rows.forEach(tr => {
                const cells = Array.from(tr.querySelectorAll('td'));
                const causaText = (causaIndex !== -1 && cells[causaIndex]) ? cells[causaIndex].innerText.trim() : '';
                const category = extractGroupCategory(causaText);

                const extractedRowHtml = TARGET_COLUMNS.map(colName => {
                    const idx = colIndices[colName];
                    return (idx !== -1 && cells[idx]) ? cells[idx].innerHTML.trim() : '';
                });

                if (!groupedData[category]) {
                    groupedData[category] = [];
                }
                groupedData[category].push(extractedRowHtml);
            });

            const orderPreference = ['MAQA', 'JEFATURA', 'REPUESTOS', 'EVOLUTIVO', 'TME', 'ACCESO', 'OTROS'];
            const sortedKeys = Object.keys(groupedData).sort((a, b) => {
                const idxA = orderPreference.indexOf(a);
                const idxB = orderPreference.indexOf(b);
                if (idxA !== -1 && idxB !== -1) return idxA - idxB;
                if (idxA !== -1) return -1;
                if (idxB !== -1) return 1;
                return a.localeCompare(b);
            });

            buildReportStrings(sortedKeys, groupedData);

            status.innerHTML = `
                <div style="color:var(--ia-success); font-weight:bold; margin-bottom:4px;">✅ Datos procesados: ${rows.length} registros.</div>
                <div style="color:var(--ia-text-2);">Pulsa <b>"2. Copiar Tablas"</b> para continuar.</div>
            `;

            btnFilter.disabled = false;
            btnCopy.disabled = false;
            btnOutlook.disabled = false;
        };

        // 2. Copiar
        btnCopy.onclick = async () => {
            if (!generatedReportHtml) {
                status.innerHTML = `<span style="color:var(--ia-warning);">⚠️ Primero debes filtrar las tablas.</span>`;
                return;
            }

            let copied = false;

            if (navigator.clipboard && window.ClipboardItem) {
                try {
                    const blobHtml = new Blob([generatedReportHtml], { type: 'text/html' });
                    const blobText = new Blob([generatedReportText], { type: 'text/plain' });
                    await navigator.clipboard.write([
                        new ClipboardItem({
                            'text/html': blobHtml,
                            'text/plain': blobText
                        })
                    ]);
                    copied = true;
                } catch (e) {
                    console.warn('Fallo ClipboardItem:', e);
                }
            }

            if (!copied) {
                const tempDiv = document.createElement('div');
                tempDiv.contentEditable = 'true';
                tempDiv.style.position = 'fixed';
                tempDiv.style.left = '0';
                tempDiv.style.top = '0';
                tempDiv.style.opacity = '0.01';
                tempDiv.innerHTML = generatedReportHtml;
                document.body.appendChild(tempDiv);

                tempDiv.focus();
                const range = document.createRange();
                range.selectNodeContents(tempDiv);
                const sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);

                try {
                    copied = document.execCommand('copy');
                } catch (err) {
                    console.error('Error fallback execCommand:', err);
                }

                sel.removeAllRanges();
                document.body.removeChild(tempDiv);
            }

            if (!copied && typeof GM_setClipboard !== 'undefined') {
                try {
                    GM_setClipboard(generatedReportHtml, 'html');
                    copied = true;
                } catch (e) {
                    console.error('Fallo GM_setClipboard:', e);
                }
            }

            if (copied) {
                const orig = btnCopy.innerHTML;
                btnCopy.innerHTML = `${iaIcon('check', 14)} ¡Copiado!`;
                status.innerHTML = `<span style="color:var(--ia-success); font-weight:bold;">✅ Tablas copiadas. Pulsa "3. Preparar en Outlook".</span>`;
                setTimeout(() => {
                    btnCopy.innerHTML = orig;
                }, 2500);
            } else {
                status.innerHTML = `<span style="color:var(--ia-danger); font-weight:bold;">❌ Error al copiar. Revisa permisos del navegador.</span>`;
            }
        };

        // 3. Outlook
        btnOutlook.onclick = () => {
            const todayStr = getTodayFormatted();
            const mailSubject = `Reunión RSSI ${todayStr} casos pendientes de 3PP, FLM y otros.`;
            const mailtoUrl = `mailto:${encodeURIComponent(MAIL_TO)}?cc=${encodeURIComponent(MAIL_CC)}&subject=${encodeURIComponent(mailSubject)}`;

            const link = document.createElement('a');
            link.href = mailtoUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            status.innerHTML = `
                <div style="color:var(--ia-brand-500); font-weight:bold;">📧 Correo de Outlook abierto.</div>
                <div style="color:var(--ia-text-2); margin-top:2px;">Haz clic en el cuerpo del correo, pulsa <b>Ctrl + V</b> y dale a Enviar cuando lo revises.</div>
            `;
        };
    }

    // Inicialización inmediata al inyectar por eval, o por DOMContentLoaded/fallback
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createUI);
    } else {
        createUI();
    }
})();
