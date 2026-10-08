// ==UserScript==
// @name         Generador Reporte ICFs (Zona  >= 36h)
// @namespace    violentmonkey.custom
// @version      1.6
// @description  Pregunta la zona al inicio, la inyecta directamente en Search ResponsableICF, filtra Devuelta NO y aging >= 36h
// @match        http://mxmefm01.wnet/private/zc/tools/smc/edt_icfs*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1. Botón inicial flotante
    const btnIniciar = document.createElement('button');
    btnIniciar.innerText = '📋 Reporte Zonas (>=36h)';
    btnIniciar.style.cssText = `
        position: fixed;
        bottom: 25px;
        right: 25px;
        z-index: 99999;
        padding: 12px 20px;
        background-color: #00796b;
        color: #ffffff;
        border: none;
        border-radius: 6px;
        font-weight: bold;
        font-size: 14px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        cursor: pointer;
    `;
    document.body.appendChild(btnIniciar);

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Espera a que el contenedor #example_wrapper o su tbody deje de mutar
    const esperarActualizacionDOM = (tiempoEsperaMs = 5000) => {
        return new Promise(resolve => {
            const wrapper = document.querySelector('#example_wrapper tbody') || document.querySelector('#example_wrapper') || document.body;
            let timer;

            const observer = new MutationObserver(() => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    observer.disconnect();
                    resolve();
                }, 1200);
            });

            observer.observe(wrapper, { childList: true, subtree: true });

            setTimeout(() => {
                observer.disconnect();
                resolve();
            }, tiempoEsperaMs);
        });
    };

    // Función para setear valor y disparar eventos de filtrado en DataTables
    const aplicarFiltroInput = async (selector, valor) => {
        const input = document.querySelector(selector);
        if (input) {
            input.focus();
            input.value = valor;
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
            input.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'Enter', keyCode: 13 }));
            input.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, key: 'Enter', keyCode: 13 }));

            await esperarActualizacionDOM(5000);
            await sleep(2500);
        }
    };

    // Modal inicial: Pregunta primero qué zona quieres filtrar
    const solicitarZonaInicial = () => {
        return new Promise(resolve => {
            const modalSel = document.createElement('div');
            modalSel.id = 'modal-seleccion-zona-previa';
            modalSel.style.cssText = `
                position: fixed;
                top: 0; left: 0; width: 100vw; height: 100vh;
                background-color: rgba(0,0,0,0.7);
                display: flex; justify-content: center; align-items: center;
                z-index: 1000000;
                font-family: Arial, sans-serif;
            `;

            modalSel.innerHTML = `
                <div style="background: #222; color: #fff; padding: 24px; border-radius: 8px; border: 2px solid #555; width: 350px; box-shadow: 0 4px 16px rgba(0,0,0,0.8);">
                    <h3 style="margin: 0 0 10px 0; font-size: 16px; color: #80cbc4;">Seleccionar Zona a Filtrar</h3>
                    <p style="font-size: 12px; color: #bbb; margin-bottom: 14px;">Este valor se colocará directamente en el buscador de <b>ResponsableICF</b>:</p>
                    <select id="select-zona-input" style="width: 100%; padding: 8px; background: #333; color: #fff; border: 1px solid #666; border-radius: 4px; font-size: 14px; margin-bottom: 16px;">
                        <option value="CENTRO">CENTRO (CLIENTES ZONA CENTRO)</option>
                        <option value="SUR">SUR (CLIENTES ZONA SUR)</option>
                        <option value="NORTE">NORTE (CLIENTES ZONA NORTE)</option>
                        <option value="ESTE">ESTE (CLIENTES ZONA ESTE)</option>
                        <option value="ZONA">ZONA (TODAS LAS ZONAS)</option>
                    </select>
                    <div style="display: flex; justify-content: flex-end; gap: 8px;">
                        <button id="btn-cancelar-previa" style="padding: 8px 14px; background: #555; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Cancelar</button>
                        <button id="btn-confirmar-previa" style="padding: 8px 14px; background: #00796b; color: #fff; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">Filtrar</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modalSel);

            document.getElementById('btn-confirmar-previa').onclick = () => {
                const valor = document.getElementById('select-zona-input').value;
                modalSel.remove();
                resolve(valor);
            };

            document.getElementById('btn-cancelar-previa').onclick = () => {
                modalSel.remove();
                resolve(null);
            };
        });
    };

    btnIniciar.addEventListener('click', async () => {
        // Eliminar modal previo si existiese
        const modalPrevio = document.getElementById('panel-reporte-zonas');
        if (modalPrevio) modalPrevio.remove();

        // 1. Preguntar la zona ANTES de tocar los inputs
        const zonaSeleccionada = await solicitarZonaInicial();
        if (!zonaSeleccionada) return;

        btnIniciar.style.backgroundColor = '#e65100';

        // 2. Colocar directamente la zona elegida en Search ResponsableICF
        btnIniciar.innerText = `⏳ Filtrando "${zonaSeleccionada}"...`;
        await aplicarFiltroInput(
            '#example_wrapper input.im[placeholder*="Search ResponsableICF"]',
            zonaSeleccionada
        );

        // 3. Colocar "NO" en Devuelta
        btnIniciar.innerText = '⏳ Filtrando "NO"...';
        await aplicarFiltroInput(
            '#example_wrapper input.im[placeholder*="Search Devuelta"]',
            'NO'
        );

        btnIniciar.innerText = '📋 Extrayendo datos...';

        const wrapper = document.getElementById('example_wrapper');
        if (!wrapper) {
            alert('No se encontró el contenedor #example_wrapper.');
            btnIniciar.innerText = '📋 Reporte Zonas (>=36h)';
            btnIniciar.style.backgroundColor = '#00796b';
            return;
        }

        const rows = wrapper.querySelectorAll('table#example tbody tr[role="row"]');
        const ahora = new Date();
        const datosFiltrados = [];

        rows.forEach(tr => {
            const tds = Array.from(tr.querySelectorAll('td'));
            if (tds.length < 50) return;

            // Índice 0: Aging
            const rawAging = tds[0]?.innerText.trim() || '';
            const matchAging = rawAging.match(/[\d]+([.,]\d+)?/);
            if (!matchAging) return;

            const valorAging = parseFloat(matchAging[0].replace(',', '.'));
            // Filtro de aging >= 36 (36 incluido en adelante)
            if (isNaN(valorAging) || valorAging < 36) return;

            // Índice 18: ResponsableICF
            const respICF = tds[18]?.innerText.trim() || '';

            // Extracción de columnas según estructura DataTables
            const codigo = tds[4]?.innerText.trim() || '';
            const fechaCreacion = tds[5]?.innerText.trim() || '';
            const icfRed = tds[8]?.innerText.trim() || '';
            const nodo = tds[14]?.innerText.trim() || '';
            const celda = tds[15]?.innerText.trim() || '';

            // Descripción (title si existe para evitar texto truncado con puntos suspensivos)
            const spanDesc = tds[44]?.querySelector('span[title]');
            const descripcion = spanDesc ? spanDesc.getAttribute('title').trim() : (tds[44]?.innerText.trim() || '');

            const zona = tds[49]?.innerText.trim() || '';

            // Conservar el color de fondo del aging
            const colorOriginal = tds[0]?.style.backgroundColor;
            const bgAging = colorOriginal ? `background-color: ${colorOriginal}; color: #ffffff;` : 'color: #ffffff;';

            datosFiltrados.push({
                aging: rawAging,
                bgAging,
                codigo,
                fechaCreacion,
                icfRed,
                descripcion,
                responsableICF: respICF,
                nodo,
                celda,
                zona
            });
        });

        btnIniciar.innerText = '📋 Reporte Zonas (>=36h)';
        btnIniciar.style.backgroundColor = '#00796b';

        if (datosFiltrados.length === 0) {
            alert(`No se encontraron registros en #example_wrapper con Aging >= 36 horas para "${zonaSeleccionada}".`);
            return;
        }

        // 4. Panel interactivo para rellenar comentarios
        const panel = document.createElement('div');
        panel.id = 'panel-reporte-zonas';
        panel.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 25px;
            width: 520px;
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
                <div style="border-bottom: 1px solid #444; padding-bottom: 10px; margin-bottom: 8px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                        <b style="color: #80cbc4;">${caso.codigo}</b>
                        <span style="color: #aaa;">Aging: ${caso.aging} | ${caso.responsableICF}</span>
                    </div>
                    <div style="font-size: 11px; color: #ccc; margin-bottom: 6px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${caso.descripcion}">
                        ${caso.descripcion || 'Sin descripción'}
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 6px;">
                        <textarea id="input-comentario-${i}" placeholder="Último comentario..." style="
                            width: 100%;
                            height: 40px;
                            background: #333;
                            color: #fff;
                            border: 1px solid #666;
                            border-radius: 4px;
                            padding: 6px;
                            box-sizing: border-box;
                            font-family: inherit;
                            font-size: 12px;
                            resize: vertical;
                        "></textarea>
                        <textarea id="input-peticiones-${i}" placeholder="Peticiones..." style="
                            width: 100%;
                            height: 40px;
                            background: #333;
                            color: #fff;
                            border: 1px solid #666;
                            border-radius: 4px;
                            padding: 6px;
                            box-sizing: border-box;
                            font-family: inherit;
                            font-size: 12px;
                            resize: vertical;
                        "></textarea>
                    </div>
                </div>
            `;
        });

        panel.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #555; padding-bottom: 6px;">
                <span style="font-weight: bold; font-size: 14px;">📝 Reporte ${zonaSeleccionada} (${datosFiltrados.length} tickets)</span>
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
            ">Copiar Reporte Final al Portapapeles</button>
        `;

        document.body.appendChild(panel);

        document.getElementById('btn-cerrar-panel').onclick = () => panel.remove();

        // 5. Copiar tabla final formateada
        document.getElementById('btn-confirmar-copia').onclick = () => {
            datosFiltrados.forEach((caso, i) => {
                const txtComentario = document.getElementById(`input-comentario-${i}`);
                const txtPeticiones = document.getElementById(`input-peticiones-${i}`);
                caso.ultimoComentario = txtComentario ? txtComentario.value.trim() : '';
                caso.peticiones = txtPeticiones ? txtPeticiones.value.trim() : '';
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
                        <td style="border: 1px solid #777; padding: 4px 8px;">${f.codigo}</td>
                        <td style="border: 1px solid #777; padding: 4px 8px;">${f.fechaCreacion}</td>
                        <td style="border: 1px solid #777; padding: 4px 8px;">${f.icfRed}</td>
                        <td style="border: 1px solid #777; padding: 4px 8px;">${f.descripcion}</td>
                        <td style="border: 1px solid #777; padding: 4px 8px;">${f.responsableICF}</td>
                        <td style="border: 1px solid #777; padding: 4px 8px;">${f.nodo}</td>
                        <td style="border: 1px solid #777; padding: 4px 8px;">${f.celda}</td>
                        <td style="border: 1px solid #777; padding: 4px 8px;">${f.zona}</td>
                        <td style="border: 1px solid #777; padding: 4px 8px;">${f.ultimoComentario}</td>
                        <td style="border: 1px solid #777; padding: 4px 8px;">${f.peticiones}</td>
                    </tr>`;
            });

            const encabezadoReporte = zonaSeleccionada === 'ZONA' ? 'ZONAS' : `ZONA ${zonaSeleccionada}`;
            const htmlFinal = `
                <p>Buenos días,</p>
                <p>Adjunto el reporte de ICFs ${encabezadoReporte} con aging superior o igual a 36 horas a día ${fechaHoy}.</p>
                <br/>
                <table style="border-collapse: collapse; width: 100%; font-family: Calibri, Arial, sans-serif; font-size: 10pt; color: #ffffff;">
                    <thead>
                        <tr style="background-color: #00796b; color: #ffffff; font-weight: bold; text-align: left;">
                            <th style="border: 1px solid #777; padding: 4px 8px;">aging</th>
                            <th style="border: 1px solid #777; padding: 4px 8px;">codigo_oceane</th>
                            <th style="border: 1px solid #777; padding: 4px 8px;">fecha_creacion</th>
                            <th style="border: 1px solid #777; padding: 4px 8px;">ICF_RED</th>
                            <th style="border: 1px solid #777; padding: 4px 8px;">descripcion</th>
                            <th style="border: 1px solid #777; padding: 4px 8px;">ResponsableICF</th>
                            <th style="border: 1px solid #777; padding: 4px 8px;">Nodo</th>
                            <th style="border: 1px solid #777; padding: 4px 8px;">Celda</th>
                            <th style="border: 1px solid #777; padding: 4px 8px;">zona</th>
                            <th style="border: 1px solid #777; padding: 4px 8px;">Ultimo comentario</th>
                            <th style="border: 1px solid #777; padding: 4px 8px;">Peticiones</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${htmlRows}
                    </tbody>
                </table>
            `;

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
                        btnIniciar.innerText = '📋 Reporte Zonas (>=36h)';
                        btnIniciar.style.backgroundColor = '#00796b';
                    }, 2500);
                } else {
                    alert('No se pudo copiar. Inténtalo de nuevo.');
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