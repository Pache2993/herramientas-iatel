function cargarYEjecutarScript(nombreArchivo, tituloReporte) {
        limpiarReportesPrevios();

        // Se añade timestamp para evitar caché de GitHub
        const urlFinal = BASE_GITHUB_URL + encodeURIComponent(nombreArchivo) + '?t=' + Date.now();
        mostrarToast('Cargando reporte...', 'busy');

        GM_xmlhttpRequest({
            method: "GET",
            url: urlFinal,
            headers: { 
                "Cache-Control": "no-cache, no-store, must-revalidate",
                "Pragma": "no-cache"
            },
            onload: function(response) {
                if (response.status === 200) {
                    try {
                        eval(response.responseText);
                        mostrarToast(`${tituloReporte} listo`, 'check');
                    } catch (error) {
                        console.error("[IATEL Launcher] Error al ejecutar script:", error);
                        mostrarToast("Error de ejecución", "alert");
                    }
                } else {
                    mostrarToast("Error al descargar script", "alert");
                }
            },
            onerror: function(err) {
                console.error("[IATEL Launcher] Fallo de red:", err);
                mostrarToast("Fallo de red", "alert");
            }
        });
    }
