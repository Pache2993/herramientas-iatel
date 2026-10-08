// ==UserScript==
// @name         IATEL - Suite de Reportes
// @version      1.0
// @match        http://mxmefm01.wnet/private/zc/tools/smc*
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    // ==========================================
    // 1. MÓDULOS DE REPORTES (Tus scripts pegados)
    // ==========================================
    const Reportes = {
        huaweiMasMovil: function() {
            // Pega aquí el código de 'Generador Reporte HUAWEI MAS MOVIL'
            console.log("Ejecutando HUAWEI MasMovil...");
        },
        icfs36h: function() {
            // Pega aquí el código de 'Generador Reporte ICFs >= 36h'
            console.log("Ejecutando ICFs >= 36h...");
        },
        vdfOutlook: function() {
            // Pega aquí el código de 'Generador Reporte RSSI VDF'
            console.log("Ejecutando VDF...");
        }
    };

    // ==========================================
    // 2. LANZADOR (Menú de Violentmonkey)
    // ==========================================
    GM_registerMenuCommand("📊 Reporte HUAWEI MasMovil", Reportes.huaweiMasMovil);
    GM_registerMenuCommand("📄 Reporte ICFs (>= 36h)", Reportes.icfs36h);
    GM_registerMenuCommand("✉️ Reporte RSSI VDF -> Outlook", Reportes.vdfOutlook);

})();
