// ==UserScript==
// @name         Herramienta Dpto Loader
// @namespace    *://*/*
// @version      1.0.0
// @match        https://sistema-de-tu-empresa.com/*
// @updateURL    https://raw.githubusercontent.com/Pache2993/herramientas-iatel/refs/heads/main/Registro usuarios/loader.user.js
// @downloadURL  https://raw.githubusercontent.com/Pache2993/herramientas-iatel/refs/heads/main/Registro usuarios/loader.user.js
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function() {
    'use strict';

    // PEGA AQUÍ LA URL DE TU WEB APP DE GOOGLE APPS SCRIPT (/exec)
    const BACKEND_URL = "https://script.google.com/macros/s/AKfycby96zqDtqcVIQidb-DmKba3x7XMwINHmoi0McdB-AxVQOG7vZI_Uf6Ysk7c-TVDpz7p/exec";

    // 1. Obtener o generar la huella única de este navegador/PC
    let deviceId = GM_getValue("device_hardware_id", null);
    if (!deviceId) {
        deviceId = "DEV-" + crypto.randomUUID();
        GM_setValue("device_hardware_id", deviceId);
    }

    // 2. Obtener o pedir la clave del empleado
    let licencia = GM_getValue("user_license_key", null);
    if (!licencia) {
        licencia = prompt("Introduce tu clave personal de licencia:");
        if (licencia) {
            licencia = licencia.trim();
            GM_setValue("user_license_key", licencia);
        } else {
            return;
        }
    }

    // 3. Consultar autorización al servidor
    GM_xmlhttpRequest({
        method: "POST",
        url: BACKEND_URL,
        headers: { "Content-Type": "text/plain" },
        data: JSON.stringify({ clave: licencia, idEquipo: deviceId }),
        onload: function(response) {
            try {
                // Si devuelve error, viene en formato JSON
                const res = JSON.parse(response.responseText);
                if (res.error) {
                    alert("Aviso de licencia: " + res.error);
                    // Si la clave no es válida o es de otro equipo, la borramos para permitir reintentar
                    GM_setValue("user_license_key", null);
                }
            } catch (e) {
                // Si no es JSON, es el código JavaScript puro: lo ejecutamos en memoria
                new Function(response.responseText)();
            }
        },
        onerror: function() {
            console.error("Error al contactar con el servidor de licencias.");
        }
    });
})();
