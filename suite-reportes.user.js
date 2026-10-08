// ==UserScript==
// @name         IATEL - Cargador Dinámico de Reportes (Oceane UI Categorizado)
// @namespace    http://tampermonkey.net/
// @version      3.1.0
// @description  Lanzador dinámico organizado por días y subcategorías (MásMóvil, Servicios, Cobertura) con diseño Oceane Glassmorphism
// @match        http://mxmefm01.wnet/private/zc/tools/smc*
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @connect      raw.githubusercontent.com
// ==/UserScript==

(function() {
    'use strict';

    if (window.top !== window.self) return;

    // --- CONFIGURACIÓN REPOSITORIO GITHUB ---
    const BASE_GITHUB_URL = "https://raw.githubusercontent.com/Pache2993/herramientas-iatel/main/";

    // --- CATÁLOGO DE REPORTES ---
    const SCRIPTS = {
        HUAWEI_MM: {
            nombre: '📊 HUAWEI (>36h) MAS MOVIL',
            archivo: 'Generador Reporte HUAWEI (-36h) SERVICIOS MAS MOVIL.user.js'
        },
        HUAWEI_ORANGE: {
            nombre: '🍊 HUAWEI (>36h) Orange',
            archivo: 'Generador Reporte HUAWEI (-36h) SERVICIOS Orange.user.js'
        },
        HUAWEI_SERV_24_36: {
            nombre: '📊 HUAWEI Servicios (24h-36h)',
            archivo: 'Generador Reporte HUAWEI Servicios (24h-36h).user.js'
        },
        CUST_COMP_24_36: {
            nombre: '📄 Cust. Complaints (24h-36h)',
            archivo: 'Generador Reporte ICFs (Customer Complaints) 24 a 36h.user.js'
        },
        CUST_COMP_36: {
            nombre: '📄 Cust. Complaints (>= 36h)',
            archivo: 'Generador Reporte ICFs (Customer Complaints) -= 36h.user.js'
        },
        QBOOST_24_36: {
            nombre: '⚡ QBOOST (24h-36h)',
            archivo: 'Generador Reporte ICFs (QBOOST) 24 a 36h.user.js'
        },
        QBOOST_36: {
            nombre: '⚡ QBOOST (>= 36h)',
            archivo: 'Generador Reporte ICFs (QBOOST -= 36h).user.js'
        },
        ZONA_36: {
            nombre: '🗺️ Clientes Zona (>= 36h)',
            archivo: 'Generador Reporte ICFs (Zona -= 36h).user.js'
        },
        PCAR_36: {
            nombre: '⏱️ PCAR (Aging >= 36)',
            archivo: 'Extractor Reporte PCAR (Aging --= 36).user.js'
        },
        DESPLIEGUE: {
            nombre: '🚀 Incidencias Despliegue SMC',
            archivo: 'Extractor Reporte Incidencias Despliegue (Conteo Global caso_asociado).user.js'
        },
        VDF_MC_DOWN: {
            nombre: '📡 VDF (MC y DOWN) Mail',
            archivo: 'Extractor de Reporte VDF (MC y DOWN) con MAIL.user.js'
        },
        RSSI_OUTLOOK: {
            nombre: '✉️ RSSI VDF -> Outlook',
            archivo: 'Generador Reporte RSSI VDF -- Outlook.user.js'
        },
        BLOQUEOS: {
            nombre: '📋 Gestión Bloqueos FM',
            archivo: 'Extractor Reporte Bloqueos (GESTION DE BLOQUEOS).user.js'
        },
        ESTRUCTURAL: {
            nombre: '🏗️ Estructural Servicio',
            archivo: 'Generador Reporte ESTRUCTURAL_SERVICIO.user.js'
        },
        REUNION_RSSI: {
    nombre: '🤝 Reunión RSSI (3PP, FLM y otros)',
    archivo: 'Generador_Informe_Reunion_RSSI.user.js'
}
    };

    const REPORTES_DIARIOS = [
        SCRIPTS.HUAWEI_SERV_24_36,
        SCRIPTS.HUAWEI_ORANGE,
        SCRIPTS.HUAWEI_MM
    ];

    const DIAS_DISTRIBUCION = [
        {
            diaId: 1,
            titulo: 'Lunes',
            icono: '📅',
            reportes: [
                ...REPORTES_DIARIOS,
                SCRIPTS.CUST_COMP_24_36,
                SCRIPTS.QBOOST_24_36,
                SCRIPTS.VDF_MC_DOWN
            ]
        },
        {
            diaId: 2,
            titulo: 'Martes',
            icono: '📅',
            reportes: [
                ...REPORTES_DIARIOS,
                SCRIPTS.ZONA_36,
                SCRIPTS.PCAR_36,
                SCRIPTS.DESPLIEGUE
            ]
        },
        {
            diaId: 3,
            titulo: 'Miércoles',
            icono: '📅',
            reportes: [
                ...REPORTES_DIARIOS,
                SCRIPTS.CUST_COMP_36,
                SCRIPTS.RSSI_OUTLOOK
            ]
        },
        {
            diaId: 4,
            titulo: 'Jueves',
            icono: '📅',
            reportes: [
                ...REPORTES_DIARIOS,
                SCRIPTS.CUST_COMP_24_36,
                SCRIPTS.QBOOST_24_36,
                SCRIPTS.QBOOST_36,
                SCRIPTS.BLOQUEOS
            ]
        },
        {
            diaId: 5,
            titulo: 'Viernes',
            icono: '📅',
            reportes: [
                ...REPORTES_DIARIOS,
                SCRIPTS.ESTRUCTURAL,
                SCRIPTS.REUNION_RSSI
            ]
        }
    ];

    // --- REGLAS DE CATEGORIZACIÓN ---
    function obtenerCategoria(rep) {
        const cadena = (rep.nombre + " " + rep.archivo).toLowerCase();
        
        // 1. MásMóvil: Si contiene "mas movil" o "masmovil"
        if (cadena.includes('mas movil') || cadena.includes('masmovil')) {
            return 'masmovil';
        }
        // 2. Servicios: Si contiene "servicios", "estructural" u "orange"
        if (cadena.includes('servicios') || cadena.includes('estructural') || cadena.includes('orange')) {
            return 'servicios';
        }
        // 3. Cobertura: Todo lo demás
        return 'cobertura';
    }

    // --- ESTILOS GLASSMORPHISM ---
    const s = document.createElement('style');
    s.id = 'estilo-iatel-reports-oceane';
    s.innerHTML = `
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
            --op-font-mono: "JetBrains Mono", "SF Mono", Consolas, Menlo, monospace;
        }

        #iatel-launcher-container {
            position: fixed;
            top: 12px;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: max-content;
            display: flex;
            align-items: center;
            padding: 5px 10px;
            gap: 8px;
            font-family: var(--op-font-sans);
            font-size: 11px;
            color: var(--op-text-primary);
            z-index: 9999999;
            border-radius: 8px;
            user-select: none;
            opacity: 0.6;
            transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s ease;
        }

        #iatel-launcher-container:hover {
            opacity: 1 !important;
            transform: translateY(1px);
        }

        #iatel-launcher-container::before {
            content: "";
            position: absolute;
            inset: 0;
            backdrop-filter: blur(14px) saturate(180%);
            -webkit-backdrop-filter: blur(14px) saturate(180%);
            background-color: var(--op-bg-glass);
            border: 1px solid var(--op-border-subtle);
            border-radius: 8px;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
            z-index: -1;
            transition: all 0.25s ease;
        }

        #iatel-launcher-container:hover::before {
            background-color: rgba(13, 17, 23, 0.88);
            border-color: rgba(255, 255, 255, 0.18);
            box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        #iatel-launcher-container.helper-oculto {
            display: none !important;
            opacity: 0 !important;
            pointer-events: none !important;
        }

        .op-logo-wrapper {
            display: flex;
            align-items: center;
            padding-right: 10px;
            margin-right: 4px;
            border-right: 1px solid var(--op-border-subtle);
        }

        .op-logo-wrapper img {
            height: 18px;
            filter: drop-shadow(0 0 4px rgba(0,153,255,0.25));
        }

        .op-ai-badge {
            font-size: 9px;
            color: var(--op-accent);
            margin-left: 6px;
            font-weight: 800;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            background: var(--op-accent-bg);
            padding: 2px 5px;
            border-radius: 4px;
            border: 1px solid var(--op-accent-glow);
        }

        .btn-oceane {
            background: transparent;
            color: var(--op-text-secondary);
            border: 1px solid transparent;
            border-left: 2px solid transparent;
            padding: 0 12px;
            border-radius: 5px;
            cursor: pointer;
            font-family: inherit;
            font-weight: 600;
            font-size: 11px;
            letter-spacing: 0.2px;
            transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
            height: 26px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
            gap: 6px;
        }

        .btn-oceane:hover {
            color: var(--op-text-primary);
            background-color: var(--op-bg-hover);
            border-color: var(--op-border-subtle);
        }

        .btn-oceane.active {
            color: var(--op-accent) !important;
            border-left: 2px solid var(--op-accent) !important;
            background-color: var(--op-accent-bg) !important;
            box-shadow: inset 0 0 12px rgba(0, 153, 255, 0.08);
        }

        .dropdown-oceane-panel {
            display: none;
            position: absolute;
            top: calc(100% + 8px);
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--op-bg-dropdown);
            backdrop-filter: blur(16px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            border: 1px solid var(--op-border-subtle);
            border-radius: 8px;
            width: 330px;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 16px 36px rgba(0, 0, 0, 0.7), 0 0 1px rgba(255, 255, 255, 0.2);
            z-index: 9999999;
            padding: 8px;
            gap: 6px;
            flex-direction: column;
            animation: opFadeIn 0.18s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes opFadeIn {
            from { opacity: 0; transform: translate(-50%, -4px); }
            to { opacity: 1; transform: translate(-50%, 0); }
        }

        .dropdown-oceane-panel::-webkit-scrollbar { width: 5px; }
        .dropdown-oceane-panel::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.15);
            border-radius: 4px;
        }

        .oceane-day-accordion {
            background: var(--op-bg-card);
            border: 1px solid var(--op-border-subtle);
            border-radius: 6px;
            overflow: hidden;
            margin-bottom: 4px;
            transition: border-color 0.2s;
        }

        .oceane-day-accordion[open] {
            border-color: rgba(0, 153, 255, 0.3);
        }

        .oceane-day-summary {
            padding: 7px 10px;
            font-size: 11px;
            font-weight: 600;
            cursor: pointer;
            background: rgba(255, 255, 255, 0.02);
            color: var(--op-text-secondary);
            display: flex;
            align-items: center;
            justify-content: space-between;
            user-select: none;
            transition: background 0.15s, color 0.15s;
        }

        .oceane-day-summary:hover {
            background: var(--op-bg-hover);
            color: var(--op-text-primary);
        }

        .oceane-day-summary.is-today {
            color: var(--op-accent);
            background: var(--op-accent-bg);
            font-weight: 700;
        }

        .oceane-day-content {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 8px 6px;
            background: rgba(0, 0, 0, 0.25);
        }

        /* Subsecciones */
        .oceane-subgroup {
            display: flex;
            flex-direction: column;
            gap: 3px;
        }

        .oceane-subgroup-title {
            font-size: 9px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.6px;
            padding: 2px 6px 3px 6px;
            border-radius: 3px;
            margin-bottom: 1px;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .title-masmovil {
            color: #ffd000;
            background: rgba(255, 208, 0, 0.08);
            border-left: 2px solid #ffd000;
        }

        .title-servicios {
            color: #ff9100;
            background: rgba(255, 145, 0, 0.08);
            border-left: 2px solid #ff9100;
        }

        .title-cobertura {
            color: var(--op-accent);
            background: var(--op-accent-bg);
            border-left: 2px solid var(--op-accent);
        }

        .dropdown-item-oceane {
            display: block;
            width: 100%;
            background: transparent;
            color: var(--op-text-secondary);
            border: none;
            border-left: 2px solid transparent;
            padding: 5px 8px;
            cursor: pointer;
            text-align: left;
            font-family: inherit;
            font-size: 11px;
            font-weight: 500;
            border-radius: 4px;
            transition: all 0.15s ease;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            box-sizing: border-box;
        }

        .dropdown-item-oceane:hover {
            color: var(--op-accent) !important;
            border-left: 2px solid var(--op-accent) !important;
            background-color: var(--op-accent-bg) !important;
            padding-left: 11px;
        }

        #helper-hide-toggle {
            position: fixed;
            right: 14px;
            bottom: 14px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-color: var(--op-bg-glass);
            backdrop-filter: blur(10px);
            border: 1px solid var(--op-border-subtle);
            color: var(--op-text-muted);
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2147483647;
            transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
            opacity: 0.4;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        }

        #helper-hide-toggle:hover {
            opacity: 1;
            color: #fff;
            border-color: var(--op-accent);
            background-color: var(--op-accent);
            box-shadow: 0 0 16px var(--op-accent-glow);
            transform: scale(1.08);
        }

        #helper-toast-msg {
            position: fixed;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            height: 28px;
            padding: 0 12px;
            background-color: rgba(13, 17, 23, 0.9);
            backdrop-filter: blur(14px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-left: 2px solid var(--op-accent);
            border-radius: 6px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
            font-family: var(--op-font-sans);
            font-size: 11px;
            font-weight: 500;
            color: var(--op-text-primary);
            z-index: 99999999;
            opacity: 0;
            transform: translateX(-4px);
            transition: opacity 0.2s ease, transform 0.2s ease;
            pointer-events: none;
            user-select: none;
        }
        #helper-toast-msg .toast-icon { color: var(--op-accent); font-weight: 700; font-size: 12px; }
    `;
    document.head.appendChild(s);

    function mostrarToast(msg, icono = "✓") {
        let oldToast = document.getElementById("helper-toast-msg");
        if (oldToast) oldToast.remove();
        const toast = document.createElement("div");
        toast.id = "helper-toast-msg";
        toast.innerHTML = `<span class="toast-icon">${icono}</span><span>${msg}</span>`;
        const rect = menu.getBoundingClientRect();
        toast.style.top = `${rect.top + (rect.height / 2) - 14}px`;
        toast.style.left = `${rect.right + 10}px`;
        document.body.appendChild(toast);
        setTimeout(() => { toast.style.opacity = '1'; toast.style.transform = 'translateX(0)'; }, 10);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(4px)';
            setTimeout(() => toast.remove(), 200);
        }, 2200);
    }

    function cargarYEjecutarScript(nombreArchivo, tituloReporte) {
        const urlFinal = BASE_GITHUB_URL + encodeURIComponent(nombreArchivo);
        mostrarToast(`Cargando reporte...`, '⏳');

        GM_xmlhttpRequest({
            method: "GET",
            url: urlFinal,
            headers: { "Cache-Control": "no-cache" },
            onload: function(response) {
                if (response.status === 200) {
                    try {
                        const scriptElement = document.createElement('script');
                        scriptElement.textContent = response.responseText;
                        document.body.appendChild(scriptElement);
                        mostrarToast(`${tituloReporte} listo`, '⚡');
                        console.log(`✅ [Cargador] "${tituloReporte}" cargado con éxito.`);
                    } catch (error) {
                        console.error("Error al ejecutar el script:", error);
                        mostrarToast("Error en el script", "⚠");
                        alert(`Error al ejecutar el script: ${error.message}`);
                    }
                } else {
                    mostrarToast("Error de descarga", "⚠");
                    alert(`Error al descargar de GitHub (Código: ${response.status}). Revisa que el nombre coincida.`);
                }
            },
            onerror: function(err) {
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

    const logoImg = document.createElement("img");
    logoImg.src = "https://iatelecom.es/assets/img/logo_azul.svg";

    const aiBadge = document.createElement("span");
    aiBadge.className = "op-ai-badge";
    aiBadge.innerHTML = "✨ AI Pro";

    logoContainer.appendChild(logoImg);
    logoContainer.appendChild(aiBadge);
    menu.appendChild(logoContainer);

    const btnMenu = document.createElement("button");
    btnMenu.className = "btn-oceane";
    btnMenu.innerHTML = `⚡ Reportes Semanales`;

    const dropdownPanel = document.createElement("div");
    dropdownPanel.className = "dropdown-oceane-panel";

    const diaActual = new Date().getDay(); // 1 = Lunes, ..., 5 = Viernes

    // Definición de las 3 subcategorías solicitadas
    const SECCIONES_GRUPO = [
        { id: 'masmovil', label: 'MásMóvil', clase: 'title-masmovil', icono: '🟡' },
        { id: 'servicios', label: 'Servicios', clase: 'title-servicios', icono: '🟠' },
        { id: 'cobertura', label: 'Cobertura', clase: 'title-cobertura', icono: '🔵' }
    ];

    DIAS_DISTRIBUCION.forEach(seccion => {
        const detalle = document.createElement('details');
        detalle.className = 'oceane-day-accordion';

        if (seccion.diaId === diaActual) {
            detalle.open = true;
        }

        const summary = document.createElement('summary');
        const esHoy = (seccion.diaId === diaActual);
        summary.className = `oceane-day-summary ${esHoy ? 'is-today' : ''}`;
        summary.innerHTML = `<span>${seccion.icono} ${seccion.titulo}</span>${esHoy ? '<span class="op-ai-badge" style="font-size:8px; padding:1px 4px;">Hoy</span>' : ''}`;

        const bodyContainer = document.createElement('div');
        bodyContainer.className = 'oceane-day-content';

        // Clasificar los reportes del día según los criterios
        const agrupados = {
            masmovil: [],
            servicios: [],
            cobertura: []
        };

        seccion.reportes.forEach(rep => {
            const cat = obtenerCategoria(rep);
            agrupados[cat].push(rep);
        });

        // Renderizar cada subgrupo si tiene reportes asignados
        SECCIONES_GRUPO.forEach(sub => {
            const listaReportes = agrupados[sub.id];
            if (listaReportes.length > 0) {
                const subBox = document.createElement('div');
                subBox.className = 'oceane-subgroup';

                const subHeader = document.createElement('div');
                subHeader.className = `oceane-subgroup-title ${sub.clase}`;
                subHeader.innerHTML = `${sub.icono} ${sub.label}`;
                subBox.appendChild(subHeader);

                listaReportes.forEach(rep => {
                    const itemBtn = document.createElement('button');
                    itemBtn.className = 'dropdown-item-oceane';
                    itemBtn.textContent = rep.nombre;
                    itemBtn.title = rep.nombre;

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

    menu.appendChild(btnMenu);
    menu.appendChild(dropdownPanel);
    document.body.appendChild(menu);

    if (!document.getElementById("helper-hide-toggle")) {
        const hideToggle = document.createElement("button");
        hideToggle.id = "helper-hide-toggle";
        hideToggle.title = "Ocultar / mostrar herramienta";
        hideToggle.setAttribute("aria-label", "Ocultar / mostrar herramienta");
        hideToggle.innerHTML = "•";

        hideToggle.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            const oculto = document.documentElement.getAttribute("data-helper-oculto") === "true";
            if (!oculto) {
                menu.classList.add("helper-oculto");
                document.documentElement.setAttribute("data-helper-oculto", "true");
                hideToggle.title = "Mostrar herramienta";
            } else {
                menu.classList.remove("helper-oculto");
                document.documentElement.setAttribute("data-helper-oculto", "false");
                hideToggle.title = "Ocultar herramienta";
            }
        };
        document.body.appendChild(hideToggle);
    }
})();
