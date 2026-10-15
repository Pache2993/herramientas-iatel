// ==UserScript==
// @name         Iatel Suite Loader
// @namespace    https://iatel.es/
// @version      1.3.0
// @description  Cargador oficial y centralizado de la Suite Iatel
// @author       IATEL
// @match        https://calipso-oceane.sso.infra.ftgroup/binOceane/*
// @match        http://mxmefm01.wnet/private/zc/tools/smc*
// @match        *://mxmefm01.wnet/*
// @updateURL    https://raw.githubusercontent.com/Pache2993/herramientas-iatel/refs/heads/main/loader.user.js
// @downloadURL  https://raw.githubusercontent.com/Pache2993/herramientas-iatel/refs/heads/main/loader.user.js
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function() {
    'use strict';

    const BACKEND_URL = "https://script.google.com/macros/s/AKfycby96zqDtqcVIQidb-DmKba3x7XMwINHmoi0McdB-AxVQOG7vZI_Uf6Ysk7c-TVDpz7p/exec";
    const LOGO_IATEL = "https://raw.githubusercontent.com/Pache2993/herramientas-iatel/main/iatel.png";

    // 1. Identificador único de hardware
    let deviceId = GM_getValue("device_hardware_id", null);
    if (!deviceId) {
        deviceId = "DEV-" + crypto.randomUUID();
        GM_setValue("device_hardware_id", deviceId);
    }

    // 2. Clave personal de licencia (solo se solicita una vez)
    let licencia = GM_getValue("user_license_key", null);
    if (!licencia) {
        licencia = prompt("Introduce tu clave personal de licencia Iatel:");
        if (licencia && licencia.trim() !== "") {
            licencia = licencia.trim();
            GM_setValue("user_license_key", licencia);
        } else {
            return;
        }
    }

    // 3. Validación y consulta de herramientas autorizadas
    GM_xmlhttpRequest({
        method: "POST",
        url: BACKEND_URL,
        headers: { "Content-Type": "text/plain" },
        data: JSON.stringify({
            clave: licencia,
            idEquipo: deviceId,
            urlActual: window.location.href
        }),
        onload: function(response) {
            try {
                const res = JSON.parse(response.responseText);
                if (res.error) {
                    alert("Aviso Iatel: " + res.error);
                    if (res.error.includes("no válida") || res.error.includes("otro equipo")) {
                        GM_setValue("user_license_key", null);
                    }
                    return;
                }

                if (res.autorizada && res.scripts && res.scripts.length > 0) {
                    descargarYEjecutarHerramientas(res.scripts);
                }
            } catch (e) {
                console.error("Error al procesar la respuesta del servidor:", e);
            }
        },
        onerror: function() {
            console.error("No se pudo conectar con el servidor de licencias.");
        }
    });

    // 4. Descarga en memoria desde GitHub y ejecución
    function descargarYEjecutarHerramientas(urls) {
        let codigosDescargados = [];
        let pendientes = urls.length;

        urls.forEach((url, index) => {
            GM_xmlhttpRequest({
                method: "GET",
                url: url + "?cache=" + Date.now(),
                onload: function(resp) {
                    codigosDescargados[index] = resp.responseText;
                    pendientes--;

                    if (pendientes === 0) {
                        lanzarEntorno(codigosDescargados);
                    }
                },
                onerror: function() {
                    console.error("Fallo al descargar herramienta:", url);
                    pendientes--;
                    if (pendientes === 0) {
                        lanzarEntorno(codigosDescargados);
                    }
                }
            });
        });
    }

    function lanzarEntorno(codigos) {
        const ejecutarTodos = () => {
            codigos.forEach(codigo => {
                if (codigo) {
                    try {
                        new Function(codigo)();
                    } catch (err) {
                        console.error("Error al inicializar módulo:", err);
                    }
                }
            });
        };

        // Comprobación para que la animación solo se reproduzca 1 vez al día en todo el navegador
        const hoy = new Date().toDateString();
        const ultimaFecha = GM_getValue("iatel_splash_fecha", null);

        if (ultimaFecha !== hoy) {
            GM_setValue("iatel_splash_fecha", hoy);
            mostrarBienvenidaIatel(ejecutarTodos);
        } else {
            ejecutarTodos();
        }
    }

    // ========================================================
    // PANTALLA DE CARGA / BIENVENIDA IATEL
    // ========================================================
    function mostrarBienvenidaIatel(callback) {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.25);
            gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.4);
        } catch(e) {}

        const overlay = document.createElement("div");
        overlay.id = "iatel-splash";
        overlay.innerHTML = `
            <style>
                #iatel-splash {
                    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                    background: radial-gradient(circle at center, #0a1122 0%, #030712 100%);
                    z-index: 999999999; display: flex; flex-direction: column;
                    justify-content: center; align-items: center;
                    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
                    opacity: 1; transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow: hidden; user-select: none;
                }
                #iatel-bg-canvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.35; pointer-events: none; }
                .iatel-content { position: relative; display: flex; flex-direction: column; align-items: center; z-index: 2; }
                .iatel-logo-wrapper { position: relative; margin-bottom: 22px; }
                .iatel-logo { width: 120px; height: auto; filter: drop-shadow(0 0 30px rgba(0, 200, 255, 0.65)); animation: iatel-float 2.8s ease-in-out infinite alternate; }
                .iatel-title { color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 6px; text-shadow: 0 0 20px rgba(0, 210, 255, 0.85); }
                .iatel-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(0, 220, 255, 0.1); border: 1px solid rgba(0, 220, 255, 0.35); padding: 4px 14px; border-radius: 20px; color: #00d2ff; font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 28px; box-shadow: 0 0 15px rgba(0, 210, 255, 0.2); }
                .iatel-badge-dot { width: 7px; height: 7px; background: #00ffaa; border-radius: 50%; box-shadow: 0 0 8px #00ffaa; animation: iatel-blink 1.2s infinite; }
                .iatel-progress-container { width: 320px; display: flex; flex-direction: column; gap: 8px; }
                .iatel-progress-bar-bg { width: 100%; height: 6px; background: rgba(255, 255, 255, 0.08); border-radius: 10px; overflow: hidden; border: 1px solid rgba(0, 210, 255, 0.25); box-shadow: inset 0 0 8px rgba(0,0,0,0.5); }
                .iatel-progress-bar-fill { width: 0%; height: 100%; background: linear-gradient(90deg, #0077ff, #00d2ff, #00ffc8); border-radius: 10px; box-shadow: 0 0 12px rgba(0, 210, 255, 0.9); transition: width 0.15s ease-out; }
                .iatel-status-row { display: flex; justify-content: space-between; color: #8fa5c7; font-size: 12px; letter-spacing: 1px; font-family: 'Consolas', monospace; }
                .iatel-percentage { color: #00ffc8; font-weight: 700; }
                @keyframes iatel-float { 0% { transform: translateY(0px) scale(0.98); } 100% { transform: translateY(-7px) scale(1.02); } }
                @keyframes iatel-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
            </style>
            <canvas id="iatel-bg-canvas"></canvas>
            <div class="iatel-content">
                <div class="iatel-logo-wrapper">
                    <img src="${LOGO_IATEL}" class="iatel-logo" alt="Logo Iatel" />
                </div>
                <div class="iatel-title">Bienvenido al mundo Iatel</div>
                <div class="iatel-badge"><span class="iatel-badge-dot"></span>Telecomunicaciones &amp; IA</div>
                <div class="iatel-progress-container">
                    <div class="iatel-progress-bar-bg"><div id="iatel-fill" class="iatel-progress-bar-fill"></div></div>
                    <div class="iatel-status-row">
                        <span id="iatel-status" class="iatel-status-text">Iniciando sistema...</span>
                        <span id="iatel-percent" class="iatel-percentage">0%</span>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        iniciarFondoRed();

        const fill = document.getElementById("iatel-fill");
        const status = document.getElementById("iatel-status");
        const percent = document.getElementById("iatel-percent");
        const fases = [
            { hasta: 25, tiempo: 400, texto: "Autenticando nodo neural..." },
            { hasta: 55, tiempo: 500, texto: "Consultando permisos Iatel..." },
            { hasta: 85, tiempo: 600, texto: "Descargando suite autorizada..." },
            { hasta: 100, tiempo: 400, texto: "¡Acceso concedido!" }
        ];

        let progresoActual = 0, faseIdx = 0;
        function avanzarFase() {
            if (faseIdx >= fases.length) {
                setTimeout(() => {
                    overlay.style.opacity = "0";
                    setTimeout(() => {
                        overlay.remove();
                        if (typeof callback === "function") callback();
                    }, 700);
                }, 300);
                return;
            }
            const { hasta, tiempo, texto } = fases[faseIdx];
            status.innerText = texto;
            const incremento = hasta - progresoActual;
            const pasos = 15;
            let paso = 0;
            const timer = setInterval(() => {
                paso++;
                progresoActual += incremento / pasos;
                if (paso >= pasos) {
                    progresoActual = hasta;
                    clearInterval(timer);
                    faseIdx++;
                    setTimeout(avanzarFase, 80);
                }
                const val = Math.min(100, Math.round(progresoActual));
                fill.style.width = val + "%";
                percent.innerText = val + "%";
            }, tiempo / pasos);
        }
        avanzarFase();

        function iniciarFondoRed() {
            const canvas = document.getElementById("iatel-bg-canvas");
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const puntos = [];
            for (let i = 0; i < 40; i++) {
                puntos.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.8, vy: (Math.random() - 0.5) * 0.8 });
            }
            function dibujar() {
                if (!document.getElementById("iatel-splash")) return;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                for (let i = 0; i < puntos.length; i++) {
                    const p1 = puntos[i];
                    p1.x += p1.vx; p1.y += p1.vy;
                    if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
                    if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;
                    ctx.fillStyle = "#00d2ff";
                    ctx.beginPath(); ctx.arc(p1.x, p1.y, 2, 0, Math.PI * 2); ctx.fill();
                    for (let j = i + 1; j < puntos.length; j++) {
                        const p2 = puntos[j];
                        const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
                        if (dist < 120) {
                            ctx.strokeStyle = `rgba(0, 210, 255, ${0.3 * (1 - dist / 120)})`;
                            ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
                        }
                    }
                }
                requestAnimationFrame(dibujar);
            }
            dibujar();
        }
    }
})();
