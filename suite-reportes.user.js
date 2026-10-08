// ==UserScript==
// @name         IATEL - Suite Lanzador Universal
// @version      1.0
// @match        http://mxmefm01.wnet/private/zc/tools/smc*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1. Catálogo: Texto visible en el lanzador vs Texto del botón original en la página
    const ACCIONES = [
        { nombre: '📊 Reporte HUAWEI MasMovil', textoBotonOriginal: 'Generar Huawei' },
        { nombre: '📄 Reporte ICFs (>= 36h)',    textoBotonOriginal: 'Descargar ICFs' },
        { nombre: '✉️ RSSI VDF -> Outlook',      textoBotonOriginal: 'Extraer VDF' },
        { nombre: '🎯 Acumulador Jira MASEMP',   textoBotonOriginal: 'Acumular Jira' }
    ];

    // Función que busca el botón generado por el script original y le hace clic
    function pulsarBotonDelScript(textoBuscado) {
        // Busca entre todos los botones o enlaces de la pantalla
        const elementos = Array.from(document.querySelectorAll('button, input[type="button"], a'));
        const botonReal = elementos.find(el => el.textContent.toLowerCase().includes(textoBuscado.toLowerCase()) || 
                                               el.value?.toLowerCase().includes(textoBuscado.toLowerCase()));

        if (botonReal) {
            console.log(`Pulsando botón original: "${botonReal.textContent.trim()}"`);
            botonReal.click();
        } else {
            alert(`No se encontró el botón de "${textoBuscado}" en esta pantalla. Comprueba si la tabla ha cargado.`);
        }
    }

    // 2. Crear el botón flotante en la pantalla
    const botonHub = document.createElement('button');
    botonHub.textContent = '⚡ Reportes';
    botonHub.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:9999999;padding:10px 16px;background:#ff6600;color:#fff;border:none;border-radius:25px;font-weight:bold;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,0.4);';

    const panelMenu = document.createElement('div');
    panelMenu.style.cssText = 'position:fixed;bottom:65px;right:20px;background:#1e1e1e;border:1px solid #444;border-radius:8px;padding:8px;display:none;flex-direction:column;gap:5px;z-index:9999999;min-width:220px;box-shadow:0 6px 16px rgba(0,0,0,0.5);';

    ACCIONES.forEach(accion => {
        const itemBtn = document.createElement('button');
        itemBtn.textContent = accion.nombre;
        itemBtn.style.cssText = 'text-align:left;background:#2d2d2d;color:#fff;border:1px solid #3d3d3d;padding:8px 10px;border-radius:5px;cursor:pointer;font-size:12px;';
        
        itemBtn.onclick = () => {
            panelMenu.style.display = 'none';
            pulsarBotonDelScript(accion.textoBotonOriginal);
        };
        panelMenu.appendChild(itemBtn);
    });

    botonHub.onclick = () => {
        panelMenu.style.display = panelMenu.style.display === 'none' ? 'flex' : 'none';
    };

    document.body.appendChild(botonHub);
    document.body.appendChild(panelMenu);
})();
