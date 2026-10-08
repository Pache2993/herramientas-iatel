// ==UserScript==
// @name         Generador Reporte RSSI VDF -> Outlook
// @namespace    http://violentmonkey.net/
// @version      1.1
// @description  Filtra estrictamente Devuelta="NO" y Causa="RSSI_VDF" (sin confundir con causa_especif), copia la tabla y prepara el correo en Outlook.
// @match        http://mxmefm01.wnet/private/zc/tools/smc/edt_icfs*
// @grant        GM_setClipboard
// ==/UserScript==

(function () {
    'use strict';

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const DELAY_DEVUELTA = 3000;
    const DELAY_CAUSA = 7500;

    const MAIL_TO = 'raquel.diazcaldera@masorange.es;beatriz.marincanizares@masorange.es;a.azpiazu@huawei.com;jose.morais@huawei-partners.com;antonio.freitas@huawei-partners.com;rtm.genesis@TechMahindra.com;rtpm.n2.escalados@huawei.com';
    const MAIL_CC = 'performance.smc@masorange.es;net.cso@masorange.es;icf@iatelecom.es';

    function getTodayShortFormatted() {
        const now = new Date();
        const dd = String(now.getDate()).padStart(2, '0');
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        return `${dd}/${mm}`;
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
            statusElem.innerText = `${baseText} (${remaining}s)...`;
            await sleep(1000);
            remaining--;
        }
    }

    // Busca estrictamente el input del filtro "causa" evitando "causa_especif" y "subcausa"
    function findExactCausaInput() {
        const allInputs = Array.from(document.querySelectorAll('input.im, input[placeholder*="causa" i]'));

        // 1. Coincidencia exacta en placeholder (ej: "Search causa")
        let target = allInputs.find(inp => {
            const ph = (inp.getAttribute('placeholder') || '').trim().toLowerCase();
            return ph === 'search causa' || ph === 'causa';
        });

        // 2. Fallback: descartar causa_especif y subcausa
        if (!target) {
            target = allInputs.find(inp => {
                const ph = (inp.getAttribute('placeholder') || '').trim().toLowerCase();
                return ph.includes('causa') && !ph.includes('especif') && !ph.includes('sub');
            });
        }
        return target;
    }

    function createUI() {
        if (document.getElementById('smc-vdf-panel')) return;

        const panel = document.createElement('div');
        panel.id = 'smc-vdf-panel';
        panel.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 999999;
            background: #1e1e1e;
            color: #ffffff;
            border: 2px solid #dc3545;
            border-radius: 8px;
            padding: 14px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.7);
            width: 360px;
            font-family: Arial, sans-serif;
            font-size: 13px;
        `;

        panel.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <b style="color:#ff6b6b; font-size:14px;">Priorización RSSI Vodafone</b>
                <span id="smc-vdf-close" style="cursor:pointer; font-weight:bold; color:#aaa;">✖</span>
            </div>

            <button id="smc-btn-vdf-filter" style="
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
                1️⃣ Filtrar RSSI_VDF
            </button>

            <button id="smc-btn-vdf-copy" disabled style="
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
                2️⃣ 📋 Copiar Tabla Completa
            </button>

            <button id="smc-btn-vdf-outlook" disabled style="
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

            <div id="smc-vdf-status" style="font-size:12px; color:#bbb; line-height: 1.4;">Pulsa "1️⃣ Filtrar RSSI_VDF" para comenzar.</div>
        `;

        document.body.appendChild(panel);

        panel.querySelector('#smc-vdf-close').onclick = () => panel.remove();
        panel.querySelector('#smc-btn-vdf-filter').onclick = runFilterAndLoadVdf;
        panel.querySelector('#smc-btn-vdf-copy').onclick = copyReportToClipboard;
        panel.querySelector('#smc-btn-vdf-outlook').onclick = openOutlookDraft;
    }

    async function runFilterAndLoadVdf() {
        const btnFilter = document.getElementById('smc-btn-vdf-filter');
        const btnCopy = document.getElementById('smc-btn-vdf-copy');
        const btnOutlook = document.getElementById('smc-btn-vdf-outlook');
        const status = document.getElementById('smc-vdf-status');

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
        const inputCausa = findExactCausaInput();

        if (!inputDevuelta || !inputCausa) {
            status.innerText = '❌ Error: No se encontró el campo "Devuelta" o la columna "Causa".';
            btnFilter.disabled = false;
            btnFilter.style.opacity = '1';
            return;
        }

        // 1. Filtrar Devuelta = NO
        setInputValue(inputDevuelta, 'NO');
        await countdownWait(status, 'Aplicando Devuelta: "NO"', DELAY_DEVUELTA);

        // 2. Filtrar Causa = RSSI_VDF
        setInputValue(inputCausa, 'RSSI_VDF');
        await countdownWait(status, 'Filtrando columna Causa: "RSSI_VDF"', DELAY_CAUSA);

        status.innerText = 'Extrayendo tabla de datos...';

        const mainTable = document.querySelector('table');
        if (!mainTable) {
            status.innerText = '❌ No se detectó ninguna tabla visible.';
            btnFilter.disabled = false;
            btnFilter.style.opacity = '1';
            return;
        }

        const headerElements = Array.from(mainTable.querySelectorAll('thead th, thead td, tr:first-child th'));
        const domHeaders = headerElements.map(th => th.innerText.trim());

        // Mapeo exacto de las columnas
        const colIndices = {};
        TARGET_COLUMNS.forEach(colName => {
            const idx = domHeaders.findIndex(h => h.toLowerCase() === colName.toLowerCase());
            colIndices[colName] = idx;
        });

        const rows = Array.from(mainTable.querySelectorAll('tbody tr')).filter(tr => {
            return tr.style.display !== 'none' && tr.querySelectorAll('td').length > 0;
        });

        if (rows.length === 0) {
            status.innerText = '⚠️ No hay filas disponibles con Causa = RSSI_VDF.';
            btnFilter.disabled = false;
            btnFilter.style.opacity = '1';
            return;
        }

        const extractedRows = rows.map(tr => {
            const cells = Array.from(tr.querySelectorAll('td'));
            return TARGET_COLUMNS.map(colName => {
                const idx = colIndices[colName];
                return (idx !== -1 && cells[idx]) ? cells[idx].innerHTML.trim() : '';
            });
        });

        buildReport(extractedRows);

        status.innerHTML = `
            <div style="color:#28a745; font-weight:bold; margin-bottom:4px;">✅ Datos procesados: ${extractedRows.length} casos RSSI_VDF.</div>
            <div style="color:#ddd;">Ahora pulsa <b>"2️⃣ 📋 Copiar Tabla Completa"</b>.</div>
        `;

        btnFilter.disabled = false;
        btnFilter.style.opacity = '1';

        btnCopy.disabled = false;
        btnCopy.style.backgroundColor = '#28a745';
        btnCopy.style.cursor = 'pointer';

        btnOutlook.disabled = false;
        btnOutlook.style.backgroundColor = '#17a2b8';
        btnOutlook.style.cursor = 'pointer';
    }

    function buildReport(rowsList) {
        let html = `<p style="font-family: Arial, sans-serif; font-size: 13px; color: #000000; margin-bottom: 16px;">`;
        html += `Solicitamos feedback y priorización de estos casos de RSSI escalados hacía Vodafone:<br></p>`;

        let textPlain = `Solicitamos feedback y priorización de estos casos de RSSI escalados hacía Vodafone:\n\n`;

        html += `<table border="1" cellspacing="0" cellpadding="4" style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 11px; border: 1px solid #555555; margin-bottom: 20px; width: 100%;">`;

        // Cabecera verde corporativo
        html += `<tr style="background-color: #2d7a22; color: #ffffff;">`;
        TARGET_COLUMNS.forEach(h => {
            html += `<th style="background-color: #2d7a22; padding: 5px 8px; border: 1px solid #555555; color: #ffffff; font-weight: bold; text-align: left; font-size: 11px; white-space: nowrap;">${h}</th>`;
        });
        html += `</tr>`;
        textPlain += TARGET_COLUMNS.join('\t') + '\n';

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

        html += `<p style="font-family: Arial, sans-serif; font-size: 13px; color: #000000;">Saludos</p>`;
        textPlain += `Saludos\n`;

        generatedReportHtml = html;
        generatedReportText = textPlain;
    }

    async function copyReportToClipboard() {
        const btnCopy = document.getElementById('smc-btn-vdf-copy');
        const status = document.getElementById('smc-vdf-status');

        if (!generatedReportHtml) {
            status.innerText = '⚠️ Primero debes filtrar la tabla.';
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
            const orig = btnCopy.innerText;
            btnCopy.innerText = '✅ ¡Copiado!';
            btnCopy.style.backgroundColor = '#155724';
            status.innerHTML = `<span style="color:#28a745; font-weight:bold;">✅ Mensaje y tabla copiados. Pulsa "3️⃣ 📧 Preparar Correo en Outlook".</span>`;
            setTimeout(() => {
                btnCopy.innerText = orig;
                btnCopy.style.backgroundColor = '#28a745';
            }, 2500);
        } else {
            status.innerHTML = `<span style="color:#dc3545; font-weight:bold;">❌ Error al copiar. Revisa permisos del portapapeles.</span>`;
        }
    }

    function openOutlookDraft() {
        const todayStr = getTodayShortFormatted();
        const mailSubject = `PRIORIZACION RSSI VDF ${todayStr}`;
        const mailtoUrl = `mailto:${encodeURIComponent(MAIL_TO)}?cc=${encodeURIComponent(MAIL_CC)}&subject=${encodeURIComponent(mailSubject)}`;

        const link = document.createElement('a');
        link.href = mailtoUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        const status = document.getElementById('smc-vdf-status');
        status.innerHTML = `
            <div style="color:#17a2b8; font-weight:bold;">📧 Correo de Outlook preparado (${mailSubject}).</div>
            <div style="color:#ddd;">Haz clic en el cuerpo del correo, pulsa <b>Ctrl + V</b> y revísalo antes de darle a Enviar.</div>
        `;
    }

    window.addEventListener('load', () => {
        setTimeout(createUI, 1200);
    });
})();