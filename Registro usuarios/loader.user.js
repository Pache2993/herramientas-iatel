// ==UserScript==
// @name         Herramienta Dpto Loader
// @namespace    prueba bloqueos
// @version      1.0.0
// @match        *://*/*
// @updateURL    https://raw.githubusercontent.com/Pache2993/herramientas-iatel/refs/heads/main/Registro usuarios/loader.user.js
// @downloadURL  https://raw.githubusercontent.com/Pache2993/herramientas-iatel/refs/heads/main/Registro usuarios/loader.user.js
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function() {
    'use strict';

    const BACKEND_URL = "https://script.google.com/macros/s/AKfycby96zqDtqcVIQidb-DmKba3x7XMwINHmoi0McdB-AxVQOG7vZI_Uf6Ysk7c-TVDpz7p/exec";
    const ID_HERRAMIENTA = "crm"; // Tu identificador

    // URL directa (raw) del logo en GitHub
    const LOGO_IATEL = "https://raw.githubusercontent.com/Pache2993/herramientas-iatel/main/iatel.png";

    // 1. Huella del equipo
    let deviceId = GM_getValue("device_hardware_id", null);
    if (!deviceId) {
        deviceId = "DEV-" + crypto.randomUUID();
        GM_setValue("device_hardware_id", deviceId);
    }

    // 2. Clave del usuario
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

    // 3. Petición al backend
    GM_xmlhttpRequest({
        method: "POST",
        url: BACKEND_URL,
        headers: { "Content-Type": "text/plain" },
        data: JSON.stringify({ clave: licencia, idEquipo: deviceId, herramienta: ID_HERRAMIENTA }),
        onload: function(response) {
            try {
                const res = JSON.parse(response.responseText);
                if (res.error) {
                    alert("Aviso [" + ID_HERRAMIENTA.toUpperCase() + "]: " + res.error);
                    GM_setValue("user_license_key", null);
                }
            } catch (e) {
                // Clave válida: mostramos la intro y ejecutamos el código
                mostrarBienvenidaIatel(() => {
                    new Function(response.responseText)();
                });
            }
        }
    });

    // ========================================================
    // EFECTO VISUAL BIENVENIDA IATEL (IA & TELECOMUNICACIONES)
    // ========================================================
    function mostrarBienvenidaIatel(callback) {
        const overlay = document.createElement("div");
        overlay.id = "iatel-splash";
        overlay.innerHTML = `
            <style>
                #iatel-splash {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: radial-gradient(circle at center, #0b1528 0%, #030712 100%);
                    z-index: 999999999;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                    opacity: 1;
                    transition: opacity 0.6s ease;
                }
                .iatel-logo-container {
                    position: relative;
                    margin-bottom: 25px;
                }
                .iatel-logo {
                    width: 130px;
                    height: auto;
                    filter: drop-shadow(0 0 25px rgba(0, 195, 255, 0.6));
                    animation: iatel-pulse 2s infinite alternate ease-in-out;
                }
                .iatel-title {
                    color: #ffffff;
                    font-size: 26px;
                    font-weight: 700;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    margin-bottom: 8px;
                    text-shadow: 0 0 15px rgba(0, 195, 255, 0.8);
                }
                .iatel-subtitle {
                    color: #00d2ff;
                    font-size: 13px;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    opacity: 0.85;
                }
                .iatel-scanline {
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background: rgba(0, 255, 200, 0.5);
                    box-shadow: 0 0 10px #00ffc8;
                    animation: iatel-scan 2.2s infinite linear;
                }
                @keyframes iatel-pulse {
                    0% { transform: scale(0.97); filter: drop-shadow(0 0 15px rgba(0, 195, 255, 0.4)); }
                    100% { transform: scale(1.04); filter: drop-shadow(0 0 35px rgba(0, 240, 255, 0.9)); }
                }
                @keyframes iatel-scan {
                    0% { top: 0%; opacity: 0; }
                    50% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            </style>
            <div class="iatel-scanline"></div>
            <div class="iatel-logo-container">
                <img src="${LOGO_IATEL}" class="iatel-logo" alt="Iatel Logo" />
            </div>
            <div class="iatel-title">Bienvenido al mundo Iatel</div>
            <div class="iatel-subtitle">Telecomunicaciones &amp; Inteligencia Artificial</div>
        `;

        document.body.appendChild(overlay);

        // Se muestra durante 2.2 segundos y luego se desvanece
        setTimeout(() => {
            overlay.style.opacity = "0";
            setTimeout(() => {
                overlay.remove();
                if (typeof callback === "function") callback();
            }, 600); // Espera a que termine la animación de fundido
        }, 2200);
    }
})();
