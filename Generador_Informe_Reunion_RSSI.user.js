// ==UserScript==
// @name         Generador Informe Completo Reunión RSSI  casos pendientes de 3PP, FLM y otros.
// @namespace    http://violentmonkey.net/
// @version      5.0
// @description  Filtra con retardo, extrae las 15 columnas requeridas y proporciona botones separados e independientes para Copiar Tablas y Abrir Outlook.
// @match        http://mxmefm01.wnet/private/zc/tools/smc/edt_icfs*
// @grant        GM_setClipboard
// ==/UserScript==

(function () {
    'use strict';

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

    // Variables globales para almacenar los datos generados
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
            statusElem.innerText = `${baseText} (${remaining}s)...`;
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

    function createUI() {
        if (document.getElementById('smc-report-panel')) return;

        const panel = document.createElement('div');
        panel.id = 'smc-report-panel';
        panel.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 999999;
            background: #1e1e1e;
            color: #ffffff;
            border: 2px solid #28a745;
            border-radius: 8px;
            padding: 14px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.7);
            width: 360px;
            font-family: Arial, sans-serif;
            font-size: 13px;
        `;

        panel.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <b style="color:#28a745; font-size:14px;">Reporte Reunión MAQA/Jefatura</b>
                <span id="smc-btn-close" style="cursor:pointer; font-weight:bold; color:#aaa;">✖</span>
            </div>

            <button id="smc-btn-filter" style="
                width: 100%;
                background-color: #007bff;
                color: white;
                border: none;
                padding: 10px;
                border-radius: 5px;
                font-weight: bold;
                font-size: 13px;
                cursor: pointer;
                margin-bottom: 8px;">
                1️⃣ Filtrar y Cargar Tablas
            </button>

            <button id="smc-btn-copy" disabled style="
                width: 100%;
                background-color: #6c757d;
                color: white;
                border: none;
                padding: 10px;
                border-radius: 5px;
                font-weight: bold;
                font-size: 13px;
                cursor: not-allowed;
                margin-bottom: 8px;">
                2️⃣ 📋 Copiar Tablas
            </button>

            <button id="smc-btn-outlook" disabled style="
                width: 100%;
                background-color: #6c757d;
                color: white;
                border: none;
                padding: 10px;
                border-radius: 5px;
                font-weight: bold;
                font-size: 13px;
                cursor: not-allowed;
                margin-bottom: 10px;">
                3️⃣ 📧 Preparar Correo en Outlook
            </button>

            <div id="smc-status" style="font-size:12px; color:#bbb; line-height: 1.4;">Pulsa "1️⃣ Filtrar y Cargar Tablas" para empezar.</div>
        `;

        document.body.appendChild(panel);

        panel.querySelector('#smc-btn-close').onclick = () => panel.remove();
        panel.querySelector('#smc-btn-filter').onclick = runFilterAndLoad;
        panel.querySelector('#smc-btn-copy').onclick = copyReportToClipboard;
        panel.querySelector('#smc-btn-outlook').onclick = openOutlookDraft;
    }

    // PASO 1: Filtrar con retardo y armar el contenido
    async function runFilterAndLoad() {
        const btnFilter = document.getElementById('smc-btn-filter');
        const btnCopy = document.getElementById('smc-btn-copy');
        const btnOutlook = document.getElementById('smc-btn-outlook');
        const status = document.getElementById('smc-status');

        btnFilter.disabled = true;
        btnFilter.style.opacity = '0.6';
        btnCopy.disabled = true;
        btnCopy.style.backgroundColor = '#6c757d';
        btnCopy.style.cursor = 'not-allowed';
        btnOutlook.disabled = true;
        btnOutlook.style.backgroundColor = '#6c757d';
        btnOutlook.style.cursor = 'not-allowed';

        showAllRowsIfPaginated();
        await sleep(500);

        const inputDevuelta = document.querySelector('input.im[placeholder*="Devuelta" i]');
        const inputResponsable = document.querySelector('input.im[placeholder*="ResponsableICF" i]');

        if (!inputDevuelta || !inputResponsable) {
            status.innerText = '❌ Error: No se localizan los campos de búsqueda.';
            btnFilter.disabled = false;
            btnFilter.style.opacity = '1';
            return;
        }

        // 1. Filtrar Devuelta: NO
        setInputValue(inputDevuelta, 'NO');
        await countdownWait(status, 'Aplicando Devuelta: "NO"', DELAY_DEVUELTA);

        // 2. Filtrar ResponsableICF: MAQA
        setInputValue(inputResponsable, 'MAQA');
        await countdownWait(status, 'Esperando respuesta del servidor', DELAY_RESPONSABLE);

        status.innerText = 'Extrayendo datos de la tabla...';

        const mainTable = document.querySelector('table');
        if (!mainTable) {
            status.innerText = '❌ No se detectó ninguna tabla visible.';
            btnFilter.disabled = false;
            btnFilter.style.opacity = '1';
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
            status.innerText = '⚠️ No hay filas disponibles tras filtrar.';
            btnFilter.disabled = false;
            btnFilter.style.opacity = '1';
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

        // Construir el reporte en HTML y texto plano
        buildReportStrings(sortedKeys, groupedData);

        status.innerHTML = `
            <div style="color:#28a745; font-weight:bold; margin-bottom:4px;">✅ Datos procesados: ${rows.length} registros.</div>
            <div style="color:#ddd;">Ahora pulsa <b>"2️⃣ 📋 Copiar Tablas"</b>.</div>
        `;

        btnFilter.disabled = false;
        btnFilter.style.opacity = '1';

        // Habilitar botones de Copiar y de Outlook
        btnCopy.disabled = false;
        btnCopy.style.backgroundColor = '#28a745';
        btnCopy.style.cursor = 'pointer';

        btnOutlook.disabled = false;
        btnOutlook.style.backgroundColor = '#17a2b8';
        btnOutlook.style.cursor = 'pointer';
    }

    // Generador de la plantilla HTML con título y colores
    function buildReportStrings(sortedKeys, groupedData) {
        let html = `<p style="font-family: Arial, sans-serif; font-size: 13px; color: #000000; margin-bottom: 20px;">`;
        html += `Después de la reunión realizada con MAQA y jefatura los casos pendientes son:<br></p>`;

        let textPlain = `Después de la reunión realizada con MAQA y jefatura los casos pendientes son:\n\n`;

        sortedKeys.forEach(groupName => {
            const rowsList = groupedData[groupName];

            // Título individual encima de cada tabla
            html += `<div style="font-family: Arial, sans-serif; font-size: 13px; font-weight: bold; color: #111111; margin-top: 25px; margin-bottom: 8px; text-transform: uppercase;">${groupName}</div>`;
            textPlain += `${groupName}\n`;

            html += `<table border="1" cellspacing="0" cellpadding="4" style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 11px; border: 1px solid #555555; margin-bottom: 20px; width: 100%;">`;

            // Cabecera verde césped
            html += `<tr style="background-color: #2d7a22; color: #ffffff;">`;
            TARGET_COLUMNS.forEach(h => {
                html += `<th style="background-color: #2d7a22; padding: 5px 8px; border: 1px solid #555555; color: #ffffff; font-weight: bold; text-align: left; font-size: 11px; white-space: nowrap;">${h}</th>`;
            });
            html += `</tr>`;
            textPlain += TARGET_COLUMNS.join('\t') + '\n';

            // Filas
            rowsList.forEach((rowCells, rIndex) => {
                const rowBg = (rIndex % 2 === 0) ? '#ffffff' : '#f9f9f9';
                html += `<tr style="background-color: ${rowBg};">`;
                const textRow = [];
                rowCells.forEach(cellHtml => {
                    html += `<td style="background-color: ${rowBg}; padding: 4px 6px; border: 1px solid #555555; color: #000000; font-size: 11px; vertical-align: top;">${cellHtml}</td>`;
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

    // PASO 2: Copiado directo disparado por clic de usuario
    async function copyReportToClipboard() {
        const btnCopy = document.getElementById('smc-btn-copy');
        const status = document.getElementById('smc-status');

        if (!generatedReportHtml) {
            status.innerText = '⚠️ Primero debes filtrar las tablas.';
            return;
        }

        let copied = false;

        // Intento 1: API nativa ClipboardItem
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

        // Intento 2: Inyección DOM + selección Range
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
                console.error('Error execCommand:', err);
            }

            sel.removeAllRanges();
            document.body.removeChild(tempDiv);
        }

        // Intento 3: GM_setClipboard de Violentmonkey
        if (!copied && typeof GM_setClipboard !== 'undefined') {
            try {
                GM_setClipboard(generatedReportHtml, 'html');
                copied = true;
            } catch (e) {
                console.error('Fallo GM_setClipboard:', e);
            }
        }

        if (copied) {
            const orig = btnCopy.innerText;
            btnCopy.innerText = '✅ ¡Copiado!';
            btnCopy.style.backgroundColor = '#155724';
            status.innerHTML = `<span style="color:#28a745; font-weight:bold;">✅ Tablas copiadas. Ahora pulsa "3️⃣ 📧 Preparar Correo en Outlook".</span>`;
            setTimeout(() => {
                btnCopy.innerText = orig;
                btnCopy.style.backgroundColor = '#28a745';
            }, 2500);
        } else {
            status.innerHTML = `<span style="color:#dc3545; font-weight:bold;">❌ Error al copiar. Revisa los permisos del navegador.</span>`;
        }
    }

    // PASO 3: Abrir Outlook con fecha actual
    function openOutlookDraft() {
        const todayStr = getTodayFormatted();
        const mailSubject = `Reunión RSSI ${todayStr} casos pendientes de 3PP, FLM y otros.`;
        const mailtoUrl = `mailto:${encodeURIComponent(MAIL_TO)}?cc=${encodeURIComponent(MAIL_CC)}&subject=${encodeURIComponent(mailSubject)}`;

        const link = document.createElement('a');
        link.href = mailtoUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        const status = document.getElementById('smc-status');
        status.innerHTML = `
            <div style="color:#17a2b8; font-weight:bold;">📧 Correo de Outlook abierto.</div>
            <div style="color:#ddd;">Haz clic en el cuerpo del correo, pulsa <b>Ctrl + V</b> y dale a Enviar cuando lo revises.</div>
        `;
    }

    window.addEventListener('load', () => {
        setTimeout(createUI, 1200);
    });
})();
