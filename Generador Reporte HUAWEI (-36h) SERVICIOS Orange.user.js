// ==UserScript==
// @name         Generador Reporte HUAWEI (>36h) SERVICIOS Orange
// @namespace    violentmonkey.custom
// @version      2.6
// @description  Filtra Devuelta=NO, gestiona comentarios, copia correo y abre la app de Outlook
// @match        http://mxmefm01.wnet/private/zc/tools/smc/edt_MM*
// @match        http://mxmefm01.wnet/private/zc/tools/smc/edt_servicios
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const wait = (ms) => new Promise(res => setTimeout(res, ms));

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

    async function esperarCargaCompleta(delayBase = 4500) {
        const inicio = Date.now();
        while (Date.now() - inicio < delayBase) {
            const cargando = document.querySelector('.dataTables_processing[style*="display: block"]');
            if (!cargando && (Date.now() - inicio >= delayBase)) break;
            await wait(300);
        }
    }

    // Botón inicial flotante
    const btnIniciar = document.createElement('button');
    btnIniciar.innerText = '📋 Preparar Reporte';
    btnIniciar.style.cssText = `
        position: fixed;
        bottom: 25px;
        right: 25px;
        z-index: 99999;
        padding: 12px 20px;
        background-color: #d32f2f;
        color: #ffffff;
        border: none;
        border-radius: 6px;
        font-weight: bold;
        font-size: 14px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        cursor: pointer;
    `;
    document.body.appendChild(btnIniciar);

    btnIniciar.addEventListener('click', async () => {
        const textoOriginal = btnIniciar.innerText;
        btnIniciar.innerText = '⏳ Aplicando filtro...';
        btnIniciar.style.pointerEvents = 'none';

        // 1. Filtrar Devuelta = "NO" y esperar carga
        setInput("Search Devuelta", "NO");
        await esperarCargaCompleta(4500);

        btnIniciar.innerText = textoOriginal;
        btnIniciar.style.pointerEvents = 'auto';

        const modalPrevio = document.getElementById('panel-reporte-huawei');
        if (modalPrevio) modalPrevio.remove();

        const rows = document.querySelectorAll('tr[role="row"]');
        const ahora = new Date();
        const datosFiltrados = [];

        rows.forEach(tr => {
            const tds = Array.from(tr.querySelectorAll('td'));
            if (tds.length < 8) return;

            // Filtro 1: [ESTRUCTURAL
            const esEstructural = tds.some(td => {
                const title = td.querySelector('span[title]')?.getAttribute('title') || '';
                return /\[ESTRUCTURAL/i.test(td.innerText + ' ' + title);
            });
            if (esEstructural) return;

            // Filtro 2: Descartar si cola exacta es CFM-MOVIL
            const celdasConTexto = tds.map(td => td.innerText.trim()).filter(txt => txt.length > 0);
            const ultimaCeldaTexto = celdasConTexto[celdasConTexto.length - 1] || '';
            if (ultimaCeldaTexto === 'CFM-MOVIL') return;

            // Filtro 3: Aging numérico > 36
            const rawAging = tds[0]?.innerText.trim() || '';
            const matchAging = rawAging.match(/[\d]+([.,]\d+)?/);
            if (!matchAging) return;

            const valorAging = parseFloat(matchAging[0].replace(',', '.'));
            if (isNaN(valorAging) || valorAging <= 36) return;

            // Extraer fecha de activación
            const idxFecha = tds.findIndex(td => /\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}/.test(td.innerText.trim()));
            const activacion = idxFecha !== -1 ? tds[idxFecha].innerText.trim() : (tds[3]?.innerText.trim() || '');

            const prio = tds[1]?.innerText.trim() || '';
            const codigo = tds[2]?.innerText.trim() || '';
            const tipoIcf = tds[4]?.innerText.trim() || '';
            const servicio = tds[5]?.innerText.trim() || '';
            const subservicio = tds[6]?.innerText.trim() || '';

            const colorOriginal = tds[0]?.style.backgroundColor;
            const bgAging = colorOriginal ? `background-color: ${colorOriginal}; color: #ffffff;` : 'color: #ffffff;';

            datosFiltrados.push({
                aging: rawAging,
                bgAging,
                prio,
                codigo,
                activacion,
                tipoIcf,
                servicio,
                subservicio
            });
        });

        if (datosFiltrados.length === 0) {
            alert('No se encontraron registros que cumplan las condiciones (Aging > 36, sin estructural, fuera de CFM-MOVIL y Devuelta = NO).');
            return;
        }

        // Crear panel flotante de comentarios
        const panel = document.createElement('div');
        panel.id = 'panel-reporte-huawei';
        panel.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 25px;
            width: 480px;
            max-height: 75vh;
            background-color: #222;
            color: #fff;
            border: 2px solid #555;
            border-radius: 8px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.6);
            z-index: 999999;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            font-family: Arial, sans-serif;
            font-size: 13px;
        `;

        let listadoHtml = '';
        datosFiltrados.forEach((caso, i) => {
            listadoHtml += `
                <div style="border-bottom: 1px solid #444; padding-bottom: 8px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                        <b style="color: #64b5f6;">${caso.codigo}</b>
                        <span style="color: #aaa;">Aging: ${caso.aging} | Prio: ${caso.prio}</span>
                    </div>
                    <textarea id="comment-input-${i}" placeholder="Pega el comentario aquí..." style="
                        width: 100%;
                        height: 48px;
                        background: #333;
                        color: #fff;
                        border: 1px solid #666;
                        border-radius: 4px;
                        padding: 6px;
                        box-sizing: border-box;
                        font-family: inherit;
                        resize: vertical;
                    "></textarea>
                </div>
            `;
        });

        panel.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #555; padding-bottom: 6px;">
                <span style="font-weight: bold; font-size: 14px;">📝 Reporte HUAWEI (${datosFiltrados.length} tickets)</span>
                <button id="btn-cerrar-panel" style="background: none; border: none; color: #fff; font-size: 16px; cursor: pointer;">✕</button>
            </div>
            <div style="overflow-y: auto; flex: 1; padding-right: 4px;">
                ${listadoHtml}
            </div>
            <button id="btn-confirmar-copia" style="
                width: 100%;
                background-color: #2e7d32;
                color: #ffffff;
                border: none;
                border-radius: 5px;
                padding: 10px;
                font-size: 14px;
                font-weight: bold;
                cursor: pointer;
            ">✉️ Copiar Reporte y Abrir Outlook</button>
        `;

        document.body.appendChild(panel);

        document.getElementById('btn-cerrar-panel').onclick = () => panel.remove();

        // Acción al confirmar: Copiar formato enriquecido y abrir la app de Outlook
        document.getElementById('btn-confirmar-copia').onclick = () => {
            datosFiltrados.forEach((caso, i) => {
                const txt = document.getElementById(`comment-input-${i}`);
                caso.comentario = txt ? txt.value.trim() : '';
            });

            const dd = String(ahora.getDate()).padStart(2, '0');
            const mm = String(ahora.getMonth() + 1).padStart(2, '0');
            const yyyy = ahora.getFullYear();
            const fechaHoy = `${dd}/${mm}/${yyyy}`;

            let htmlRows = '';
            datosFiltrados.forEach(f => {
                htmlRows += `
                    <tr>
                        <td style="border: 1px solid #777; padding: 4px 8px; ${f.bgAging} font-weight: bold;">${f.aging}</td>
                        <td style="border: 1px solid #777; padding: 4px 8px;">${f.prio}</td>
                        <td style="border: 1px solid #777; padding: 4px 8px;">${f.codigo}</td>
                        <td style="border: 1px solid #777; padding: 4px 8px;">${f.activacion}</td>
                        <td style="border: 1px solid #777; padding: 4px 8px;">${f.tipoIcf}</td>
                        <td style="border: 1px solid #777; padding: 4px 8px;">${f.servicio}</td>
                        <td style="border: 1px solid #777; padding: 4px 8px;">${f.subservicio}</td>
                        <td style="border: 1px solid #777; padding: 4px 8px;">${f.comentario}</td>
                    </tr>`;
            });

            const htmlFinal = `
                <div style="font-family: Calibri, Arial, sans-serif; font-size: 11pt; color: #000000;">
                    <p>Buenos días,</p>
                    <p>Os escalamos los tickets con más de 36h:</p>
                    <br/>
                    <table style="border-collapse: collapse; width: 100%; font-family: Calibri, Arial, sans-serif; font-size: 10pt; color: #ffffff;">
                        <thead>
                            <tr style="background-color: #c8963e; color: #ffffff; font-weight: bold; text-align: left;">
                                <th style="border: 1px solid #777; padding: 4px 8px;">aging</th>
                                <th style="border: 1px solid #777; padding: 4px 8px;">Prio</th>
                                <th style="border: 1px solid #777; padding: 4px 8px;">codigo_oceane</th>
                                <th style="border: 1px solid #777; padding: 4px 8px;">activacion</th>
                                <th style="border: 1px solid #777; padding: 4px 8px;">tipo_icf</th>
                                <th style="border: 1px solid #777; padding: 4px 8px;">servicio</th>
                                <th style="border: 1px solid #777; padding: 4px 8px;">subservicio</th>
                                <th style="border: 1px solid #777; padding: 4px 8px;">Comentario</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${htmlRows}
                        </tbody>
                    </table>
                    <br/>
                    <p>Un saludo,</p>
                </div>
            `;

            // Copia al portapapeles
            const tempContainer = document.createElement('div');
            tempContainer.style.position = 'fixed';
            tempContainer.style.left = '-9999px';
            tempContainer.style.top = '0';
            tempContainer.innerHTML = htmlFinal;
            document.body.appendChild(tempContainer);

            const range = document.createRange();
            range.selectNodeContents(tempContainer);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);

            try {
                const exito = document.execCommand('copy');
                if (exito) {
                    panel.remove();
                    btnIniciar.innerText = '✅ ¡Copiado con éxito!';
                    btnIniciar.style.backgroundColor = '#2e7d32';
                    setTimeout(() => {
                        btnIniciar.innerText = '📋 Preparar Reporte';
                        btnIniciar.style.backgroundColor = '#d32f2f';
                    }, 2500);

                    // Destinatarios y asunto
                    const para = "ana.corredor@masorange.es";
                    const cc = "icf@iatelecom.es; net.cso@masorange.es";
                    const asunto = `RE: ESCALADOS TTs 36 HORAS GNOCe ${fechaHoy}`;

                    // Abrir la app instalada de Outlook
                    const mailtoUrl = `mailto:${encodeURIComponent(para)}?cc=${encodeURIComponent(cc)}&subject=${encodeURIComponent(asunto)}`;
                    window.location.href = mailtoUrl;

                    alert(`¡Reporte preparado!\n\n1. Asunto: ${asunto}\n2. Se ha abierto la aplicación de Outlook con Para, CC y Asunto listos.\n3. El texto y la tabla están copiados: pulsa Ctrl + V en el cuerpo del correo.`);
                } else {
                    alert('No se pudo copiar el reporte. Inténtalo de nuevo.');
                }
            } catch (err) {
                console.error(err);
                alert('Error al copiar.');
            } finally {
                selection.removeAllRanges();
                document.body.removeChild(tempContainer);
            }
        };
    });
})();