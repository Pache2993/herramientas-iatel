// ==UserScript==
// @name         IATEL - Cargador Dinámico de Reportes (Oceane UI Categorizado) v2
// @namespace    http://tampermonkey.net/
// @version      3.3.6
// @description  Lanzador dinámico organizado por días y subcategorías con limpieza de reportes activos y acordeón exclusivo
// @match        http://mxmefm01.wnet/private/zc/tools/smc*
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_setClipboard
// @connect      raw.githubusercontent.com
// @updateURL    https://raw.githubusercontent.com/Pache2993/herramientas-iatel/refs/heads/main/suite-reportes.user.js
// @downloadURL  https://raw.githubusercontent.com/Pache2993/herramientas-iatel/refs/heads/main/suite-reportes.user.js
// ==/UserScript==

(function() {
    'use strict';

    // --- CONFIGURACIÓN REPOSITORIO GITHUB ---
    const BASE_GITHUB_URL = "https://raw.githubusercontent.com/Pache2993/herramientas-iatel/main/REPORTES/";

    // --- CATÁLOGO DE REPORTES ---
    const SCRIPTS = {
        HUAWEI_MM: { nombre: 'MasMovil +36h', archivo: 'Masmovil.user.js' },
        HUAWEI_ORANGE: { nombre: 'Servicios +36h', archivo: 'Servicios_orange_mas_36h.user.js' },
        HUAWEI_SERV_24_36: { nombre: 'Servicios 24h-36h', archivo: 'Servicios_orange_24h_hasta_36h.user.js' },
        CUST_COMP_24_36: { nombre: 'Cust. Complaints 24h-36h', archivo: 'Customer_24h_hasta_36h.user.js' },
        CUST_COMP_36: { nombre: 'Cust. Complaints +36h', archivo: 'Customer_mas_36h.user.js' },
        QBOOST_24_36: { nombre: 'QBOOST 24h-36h', archivo: 'Qboost_24h_hasta_36h.user.js' },
        QBOOST_36: { nombre: 'QBOOST +36h', archivo: 'QBOOST_mas_36h.user.js' },
        ZONA_36: { nombre: 'Zona +36h', archivo: 'Zona_mas_36h.user.js' },
        PCAR_36: { nombre: 'PCAR +36h', archivo: 'PCAR_mas_36h.user.js' },
        DESPLIEGUE: { nombre: 'Despliegue SMC', archivo: 'Incidencias_despliegue.user.js' },
        VDF_MC_DOWN: { nombre: 'VDF (MC y DOWN)', archivo: 'MC_DOWN.user.js' },
        RSSI_OUTLOOK: { nombre: 'RSSI VDF', archivo: 'RSSI_VDF.user.js' },
        BLOQUEOS: { nombre: 'Gestión Bloqueos FM', archivo: 'Gestion_de_bloqueos.user.js' },
        ESTRUCTURAL: { nombre: 'Estructural Servicios', archivo: 'Estructural_servicios.user.js' },
        REUNION_RSSI: { nombre: 'Reunión RSSI (3PP, FLM y otros)', archivo: 'Reunion_RSSI.user.js' }
    };

    const REPORTES_DIARIOS = [
        SCRIPTS.HUAWEI_SERV_24_36,
        SCRIPTS.HUAWEI_ORANGE,
        SCRIPTS.HUAWEI_MM
    ];

    const DIAS_DISTRIBUCION = [
        {
            diaId: 1, titulo: 'Lunes', icono: '📅',
            reportes: [...REPORTES_DIARIOS, SCRIPTS.CUST_COMP_24_36, SCRIPTS.QBOOST_24_36, SCRIPTS.VDF_MC_DOWN]
        },
        {
            diaId: 2, titulo: 'Martes', icono: '📅',
            reportes: [...REPORTES_DIARIOS, SCRIPTS.ZONA_36, SCRIPTS.PCAR_36, SCRIPTS.DESPLIEGUE]
        },
        {
            diaId: 3, titulo: 'Miércoles', icono: '📅',
            reportes: [...REPORTES_DIARIOS, SCRIPTS.CUST_COMP_36, SCRIPTS.RSSI_OUTLOOK, SCRIPTS.REUNION_RSSI]
        },
        {
            diaId: 4, titulo: 'Jueves', icono: '📅',
            reportes: [...REPORTES_DIARIOS, SCRIPTS.CUST_COMP_24_36, SCRIPTS.QBOOST_36, SCRIPTS.BLOQUEOS]
        },
        {
            diaId: 5, titulo: 'Viernes', icono: '📅',
            reportes: [...REPORTES_DIARIOS, SCRIPTS.ESTRUCTURAL]
        }
    ];

    function obtenerCategoria(rep) {
        const cadena = (rep.nombre + " " + rep.archivo).toLowerCase();
        if (cadena.includes('mas movil') || cadena.includes('masmovil')) return 'masmovil';
        if (cadena.includes('servicios') || cadena.includes('estructural') || cadena.includes('orange')) return 'servicios';
        return 'cobertura';
    }

    // --- ESTILOS GLASSMORPHISM ---
    GM_addStyle(`
        :root {
            --op-bg-glass: rgba(13, 17, 23, 0.75);
            --op-bg-dropdown: rgba(13, 17, 23, 0.94);
            --op-bg-card: rgba(255, 255, 255, 0.03);
            --op-bg-hover: rgba(255, 255, 255, 0.08);
            --op-border-subtle: rgba(255, 255, 255, 0.1);
            --op-border-focus: rgba(0, 153, 255, 0.6);
            --op-accent: #0099ff;
            --op-accent-glow: rgba(0, 153, 255, 0.35);
            --op-accent-bg: rgba(0, 153, 255, 0.12);
            --op-text-primary: #f0f6fc;
            --op-text-secondary: #c9d1d9;
            --op-text-muted: #8b949e;
            --op-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        #iatel-launcher-container {
            position: fixed; top: 12px; left: 0; right: 0; margin: 0 auto; width: max-content;
            display: flex; align-items: center; padding: 5px 10px; gap: 8px;
            font-family: var(--op-font-sans); font-size: 11px; color: var(--op-text-primary);
            z-index: 9999999; border-radius: 8px; user-select: none; opacity: 0.6;
            transition: opacity 0.25s ease, transform 0.25s ease;
        }
        #iatel-launcher-container:hover { opacity: 1 !important; transform: translateY(1px); }
        #iatel-launcher-container::before {
            content: ""; position: absolute; inset: 0;
            backdrop-filter: blur(14px) saturate(180%); -webkit-backdrop-filter: blur(14px) saturate(180%);
            background-color: var(--op-bg-glass); border: 1px solid var(--op-border-subtle);
            border-radius: 8px; box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
            z-index: -1; transition: all 0.25s ease;
        }
        #iatel-launcher-container:hover::before {
            background-color: rgba(13, 17, 23, 0.88); border-color: rgba(255, 255, 255, 0.18);
        }
        #iatel-launcher-container.helper-oculto { display: none !important; opacity: 0 !important; pointer-events: none !important; }
        .op-logo-wrapper { display: flex; align-items: center; padding-right: 10px; margin-right: 4px; border-right: 1px solid var(--op-border-subtle); }
        .op-logo-wrapper img { height: 18px; filter: drop-shadow(0 0 4px rgba(0,153,255,0.25)); }
        .op-ai-badge {
            font-size: 9px; color: var(--op-accent); margin-left: 6px; font-weight: 800;
            letter-spacing: 0.5px; text-transform: uppercase; background: var(--op-accent-bg);
            padding: 2px 5px; border-radius: 4px; border: 1px solid var(--op-accent-glow);
        }
        .btn-oceane {
            background: transparent; color: var(--op-text-secondary); border: 1px solid transparent;
            border-left: 2px solid transparent; padding: 0 12px; border-radius: 5px; cursor: pointer;
            font-family: inherit; font-weight: 600; font-size: 11px; transition: all 0.18s ease; height: 26px;
        }
        .btn-oceane:hover { color: var(--op-text-primary); background-color: var(--op-bg-hover); }
        .btn-oceane.active { color: var(--op-accent) !important; border-left: 2px solid var(--op-accent) !important; background-color: var(--op-accent-bg) !important; }
        .dropdown-oceane-panel {
            display: none; position: absolute; top: calc(100% + 8px); left: 50%; transform: translateX(-50%);
            background-color: var(--op-bg-dropdown); backdrop-filter: blur(16px) saturate(180%);
            border: 1px solid var(--op-border-subtle); border-radius: 8px; width: 330px; max-height: 80vh;
            overflow-y: auto; padding: 8px; gap: 6px; flex-direction: column; z-index: 9999999;
        }
        .oceane-day-accordion { background: var(--op-bg-card); border: 1px solid var(--op-border-subtle); border-radius: 6px; margin-bottom: 4px; overflow: hidden; }
        .oceane-day-summary { padding: 7px 10px; font-size: 11px; font-weight: 600; cursor: pointer; color: var(--op-text-secondary); display: flex; justify-content: space-between; }
        .oceane-day-summary:hover { background: var(--op-bg-hover); color: var(--op-text-primary); }
        .oceane-day-summary.is-today { color: var(--op-accent); background: var(--op-accent-bg); }
        .oceane-day-content { display: flex; flex-direction: column; gap: 8px; padding: 8px 6px; background: rgba(0, 0, 0, 0.25); }
        .oceane-subgroup { display: flex; flex-direction: column; gap: 3px; }
        .oceane-subgroup-title { font-size: 9px; font-weight: 700; text-transform: uppercase; padding: 2px 6px; border-radius: 3px; display: flex; align-items: center; gap: 5px; }
        .title-masmovil { color: #ffd000; background: rgba(255, 208, 0, 0.08); border-left: 2px solid #ffd000; }
        .title-servicios { color: #ff9100; background: rgba(255, 145, 0, 0.08); border-left: 2px solid #ff9100; }
        .title-cobertura { color: var(--op-accent); background: var(--op-accent-bg); border-left: 2px solid var(--op-accent); }
        .dropdown-item-oceane {
            display: block; width: 100%; background: transparent; color: var(--op-text-secondary);
            border: none; border-left: 2px solid transparent; padding: 5px 8px; cursor: pointer; text-align: left;
            font-size: 11px; font-weight: 500; transition: all 0.15s ease;
        }
        .dropdown-item-oceane:hover { color: var(--op-accent) !important; border-left: 2px solid var(--op-accent) !important; background-color: var(--op-accent-bg) !important; padding-left: 11px; }
        #helper-hide-toggle {
            position: fixed; right: 14px; bottom: 14px; width: 32px; height: 32px; border-radius: 50%;
            background-color: var(--op-bg-glass); border: 1px solid var(--op-border-subtle); color: var(--op-text-muted);
            display: flex; align-items: center; justify-content: center; z-index: 2147483647; cursor: pointer;
        }
        #helper-hide-toggle:hover { opacity: 1; color: #fff; background-color: var(--op-accent); }
        #helper-toast-msg {
            position: fixed; display: inline-flex; align-items: center; gap: 6px; height: 28px; padding: 0 12px;
            background-color: rgba(13, 17, 23, 0.9); border: 1px solid rgba(255, 255, 255, 0.12); border-left: 2px solid var(--op-accent);
            border-radius: 6px; color: var(--op-text-primary); z-index: 99999999; opacity: 0; font-size: 11px;
            transition: opacity 0.2s ease, transform 0.2s ease;
        }
    `);

    function mostrarToast(msg, icono = "✓") {
        let oldToast = document.getElementById("helper-toast-msg");
        if (oldToast) oldToast.remove();
        const toast = document.createElement("div");
        toast.id = "helper-toast-msg";
        toast.innerHTML = `<span style="color:var(--op-accent);font-weight:700;">${icono}</span><span>${msg}</span>`;
        const rect = menu.getBoundingClientRect();
        toast.style.top = `${rect.top + (rect.height / 2) - 14}px`;
        toast.style.left = `${rect.right + 10}px`;
        document.body.appendChild(toast);
        setTimeout(() => { toast.style.opacity = '1'; toast.style.transform = 'translateX(0)'; }, 10);
        setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 200); }, 2200);
    }

    // --- FUNCIÓN DE LIMPIEZA DE REPORTES PREVIOS ---
    function limpiarReportesPrevios() {
        document.querySelectorAll('.iatel-report-instance').forEach(el => el.remove());

        const selectoresComunes = [
            'div[id*="reporte"]',
            'div[id*="Reporte"]',
            'div[id*="panel-reporte"]',
            'div[class*="reporte-container"]',
            'div[id*="modal-report"]',
            'div[id*="iatel-panel"]',
            'div[id*="iatel_"]',
            '#smc-report-container',
            '.report-overlay',
            '.floating-report-panel'
        ];

        selectoresComunes.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                if (el.id !== "iatel-launcher-container" &&
                    el.id !== "helper-hide-toggle" &&
                    el.id !== "helper-toast-msg" &&
                    !menu.contains(el)) {
                    el.remove();
                }
            });
        });
    }

    // --- CARGADOR SEGURO DE SCRIPTS ---
    function cargarYEjecutarScript(nombreArchivo, tituloReporte) {
        limpiarReportesPrevios();

        const urlFinal = BASE_GITHUB_URL + encodeURIComponent(nombreArchivo);
        mostrarToast(`Cargando reporte...`, '⏳');

        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 &&
                        node.id !== "iatel-launcher-container" &&
                        node.id !== "helper-hide-toggle" &&
                        node.id !== "helper-toast-msg" &&
                        !menu.contains(node)) {
                        node.classList.add('iatel-report-instance');
                    }
                });
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        GM_xmlhttpRequest({
            method: "GET",
            url: urlFinal,
            headers: { "Cache-Control": "no-cache" },
            onload: function(response) {
                if (response.status === 200) {
                    try {
                        eval(response.responseText);
                        mostrarToast(`${tituloReporte} listo`, '⚡');
                    } catch (error) {
                        console.error("Error al ejecutar el script:", error);
                        mostrarToast("Error en el script", "⚠");
                    }
                } else {
                    mostrarToast("Error de red", "⚠");
                }
                setTimeout(() => observer.disconnect(), 3500);
            },
            onerror: function(err) {
                observer.disconnect();
                console.error("Error en la conexión:", err);
                mostrarToast("Fallo de red", "⚠");
            }
        });
    }

    // --- CONSTRUCCIÓN DE INTERFAZ ---
    const menu = document.createElement("div");
    menu.id = "iatel-launcher-container";

    const logoContainer = document.createElement("div");
    logoContainer.className = "op-logo-wrapper";
    logoContainer.innerHTML = `<img src="https://iatelecom.es/assets/img/logo_azul.svg"><span class="op-ai-badge">✨ AI Pro</span>`;
    menu.appendChild(logoContainer);

    const btnMenu = document.createElement("button");
    btnMenu.className = "btn-oceane";
    btnMenu.innerHTML = `⚡ Reportes Semanales`;
    menu.appendChild(btnMenu);

    const dropdownPanel = document.createElement("div");
    dropdownPanel.className = "dropdown-oceane-panel";

    const diaActual = new Date().getDay();

    const SECCIONES_GRUPO = [
        { id: 'masmovil', label: 'MásMóvil', clase: 'title-masmovil', icono: '🟡' },
        { id: 'servicios', label: 'Servicios', clase: 'title-servicios', icono: '🟠' },
        { id: 'cobertura', label: 'Cobertura', clase: 'title-cobertura', icono: '🔵' }
    ];

    DIAS_DISTRIBUCION.forEach(seccion => {
        const detalle = document.createElement('details');
        detalle.className = 'oceane-day-accordion';
        detalle.name = 'oceane-dias-semana'; // Comportamiento exclusivo nativo de HTML
        if (seccion.diaId === diaActual) detalle.open = true;

        // Cierre manual garantizado al hacer clic entre días
        detalle.addEventListener('toggle', () => {
            if (detalle.open) {
                dropdownPanel.querySelectorAll('details.oceane-day-accordion').forEach(otro => {
                    if (otro !== detalle && otro.open) {
                        otro.open = false;
                    }
                });
            }
        });

        const summary = document.createElement('summary');
        const esHoy = (seccion.diaId === diaActual);
        summary.className = `oceane-day-summary ${esHoy ? 'is-today' : ''}`;
        summary.innerHTML = `<span>${seccion.icono} ${seccion.titulo}</span>${esHoy ? '<span class="op-ai-badge" style="font-size:8px;">Hoy</span>' : ''}`;

        const bodyContainer = document.createElement('div');
        bodyContainer.className = 'oceane-day-content';

        const agrupados = { masmovil: [], servicios: [], cobertura: [] };
        seccion.reportes.forEach(rep => agrupados[obtenerCategoria(rep)].push(rep));

        SECCIONES_GRUPO.forEach(sub => {
            const listaReportes = agrupados[sub.id];
            if (listaReportes.length > 0) {
                const subBox = document.createElement('div');
                subBox.className = 'oceane-subgroup';
                subBox.innerHTML = `<div class="oceane-subgroup-title ${sub.clase}">${sub.icono} ${sub.label}</div>`;

                listaReportes.forEach(rep => {
                    const itemBtn = document.createElement('button');
                    itemBtn.className = 'dropdown-item-oceane';
                    itemBtn.textContent = rep.nombre;
                    itemBtn.onclick = (e) => {
                        e.stopPropagation();
                        dropdownPanel.style.display = 'none';
                        btnMenu.classList.remove('active');
                        cargarYEjecutarScript(rep.archivo, rep.nombre);
                    };
                    subBox.appendChild(itemBtn);
                });
                bodyContainer.appendChild(subBox);
            }
        });

        detalle.appendChild(summary);
        detalle.appendChild(bodyContainer);
        dropdownPanel.appendChild(detalle);
    });

    btnMenu.onclick = (e) => {
        e.stopPropagation();
        const isOpen = dropdownPanel.style.display === 'flex';
        dropdownPanel.style.display = isOpen ? 'none' : 'flex';
        btnMenu.classList.toggle('active', !isOpen);
    };

    document.addEventListener('click', (e) => {
        if (!dropdownPanel.contains(e.target) && e.target !== btnMenu) {
            dropdownPanel.style.display = 'none';
            btnMenu.classList.remove('active');
        }
    });

    menu.appendChild(dropdownPanel);
    document.body.appendChild(menu);

    if (!document.getElementById("helper-hide-toggle")) {
        const hideToggle = document.createElement("button");
        hideToggle.id = "helper-hide-toggle";
        hideToggle.innerHTML = "•";
        hideToggle.onclick = (e) => {
            e.preventDefault(); e.stopPropagation();
            menu.classList.toggle("helper-oculto");
        };
        document.body.appendChild(hideToggle);
    }
})();