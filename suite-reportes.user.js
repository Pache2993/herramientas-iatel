// ==UserScript==
// @name         IATEL - Cargador Dinámico de Reportes
// @version      1.1
// @match        http://mxmefm01.wnet/private/zc/tools/smc*
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @connect      raw.githubusercontent.com
// ==/UserScript==

(function() {
    'use strict';

    // 1. URL base de tu repositorio público en GitHub
    const BASE_GITHUB_URL = "https://raw.githubusercontent.com/Pache2993/herramientas-iatel/main/";

    // 2. Lista de reportes (nombres de archivo extraídos exactamente de la lista)
    const REPORTES = [
        {
            nombre: '📋 Reporte Bloqueos',
            archivo: 'Extractor Reporte Bloqueos (GESTION DE BLOQUEOS).user.js'
        },
        {
            nombre: '🚀 Incidencias Despliegue (Conteo Global)',
            archivo: 'Extractor Reporte Incidencias Despliegue (Conteo Global caso_asociado).user.js'
        },
        {
            nombre: '⏱️ PCAR (Aging >= 36)',
            archivo: 'Extractor Reporte PCAR (Aging --= 36).user.js'
        },
        {
            nombre: '📡 VDF (MC y DOWN) con MAIL',
            archivo: 'Extractor de Reporte VDF (MC y DOWN) con MAIL.user.js'
        },
        {
            nombre: '🤝 Reunión RSSI (3PP, FLM y otros)',
            archivo: 'Generador Informe Completo Reunión RSSI casos pendientes de 3PP, FLM y otros..user.js'
        },
        {
            nombre: '🏗️ ESTRUCTURAL_SERVICIO',
            archivo: 'Generador Reporte ESTRUCTURAL_SERVICIO.user.js'
        },
        {
            nombre: '📊 HUAWEI (>36h) MAS MOVIL',
            archivo: 'Generador Reporte HUAWEI (-36h) SERVICIOS MAS MOVIL.user.js'
        },
        {
            nombre: '🍊 HUAWEI (>36h) Orange',
            archivo: 'Generador Reporte HUAWEI (-36h) SERVICIOS Orange.user.js'
        },
        {
            nombre: '📊 HUAWEI Servicios (24h-36h)',
            archivo: 'Generador Reporte HUAWEI Servicios (24h-36h).user.js'
        },
        {
            nombre: '📄 ICFs (Customer Complaints) >= 36h',
            archivo: 'Generador Reporte ICFs (Customer Complaints) -= 36h.user.js'
        },
        {
            nombre: '📄 ICFs (Customer Complaints) 24h-36h',
            archivo: 'Generador Reporte ICFs (Customer Complaints) 24 a 36h.user.js'
        },
        {
            nombre: '⚡ ICFs (QBOOST >= 36h)',
            archivo: 'Generador Reporte ICFs (QBOOST -= 36h).user.js'
        },
        {
            nombre: '⚡ ICFs (QBOOST) 24h-36h',
            archivo: 'Generador Reporte ICFs (QBOOST) 24 a 36h.user.js'
        },
        {
            nombre: '🗺️ ICFs (Zona >= 36h)',
            archivo: 'Generador Reporte ICFs (Zona -= 36h).user.js'
        },
        {
            nombre: '✉️ RSSI VDF -> Outlook',
            archivo: 'Generador Reporte RSSI VDF -- Outlook.user.js'
        }
    ];

    // Función que descarga el script de GitHub y lo ejecuta al vuelo
    function cargarYEjecutarScript(nombreArchivo, tituloReporte) {
        const urlFinal = BASE_GITHUB_URL + encodeURIComponent(nombreArchivo);
        console.log(`[Cargador] Descargando: ${urlFinal}`);

        GM_xmlhttpRequest({
            method: "GET",
            url: urlFinal,
            headers: {
                "Cache-Control": "no-cache"
            },
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
                    alert(`Error al descargar de GitHub (Código: ${response.status}). Revisa que el nombre del archivo sea exacto.`);
                }
            },
            onerror: function(err) {
                console.error("Error en la conexión:", err);
                alert("Error de conexión al intentar conectar con GitHub.");
            }
        });
    }

    // 3. Crear el Botón Flotante y Menú en Pantalla
    const btnHub = document.createElement('button');
    btnHub.textContent = '⚡ Reportes';
    btnHub.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:2147483647;padding:10px 16px;background:#ff6600;color:#fff;border:none;border-radius:25px;font-weight:bold;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.35);font-family:sans-serif;font-size:13px;';

    const panelMenu = document.createElement('div');
    panelMenu.style.cssText = 'position:fixed;bottom:65px;right:20px;background:#1e1e1e;border:1px solid #3d3d3d;border-radius:8px;padding:8px;display:none;flex-direction:column;gap:6px;z-index:2147483647;min-width:280px;max-height:80vh;overflow-y:auto;box-shadow:0 6px 16px rgba(0,0,0,0.5);font-family:sans-serif;';

    REPORTES.forEach(rep => {
        const itemBtn = document.createElement('button');
        itemBtn.textContent = rep.nombre;
        itemBtn.style.cssText = 'text-align:left;background:#2a2a2a;color:#eee;border:1px solid #3a3a3a;padding:8px 10px;border-radius:5px;cursor:pointer;font-size:12px;white-space:nowrap;';
        itemBtn.onmouseover = () => itemBtn.style.background = '#ff6600';
        itemBtn.onmouseout = () => itemBtn.style.background = '#2a2a2a';

        itemBtn.onclick = () => {
            panelMenu.style.display = 'none';
            cargarYEjecutarScript(rep.archivo, rep.nombre);
        };
        panelMenu.appendChild(itemBtn);
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
