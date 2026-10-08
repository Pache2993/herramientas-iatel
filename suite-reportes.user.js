// ==UserScript==
// @name         IATEL - Suite de Reportes
// @version      1.1
// @match        http://mxmefm01.wnet/private/zc/tools/smc*
// @grant        GM_addStyle
// @downloadURL  https://raw.githubusercontent.com/Pache2993/herramientas-iatel/main/suite-reportes.user.js
// @updateURL    https://raw.githubusercontent.com/Pache2993/herramientas-iatel/main/suite-reportes.user.js
// ==/UserScript==

(function() {
    'use strict';

    // ==========================================
    // 1. MÓDULOS DE REPORTES
    // ==========================================
    const Reportes = {
        huaweiMasMovil: function() {
            // Pega aquí el código de 'Generador Reporte HUAWEI MAS MOVIL'
            console.log("Ejecutando HUAWEI MasMovil...");
            alert("Ejecutando HUAWEI MasMovil");
        },
        icfs36h: function() {
            // Pega aquí el código de 'Generador Reporte ICFs >= 36h'
            console.log("Ejecutando ICFs >= 36h...");
            alert("Ejecutando ICFs >= 36h");
        },
        vdfOutlook: function() {
            // Pega aquí el código de 'Generador Reporte RSSI VDF'
            console.log("Ejecutando VDF...");
            alert("Ejecutando VDF Outlook");
        }
    };

    // ==========================================
    // 2. ESTILOS DEL BOTÓN Y MENÚ
    // ==========================================
    const css = `
        #iatel-hub-btn {
            position: fixed;
            bottom: 25px;
            right: 25px;
            z-index: 2147483647;
            background: #ff6600;
            color: #ffffff;
            border: none;
            border-radius: 50px;
            padding: 12px 18px;
            font-size: 13px;
            font-weight: 700;
            font-family: system-ui, -apple-system, sans-serif;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,0.35);
            display: flex;
            align-items: center;
            gap: 8px;
            transition: transform 0.15s ease, background 0.15s ease;
            user-select: none;
        }
        #iatel-hub-btn:hover {
            background: #e65c00;
            transform: scale(1.05);
        }
        #iatel-hub-panel {
            position: fixed;
            bottom: 75px;
            right: 25px;
            z-index: 2147483647;
            background: #1e1e1e;
            color: #ffffff;
            border: 1px solid #333333;
            border-radius: 10px;
            padding: 10px;
            display: none;
            flex-direction: column;
            gap: 6px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.5);
            width: 250px;
            font-family: system-ui, -apple-system, sans-serif;
        }
        #iatel-hub-panel .header {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            color: #aaaaaa;
            padding: 4px 8px;
            border-bottom: 1px solid #2d2d2d;
            margin-bottom: 4px;
        }
        #iatel-hub-panel button {
            background: #2a2a2a;
            color: #f0f0f0;
            border: 1px solid #3a3a3a;
            padding: 8px 10px;
            border-radius: 6px;
            font-size: 12px;
            text-align: left;
            cursor: pointer;
            transition: all 0.12s ease;
        }
        #iatel-hub-panel button:hover {
            background: #ff6600;
            border-color: #ff6600;
            color: #ffffff;
            transform: translateX(3px);
        }
    `;

    const styleEl = document.createElement('style');
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    // ==========================================
    // 3. CONSTRUCCIÓN DE LA INTERFAZ
    // ==========================================
    const panel = document.createElement('div');
    panel.id = 'iatel-hub-panel';
    panel.innerHTML = `
        <div class="header">Reportes IATEL</div>
        <button id="btn-rep-huawei">📊 HUAWEI MasMovil</button>
        <button id="btn-rep-icfs">📄 ICFs (>= 36h)</button>
        <button id="btn-rep-vdf">✉️ RSSI VDF -> Outlook</button>
    `;

    const boton = document.createElement('button');
    boton.id = 'iatel-hub-btn';
    boton.innerHTML = '⚡ Reportes';

    // Abrir / Cerrar menú
    boton.onclick = (e) => {
        e.stopPropagation();
        const isOpen = panel.style.display === 'flex';
        panel.style.display = isOpen ? 'none' : 'flex';
    };

    // Cerrar al pulsar fuera
    document.addEventListener('click', (e) => {
        if (!panel.contains(e.target) && e.target !== boton) {
            panel.style.display = 'none';
        }
    });

    document.body.appendChild(panel);
    document.body.appendChild(boton);

    // Asignar funciones a los botones
    document.getElementById('btn-rep-huawei').onclick = () => {
        panel.style.display = 'none';
        Reportes.huaweiMasMovil();
    };
    document.getElementById('btn-rep-icfs').onclick = () => {
        panel.style.display = 'none';
        Reportes.icfs36h();
    };
    document.getElementById('btn-rep-vdf').onclick = () => {
        panel.style.display = 'none';
        Reportes.vdfOutlook();
    };
})();
