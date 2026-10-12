// ==UserScript==
// @name         IATEL - Cargador Dinámico de Reportes (Oceane UI Categorizado)
// @namespace    http://tampermonkey.net/
// @version      3.2.0
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

    // --- CATÁLOGO DE REPORTES ACTUALIZADO ---
    const SCRIPTS = {
        HUAWEI_MM: {
            nombre: '📊 HUAWEI (>36h) MAS MOVIL',
            archivo: 'Masmovil.user.js'
        },
        HUAWEI_ORANGE: {
            nombre: '🍊 HUAWEI (>36h) Orange',
            archivo: 'Servicios_orange_mas_36h.user.js'
        },
        HUAWEI_SERV_24_36: {
            nombre: '📊 HUAWEI Servicios (24h-36h)',
            archivo: 'Servicios_orange_24h_hasta_36h.user.js'
        },
        CUST_COMP_24_36: {
            nombre: '📄 Cust. Complaints (24h-36h)',
            archivo: 'Customer_24h_hasta_36h.user.js'
        },
        CUST_COMP_36: {
            nombre: '📄 Cust. Complaints (>= 36h)',
            archivo: 'Customer_mas_36h.user.js'
        },
        QBOOST_24_36: {
            nombre: '⚡ QBOOST (24h-36h)',
            archivo: 'Qboost_24h_hasta_36h.user.js'
        },
        QBOOST_36: {
            nombre: '⚡ QBOOST (>= 36h)',
            archivo: 'QBOOST_mas_36h.user.js'
        },
        ZONA_36: {
            nombre: '🗺️ Clientes Zona (>= 36h)',
            archivo: 'Zona_mas_36h.user.js'
        },
        PCAR_36: {
            nombre: '⏱️ PCAR (Aging >= 36)',
            archivo: 'PCAR_mas_36h.user.js'
        },
        DESPLIEGUE: {
            nombre: '🚀 Incidencias Despliegue SMC',
            archivo: 'Incidencias_despliegue.user.js'
        },
        VDF_MC_DOWN: {
            nombre: '📡 VDF (MC y DOWN) Mail',
            archivo: 'MC_DOWN.user.js'
        },
        RSSI_OUTLOOK: {
            nombre: '✉️ RSSI VDF -> Outlook',
            archivo: 'RSSI_VDF.user.js'
        },
        BLOQUEOS: {
            nombre: '📋 Gestión Bloqueos FM',
            archivo: 'Gestion_de_bloqueos.user.js'
        },
        ESTRUCTURAL: {
            nombre: '🏗️ Estructural Servicio',
            archivo: 'Estructural_servicios.user.js'
        },
        REUNION_RSSI: {
            nombre: '🤝 Reunión RSSI (3PP, FLM y otros)',
            archivo: 'Reunion_RSSI.user.js'
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
            color: var
