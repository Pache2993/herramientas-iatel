// ==UserScript==
// @name         Generador Reporte ICFs (Zona >= 36h)
// @namespace    violentmonkey.custom
// @version      2.3
// @description  Pregunta la zona al inicio, la inyecta directamente en Search ResponsableICF, filtra Devuelta NO y aging >= 36h con diseño IATelecom, mailto para Outlook y título dinámico (Ordenado de mayor a menor)
// @match        http://mxmefm01.wnet/private/zc/tools/smc/edt_icfs*
// @grant        none
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
        'check':     '<path d="m5 12 5 5 9-10"/>',
        'x':         '<path d="M18 6 6 18M6 6l12 12"/>',
        'minimize':  '<path d="M4 14h6v6M20 10h-6V4"/>',
        'maximize':  '<path d="M14 4h6v6M10 20H4v-6"/>',
        'ticket':    '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>',
        'map-pin':   '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'
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
            --ia-surface-bar: rgba(13, 17, 23, 0.88);
            --ia-surface-panel: rgba(13, 17, 23, 0.95);
            --ia-surface-item: rgba(255, 255, 255, 0.03);
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

        .ia-fab {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: var(--ia-z-top);
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 14px;
            background: var(--ia-surface-bar);
            backdrop-filter: blur(14px) saturate(180%);
            -webkit-backdrop-filter: blur(14px) saturate(180%);
            border: 1px solid var(--ia-border-strong);
            border-left: 3px solid var(--ia-brand-500);
            border-radius: var(--ia-r-lg);
            color: var(--ia-text);
            font-family: var(--ia-font);
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
            transition: all 0.2s var(--ia-ease);
            user-select: none;
        }
        .ia-fab:hover {
            background: var(--ia-hover);
            border-color: var(--ia-brand-500);
            box-shadow: 0 0 16px var(--ia-brand-glow);
            transform: translateY(-2px);
        }
        .ia-fab.is-busy {
            color: var(--ia-brand-500);
            pointer-events: none;
        }

        /* Overlay modal inicial */
        .ia-modal-overlay {
            position: fixed;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: var(--ia-z-top);
            font-family: var(--ia-font);
        }
        .ia-modal-box {
            background: var(--ia-surface-panel);
            border: 1px solid var(--ia-border-strong);
            border-radius: var(--ia-r-lg);
            width: 400px;
            max-width: 90vw;
            box-shadow: var(--ia-sh-panel);
            padding: 22px;
            display: flex;
            flex-direction: column;
            gap: 14px;
            color: var(--ia-text);
        }
        .ia-modal-title {
            font-size: 14px;
            font-weight: 700;
            color: var(--ia-brand-500);
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .ia-modal-desc {
            font-size: 12px;
            color: var(--ia-text-2);
            line-height: 1.4;
        }

        .ia-select-wrapper {
            position: relative;
            width: 100%;
        }
        .ia-select {
            width: 100%;
            height: 38px;
            padding: 0 32px 0 12px;
            background: #161b22;
            color: #f0f6fc;
            border: 1px solid var(--ia-border-strong);
            border-radius: var(--ia-r-md);
            font-size: 13px;
            font-family: inherit;
            outline: none;
            cursor: pointer;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            transition: border-color 0.18s, box-shadow 0.18s;
        }
        .ia-select:focus {
            border-color: var(--ia-brand-500);
            box-shadow: 0 0 0 2px rgba(0, 153, 255, 0.2);
        }
        .ia-select option {
            background: #161b22;
            color: #f0f6fc;
            padding: 8px;
        }
        .ia-select-arrow {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
            color: var(--ia-text-3);
            display: flex;
            align-items: center;
        }

        .ia-modal-actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            margin-top: 6px;
        }

        /* Panel lateral */
        .ia-side-panel {
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 500px;
            max-width: calc(100vw - 48px);
            max-height: calc(100vh - 48px);
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
            width: 320px;
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
            height: 20px;
            width: auto;
        }
        .ia-panel-title {
            font-size: 13px;
            font-weight: 700;
            color: var(--ia-text);
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .ia-badge {
            font-size: 10px;
            font-family: var(--ia-mono);
            background: var(--ia-brand-soft);
            color: var(--ia-brand-500);
            border: 1px solid var(--ia-brand-glow);
            padding: 2px 6px;
            border-radius: 10px;
            font-weight: 500;
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
            flex: 1;
            overflow-y: auto;
            padding: 12px 14px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .ia-card {
            background: var(--ia-surface-item);
            border: 1px solid var(--ia-border);
            border-left: 2px solid var(--ia-brand-500);
            border-radius: var(--ia-r-md);
            padding: 10px 12px;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .ia-card-head {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .ia-ticket-code {
            font-family: var(--ia-mono);
            font-size: 12px;
            font-weight: 700;
            color: var(--ia-brand-500);
            display: flex;
            align-items: center;
            gap: 4px;
        }
        .ia-card-meta {
            font-size: 11px;
            color: var(--ia-text-3);
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .ia-aging-tag {
            font-family: var(--ia-mono);
            font-weight: 600;
            padding: 1px 5px;
            border-radius: 3px;
        }
        .ia-card-desc {
            font-size: 11px;
            color: var(--ia-text-2);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .ia-control {
            width: 100%;
            height: 38px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid var(--ia-border);
            border-radius: var(--ia-r-sm);
            color: var(--ia-text);
            padding: 6px 8px;
            font-family: var(--ia-font);
            font-size: 11px;
            outline: none;
            resize: vertical;
            transition: border-color 0.2s;
        }
        .ia-control:focus {
            border-color: var(--ia-border-focus);
            box-shadow: 0 0 0 2px rgba(0, 153, 255, 0.15);
        }

        .ia-panel-footer {
            padding: 10px 14px;
            border-top: 1px solid var(--ia-border);
            background: rgba(255, 255, 255, 0.01);
            display: flex;
            gap: 8px;
        }
        .ia-btn-primary {
            flex: 1;
            height: 34px;
            background: var(--ia-brand-500);
            border: 1px solid var(--ia-brand-500);
            border-radius: var(--ia-r-md);
            color: #ffffff;
            font-family: var(--ia-font);
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            transition: all 0.18s var(--ia-ease);
        }
        .ia-btn-primary:hover {
            background: var(--ia-brand-600);
            border-color: var(--ia-brand-600);
            box-shadow: 0 0 14px var(--ia-brand-glow);
        }
        .ia-btn-secondary {
            flex: 1;
            height: 34px;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid var(--ia-border-strong);
            border-radius: var(--ia-r-md);
            color: #ffffff;
            font-family: var(--ia-font);
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            transition: all 0.18s var(--ia-ease);
        }
        .ia-btn-secondary:hover {
            background: rgba(255, 255, 255, 0.14);
            border-color: var(--ia-border-focus);
        }
        .ia-btn-outline {
            height: 30px;
            padding: 0 14px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid var(--ia-border);
            border-radius: var(--ia-r-md);
            color: var(--ia-text);
            font-family: var(--ia-font);
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.18s var(--ia-ease);
        }
        .ia-btn-outline:hover {
            background: var(--ia-hover);
            border-color: var(--ia-border-strong);
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

    const MAPA_ZONAS = {
        'CENTRO': { tag: 'RCEN', desc: 'región CENTRO' },
        'SUR':    { tag: 'RSUR', desc: 'región SUR' },
        'NORTE':  { tag: 'RNOR', desc: 'región NORTE' },
        'ESTE':   { tag: 'RESTE', desc: 'región ESTE' },
        'ZONA':   { tag: 'RZONAS', desc: 'todas las regiones' }
    };

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

    function obtenerFechaHoy() {
        const ahora = new Date();
        const dd = String(ahora.getDate()).padStart(2, '0');
        const mm = String(ahora.getMonth() + 1).padStart(2, '0');
        const yyyy = ahora.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
    }

    function abrirOutlookMailto(zona) {
        const fechaHoy = obtenerFechaHoy();
        const infoZona = MAPA_ZONAS[zona] || { tag: `R${zona}`, desc: `región ${zona}` };
        
        const to = "gloria.arias@orange.es";
        const cc = "icf@iatelecom.es,net.cso@orange.es";
        const subject = `BACKLOG ICFs [${infoZona.tag}] Priorización incidencias pendientes - ${fechaHoy}`;

        const mailtoUrl = `mailto:${to}?cc=${encodeURIComponent(cc)}&subject=${encodeURIComponent(subject)}`;
        window.location.href = mailtoUrl;
    }

    // =====================================================================
    // UI BUILDER (SHADOW DOM ISOLATED)
    // =====================================================================

    let host = document.getElementById('icf-reporte-zonas-host');
    if (!host) {
        host = document.createElement('div');
        host.id = 'icf-reporte-zonas-host';
        document.body.appendChild(host);
    }
    const shadowRoot = host.attachShadow({ mode: 'open' });

    const styleEl = document.createElement('style');
    styleEl.textContent = IADS_CSS;
    shadowRoot.appendChild(styleEl);

    // Modal inicial estilizado para elegir la zona
    const solicitarZonaInicial = () => {
        return new Promise(resolve => {
            const modalSel = document.createElement('div');
            modalSel.id = 'modal-seleccion-zona-previa';
            modalSel.className = 'ia-modal-overlay';

            modalSel.innerHTML = `
                <div class="ia-modal-box">
                    <div class="ia-modal-title">
                        ${iaIcon('map-pin', 16)}
                        <span>Seleccionar Zona a Filtrar</span>
                    </div>
                    <div class="ia-modal-desc">
                        Este valor se inyectará directamente en el filtro de búsqueda de <b>ResponsableICF</b>:
                    </div>
                    <div class="ia-select-wrapper">
                        <select id="select-zona-input" class="ia-select">
                            <option value="CENTRO">CENTRO (CLIENTES ZONA CENTRO)</option>
                            <option value="SUR">SUR (CLIENTES ZONA SUR)</option>
                            <option value="NORTE">NORTE (CLIENTES ZONA NORTE)</option>
                            <option value="ESTE">ESTE (CLIENTES ZONA ESTE)</option>
                            <option value="ZONA">ZONA (TODAS LAS ZONAS)</option>
                        </select>
                        <div class="ia-select-arrow">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m6 9 6 6 6-6"/>
                            </svg>
                        </div>
                    </div>
                    <div class="ia-modal-actions">
                        <button id="btn-cancelar-previa" class="ia-btn-outline">Cancelar</button>
                        <button id="btn-confirmar-previa" class="ia-btn-primary" style="width: auto; padding: 0 16px; height: 30px;">Filtrar</button>
                    </div>
                </div>
            `;
            shadowRoot.appendChild(modalSel);

            shadowRoot.getElementById('btn-confirmar-previa').onclick = () => {
                const valor = shadowRoot.getElementById('select-zona-input').value;
                modalSel.remove();
                resolve(valor);
            };

            shadowRoot.getElementById('btn-cancelar-previa').onclick = () => {
                modalSel.remove();
                resolve(null);
            };
        });
    };

    // Botón flotante inicial
    const btnFab = document.createElement('button');
    btnFab.className = 'ia-fab';
    btnFab.innerHTML = `${iaIcon('map-pin', 16)}<span>Reporte Zonas (≥36h)</span>`;
    shadowRoot.appendChild(btnFab);

    btnFab.addEventListener('click', async () => {
        const panelPrevio = shadowRoot.getElementById('ia-side-panel');
        if (panelPrevio) panelPrevio.remove();

        // 1. Preguntar zona
        const zonaSeleccionada = await solicitarZonaInicial();
        if (!zonaSeleccionada) return;

        btnFab.classList.add('is-busy');

        // 2. Filtrar ResponsableICF
        btnFab.innerHTML = `<span class="ia-spinner"></span><span>Filtrando "${zonaSeleccionada}"...</span>`;
        await aplicarFiltroInput(
            '#example_wrapper input.im[placeholder*="Search ResponsableICF"]',
            zonaSeleccionada
        );

        // 3. Filtrar Devuelta = NO
        btnFab.innerHTML = `<span class="ia-spinner"></span><span>Filtrando "NO"...</span>`;
        await aplicarFiltroInput(
            '#example_wrapper input.im[placeholder*="Search Devuelta"]',
            'NO'
        );

        btnFab.innerHTML = `<span class="ia-spinner"></span><span>Extrayendo datos...</span>`;

        const wrapper = document.getElementById('example_wrapper');
        if (!wrapper) {
            alert('No se encontró el contenedor #example_wrapper.');
            btnFab.classList.remove('is-busy');
            btnFab.innerHTML = `${iaIcon('map-pin', 16)}<span>Reporte Zonas (≥36h)</span>`;
            return;
        }

        const rows = wrapper.querySelectorAll('table#example tbody tr[role="row"]');
        const datosFiltrados = [];

        rows.forEach(tr => {
            const tds = Array.from(tr.querySelectorAll('td'));
            if (tds.length < 50) return;

            // Índice 0: Aging
            const rawAging = tds[0]?.innerText.trim() || '';
            const matchAging = rawAging.match(/[\d]+([.,]\d+)?/);
            if (!matchAging) return;

            const valorAging = parseFloat(matchAging[0].replace(',', '.'));
            if (isNaN(valorAging) || valorAging < 36) return;

            // Índice 18: ResponsableICF
            const respICF = tds[18]?.innerText.trim() || '';

            const codigo = tds[4]?.innerText.trim() || '';
            const fechaCreacion = tds[5]?.innerText.trim() || '';
            const icfRed = tds[8]?.innerText.trim() || '';
            const nodo = tds[14]?.innerText.trim() || '';
            const celda = tds[15]?.innerText.trim() || '';

            const spanDesc = tds[44]?.querySelector('span[title]');
            const descripcion = spanDesc ? spanDesc.getAttribute('title').trim() : (tds[44]?.innerText.trim() || '');

            const zona = tds[49]?.innerText.trim() || '';
            const colorOriginal = tds[0]?.style.backgroundColor;
            const bgAging = colorOriginal ? `background-color: ${colorOriginal}; color: #ffffff;` : 'color: #ffffff;';

            datosFiltrados.push({
                aging: rawAging,
                valorNumAging: valorAging, // <-- Guardamos el valor numérico aquí
                bgAging,
                colorOriginal,
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

        // ---------------------------------------------------------
        // NUEVA FUNCIONALIDAD: Ordenar por aging de mayor a menor
        // ---------------------------------------------------------
        datosFiltrados.sort((a, b) => b.valorNumAging - a.valorNumAging);

        btnFab.classList.remove('is-busy');
        btnFab.innerHTML = `${iaIcon('map-pin', 16)}<span>Reporte Zonas (≥36h)</span>`;

        if (datosFiltrados.length === 0) {
            alert(`No se encontraron registros en #example_wrapper con Aging >= 36 horas para "${zonaSeleccionada}".`);
            return;
        }

        // Crear ventana lateral
        const panel = document.createElement('div');
        panel.id = 'ia-side-panel';
        panel.className = 'ia-side-panel';

        let listadoHtml = '';
        datosFiltrados.forEach((caso, i) => {
            const agingTagStyle = caso.colorOriginal ? `background-color: ${caso.colorOriginal}; color: #fff;` : 'background: rgba(255,255,255,0.1); color: #fff;';
            listadoHtml += `
                <div class="ia-card">
                    <div class="ia-card-head">
                        <span class="ia-ticket-code">${iaIcon('ticket', 13)} ${caso.codigo}</span>
                        <div class="ia-card-meta">
                            <span class="ia-aging-tag" style="${agingTagStyle}">${caso.aging}</span>
                            <span>${caso.responsableICF || 'N/A'}</span>
                        </div>
                    </div>
                    <div class="ia-card-desc" title="${caso.descripcion}">
                        ${caso.descripcion || 'Sin descripción'}
                    </div>
                    <textarea id="input-comentario-${i}" class="ia-control" placeholder="Último comentario..."></textarea>
                    <textarea id="input-peticiones-${i}" class="ia-control" placeholder="Peticiones..."></textarea>
                </div>
            `;
        });

        panel.innerHTML = `
            <div class="ia-panel-header">
                <div class="ia-panel-brand">
                    ${IADS_LOGO_SVG}
                    <span class="ia-panel-title">
                        Casos pendientes ${zonaSeleccionada} (≥36h) <span class="ia-badge">${datosFiltrados.length} tickets</span>
                    </span>
                </div>
                <div class="ia-actions">
                    <button id="btn-minimize-panel" class="ia-icon-btn" title="Minimizar / Restaurar">${iaIcon('minimize', 14)}</button>
                    <button id="btn-cerrar-panel" class="ia-icon-btn btn-close" title="Cerrar">${iaIcon('x', 14)}</button>
                </div>
            </div>
            <div id="ia-panel-content" class="ia-panel-body">
                ${listadoHtml}
            </div>
            <div id="ia-panel-actions" class="ia-panel-footer">
                <button id="btn-confirmar-copia" class="ia-btn-primary">
                    ${iaIcon('clipboard', 14)} Copiar Reporte
                </button>
                <button id="btn-abrir-outlook" class="ia-btn-secondary" title="Abrir Outlook con destinatarios y asunto">
                    ${iaIcon('mail', 14)} Abrir Outlook
                </button>
            </div>
        `;

        shadowRoot.appendChild(panel);

        // Control Minimizar / Restaurar
        const btnMinimizar = shadowRoot.getElementById('btn-minimize-panel');
        const panelContent = shadowRoot.getElementById('ia-panel-content');
        const panelActions = shadowRoot.getElementById('ia-panel-actions');
        let isMinimized = false;

        btnMinimizar.onclick = () => {
            isMinimized = !isMinimized;
            panel.classList.toggle('is-minimized', isMinimized);
            panelContent.style.display = isMinimized ? 'none' : 'flex';
            panelActions.style.display = isMinimized ? 'none' : 'flex';
            btnMinimizar.innerHTML = isMinimized ? iaIcon('maximize', 14) : iaIcon('minimize', 14);
        };

        // Control Cerrar
        shadowRoot.getElementById('btn-cerrar-panel').onclick = () => panel.remove();

        // Control Abrir Outlook
        shadowRoot.getElementById('btn-abrir-outlook').onclick = () => {
            abrirOutlookMailto(zonaSeleccionada);
        };

        // Control Copiar
        shadowRoot.getElementById('btn-confirmar-copia').onclick = () => {
            datosFiltrados.forEach((caso, i) => {
                const txtComentario = shadowRoot.getElementById(`input-comentario-${i}`);
                const txtPeticiones = shadowRoot.getElementById(`input-peticiones-${i}`);
                caso.ultimoComentario = txtComentario ? txtComentario.value.trim() : '';
                caso.peticiones = txtPeticiones ? txtPeticiones.value.trim() : '';
            });

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

            const infoZona = MAPA_ZONAS[zonaSeleccionada] || { tag: `R${zonaSeleccionada}`, desc: `región ${zonaSeleccionada}` };
            const textoRegion = infoZona.desc;

            const htmlFinal = `
                <div style="font-family: Calibri, Arial, sans-serif; font-size: 11pt; color: #ffffff;">
                    <p style="margin: 0 0 14px 0;">Buenos días,</p>
                    <p style="margin: 0 0 16px 0;">Las siguientes ICF nos aparecen en backlog de ${textoRegion} pendientes de revisión o actualización.</p>
                    <br/>
                    <table style="border-collapse: collapse; width: 100%; font-family: Calibri, Arial, sans-serif; font-size: 9.5pt; color: #ffffff;">
                        <thead>
                            <tr style="background-color: #0080d7; color: #ffffff; font-weight: bold; text-align: left;">
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
                    <br/>
                    <p style="margin: 16px 0 0 0;">Saludos</p>
                </div>
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
                    const btnCopiar = shadowRoot.getElementById('btn-confirmar-copia');
                    btnCopiar.innerHTML = `${iaIcon('check', 14)} ¡Copiado!`;
                    btnCopiar.style.background = 'var(--ia-success)';
                    btnCopiar.style.borderColor = 'var(--ia-success)';
                    setTimeout(() => {
                        btnCopiar.innerHTML = `${iaIcon('clipboard', 14)} Copiar Reporte`;
                        btnCopiar.style.background = 'var(--ia-brand-500)';
                        btnCopiar.style.borderColor = 'var(--ia-brand-500)';
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
