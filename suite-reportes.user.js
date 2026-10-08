// ==UserScript==
// @name         IATEL - Cargador Dinámico de Reportes por Días
// @version      2.0
// @match        http://mxmefm01.wnet/private/zc/tools/smc*
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @connect      raw.githubusercontent.com
// ==/UserScript==

(function() {
    'use strict';

    const BASE_GITHUB_URL = "https://raw.githubusercontent.com/Pache2993/herramientas-iatel/main/";

    // Definición centralizada de reportes[cite: 1]
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
            archivo: 'Generador Informe Completo Reunión RSSI casos pendientes de 3PP, FLM y otros..user.js'
        }
    };

    // Tareas repetidas a diario
    const REPORTES_DIARIOS = [
        SCRIPTS.HUAWEI_SERV_24_36,
        SCRIPTS.HUAWEI_ORANGE,
        SCRIPTS.HUAWEI_MM
    ];

    // Distribución por días (incluyendo los diarios repetidos)
    const DIAS_DISTRIBUCION = [
        {
            diaId: 1,
            titulo: '📅 Lunes',
            reportes: [
                ...REPORTES_DIARIOS,
                SCRIPTS.CUST_COMP_24_36,
                SCRIPTS.QBOOST_24_36,
                SCRIPTS.VDF_MC_DOWN
            ]
        },
        {
            diaId: 2,
            titulo: '📅 Martes',
            reportes: [
                ...REPORTES_DIARIOS,
                SCRIPTS.ZONA_36,
                SCRIPTS.PCAR_36,
                SCRIPTS.DESPLIEGUE
            ]
        },
        {
            diaId: 3,
            titulo: '📅 Miércoles',
            reportes: [
                ...REPORTES_DIARIOS,
                SCRIPTS.CUST_COMP_36,
                SCRIPTS.RSSI_OUTLOOK
            ]
        },
        {
            diaId: 4,
            titulo: '📅 Jueves',
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
            titulo: '📅 Viernes',
            reportes: [
                ...REPORTES_DIARIOS,
                SCRIPTS.ESTRUCTURAL,
                SCRIPTS.REUNION_RSSI
            ]
        }
    ];

    function cargarYEjecutarScript(nombreArchivo, tituloReporte) {
        const urlFinal = BASE_GITHUB_URL + encodeURIComponent(nombreArchivo);
        console.log(`[Cargador] Descargando: ${urlFinal}`);

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
                        console.log(`✅ [Cargador] "${tituloReporte}" cargado con éxito.`);
                    } catch (error) {
                        console.error("Error al ejecutar el script:", error);
                        alert(`Error al ejecutar el script: ${error.message}`);
                    }
                } else {
                    alert(`Error al descargar de GitHub (Código: ${response.status}). Revisa que el nombre del archivo coincida exactamente.`);
                }
            },
            onerror: function(err) {
                console.error("Error en la conexión:", err);
                alert("Error de conexión al intentar conectar con GitHub.");
            }
        });
    }

    // Botón Hub principal
    const btnHub = document.createElement('button');
    btnHub.textContent = '⚡ Reportes Semanales';
    btnHub.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:2147483647;padding:10px 18px;background:#ff6600;color:#fff;border:none;border-radius:25px;font-weight:bold;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.4);font-family:sans-serif;font-size:13px;';

    // Panel contenedor
    const panelMenu = document.createElement('div');
    panelMenu.style.cssText = 'position:fixed;bottom:65px;right:20px;background:#1e1e1e;border:1px solid #3d3d3d;border-radius:8px;padding:8px;display:none;flex-direction:column;gap:6px;z-index:2147483647;min-width:320px;max-height:80vh;overflow-y:auto;box-shadow:0 6px 16px rgba(0,0,0,0.6);font-family:sans-serif;';

    const diaActual = new Date().getDay(); // 1 = Lunes, ..., 5 = Viernes

    // Construcción del acordeón por días
    DIAS_DISTRIBUCION.forEach(seccion => {
        const detalle = document.createElement('details');
        detalle.style.cssText = 'background:#252525;border:1px solid #333;border-radius:6px;overflow:hidden;';

        // Abre automáticamente el día correspondiente a la fecha actual
        if (seccion.diaId === diaActual) {
            detalle.open = true;
        }

        const summary = document.createElement('summary');
        summary.textContent = seccion.diaId === diaActual ? `${seccion.titulo} (Hoy)` : seccion.titulo;
        summary.style.cssText = `padding:8px 10px;font-size:12px;font-weight:bold;cursor:pointer;background:${seccion.diaId === diaActual ? '#2e3a24' : '#2b2b2b'};color:${seccion.diaId === diaActual ? '#8ae67c' : '#f0f0f0'};user-select:none;`;

        const bodyContainer = document.createElement('div');
        bodyContainer.style.cssText = 'display:flex;flex-direction:column;gap:4px;padding:6px;';

        seccion.reportes.forEach(rep => {
            const itemBtn = document.createElement('button');
            itemBtn.textContent = rep.nombre;
            itemBtn.style.cssText = 'text-align:left;background:#1c1c1c;color:#ddd;border:1px solid #383838;padding:6px 9px;border-radius:4px;cursor:pointer;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;';
            itemBtn.onmouseover = () => { itemBtn.style.background = '#ff6600'; itemBtn.style.color = '#fff'; };
            itemBtn.onmouseout = () => { itemBtn.style.background = '#1c1c1c'; itemBtn.style.color = '#ddd'; };

            itemBtn.onclick = () => {
                panelMenu.style.display = 'none';
                cargarYEjecutarScript(rep.archivo, rep.nombre);
            };

            bodyContainer.appendChild(itemBtn);
        });

        detalle.appendChild(summary);
        detalle.appendChild(bodyContainer);
        panelMenu.appendChild(detalle);
    });

    btnHub.onclick = (e) => {
        e.stopPropagation();
        panelMenu.style.display = panelMenu.style.display === 'none' ? 'flex' : 'none';
    };

    document.addEventListener('click', (e) => {
        if (!panelMenu.contains(e.target) && e.target !== btnHub) {
            panelMenu.style.display = 'none';
        }
    });

    document.body.appendChild(btnHub);
    document.body.appendChild(panelMenu);
})();
