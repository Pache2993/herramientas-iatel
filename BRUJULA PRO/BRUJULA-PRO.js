<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>iATEL · Herramientas</title>
<meta name="description" content="Portal de herramientas del Dpto. de Telecomunicaciones e Inteligencia Artificial de iATEL: Oceane, Brújula, MAQA y 360 PRO.">
<meta name="theme-color" content="#0d1117">
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20rx%3D%2214%22%20fill%3D%22%230d1117%22/%3E%3Cg%20transform%3D%22translate%287.1%207.85%29%20scale%280.205%29%22%3E%3Cpath%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%20d%3D%22M123.6%2036.8L122.9%2037.2L121.8%2038.6L121.2%2039.9L121.1%2041.1L121%2041.2L121%2066.6L121.1%2066.8L121.2%2068L121.8%2069.2L122.2%2070L123.6%2071.1L124.9%2071.6L126.1%2071.8L126.2%2071.9L185.5%2071.9L186.8%2072.1L187.5%2072.5L188.4%2073.4L188.8%2074.1L189%2075.4L189%20135.5L188.8%20136.8L188.4%20137.5L187.5%20138.4L186.8%20138.8L185.5%20139L160.4%20139L158.8%20138.6L157.6%20138L156.9%20137.2L156.2%20136.1L155.9%20134.5L155.9%20109.4L155.5%20107.8L154.9%20106.6L154.2%20106L153.1%20105.4L151.5%20105L125.4%20105L123.8%20105.4L122.6%20106L122%20106.6L121.4%20107.8L121%20109.4L121%20135.5L121.1%20135.6L121.1%20136.4L121.8%20137.9L123%20139.1L124.5%20139.8L125.2%20139.8L125.4%20139.9L150.5%20139.9L152.1%20140.2L153.2%20140.9L154.2%20142L154.9%20143.5L154.9%20144.2L155%20144.4L155%20169.5L154.8%20170.8L154.4%20171.5L153.5%20172.4L152.2%20172.9L151.6%20172.9L151.5%20173L126.4%20173L124.4%20173.5L123.2%20174.2L122.2%20175.2L121.5%20176.4L121%20178.4L121%20203.5L121.5%20205.5L122.2%20206.6L123.8%20208L125%20208.6L126.2%20208.8L126.4%20208.9L150.6%20208.9L153.1%20208.2L154.4%20207.5L155.1%20206.8L155.6%20205.8L155.9%20204.5L155.9%20179.4L156.2%20177.8L156.9%20176.6L158%20175.6L159.5%20175L160.2%20175L160.4%20174.9L185.5%20174.9L186.8%20175.1L187.5%20175.5L188.4%20176.4L188.9%20177.6L188.9%20178.2L189%20178.4L189%20202.6L189.6%20205.1L190.4%20206.5L191.6%20207.9L192.8%20208.5L194.4%20208.9L219.5%20208.9L221.5%20208.4L222.6%20207.6L224%20206.1L224.6%20204.9L224.8%20203.6L224.9%20203.5L224.9%2041.4L224.8%2041.2L224.8%2040.5L224.1%2039L223%2037.8L222.1%2037.1L220.5%2036.4L218.6%2036L126.2%2036L126.1%2036.1L124.9%2036.2ZM22%2036.2L20.8%2036.9L19.2%2038.2L18.5%2039.4L18%2041.4L18%2066.5L18.1%2066.6L18.2%2067.9L19.2%2069.6L20.2%2070.6L21.4%2071.4L23.4%2071.9L48.5%2071.9L49.8%2072.1L50.5%2072.5L51.4%2073.4L51.9%2074.6L51.9%2075.2L52%2075.4L52%20203.5L52.1%20203.6L52.2%20204.9L52.9%20206.1L54.2%20207.6L55.4%20208.4L57.4%20208.9L82.5%20208.9L84.1%20208.5L85.2%20207.9L86.8%20206.1L87.5%20204.5L87.9%20202.6L87.9%2076.2L87.5%2074.4L86.6%2072.6L85.9%2071.8L84.1%2070.6L82.5%2070.1L81.8%2070.1L81.6%2070L57.4%2070L55.8%2069.6L54.6%2069L53.9%2068.2L53.2%2067.1L52.9%2065.5L52.9%2040.4L52.6%2039.1L52.1%2038.1L50.6%2036.9L49.5%2036.4L47.6%2036L23.4%2036L23.2%2036.1Z%22/%3E%3C/g%3E%3C/svg%3E">
<style>
/* =====================================================================
   IATELECOM DESIGN SYSTEM · tokens (copiados tal cual del bloque :host de los userscripts)
   ===================================================================== */
:root {
    /* Color · marca */
    --ia-brand-500: #0099ff;
    --ia-brand-600: #007acc;
    --ia-brand-glow: rgba(0, 153, 255, 0.35);
    --ia-brand-soft: rgba(0, 153, 255, 0.12);
    /* Color · estado */
    --ia-success: #3fb950;
    --ia-warning: #d29922;
    --ia-danger: #f85149;
    /* Color · superficies */
    --ia-surface-glass: rgba(13, 17, 23, 0.65);
    --ia-surface-bar: rgba(13, 17, 23, 0.85);
    --ia-surface-raised: rgba(13, 17, 23, 0.88);
    --ia-surface-modal: rgba(13, 17, 23, 0.97);
    --ia-surface-solid: #0d1117;
    --ia-hover: rgba(255, 255, 255, 0.08);
    --ia-field: rgba(255, 255, 255, 0.05);
    --ia-overlay: rgba(0, 0, 0, 0.65);
    /* Color · bordes y texto */
    --ia-border: rgba(255, 255, 255, 0.10);
    --ia-border-strong: rgba(255, 255, 255, 0.18);
    --ia-border-focus: rgba(0, 153, 255, 0.60);
    --ia-text: #f0f6fc;
    --ia-text-2: #c9d1d9;
    --ia-text-3: #8b949e;
    --ia-dot-off: #555555;
    /* Tipografía */
    --ia-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --ia-mono: "JetBrains Mono", "SF Mono", Consolas, Menlo, monospace;
    --ia-fs-2xs: 9px;
    --ia-fs-xs: 11px;
    --ia-fs-sm: 12px;
    --ia-fs-lg: 15px;
    /* Espaciado */
    --ia-sp-1: 4px;
    --ia-sp-2: 6px;
    --ia-sp-3: 8px;
    --ia-sp-4: 12px;
    --ia-sp-5: 16px;
    --ia-sp-6: 24px;
    /* Radios */
    --ia-r-sm: 4px;
    --ia-r-md: 6px;
    --ia-r-lg: 8px;
    --ia-r-xl: 10px;
    /* Sombras */
    --ia-sh-bar: 0 12px 40px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.15);
    --ia-sh-menu: 0 16px 36px rgba(0, 0, 0, 0.60), 0 0 1px rgba(255, 255, 255, 0.20);
    --ia-sh-modal: 0 24px 60px rgba(0, 0, 0, 0.70);
    /* Movimiento */
    --ia-ease: cubic-bezier(0.16, 1, 0.3, 1);
    --ia-ease-pop: cubic-bezier(0.34, 1.56, 0.64, 1);
    /* Capas */
    --ia-z-menu: 9999;
    --ia-z-bar: 9999999;
    --ia-z-modal: 2147483646;

    /* ---- Extensión web v1.9 (escala de página; mismos tipos, pesos y colores) ---- */
    --ia-fs-md: 14px;
    --ia-fs-xl: 18px;
    --ia-fs-2xl: 24px;
    --ia-fs-3xl: clamp(26px, 3.2vw, 34px);
    --ia-fs-display: clamp(36px, 5.4vw, 62px);
    --ia-sp-7: 32px;
    --ia-sp-8: 48px;
    --ia-sp-9: 72px;
    --ia-sp-10: 112px;
    --ia-r-2xl: 16px;
    --ia-page: 1180px;
    --ia-gutter: clamp(16px, 4vw, 40px);
}

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 96px; background: var(--ia-surface-solid); }
body { margin: 0; min-height: 100vh; font-family: var(--ia-font); font-size: var(--ia-fs-md); line-height: 1.6; color: var(--ia-text-2); background: var(--ia-surface-solid); -webkit-font-smoothing: antialiased; overflow-x: hidden; }
h1, h2, h3, h4, p { margin: 0; }
h1, h2, h3, h4 { color: var(--ia-text); font-weight: 700; line-height: 1.15; }
a { color: inherit; text-decoration: none; }
button { font-family: inherit; }
img { display: block; max-width: 100%; }
::selection { background: rgba(0, 153, 255, 0.35); color: #fff; }
* { scrollbar-width: thin; scrollbar-color: var(--ia-border-strong) transparent; }

/* Fondo: halos de marca */
.ws-bg { position: fixed; inset: 0; z-index: -1; pointer-events: none;
    background: radial-gradient(70% 55% at 78% -8%, rgba(0, 153, 255, 0.20), transparent 62%), radial-gradient(55% 45% at -10% 30%, rgba(0, 119, 255, 0.10), transparent 70%), radial-gradient(60% 50% at 50% 115%, rgba(0, 153, 255, 0.08), transparent 70%), var(--ia-surface-solid); }

.ia-icon { flex: none; }
.ia-hidden { display: none !important; }
.ws-skip { position: fixed; left: 16px; top: -60px; z-index: var(--ia-z-modal); padding: 8px 14px; border-radius: var(--ia-r-md); background: var(--ia-brand-500); color: #fff; font-weight: 600; transition: top 0.2s var(--ia-ease); }
.ws-skip:focus { top: 16px; }
.ws-wrap { width: min(var(--ia-page), 100% - 2 * var(--ia-gutter)); margin-inline: auto; }

/* =====================================================================
   COMPONENTES DEL SISTEMA (mismas reglas que en los userscripts)
   ===================================================================== */
/* Barra de herramientas (OCEANE PRO) */
.ia-toolbar { position: fixed; top: 14px; left: 0; right: 0; margin: 0 auto; width: max-content; max-width: calc(100% - 24px); display: flex; align-items: center; padding: 6px var(--ia-sp-3); gap: var(--ia-sp-2); font-size: var(--ia-fs-xs); color: var(--ia-text); z-index: var(--ia-z-bar); border-radius: var(--ia-r-lg); user-select: none; animation: ia-bar-in 0.6s var(--ia-ease) backwards; }
.ia-toolbar::before { content: ""; position: absolute; inset: 0; backdrop-filter: blur(14px) saturate(180%); -webkit-backdrop-filter: blur(14px) saturate(180%); background-color: var(--ia-surface-bar); border: 1px solid var(--ia-border-strong); border-radius: var(--ia-r-lg); box-shadow: var(--ia-sh-bar); z-index: -1; }
.ia-brand { display: flex; align-items: center; padding: 0 var(--ia-sp-4) 0 2px; margin-right: var(--ia-sp-1); border-right: 1px solid var(--ia-border); }
.ia-brand img { height: 18px; width: auto; }

/* Botón */
.ia-btn { position: relative; background: transparent; color: var(--ia-text-2); border: 1px solid transparent; border-left: 2px solid transparent; padding: 0 10px; border-radius: var(--ia-r-md); cursor: pointer; font-family: inherit; font-weight: 600; font-size: var(--ia-fs-xs); letter-spacing: 0.2px; transition: all 0.18s var(--ia-ease); height: 26px; display: inline-flex; align-items: center; justify-content: center; white-space: nowrap; gap: var(--ia-sp-1); overflow: hidden; text-decoration: none; }
.ia-btn:hover { color: var(--ia-text); background-color: var(--ia-hover); border-color: var(--ia-border); }
.ia-btn:active { transform: scale(0.96); transition-duration: 0.06s; }
.ia-btn:focus-visible, .ia-menu-item:focus-visible, .ia-icon-btn:focus-visible, .ws-focus:focus-visible { outline: 2px solid var(--ia-brand-500); outline-offset: 1px; }
.ia-btn.is-active { color: var(--ia-brand-500); border-left-color: var(--ia-brand-500); background-color: var(--ia-brand-soft); }
.ia-btn--primary { background-color: var(--ia-brand-500); border-color: var(--ia-brand-500); color: #fff; }
.ia-btn--primary:hover { background-color: var(--ia-brand-600); border-color: var(--ia-brand-600); color: #fff; box-shadow: 0 0 14px var(--ia-brand-glow); }
.ia-btn:disabled, .ia-btn[aria-disabled="true"] { opacity: 0.5; cursor: not-allowed; pointer-events: none; }
.ia-btn.is-busy { color: var(--ia-brand-500); border-color: var(--ia-border); border-left-color: var(--ia-brand-500); background-color: var(--ia-brand-soft); pointer-events: none; }
.ia-btn.is-success { color: var(--ia-success); border-color: var(--ia-border); border-left-color: var(--ia-success); background-color: rgba(63, 185, 80, 0.12); box-shadow: none; }
.ia-btn.is-warning { color: var(--ia-warning); border-color: var(--ia-border); border-left-color: var(--ia-warning); background-color: rgba(210, 153, 34, 0.12); box-shadow: none; }
.ia-btn .ia-icon { transition: transform 0.3s var(--ia-ease); }
.ia-btn:hover > .ia-icon:first-child { transform: translateY(-1px); }
.ia-btn:hover > .ia-icon[data-i="arrow-right"]:last-child, .ia-btn:hover > .ia-icon[data-i="arrow-right"] { transform: translateX(3px); }
.ia-btn:hover > .ia-icon[data-i="refresh"] { transform: rotate(-90deg); }
.ia-btn:hover > .ia-icon[data-i="escalate"], .ia-btn:hover > .ia-icon[data-i="external"] { transform: translate(1.5px, -1.5px); }
.ia-btn:hover > .ia-icon[data-i="check-circle"], .ia-btn:hover > .ia-icon[data-i="table"] { transform: scale(1.12); }
.ia-btn:hover > .ia-icon[data-i="download"] { transform: translateY(2px); }
.ia-btn.is-busy > span:not(.ia-spinner), .ia-btn.is-success > *, .ia-btn.is-warning > * { animation: ia-swap-in 0.24s var(--ia-ease) backwards; }
.ia-btn.is-success > .ia-icon { animation: ia-pop 0.45s var(--ia-ease-pop) backwards; }
.ia-btn.is-success { animation: ia-ring-ok 0.7s ease-out; }
.ia-btn.is-warning { animation: ia-shake 0.42s cubic-bezier(0.36, 0.07, 0.19, 0.97); }
/* Tamaño de página para botones (misma forma, más alto) */
.ia-btn--lg { height: 40px; padding: 0 18px; font-size: 13px; border-radius: var(--ia-r-lg); gap: var(--ia-sp-2); }
.ia-btn--md { height: 32px; padding: 0 14px; font-size: var(--ia-fs-sm); gap: var(--ia-sp-2); }
.ia-btn--outline { border-color: var(--ia-border); background: var(--ia-field); }

/* Menú */
.ia-menu { display: none; position: absolute; top: calc(100% + 8px); right: 0; background-color: var(--ia-surface-raised); backdrop-filter: blur(16px) saturate(180%); -webkit-backdrop-filter: blur(16px) saturate(180%); border: 1px solid var(--ia-border); border-radius: var(--ia-r-lg); width: max-content; min-width: 200px; box-shadow: var(--ia-sh-menu); z-index: var(--ia-z-menu); padding: var(--ia-sp-2); transform-origin: top right; animation: ia-dd-in 0.18s var(--ia-ease); }
.ia-menu.is-open { display: block; }
.ia-menu > * { animation: ia-item-in 0.24s var(--ia-ease) backwards; }
.ia-menu > :nth-child(2) { animation-delay: 0.02s; } .ia-menu > :nth-child(3) { animation-delay: 0.04s; } .ia-menu > :nth-child(4) { animation-delay: 0.06s; } .ia-menu > :nth-child(n+5) { animation-delay: 0.08s; }
.ia-menu-item { display: flex; align-items: center; gap: var(--ia-sp-3); width: 100%; background: transparent; color: var(--ia-text-2); border: none; border-left: 2px solid transparent; padding: 9px var(--ia-sp-4); cursor: pointer; text-align: left; font-family: inherit; font-size: 13px; font-weight: 500; border-radius: var(--ia-r-sm); transition: all 0.15s ease; }
.ia-menu-item:hover { color: var(--ia-brand-500); border-left-color: var(--ia-brand-500); background-color: var(--ia-brand-soft); padding-left: 14px; }
.ia-menu-item.is-active { color: var(--ia-brand-500); border-left-color: var(--ia-brand-500); background-color: var(--ia-brand-soft); font-weight: 600; }

/* Botón de icono, contador, punto, spinner, tecla */
.ia-icon-btn { flex: none; width: 30px; height: 30px; background: transparent; border: 1px solid transparent; color: var(--ia-text-3); cursor: pointer; border-radius: var(--ia-r-md); display: inline-flex; align-items: center; justify-content: center; transition: all 0.15s ease; }
.ia-icon-btn:hover { color: var(--ia-text); background: var(--ia-hover); border-color: var(--ia-border); }
.ia-count { min-width: 18px; height: 18px; padding: 0 5px; border-radius: 9px; background: var(--ia-brand-soft); border: 1px solid var(--ia-brand-glow); color: var(--ia-brand-500); font-size: var(--ia-fs-2xs); font-weight: 700; display: inline-flex; align-items: center; justify-content: center; }
.ia-dot { width: 6px; height: 6px; border-radius: 50%; background-color: var(--ia-dot-off); display: inline-block; transition: background-color 0.25s ease, box-shadow 0.25s ease; }
.ia-dot.is-on { background-color: var(--ia-brand-500); box-shadow: 0 0 6px var(--ia-brand-glow); }
.ia-spinner { width: 10px; height: 10px; flex: none; border-radius: 50%; border: 2px solid var(--ia-brand-glow); border-top-color: var(--ia-brand-500); animation: ia-spin 0.7s linear infinite; }
.ia-kbd { font-family: var(--ia-mono); background: var(--ia-brand-soft); color: var(--ia-brand-500); padding: 1px var(--ia-sp-2); border-radius: var(--ia-r-sm); font-size: var(--ia-fs-xs); font-weight: 700; border: 1px solid var(--ia-brand-glow); }
.ia-empty { padding: var(--ia-sp-6); border: 1px dashed var(--ia-border-strong); border-radius: var(--ia-r-lg); color: var(--ia-text-3); text-align: center; }

/* Chip de estado (.ia-chip) */
.ia-chip { display: inline-flex; align-items: center; gap: 6px; height: 22px; padding: 0 9px; border-radius: 11px; font-size: var(--ia-fs-xs); font-weight: 600; white-space: nowrap; color: var(--ia-text-2); background: rgba(255, 255, 255, 0.05); border: 1px solid var(--ia-border); }
.ia-chip i { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.ia-chip[data-tono="brand"] { color: var(--ia-brand-500); background: var(--ia-brand-soft); border-color: var(--ia-brand-glow); }
.ia-chip[data-tono="brand"] i { animation: fp-beat 1.6s ease-in-out infinite; }
.ia-chip[data-tono="success"] { color: var(--ia-success); background: rgba(63, 185, 80, 0.12); border-color: rgba(63, 185, 80, 0.35); }
.ia-chip[data-tono="warning"] { color: var(--ia-warning); background: rgba(210, 153, 34, 0.12); border-color: rgba(210, 153, 34, 0.35); }

/* Valor destacado y etiqueta (360 PRO .tw-chip / .tw-pill) */
.tw-chip, .tw-copy { display: inline-flex; align-items: center; gap: 6px; padding: 2px var(--ia-sp-2); background: var(--ia-brand-soft); border: 1px solid var(--ia-brand-glow); border-radius: var(--ia-r-sm); color: var(--ia-brand-500); font-family: var(--ia-mono); font-size: var(--ia-fs-sm); font-weight: 700; line-height: 1.4; }
.tw-pill { flex: none; display: inline-flex; align-items: center; gap: 5px; padding: 2px var(--ia-sp-2); border-radius: 9px; font-size: var(--ia-fs-xs); font-weight: 600; border: 1px solid var(--ia-border); color: var(--ia-text-2); background: rgba(255, 255, 255, 0.04); }
/* Título de sección y fila de dato (360 PRO .tw-section-title / .tw-row) */
.tw-section-title { display: flex; align-items: center; gap: var(--ia-sp-2); margin: 0 0 var(--ia-sp-3); font-size: var(--ia-fs-xs); font-weight: 700; color: var(--ia-text); letter-spacing: 0.2px; }
.tw-section-title::before { content: ""; flex: none; width: 3px; height: 12px; border-radius: 2px; background-color: var(--ia-brand-500); }
.tw-row { display: grid; grid-template-columns: minmax(96px, 1fr) minmax(0, max-content); align-items: center; column-gap: var(--ia-sp-4); padding: 7px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: var(--ia-fs-sm); line-height: 1.4; }
.tw-row:last-child { border-bottom: none; }
.tw-row > span:first-child { color: var(--ia-text-3); font-weight: 500; }
.tw-row > :last-child { justify-self: end; text-align: right; }
.tw-row b { color: var(--ia-text); font-weight: 600; }
.tw-badge { display: inline-flex; align-items: center; gap: 6px; font-weight: 600; font-size: var(--ia-fs-xs); color: var(--ia-text-2); }
.tw-badge::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background-color: var(--ia-dot-off); }
.tw-badge.is-good { color: var(--ia-success); } .tw-badge.is-good::before { background: var(--ia-success); }
.tw-badge.is-info { color: var(--ia-brand-500); } .tw-badge.is-info::before { background: var(--ia-brand-500); }

/* Pasos (.fp-steps del Design System) */
.fp-steps { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; }
.fp-steps > li { position: relative; display: grid; grid-template-columns: 30px 1fr; gap: var(--ia-sp-5); padding-bottom: var(--ia-sp-7); }
.fp-steps > li:last-child { padding-bottom: 0; }
.fp-steps > li + li::before { content: ""; position: absolute; left: 14px; top: calc(-1 * var(--ia-sp-7) + 30px); height: calc(var(--ia-sp-7) - 4px); width: 2px; border-radius: 1px; background: var(--ia-border); }
.fp-steps > li.is-in + li.is-in::before { background: linear-gradient(var(--ia-brand-500), var(--ia-border)); transition: background 0.6s ease 0.2s; }
.fp-node { position: relative; z-index: 1; width: 30px; height: 30px; border-radius: 50%; border: 2px solid var(--ia-brand-500); background: var(--ia-surface-solid); color: var(--ia-brand-500); display: inline-flex; align-items: center; justify-content: center; font-weight: 700; font-size: 13px; box-shadow: 0 0 0 5px var(--ia-brand-soft); }
.fp-steps h3 { font-size: var(--ia-fs-xl); margin: 3px 0 var(--ia-sp-2); }
.fp-steps p { color: var(--ia-text-3); max-width: 60ch; }

/* Modal */
.ia-overlay { display: none; position: fixed; inset: 0; background: var(--ia-overlay); z-index: var(--ia-z-modal); align-items: center; justify-content: center; padding: 16px; animation: ia-fade 0.2s ease-out; }
.ia-overlay.is-open { display: flex; }
.ia-modal { background-color: var(--ia-surface-modal); border: 1px solid var(--ia-border); border-radius: var(--ia-r-xl); padding: var(--ia-sp-6); width: 480px; max-width: 100%; max-height: 90vh; overflow-y: auto; box-shadow: var(--ia-sh-modal); color: var(--ia-text-2); animation: ia-modal-in 0.34s var(--ia-ease); }
.ia-modal > * { animation: ia-rise 0.38s var(--ia-ease) backwards; }
.ia-modal > :nth-child(1) { animation-delay: 0.04s; } .ia-modal > :nth-child(2) { animation-delay: 0.07s; } .ia-modal > :nth-child(3) { animation-delay: 0.10s; } .ia-modal > :nth-child(n+4) { animation-delay: 0.13s; }
.ia-modal-title { font-size: var(--ia-fs-lg); font-weight: 700; margin-bottom: var(--ia-sp-5); color: var(--ia-brand-500); display: flex; align-items: center; gap: var(--ia-sp-2); }
.ia-modal-footer { display: flex; justify-content: flex-end; gap: 10px; margin-top: var(--ia-sp-6); }
.ia-modal .ia-btn { height: 32px; padding: 0 14px; font-size: var(--ia-fs-sm); }
.ia-label { display: block; font-size: var(--ia-fs-xs); color: var(--ia-text-2); font-weight: 600; margin-bottom: var(--ia-sp-2); }
.ia-control { background-color: var(--ia-field); border: 1px solid var(--ia-border); color: var(--ia-text); border-radius: var(--ia-r-md); padding: 0 10px; height: 32px; font-size: var(--ia-fs-sm); font-weight: 500; font-family: inherit; outline: none; width: 100%; transition: border-color 0.2s, box-shadow 0.2s; }
.ia-control:focus { border-color: var(--ia-border-focus); box-shadow: 0 0 0 2px rgba(0, 153, 255, 0.15); }
.ia-control::placeholder { color: var(--ia-text-3); }
.ia-hint { display: flex; align-items: flex-start; gap: var(--ia-sp-2); font-size: var(--ia-fs-sm); color: var(--ia-text-3); line-height: 1.5; animation: ia-reveal 0.26s var(--ia-ease); }
.ia-hint .ia-icon { margin-top: 2px; color: var(--ia-brand-500); }
.ia-hint--warning, .ia-hint--warning .ia-icon { color: var(--ia-warning); }

/* =====================================================================
   PATRONES DE LA WEB (extensión v1.9: composición de página con los mismos tokens)
   ===================================================================== */
/* Barra de navegación = barra de herramientas + indicador deslizante (menú lateral de 360 PRO, en horizontal) */
.ws-nav { position: relative; display: flex; align-items: center; gap: 2px; }
.ws-nav .ia-btn { height: 30px; padding: 0 12px; font-size: var(--ia-fs-sm); z-index: 1; border-color: transparent !important; background: transparent !important; }
.ws-nav .ia-btn:hover { color: var(--ia-text); }
.ws-nav .ia-btn[aria-current="page"] { color: var(--ia-brand-500); }
.ws-nav-ind { position: absolute; top: 0; bottom: 0; left: 0; width: 0; border-left: 2px solid var(--ia-brand-500); border-radius: var(--ia-r-md); background: var(--ia-brand-soft); opacity: 0; pointer-events: none; transition: transform 0.36s var(--ia-ease), width 0.36s var(--ia-ease), opacity 0.2s ease; }
.ws-bar-sep { width: 1px; height: 18px; background: var(--ia-border); margin: 0 var(--ia-sp-1); }
.ws-bar-title { display: none; font-size: var(--ia-fs-sm); font-weight: 600; color: var(--ia-text); padding: 0 var(--ia-sp-2); }
.ws-menu-wrap { position: relative; display: none; }

/* Secciones */
.ws-section { padding: var(--ia-sp-10) 0 0; }
.ws-section:last-of-type { padding-bottom: var(--ia-sp-9); }
.ws-head { display: flex; align-items: flex-end; justify-content: space-between; gap: var(--ia-sp-6); margin-bottom: var(--ia-sp-8); flex-wrap: wrap; }
.ws-head .tw-section-title { font-size: var(--ia-fs-sm); color: var(--ia-brand-500); margin-bottom: var(--ia-sp-4); }
.ws-head h2 { font-size: var(--ia-fs-3xl); letter-spacing: -0.5px; max-width: 22ch; }
.ws-head p { margin-top: var(--ia-sp-4); max-width: 58ch; color: var(--ia-text-3); font-size: var(--ia-fs-lg); }

/* Hero */
.ws-hero { position: relative; padding: 150px 0 var(--ia-sp-8); }
.ws-hero-grid { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); gap: var(--ia-sp-8); align-items: center; }
.ws-hero h1 { font-size: var(--ia-fs-display); letter-spacing: -1.6px; line-height: 1.04; margin: var(--ia-sp-6) 0 var(--ia-sp-6); }
.ws-hero h1 span { background: linear-gradient(100deg, #36c8ff, var(--ia-brand-500) 45%, #0077ff); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
.ws-lead { font-size: var(--ia-fs-xl); color: var(--ia-text-3); max-width: 50ch; line-height: 1.6; }
.ws-cta { display: flex; flex-wrap: wrap; gap: var(--ia-sp-4); margin-top: var(--ia-sp-7); }
.ws-stats { display: flex; flex-wrap: wrap; gap: var(--ia-sp-8); margin-top: var(--ia-sp-8); padding-top: var(--ia-sp-6); border-top: 1px solid var(--ia-border); }
.ws-stat b { display: block; font-size: var(--ia-fs-3xl); color: var(--ia-text); font-weight: 700; letter-spacing: -0.5px; line-height: 1.1; font-variant-numeric: tabular-nums; }
.ws-stat span { font-size: var(--ia-fs-sm); color: var(--ia-text-3); font-weight: 500; }

/* Escena del hero: componentes reales del sistema */
.ws-stage { position: relative; height: 470px; perspective: 1400px; }
.ws-layer { position: absolute; transition: transform 0.5s var(--ia-ease); will-change: transform; }
.ws-float { animation: ws-float 7s ease-in-out infinite; }
.ws-l-card { top: 74px; left: 0; width: 330px; animation-delay: -2s; }
.ws-l-bar { top: 6px; right: 0; }
.ws-l-bar .ia-toolbar { position: relative; top: 0; animation: none; max-width: none; }
.ws-mock-card { background: rgba(13, 17, 23, 0.94); border: 1px solid var(--ia-border); border-radius: var(--ia-r-xl); padding: var(--ia-sp-5) var(--ia-sp-5) var(--ia-sp-4); box-shadow: var(--ia-sh-modal); }
.ws-mock-card .ws-mock-head { display: flex; align-items: center; gap: var(--ia-sp-2); font-size: var(--ia-fs-lg); font-weight: 700; color: var(--ia-brand-500); padding-bottom: var(--ia-sp-4); margin-bottom: var(--ia-sp-4); border-bottom: 1px solid var(--ia-border); }
.ws-mock-inner { background: var(--ia-field); border: 1px solid var(--ia-border); border-radius: var(--ia-r-md); padding: var(--ia-sp-4) var(--ia-sp-5); }

/* Tarjeta (base 360 PRO .tw-card, a escala de página) */
.ws-card { position: relative; display: flex; flex-direction: column; min-width: 0; background: var(--ia-field); border: 1px solid var(--ia-border); border-radius: var(--ia-r-xl); padding: var(--ia-sp-6); overflow: hidden; isolation: isolate;
    transition: transform 0.35s var(--ia-ease), border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.35s var(--ia-ease); }
.ws-card::after { content: ""; position: absolute; inset: 0; z-index: -1; opacity: 0; transition: opacity 0.3s ease; background: radial-gradient(380px circle at var(--mx, 50%) var(--my, 0%), rgba(0, 153, 255, 0.12), transparent 60%); }
.ws-card::before { content: ""; position: absolute; top: 0; left: 12%; right: 12%; height: 1px; opacity: 0; transition: opacity 0.3s ease; background: linear-gradient(90deg, transparent, rgba(54, 200, 255, 0.9), transparent); }
.ws-card:hover::after, .ws-card:hover::before, .ws-card:focus-within::before { opacity: 1; }
a.ws-card:hover, .ws-card--link:hover { transform: translateY(-4px); border-color: rgba(0, 153, 255, 0.35); background-color: rgba(255, 255, 255, 0.06); box-shadow: 0 24px 50px rgba(0, 0, 0, 0.45); }
a.ws-card:focus-visible { outline: 2px solid var(--ia-brand-500); outline-offset: 2px; }
.ws-tile { flex: none; width: 44px; height: 44px; border-radius: var(--ia-r-lg); display: inline-flex; align-items: center; justify-content: center; color: var(--ia-brand-500); background: var(--ia-brand-soft); border: 1px solid var(--ia-brand-glow); transition: transform 0.35s var(--ia-ease-pop), box-shadow 0.3s ease; }
a.ws-card:hover .ws-tile { transform: scale(1.06) rotate(-4deg); box-shadow: 0 0 22px var(--ia-brand-glow); }
.ws-tile--lg { width: 64px; height: 64px; border-radius: var(--ia-r-xl); }

/* Principios */
.ws-grid-4 { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: var(--ia-sp-5); }
.ws-principle h3 { font-size: var(--ia-fs-lg); margin: var(--ia-sp-5) 0 var(--ia-sp-2); }
.ws-principle p { color: var(--ia-text-3); font-size: var(--ia-fs-md); }

/* Catálogo */
.ws-tools { display: grid; grid-template-columns: repeat(auto-fill, minmax(330px, 1fr)); gap: var(--ia-sp-5); }
.ws-tool-top { display: flex; align-items: flex-start; justify-content: space-between; gap: var(--ia-sp-4); margin-bottom: var(--ia-sp-5); }
.ws-tool h3 { font-size: var(--ia-fs-xl); display: flex; align-items: baseline; flex-wrap: wrap; gap: 0 var(--ia-sp-2); }
.ws-tool h3 small { font-size: var(--ia-fs-md); font-weight: 600; color: var(--ia-text-3); }
.ws-plat { display: flex; align-items: center; gap: var(--ia-sp-1); margin: var(--ia-sp-1) 0 var(--ia-sp-4); font-size: var(--ia-fs-sm); color: var(--ia-text-3); font-weight: 500; }
.ws-tool p { color: var(--ia-text-3); flex: 1; }
.ws-tool-foot { display: flex; align-items: center; gap: var(--ia-sp-2); flex-wrap: wrap; margin-top: var(--ia-sp-6); padding-top: var(--ia-sp-4); border-top: 1px solid var(--ia-border); }
.ws-tool-foot .ws-go { margin-left: auto; display: inline-flex; align-items: center; gap: var(--ia-sp-1); color: var(--ia-brand-500); font-weight: 600; font-size: var(--ia-fs-sm); }
.ws-tool-foot .ws-go .ia-icon { transition: transform 0.3s var(--ia-ease); }
a.ws-card:hover .ws-go .ia-icon { transform: translateX(4px); }
.ws-toolbar-filters { display: flex; flex-wrap: wrap; align-items: center; gap: var(--ia-sp-4); margin-bottom: var(--ia-sp-6); }
.ws-filters { position: relative; display: inline-flex; flex-wrap: wrap; gap: 2px; padding: 4px; border-radius: var(--ia-r-lg); background: var(--ia-field); border: 1px solid var(--ia-border); }
.ws-filters .ia-btn { height: 30px; font-size: var(--ia-fs-sm); padding: 0 12px; }
.ws-search { position: relative; margin-left: auto; width: min(300px, 100%); }
.ws-search .ia-icon { position: absolute; left: 11px; top: 50%; transform: translateY(-50%); color: var(--ia-text-3); pointer-events: none; }
.ws-search .ia-control { height: 40px; padding-left: 34px; font-size: var(--ia-fs-md); border-radius: var(--ia-r-lg); }

/* Novedades (línea de tiempo con chips) */
.ws-log { position: relative; display: flex; flex-direction: column; gap: var(--ia-sp-4); max-width: 860px; }
.ws-log-item { display: grid; grid-template-columns: 120px minmax(0, 1fr); gap: var(--ia-sp-6); }
.ws-log-date { font-size: var(--ia-fs-sm); color: var(--ia-text-3); font-weight: 600; padding-top: var(--ia-sp-6); font-variant-numeric: tabular-nums; }
.ws-log .ws-card { padding: var(--ia-sp-5) var(--ia-sp-6); }
.ws-log-head { display: flex; align-items: center; gap: var(--ia-sp-3); flex-wrap: wrap; margin-bottom: var(--ia-sp-2); }
.ws-log-head h3 { font-size: var(--ia-fs-lg); }
.ws-log p { color: var(--ia-text-3); }

/* Hoja de ruta */
.ws-road { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--ia-sp-5); }
.ws-road .ws-card { border-style: dashed; background: transparent; }
.ws-road h3 { font-size: var(--ia-fs-lg); margin: var(--ia-sp-4) 0 var(--ia-sp-2); }
.ws-road p { color: var(--ia-text-3); }

/* Instalación */
.ws-install { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); gap: var(--ia-sp-8); align-items: start; }
.ws-aside { position: sticky; top: 96px; display: flex; flex-direction: column; gap: var(--ia-sp-4); }

/* Ficha de herramienta */
.ws-page { padding: 128px 0 var(--ia-sp-9); }
.ws-crumbs { display: flex; align-items: center; gap: var(--ia-sp-2); font-size: var(--ia-fs-sm); color: var(--ia-text-3); margin-bottom: var(--ia-sp-7); }
.ws-crumbs a { color: var(--ia-text-2); font-weight: 500; transition: color 0.15s; }
.ws-crumbs a:hover { color: var(--ia-brand-500); }
.ws-detail { display: grid; grid-template-columns: minmax(0, 1fr) 340px; gap: var(--ia-sp-8); align-items: start; }
.ws-detail-head { display: flex; gap: var(--ia-sp-6); align-items: flex-start; margin-bottom: var(--ia-sp-8); }
.ws-detail-head h1 { font-size: var(--ia-fs-3xl); letter-spacing: -0.5px; display: flex; align-items: baseline; flex-wrap: wrap; gap: 0 var(--ia-sp-4); }
.ws-detail-head h1 small { font-size: var(--ia-fs-xl); color: var(--ia-text-3); font-weight: 600; }
.ws-detail-head p { margin-top: var(--ia-sp-4); font-size: var(--ia-fs-lg); color: var(--ia-text-3); max-width: 62ch; }
.ws-block { margin-top: var(--ia-sp-8); }
.ws-block > .tw-section-title { font-size: var(--ia-fs-sm); margin-bottom: var(--ia-sp-5); }
.ws-feats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--ia-sp-4); }
.ws-feat { display: grid; grid-template-columns: 36px minmax(0, 1fr); gap: var(--ia-sp-4); padding: var(--ia-sp-5); }
.ws-feat .ws-tile { width: 36px; height: 36px; }
.ws-feat h3 { font-size: var(--ia-fs-md); margin-bottom: 2px; }
.ws-feat p { font-size: var(--ia-fs-md); color: var(--ia-text-3); line-height: 1.55; }
.ws-panel { position: sticky; top: 96px; padding: var(--ia-sp-6); border-radius: var(--ia-r-2xl);
    background: radial-gradient(120% 60% at 50% -5%, rgba(0, 153, 255, 0.18), transparent 62%), var(--ia-surface-modal); border: 1px solid var(--ia-border-strong); box-shadow: 0 30px 70px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08); overflow: hidden; }
.ws-panel .ia-btn--lg { width: 100%; }
.ws-panel-actions { display: flex; flex-direction: column; gap: var(--ia-sp-3); margin-top: var(--ia-sp-5); }
.ws-panel .tw-row { font-size: var(--ia-fs-sm); }
.ws-tags { display: flex; flex-wrap: wrap; gap: var(--ia-sp-2); }
.ws-mono { font-family: var(--ia-mono); font-size: var(--ia-fs-sm); color: var(--ia-text-2); background: var(--ia-field); border: 1px solid var(--ia-border); border-radius: var(--ia-r-sm); padding: 3px var(--ia-sp-2); overflow-wrap: anywhere; }
.ws-perm { display: grid; grid-template-columns: 28px minmax(0, 1fr); gap: var(--ia-sp-3); padding: var(--ia-sp-3) 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
.ws-perm:last-child { border-bottom: none; }
.ws-perm .ia-icon { color: var(--ia-brand-500); margin-top: 3px; }
.ws-perm b { color: var(--ia-text); font-weight: 600; display: block; }
.ws-perm span { color: var(--ia-text-3); font-size: var(--ia-fs-sm); }
.ws-week { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: var(--ia-sp-3); }
.ws-day { padding: var(--ia-sp-4); }
.ws-day h3 { font-size: var(--ia-fs-md); margin-bottom: var(--ia-sp-3); display: flex; align-items: center; justify-content: space-between; }
.ws-day.is-today { border-color: rgba(0, 153, 255, 0.45); background: var(--ia-brand-soft); }
.ws-day ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 4px; }
.ws-day li { font-size: var(--ia-fs-sm); color: var(--ia-text-2); line-height: 1.35; }
.ws-day li.is-daily { color: var(--ia-text-3); }
.ws-reports { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 var(--ia-sp-6); }
.ws-report { display: flex; align-items: center; gap: var(--ia-sp-3); padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: var(--ia-fs-md); color: var(--ia-text-2); transition: color 0.15s; }
.ws-report .ia-icon { color: var(--ia-text-3); transition: transform 0.3s var(--ia-ease), color 0.15s; }
.ws-report:hover { color: var(--ia-brand-500); }
.ws-report:hover .ia-icon { color: var(--ia-brand-500); transform: translateX(3px); }
.ws-report span { flex: 1; }

/* Visor de código: menú lateral (360 PRO .tw-rail) + editor */
.ws-viewer { display: grid; grid-template-columns: 250px minmax(0, 1fr); min-height: calc(100vh - 160px); border: 1px solid var(--ia-border); border-radius: var(--ia-r-xl); overflow: hidden; background: var(--ia-surface-solid); box-shadow: var(--ia-sh-modal); }
.ws-rail { position: relative; padding: var(--ia-sp-5) var(--ia-sp-3); background: linear-gradient(180deg, rgba(0, 153, 255, 0.05), rgba(255, 255, 255, 0.015) 40%); border-right: 1px solid var(--ia-border); overflow-y: auto; max-height: calc(100vh - 160px); }
.ws-rail-group { font-size: var(--ia-fs-xs); font-weight: 700; color: var(--ia-text-3); padding: var(--ia-sp-4) var(--ia-sp-4) var(--ia-sp-2); }
.tw-cat-btn { position: relative; z-index: 1; display: flex; align-items: center; gap: var(--ia-sp-3); width: 100%; padding: 8px var(--ia-sp-4); background: transparent; border: none; border-radius: var(--ia-r-sm); color: var(--ia-text-2); font-family: inherit; font-size: var(--ia-fs-sm); font-weight: 500; text-align: left; cursor: pointer; transition: color 0.2s ease, background-color 0.2s ease; }
.tw-cat-btn span { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tw-cat-btn .ia-icon { transition: transform 0.25s var(--ia-ease); color: var(--ia-text-3); }
.tw-cat-btn:hover { color: var(--ia-text); background-color: var(--ia-hover); }
.tw-cat-btn:hover .ia-icon { transform: translateX(2px); }
.tw-cat-btn.active { color: var(--ia-brand-500); font-weight: 600; background-color: transparent; }
.tw-cat-btn.active .ia-icon { color: var(--ia-brand-500); }
.tw-cat-btn:focus-visible { outline: 2px solid var(--ia-brand-500); outline-offset: 1px; }
.tw-nav-ind { position: absolute; left: 0; right: 0; top: 0; height: 0; border-left: 2px solid var(--ia-brand-500); border-radius: var(--ia-r-sm); background-color: var(--ia-brand-soft); pointer-events: none; opacity: 0; transition: transform 0.32s var(--ia-ease), height 0.32s var(--ia-ease), opacity 0.2s ease; }
.ws-code-main { min-width: 0; display: flex; flex-direction: column; }
.ws-code-head { display: flex; align-items: center; gap: var(--ia-sp-4); flex-wrap: wrap; padding: var(--ia-sp-5) var(--ia-sp-6); border-bottom: 1px solid var(--ia-border); background: rgba(255, 255, 255, 0.02); }
.ws-code-head h1 { font-size: var(--ia-fs-xl); display: flex; align-items: center; gap: var(--ia-sp-3); flex-wrap: wrap; }
.ws-code-path { font-family: var(--ia-mono); font-size: var(--ia-fs-sm); color: var(--ia-text-3); margin-top: 2px; overflow-wrap: anywhere; }
.ws-code-actions { margin-left: auto; display: flex; gap: var(--ia-sp-2); flex-wrap: wrap; }
.ws-code-meta { display: flex; flex-wrap: wrap; gap: var(--ia-sp-2); padding: var(--ia-sp-3) var(--ia-sp-6); border-bottom: 1px solid var(--ia-border); }
.ws-code { position: relative; flex: 1; overflow: auto; max-height: calc(100vh - 290px); min-height: 360px; font-family: var(--ia-mono); font-size: 12.5px; line-height: 1.65; color: var(--ia-text-2); tab-size: 4; counter-reset: none; }
.cv-chunk { content-visibility: auto; contain-intrinsic-size: auto 8000px; }
.cv-line { display: grid; grid-template-columns: 64px minmax(0, 1fr); white-space: pre; }
.ws-code.is-wrap .cv-line { white-space: pre-wrap; overflow-wrap: anywhere; }
.cv-n { position: sticky; left: 0; padding-right: var(--ia-sp-4); text-align: right; color: rgba(139, 148, 158, 0.55); user-select: none; background: var(--ia-surface-solid); border-right: 1px solid rgba(255, 255, 255, 0.05); cursor: pointer; }
.cv-n:hover { color: var(--ia-text-2); }
.cv-c { padding: 0 var(--ia-sp-6) 0 var(--ia-sp-4); }
.cv-line.is-hl { background: var(--ia-brand-soft); }
.cv-line.is-hl .cv-n { color: var(--ia-brand-500); background: rgba(0, 153, 255, 0.16); }
.t-c { color: var(--ia-text-3); font-style: italic; }
.t-m { color: var(--ia-text-3); }
.t-m b { color: var(--ia-brand-500); font-weight: 600; font-style: normal; }
.t-s { color: var(--ia-success); }
.t-k { color: var(--ia-brand-500); }
.t-n { color: var(--ia-warning); }
.cv-more { display: inline-flex; align-items: center; margin-left: var(--ia-sp-2); padding: 0 var(--ia-sp-2); height: 18px; border-radius: 9px; border: 1px solid var(--ia-brand-glow); background: var(--ia-brand-soft); color: var(--ia-brand-500); font: 600 var(--ia-fs-xs) var(--ia-font); cursor: pointer; vertical-align: 1px; }
.cv-more:hover { background: rgba(0, 153, 255, 0.2); }
.ws-code-state { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--ia-sp-4); min-height: 360px; color: var(--ia-text-3); font-family: var(--ia-font); }

/* Escena 1 · entrada con el logo (sección alta + capa fijada) */
.ws-intro { position: relative; height: 290vh; }
.ws-intro-pin { position: sticky; top: 0; height: 100vh; height: 100svh; overflow: hidden; }
.ws-scene { position: absolute; inset: 0; display: flex; align-items: center; padding-top: 64px; transform-origin: 62% 40%; will-change: transform; }
.ws-scene-glow { position: absolute; inset: -10%; pointer-events: none; background: radial-gradient(30% 34% at 62% 38%, rgba(54, 200, 255, 0.45), transparent 70%), radial-gradient(48% 52% at 62% 40%, rgba(0, 153, 255, 0.6), transparent 72%), radial-gradient(40% 45% at 20% 70%, rgba(0, 119, 255, 0.35), transparent 70%); }
.ws-scene .ws-hero-grid { position: relative; }
.ws-scene h1 { font-size: var(--ia-fs-display); letter-spacing: -1.6px; line-height: 1.04; margin: var(--ia-sp-6) 0; max-width: 15ch; }
.ws-scene h1 span { background: linear-gradient(100deg, #36c8ff, var(--ia-brand-500) 45%, #0077ff); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
.ws-in { will-change: transform, opacity; }
.ws-cover { position: absolute; inset: 0; width: 100%; height: 100%; display: block; pointer-events: none; }
.ws-intro-cap { position: absolute; left: 0; right: 0; bottom: 9vh; display: flex; flex-direction: column; align-items: center; gap: var(--ia-sp-7); text-align: center; pointer-events: none; }
.ws-intro-cap p { font-size: var(--ia-fs-xl); font-weight: 600; color: var(--ia-text); letter-spacing: 0.2px; line-height: 1.5; }
.ws-intro-cap p span { font-size: var(--ia-fs-md); font-weight: 500; color: var(--ia-text-3); }
.ws-scroll-hint { pointer-events: auto; display: inline-flex; flex-direction: column; align-items: center; gap: var(--ia-sp-3); background: none; border: none; color: var(--ia-text-3); font: 500 var(--ia-fs-sm) var(--ia-font); cursor: pointer; transition: color 0.2s ease; }
.ws-scroll-hint:hover { color: var(--ia-text); }
.ws-scroll-hint:focus-visible { outline: 2px solid var(--ia-brand-500); outline-offset: 4px; border-radius: var(--ia-r-md); }
.ws-mouse { width: 22px; height: 34px; border: 2px solid currentColor; border-radius: 12px; display: flex; justify-content: center; padding-top: 6px; }
.ws-mouse i { width: 3px; height: 7px; border-radius: 2px; background: var(--ia-brand-500); animation: ws-rueda 1.8s var(--ia-ease) infinite; }
@keyframes ws-rueda { 0% { transform: translateY(0); opacity: 0; } 30% { opacity: 1; } 100% { transform: translateY(10px); opacity: 0; } }
.ws-l-rep { bottom: -6px; right: 0; animation-delay: -4s; }
.ws-mini-rep { position: relative; width: 244px; padding: var(--ia-sp-5); border-radius: var(--ia-r-2xl); overflow: hidden; display: flex; flex-direction: column; gap: 2px;
    background: radial-gradient(120% 60% at 50% -5%, rgba(0, 153, 255, 0.22), transparent 62%), var(--ia-surface-modal); border: 1px solid var(--ia-border-strong); box-shadow: 0 30px 70px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.08); }
.ws-mini-rep::before { content: ""; position: absolute; top: 0; left: 12%; right: 12%; height: 1px; background: linear-gradient(90deg, transparent, rgba(54, 200, 255, 0.9), transparent); }
.ws-mini-rep-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--ia-sp-3); font-size: var(--ia-fs-sm); font-weight: 700; color: var(--ia-text); }
.ws-mini-rep-head > span:first-child { display: inline-flex; align-items: center; gap: var(--ia-sp-2); }
.ws-mini-rep-head .ia-icon { color: var(--ia-brand-500); }
.ws-rep-row { display: grid; grid-template-columns: 14px minmax(0, 1fr) auto; align-items: center; gap: var(--ia-sp-3); padding: 7px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: var(--ia-fs-sm); color: var(--ia-text-2); }
.ws-rep-row span:nth-child(2) { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ws-rep-row .ia-icon { color: var(--ia-text-3); }
.ws-mini-rep .ia-btn { margin-top: var(--ia-sp-4); width: 100%; }

/* Escena 2 · cómo trabajan (sección alta + capa fijada) */
.ws-flow { position: relative; height: 330vh; margin-top: var(--ia-sp-9); }
.ws-flow-pin { position: sticky; top: 0; height: 100vh; height: 100svh; display: flex; align-items: center; overflow: hidden; }
.ws-flow-grid { display: grid; grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr); gap: var(--ia-sp-8); align-items: center; padding-top: 56px; }
.ws-flow-text h2 { font-size: var(--ia-fs-3xl); letter-spacing: -0.5px; }
.ws-flow-lead { margin: var(--ia-sp-3) 0 var(--ia-sp-7); color: var(--ia-text-3); font-size: var(--ia-fs-lg); }
.ws-flow-steps { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: var(--ia-sp-2); }
.ws-flow-steps li { position: relative; display: grid; grid-template-columns: 3px minmax(0, 1fr); column-gap: var(--ia-sp-5); padding: var(--ia-sp-4) 0; color: var(--ia-text-3); transition: color 0.4s ease, opacity 0.4s ease; opacity: 0.55; }
.ws-flow-steps li b { grid-column: 2; font-size: var(--ia-fs-xl); color: var(--ia-text-2); font-weight: 700; transition: color 0.4s ease; }
.ws-flow-steps li > span:last-child { grid-column: 2; margin-top: var(--ia-sp-1); line-height: 1.55; max-width: 46ch; }
.ws-flow-bar { grid-row: 1 / span 2; width: 3px; border-radius: 2px; background: var(--ia-border); overflow: hidden; }
.ws-flow-bar i { display: block; width: 100%; height: 100%; background: var(--ia-brand-500); transform-origin: top; transform: scaleY(0); }
.ws-flow-steps li.is-on, .ws-flow-steps li.is-done { opacity: 1; }
.ws-flow-steps li.is-on b { color: var(--ia-text); }
.ws-flow-steps li.is-done .ws-flow-bar i { background: var(--ia-success); }
.ws-flow-stage { position: relative; display: flex; flex-direction: column; align-items: center; gap: var(--ia-sp-5); }
.ws-flow-stage .ia-toolbar { position: relative; top: 0; left: 0; right: 0; margin: 0; animation: none; }
.ws-flow-modal { position: relative; width: 440px; max-width: 100%; animation: none; opacity: 0; box-shadow: 0 30px 70px rgba(0, 0, 0, 0.55); }
.ws-flow-modal > * { animation: none; }
.ws-fl-field { display: flex; flex-direction: column; gap: var(--ia-sp-2); margin-bottom: var(--ia-sp-5); }
.ws-fl-div { border-top: 1px solid var(--ia-border); padding-top: var(--ia-sp-5); }
.ws-fl-dd { width: 100%; height: 32px; justify-content: space-between; border-color: var(--ia-border); background: var(--ia-field); font-weight: 500; font-size: var(--ia-fs-sm); color: var(--ia-text); }
.ws-fl-dd.is-placeholder { color: var(--ia-text-3); }
.ws-fl-val { display: inline-flex; align-items: center; gap: var(--ia-sp-1); min-width: 0; overflow: hidden; white-space: nowrap; }
.ia-dd-group { color: var(--ia-text-3); font-weight: 600; }
.ws-fl-val .ia-icon { color: var(--ia-text-3); }
.ws-fl-hint { color: var(--ia-brand-500); font-size: var(--ia-fs-xs); opacity: 0; transform: translateY(-4px); transition: opacity 0.3s ease, transform 0.3s var(--ia-ease); animation: none; }
.ws-fl-hint.is-on { opacity: 1; transform: none; }
.ws-fl-hint .ia-icon { margin-top: 0; }
.ws-flow-modal .ia-btn--primary.is-pressed { transform: scale(0.95); box-shadow: 0 0 0 4px var(--ia-brand-soft); }
.ia-btn.is-placeholder { color: var(--ia-text-3); }

/* Movimiento reducido: sin secciones fijadas; se ve el resultado final */
.ws-intro.is-static { height: auto; }
.ws-intro.is-static .ws-intro-pin { position: relative; height: auto; overflow: visible; }
.ws-intro.is-static .ws-scene { position: relative; transform: none !important; padding: 140px 0 var(--ia-sp-8); }
.ws-intro.is-static .ws-cover, .ws-intro.is-static .ws-intro-cap { display: none; }
.ws-intro.is-static .ws-scene-glow { opacity: 0.25 !important; }
.ws-flow.is-static { height: auto; }
.ws-flow.is-static .ws-flow-pin { position: relative; height: auto; padding: var(--ia-sp-8) 0; }
.ws-flow.is-static .ws-flow-steps li { opacity: 1; }

.ws-l-card { width: min(330px, calc(100% - 256px)); }
.ws-flow-box { display: grid; grid-template-columns: minmax(0, 1fr); width: 440px; max-width: 100%; }
.ws-flow-box > * { grid-area: 1 / 1; }
.ws-flow-res { align-self: start; opacity: 0; padding: var(--ia-sp-6); border-radius: var(--ia-r-2xl); background: radial-gradient(120% 60% at 50% -5%, rgba(0, 153, 255, 0.16), transparent 62%), var(--ia-surface-modal); border: 1px solid var(--ia-border-strong); box-shadow: 0 30px 70px rgba(0, 0, 0, 0.55); }
.ws-res-head { display: flex; align-items: center; justify-content: space-between; gap: var(--ia-sp-3); margin-bottom: var(--ia-sp-4); }
.ws-res-row { display: grid; grid-template-columns: 22px minmax(0, 1fr) auto; align-items: center; gap: var(--ia-sp-3); padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: var(--ia-fs-sm); color: var(--ia-text-3); transition: color 0.3s ease; }
.ws-res-row:last-child { border-bottom: none; }
.ws-res-row b { font-weight: 600; color: var(--ia-text-3); transition: color 0.3s ease; }
.ws-res-row > span:last-child { font-size: var(--ia-fs-xs); text-align: right; }
.ws-res-ico { width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid var(--ia-border-strong); display: inline-flex; align-items: center; justify-content: center; transition: all 0.3s var(--ia-ease); }
.ws-res-ico .ia-icon, .ws-res-ico .ia-spinner { display: none; }
.ws-res-row.is-wait .ws-res-ico { border-color: transparent; }
.ws-res-row.is-wait .ia-spinner { display: block; }
.ws-res-row.is-done .ws-res-ico { background: var(--ia-success); border-color: var(--ia-success); color: #0d1117; }
.ws-res-row.is-done .ia-icon { display: block; animation: ia-pop 0.45s var(--ia-ease-pop); }
.ws-res-row.is-done b { color: var(--ia-text); }
.ws-res-row.is-done > span:last-child { color: var(--ia-text-2); }
.ws-flow-pin > .ws-wrap { min-width: 0; }
@media (max-width: 640px) {
    .ws-flow-stage .ws-hide-sm { display: none; }
    .ws-flow-stage .ia-toolbar { max-width: 100%; }
    .ws-flow-grid { padding-top: 64px; gap: var(--ia-sp-5); }
    .ws-flow-steps li > span:last-child { font-size: var(--ia-fs-sm); }
    .ws-res-row { grid-template-columns: 22px minmax(0, 1fr); }
    .ws-res-row > span:last-child { display: none; }
}

/* Familias de REPORTES PRO */
.ws-fams { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: var(--ia-sp-4); }
.ws-fam { padding: var(--ia-sp-5); }
.ws-fam-head { display: flex; align-items: center; justify-content: space-between; gap: var(--ia-sp-3); margin-bottom: var(--ia-sp-2); }
.ws-fam h3 { font-size: var(--ia-fs-md); }
.ws-fam .ws-report { padding: 8px 0; font-size: var(--ia-fs-sm); }
.ws-fam .ws-report:last-child { border-bottom: none; }

/* Pie */
.ws-foot { margin-top: var(--ia-sp-10); border-top: 1px solid var(--ia-border); padding: var(--ia-sp-8) 0; font-size: var(--ia-fs-sm); color: var(--ia-text-3); }
.ws-foot-row { display: flex; align-items: center; justify-content: space-between; gap: var(--ia-sp-6); flex-wrap: wrap; }
.ws-foot .ia-brand { border-right: 1px solid var(--ia-border); }
.ws-foot-links { display: flex; gap: var(--ia-sp-5); flex-wrap: wrap; }
.ws-foot-links a { transition: color 0.15s; }
.ws-foot-links a:hover { color: var(--ia-brand-500); }

/* Entrada al hacer scroll y al cambiar de página */
.ws-reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.7s var(--ia-ease), transform 0.7s var(--ia-ease); transition-delay: var(--d, 0s); }
.ws-reveal.is-in { opacity: 1; transform: none; }

/* =====================================================================
   MOVIMIENTO (catálogo del Design System v1.7)
   ===================================================================== */
@keyframes ia-bar-in { from { opacity: 0; transform: translateY(-14px) scale(0.98); } to { opacity: 1; transform: none; } }
@keyframes ia-rise { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
@keyframes ia-item-in { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
@keyframes ia-reveal { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: none; } }
@keyframes ia-fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes ia-dd-in { from { opacity: 0; transform: translateY(-6px) scale(0.98); } to { opacity: 1; transform: none; } }
@keyframes ia-modal-in { from { opacity: 0; transform: translateY(12px) scale(0.97); } to { opacity: 1; transform: none; } }
@keyframes ia-swap-in { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: none; } }
@keyframes ia-pop { from { opacity: 0; transform: scale(0.3) rotate(-25deg); } to { opacity: 1; transform: none; } }
@keyframes ia-ring-ok { from { box-shadow: 0 0 0 0 rgba(63, 185, 80, 0.5); } to { box-shadow: 0 0 0 9px rgba(63, 185, 80, 0); } }
@keyframes ia-shake { 15%, 55% { transform: translateX(-3px); } 35%, 75% { transform: translateX(3px); } 100% { transform: none; } }
@keyframes ia-autofill { from { border-color: var(--ia-brand-500); box-shadow: 0 0 0 0 rgba(0, 153, 255, 0.55); } to { box-shadow: 0 0 0 7px rgba(0, 153, 255, 0); } }
@keyframes ia-spin { to { transform: rotate(360deg); } }
@keyframes fp-beat { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.45; transform: scale(0.75); } }
@keyframes ws-float { 0%, 100% { translate: 0 0; } 50% { translate: 0 -8px; } }
.is-autofill { animation: ia-autofill 0.9s ease-out; }

@media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; transition-delay: 0s !important; }
    .ws-reveal { opacity: 1; transform: none; }
}

/* =====================================================================
   RESPONSIVE
   ===================================================================== */
@media (max-width: 1320px) {
    .ws-l-rep { scale: 0.86; transform-origin: right bottom; }
    .ws-l-card { width: min(330px, calc(100% - 214px)); }
}
@media (max-width: 1080px) {
    .ws-hero-grid { grid-template-columns: 1fr; }
    .ws-scene .ws-stage { display: none; }
    .ws-flow-grid { grid-template-columns: minmax(0, 1fr); gap: var(--ia-sp-6); }
    .ws-flow-text h2 { font-size: var(--ia-fs-2xl); }
    .ws-flow-lead { margin-bottom: var(--ia-sp-4); }
    .ws-flow-steps li:not(.is-on) > span:last-child { display: none; }
    .ws-flow-steps li { padding: var(--ia-sp-2) 0; }
    .ws-flow-steps li b { font-size: var(--ia-fs-lg); }
    .ws-stage { height: 430px; max-width: 620px; width: 100%; margin: 0 auto; }
    .ws-grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .ws-detail { grid-template-columns: 1fr; }
    .ws-panel { position: relative; top: 0; }
    .ws-install { grid-template-columns: 1fr; }
    .ws-aside { position: relative; top: 0; }
    .ws-week { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@media (max-width: 820px) {
    .ws-nav, .ws-bar-sep, .ws-bar-gh { display: none; }
    .ws-bar-title { display: block; }
    .ws-menu-wrap { display: block; margin-left: auto; }
    .ia-toolbar { left: 12px; right: 12px; width: auto; }
    .ws-viewer { grid-template-columns: 1fr; }
    .ws-rail { max-height: none; border-right: none; border-bottom: 1px solid var(--ia-border); display: flex; gap: var(--ia-sp-2); overflow-x: auto; padding: var(--ia-sp-3); }
    .ws-rail-group { display: none; }
    .ws-rail-list { display: flex; gap: 2px; }
    .ws-rail .tw-cat-btn { width: auto; white-space: nowrap; }
    .ws-rail .tw-nav-ind { display: none; }
    .ws-rail .tw-cat-btn.active { background: var(--ia-brand-soft); }
    .ws-code { max-height: 70vh; }
}
@media (max-width: 640px) {
    .ws-hero { padding-top: 116px; }
    .ws-stage { height: 548px; }
    .ws-l-card { width: min(330px, 100%); left: 0; top: 72px; }
    .ws-l-bar { left: 0; right: auto; transform-origin: left top; scale: 0.84; }
    .ws-l-bar .ws-hide-sm { display: none; }
    .ws-scene h1 { letter-spacing: -1px; }
    .ws-scene .ws-lead { font-size: var(--ia-fs-lg); }
    .ws-scene .ws-stats { margin-top: var(--ia-sp-6); gap: var(--ia-sp-6); }
    .ws-intro-cap p { font-size: var(--ia-fs-lg); padding: 0 16px; }
    .ws-flow-stage { transform: scale(0.9); transform-origin: top center; margin-bottom: -40px; }
    .ws-flow-modal { padding: var(--ia-sp-5); }
    .ws-grid-4, .ws-feats, .ws-road, .ws-reports { grid-template-columns: 1fr; }
    .ws-tools { grid-template-columns: 1fr; }
    .ws-week { grid-template-columns: 1fr 1fr; }
    .ws-log-item { grid-template-columns: 1fr; gap: var(--ia-sp-2); }
    .ws-log-date { padding-top: 0; }
    .ws-detail-head { flex-direction: column; gap: var(--ia-sp-4); }
    .ws-section { padding-top: var(--ia-sp-9); }
    .ws-stats { gap: var(--ia-sp-6); }
    .ws-search { margin-left: 0; width: 100%; }
    .cv-line { grid-template-columns: 48px minmax(0, 1fr); }
    .ws-code-head { padding: var(--ia-sp-4); }
    .ws-code-actions { margin-left: 0; }
}

/* =====================================================================
   INSTALACIÓN (versión pública)
   ===================================================================== */
.ws-steps-big > li { padding-bottom: var(--ia-sp-8); }
.ws-steps-big > li + li::before { top: calc(-1 * var(--ia-sp-8) + 30px); height: calc(var(--ia-sp-8) - 4px); }
.ws-steps-big .fp-node.is-done { border-color: var(--ia-success); color: var(--ia-success); box-shadow: 0 0 0 5px rgba(63, 185, 80, 0.12); }
.ws-step-actions { display: flex; flex-wrap: wrap; gap: var(--ia-sp-3); margin-top: var(--ia-sp-5); }
.ws-step-tags { display: flex; flex-wrap: wrap; gap: var(--ia-sp-2); margin-top: var(--ia-sp-4); }
.ws-steps-big > li > div { min-width: 0; }
.ws-install > * { min-width: 0; }
.ws-loader-code { margin-top: var(--ia-sp-5); padding: 0; overflow: hidden; max-width: 100%; }
.ws-loader-head { display: flex; align-items: center; gap: var(--ia-sp-3); flex-wrap: wrap; padding: var(--ia-sp-4) var(--ia-sp-5); border-bottom: 1px solid var(--ia-border); background: rgba(255, 255, 255, 0.02); }
.ws-loader-head b { color: var(--ia-text); font-family: var(--ia-mono); font-size: var(--ia-fs-sm); }
.ws-loader-head .ia-btn { margin-left: auto; }
.ws-loader-pre { margin: 0; max-height: 440px; overflow: auto; padding: var(--ia-sp-5); font-family: var(--ia-mono); font-size: 12px; line-height: 1.65; color: var(--ia-text-2); white-space: pre; tab-size: 4; }
.ws-loader-pre .c { color: #6e7b8b; } .ws-loader-pre .s { color: #7ee2a8; } .ws-loader-pre .k { color: #66c2ff; }
/* Vista previa de la pantalla de acceso del Loader */
.ws-login { position: relative; border-radius: 20px; padding: 1px; overflow: hidden; box-shadow: 0 30px 80px rgba(0, 0, 0, 0.55), 0 0 60px rgba(0, 153, 255, 0.14); }
.ws-login::before { content: ""; position: absolute; inset: -60%; background: conic-gradient(from 0deg, transparent 0 62%, #0099ff 76%, #9be2ff 80%, transparent 90%); animation: ia-spin 5.5s linear infinite; }
.ws-login-in { position: relative; border-radius: 19px; padding: 26px 24px 20px; background: linear-gradient(180deg, rgba(17, 24, 34, 0.98), rgba(10, 14, 20, 0.99)); }
.ws-login-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
.ws-login-head img { height: 22px; width: auto; filter: drop-shadow(0 0 12px rgba(0, 153, 255, 0.5)); }
.ws-login-rail { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-bottom: 20px; font-size: 10.5px; font-weight: 600; color: var(--ia-text-3); }
.ws-login-rail span { display: flex; flex-direction: column; gap: 6px; }
.ws-login-rail span::before { content: ""; height: 3px; border-radius: 2px; background: rgba(255, 255, 255, 0.08); }
.ws-login-rail span.is-on { color: var(--ia-text); } .ws-login-rail span.is-on::before { background: linear-gradient(90deg, var(--ia-brand-500), #7fd4ff); box-shadow: 0 0 10px var(--ia-brand-500); }
.ws-login h3 { font-size: 22px; letter-spacing: -0.02em; margin-bottom: 6px; }
.ws-login h3 span { color: #4cb6ff; }
.ws-login p { font-size: 12.5px; color: var(--ia-text-3); margin-bottom: 16px; }
.ws-login-field { display: flex; align-items: center; gap: 10px; height: 46px; padding: 0 14px; border-radius: 12px; background: rgba(0, 153, 255, 0.06); border: 1px solid rgba(0, 153, 255, 0.55); box-shadow: 0 0 0 4px rgba(0, 153, 255, 0.10); color: var(--ia-brand-500); font-family: var(--ia-mono); font-weight: 600; letter-spacing: 0.14em; }
.ws-login-field b { color: var(--ia-text); font-weight: 600; }
.ws-login-field i { width: 2px; height: 18px; background: var(--ia-brand-500); animation: fp-beat 1s steps(1) infinite; }
.ws-login-btn { margin-top: 12px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; gap: 8px; color: #fff; font-weight: 700; font-size: 13px; background: linear-gradient(180deg, #19a6ff, #0089e6); box-shadow: 0 10px 30px rgba(0, 153, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25); }
.ws-login-foot { display: flex; justify-content: space-between; align-items: center; margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255, 255, 255, 0.06); font-size: 11px; color: var(--ia-text-3); }
.ws-login-foot code { font-family: var(--ia-mono); color: var(--ia-text-2); border: 1px solid var(--ia-border); border-radius: 6px; padding: 2px 7px; }
.ws-login-cap { margin-top: var(--ia-sp-3); text-align: center; font-size: var(--ia-fs-sm); color: var(--ia-text-3); }

/* =====================================================================
   GUÍA DE USO EN LAS FICHAS
   ===================================================================== */
.ws-gnav { display: flex; flex-wrap: wrap; gap: var(--ia-sp-2); margin-top: var(--ia-sp-6); }
.ws-gnav a { display: inline-flex; align-items: center; gap: 6px; height: 30px; padding: 0 12px; border-radius: 15px; border: 1px solid var(--ia-border); background: rgba(255, 255, 255, 0.03); color: var(--ia-text-2); font-size: var(--ia-fs-xs); font-weight: 600; text-decoration: none; transition: color .15s, border-color .15s, background-color .15s; }
.ws-gnav a:hover { color: var(--ia-text); border-color: var(--ia-brand-glow); background: var(--ia-brand-soft); }
.ws-gnav a .ia-icon { color: var(--ia-brand-500); }
#g-antes, #g-pasos, #g-que, #g-dudas { scroll-margin-top: 90px; }
.ws-pre { padding: var(--ia-sp-4) var(--ia-sp-5); display: grid; gap: 2px; }
.ws-pre-row { display: grid; grid-template-columns: 22px minmax(0, 1fr); gap: var(--ia-sp-3); align-items: start; padding: 8px 0; font-size: var(--ia-fs-sm); color: var(--ia-text-2); line-height: 1.55; }
.ws-pre-row + .ws-pre-row { border-top: 1px solid rgba(255, 255, 255, 0.05); }
.ws-pre-row .ia-icon { color: var(--ia-success); margin-top: 3px; }
.ws-pre-row a { color: var(--ia-brand-500); }
.ws-gsteps p { max-width: 68ch; line-height: 1.65; }
.ws-gsteps p b { color: var(--ia-text); font-weight: 600; }
.ws-gtable-wrap { padding: 0; overflow-x: auto; }
.ws-gtable { width: 100%; border-collapse: collapse; font-size: var(--ia-fs-sm); }
.ws-gtable th { text-align: left; padding: 11px 16px; font-size: var(--ia-fs-xs); font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: var(--ia-text-3); background: rgba(255, 255, 255, 0.025); border-bottom: 1px solid var(--ia-border); white-space: nowrap; }
.ws-gtable td { padding: 11px 16px; color: var(--ia-text-2); border-bottom: 1px solid rgba(255, 255, 255, 0.05); vertical-align: top; line-height: 1.5; }
.ws-gtable tr:last-child td { border-bottom: 0; }
.ws-gtable td.is-key { color: var(--ia-text); font-weight: 600; }
.ws-gtable tbody tr { transition: background-color .15s; }
.ws-gtable tbody tr:hover { background: rgba(0, 153, 255, 0.05); }
.ws-faq { display: grid; gap: var(--ia-sp-2); }
.ws-faq details { padding: 0; overflow: hidden; }
.ws-faq summary { list-style: none; cursor: pointer; display: flex; align-items: center; gap: var(--ia-sp-3); padding: 14px 18px; font-weight: 600; font-size: var(--ia-fs-sm); color: var(--ia-text); }
.ws-faq summary::-webkit-details-marker { display: none; }
.ws-faq summary .ia-icon { color: var(--ia-brand-500); transform: rotate(-90deg); transition: transform .25s var(--ia-ease); flex: none; }
.ws-faq details[open] summary .ia-icon { transform: none; }
.ws-faq details p { margin: 0; padding: 0 18px 16px 46px; color: var(--ia-text-3); font-size: var(--ia-fs-sm); line-height: 1.65; }
.ws-faq details[open] p { animation: ws-faq-in .3s var(--ia-ease); }
@keyframes ws-faq-in { from { opacity: 0; transform: translateY(-4px); } }
.ws-panel-where { display: flex; gap: 8px; align-items: flex-start; margin: 14px 0 0; font-size: var(--ia-fs-xs); color: var(--ia-text-3); line-height: 1.5; }
.ws-panel-where .ia-icon { color: var(--ia-brand-500); flex: none; margin-top: 2px; }
@media (max-width: 640px) { .ws-gtable th, .ws-gtable td { padding: 9px 12px; } .ws-faq details p { padding-left: 18px; } }
</style>
</head>
<body>
<a class="ws-skip" href="#main">Saltar al contenido</a>
<div class="ws-bg" aria-hidden="true"></div>

<header class="ia-toolbar" id="barra">
    <a class="ia-brand ws-focus" href="#/" aria-label="iATEL · Inicio"><img src="data:image/png;base64,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" alt="iATEL" width="75" height="18"></a>
    <nav class="ws-nav" id="nav" aria-label="Principal">
        <span class="ws-nav-ind" id="nav-ind" aria-hidden="true"></span>
        <a class="ia-btn" href="#/" data-ruta="inicio">Inicio</a>
        <a class="ia-btn" href="#/novedades" data-ruta="novedades">Novedades</a>
        <a class="ia-btn" href="#/instalacion" data-ruta="instalacion">Instalación</a>
        <a class="ia-btn" href="#/herramientas" data-ruta="herramientas">Herramientas</a>
    </nav>
    <span class="ws-bar-title" id="bar-title">Inicio</span>
    <div class="ws-menu-wrap">
        <button class="ia-icon-btn" id="menu-btn" aria-label="Abrir menú" aria-haspopup="true" aria-expanded="false"></button>
        <div class="ia-menu" id="menu-movil" role="menu"></div>
    </div>
</header>

<main id="main" tabindex="-1"><div id="vista"></div></main>

<footer class="ws-foot">
    <div class="ws-wrap ws-foot-row">
        <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
            <span class="ia-brand"><img src="data:image/png;base64,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" alt="iATEL" width="75" height="18"></span>
            <span>© 2026 iATEL · Dpto. de Telecomunicaciones e Inteligencia Artificial</span>
        </div>
        <nav class="ws-foot-links" aria-label="Pie">
            <a href="#/novedades">Novedades</a>
            <a href="#/instalacion">Instalación</a>
            <a href="#/herramientas">Herramientas</a>
        </nav>
    </div>
</footer>

<div class="ia-overlay" id="modal" role="dialog" aria-modal="true" aria-labelledby="modal-titulo"><div class="ia-modal" id="modal-caja"></div></div>

<script>
(function () {
'use strict';

/* =====================================================================
   DATOS · todo lo que se ve sale de aquí. Para añadir una herramienta, añade un objeto a HERRAMIENTAS.
   ===================================================================== */

const HERRAMIENTAS = [
    {
        id: 'oceane-masmovil', nombre: 'OCEANE PRO', variante: 'MásMóvil', icono: 'ticket', tipo: 'userscript',
        version: '6.5.2', plataformas: ['Oceane'],
        resumen: 'Cierra y escala tickets de MásMóvil en Oceane: etiqueta, comentario y estado se proponen solos según las reglas del equipo y tú confirmas.',
        funciones: [
            ['check-circle', 'Cerrar', 'Etiqueta, comentario y estado en un paso. La etiqueta propone el comentario y el estado; todo se puede cambiar antes de aceptar.'],
            ['escalate', 'Escalar', 'Etiqueta de apertura, comentario y grupo (Huawei o IREG). Añade ICF_CORE cuando toca y deja el grupo buscado en Intervenciones.'],
            ['table', 'Excel', 'Copia la fila del ticket lista para pegar, con causa y estado. Reconoce los escalados.'],
            ['keyboard', 'Atajos', 'Combinaciones de teclas propias para los cierres que más se repiten.'],
            ['refresh', 'Refresh', 'Recarga automática de Llegada, Returned o las dos alternando.'],
            ['globe', 'País de roaming', 'Lee la checklist y propone el país para la etiqueta de roaming.']
        ],
        uso: [
            ['Abre un ticket de MásMóvil', 'La barra de OCEANE PRO aparece arriba, centrada, en todas las páginas de Oceane.'],
            ['Elige qué hacer', 'Cerrar, Escalar, Excel o un atajo. Las reglas rellenan los campos y te avisan de lo que han puesto.'],
            ['Revisa y acepta', 'El progreso se ve dentro del propio botón. Si un paso ya estaba hecho, se omite.']
        ]
    },
    {
        id: 'oceane-cobertura', nombre: 'OCEANE PRO', variante: 'Cobertura', icono: 'signal', tipo: 'userscript',
        version: '44.0', plataformas: ['Oceane'],
        resumen: 'Para las incidencias de cobertura en Oceane: toma los datos del ticket hijo, rellena el padre, lo asocia a la ICF de red, lo lleva a Brújula y prepara el Excel de llegadas.',
        funciones: [
            ['download', 'Extraer datos', 'Lee del ticket hijo el MSISDN, el segmento, la dirección, la checklist y la referencia.'],
            ['pencil', 'Rellenar padre', 'Completa el ticket padre con descripción, prioridad según el segmento, checklist y fecha prevista.'],
            ['link', 'Asociar a ICF de red', 'Asocia el ticket hijo al padre.'],
            ['compass', 'Rellenar Brújula', 'Lleva el padre y el nodo afectado a Brújula con la afectación elegida.'],
            ['table', 'Excel de llegadas', 'Copia la fila del Excel de llegadas.']
        ],
        uso: [
            ['Abre el ticket hijo', 'Pulsa Extraer datos para guardar la información del cliente.'],
            ['Rellena y asocia', 'Rellena el padre y asócialo a la ICF de red.'],
            ['Cierra el circuito', 'Rellena Brújula y copia el Excel de llegadas.']
        ]
    },
    {
        id: 'masivas', nombre: 'MASIVAS PRO', variante: '', icono: 'layers', tipo: 'userscript',
        version: '5.6.1', plataformas: ['Brújula', 'MAQA'],
        resumen: 'Gestiona las masivas entre Brújula y MAQA: analiza la masiva, rellena fijo y móvil, comprueba el estado de cada ticket y cierra con revisión previa.',
        funciones: [
            ['search', 'Analizar masiva', 'Analiza la masiva abierta en Brújula.'],
            ['pencil', 'Rellenar fijo y móvil', 'Completa los datos de la masiva para fijo o para móvil.'],
            ['refresh', 'Comprobar estado', 'En MAQA revisa cada ticket y deja en cola los cerrados para Brújula.'],
            ['check-circle', 'Cerrar fijo y móvil', 'Barra de revisión antes de guardar cada cierre y resumen al terminar.'],
            ['table', 'Excel fijo y móvil', 'Copia las filas para el Excel, con gestor incluido.'],
            ['shield', 'Una tarea a la vez', 'Mientras una herramienta trabaja, las demás esperan: sin cierres cruzados.']
        ],
        uso: [
            ['En MAQA', 'Usa el botón flotante para analizar fijo o móvil.'],
            ['En Brújula', 'Usa la barra: Analizar, Rellenar, Cerrar o Excel. Cerrar muestra cuántos pendientes dejó MAQA.'],
            ['Revisa antes de guardar', 'El cierre se detiene en una barra de revisión y termina con un resumen.']
        ]
    },
    {
        id: 'brujula', nombre: 'BRÚJULA PRO', variante: '', icono: 'compass', tipo: 'userscript',
        version: '2.0.0', plataformas: ['Brújula', 'MAQA', 'Oceane'],
        resumen: 'Saca más partido al mapa de cobertura de Brújula: nombres de nodo visibles, búsqueda y selección por lotes, accesos directos a MAQA y salto a Oceane desde una incidencia.',
        funciones: [
            ['pin', 'Nombres en el mapa', 'Cada nodo muestra su nombre encima del marcador.'],
            ['search', 'Buscador de nodos', 'Filtra el mapa por uno o varios nodos (separados por comas) y márcalos para trabajar en lote.'],
            ['layers', 'Lote y abrir todo', 'KPI 2G a 5G, Bender, OceaneLittle, alarmas, TP y OT en MAQA, para uno o varios nodos de una vez.'],
            ['ruler', 'Distancia', 'Con dos nodos marcados, muestra la distancia en línea recta.'],
            ['ticket', 'Clic derecho en incidencias', 'Un ticket se abre en Oceane ya buscado; un nodo, en MAQA.'],
            ['shield', 'Acceso con token', 'Cada persona entra con su token; el acceso se puede revocar.']
        ],
        uso: [
            ['Abre el mapa de cobertura', 'La primera vez te pedirá tu token personal.'],
            ['Clic derecho en un nodo', 'Elige qué abrir en MAQA, o Ctrl + clic para abrir el nodo directamente.'],
            ['Despliega el buscador', 'Filtra, marca varios nodos y usa Lote.']
        ]
    },
    {
        id: '360', nombre: '360 PRO', variante: '', icono: 'phone', tipo: 'marcador',
        version: '6.6', plataformas: ['360 PRO'],
        resumen: 'Resumen de la línea en el CRM: busca el número, copia el IMSI y ordena cliente, voz, datos, roaming, SMS y buzón, con alertas de bloqueos, servicios y bonos.',
        funciones: [
            ['search', 'Búsqueda', 'Escribe el número en la casilla del CRM, pulsa su lupa y lee los datos.'],
            ['copy', 'IMSI copiado', 'El IMSI queda en el portapapeles tras cada búsqueda y al pulsarlo.'],
            ['user', 'Secciones', 'Cliente, voz, datos e internet, roaming, mensajes y buzón en un panel.'],
            ['alert', 'Alertas', 'Bloqueos activos, servicios desactivados y bonos consumidos, en un solo vistazo.'],
            ['refresh', 'Resetear línea', 'Lanza el reseteo de la línea desde el panel.'],
            ['minus', 'Ocultar', 'El panel se recoge en una pestaña arriba, con el número de alertas.']
        ],
        uso: [
            ['Abre el CRM', 'Lanza 360 PRO sobre la pestaña del CRM.'],
            ['Busca la línea', 'Escribe el número y pulsa Buscar: el IMSI queda copiado.'],
            ['Revisa las alertas', 'Navega por las secciones desde el menú lateral.']
        ]
    },
    {
        id: 'reportes', nombre: 'REPORTES PRO', variante: '', icono: 'chart', tipo: 'userscript',
        version: '4.4.1', plataformas: ['MAQA'],
        resumen: 'Centraliza los informes del SMC de MAQA: los agrupa por familias (Customer Complaints, QBOOST, RSSI, VDF, Huawei…), muestra los que tocan cada día y los carga siempre en su última versión.',
        funciones: [
            ['calendar', 'Informes del día', 'De lunes a viernes muestra los informes que tocan, con los tres diarios de Huawei siempre presentes.'],
            ['layers', 'Familias de informes', 'Huawei, Customer Complaints, QBOOST, RSSI, VDF, aging y despliegue, bloqueos y estructural.'],
            ['refresh', 'Siempre al día', 'Cada informe se carga siempre en su última versión: no hay que reinstalar nada.'],
            ['copy', 'Correo preparado', 'Cada informe filtra la tabla y deja el correo listo para Outlook.']
        ],
        uso: [
            ['Abre el SMC en MAQA', 'Aparece el lanzador de REPORTES PRO.'],
            ['Elige el día y el informe', 'El informe se carga sobre la tabla del SMC.'],
            ['Revisa y envía', 'El informe filtra la tabla y deja el correo listo para Outlook.']
        ]
    }
];


/* =====================================================================
   GUÍA DE USO DESDE CERO (de la Guía de procesos del departamento)
     donde     → dónde aparece
     pasos     → [título, texto] (el texto admite <b>, <span class="ia-kbd">)
     tablas    → [{ titulo, cols, filas }]
     dudas     → [pregunta, respuesta]
   ===================================================================== */
const K = (t) => '<span class="ia-kbd">' + t + '</span>';
const GUIAS = {
    'oceane-masmovil': {
        donde: 'Calipso Oceane: en las bandejas y dentro de cada ticket de MásMóvil.',
        pasos: [
            ['Entra en Oceane', 'Con LOADER PRO activo aparece arriba, centrada, la barra iATEL. En las bandejas (Llegada, Returned) solo verás <b>Refresh</b>; al abrir un ticket se añaden <b>Cerrar</b>, <b>Escalar</b>, <b>Excel</b> y <b>Atajos</b>.'],
            ['Deja las colas refrescándose', 'Abre la flecha de <b>Refresh</b> y elige <b>Llegada</b>, <b>Returned</b> o <b>Llegada + Returned</b> (alterna cada 3 s). El punto azul indica que está activo y el modo se recuerda para la próxima vez. <b>Off</b> lo detiene.'],
            ['Abre el ticket y pulsa Cerrar', 'Elige la <b>etiqueta</b> (grupo de resultado y servicio). Si es roaming, la herramienta lee la checklist y te propone el país: confírmalo o corrígelo. Para casos especiales tienes «Etiqueta personalizada».'],
            ['Elige el comentario', 'Solo se ofrecen los que encajan con la etiqueta y, si solo hay uno, se pone solo. Para Brújula te pide el código de la incidencia. También puedes escribir un «Comentario personalizado».'],
            ['Revisa el estado y acepta', 'El estado se propone según la etiqueta y lo puedes cambiar (lo que elijas a mano se respeta). Al pulsar <b>Aceptar</b>, el propio botón muestra el progreso: escribe etiqueta y comentario, copia la fila del Excel y abre Modificar → Estado → Cerrar con todo relleno.'],
            ['Confirma tú el cierre', 'Revisa el formulario que queda relleno y confírmalo en Oceane. La herramienta nunca cierra un ticket por su cuenta.'],
            ['Pega la fila en el Excel', 'La fila de seguimiento ya está en el portapapeles: pégala en tu Excel. Para copiarla otra vez, pulsa <b>Excel</b>.'],
            ['Si hay que escalar', 'Pulsa <b>Escalar</b>: etiqueta de apertura, comentario y grupo. Escribe todo, copia el Excel (como «Escalado») y deja el grupo buscado en Intervenciones para que lo selecciones.']
        ],
        tablas: [
            { titulo: 'Qué estado propone cada etiqueta', cols: ['Grupo de la etiqueta', 'Estado propuesto', 'Comentarios que se ofrecen'], filas: [
                ['Intervención', 'Resuelto: con intervención', 'Reinicio voz / datos / roaming, Solo Movistar'],
                ['No incidencia', 'Resuelto: no detectada inciden', 'Todo OK; SMS con tráfico OK'],
                ['Brújula', 'Rechz: Ya Comunicado', 'Brújula publicado; Brújula plan verano'],
                ['Falta info', 'Rechz: Falta información', 'Falta ejemplo de llamada / SMS; falta dirección'],
                ['No red', 'Rechz: No Red', 'SIM/terminal, activación, portabilidad, sin saldo, provisión MultiSIM…']
            ] },
            { titulo: 'Escalar: a qué grupo va', cols: ['Etiqueta', 'Grupo', 'Además'], filas: [
                ['Datos', 'XSPHUA26 · Huawei NSC Core PS FO', 'Comentario ICF_CORE'],
                ['Voz', 'XSPHUA28 · Huawei NSC Core CS FO', 'Comentario ICF_CORE'],
                ['Mensajería y buzón', 'XSPHUA30 · Huawei NSC Core Servicios FO', 'Comentario ICF_CORE'],
                ['Roaming', 'OESSP100 · Oesia Gestión', 'En el Excel: «Escalado a IREG»'],
                ['MultiSIM y otros', 'Lo eliges tú', '—']
            ] }
        ],
        dudas: [
            ['Solo veo el botón Refresh', 'Estás en una bandeja. Abre un ticket y aparecen el resto de botones.'],
            ['¿Cómo creo un atajo de teclado?', 'Pulsa <b>Atajos</b>, elige la combinación (por ejemplo ' + K('Alt') + ' + ' + K('1') + '), la etiqueta, el comentario y el estado. Al pulsarla se copia la fila del Excel y se hace el cierre completo. No se activa mientras escribes en un campo.'],
            ['Estoy en una cola de Cobertura', 'La herramienta la detecta (grupo XSP00050): el cierre pasa a dos pasos, comentario y estado, y no aparece Escalar.'],
            ['El botón dice que no pudo copiar', 'El navegador ha bloqueado el portapapeles. Pulsa Excel otra vez o permite el portapapeles en Oceane.'],
            ['¿Y si un paso ya estaba hecho?', 'Se omite: no repite etiquetas ni comentarios. Si Oceane tarda, reintenta cada paso hasta tres veces.']
        ]
    },
    'oceane-cobertura': {
        donde: 'Calipso Oceane: en el ticket hijo, en el ICF de red (padre) y en el ticket de intervención.',
        pasos: [
            ['Extrae los datos del ticket hijo', 'Abre el ticket del cliente y pulsa <b>Extraer datos</b>: guarda MSISDN, segmento, dirección, provincia, checklist, ID, fecha de apertura y referencia de terceros. Los de la incidencia anterior se descartan.'],
            ['Abre el ICF de red y pulsa Rellenar padre', 'Se abre el formulario con un resumen (MSISDN, segmento y dirección) y la descripción ya propuesta, que puedes editar.'],
            ['Indica celda y afectación', 'Escribe la <b>celda</b> (el nodo se calcula al instante) y elige la <b>afectación</b>. Si procede, completa indicador, tecnología o recurso y su valor.'],
            ['Inicia el flujo', 'Pulsa <b>Iniciar flujo</b> (o ' + K('Enter') + '): rellena los Detalles, guarda, añade los comentarios (sin duplicar) y captura el ID del ICF. El botón enseña cada paso.'],
            ['Asocia el hijo al padre', 'Vuelve al ticket hijo y pulsa <b>Asociar a ICF de red</b>: lo vincula, ajusta el síntoma según el segmento y añade la etiqueta [INC_RED_ICF_ASOCIADA].'],
            ['Lleva el caso a Brújula', 'En el ticket de intervención pulsa <b>Rellenar Brújula</b>: rellena los Detalles, asocia el padre si falta, activa la intervención hacia el grupo 515007 y guarda el ID de Brújula.'],
            ['Copia el Excel de llegadas', 'Pulsa <b>Excel llegadas</b> y pega la fila en el Excel. Puedes usarlo en cualquier momento: no es un paso del flujo.']
        ],
        tablas: [
            { titulo: 'Qué hace cada afectación', cols: ['Afectación', 'Etiqueta de causa', 'Fecha prevista', 'Brújula'], filas: [
                ['DOWN', 'CausaICF_DOWN', '+4 días', 'Interrumpido'],
                ['MC', 'CausaICF_MC', '+10 días', 'Interrumpido'],
                ['HALTED / ALARMAS', 'CausaICF_HALTED / _ALARMAS', '+10 días', 'Interrumpido'],
                ['PCAR', 'CausaICF_PCAR + subcausa', '+10 días', 'Degradado'],
                ['RSSI', 'CausaICF_RSSI_OSP + subcausa', '+3 meses', 'Degradado'],
                ['Congestión', 'CausaICF_CONG + subcausa', '+10 días', '—'],
                ['Optimización / OT / Masterlist', 'CausaICF_Optimizacion / _OT / _ML', '—', '—']
            ] }
        ],
        dudas: [
            ['Rellenar padre me avisa de que faltan datos', 'Primero pulsa Extraer datos en el ticket hijo: el padre se rellena con lo que guarda.'],
            ['No me aparece Rellenar Brújula', 'Solo está disponible para las afectaciones que van a Brújula (DOWN, MC, HALTED, ALARMAS, PCAR y RSSI).'],
            ['¿Qué prioridad pone?', '3 para PYME y 4 para el resto. La fecha prevista se fija a las 12:00 según la afectación.']
        ]
    },
    'masivas': {
        donde: 'Brújula (barra arriba) y MAQA (botón abajo a la derecha).',
        pasos: [
            ['Copia el mensaje de Telegram', 'En NEON P1, NEON P2, Emergencias de Red o NSC1 copia el mensaje completo de la incidencia. Tiene que incluir [Tipo Mensaje], [Breve Descripcion] e [Información relevante y Acciones en curso].'],
            ['En Brújula, pulsa Analizar masiva', 'Busca el nº de Oceane en el histórico y decide sola: si ya es masiva, la abre para editar; si no lo es, la <b>convierte y la abre</b>; si no existe, crea una nueva. También detecta si es de fijo o de móvil.'],
            ['Pulsa Rellenar', 'Al abrirse la edición, <b>Rellenar fijo</b> o <b>Rellenar móvil</b> queda resaltado: pulsa ' + K('Enter') + ' o haz clic. Rellena causa, criticidad, prioridad, servicios, síntomas, afectación, descripción, provincias, equipos y comentarios.'],
            ['Revisa y guarda', 'Comprueba el formulario y pulsa Guardar en Brújula. Lo que no se pueda deducir del mensaje te lo pregunta (por ejemplo, los nodos que falten en móvil).'],
            ['Con cada actualización, repite', 'Copia el nuevo mensaje, Analizar y Rellenar. Si los comentarios ya están publicados no se repiten: el botón avisa «Omitido: comentarios ya añadidos».'],
            ['Comprueba el estado en MAQA', 'Al empezar y al terminar la jornada, en MAQA pulsa <b>Analizar estado</b> (abajo a la derecha), elige Fijo o Móvil y pega los casos en Resuelto. Revisa cada ticket y deja en cola los que ya están Closed.'],
            ['Cierra en Brújula', '<b>Cerrar fijo</b> y <b>Cerrar móvil</b> muestran cuántos dejó MAQA. Al pulsar, abre cada masiva, comprueba los campos y el comentario Final (si falta, te lo pide), corrige la fecha fin prevista y se detiene en una barra de revisión antes de guardar. Al terminar ves un resumen.'],
            ['Excel', '<b>Excel fijo</b> y <b>Excel móvil</b> copian las filas con tu nombre de gestor (escríbelo en el campo Gestor la primera vez).']
        ],
        tablas: [
            { titulo: 'Qué rellena en cada tipo', cols: ['Campo', 'Fijo', 'Móvil'], filas: [
                ['Caso Oceane, cálculo de incidencias, fechas de inicio y fin prevista, afectación por marcas', 'Sí', '—'],
                ['Causa, criticidad, prioridad, otros tickets', 'Sí', 'Sí'],
                ['Servicio, subservicio, síntomas, afectación', 'Sí', 'Sí'],
                ['Descripción, provincias, equipos afectados', 'Sí', 'Sí'],
                ['Comentarios internos y comentarios', 'Sí', 'Sí']
            ] }
        ],
        dudas: [
            ['Me dice «Datos incompletos»', 'El portapapeles no tiene el mensaje completo de Telegram. Cópialo entero y vuelve a pulsar.'],
            ['La convirtió pero dice que aún no aparece', 'Brújula a veces tarda en listar una masiva recién convertida. Espera unos segundos y pulsa Analizar masiva otra vez: irá directa a editarla.'],
            ['«Incidencia fantasma»', 'Está en el histórico pero no en Fijo ni en Móvil. Revisa la incidencia en Brújula antes de continuar.'],
            ['No veo algún botón', 'Cada botón aparece solo donde sirve: Analizar fuera de la edición, Rellenar dentro de ella y Cerrar cuando MAQA ha dejado casos. En Cobertura móvil, Fijos y Transmisión la barra no se muestra.'],
            ['¿Puedo lanzar dos cosas a la vez?', 'No: mientras una herramienta trabaja, las demás esperan, y mientras se cierra, la barra de revisión ocupa su sitio.']
        ]
    },
    'brujula': {
        donde: 'Brújula, en la vista «Cobertura móvil». También abre MAQA y Oceane desde el mapa.',
        pasos: [
            ['Abre Cobertura móvil', 'La barra aparece arriba solo en esa vista. La primera vez te pide tu token personal de BRÚJULA PRO. El aviso de «Consulta» se acepta solo.'],
            ['Pega la dirección del ticket', 'Pégala tal cual viene del CRM en el buscador del mapa: se limpian pisos, puertas y etiquetas, y si no hay sugerencias prueba sin número y después solo con CP y población.'],
            ['Elige la sugerencia buena', 'Las del mismo CP o municipio se marcan en azul y las demás se atenúan. «Deshacer» recupera el texto original. Al buscar, avisa si el resultado es de otro código postal.'],
            ['Mira los nodos', 'Cada nodo muestra su nombre y la distancia al punto rojo (por ejemplo, CLM2274 | 620 m). <b>Nodos</b> abre la lista ordenada por distancia, con buscador (varios separados por comas).'],
            ['Mide', '<b>Medir</b> traza la línea entre A (la dirección) y B (el nodo más cercano). Haz clic en el mapa para cambiar el extremo activo y usa los atajos Dirección → 1º, Dirección → 2º y 1º ↔ 2º. Muestra los 4 nodos más cercanos.'],
            ['Abre los diagnósticos', 'Clic derecho en un nodo (o ••• en la lista, o <b>Lote</b> con varios marcados): KPI 2G a 5G, Bender, OceaneLittle, Alarmas, TP, OT o «Abrir todo», en pestañas de MAQA con la búsqueda ya hecha. ' + K('Ctrl') + ' + clic abre el nodo directamente.'],
            ['Salta a Oceane', 'Clic derecho en una incidencia de la tabla de alertas: el ticket se abre en Oceane ya buscado.'],
            ['Limpia', '<b>Limpiar</b> quita el filtro y las marcas y devuelve el mapa completo.']
        ],
        tablas: [],
        dudas: [
            ['No veo la barra', 'Solo aparece en la vista «Cobertura móvil» de Brújula.'],
            ['La distancia sale con ≈', 'Ese nodo no expone sus coordenadas y se calcula con la escala del mapa.'],
            ['Me avisa de un CP distinto', 'El resultado cargado no coincide con el código postal de la incidencia: elige otra sugerencia.']
        ]
    },
    '360': {
        donde: 'CRM, vista 360 de la línea.',
        antes: ['Ten el marcador de 360 PRO en la barra de favoritos de tu navegador.', 'Abre el CRM en la vista 360.'],
        pasos: [
            ['Lanza 360 PRO', 'Con la pestaña del CRM abierta, pulsa el marcador: aparece el panel.'],
            ['Busca la línea', 'Escribe el número y pulsa <b>Buscar</b> (o ' + K('Enter') + '). La herramienta lanza la consulta en el CRM, abre la pestaña IMS y lee los datos; el botón enseña el progreso.'],
            ['Revisa la ficha y las alertas', 'Info. cliente muestra la identificación de la línea y el bloque de alertas: bloqueos activos, servicios desactivados y bonos consumidos.'],
            ['El IMSI ya está copiado', 'Se copia solo tras cada búsqueda (el botón lo confirma). Pulsa sobre él para copiarlo otra vez.'],
            ['Navega por las secciones', 'Voz, datos, roaming, SMS y buzón desde el menú lateral. Al pulsar una alerta se abre su sección.'],
            ['Resetea si procede', '<b>Resetear línea</b> pulsa «Reseteo de línea», espera la confirmación y la acepta.'],
            ['Oculta el panel', '<b>Ocultar</b> lo recoge arriba en un acceso compacto que mantiene el contador de alertas.']
        ],
        tablas: [
            { titulo: 'Qué significa cada color', cols: ['Tipo de dato', 'Activado', 'Desactivado'], filas: [
                ['Bloqueos', 'Rojo · bloqueo activo', 'Gris · sin bloqueo'],
                ['Servicios (NAM, SMS)', 'Verde · servicio activo', 'Rojo · servicio desactivado'],
                ['Configuración (desvíos, IMS…)', 'Verde · configurado', 'Gris · no configurado'],
                ['Provisión incoherente', 'Ámbar · revisar provisión', '—']
            ] }
        ],
        dudas: [
            ['¿Guarda los datos de la línea?', 'No: todo ocurre en tu navegador y la información solo existe mientras el panel está abierto.'],
            ['El IMSI no se copia', 'Solo se copia si tiene 14 o 15 dígitos. Si el navegador bloquea el portapapeles, pulsa sobre el IMSI.']
        ]
    },
    'reportes': {
        donde: 'MAQA, en el SMC.',
        pasos: [
            ['Abre el SMC en MAQA', 'Aparece arriba la barra <b>Reportes</b> (semitransparente hasta que pasas el ratón por encima).'],
            ['Pulsa Reportes', 'Se despliega el menú por días con los informes de hoy y los tres diarios de Huawei. Tienes buscador para encontrar cualquiera.'],
            ['Elige el informe', 'Se carga sobre la tabla del SMC, ya filtrado, y a la derecha se abre el panel con los casos.'],
            ['Revisa cada incidencia', 'Documenta la última actualización de estado de cada caso. Es el único paso de análisis: dedícale toda la atención.'],
            ['Copia el correo', 'Deja listos la lista de distribución, el asunto, el texto y la tabla. Pégalo en Outlook.'],
            ['Comprueba y envía', 'Antes de enviar: fecha y asunto del informe correcto, lista de distribución del destino, todos los casos con su actualización, y que el informe no se haya enviado ya.']
        ],
        tablas: [],
        dudas: [
            ['No veo la barra', 'Se oculta con el botón redondo de abajo a la derecha. Púlsalo para volver a mostrarla.'],
            ['Avisa de que no puede cargar los informes', 'Los informes se cargan siempre en su última versión. Si no hay acceso, comprueba la conexión y avisa al responsable.']
        ]
    }
};

/* Informes de REPORTES PRO */
const INFORMES = {
    HUAWEI_MM: ['MasMovil +36h'],
    HUAWEI_ORANGE: ['Servicios +36h'],
    HUAWEI_SERV_24_36: ['Servicios 24h-36h'],
    CUST_COMP_24_36: ['Cust. Complaints 24h-36h'],
    CUST_COMP_36: ['Cust. Complaints +36h'],
    QBOOST_24_36: ['QBOOST 24h-36h'],
    QBOOST_36: ['QBOOST +36h'],
    ZONA_36: ['Zona +36h'],
    PCAR_36: ['PCAR +36h'],
    DESPLIEGUE: ['Despliegue SMC'],
    VDF_MC_DOWN: ['VDF (MC y DOWN)'],
    RSSI_OUTLOOK: ['RSSI VDF'],
    BLOQUEOS: ['Gestión bloqueos FM'],
    ESTRUCTURAL: ['Estructural servicios'],
    REUNION_RSSI: ['Reunión RSSI (3PP, FLM y otros)']
};
const DIARIOS = ['HUAWEI_SERV_24_36', 'HUAWEI_ORANGE', 'HUAWEI_MM'];
const SEMANA = [
    ['Lunes', ['CUST_COMP_24_36', 'QBOOST_24_36', 'VDF_MC_DOWN']],
    ['Martes', ['ZONA_36', 'PCAR_36', 'DESPLIEGUE']],
    ['Miércoles', ['CUST_COMP_36', 'RSSI_OUTLOOK', 'REUNION_RSSI']],
    ['Jueves', ['CUST_COMP_24_36', 'QBOOST_36', 'BLOQUEOS']],
    ['Viernes', ['ESTRUCTURAL']]
];

/* Familias de informes (cómo los agrupa REPORTES PRO) */
const FAMILIAS = [
    ['Huawei · Servicios', 'Huawei', ['HUAWEI_SERV_24_36', 'HUAWEI_ORANGE', 'HUAWEI_MM']],
    ['Customer Complaints', 'Customer', ['CUST_COMP_24_36', 'CUST_COMP_36']],
    ['QBOOST', 'QBOOST', ['QBOOST_24_36', 'QBOOST_36']],
    ['RSSI', 'RSSI', ['RSSI_OUTLOOK', 'REUNION_RSSI']],
    ['VDF', 'VDF', ['VDF_MC_DOWN']],
    ['Aging y despliegue', 'Aging', ['ZONA_36', 'PCAR_36', 'DESPLIEGUE']],
    ['Bloqueos y estructural', 'Gestión', ['BLOQUEOS', 'ESTRUCTURAL']]
];
const familiaDe = (k) => (FAMILIAS.find(f => f[2].includes(k)) || ['', ''])[1];

/* Novedades: hitos (herramientas nuevas y funcionalidades importantes). */
const NOVEDADES = [
    { fecha: 'Octubre 2026', herramienta: '', titulo: 'LOADER PRO: una sola instalación', tipo: 'new', texto: 'Instalas un único complemento y entras con tu clave. Al validarla, la pantalla de acceso se transforma en la herramienta de esa web, con sus botones.' },
    { fecha: 'Octubre 2026', herramienta: 'masivas', titulo: 'MASIVAS PRO 5.6', tipo: 'fix', texto: 'Analizar masiva ya no se detiene tras convertir a masiva: la abre directamente para editarla. Rellenar fijo y móvil no repite los comentarios que ya están publicados y avisa con «Omitido: comentarios ya añadidos».' },
    { fecha: 'Octubre 2026', herramienta: '', titulo: 'Las herramientas conviven en la misma página', tipo: 'fix', texto: 'MASIVAS PRO se aparta cuando REPORTES PRO u otra herramienta ocupa el mismo sitio en MAQA o en Brújula.' },
    { fecha: 'Octubre 2026', herramienta: '', titulo: 'Portal de herramientas', tipo: 'new', texto: 'Catálogo, fichas y novedades de todas las herramientas del departamento en una sola web.' },
    { fecha: 'Octubre 2026', herramienta: 'oceane-masmovil', titulo: 'Escalados en OCEANE PRO · MásMóvil', tipo: 'new', texto: 'Escalar a Huawei o IREG con etiqueta de apertura, comentario, ICF_CORE y búsqueda del grupo en Intervenciones. El Excel reconoce los escalados.' },
    { fecha: 'Octubre 2026', herramienta: 'masivas', titulo: 'MASIVAS PRO unificada', tipo: 'new', texto: 'Una sola herramienta para las masivas entre Brújula y MAQA: analizar, rellenar fijo y móvil, comprobar estado, cerrar con revisión y Excel.' },
    { fecha: 'Octubre 2026', herramienta: '', titulo: 'IATelecom Design System en la suite', tipo: 'update', texto: 'OCEANE PRO, 360 PRO, MASIVAS PRO y REPORTES PRO comparten diseño: la misma barra, los mensajes dentro de los botones y las mismas animaciones.' }
];
const TIPO_NOVEDAD = { new: ['Nuevo', 'success'], update: ['Mejora', 'brand'], fix: ['Corrección', 'warning'] };

const PROXIMAMENTE = [
    ['sparkle', 'Respuestas con IA', 'Asistente integrado en Oceane para redactar resoluciones técnicas a partir del historial del cliente.'],
    ['cpu', 'Razonamiento avanzado con IA', 'Las herramientas seguirán ejecutando directamente las automatizaciones habituales y recurrirán a una API de IA solo cuando haga falta interpretar información, analizar comentarios o tomar decisiones más complejas.'],
    ['file', 'Registro de cambios automático', 'Las novedades de este portal se generarán a partir del propio proceso de desarrollo, sin mantenerlas a mano.']
];


/* =====================================================================
   ICONOS (mismo trazo que IADS_ICONS: 24 × 24, 1,7 px, currentColor)
   ===================================================================== */
const ICONOS = {
    'refresh': '<path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/>',
    'check-circle': '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    'check': '<path d="m5 12 5 5 9-10"/>',
    'table': '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16"/>',
    'keyboard': '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>',
    'bolt': '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    'x': '<path d="M18 6 6 18M6 6l12 12"/>',
    'alert': '<path d="M12 3 2 21h20z"/><path d="M12 10v5M12 18h.01"/>',
    'chevron': '<path d="m6 9 6 6 6-6"/>',
    'chevron-right': '<path d="m9 6 6 6-6 6"/>',
    'pencil': '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
    'plus': '<path d="M12 5v14M5 12h14"/>',
    'minus': '<path d="M5 12h14"/>',
    'escalate': '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
    'user': '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
    'phone': '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    'globe': '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    'search': '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    'copy': '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/>',
    'clock': '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    'pin': '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    'login': '<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"/><path d="m10 16 4-4-4-4M14 12H4"/>',
    'ticket': '<path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4z"/><path d="M13 6v2M13 11v2M13 16v2"/>',
    'signal': '<path d="M1.5 9a15 15 0 0 1 21 0"/><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',
    'layers': '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
    'compass': '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
    'chart': '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    'calendar': '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    'shield': '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
    'sparkle': '<path d="M12 3c.5 4.5 2.5 6.5 7 7-4.5.5-6.5 2.5-7 7-.5-4.5-2.5-6.5-7-7 4.5-.5 6.5-2.5 7-7z"/>',
    'download': '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    'code': '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>',
    'external': '<path d="M14 4h6v6M20 4 10 14"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>',
    'arrow-right': '<path d="M5 12h14M13 6l6 6-6 6"/>',
    'menu': '<path d="M4 7h16M4 12h16M4 17h16"/>',
    'link': '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    'ruler': '<path d="m3 17 14-14 4 4L7 21z"/><path d="m7 9 2 2M10 6l2 2M13 3l2 2M4 12l2 2"/>',
    'database': '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    'wrap': '<path d="M4 6h16M4 12h13a3 3 0 0 1 0 6h-4"/><path d="m15 16-2 2 2 2M4 18h5"/>',
    'file': '<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/>',
    'cpu': '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4"/>',
};
function icono(nombre, px) {
    const t = px || 14;
    return '<svg class="ia-icon" data-i="' + nombre + '" width="' + t + '" height="' + t + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONOS[nombre] || '') + '</svg>';
}

/* =====================================================================
   UTILIDADES
   ===================================================================== */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reducido = () => { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } };
const anim = (el, frames, opts) => (!el || !el.animate || reducido()) ? null : el.animate(frames, Object.assign({ duration: 240, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }, opts || {}));
const tamano = (b) => b == null ? '' : (b >= 1024 * 1024 ? (b / 1048576).toFixed(1).replace('.', ',') + ' MB' : Math.round(b / 1024) + ' KB');
const miles = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const herramienta = (id) => HERRAMIENTAS.find(h => h.id === id);

/* Versión pública: los datos de cada herramienta son los de esta página; no se lee ningún archivo. */
const meta = () => Promise.resolve({ existe: true });
const versionDe = (h) => h.version;

/* --- Mensajes dentro del botón (mismo patrón que btnMsg de los userscripts) --- */
function btnMsg(btn, texto, tipo, ms) {
    if (!btn) return;
    if (!btn._ia) btn._ia = { html: btn.innerHTML, t: null };
    clearTimeout(btn._ia.t);
    const w0 = btn.getBoundingClientRect().width;
    btn.classList.remove('is-busy', 'is-success', 'is-warning'); void btn.offsetWidth; btn.classList.add('is-' + tipo);
    btn.innerHTML = (tipo === 'busy' ? '<span class="ia-spinner"></span>' : icono(tipo === 'success' ? 'check' : 'alert')) + '<span>' + esc(texto) + '</span>';
    const w1 = btn.getBoundingClientRect().width;
    if (Math.abs(w1 - w0) > 1 && !btn.classList.contains('ws-full')) anim(btn, [{ width: w0 + 'px' }, { width: w1 + 'px' }], { duration: 240 });
    if (ms) btn._ia.t = setTimeout(() => btnReset(btn), ms);
}
function btnReset(btn) {
    if (!btn || !btn._ia) return;
    clearTimeout(btn._ia.t);
    btn.classList.remove('is-busy', 'is-success', 'is-warning');
    btn.innerHTML = btn._ia.html; btn._ia = null;
    Array.from(btn.children).forEach(c => anim(c, [{ opacity: 0, transform: 'translateY(-4px)' }, { opacity: 1, transform: 'none' }]));
}
async function copiar(texto) {
    try { await navigator.clipboard.writeText(texto); return true; } catch (e) {}
    try { const ta = document.createElement('textarea'); ta.value = texto; ta.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(ta); ta.select(); const ok = document.execCommand('copy'); ta.remove(); return ok; } catch (e) { return false; }
}

/* =====================================================================
   PIEZAS COMUNES
   ===================================================================== */
const cabecera = (marca, titulo, texto, extra) => `
    <div class="ws-head ws-reveal"><div><div class="tw-section-title">${esc(marca)}</div><h2>${titulo}</h2>${texto ? `<p>${texto}</p>` : ''}</div>${extra || ''}</div>`;

function chipEstado(h, m) {
    if (!m) return `<span class="ia-chip" data-tono="neutral"><span class="ia-spinner" style="width:8px;height:8px"></span>Comprobando</span>`;
    if (m.existe === false) return `<span class="ia-chip"><i></i>Próximamente</span>`;
    if (m.existe === null) return `<span class="ia-chip" data-tono="warning"><i></i>Sin conexión</span>`;
    return `<span class="ia-chip" data-tono="success"><i></i>Disponible</span>`;
}
const nombreHtml = (h) => `${esc(h.nombre)}${h.variante ? ` <small>${esc(h.variante)}</small>` : ''}`;
const tipoTexto = (h) => h.tipo === 'marcador' ? 'Marcador' : 'Userscript';

function tarjetaHerramienta(h, i) {
    return `<a class="ws-card ws-tool ws-reveal" style="--d:${(i % 3) * 70}ms" href="#/herramientas/${h.id}" data-id="${h.id}" data-plat="${esc(h.plataformas.join('|'))}">
        <div class="ws-tool-top"><span class="ws-tile">${icono(h.icono, 20)}</span><span data-estado>${chipEstado(h, null)}</span></div>
        <h3>${nombreHtml(h)}</h3>
        <div class="ws-plat">${icono('pin', 12)}${esc(h.plataformas.join(' · '))}</div>
        <p>${esc(h.resumen)}</p>
        <div class="ws-tool-foot"><span class="tw-chip" data-version>v${esc(h.version)}</span><span class="tw-pill">${tipoTexto(h)}</span><span class="ws-go">Cómo se usa ${icono('arrow-right', 13)}</span></div>
    </a>`;
}
function hidratarTarjetas(raiz) {
    $$('.ws-tool[data-id]', raiz).forEach(card => {
        const h = herramienta(card.dataset.id);
        meta(h).then(m => {
            const e = $('[data-estado]', card); if (e) { e.innerHTML = chipEstado(h, m); anim(e.firstElementChild, [{ opacity: 0, transform: 'scale(0.85)' }, { opacity: 1, transform: 'none' }], { duration: 320, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }); }
            const v = $('[data-version]', card); if (v) v.textContent = 'v' + versionDe(h, m);
        });
    });
}

const modal = $('#modal');
let focoPrevio = null;
function abrirModal() {
    focoPrevio = document.activeElement;
    if (modal._cierre) { modal._cierre.cancel(); modal._cierre = null; }
    modal.classList.add('is-open');
    setTimeout(() => { const f = $('#m-copiar'); if (f) f.focus(); }, 50);
}
function cerrarModal() {
    if (!modal.classList.contains('is-open')) return;
    const a = anim(modal, [{ opacity: 1 }, { opacity: 0 }], { duration: 150, easing: 'ease-in', fill: 'forwards' });
    anim(modal.firstElementChild, [{ transform: 'none' }, { transform: 'translateY(8px) scale(0.97)' }], { duration: 150, easing: 'ease-in', fill: 'forwards' });
    const fin = () => { modal.classList.remove('is-open'); if (a) a.cancel(); $$('*', modal).forEach(x => x.getAnimations && x.getAnimations().forEach(y => { if (!y.animationName) y.cancel(); })); if (focoPrevio) focoPrevio.focus(); };
    if (a) { modal._cierre = a; a.onfinish = fin; } else fin();
}
modal.addEventListener('click', (e) => { if (e.target === modal || e.target.closest('[data-cerrar]')) cerrarModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { cerrarModal(); cerrarMenu(); } });

/* =====================================================================
   VISTA: INICIO
   Narrativa de scroll en dos escenas fijadas:
     1. Entrada: el logo blanco ocupa la pantalla; al bajar, sus letras se vuelven ventanas y la cámara entra por la «t».
     2. Cómo trabajan: un cierre de OCEANE PRO que avanza con el scroll (abrir, reglas que rellenan, confirmación).
   Todo depende solo de la posición de scroll: al subir, la escena se rebobina.
   ===================================================================== */
const LOGO_D = 'M725.8 62.1Q724.8 62.1 722.7 62.5Q720.6 62.9 718.7 63Q716.8 63.1 713.8 63.7Q710.9 64.3 707.6 65.2Q704.4 66 702.4 66.7Q700.4 67.4 699.1 68Q697.9 68.5 693.5 70.7Q689.1 73 685.8 75.1Q682.5 77.3 681.2 78.4Q680 79.5 674.8 84.8Q669.6 90 668.4 91.5Q667.3 93 665.4 95.9Q663.5 98.9 661.1 103.8Q658.7 108.6 657.7 111.7Q656.6 114.8 655.9 117.3Q655.3 119.9 654.7 123.6Q654.1 127.2 654 134.7Q654 142.1 654.1 143.1Q654.1 144.1 654.5 145.7Q654.8 147.2 655 148.9Q655.2 150.6 656.1 154.1Q657 157.5 658 160.1Q658.9 162.8 661.3 167.5Q663.7 172.2 665.5 175.1Q667.3 177.9 668.3 179.2Q669.2 180.5 675.3 186.6Q681.4 192.6 682.7 193.6Q684 194.6 686.9 196.5Q689.9 198.3 694.5 200.6Q699.1 202.9 701.8 203.9Q704.4 204.9 707.6 205.7Q710.9 206.6 713.8 207.2Q716.8 207.7 719.2 207.8Q721.6 208 723.9 208.4Q726.2 208.8 728.2 208.8Q730.1 208.9 731.1 208.8Q732.1 208.7 734.2 208.3Q736.2 208 738.6 207.9Q741 207.8 741.8 207.7Q742.6 207.6 745.3 207.1Q748 206.6 752.5 205.5Q757 204.3 758.9 203.6Q760.8 202.9 764.4 201.1Q768 199.3 771.5 197.1Q775 194.8 776.4 193.6Q777.9 192.4 782.6 187.6Q787.4 182.9 788.2 182Q789 181.1 789.8 180Q790.6 178.9 792.2 176.3Q793.9 173.8 795.6 170.4Q797.3 167 797.6 166.2Q797.9 165.4 798 164.5Q798.2 163.6 798.2 163Q798.2 162.4 798 161.8Q797.8 161.2 797.5 160.8Q797.1 160.4 796.7 160Q796.2 159.7 795.7 159.5Q795.2 159.2 794.5 159.1L793.8 159L763.8 159Q761.6 159.2 760.8 159.4Q760 159.7 759.3 160.2Q758.7 160.6 755.9 163.5Q753.1 166.3 751.4 167.8Q749.8 169.4 748.8 170Q747.8 170.6 745.9 171.5Q744 172.4 741.9 173.1Q739.9 173.8 737.2 174.3Q734.6 174.9 729.7 175Q724.8 175 723.8 174.9Q722.8 174.9 721.6 174.6Q720.4 174.3 719.1 173.9Q717.9 173.5 715.9 172.7Q713.9 171.9 712.4 170.9Q710.9 169.9 708.1 167.9Q705.4 165.8 704.7 165.1Q704.1 164.5 701.6 161.2Q699.2 157.9 698.4 156.6Q697.6 155.2 697.1 154.2Q696.6 153.2 696.1 151.8Q695.5 150.4 695.3 149.2Q695.1 148.1 695.1 147.3Q695.2 146.5 695.6 145.9Q695.9 145.2 696.2 144.9Q696.5 144.7 697 144.4Q697.5 144.2 698.7 144L699.9 143.9L796 143.9Q797.8 143.7 798.3 143.6Q798.9 143.4 799.4 143Q799.8 142.6 800.1 142.2Q800.4 141.8 800.6 141.2Q800.7 140.8 800.8 139.9Q800.9 139 800.9 132.9Q800.9 126.8 800.8 125.5Q800.7 124.2 800.1 121.6Q799.6 118.9 799 116.6Q798.4 114.2 797 109.9Q795.6 105.6 794.7 103.8Q793.8 101.9 791.7 98.1Q789.5 94.4 788.5 92.9Q787.5 91.5 784.9 88.2Q782.3 85 779.9 82.6Q777.5 80.2 774.8 78.1Q772 76.1 769 74.1Q766 72.1 762 70.1Q758 68.1 756.6 67.5Q755.1 66.9 752.5 66.1Q749.9 65.2 747.9 64.8Q746 64.3 743.3 63.8Q740.6 63.2 737.9 63.1Q735.2 62.9 732.9 62.5Q730.6 62.1 728.7 62Q726.8 62 725.8 62.1ZM697.3 115.9Q697.5 115.1 697.9 114.2Q698.3 113.4 700.5 110.1Q702.8 106.8 703.6 105.9Q704.4 105 705.1 104.4Q705.8 103.8 707.8 102.4Q709.9 101 713.1 99.3Q716.4 97.7 717.2 97.4Q718 97.1 719.7 96.7Q721.4 96.3 723.1 96.1Q724.8 95.9 728.4 95.9Q732.1 95.9 733.1 95.9Q734.1 96 734.9 96.2Q735.6 96.3 738.8 97.4Q742 98.5 743.8 99.4Q745.5 100.3 747.3 101.5Q749.1 102.8 751.3 104.9Q753.4 107 754.5 108.4Q755.6 109.9 756.6 111.6Q757.5 113.2 757.9 114.4Q758.3 115.5 758.4 116.2Q758.5 117 758.4 117.6Q758.3 118.1 757.8 118.6Q757.4 119.1 756.8 119.4Q756.2 119.7 755.5 119.9L754.8 120L701.9 120Q699.9 119.8 699.2 119.5Q698.5 119.2 698 118.7Q697.5 118.1 697.4 117.7Q697.3 117.4 697.2 117Q697.2 116.6 697.3 115.9ZM401.1 80.4Q399.2 82.4 397 85.3Q394.8 88.2 392.9 91.2Q391 94.1 389 98.1Q386.9 102.1 385.8 105.4Q384.6 108.8 383.5 113.1Q382.4 117.4 382.2 118.3Q382.1 119.2 382 120.7Q381.9 122.1 381.5 123.9Q381.1 125.8 381.1 126.8Q381 127.8 381 136.2Q381.1 144.6 381.5 146.7Q381.9 148.8 382.1 150.9Q382.3 153 383.6 157.9Q384.8 162.9 385.9 165.8Q386.9 168.8 389 172.9Q391.1 177 393.4 180.4Q395.6 183.8 397.1 185.8Q398.6 187.8 399.6 188.8Q400.5 189.9 402.4 191.8Q404.4 193.6 407.3 195.9Q410.2 198.1 412.1 199.2Q413.9 200.3 417.5 202.1Q421.1 203.9 424.1 205Q427 206.1 429.7 206.8Q432.4 207.5 433.3 207.6Q434.2 207.8 436.2 207.9Q438.1 208 440.2 208.4Q442.2 208.8 444.4 208.8Q446.6 208.8 448.7 208.4Q450.8 208 452.7 207.8Q454.6 207.6 457.4 207Q460.1 206.3 463.2 205.2Q466.2 204.2 468.6 203Q471 201.8 474.2 199.7Q477.4 197.5 478.4 196.7Q479.4 195.9 481.8 193.6Q484.1 191.3 484.9 190.7Q485.8 190.2 485.8 190L485.9 189.9L486.8 189.8L487.5 190.4L487.3 190.6Q487.9 191.9 488 195.4Q488 198.9 488.2 199.9Q488.4 200.9 488.7 201.5Q489 202.1 489.5 202.6Q489.9 203.2 490.5 203.6Q491 204 491.6 204.3Q492.1 204.5 492.7 204.6Q493.2 204.8 494.1 204.8L494.9 204.9L521 204.8Q522.2 204.7 522.9 204.5Q523.6 204.3 524.2 204.1Q524.7 203.8 525.1 203.5Q525.5 203.1 525.8 202.7Q526.1 202.4 526.3 201.9Q526.5 201.5 526.7 200.2L526.9 199L526.9 71.9Q526.5 69.4 526.3 68.9Q526.1 68.5 525.8 68.1Q525.5 67.7 525.1 67.4Q524.7 67.1 524.2 66.8Q523.6 66.5 522.9 66.4Q522.2 66.2 521.6 66.1L521 66L494.9 66Q493.2 66.1 492.7 66.2Q492.1 66.4 491.6 66.6Q491 66.9 490.5 67.3Q489.9 67.7 489.5 68.2Q489 68.8 488.7 69.4Q488.4 70 488.2 71Q488 72 488 75.5Q487.9 79 487.6 79.6L487.3 80.3L487.5 80.5Q487 81 486.6 81.1Q486.2 81.1 486.1 81.1L485.9 81Q485.8 80.7 484.9 80.2Q484.1 79.6 481.8 77.3Q479.4 75 478.4 74.2Q477.4 73.3 474.2 71.2Q471 69.1 468.6 67.9Q466.2 66.7 463.2 65.7Q460.1 64.6 457.4 63.9Q454.6 63.2 452.7 63Q450.8 62.9 448.7 62.5Q446.6 62.1 444.4 62.1Q442.2 62.1 440.2 62.5Q438.1 62.9 436.2 63Q434.2 63.1 433.3 63.2Q432.4 63.4 430.1 64Q427.8 64.6 424.8 65.6Q421.9 66.6 418.4 68.3Q414.9 70 413.5 70.8Q412.1 71.6 408.8 73.9Q405.5 76.3 404.2 77.4Q403 78.5 401.1 80.4ZM449.8 95.9Q450.8 95.9 454.4 95.9Q458.1 95.9 459.1 95.9Q460.1 96 460.9 96.2Q461.6 96.3 463.9 97.1Q466.1 97.8 467.6 98.4Q469 98.9 470.4 99.7Q471.8 100.4 473.2 101.5Q474.8 102.5 475.8 103.4Q476.9 104.4 478.3 105.9Q479.8 107.4 480.7 108.7Q481.7 110 482.5 111.3Q483.3 112.6 484 114Q484.6 115.4 485.3 117.4Q486 119.4 486.4 120.7Q486.8 122 487.3 124.4Q487.9 126.8 487.9 127.8Q488 128.8 488 135.4Q488 142.1 487.9 143.1Q487.9 144.1 487.3 146.5Q486.8 148.9 486.4 150.2Q486 151.5 485.2 153.8Q484.4 156 483.7 157.4Q483 158.8 482 160.4Q480.9 162 480.2 162.9Q479.4 163.9 477.9 165.4Q476.4 167 475.2 168Q474 168.9 472.5 169.9Q471 170.9 469.6 171.6Q468.2 172.3 465.6 173.2Q462.9 174.2 461.5 174.5Q460.1 174.9 459.1 174.9Q458.1 175 454 175Q449.9 175 448.9 174.8Q447.9 174.7 446.2 174.3Q444.5 173.9 443.4 173.5Q442.4 173.2 440.6 172.3Q438.9 171.4 437.6 170.7Q436.2 169.9 435 169Q433.8 168.1 432.6 167Q431.4 165.9 430.3 164.6Q429.2 163.4 428.1 161.7Q427 160 426.2 158.5Q425.4 157 424.8 155.6Q424.2 154.2 423.4 151.9Q422.6 149.5 421.8 145.8Q421 142.1 420.9 141.1Q420.9 140.1 420.9 135.4Q420.9 130.8 421 129.5Q421.1 128.2 421.7 125.4Q422.2 122.6 422.8 120.8Q423.4 118.9 424.1 117Q424.8 115.1 426 112.8Q427.3 110.4 428.2 108.9Q429.2 107.5 430 106.5Q430.9 105.5 432.1 104.3Q433.4 103.1 434.7 102.1Q436 101.2 437.3 100.4Q438.6 99.6 440.5 98.6Q442.4 97.7 443.4 97.4Q444.5 97 446.6 96.5Q448.8 96 449.8 95.9ZM564.5 37.8Q564 38.2 563.6 38.6Q563.2 39 562.9 39.6Q562.5 40.2 562.3 41.1Q562.1 41.9 562.1 42.8Q562 43.8 562 52.7Q562 61.6 561.9 62.4Q561.9 63.2 561.7 63.8Q561.5 64.4 561 64.8Q560.6 65.3 559.9 65.6Q559.2 65.9 555.1 66Q550.9 66 550.1 66.1Q549.2 66.2 548.6 66.5Q547.9 66.7 547.2 67.1Q546.6 67.5 546.1 68.1Q545.7 68.6 545.4 69.3Q545.2 69.9 545.1 70.9L545 71.9L545 94Q545.2 96.1 545.5 96.8Q545.7 97.5 546 97.9Q546.4 98.4 546.8 98.7Q547.1 99 548.1 99.4Q549 99.7 549.9 99.8Q550.9 99.9 554.2 99.9Q557.6 99.9 558.6 100Q559.6 100.1 560 100.3Q560.5 100.5 560.8 100.7Q561.1 101 561.3 101.4Q561.6 101.8 561.7 102.2Q561.9 102.6 561.9 103.4L562 104.2L562 160.1Q562.2 162.2 562.4 163.1Q562.6 163.9 563 164.4Q563.3 165 563.8 165.5Q564.3 166 564.8 166.3Q565.4 166.6 566 166.7L566.6 166.8L595.8 166.9Q597.5 167.2 598.2 167.7Q598.9 168.1 599.1 168.5Q599.4 168.9 599.6 169.3Q599.7 169.6 599.9 170.8L600 171.9L600.1 200.2Q600.3 201.4 600.5 201.9Q600.7 202.4 601.1 202.8Q601.5 203.2 602 203.6Q602.5 204 603.4 204.3Q604.2 204.6 605.5 204.8L606.8 204.9L635 204.9Q636.6 204.8 637.3 204.6Q638 204.4 638.6 204Q639.2 203.7 639.6 203.2Q640 202.7 640.3 202.1Q640.6 201.5 640.7 200.7L640.8 199.9L640.9 170.9Q640.7 168.8 640.3 168Q639.9 167.3 639.6 167Q639.2 166.7 638.8 166.5Q638.4 166.3 637.2 166.1L636 166L604.6 165.9Q603.5 165.7 603 165.5Q602.5 165.2 602.1 164.8Q601.7 164.5 601.5 164Q601.2 163.5 601.1 163Q601 162.5 600.9 161.8L600.9 161L600.9 104.9Q601.1 102.9 601.4 102.2Q601.7 101.5 602.2 101.1Q602.6 100.6 603.4 100.3Q604.1 100 605 99.9L605.9 99.9L634.9 99.8Q636.9 99.5 637.6 99Q638.4 98.5 638.7 98.1Q639 97.7 639.3 97.2Q639.5 96.8 639.6 96.2Q639.8 95.6 639.8 94.8L639.9 94L639.9 71.9Q639.8 70.4 639.6 69.8Q639.5 69.1 639.1 68.5Q638.7 67.9 638.2 67.5Q637.6 67 636.9 66.7Q636.1 66.4 635.3 66.2L634.5 66.1L605.9 66Q603.8 65.8 603.1 65.5Q602.4 65.1 602.1 64.9Q601.8 64.6 601.6 64.2Q601.3 63.8 601.1 62.8Q600.9 61.8 600.8 51.5Q600.8 41.2 600.6 40.6Q600.5 40 600.2 39.5Q599.9 39 599.5 38.6Q599.1 38.1 598.5 37.8Q598 37.5 597.3 37.3Q596.6 37.1 595.8 37.1L595 37L567.9 37Q566.4 37.1 565.8 37.3Q565.1 37.4 564.5 37.8ZM123.1 37.3Q122.5 37.8 122.1 38.5Q121.6 39.1 121.4 39.9Q121.2 40.6 121.1 41.7L121 42.8L121.1 66.5Q121.3 67.9 121.6 68.6Q121.9 69.2 122.3 69.8Q122.7 70.3 123.2 70.6Q123.8 71 124.6 71.3Q125.4 71.6 126.6 71.8L127.8 71.9L184 71.9Q185.5 72 186 72.1Q186.5 72.2 187 72.5Q187.5 72.7 187.8 73.1Q188.2 73.5 188.5 74.2Q188.8 74.9 188.9 75.9L189 76.9L189 134Q188.8 136 188.5 136.7Q188.2 137.3 187.6 137.9Q187 138.4 186.2 138.7L185.5 138.9L161.9 139Q160.2 138.9 159.6 138.7Q158.9 138.5 158.3 138.2Q157.8 137.9 157.4 137.5Q157 137.1 156.7 136.5Q156.3 136 156.2 135.3Q156 134.6 155.9 133.8L155.9 133L155.8 110Q155.4 107.9 155.2 107.4Q154.9 107 154.6 106.6Q154.2 106.2 153.5 105.8Q152.8 105.4 151.8 105.2L150.9 105L126.9 105Q125.2 105.1 124.7 105.2Q124.1 105.4 123.6 105.6Q123.1 105.8 122.8 106.2Q122.4 106.5 122 106.9Q121.7 107.4 121.5 107.9Q121.3 108.4 121.1 109.6L121 110.9L121 134Q121.2 135.9 121.4 136.6Q121.6 137.4 122 137.9Q122.4 138.4 122.8 138.7Q123.1 139 123.6 139.3Q124.1 139.5 124.7 139.6Q125.2 139.8 126.1 139.8L126.9 139.9L149.9 139.9Q151.9 140.3 152.6 140.8Q153.4 141.3 153.7 141.6Q154.1 142 154.3 142.4Q154.5 142.9 154.7 143.9L155 145L155 168Q154.8 170 154.5 170.6Q154.3 171.2 153.8 171.7Q153.3 172.2 152.7 172.5Q152 172.8 151 172.9L150 173L127 173Q125.8 173.2 125.1 173.4Q124.5 173.6 124 173.9Q123.5 174.2 123.1 174.6Q122.6 175 122.2 175.6Q121.8 176.1 121.6 176.6Q121.4 177.1 121.2 177.7Q121.1 178.2 121.1 179.1L121 179.9L121 202Q121.2 204.1 121.5 204.9Q121.8 205.8 122.3 206.3Q122.7 206.9 123.4 207.5Q124.1 208.1 124.8 208.3Q125.5 208.6 126.2 208.7L127 208.8L149.1 208.9Q151.2 208.7 152.2 208.4Q153.2 208.1 153.7 207.7Q154.2 207.4 154.6 207Q155 206.6 155.2 206.1Q155.5 205.6 155.6 205.1L155.8 204.5L155.9 180Q156.3 178 156.8 177.2Q157.3 176.5 157.6 176.1Q158 175.8 158.4 175.6Q158.9 175.3 159.9 175.1L161 174.9L184 174.9Q186 175.1 186.6 175.3Q187.2 175.6 187.7 176.1Q188.2 176.5 188.5 177.2Q188.8 177.9 188.9 178.9L189 179.9L189.1 202.5Q189.3 203.9 189.5 204.6Q189.8 205.2 190.2 205.9Q190.5 206.5 191 207Q191.4 207.5 191.9 207.8Q192.4 208.2 192.9 208.4Q193.4 208.6 194.6 208.7L195.9 208.9L218 208.9Q220.1 208.7 220.9 208.4Q221.8 208.1 222.5 207.5Q223.2 206.9 223.7 206.2Q224.2 205.5 224.5 204.8Q224.7 204 224.8 203L224.9 202L224.9 42.9Q224.7 40.8 224.4 40Q224.1 39.2 223.5 38.5Q222.9 37.8 222.1 37.3Q221.2 36.8 220.2 36.5Q219.2 36.2 218.2 36.1L217.1 36L127.8 36Q125.4 36.2 124.6 36.5Q123.8 36.8 123.1 37.3ZM21.4 36.7Q20.6 37.1 19.9 37.8Q19.2 38.5 18.8 39.3Q18.4 40 18.2 40.8L18.1 41.5L18 65.9Q18.4 67.8 18.8 68.6Q19.2 69.4 19.6 69.8Q20 70.3 20.6 70.7Q21.1 71.1 21.7 71.3Q22.2 71.6 22.9 71.7L23.5 71.8L47 71.9Q48.8 72 49.3 72.2Q49.9 72.4 50.3 72.7Q50.8 73 51.1 73.5Q51.5 74 51.7 74.6Q51.9 75.1 51.9 76L52 76.9L52 202Q52.1 203.6 52.2 204.2Q52.4 204.8 52.7 205.5Q53.1 206.2 53.8 207Q54.5 207.7 55.3 208.1Q56 208.5 56.8 208.6L57.5 208.8L81 208.9Q82.6 208.8 83.2 208.6Q83.8 208.5 84.2 208.3Q84.6 208.1 85 207.8Q85.4 207.5 86.1 206.6Q86.8 205.8 87.2 204.7Q87.6 203.6 87.8 202.4L87.9 201.1L87.9 77.8Q87.7 75.9 87.6 75.1Q87.4 74.4 87 73.6Q86.6 72.9 86 72.2Q85.5 71.6 84.7 71.1Q83.9 70.6 83.1 70.4Q82.2 70.2 81.2 70.1L80.1 70L58 70Q56 69.6 55.6 69.4Q55.1 69.2 54.7 68.8Q54.4 68.5 54 68.1Q53.7 67.7 53.5 67.3Q53.3 66.9 53.1 65.9L52.9 64.9L52.8 40.4Q52.5 39.4 52.3 38.9Q52.1 38.4 51.7 38Q51.4 37.6 51 37.3Q50.5 37 49.6 36.6Q48.6 36.2 47.4 36.1Q46.1 36 35.5 36Q24.9 36 24.1 36.1Q23.2 36.1 22.7 36.2Q22.1 36.4 21.4 36.7ZM284.7 29.7Q284.2 30 283.9 30.5Q283.5 31 283.3 31.6Q283.1 32.1 283.1 33L283 33.9L283 62Q283.2 64.1 283.6 64.8Q284 65.5 284.6 66Q285.2 66.5 286.2 66.7L287.1 66.8L314.1 66.9Q315.9 67 316.6 67.2Q317.4 67.4 317.9 67.7Q318.4 68 318.9 68.5Q319.3 68.9 319.6 69.6Q319.8 70.2 319.9 71.2L320 72.1L320 198.1Q320.2 200.2 320.4 200.9Q320.6 201.6 321.1 202.3Q321.5 203.1 322.1 203.5Q322.6 204 323.4 204.3Q324.1 204.6 325 204.7L325.9 204.8L352.1 204.9Q354.2 204.7 355.1 204.5Q355.9 204.2 356.5 203.8Q357.2 203.4 357.7 202.8Q358.2 202.2 358.4 201.6Q358.7 201 358.8 200L358.9 199L358.9 71.9Q358.8 70.4 358.6 69.8Q358.5 69.1 358.1 68.5Q357.7 67.9 357.3 67.6Q356.9 67.2 356.2 66.9Q355.6 66.5 354.8 66.3Q354 66.1 353.1 66.1L352.1 66L325.4 66Q323.6 65.6 323 65.2Q322.3 64.8 322 64.4Q321.7 64 321.5 63.6Q321.3 63.1 321.1 62.1L320.9 61L320.8 32.6Q320.3 30.9 320.1 30.6Q319.8 30.2 319.4 29.9Q319 29.6 318.4 29.4Q317.8 29.1 316.9 29.1L316 29L287.9 29Q286.4 29.1 285.8 29.2Q285.2 29.4 284.7 29.7ZM825.6 16Q824.8 16.5 824.3 17.2Q823.8 17.9 823.5 18.8Q823.2 19.6 823.1 20.7L823 21.8L823 161Q823.1 162.6 823.3 163.2Q823.4 163.9 823.8 164.5Q824.1 165.1 824.6 165.5Q825 165.9 825.6 166.2Q826.1 166.5 826.9 166.7L827.6 166.8L855.8 166.9Q857.5 167.2 858.2 167.7Q858.9 168.1 859.1 168.5Q859.4 168.9 859.6 169.3Q859.7 169.6 859.9 170.8L860 171.9L860.1 199.2Q860.3 200.5 860.5 201.1Q860.8 201.6 861.1 202.1Q861.5 202.5 861.9 202.8Q862.4 203.2 863.1 203.4Q863.8 203.7 864.8 203.8L865.9 203.9L893 203.9Q894.6 203.8 895.2 203.6Q895.9 203.5 896.5 203.1Q897.1 202.8 897.6 202.3Q898 201.7 898.3 201.1Q898.6 200.5 898.7 199.7L898.8 198.9L898.9 170.9Q898.6 168.6 898.3 167.9Q897.9 167.2 897.4 166.7Q897 166.3 896.4 166Q895.9 165.6 895.2 165.4Q894.6 165.2 893.8 165.1L893 165L865.4 164.9Q864.2 164.6 863.7 164.3Q863.2 164 862.8 163.4Q862.4 162.9 862.2 162.3Q862 161.8 861.9 160.9L861.9 160L861.9 20.9Q861.8 19.4 861.6 18.8Q861.5 18.2 861.1 17.6Q860.7 17 860.1 16.5Q859.5 16 858.7 15.6Q857.9 15.3 856.9 15.2L856 15L829.8 15Q827.8 15.2 827.1 15.4Q826.4 15.5 825.6 16Z';
const LOGO_W = 910, LOGO_H = 220, ZOOM = { x: 581, y: 82, r: 26 };   // cruce de la «t»: la zona más gruesa del logo

function vistaInicio() {
    const herramientas = HERRAMIENTAS.length;
    const plataformas = new Set(HERRAMIENTAS.flatMap(h => h.plataformas)).size;
    const informes = Object.keys(INFORMES).length;
    const dia = Math.min(Math.max(new Date().getDay(), 1), 5);          // fin de semana: se muestra el lunes
    const [nombreDia, propios] = SEMANA[dia - 1];
    const deHoy = [...propios, ...DIARIOS].slice(0, 4);
    return `
    <section class="ws-intro" id="intro">
        <div class="ws-intro-pin">
            <div class="ws-scene" id="escena">
                <div class="ws-scene-glow" id="escena-glow" aria-hidden="true"></div>
                <div class="ws-wrap ws-hero-grid">
                    <div>
                        <span class="ia-chip ws-in" data-in="0" data-tono="brand"><i></i>Portal de herramientas · Dpto. de Telecomunicaciones e IA</span>
                        <h1 class="ws-in" data-in="1">Las herramientas del departamento, <span>en un solo sitio.</span></h1>
                        <p class="ws-lead ws-in" data-in="2">Catálogo y documentación de las herramientas que usamos en Oceane, Brújula, MAQA y 360 PRO. Todas comparten diseño y reglas de trabajo.</p>
                        <div class="ws-cta ws-in" data-in="3">
                            <a class="ia-btn ia-btn--primary ia-btn--lg" href="#/herramientas">Ver herramientas ${icono('arrow-right', 15)}</a>
                            <a class="ia-btn ia-btn--outline ia-btn--lg" href="#/instalacion">${icono('download', 15)}Instalación</a>
                        </div>
                        <div class="ws-stats ws-in" data-in="4">
                            <div class="ws-stat"><b data-cuenta="${herramientas}">0</b><span>herramientas</span></div>
                            <div class="ws-stat"><b data-cuenta="${informes}">0</b><span>informes en REPORTES PRO</span></div>
                            <div class="ws-stat"><b data-cuenta="${plataformas}">0</b><span>plataformas</span></div>
                        </div>
                    </div>
                    <div class="ws-stage" id="escenario" aria-hidden="true">
                        <div class="ws-layer ws-l-bar" data-prof="18" data-vuelo="arriba">
                            <div class="ia-toolbar" style="animation:none">
                                <span class="ia-brand"><img src="data:image/png;base64,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" alt="" width="75" height="18"></span>
                                <span class="ia-btn is-active ws-hide-sm">${icono('refresh')}<span>Refresh</span><span class="ia-dot is-on" id="esc-dot"></span></span>
                                <span class="ia-btn ws-hide-sm">${icono('check-circle')}<span>Cerrar</span></span>
                                <span class="ia-btn ws-hide-sm">${icono('escalate')}<span>Escalar</span></span>
                                <span class="ia-btn" id="esc-excel">${icono('table')}<span>Excel</span></span>
                                <span class="ia-btn">${icono('keyboard')}<span>Atajos</span></span>
                            </div>
                        </div>
                        <div class="ws-layer ws-l-card" data-prof="10" data-vuelo="izquierda"><div class="ws-float">
                            <div class="ws-mock-card">
                                <div class="ws-mock-head">${icono('user', 16)}Información del cliente</div>
                                <div class="ws-mock-inner">
                                    <div class="tw-section-title">Identificación</div>
                                    <div class="tw-row"><span>Marca</span><b>MásMóvil</b></div>
                                    <div class="tw-row"><span>IMSI</span><span class="tw-copy">21404•••••6411 ${icono('copy', 11)}</span></div>
                                    <div class="tw-row"><span>Tipo de pago</span><span class="tw-chip">PREPAGO</span></div>
                                    <div class="tw-row"><span>VoLTE</span><span class="tw-badge is-good">Activo y registrado</span></div>
                                    <div class="tw-row"><span>Roaming</span><span class="tw-badge is-info">Permitido</span></div>
                                </div>
                            </div>
                        </div></div>
                        <div class="ws-layer ws-l-rep" data-prof="26" data-vuelo="derecha"><div class="ws-float">
                            <div class="ws-mini-rep">
                                <div class="ws-mini-rep-head"><span>${icono('chart', 15)}REPORTES PRO</span><span class="ia-chip" data-tono="brand"><i></i>${esc(nombreDia)}</span></div>
                                ${deHoy.map(k => `<div class="ws-rep-row">${icono('file', 13)}<span>${esc(INFORMES[k][0])}</span><span class="tw-pill">${esc(familiaDe(k))}</span></div>`).join('')}
                                <span class="ia-btn ia-btn--primary ia-btn--md" id="esc-correo">${icono('copy', 14)}<span>Copiar correo</span></span>
                            </div>
                        </div></div>
                    </div>
                </div>
            </div>
            <svg class="ws-cover" id="cover" aria-hidden="true">
                <defs>
                    <radialGradient id="cover-luz" gradientUnits="userSpaceOnUse" cx="455" cy="110" r="760">
                        <stop offset="0" stop-color="#0c1f30"/><stop offset="0.5" stop-color="#0d1117"/>
                    </radialGradient>
                </defs>
                <g id="cover-g">
                    <path fill="url(#cover-luz)" fill-rule="evenodd" d="M-40000 -40000H40910V40220H-40000Z${LOGO_D}"/>
                    <path id="logo-borde" fill="none" stroke="#36c8ff" stroke-width="1.6" vector-effect="non-scaling-stroke" opacity="0" d="${LOGO_D}"/>
                    <path id="logo-blanco" fill="#ffffff" fill-rule="evenodd" stroke="#ffffff" stroke-width="1.2" vector-effect="non-scaling-stroke" d="${LOGO_D}"/>
                </g>
            </svg>
            <div class="ws-intro-cap" id="intro-cap">
                <p>Portal de herramientas<br><span>Departamento de Telecomunicaciones e Inteligencia Artificial</span></p>
                <button class="ws-scroll-hint" id="intro-bajar" aria-label="Entrar en el portal"><span class="ws-mouse"><i></i></span>Desliza para entrar</button>
            </div>
        </div>
    </section>

    <section class="ws-section" id="principios"><div class="ws-wrap">
        ${cabecera('Cómo están hechas', 'Ayudan sin quitarte el control', 'Todas siguen los mismos principios, vengan de la plataforma que vengan.')}
        <div class="ws-grid-4">
            ${[['bolt', 'Menos clics, mismos criterios', 'Rellenan etiquetas, comentarios y estados con las reglas del equipo, para que cada gestión se haga igual.'],
               ['check-circle', 'La última palabra es tuya', 'Proponen y tú confirmas. Nunca muestran una operación como completada si la página no lo ha confirmado.'],
               ['shield', 'No tocan la web', 'Cada herramienta vive aislada: no cambia los estilos ni rompe la página en la que trabaja.'],
               ['sparkle', 'Un mismo diseño', 'Mismos botones, avisos y animaciones en todas las plataformas gracias al IATelecom Design System.']]
              .map((p, i) => `<div class="ws-card ws-principle ws-reveal" style="--d:${i * 70}ms"><span class="ws-tile">${icono(p[0], 20)}</span><h3>${p[1]}</h3><p>${p[2]}</p></div>`).join('')}
        </div>
    </div></section>

    <section class="ws-flow" id="como">
        <div class="ws-flow-pin">
            <div class="ws-wrap ws-flow-grid">
                <div class="ws-flow-text">
                    <div class="tw-section-title" style="font-size:var(--ia-fs-sm);color:var(--ia-brand-500);margin-bottom:var(--ia-sp-4)">Cómo trabajan</div>
                    <h2>Proponen, y tú confirmas</h2>
                    <p class="ws-flow-lead">Un cierre en OCEANE PRO, paso a paso.</p>
                    <ol class="ws-flow-steps" id="flow-pasos">
                        <li data-paso="0"><span class="ws-flow-bar"><i></i></span><b>Abres la herramienta</b><span>La barra de OCEANE PRO está en todas las páginas de Oceane. «Cerrar» abre el formulario de cierre.</span></li>
                        <li data-paso="1"><span class="ws-flow-bar"><i></i></span><b>Las reglas proponen</b><span>Al elegir la etiqueta, el comentario y el estado se rellenan solos y avisan de lo que han puesto. Cualquier campo se puede cambiar.</span></li>
                        <li data-paso="2"><span class="ws-flow-bar"><i></i></span><b>Tú confirmas</b><span>Al aceptar, el progreso se ve dentro del propio botón y solo se marca como completado cuando Oceane lo confirma. El Excel queda copiado.</span></li>
                    </ol>
                </div>
                <div class="ws-flow-stage" aria-hidden="true">
                    <div class="ia-toolbar ws-flow-bar-oceane" style="animation:none">
                        <span class="ia-brand"><img src="data:image/png;base64,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" alt="" width="75" height="18"></span>
                        <span class="ia-btn ws-hide-sm">${icono('refresh')}<span>Refresh</span><span class="ia-dot"></span></span>
                        <span class="ia-btn" id="fl-cerrar">${icono('check-circle')}<span>Cerrar</span></span>
                        <span class="ia-btn ws-hide-sm">${icono('escalate')}<span>Escalar</span></span>
                        <span class="ia-btn" id="fl-excel">${icono('table')}<span>Excel</span></span>
                    </div>
                    <div class="ws-flow-box">
                    <div class="ia-modal ws-flow-modal" id="fl-modal">
                        <div class="ia-modal-title">${icono('check-circle', 16)}<span>Cerrar incidencia</span></div>
                        <div class="ws-fl-field"><span class="ia-label">1. Etiquetas</span><span class="ia-btn ws-fl-dd" id="fl-etq"><span class="ws-fl-val">Sin etiqueta</span>${icono('chevron', 12)}</span></div>
                        <div class="ws-fl-field"><span class="ia-label">2. Comentario</span><span class="ia-btn ws-fl-dd" id="fl-cmt"><span class="ws-fl-val">Sin comentario</span>${icono('chevron', 12)}</span><span class="ia-hint ws-fl-hint" id="fl-cmt-h">${icono('bolt', 12)}<span>Asignado según la etiqueta</span></span></div>
                        <div class="ws-fl-field ws-fl-div"><span class="ia-label">3. Estado</span><span class="ia-btn ws-fl-dd" id="fl-est"><span class="ws-fl-val">Sin estado</span>${icono('chevron', 12)}</span><span class="ia-hint ws-fl-hint" id="fl-est-h">${icono('bolt', 12)}<span>Asignado según la etiqueta</span></span></div>
                        <div class="ia-modal-footer"><span class="ia-btn">Cancelar</span><span class="ia-btn ia-btn--primary" id="fl-aceptar">Aceptar</span></div>
                    </div>
                    <div class="ws-flow-res" id="fl-res">
                        <div class="ws-res-head"><span class="tw-section-title" style="margin:0">Confirmaciones de Oceane</span><span class="ia-chip" id="fl-res-chip"><i></i>En curso</span></div>
                        ${[['Etiqueta añadida', 'No incidencia › Voz'], ['Comentario añadido', 'Todo OK'], ['Fila de Excel copiada', 'Lista para pegar'], ['Estado aplicado', 'Resuelto: no detectada inciden']]
                          .map((x, i) => `<div class="ws-res-row" data-r="${i}"><span class="ws-res-ico"><span class="ia-spinner"></span>${icono('check', 13)}</span><b>${x[0]}</b><span>${x[1]}</span></div>`).join('')}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ws-section"><div class="ws-wrap">
        ${cabecera('Herramientas', 'Una para cada plataforma', 'Cada ficha explica qué hace la herramienta, dónde funciona y cómo se usa.', `<a class="ia-btn ia-btn--outline ia-btn--md ws-reveal" href="#/herramientas">Ver catálogo completo ${icono('arrow-right', 14)}</a>`)}
        <div class="ws-tools" id="destacadas">${HERRAMIENTAS.map(tarjetaHerramienta).join('')}</div>
    </div></section>

    <section class="ws-section" id="novedades"><div class="ws-wrap">
        ${cabecera('Novedades', 'Hitos de la suite', 'Herramientas nuevas y funcionalidades importantes.')}
        <div class="ws-log" id="novedades-lista">${pintarNovedades(NOVEDADES)}</div>
    </div></section>

    <section class="ws-section"><div class="ws-wrap">
        ${cabecera('En desarrollo', 'Próximos pasos', 'Líneas de trabajo abiertas. Cuando estén listas aparecerán en el catálogo.')}
        <div class="ws-road">${PROXIMAMENTE.map((r, i) => `<div class="ws-card ws-reveal" style="--d:${i * 70}ms"><div style="display:flex;justify-content:space-between;align-items:center"><span class="ws-tile">${icono(r[0], 20)}</span><span class="ia-chip"><i></i>En desarrollo</span></div><h3>${r[1]}</h3><p>${r[2]}</p></div>`).join('')}</div>
    </div></section>`;
}

function pintarNovedades(lista) {
    return lista.map((n, i) => {
        const [t, tono] = TIPO_NOVEDAD[n.tipo] || TIPO_NOVEDAD.update;
        const destino = n.herramienta && herramienta(n.herramienta) ? `#/herramientas/${n.herramienta}` : '#/herramientas';
        return `<div class="ws-log-item ws-reveal" style="--d:${i * 50}ms"><span class="ws-log-date">${esc(n.fecha)}</span>
            <a class="ws-card ws-card--link" href="${destino}"><div class="ws-log-head"><span class="ia-chip" data-tono="${tono}"><i></i>${t}</span><h3>${esc(n.titulo)}</h3></div><p>${esc(n.texto)}</p></a></div>`;
    }).join('');
}
function cargarNovedades() {}

/* ---------------------------------------------------------------------
   MOTOR DE ESCENAS (solo transform y opacidad; un único rAF por evento de scroll)
   --------------------------------------------------------------------- */
const clamp01 = (v) => Math.max(0, Math.min(1, v));
const tramo = (t, a, b) => clamp01((t - a) / (b - a));
const suave = (x) => x * x * (3 - 2 * x);
const entrada = (x) => 1 - Math.pow(1 - x, 3);
let escenas = null;

function montarEscenas(raiz) {
    pararEscenas();
    const intro = $('#intro', raiz), flow = $('#como', raiz);
    if (!intro) return;
    const est = {
        intro, flow,
        svg: $('#cover', raiz), g: $('#cover-g', raiz), blanco: $('#logo-blanco', raiz), borde: $('#logo-borde', raiz), cap: $('#intro-cap', raiz),
        escena: $('#escena', raiz), glow: $('#escena-glow', raiz),
        ins: $$('.ws-in', raiz), capas: $$('.ws-layer', raiz), barra: $('#barra'),
        flPasos: $$('#flow-pasos li', raiz), flModal: $('#fl-modal', raiz), flCerrar: $('#fl-cerrar', raiz), flExcel: $('#fl-excel', raiz), flAceptar: $('#fl-aceptar', raiz),
        flRes: $('#fl-res', raiz), flResRows: $$('#fl-res .ws-res-row', raiz), flResChip: $('#fl-res-chip', raiz), flEtq: $('#fl-etq', raiz), flCmt: $('#fl-cmt', raiz), flEst: $('#fl-est', raiz), flCmtH: $('#fl-cmt-h', raiz), flEstH: $('#fl-est-h', raiz),
        estado: {}, contado: false, raf: 0, w: 0, h: 0
    };
    escenas = est;
    if (reducido()) { est.estatico = true; intro.classList.add('is-static'); flow.classList.add('is-static'); pintarIntro(1); pintarFlow(1); return; }
    const medir = () => { est.w = window.innerWidth; est.h = window.innerHeight; est.svg.setAttribute('viewBox', `0 0 ${est.w} ${est.h}`); actualizar(); };
    const actualizar = () => { cancelAnimationFrame(est.raf); est.raf = requestAnimationFrame(cuadro); };
    const cuadro = () => {
        const ri = intro.getBoundingClientRect();
        pintarIntro(clamp01(-ri.top / Math.max(1, ri.height - est.h)));
        const rf = flow.getBoundingClientRect();
        if (rf.top < est.h && rf.bottom > 0) pintarFlow(clamp01(-rf.top / Math.max(1, rf.height - est.h)));
    };
    est.medir = medir; est.actualizar = actualizar;
    window.addEventListener('scroll', actualizar, { passive: true });
    window.addEventListener('resize', medir);
    $('#intro-bajar', raiz).onclick = () => window.scrollTo({ top: intro.offsetTop + intro.offsetHeight - window.innerHeight, behavior: 'smooth' });
    medir();
    // Entrada del logo al cargar: el contorno se dibuja y después se rellena
    const L = est.blanco.getTotalLength ? est.blanco.getTotalLength() : 0;
    if (L && window.scrollY < 40) {
        est.blanco.style.strokeDasharray = L; est.blanco.style.strokeDashoffset = L; est.blanco.style.fillOpacity = 0;
        const a = est.blanco.animate([{ strokeDashoffset: L }, { strokeDashoffset: 0 }], { duration: 1500, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', fill: 'forwards' });
        a.onfinish = () => {
            const b = est.blanco.animate([{ fillOpacity: 0 }, { fillOpacity: 1 }], { duration: 650, easing: 'ease-out', fill: 'forwards' });
            b.onfinish = () => { est.blanco.style.fillOpacity = ''; est.blanco.style.strokeDasharray = ''; est.blanco.style.strokeDashoffset = ''; a.cancel(); b.cancel(); };
        };
        est.cap.animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], { duration: 900, delay: 1300, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'backwards' });
    }
}
function pararEscenas() {
    if (!escenas) return;
    window.removeEventListener('scroll', escenas.actualizar || (() => {}));
    window.removeEventListener('resize', escenas.medir || (() => {}));
    cancelAnimationFrame(escenas.raf);
    const b = $('#barra'); b.style.opacity = ''; b.style.transform = ''; b.style.pointerEvents = ''; b.style.visibility = '';
    escenas = null;
}

/* Escena 1: zoom a través del logo */
function pintarIntro(t) {
    const e = escenas; if (!e) return;
    // Zoom: crece de forma exponencial (sensación de velocidad constante) entre t = 0,05 y 0,55
    const z = tramo(t, 0.05, 0.55);
    if (!e.estatico) {
        const W = e.w, H = e.h;
        const s0 = Math.min(W * (W < 700 ? 0.86 : 0.62), 1000) / LOGO_W;
        const kMax = (Math.hypot(W, H) / 2) * 1.25 / (ZOOM.r * s0);
        const k = Math.pow(kMax, z * z * (3 - 2 * z) * 0.35 + z * 0.65);
        const lleva = suave(z);                                   // el punto de zoom se desplaza al centro de la pantalla
        const px = W / 2 + s0 * (ZOOM.x - LOGO_W / 2) * (1 - lleva), py = H / 2 - (W < 700 ? 30 : 20) * (1 - lleva) + s0 * (ZOOM.y - LOGO_H / 2) * (1 - lleva);
        e.g.setAttribute('transform', `translate(${px.toFixed(2)} ${py.toFixed(2)}) scale(${(s0 * k).toFixed(5)}) translate(${-ZOOM.x} ${-ZOOM.y})`);
        e.svg.style.display = z >= 1 ? 'none' : '';
        e.blanco.style.opacity = (1 - tramo(t, 0.05, 0.16)).toFixed(3);   // las letras dejan de ser blancas y se vuelven ventanas
        e.borde.style.opacity = (tramo(t, 0.05, 0.13) * (1 - tramo(t, 0.28, 0.42))).toFixed(3);   // con un filo de luz de marca
        e.cap.style.opacity = (1 - tramo(t, 0, 0.07)).toFixed(3);
        e.cap.style.transform = `translateY(${(-24 * tramo(t, 0, 0.07)).toFixed(1)}px)`;
        e.cap.style.visibility = t > 0.08 ? 'hidden' : '';
    }
    // La portada: luz de marca intensa al principio (se ve a través de las letras) que se calma al entrar
    const ent = tramo(t, 0.3, 0.62);
    e.glow.style.opacity = (1 - 0.75 * ent).toFixed(3);
    e.escena.style.transform = `scale(${(1.1 - 0.1 * suave(ent)).toFixed(4)})`;
    e.ins.forEach(el => {
        const i = +el.dataset.in, p = entrada(tramo(t, 0.4 + i * 0.045, 0.6 + i * 0.045));
        el.style.opacity = p.toFixed(3); el.style.transform = `translateY(${(36 * (1 - p)).toFixed(1)}px)`;
    });
    e.capas.forEach((c, i) => {
        const p = entrada(tramo(t, 0.5 + i * 0.06, 0.78 + i * 0.06)), v = c.dataset.vuelo;
        const dx = v === 'izquierda' ? -90 : v === 'derecha' ? 90 : 0, dy = v === 'arriba' ? -70 : 40;
        c.style.opacity = p.toFixed(3);
        c.style.translate = `${(dx * (1 - p)).toFixed(1)}px ${(dy * (1 - p)).toFixed(1)}px`;
        c.style.scale = (0.9 + 0.1 * p).toFixed(4);
    });
    if (t > 0.95) marcarIntroVista();
    if (t > 0.6 && !e.contado) { e.contado = true; $$('[data-cuenta]', e.escena).forEach(contar); arrancarDemo(); }
    // La barra de navegación baja a su sitio cuando termina la entrada
    const pb = e.estatico ? 1 : entrada(tramo(t, 0.46, 0.6));
    e.barra.style.opacity = pb.toFixed(3);
    e.barra.style.transform = `translateY(${(-26 * (1 - pb)).toFixed(1)}px)`;
    e.barra.style.pointerEvents = pb < 0.5 ? 'none' : '';
    e.barra.style.visibility = pb < 0.02 ? 'hidden' : '';
}

/* Escena 2: cierre que avanza con el scroll */
function pintarFlow(t) {
    const e = escenas; if (!e) return;
    const paso = t < 0.3 ? 0 : t < 0.62 ? 1 : 2;
    e.flPasos.forEach((li, i) => {
        li.classList.toggle('is-on', i === paso); li.classList.toggle('is-done', i < paso);
        const ini = [0, 0.3, 0.62][i], fin = [0.3, 0.62, 1][i];
        li.querySelector('.ws-flow-bar i').style.transform = `scaleY(${tramo(t, ini, fin).toFixed(3)})`;
    });
    const cambia = (clave, valor, fn) => { if (e.estado[clave] !== valor) { const antes = e.estado[clave]; e.estado[clave] = valor; fn(valor, antes); } };
    // Paso 1: «Cerrar» se activa y el formulario aparece
    e.flCerrar.classList.toggle('is-active', t > 0.08 && t < 0.66);
    const m = e.estatico ? (t > 0.66 ? 0 : 1) : entrada(tramo(t, 0.12, 0.26)) * (1 - tramo(t, 0.68, 0.74));
    e.flModal.style.opacity = m.toFixed(3);
    e.flModal.style.transform = `translateY(${(18 * (1 - m)).toFixed(1)}px) scale(${(0.96 + 0.04 * m).toFixed(4)})`;
    // Paso 2: etiqueta elegida; comentario y estado se rellenan solos (con destello al aparecer)
    const valor = (el, texto, grupo) => { el.querySelector('.ws-fl-val').innerHTML = (grupo ? `<span class="ia-dd-group">${grupo}</span>${icono('chevron-right', 11)}` : '') + esc(texto); el.classList.toggle('is-placeholder', !grupo && /^Sin /.test(texto)); };
    cambia('etq', t > 0.36, (on) => valor(e.flEtq, on ? 'Voz' : 'Sin etiqueta', on ? 'No incidencia' : ''));
    cambia('cmt', t > 0.44, (on, antes) => { valor(e.flCmt, on ? 'Todo OK' : 'Sin comentario'); e.flCmtH.classList.toggle('is-on', on); if (on && antes === false) destello(e.flCmt); });
    cambia('est', t > 0.52, (on, antes) => { valor(e.flEst, on ? 'Resuelto: no detectada inciden' : 'Sin estado'); e.flEstH.classList.toggle('is-on', on); if (on && antes === false) destello(e.flEst); });
    e.flAceptar.classList.toggle('is-pressed', t > 0.64 && t < 0.7);
    // Paso 3: progreso dentro del botón y confirmación
    const fase = t < 0.7 ? 'normal' : t < 0.77 ? 'Aplicando etiqueta...' : t < 0.84 ? 'Aplicando comentario...' : t < 0.9 ? 'Rellenando estado...' : 'ok';
    cambia('fase', fase, (f) => {
        if (f === 'normal') btnReset(e.flCerrar);
        else if (f === 'ok') btnMsg(e.flCerrar, 'Cierre completado', 'success');
        else btnMsg(e.flCerrar, f, 'busy');
    });
    cambia('excel', t > 0.86, (on) => on ? btnMsg(e.flExcel, 'Copiado', 'success') : btnReset(e.flExcel));
    // Cada línea solo se marca cuando su paso ha terminado
    const r = e.estatico ? 1 : entrada(tramo(t, 0.7, 0.77));
    e.flRes.style.opacity = r.toFixed(3);
    e.flRes.style.transform = `translateY(${(16 * (1 - r)).toFixed(1)}px)`;
    const hechos = [0.77, 0.84, 0.86, 0.9];
    e.flResRows.forEach((row, i) => { row.classList.toggle('is-done', t >= hechos[i]); row.classList.toggle('is-wait', t >= 0.7 && t < hechos[i]); });
    cambia('resok', t >= 0.9, (on) => { e.flResChip.dataset.tono = on ? 'success' : 'brand'; e.flResChip.lastChild.textContent = on ? 'Completado' : 'En curso'; });
}
function destello(el) { if (reducido()) return; el.classList.remove('is-autofill'); void el.offsetWidth; el.classList.add('is-autofill'); }

/* Detalles vivos de la portada: Refresh late y REPORTES PRO copia el correo */
let demoTimers = [];
function arrancarDemo() {
    demoTimers.forEach(clearInterval); demoTimers = [];
    if (reducido()) return;
    const correo = $('#esc-correo'), excel = $('#esc-excel');
    const ciclo = (b, txt, ok) => { if (!b || !b.isConnected) return; btnMsg(b, txt, 'busy'); setTimeout(() => b.isConnected && btnMsg(b, ok, 'success', 1800), 900); };
    setTimeout(() => ciclo(excel, 'Copiando...', 'Copiado'), 600);
    setTimeout(() => ciclo(correo, 'Preparando...', 'Correo copiado'), 2400);
    demoTimers.push(setInterval(() => { if (document.visibilityState === 'visible') ciclo(excel, 'Copiando...', 'Copiado'); }, 6400));
    demoTimers.push(setInterval(() => { if (document.visibilityState === 'visible') ciclo(correo, 'Preparando...', 'Correo copiado'); }, 6400));
    demoTimers.push(setInterval(() => { const d = $('#esc-dot'); if (d && d.animate) d.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.8)' }, { transform: 'scale(1)' }], { duration: 300 }); }, 1800));
    const escenario = $('#escenario');
    if (escenario) escenario.closest('.ws-intro').addEventListener('pointermove', (ev) => {
        const r = escenario.getBoundingClientRect(), x = (ev.clientX - r.left - r.width / 2) / r.width, y = (ev.clientY - r.top - r.height / 2) / r.height;
        $$('.ws-layer', escenario).forEach(l => { const k = +l.dataset.prof; l.style.transform = `translate3d(${(-x * k).toFixed(1)}px, ${(-y * k).toFixed(1)}px, 0)`; });
    });
}

/* =====================================================================
   VISTA: CATÁLOGO
   ===================================================================== */
let filtro = { plat: 'Todas', q: '' };
function vistaCatalogo() {
    const plats = ['Todas', ...Array.from(new Set(HERRAMIENTAS.flatMap(h => h.plataformas)))];
    return `<section class="ws-page"><div class="ws-wrap">
        ${cabecera('Catálogo', 'Herramientas', `${HERRAMIENTAS.length} herramientas del departamento.`)}
        <div class="ws-toolbar-filters ws-reveal">
            <div class="ws-filters" role="group" aria-label="Filtrar por plataforma">${plats.map(p => `<button class="ia-btn${p === filtro.plat ? ' is-active' : ''}" data-plat="${esc(p)}" aria-pressed="${p === filtro.plat}">${esc(p)}</button>`).join('')}</div>
            <label class="ws-search">${icono('search', 15)}<input class="ia-control" id="buscar" type="search" placeholder="Buscar herramienta o función" value="${esc(filtro.q)}" aria-label="Buscar herramienta"></label>
        </div>
        <div class="ws-tools" id="catalogo">${HERRAMIENTAS.map(tarjetaHerramienta).join('')}</div>
        <div class="ia-empty ia-hidden" id="vacio">No hay herramientas con ese filtro. <button class="ia-btn" id="limpiar" style="margin-left:8px">Quitar filtros</button></div>
    </div></section>`;
}
function montarCatalogo(raiz) {
    hidratarTarjetas(raiz);
    const aplicar = (animar) => {
        const tarjetas = $$('#catalogo .ws-tool', raiz);
        const antes = new Map(tarjetas.map(t => [t, t.getBoundingClientRect()]));
        const q = filtro.q.trim().toLowerCase();
        let n = 0;
        tarjetas.forEach(t => {
            const h = herramienta(t.dataset.id);
            const texto = [h.nombre, h.variante, h.resumen, h.plataformas.join(' '), h.funciones.map(f => f[1] + ' ' + f[2]).join(' ')].join(' ').toLowerCase();
            const ok = (filtro.plat === 'Todas' || h.plataformas.includes(filtro.plat)) && (!q || texto.includes(q));
            t.classList.toggle('ia-hidden', !ok); if (ok) { n++; t.classList.add('is-in'); }
        });
        $('#vacio', raiz).classList.toggle('ia-hidden', n > 0);
        if (!animar) return;
        tarjetas.forEach(t => {            // FLIP: las tarjetas se recolocan deslizándose
            if (t.classList.contains('ia-hidden')) return;
            const a = antes.get(t), b = t.getBoundingClientRect();
            if (!a.width) { anim(t, [{ opacity: 0, transform: 'scale(0.96)' }, { opacity: 1, transform: 'none' }], { duration: 320 }); return; }
            const dx = a.left - b.left, dy = a.top - b.top;
            if (dx || dy) anim(t, [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }], { duration: 420 });
        });
    };
    $$('.ws-filters .ia-btn', raiz).forEach(b => b.onclick = () => {
        filtro.plat = b.dataset.plat;
        $$('.ws-filters .ia-btn', raiz).forEach(x => { x.classList.toggle('is-active', x === b); x.setAttribute('aria-pressed', x === b); });
        aplicar(true);
    });
    $('#buscar', raiz).addEventListener('input', (e) => { filtro.q = e.target.value; aplicar(true); });
    $('#limpiar', raiz).onclick = () => { filtro = { plat: 'Todas', q: '' }; $('#buscar', raiz).value = ''; $$('.ws-filters .ia-btn', raiz).forEach(x => x.classList.toggle('is-active', x.dataset.plat === 'Todas')); aplicar(true); };
    aplicar(false);
}

/* =====================================================================
   VISTA: FICHA
   ===================================================================== */
function vistaFicha(h) {
    if (!h) return vistaNoEncontrada();
    const reportes = h.id === 'reportes';
    const hoy = new Date().getDay();
    return `<section class="ws-page"><div class="ws-wrap">
        <nav class="ws-crumbs ws-reveal" aria-label="Ruta"><a href="#/herramientas">Herramientas</a>${icono('chevron-right', 12)}<span>${esc(h.nombre)}${h.variante ? ' · ' + esc(h.variante) : ''}</span></nav>
        <div class="ws-detail">
            <div>
                <div class="ws-detail-head ws-reveal">
                    <span class="ws-tile ws-tile--lg">${icono(h.icono, 28)}</span>
                    <div><h1>${nombreHtml(h)}</h1><p>${esc(h.resumen)}</p></div>
                </div>
                <nav class="ws-gnav ws-reveal" aria-label="En esta ficha"><a href="#g-antes" data-salto>${icono('check-circle', 13)}Antes de empezar</a><a href="#g-pasos" data-salto>${icono('arrow-right', 13)}Paso a paso</a><a href="#g-que" data-salto>${icono('bolt', 13)}Qué hace</a>${(GUIAS[h.id] || {}).dudas && GUIAS[h.id].dudas.length ? `<a href="#g-dudas" data-salto>${icono('alert', 13)}Si algo falla</a>` : ''}</nav>
                ${guiaInicio(h)}
                <div class="ws-block" id="g-que"><div class="tw-section-title ws-reveal">Qué hace cada botón</div>
                    <div class="ws-feats">${h.funciones.map((f, i) => `<div class="ws-card ws-feat ws-reveal" style="--d:${(i % 2) * 70}ms"><span class="ws-tile">${icono(f[0], 17)}</span><div><h3>${esc(f[1])}</h3><p>${esc(f[2])}</p></div></div>`).join('')}</div>
                </div>
                ${reportes ? `
                <div class="ws-block"><div class="tw-section-title ws-reveal">Informes de cada día</div>
                    <div class="ws-week">${SEMANA.map((d, i) => `<div class="ws-card ws-day ws-reveal${hoy === i + 1 ? ' is-today' : ''}" style="--d:${i * 60}ms"><h3>${d[0]}${hoy === i + 1 ? '<span class="ia-chip" data-tono="brand"><i></i>Hoy</span>' : ''}</h3><ul>${d[1].map(k => `<li>${esc(INFORMES[k][0])}</li>`).join('')}${DIARIOS.map(k => `<li class="is-daily">${esc(INFORMES[k][0])}</li>`).join('')}</ul></div>`).join('')}</div>
                    <p class="ia-hint ws-reveal" style="margin-top:12px">${icono('bolt', 13)}<span>En gris, los tres informes diarios de Huawei.</span></p>
                </div>
                <div class="ws-block"><div class="tw-section-title ws-reveal">Familias de informes</div>
                    <div class="ws-fams">${FAMILIAS.map((f, i) => `<div class="ws-card ws-fam ws-reveal" style="--d:${(i % 3) * 60}ms"><div class="ws-fam-head"><h3>${esc(f[0])}</h3><span class="ia-count">${f[2].length}</span></div>${f[2].map(k => `<div class="ws-report">${icono('file', 15)}<span>${esc(INFORMES[k][0])}</span></div>`).join('')}</div>`).join('')}</div>
                </div>` : ''}
                ${guiaHtml(h)}
            </div>
            <aside class="ws-panel ws-reveal" style="--d:100ms" id="f-panel" aria-label="Datos de la herramienta">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><div class="tw-section-title" style="margin:0">${tipoTexto(h)}</div><span data-estado>${chipEstado(h, null)}</span></div>
                <div class="tw-row"><span>Versión</span><b data-f="version">v${esc(h.version)}</b></div>
                <div class="tw-row"><span>Plataforma</span><b>${esc(h.plataformas.join(' · '))}</b></div>
                <div class="tw-row"><span>Se instala con</span><b>${h.tipo === 'marcador' ? 'Marcador' : 'LOADER PRO'}</b></div>
                ${GUIAS[h.id] ? `<p class="ws-panel-where">${icono('pin', 13)}<span>${esc(GUIAS[h.id].donde)}</span></p>` : ''}
                ${h.tipo !== 'marcador' ? `<a class="ia-btn ia-btn--outline ia-btn--md ws-full" href="#/instalacion" style="margin-top:14px;width:100%">${icono('download', 14)}<span>Cómo instalarla</span></a>` : ''}
            </aside>
        </div>
        ${(() => { const otras = HERRAMIENTAS.filter(x => x.id !== h.id && x.plataformas.some(p => h.plataformas.includes(p))).slice(0, 3); return otras.length ? `
        <div class="ws-block" style="margin-top:96px"><div class="tw-section-title ws-reveal">También en ${esc(h.plataformas[0])}</div><div class="ws-tools">${otras.map(tarjetaHerramienta).join('')}</div></div>` : ''; })()}
    </div></section>`;
}

/* --- Guía de uso desde cero --- */
function guiaInicio(h) {
    const g = GUIAS[h.id]; if (!g) return '';
    const antes = g.antes || [
        'Tener instalado <b>LOADER PRO</b> en Violentmonkey (<a href="#/instalacion">Instalación</a>).',
        'Haber entrado con tu <b>clave personal</b>: la pantalla de acceso aparece la primera vez que abres la web.',
        'Que tu clave tenga asignada esta herramienta. Si no aparece, pídeselo al responsable.'
    ];
    return `<div class="ws-block" id="g-antes"><div class="tw-section-title ws-reveal">Antes de empezar</div>
        <div class="ws-card ws-pre ws-reveal">${antes.map(a => `<div class="ws-pre-row">${icono('check', 15)}<span>${a}</span></div>`).join('')}</div>
    </div>
    <div class="ws-block" id="g-pasos"><div class="tw-section-title ws-reveal">Paso a paso, desde cero</div>
        <ol class="fp-steps ws-gsteps">${g.pasos.map((p, i) => `<li class="ws-reveal" style="--d:${Math.min(i, 4) * 60}ms"><span class="fp-node">${i + 1}</span><div><h3>${esc(p[0])}</h3><p>${p[1]}</p></div></li>`).join('')}</ol>
    </div>`;
}
function guiaHtml(h) {
    const g = GUIAS[h.id]; if (!g) return '';
    const tablas = (g.tablas || []).map(t => `<div class="ws-block"><div class="tw-section-title ws-reveal">${esc(t.titulo)}</div>
        <div class="ws-card ws-gtable-wrap ws-reveal"><table class="ws-gtable"><thead><tr>${t.cols.map(c => `<th>${esc(c)}</th>`).join('')}</tr></thead>
        <tbody>${t.filas.map(f => `<tr>${f.map((c, i) => `<td${i === 0 ? ' class="is-key"' : ''}>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`).join('');
    const dudas = (g.dudas || []).length ? `<div class="ws-block" id="g-dudas"><div class="tw-section-title ws-reveal">Si algo no sale como esperas</div>
        <div class="ws-faq">${g.dudas.map((d, i) => `<details class="ws-card ws-reveal" style="--d:${Math.min(i, 3) * 50}ms"><summary>${icono('chevron', 15)}<span>${esc(d[0])}</span></summary><p>${d[1]}</p></details>`).join('')}</div></div>` : '';
    return tablas + dudas;
}
async function montarFicha(raiz, h) {
    $$('[data-salto]', raiz).forEach(a => a.addEventListener('click', (e) => { e.preventDefault(); const d = $(a.getAttribute('href'), raiz); if (d) d.scrollIntoView({ behavior: reducido() ? 'auto' : 'smooth', block: 'start' }); }));
    hidratarTarjetas(raiz);
    const m = await meta(h);
    if (!raiz.isConnected) return;
    const panel = $('#f-panel', raiz);
    $('[data-estado]', panel).innerHTML = chipEstado(h, m);
}


/* =====================================================================
   VISTA: INSTALACIÓN · Violentmonkey + Loader + clave personal
   El Loader es el único código que se instala; las herramientas llegan al iniciar sesión.
   ===================================================================== */
const LOADER_ARCHIVO = 'LOADER-PRO.user.js';
const LOADER_VERSION = '2.3';
const LOADER = "// ==UserScript==\n// @name         LOADER PRO\n// @namespace    http://tampermonkey.net/\n// @version      2.3\n// @description  Suite de las herramientas PRO de IATEL\n// @match        https://calipso-oceane.sso.infra.ftgroup/binOceane/*\n// @match        https://brujula.orange.es/*\n// @match        http://mxmefm01.wnet/*\n// @connect      script.google.com\n// @connect      script.googleusercontent.com\n// @grant        GM_xmlhttpRequest\n// @grant        GM_setValue\n// @grant        GM_getValue\n// @grant        GM_setClipboard\n// @grant        GM_openInTab\n// @grant        GM_deleteValue\n// @grant        GM_addStyle\n// @inject-into  content\n// @run-at       document-end\n// ==/UserScript==\n\n(function () {\n    'use strict';\n\n    const API_URL = \"https://script.google.com/macros/s/AKfycbwl8jlA3sspRqKUyFSRyPO26Er9bdVTH5_KFu84lysci4-foNHfUo-Ttp0IcXBq3AC8/exec\";\n    const CLAVE_CACHE = \"iatel_cache\";                         // { id: { hash, codigo } }\n    const CLAVE_PAGINA = \"iatel_pagina_\" + location.hostname;  // herramientas que tocan en esta web\n\n    function generarIDSeguro() {\n        if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();\n        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\n            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);\n            return v.toString(16);\n        });\n    }\n    if (!GM_getValue(\"oceane_hwid\")) GM_setValue(\"oceane_hwid\", generarIDSeguro());\n\n    const ejecutadas = new Set();\n\n    function gmAddStyle(css) { const st = document.createElement('style'); st.textContent = css; (document.head || document.documentElement).appendChild(st); return st; }\n\n    function ejecutar(id, codigoFuente) {\n        if (ejecutadas.has(id)) return;\n        ejecutadas.add(id);\n        const codigo = String(codigoFuente)\n            .replace(/^﻿/, '')\n            .replace(/^\\s*<script[^>]*>\\s*/i, '')\n            .replace(/\\s*<\\/script>\\s*$/i, '');\n        try {\n            // Todas las funciones GM_* que usan las herramientas (MASIVAS PRO borra valores con\n            // GM_deleteValue; REPORTES PRO usa GM_addStyle y GM_info). Si faltara alguna, la\n            // herramienta fallaba a mitad de trabajo.\n            const fn = new Function(\n                'GM_getValue', 'GM_setValue', 'GM_deleteValue', 'GM_setClipboard', 'GM_openInTab', 'GM_xmlhttpRequest', 'GM_addStyle', 'GM_info',\n                codigo + '\\n//# sourceURL=iatel-' + id + '.js'\n            );\n            fn(GM_getValue, GM_setValue, GM_deleteValue, GM_setClipboard, GM_openInTab, GM_xmlhttpRequest,\n               typeof GM_addStyle === 'function' ? GM_addStyle : gmAddStyle,\n               typeof GM_info !== 'undefined' ? GM_info : {});\n        } catch (e) {\n            console.error('Error al ejecutar ' + id + ':', e.message, 'línea', e.lineNumber, 'col', e.columnNumber);\n        }\n    }\n\n    function leerCache() {\n        const c = GM_getValue(CLAVE_CACHE, {});\n        return (c && typeof c === 'object') ? c : {};\n    }\n\n    // 1. Arranque instantáneo con la copia guardada de la última vez\n    function arrancarDesdeCache() {\n        const cache = leerCache();\n        (GM_getValue(CLAVE_PAGINA, []) || []).forEach(id => {\n            if (cache[id] && cache[id].codigo) ejecutar(id, cache[id].codigo);\n        });\n    }\n\n    // 2. Comprobación de la licencia en segundo plano.\n    //    \"ui\" solo llega desde la pantalla de acceso: así el resultado se cuenta allí en vez de en la consola.\n    function validar(ui) {\n        const clave = GM_getValue(\"oceane_clave\", \"\");\n        const idEquipo = GM_getValue(\"oceane_hwid\", \"\");\n        if (!clave || !idEquipo) return;\n\n        const cache = leerCache();\n        const versiones = {};\n        Object.keys(cache).forEach(id => { if (cache[id] && cache[id].hash) versiones[id] = cache[id].hash; });\n\n        GM_xmlhttpRequest({\n            method: \"POST\",\n            url: API_URL,\n            headers: { \"Content-Type\": \"application/json\" },\n            timeout: 30000,\n            data: JSON.stringify({ clave: clave, idEquipo: idEquipo, urlActual: location.href, versiones: versiones }),\n            onload: function (response) {\n                let res;\n                try { res = JSON.parse(response.responseText); }\n                catch (e) {\n                    console.warn('IATEL: respuesta no válida de la API; se sigue con la copia guardada.');\n                    if (ui) ui.red('El servidor ha respondido algo inesperado. Inténtalo de nuevo en unos segundos.');\n                    return;\n                }\n                if (res.autorizada && Array.isArray(res.herramientas)) {\n                    if (ui) ui.ok(res.herramientas, () => aplicar(res.herramientas));\n                    else aplicar(res.herramientas);\n                }\n                else denegado(res.error, ui);\n            },\n            onerror: () => { console.warn('IATEL: sin conexión con la API; se usa la copia guardada.'); if (ui) ui.red('No hay conexión con el servidor de licencias. Comprueba la red y vuelve a intentarlo.'); },\n            ontimeout: () => { console.warn('IATEL: la API no ha respondido a tiempo; se usa la copia guardada.'); if (ui) ui.red('El servidor de licencias tarda demasiado en responder. Vuelve a intentarlo.'); }\n        });\n    }\n\n    function aplicar(herramientas) {\n        const cache = leerCache();\n        const ids = [];\n        herramientas.forEach(h => {\n            const guardada = cache[h.id];\n            const codigo = h.codigo || (guardada && guardada.hash === h.hash ? guardada.codigo : null);\n            if (!codigo) return;\n            if (h.codigo && ejecutadas.has(h.id)) {\n                console.info('IATEL: hay una versión nueva de ' + h.id + '; se aplicará al recargar la página.');\n            }\n            cache[h.id] = { hash: h.hash, codigo: codigo };\n            ids.push(h.id);\n        });\n\n        // Herramientas que se ejecutaron desde la copia pero ya no corresponden: permiso retirado\n        const retiradas = Array.from(ejecutadas).filter(id => !ids.includes(id));\n        retiradas.forEach(id => delete cache[id]);\n\n        GM_setValue(CLAVE_CACHE, cache);\n        GM_setValue(CLAVE_PAGINA, ids);\n\n        if (retiradas.length) { location.reload(); return; }\n        ids.forEach(id => ejecutar(id, cache[id].codigo));   // primera vez en esta web: se ejecuta ahora\n    }\n\n    function denegado(error, ui) {\n        console.error(\"Error de acceso:\", error);\n        const habiaHerramientas = ejecutadas.size > 0;\n        GM_setValue(CLAVE_CACHE, {});\n        GM_setValue(CLAVE_PAGINA, []);\n        if (error === \"Licencia no válida\") GM_setValue(\"oceane_clave\", \"\");\n\n        // Desde la pantalla de acceso, el motivo se explica allí mismo\n        if (ui) { ui.no(error); return; }\n\n        // Si la herramienta ya se estaba mostrando desde la copia, se recarga sin ella (y entonces sale el aviso)\n        if (habiaHerramientas) { location.reload(); return; }\n\n        Acceso.abrir({ error: error });\n    }\n\n    /* =====================================================================\n       PANTALLA DE ACCESO · IATelecom Design System\n       Vive dentro de un Shadow DOM: no hereda ni cambia nada de la web en la que aparece.\n       Al validar la clave, la propia ventana se transforma en la barra de la herramienta\n       de esa web (OCEANE PRO, MASIVAS PRO, BRÚJULA PRO…) y le cede el sitio a la real.\n       ===================================================================== */\n    const Acceso = (function () {\n        const LOGO_D = 'M725.8 62.1Q724.8 62.1 722.7 62.5Q720.6 62.9 718.7 63Q716.8 63.1 713.8 63.7Q710.9 64.3 707.6 65.2Q704.4 66 702.4 66.7Q700.4 67.4 699.1 68Q697.9 68.5 693.5 70.7Q689.1 73 685.8 75.1Q682.5 77.3 681.2 78.4Q680 79.5 674.8 84.8Q669.6 90 668.4 91.5Q667.3 93 665.4 95.9Q663.5 98.9 661.1 103.8Q658.7 108.6 657.7 111.7Q656.6 114.8 655.9 117.3Q655.3 119.9 654.7 123.6Q654.1 127.2 654 134.7Q654 142.1 654.1 143.1Q654.1 144.1 654.5 145.7Q654.8 147.2 655 148.9Q655.2 150.6 656.1 154.1Q657 157.5 658 160.1Q658.9 162.8 661.3 167.5Q663.7 172.2 665.5 175.1Q667.3 177.9 668.3 179.2Q669.2 180.5 675.3 186.6Q681.4 192.6 682.7 193.6Q684 194.6 686.9 196.5Q689.9 198.3 694.5 200.6Q699.1 202.9 701.8 203.9Q704.4 204.9 707.6 205.7Q710.9 206.6 713.8 207.2Q716.8 207.7 719.2 207.8Q721.6 208 723.9 208.4Q726.2 208.8 728.2 208.8Q730.1 208.9 731.1 208.8Q732.1 208.7 734.2 208.3Q736.2 208 738.6 207.9Q741 207.8 741.8 207.7Q742.6 207.6 745.3 207.1Q748 206.6 752.5 205.5Q757 204.3 758.9 203.6Q760.8 202.9 764.4 201.1Q768 199.3 771.5 197.1Q775 194.8 776.4 193.6Q777.9 192.4 782.6 187.6Q787.4 182.9 788.2 182Q789 181.1 789.8 180Q790.6 178.9 792.2 176.3Q793.9 173.8 795.6 170.4Q797.3 167 797.6 166.2Q797.9 165.4 798 164.5Q798.2 163.6 798.2 163Q798.2 162.4 798 161.8Q797.8 161.2 797.5 160.8Q797.1 160.4 796.7 160Q796.2 159.7 795.7 159.5Q795.2 159.2 794.5 159.1L793.8 159L763.8 159Q761.6 159.2 760.8 159.4Q760 159.7 759.3 160.2Q758.7 160.6 755.9 163.5Q753.1 166.3 751.4 167.8Q749.8 169.4 748.8 170Q747.8 170.6 745.9 171.5Q744 172.4 741.9 173.1Q739.9 173.8 737.2 174.3Q734.6 174.9 729.7 175Q724.8 175 723.8 174.9Q722.8 174.9 721.6 174.6Q720.4 174.3 719.1 173.9Q717.9 173.5 715.9 172.7Q713.9 171.9 712.4 170.9Q710.9 169.9 708.1 167.9Q705.4 165.8 704.7 165.1Q704.1 164.5 701.6 161.2Q699.2 157.9 698.4 156.6Q697.6 155.2 697.1 154.2Q696.6 153.2 696.1 151.8Q695.5 150.4 695.3 149.2Q695.1 148.1 695.1 147.3Q695.2 146.5 695.6 145.9Q695.9 145.2 696.2 144.9Q696.5 144.7 697 144.4Q697.5 144.2 698.7 144L699.9 143.9L796 143.9Q797.8 143.7 798.3 143.6Q798.9 143.4 799.4 143Q799.8 142.6 800.1 142.2Q800.4 141.8 800.6 141.2Q800.7 140.8 800.8 139.9Q800.9 139 800.9 132.9Q800.9 126.8 800.8 125.5Q800.7 124.2 800.1 121.6Q799.6 118.9 799 116.6Q798.4 114.2 797 109.9Q795.6 105.6 794.7 103.8Q793.8 101.9 791.7 98.1Q789.5 94.4 788.5 92.9Q787.5 91.5 784.9 88.2Q782.3 85 779.9 82.6Q777.5 80.2 774.8 78.1Q772 76.1 769 74.1Q766 72.1 762 70.1Q758 68.1 756.6 67.5Q755.1 66.9 752.5 66.1Q749.9 65.2 747.9 64.8Q746 64.3 743.3 63.8Q740.6 63.2 737.9 63.1Q735.2 62.9 732.9 62.5Q730.6 62.1 728.7 62Q726.8 62 725.8 62.1ZM697.3 115.9Q697.5 115.1 697.9 114.2Q698.3 113.4 700.5 110.1Q702.8 106.8 703.6 105.9Q704.4 105 705.1 104.4Q705.8 103.8 707.8 102.4Q709.9 101 713.1 99.3Q716.4 97.7 717.2 97.4Q718 97.1 719.7 96.7Q721.4 96.3 723.1 96.1Q724.8 95.9 728.4 95.9Q732.1 95.9 733.1 95.9Q734.1 96 734.9 96.2Q735.6 96.3 738.8 97.4Q742 98.5 743.8 99.4Q745.5 100.3 747.3 101.5Q749.1 102.8 751.3 104.9Q753.4 107 754.5 108.4Q755.6 109.9 756.6 111.6Q757.5 113.2 757.9 114.4Q758.3 115.5 758.4 116.2Q758.5 117 758.4 117.6Q758.3 118.1 757.8 118.6Q757.4 119.1 756.8 119.4Q756.2 119.7 755.5 119.9L754.8 120L701.9 120Q699.9 119.8 699.2 119.5Q698.5 119.2 698 118.7Q697.5 118.1 697.4 117.7Q697.3 117.4 697.2 117Q697.2 116.6 697.3 115.9ZM401.1 80.4Q399.2 82.4 397 85.3Q394.8 88.2 392.9 91.2Q391 94.1 389 98.1Q386.9 102.1 385.8 105.4Q384.6 108.8 383.5 113.1Q382.4 117.4 382.2 118.3Q382.1 119.2 382 120.7Q381.9 122.1 381.5 123.9Q381.1 125.8 381.1 126.8Q381 127.8 381 136.2Q381.1 144.6 381.5 146.7Q381.9 148.8 382.1 150.9Q382.3 153 383.6 157.9Q384.8 162.9 385.9 165.8Q386.9 168.8 389 172.9Q391.1 177 393.4 180.4Q395.6 183.8 397.1 185.8Q398.6 187.8 399.6 188.8Q400.5 189.9 402.4 191.8Q404.4 193.6 407.3 195.9Q410.2 198.1 412.1 199.2Q413.9 200.3 417.5 202.1Q421.1 203.9 424.1 205Q427 206.1 429.7 206.8Q432.4 207.5 433.3 207.6Q434.2 207.8 436.2 207.9Q438.1 208 440.2 208.4Q442.2 208.8 444.4 208.8Q446.6 208.8 448.7 208.4Q450.8 208 452.7 207.8Q454.6 207.6 457.4 207Q460.1 206.3 463.2 205.2Q466.2 204.2 468.6 203Q471 201.8 474.2 199.7Q477.4 197.5 478.4 196.7Q479.4 195.9 481.8 193.6Q484.1 191.3 484.9 190.7Q485.8 190.2 485.8 190L485.9 189.9L486.8 189.8L487.5 190.4L487.3 190.6Q487.9 191.9 488 195.4Q488 198.9 488.2 199.9Q488.4 200.9 488.7 201.5Q489 202.1 489.5 202.6Q489.9 203.2 490.5 203.6Q491 204 491.6 204.3Q492.1 204.5 492.7 204.6Q493.2 204.8 494.1 204.8L494.9 204.9L521 204.8Q522.2 204.7 522.9 204.5Q523.6 204.3 524.2 204.1Q524.7 203.8 525.1 203.5Q525.5 203.1 525.8 202.7Q526.1 202.4 526.3 201.9Q526.5 201.5 526.7 200.2L526.9 199L526.9 71.9Q526.5 69.4 526.3 68.9Q526.1 68.5 525.8 68.1Q525.5 67.7 525.1 67.4Q524.7 67.1 524.2 66.8Q523.6 66.5 522.9 66.4Q522.2 66.2 521.6 66.1L521 66L494.9 66Q493.2 66.1 492.7 66.2Q492.1 66.4 491.6 66.6Q491 66.9 490.5 67.3Q489.9 67.7 489.5 68.2Q489 68.8 488.7 69.4Q488.4 70 488.2 71Q488 72 488 75.5Q487.9 79 487.6 79.6L487.3 80.3L487.5 80.5Q487 81 486.6 81.1Q486.2 81.1 486.1 81.1L485.9 81Q485.8 80.7 484.9 80.2Q484.1 79.6 481.8 77.3Q479.4 75 478.4 74.2Q477.4 73.3 474.2 71.2Q471 69.1 468.6 67.9Q466.2 66.7 463.2 65.7Q460.1 64.6 457.4 63.9Q454.6 63.2 452.7 63Q450.8 62.9 448.7 62.5Q446.6 62.1 444.4 62.1Q442.2 62.1 440.2 62.5Q438.1 62.9 436.2 63Q434.2 63.1 433.3 63.2Q432.4 63.4 430.1 64Q427.8 64.6 424.8 65.6Q421.9 66.6 418.4 68.3Q414.9 70 413.5 70.8Q412.1 71.6 408.8 73.9Q405.5 76.3 404.2 77.4Q403 78.5 401.1 80.4ZM449.8 95.9Q450.8 95.9 454.4 95.9Q458.1 95.9 459.1 95.9Q460.1 96 460.9 96.2Q461.6 96.3 463.9 97.1Q466.1 97.8 467.6 98.4Q469 98.9 470.4 99.7Q471.8 100.4 473.2 101.5Q474.8 102.5 475.8 103.4Q476.9 104.4 478.3 105.9Q479.8 107.4 480.7 108.7Q481.7 110 482.5 111.3Q483.3 112.6 484 114Q484.6 115.4 485.3 117.4Q486 119.4 486.4 120.7Q486.8 122 487.3 124.4Q487.9 126.8 487.9 127.8Q488 128.8 488 135.4Q488 142.1 487.9 143.1Q487.9 144.1 487.3 146.5Q486.8 148.9 486.4 150.2Q486 151.5 485.2 153.8Q484.4 156 483.7 157.4Q483 158.8 482 160.4Q480.9 162 480.2 162.9Q479.4 163.9 477.9 165.4Q476.4 167 475.2 168Q474 168.9 472.5 169.9Q471 170.9 469.6 171.6Q468.2 172.3 465.6 173.2Q462.9 174.2 461.5 174.5Q460.1 174.9 459.1 174.9Q458.1 175 454 175Q449.9 175 448.9 174.8Q447.9 174.7 446.2 174.3Q444.5 173.9 443.4 173.5Q442.4 173.2 440.6 172.3Q438.9 171.4 437.6 170.7Q436.2 169.9 435 169Q433.8 168.1 432.6 167Q431.4 165.9 430.3 164.6Q429.2 163.4 428.1 161.7Q427 160 426.2 158.5Q425.4 157 424.8 155.6Q424.2 154.2 423.4 151.9Q422.6 149.5 421.8 145.8Q421 142.1 420.9 141.1Q420.9 140.1 420.9 135.4Q420.9 130.8 421 129.5Q421.1 128.2 421.7 125.4Q422.2 122.6 422.8 120.8Q423.4 118.9 424.1 117Q424.8 115.1 426 112.8Q427.3 110.4 428.2 108.9Q429.2 107.5 430 106.5Q430.9 105.5 432.1 104.3Q433.4 103.1 434.7 102.1Q436 101.2 437.3 100.4Q438.6 99.6 440.5 98.6Q442.4 97.7 443.4 97.4Q444.5 97 446.6 96.5Q448.8 96 449.8 95.9ZM564.5 37.8Q564 38.2 563.6 38.6Q563.2 39 562.9 39.6Q562.5 40.2 562.3 41.1Q562.1 41.9 562.1 42.8Q562 43.8 562 52.7Q562 61.6 561.9 62.4Q561.9 63.2 561.7 63.8Q561.5 64.4 561 64.8Q560.6 65.3 559.9 65.6Q559.2 65.9 555.1 66Q550.9 66 550.1 66.1Q549.2 66.2 548.6 66.5Q547.9 66.7 547.2 67.1Q546.6 67.5 546.1 68.1Q545.7 68.6 545.4 69.3Q545.2 69.9 545.1 70.9L545 71.9L545 94Q545.2 96.1 545.5 96.8Q545.7 97.5 546 97.9Q546.4 98.4 546.8 98.7Q547.1 99 548.1 99.4Q549 99.7 549.9 99.8Q550.9 99.9 554.2 99.9Q557.6 99.9 558.6 100Q559.6 100.1 560 100.3Q560.5 100.5 560.8 100.7Q561.1 101 561.3 101.4Q561.6 101.8 561.7 102.2Q561.9 102.6 561.9 103.4L562 104.2L562 160.1Q562.2 162.2 562.4 163.1Q562.6 163.9 563 164.4Q563.3 165 563.8 165.5Q564.3 166 564.8 166.3Q565.4 166.6 566 166.7L566.6 166.8L595.8 166.9Q597.5 167.2 598.2 167.7Q598.9 168.1 599.1 168.5Q599.4 168.9 599.6 169.3Q599.7 169.6 599.9 170.8L600 171.9L600.1 200.2Q600.3 201.4 600.5 201.9Q600.7 202.4 601.1 202.8Q601.5 203.2 602 203.6Q602.5 204 603.4 204.3Q604.2 204.6 605.5 204.8L606.8 204.9L635 204.9Q636.6 204.8 637.3 204.6Q638 204.4 638.6 204Q639.2 203.7 639.6 203.2Q640 202.7 640.3 202.1Q640.6 201.5 640.7 200.7L640.8 199.9L640.9 170.9Q640.7 168.8 640.3 168Q639.9 167.3 639.6 167Q639.2 166.7 638.8 166.5Q638.4 166.3 637.2 166.1L636 166L604.6 165.9Q603.5 165.7 603 165.5Q602.5 165.2 602.1 164.8Q601.7 164.5 601.5 164Q601.2 163.5 601.1 163Q601 162.5 600.9 161.8L600.9 161L600.9 104.9Q601.1 102.9 601.4 102.2Q601.7 101.5 602.2 101.1Q602.6 100.6 603.4 100.3Q604.1 100 605 99.9L605.9 99.9L634.9 99.8Q636.9 99.5 637.6 99Q638.4 98.5 638.7 98.1Q639 97.7 639.3 97.2Q639.5 96.8 639.6 96.2Q639.8 95.6 639.8 94.8L639.9 94L639.9 71.9Q639.8 70.4 639.6 69.8Q639.5 69.1 639.1 68.5Q638.7 67.9 638.2 67.5Q637.6 67 636.9 66.7Q636.1 66.4 635.3 66.2L634.5 66.1L605.9 66Q603.8 65.8 603.1 65.5Q602.4 65.1 602.1 64.9Q601.8 64.6 601.6 64.2Q601.3 63.8 601.1 62.8Q600.9 61.8 600.8 51.5Q600.8 41.2 600.6 40.6Q600.5 40 600.2 39.5Q599.9 39 599.5 38.6Q599.1 38.1 598.5 37.8Q598 37.5 597.3 37.3Q596.6 37.1 595.8 37.1L595 37L567.9 37Q566.4 37.1 565.8 37.3Q565.1 37.4 564.5 37.8ZM123.1 37.3Q122.5 37.8 122.1 38.5Q121.6 39.1 121.4 39.9Q121.2 40.6 121.1 41.7L121 42.8L121.1 66.5Q121.3 67.9 121.6 68.6Q121.9 69.2 122.3 69.8Q122.7 70.3 123.2 70.6Q123.8 71 124.6 71.3Q125.4 71.6 126.6 71.8L127.8 71.9L184 71.9Q185.5 72 186 72.1Q186.5 72.2 187 72.5Q187.5 72.7 187.8 73.1Q188.2 73.5 188.5 74.2Q188.8 74.9 188.9 75.9L189 76.9L189 134Q188.8 136 188.5 136.7Q188.2 137.3 187.6 137.9Q187 138.4 186.2 138.7L185.5 138.9L161.9 139Q160.2 138.9 159.6 138.7Q158.9 138.5 158.3 138.2Q157.8 137.9 157.4 137.5Q157 137.1 156.7 136.5Q156.3 136 156.2 135.3Q156 134.6 155.9 133.8L155.9 133L155.8 110Q155.4 107.9 155.2 107.4Q154.9 107 154.6 106.6Q154.2 106.2 153.5 105.8Q152.8 105.4 151.8 105.2L150.9 105L126.9 105Q125.2 105.1 124.7 105.2Q124.1 105.4 123.6 105.6Q123.1 105.8 122.8 106.2Q122.4 106.5 122 106.9Q121.7 107.4 121.5 107.9Q121.3 108.4 121.1 109.6L121 110.9L121 134Q121.2 135.9 121.4 136.6Q121.6 137.4 122 137.9Q122.4 138.4 122.8 138.7Q123.1 139 123.6 139.3Q124.1 139.5 124.7 139.6Q125.2 139.8 126.1 139.8L126.9 139.9L149.9 139.9Q151.9 140.3 152.6 140.8Q153.4 141.3 153.7 141.6Q154.1 142 154.3 142.4Q154.5 142.9 154.7 143.9L155 145L155 168Q154.8 170 154.5 170.6Q154.3 171.2 153.8 171.7Q153.3 172.2 152.7 172.5Q152 172.8 151 172.9L150 173L127 173Q125.8 173.2 125.1 173.4Q124.5 173.6 124 173.9Q123.5 174.2 123.1 174.6Q122.6 175 122.2 175.6Q121.8 176.1 121.6 176.6Q121.4 177.1 121.2 177.7Q121.1 178.2 121.1 179.1L121 179.9L121 202Q121.2 204.1 121.5 204.9Q121.8 205.8 122.3 206.3Q122.7 206.9 123.4 207.5Q124.1 208.1 124.8 208.3Q125.5 208.6 126.2 208.7L127 208.8L149.1 208.9Q151.2 208.7 152.2 208.4Q153.2 208.1 153.7 207.7Q154.2 207.4 154.6 207Q155 206.6 155.2 206.1Q155.5 205.6 155.6 205.1L155.8 204.5L155.9 180Q156.3 178 156.8 177.2Q157.3 176.5 157.6 176.1Q158 175.8 158.4 175.6Q158.9 175.3 159.9 175.1L161 174.9L184 174.9Q186 175.1 186.6 175.3Q187.2 175.6 187.7 176.1Q188.2 176.5 188.5 177.2Q188.8 177.9 188.9 178.9L189 179.9L189.1 202.5Q189.3 203.9 189.5 204.6Q189.8 205.2 190.2 205.9Q190.5 206.5 191 207Q191.4 207.5 191.9 207.8Q192.4 208.2 192.9 208.4Q193.4 208.6 194.6 208.7L195.9 208.9L218 208.9Q220.1 208.7 220.9 208.4Q221.8 208.1 222.5 207.5Q223.2 206.9 223.7 206.2Q224.2 205.5 224.5 204.8Q224.7 204 224.8 203L224.9 202L224.9 42.9Q224.7 40.8 224.4 40Q224.1 39.2 223.5 38.5Q222.9 37.8 222.1 37.3Q221.2 36.8 220.2 36.5Q219.2 36.2 218.2 36.1L217.1 36L127.8 36Q125.4 36.2 124.6 36.5Q123.8 36.8 123.1 37.3ZM21.4 36.7Q20.6 37.1 19.9 37.8Q19.2 38.5 18.8 39.3Q18.4 40 18.2 40.8L18.1 41.5L18 65.9Q18.4 67.8 18.8 68.6Q19.2 69.4 19.6 69.8Q20 70.3 20.6 70.7Q21.1 71.1 21.7 71.3Q22.2 71.6 22.9 71.7L23.5 71.8L47 71.9Q48.8 72 49.3 72.2Q49.9 72.4 50.3 72.7Q50.8 73 51.1 73.5Q51.5 74 51.7 74.6Q51.9 75.1 51.9 76L52 76.9L52 202Q52.1 203.6 52.2 204.2Q52.4 204.8 52.7 205.5Q53.1 206.2 53.8 207Q54.5 207.7 55.3 208.1Q56 208.5 56.8 208.6L57.5 208.8L81 208.9Q82.6 208.8 83.2 208.6Q83.8 208.5 84.2 208.3Q84.6 208.1 85 207.8Q85.4 207.5 86.1 206.6Q86.8 205.8 87.2 204.7Q87.6 203.6 87.8 202.4L87.9 201.1L87.9 77.8Q87.7 75.9 87.6 75.1Q87.4 74.4 87 73.6Q86.6 72.9 86 72.2Q85.5 71.6 84.7 71.1Q83.9 70.6 83.1 70.4Q82.2 70.2 81.2 70.1L80.1 70L58 70Q56 69.6 55.6 69.4Q55.1 69.2 54.7 68.8Q54.4 68.5 54 68.1Q53.7 67.7 53.5 67.3Q53.3 66.9 53.1 65.9L52.9 64.9L52.8 40.4Q52.5 39.4 52.3 38.9Q52.1 38.4 51.7 38Q51.4 37.6 51 37.3Q50.5 37 49.6 36.6Q48.6 36.2 47.4 36.1Q46.1 36 35.5 36Q24.9 36 24.1 36.1Q23.2 36.1 22.7 36.2Q22.1 36.4 21.4 36.7ZM284.7 29.7Q284.2 30 283.9 30.5Q283.5 31 283.3 31.6Q283.1 32.1 283.1 33L283 33.9L283 62Q283.2 64.1 283.6 64.8Q284 65.5 284.6 66Q285.2 66.5 286.2 66.7L287.1 66.8L314.1 66.9Q315.9 67 316.6 67.2Q317.4 67.4 317.9 67.7Q318.4 68 318.9 68.5Q319.3 68.9 319.6 69.6Q319.8 70.2 319.9 71.2L320 72.1L320 198.1Q320.2 200.2 320.4 200.9Q320.6 201.6 321.1 202.3Q321.5 203.1 322.1 203.5Q322.6 204 323.4 204.3Q324.1 204.6 325 204.7L325.9 204.8L352.1 204.9Q354.2 204.7 355.1 204.5Q355.9 204.2 356.5 203.8Q357.2 203.4 357.7 202.8Q358.2 202.2 358.4 201.6Q358.7 201 358.8 200L358.9 199L358.9 71.9Q358.8 70.4 358.6 69.8Q358.5 69.1 358.1 68.5Q357.7 67.9 357.3 67.6Q356.9 67.2 356.2 66.9Q355.6 66.5 354.8 66.3Q354 66.1 353.1 66.1L352.1 66L325.4 66Q323.6 65.6 323 65.2Q322.3 64.8 322 64.4Q321.7 64 321.5 63.6Q321.3 63.1 321.1 62.1L320.9 61L320.8 32.6Q320.3 30.9 320.1 30.6Q319.8 30.2 319.4 29.9Q319 29.6 318.4 29.4Q317.8 29.1 316.9 29.1L316 29L287.9 29Q286.4 29.1 285.8 29.2Q285.2 29.4 284.7 29.7ZM825.6 16Q824.8 16.5 824.3 17.2Q823.8 17.9 823.5 18.8Q823.2 19.6 823.1 20.7L823 21.8L823 161Q823.1 162.6 823.3 163.2Q823.4 163.9 823.8 164.5Q824.1 165.1 824.6 165.5Q825 165.9 825.6 166.2Q826.1 166.5 826.9 166.7L827.6 166.8L855.8 166.9Q857.5 167.2 858.2 167.7Q858.9 168.1 859.1 168.5Q859.4 168.9 859.6 169.3Q859.7 169.6 859.9 170.8L860 171.9L860.1 199.2Q860.3 200.5 860.5 201.1Q860.8 201.6 861.1 202.1Q861.5 202.5 861.9 202.8Q862.4 203.2 863.1 203.4Q863.8 203.7 864.8 203.8L865.9 203.9L893 203.9Q894.6 203.8 895.2 203.6Q895.9 203.5 896.5 203.1Q897.1 202.8 897.6 202.3Q898 201.7 898.3 201.1Q898.6 200.5 898.7 199.7L898.8 198.9L898.9 170.9Q898.6 168.6 898.3 167.9Q897.9 167.2 897.4 166.7Q897 166.3 896.4 166Q895.9 165.6 895.2 165.4Q894.6 165.2 893.8 165.1L893 165L865.4 164.9Q864.2 164.6 863.7 164.3Q863.2 164 862.8 163.4Q862.4 162.9 862.2 162.3Q862 161.8 861.9 160.9L861.9 160L861.9 20.9Q861.8 19.4 861.6 18.8Q861.5 18.2 861.1 17.6Q860.7 17 860.1 16.5Q859.5 16 858.7 15.6Q857.9 15.3 856.9 15.2L856 15L829.8 15Q827.8 15.2 827.1 15.4Q826.4 15.5 825.6 16Z';\n        const NOMBRES = {\n            'oceane-masmovil': 'OCEANE PRO · MásMóvil', 'oceane-mm': 'OCEANE PRO · MásMóvil', 'oceane-cobertura': 'OCEANE PRO · Cobertura',\n            'oceane-servicios': 'OCEANE PRO · Servicios', 'masivas': 'MASIVAS PRO', 'brujula': 'BRÚJULA PRO', '360': '360 PRO', 'reportes': 'REPORTES PRO'\n        };\n        const host = location.hostname;\n        const WEB = /brujula/i.test(host) ? 'Brújula' : /oceane/i.test(host) ? 'Oceane' : /mxmefm01/i.test(host) ? 'MAQA' : (host || 'esta web');\n        const reducido = () => { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } };\n        const esc = (s) => String(s == null ? '' : s).replace(/[&<>\"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', \"'\": '&#39;' }[c]));\n        const nombreDe = (id) => NOMBRES[String(id).toLowerCase()] || String(id).replace(/[-_]+/g, ' ').toUpperCase();\n\n        /* Iconos: los de la pantalla de acceso + los de las barras (mismo trazo que IADS_ICONS) */\n        const I = Object.assign({\"refresh\": \"<path d=\\\"M21 12a9 9 0 1 1-2.64-6.36\\\"/><path d=\\\"M21 3v6h-6\\\"/>\", \"check-circle\": \"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"9\\\"/><path d=\\\"m8 12 3 3 5-6\\\"/>\", \"escalate\": \"<path d=\\\"M7 17 17 7\\\"/><path d=\\\"M8 7h9v9\\\"/>\", \"table\": \"<rect x=\\\"3\\\" y=\\\"4\\\" width=\\\"18\\\" height=\\\"16\\\" rx=\\\"2\\\"/><path d=\\\"M3 10h18M9 4v16\\\"/>\", \"keyboard\": \"<rect x=\\\"2\\\" y=\\\"6\\\" width=\\\"20\\\" height=\\\"12\\\" rx=\\\"2\\\"/><path d=\\\"M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10\\\"/>\", \"download\": \"<path d=\\\"M12 4v11M7 10l5 5 5-5M5 20h14\\\"/>\", \"pencil\": \"<path d=\\\"M4 20h4L19 9l-4-4L4 16z\\\"/><path d=\\\"m13.5 6.5 4 4\\\"/>\", \"link\": \"<path d=\\\"M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1\\\"/><path d=\\\"M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1\\\"/>\", \"compass\": \"<circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"9\\\"/><path d=\\\"m15.5 8.5-2 5-5 2 2-5z\\\"/>\", \"search\": \"<circle cx=\\\"11\\\" cy=\\\"11\\\" r=\\\"7\\\"/><path d=\\\"m20 20-3.5-3.5\\\"/>\", \"signal\": \"<path d=\\\"M1.5 9a15 15 0 0 1 21 0\\\"/><path d=\\\"M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0\\\"/><circle cx=\\\"12\\\" cy=\\\"19.5\\\" r=\\\"1\\\"/>\", \"ruler\": \"<path d=\\\"m3 17 14-14 4 4L7 21z\\\"/><path d=\\\"m7 9 2 2M10 6l2 2M13 3l2 2M4 12l2 2\\\"/>\", \"chevron\": \"<path d=\\\"m6 9 6 6 6-6\\\"/>\", \"plus\": \"<path d=\\\"M12 5v14M5 12h14\\\"/>\", \"bolt\": \"<path d=\\\"M13 2 4 14h7l-1 8 9-12h-7z\\\"/>\", \"check\": \"<path d=\\\"m5 12 5 5 9-10\\\"/>\"}, {\n            calendar: '<rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M3 10h18M8 3v4M16 3v4\"/>',\n            key: '<circle cx=\"8\" cy=\"15\" r=\"4\"/><path d=\"m10.8 12.2 9.2-9.2M17 6l3 3M14.5 8.5l2 2\"/>',\n            eye: '<path d=\"M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>',\n            eyeOff: '<path d=\"M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.4 5.2A10 10 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.1 3.9M6.1 6.2C3.6 7.9 2 12 2 12s3.6 7 10 7a9.6 9.6 0 0 0 4.2-.9\"/>',\n            paste: '<rect x=\"8\" y=\"3\" width=\"8\" height=\"4\" rx=\"1\"/><path d=\"M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2\"/>',\n            arrow: '<path d=\"M5 12h14M13 6l6 6-6 6\"/>',\n            copy: '<rect x=\"9\" y=\"9\" width=\"12\" height=\"12\" rx=\"2\"/><path d=\"M5 15V5a2 2 0 0 1 2-2h10\"/>',\n            alert: '<path d=\"M12 9v4M12 17h.01\"/><path d=\"M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z\"/>',\n            cpu: '<rect x=\"5\" y=\"5\" width=\"14\" height=\"14\" rx=\"2\"/><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"/><path d=\"M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3\"/>'\n        });\n        const ico = (n, px) => '<svg class=\"i\" width=\"' + (px || 16) + '\" height=\"' + (px || 16) + '\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">' + (I[n] || '') + '<\/svg>';\n        const logoSvg = (clase, azul) => '<svg class=\"' + clase + '\" viewBox=\"0 0 910 220\" role=\"img\" aria-label=\"iATEL\">' + (azul ? '<defs><linearGradient id=\"iatel-g\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#1e7bff\"/><stop offset=\".55\" stop-color=\"#2f9bff\"/><stop offset=\"1\" stop-color=\"#5cc0ff\"/><\/linearGradient><\/defs>' : '') + '<path fill=\"' + (azul ? 'url(#iatel-g)' : '#fff') + '\" fill-rule=\"evenodd\" d=\"' + LOGO_D + '\"/><\/svg>';\n\n        /* ---- Cómo es cada herramienta al aparecer (la misma barra que dibuja la herramienta real) ---- */\n        const SKINS = {\n            oceaneMM: { nombre: 'OCEANE PRO', variante: 'MásMóvil', sitio: 'arriba', items: [['refresh', 'Refresh', 'dot'], ['check-circle', 'Cerrar'], ['escalate', 'Escalar'], ['table', 'Excel'], ['keyboard', 'Atajos']] },\n            oceaneMMLista: { nombre: 'OCEANE PRO', variante: 'MásMóvil', sitio: 'arriba', items: [['refresh', 'Refresh', 'dot']] },\n            oceaneCob: { nombre: 'OCEANE PRO', variante: 'Cobertura', sitio: 'arriba', items: [['download', 'Extraer datos'], ['pencil', 'Rellenar padre'], ['link', 'Asociar ICF'], ['compass', 'Rellenar Brújula'], ['table', 'Excel llegadas']] },\n            masivasBru: { nombre: 'MASIVAS PRO', variante: 'Brújula', sitio: 'arriba', items: [['search', 'Analizar masiva'], ['pencil', 'Rellenar móvil'], ['check-circle', 'Cerrar móvil', 'count'], ['table', 'Excel móvil'], [null, 'Gestor', 'field']] },\n            brujulaPro: { nombre: 'BRÚJULA PRO', variante: 'Cobertura móvil', sitio: 'arriba', items: [['signal', 'Nodos', 'count'], ['ruler', 'Medir']] },\n            masivasMaqa: { nombre: 'MASIVAS PRO', variante: 'MAQA', sitio: 'abajo', items: [[null, 'Analizar estado', 'plus']] },\n            reportes: { nombre: 'REPORTES PRO', variante: 'MAQA', sitio: 'arriba', items: [['calendar', 'Reportes', 'chev']] }\n        };\n        const enTicket = () => { try { return !!document.querySelector('span.bold, [id^=\"divCmt\"]') || /ticket|incid|tt=|id=\\d/i.test(location.pathname + location.search + location.hash); } catch (e) { return false; } };\n        // Igual que BRÚJULA PRO: su barra solo vive en la página «Cobertura móvil»\n        const enCobertura = () => { try { return /coverage/i.test(location.pathname) || Array.from(document.querySelectorAll('h1')).some(h => (h.textContent || '').normalize('NFD').replace(/[\\u0300-\\u036f]/g, '').trim().toLowerCase() === 'cobertura movil'); } catch (e) { return false; } };\n        function elegirSkin(herramientas) {\n            const ids = herramientas.map(h => String(h.id).toLowerCase());\n            const hay = (re) => ids.some(id => re.test(id));\n            if (WEB === 'Oceane') {\n                if (hay(/cob/) && !hay(/mm|masmovil|m[aá]sm[oó]vil/)) return SKINS.oceaneCob;\n                // Fuera de un ticket (bandejas, listas) OCEANE PRO solo enseña Refresh: igual que la herramienta real\n                return enTicket() ? SKINS.oceaneMM : SKINS.oceaneMMLista;\n            }\n            if (WEB === 'Brújula') {\n                if (hay(/brujula/) && (enCobertura() || !hay(/masiv/))) return SKINS.brujulaPro;\n                if (hay(/masiv/)) return SKINS.masivasBru;\n            }\n            if (WEB === 'MAQA') {\n                const enSmc = /\\/smc/i.test(location.pathname);\n                if (hay(/report/) && (enSmc || !hay(/masiv/))) return SKINS.reportes;\n                if (hay(/masiv/)) return SKINS.masivasMaqa;\n            }\n            const n = herramientas[0] ? nombreDe(herramientas[0].id) : 'Herramientas';\n            return { nombre: n, variante: WEB, sitio: 'arriba', items: [['check-circle', 'Activo']] };\n        }\n\n        const CSS = `\n:host { all: initial; }\n* { box-sizing: border-box; }\n.ov {\n    --b5: #0099ff; --b6: #007acc; --glow: rgba(0,153,255,.35); --soft: rgba(0,153,255,.12);\n    --ok: #3fb950; --warn: #d29922; --bad: #f85149;\n    --t1: #f0f6fc; --t2: #c9d1d9; --t3: #8b949e; --line: rgba(255,255,255,.10); --line2: rgba(255,255,255,.18); --field: rgba(255,255,255,.05);\n    --bar: rgba(22,27,34,.96); --ease: cubic-bezier(.16,1,.3,1); --pop: cubic-bezier(.34,1.56,.64,1);\n    --mono: \"JetBrains Mono\",\"SF Mono\",Consolas,Menlo,monospace;\n    position: fixed; inset: 0; z-index: 2147483647; display: grid; place-items: center; padding: 20px; overflow: hidden;\n    font: 400 14px/1.55 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif; color: var(--t2); -webkit-font-smoothing: antialiased;\n}\n/* Fondo en su propia capa (sin desenfoque de la web: es lo que más cuesta al navegador) */\n.bg { position: absolute; inset: 0; background: radial-gradient(60% 55% at 50% 40%, rgba(0,70,140,.55), transparent 72%), #05080d; opacity: .94; animation: fade .4s ease-out backwards; }\n.grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(0,153,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,153,255,.07) 1px, transparent 1px); background-size: 48px 48px; -webkit-mask-image: radial-gradient(50% 50% at 50% 45%, #000 15%, transparent 72%); mask-image: radial-gradient(50% 50% at 50% 45%, #000 15%, transparent 72%); }\n.net { position: absolute; inset: 0; width: 100%; height: 100%; }\n.ov.is-go .bg, .ov.is-go .grid, .ov.is-go .net { transition: opacity .8s cubic-bezier(.4,0,.2,1); opacity: 0; }\n.mprep { position: absolute; left: 0; right: 0; top: calc(50% + 30px); text-align: center; font-size: 11px; font-weight: 600; letter-spacing: .06em; color: var(--t3); animation: up .4s var(--ease) .15s both, beat 1.6s ease-in-out .6s infinite; }\n.card.is-fold .mlogo { animation: glow 1.6s ease-in-out .4s infinite; }\n.card.is-morph .mlogo { animation: none; }\n@keyframes glow { 50% { filter: drop-shadow(0 0 22px rgba(0,153,255,.85)); } }\n.flash { position: fixed; border-radius: 8px; pointer-events: none; overflow: hidden; z-index: 3; box-shadow: 0 0 0 1px rgba(0,153,255,.6), 0 0 26px rgba(0,153,255,.45); animation: flashOut .9s ease-out .25s forwards; }\n.flash::after { content: \"\"; position: absolute; top: 0; bottom: 0; width: 40%; left: -45%; background: linear-gradient(100deg, transparent, rgba(127,212,255,.4), transparent); transform: skewX(-18deg); animation: sweep .9s cubic-bezier(.16,1,.3,1) both; }\n@keyframes flashOut { to { box-shadow: 0 0 0 1px rgba(0,153,255,0), 0 0 26px rgba(0,153,255,0); } }\n.mlogo { position: absolute; display: block; width: auto; pointer-events: none; filter: drop-shadow(0 0 14px rgba(0,153,255,.55)); }\n\n.card { position: relative; width: min(440px, 100%); border-radius: 20px; padding: 1px; overflow: hidden; contain: layout paint; animation: rise .7s var(--ease) both .05s;\n    box-shadow: 0 40px 100px rgba(0,0,0,.6), 0 0 70px rgba(0,153,255,.14); }\n.card::before { content: \"\"; position: absolute; left: 50%; top: 50%; width: 160%; aspect-ratio: 1; margin: -80% 0 0 -80%; will-change: transform;\n    background: conic-gradient(from 0deg, transparent 0 64%, #0099ff 76%, #9be2ff 80%, transparent 90%); animation: spin 6s linear infinite; }\n.card.is-busy::before { animation-duration: 1.3s; }\n.card.is-ok::before { background: conic-gradient(from 0deg, transparent 0 60%, #3fb950 76%, #b6f5c0 80%, transparent 90%); }\n.card.is-bad::before { background: conic-gradient(from 0deg, transparent 0 60%, #f85149 76%, #ffc2bd 80%, transparent 90%); animation-duration: 2.6s; }\n.in { position: relative; border-radius: 19px; padding: 28px 28px 20px; background: linear-gradient(180deg, #111822, #0a0e14); }\n.card.is-morph { position: fixed; margin: 0; animation: none; overflow: hidden; background: var(--bar); border: 1px solid var(--line2); padding: 0; box-shadow: 0 12px 40px rgba(0,0,0,.55), 0 0 40px rgba(0,153,255,.25); }\n.card.is-morph::before { display: none; }\n.card.is-fold::before { opacity: 0; transition: opacity .2s ease-in; }\n.card.is-fold { background: #0d1117; transition: background-color .2s; }\n.card.is-morph .in { opacity: 0; }\n.card.is-morph { overflow: visible; }\n\n.head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 24px; }\n.logo { height: 24px; width: auto; display: block; filter: drop-shadow(0 0 12px rgba(0,153,255,.5)); animation: up .6s var(--ease) both .2s; }\n.chip { display: inline-flex; align-items: center; gap: 7px; height: 24px; padding: 0 10px; border-radius: 12px; font-size: 11px; font-weight: 600; color: var(--b5); background: var(--soft); border: 1px solid var(--glow); white-space: nowrap; }\n.chip i { width: 6px; height: 6px; border-radius: 50%; background: currentColor; animation: beat 1.6s ease-in-out infinite; }\n\n.rail { list-style: none; margin: 0 0 22px; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }\n.rail li { display: flex; flex-direction: column; gap: 7px; font-size: 11px; font-weight: 600; color: var(--t3); transition: color .3s; }\n.rail li b { display: block; height: 3px; border-radius: 2px; background: rgba(255,255,255,.08); overflow: hidden; }\n.rail li b::after { content: \"\"; display: block; height: 100%; transform: scaleX(0); transform-origin: left; background: var(--b5); transition: transform .6s var(--ease); }\n.rail li.is-on { color: var(--t1); } .rail li.is-on b::after { transform: scaleX(1); }\n.rail li.is-run { color: var(--t1); } .rail li.is-run b::after { transform: scaleX(.5); animation: load 1s ease-in-out infinite alternate; }\n.rail li.is-done { color: var(--ok); } .rail li.is-done b::after { transform: scaleX(1); background: var(--ok); }\n.rail li.is-bad { color: var(--bad); } .rail li.is-bad b::after { transform: scaleX(1); background: var(--bad); }\n.rail span { display: flex; align-items: center; gap: 6px; }\n.rail em { font-style: normal; font-family: var(--mono); font-size: 10px; opacity: .7; }\n\nh1 { margin: 0 0 8px; color: var(--t1); font-size: 25px; line-height: 1.12; font-weight: 750; letter-spacing: -.02em; }\nh1 span { color: #4cb6ff; }\n.lead { margin: 0 0 20px; color: var(--t3); font-size: 13.5px; }\n.lead b { color: var(--t2); font-weight: 600; }\n.pane > * { animation: up .5s var(--ease) both; }\n.pane > :nth-child(2) { animation-delay: .05s; } .pane > :nth-child(3) { animation-delay: .1s; } .pane > :nth-child(n+4) { animation-delay: .15s; }\n[hidden] { display: none !important; }\n\n.lbl { display: flex; justify-content: space-between; align-items: baseline; font-size: 11px; font-weight: 600; color: var(--t2); margin-bottom: 7px; }\n.lbl small { font-family: var(--mono); font-size: 10px; color: var(--t3); font-weight: 500; }\n.field { display: flex; align-items: center; gap: 4px; height: 50px; padding: 0 6px 0 14px; border-radius: 12px; background: var(--field); border: 1px solid var(--line); transition: border-color .2s, box-shadow .2s, background-color .2s; }\n.field:focus-within { border-color: rgba(0,153,255,.65); background-color: rgba(0,153,255,.06); box-shadow: 0 0 0 4px rgba(0,153,255,.12); }\n.field.is-bad { border-color: rgba(248,81,73,.6); box-shadow: 0 0 0 4px rgba(248,81,73,.12); animation: shake .42s cubic-bezier(.36,.07,.19,.97); }\n.field > .i { color: var(--b5); flex: none; }\ninput { flex: 1; min-width: 0; height: 100%; border: 0; outline: 0; background: transparent; color: var(--t1); font: 600 16px/1 var(--mono); letter-spacing: .14em; padding: 0 6px; caret-color: var(--b5); }\ninput::placeholder { color: rgba(139,148,158,.55); letter-spacing: .1em; font-weight: 500; }\n.ib { flex: none; width: 36px; height: 36px; display: inline-grid; place-items: center; border-radius: 9px; border: 1px solid transparent; background: transparent; color: var(--t3); cursor: pointer; transition: color .15s, background-color .15s, border-color .15s; }\n.ib:hover { color: var(--t1); background-color: rgba(255,255,255,.08); border-color: var(--line); }\n.ib:focus-visible, .btn:focus-visible, .lnk:focus-visible, .dev:focus-visible { outline: 2px solid var(--b5); outline-offset: 2px; }\n\n.msg { display: flex; gap: 9px; align-items: flex-start; margin-top: 12px; padding: 10px 12px; border-radius: 10px; font-size: 12.5px; line-height: 1.5; color: #ffb3ad; background: rgba(248,81,73,.08); border: 1px solid rgba(248,81,73,.28); animation: up .3s var(--ease) both; }\n.msg .i { flex: none; margin-top: 1px; color: var(--bad); }\n.msg.is-warn { color: #f1d38a; background: rgba(210,153,34,.08); border-color: rgba(210,153,34,.3); } .msg.is-warn .i { color: var(--warn); }\n.msg b { color: #fff; font-weight: 600; }\n\n.btn { position: relative; width: 100%; height: 46px; margin-top: 16px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; border-radius: 12px; border: 1px solid var(--b5); border-left-width: 2px; cursor: pointer;\n    font-family: inherit; font-weight: 700; font-size: 14px; line-height: 1; color: #fff; background-color: var(--b5); box-shadow: 0 10px 28px rgba(0,153,255,.32), inset 0 1px 0 rgba(255,255,255,.22); transition: transform .1s, background-color .2s, color .2s, border-color .2s, box-shadow .2s; }\n.btn:hover { background-color: var(--b6); border-color: var(--b6); }\n.btn:hover .i { transform: translateX(3px); }\n.btn .i { transition: transform .25s var(--ease); }\n.btn:active { transform: scale(.98); }\n.btn.is-busy { pointer-events: none; color: var(--b5); background-color: var(--soft); border-color: var(--line); border-left-color: var(--b5); box-shadow: none; }\n.btn.is-ok { pointer-events: none; color: var(--ok); background-color: rgba(63,185,80,.12); border-color: var(--line); border-left-color: var(--ok); box-shadow: none; animation: ring .7s ease-out; }\n.btn.is-warn { color: var(--warn); background-color: rgba(210,153,34,.12); border-color: var(--line); border-left-color: var(--warn); box-shadow: none; animation: shake .42s cubic-bezier(.36,.07,.19,.97); }\n.btn > span, .btn > .i { animation: swap .22s var(--ease) both; }\n.spin { width: 14px; height: 14px; border-radius: 50%; border: 2px solid var(--glow); border-top-color: var(--b5); animation: spin .7s linear infinite; }\n\n.foot { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: 18px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,.06); }\n.lnk { border: 0; background: none; padding: 4px 2px; color: var(--t3); font-family: inherit; font-weight: 600; font-size: 12px; cursor: pointer; transition: color .15s; }\n.lnk:hover { color: var(--t1); }\n.dev { display: inline-flex; align-items: center; gap: 7px; height: 26px; padding: 0 9px; border-radius: 8px; border: 1px solid var(--line); background: rgba(255,255,255,.03); color: var(--t3); font: 500 11px/1 var(--mono); cursor: pointer; transition: color .15s, border-color .15s, background-color .15s; }\n.dev b { color: var(--t2); font-weight: 600; }\n.dev:hover { color: var(--t1); border-color: var(--glow); background-color: var(--soft); }\n.dev.is-ok { color: var(--ok); border-color: rgba(63,185,80,.4); }\n.dev.is-hot { border-color: rgba(210,153,34,.55); color: #f1d38a; box-shadow: 0 0 0 3px rgba(210,153,34,.12); }\n.tip { display: flex; gap: 8px; align-items: flex-start; margin: 12px 0 0; font-size: 11.5px; color: var(--t3); line-height: 1.5; }\n.tip .i { flex: none; margin-top: 1px; color: var(--b5); }\n\n/* ---- La barra de la herramienta (misma anatomía que .ia-toolbar de los userscripts) ---- */\n.tb { position: fixed; display: flex; align-items: center; gap: 6px; padding: 5px 8px; font-size: 11px; color: var(--t1); border-radius: 8px; white-space: nowrap; z-index: 2; }\n.tb.arriba { top: 10px; left: 50%; transform: translateX(-50%); }\n.tb.abajo { right: 16px; bottom: 16px; }\n.tb::before { content: \"\"; position: absolute; inset: 0; z-index: -1; border-radius: inherit; background: rgba(13,17,23,.85); border: 1px solid var(--line2); box-shadow: 0 12px 40px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.15); }\n.tb.is-medir { visibility: hidden; }\n.tb-brand { display: flex; align-items: center; padding: 0 12px 0 2px; margin-right: 4px; border-right: 1px solid var(--line); }\n.tb-brand svg { filter: drop-shadow(0 0 0 transparent); }\n.tb-brand svg { height: 18px; width: auto; display: block; }\n.tb-btn { position: relative; display: inline-flex; align-items: center; gap: 4px; height: 30px; padding: 0 14px; border-radius: 6px; border: 1px solid transparent; border-left: 2px solid transparent; color: var(--t2); font-weight: 600; letter-spacing: .2px; }\n.tb-btn .i { width: 14px; height: 14px; }\n.tb-dot { width: 6px; height: 6px; border-radius: 50%; background: #555; margin-left: 4px; }\n.tb-dot + .i { width: 12px; height: 12px; margin-left: 2px; opacity: .8; }\n.tb-count { min-width: 18px; height: 18px; padding: 0 5px; border-radius: 9px; background: var(--soft); border: 1px solid var(--glow); color: var(--b5); font-size: 9px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; margin-left: 2px; }\n.tb-field { display: flex; align-items: center; gap: 6px; padding-left: 8px; margin-left: 2px; border-left: 1px solid var(--line); color: var(--t3); font-weight: 600; }\n.tb-field i { display: block; width: 74px; height: 22px; border-radius: 6px; background: var(--field); border: 1px solid var(--line); }\n.tb-sweep { position: absolute; inset: 0; border-radius: inherit; overflow: hidden; pointer-events: none; }\n.tb-sweep::after { content: \"\"; position: absolute; top: 0; bottom: 0; width: 45%; left: -50%; background: linear-gradient(100deg, transparent, rgba(127,212,255,.35), transparent); transform: skewX(-18deg); }\n.tb.is-on .tb-brand { animation: brand .9s var(--ease) both; }\n.tb.is-on > .tb-btn, .tb.is-on > .tb-field { animation: item .5s var(--ease) both; }\n.tb.is-on .tb-sweep::after { animation: sweep 1s var(--ease) .35s both; }\n.tb.is-on .tb-dot { animation: dotOn 1s ease-out .9s both; }\n.tb.is-on .tb-btn.is-hi { animation: item .5s var(--ease) both, hi 1.2s ease-out .6s both; }\n.toast { position: fixed; display: flex; align-items: center; gap: 10px; padding: 8px 14px 8px 10px; border-radius: 12px; background: var(--bar); border: 1px solid rgba(63,185,80,.35); box-shadow: 0 14px 40px rgba(0,0,0,.5); color: var(--t1); font-size: 12px; font-weight: 600; z-index: 2; animation: toast .55s var(--pop) both; }\n.toast.arriba { transform: translateX(-50%); }\n\n.toast .ok { width: 22px; height: 22px; border-radius: 50%; display: grid; place-items: center; background: rgba(63,185,80,.15); color: var(--ok); }\n.toast .ok .i { width: 13px; height: 13px; }\n.toast small { color: var(--t3); font-weight: 500; }\n.toast.is-out { animation: toastOut .4s var(--ease) forwards; }\n.tb.is-out { animation: fadeQ .45s ease-out forwards; }\n\n@keyframes fade { from { opacity: 0; } }\n@keyframes fadeQ { to { opacity: 0; } }\n@keyframes rise { from { opacity: 0; transform: translateY(22px) scale(.97); } }\n@keyframes up { from { opacity: 0; transform: translateY(8px); } }\n@keyframes spin { to { transform: rotate(360deg); } }\n@keyframes beat { 50% { opacity: .35; } }\n@keyframes shake { 15%, 55% { transform: translateX(-4px); } 35%, 75% { transform: translateX(4px); } 100% { transform: none; } }\n@keyframes swap { from { opacity: 0; transform: translateY(5px); } }\n@keyframes ring { from { box-shadow: 0 0 0 0 rgba(63,185,80,.5); } to { box-shadow: 0 0 0 12px rgba(63,185,80,0); } }\n@keyframes load { from { transform: scaleX(.15); } to { transform: scaleX(.85); } }\n@keyframes brand { from { filter: drop-shadow(0 0 12px rgba(0,153,255,.9)); } to { filter: drop-shadow(0 0 0 transparent); } }\n@keyframes item { from { opacity: 0; transform: translateY(-6px) scale(.92); } }\n@keyframes sweep { to { left: 120%; } }\n@keyframes dotOn { 40% { background: #0099ff; box-shadow: 0 0 8px rgba(0,153,255,.8); } }\n@keyframes hi { 0% { color: #fff; background: rgba(0,153,255,.22); border-color: rgba(0,153,255,.5); border-left-color: #0099ff; } 100% { } }\n@keyframes toast { from { opacity: 0; transform: translate(-50%, -8px) scale(.9); } }\n@keyframes toastOut { to { opacity: 0; transform: translate(-50%, -6px) scale(.96); } }\n.toast.abajo { animation-name: toastB; } .toast.abajo.is-out { animation-name: toastBOut; }\n@keyframes toastB { from { opacity: 0; transform: translateY(8px) scale(.9); } }\n@keyframes toastBOut { to { opacity: 0; transform: translateY(6px) scale(.96); } }\n@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; } }\n@media (max-width: 480px) { .in { padding: 22px 18px 16px; } h1 { font-size: 22px; } .chip { display: none; } }\n`;\n\n        let raiz = null, sr = null, abierta = false, raf = 0, vigia = 0, alTeclado = null, enviando = false;\n\n        function hojaDeEstilos(shadow) {\n            // Doble vía: hoja adoptada (no la bloquea la CSP de la web) y <style> de respaldo\n            try { const s = new CSSStyleSheet(); s.replaceSync(CSS); shadow.adoptedStyleSheets = [s]; } catch (e) {}\n            const st = document.createElement('style'); st.textContent = CSS; shadow.appendChild(st);\n        }\n\n        function marco() {\n            const equipo = String(GM_getValue('oceane_hwid', '') || '');\n            const corto = equipo.replace(/-/g, '').slice(0, 8) || '—';\n            return `\n<div class=\"ov\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"acc-t\">\n    <div class=\"bg\"><\/div><div class=\"grid\"><\/div>\n    <canvas class=\"net\" aria-hidden=\"true\"><\/canvas>\n    <div class=\"card\"><div class=\"in\">\n        <div class=\"head\">${logoSvg('logo')}<span class=\"chip\"><i><\/i>Conexión cifrada · ${esc(WEB)}<\/span><\/div>\n        <ol class=\"rail\" aria-label=\"Progreso del acceso\">\n            <li class=\"is-on\"><b><\/b><span><em>01<\/em>Clave<\/span><\/li>\n            <li><b><\/b><span><em>02<\/em>Verificación<\/span><\/li>\n            <li><b><\/b><span><em>03<\/em>Herramientas<\/span><\/li>\n        <\/ol>\n        <section class=\"pane\">\n            <h1 id=\"acc-t\">Activa tus <span>herramientas<\/span><\/h1>\n            <p class=\"lead\">Introduce tu clave de acceso. Se vincula a <b>este equipo<\/b> y no tendrás que volver a escribirla.<\/p>\n            <label class=\"lbl\" for=\"acc-k\">Clave de acceso <small>LICENCIA PERSONAL<\/small><\/label>\n            <div class=\"field\">${ico('key', 18)}<input id=\"acc-k\" type=\"password\" autocomplete=\"off\" autocapitalize=\"off\" spellcheck=\"false\" placeholder=\"••••-••••-••••\" aria-describedby=\"acc-m\">\n                <button class=\"ib\" type=\"button\" data-a=\"ver\" aria-label=\"Mostrar la clave\" title=\"Mostrar\">${ico('eye', 17)}<\/button>\n                <button class=\"ib\" type=\"button\" data-a=\"pegar\" aria-label=\"Pegar desde el portapapeles\" title=\"Pegar\">${ico('paste', 17)}<\/button>\n            <\/div>\n            <div class=\"msg\" id=\"acc-m\" role=\"alert\" hidden><\/div>\n            <button class=\"btn\" type=\"button\" data-a=\"entrar\"><span>Entrar<\/span>${ico('arrow', 17)}<\/button>\n            <div class=\"foot\">\n                <button class=\"lnk\" type=\"button\" data-a=\"luego\">Ahora no<\/button>\n                <button class=\"dev\" type=\"button\" data-a=\"equipo\" title=\"Copiar el identificador completo de este equipo\">${ico('cpu', 13)}Equipo <b>${esc(corto)}<\/b>${ico('copy', 12)}<\/button>\n            <\/div>\n            <p class=\"tip\">${ico('bolt', 13)}<span>¿Varias pestañas abiertas? Escribe la clave solo en una: las demás se activan solas.<\/span><\/p>\n        <\/section>\n    <\/div><\/div>\n<\/div>`;\n        }\n\n        const $ = (s) => sr && sr.querySelector(s);\n        const anim = (el, frames, opts) => (el && el.animate && !reducido()) ? el.animate(frames, Object.assign({ duration: 400, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'forwards' }, opts || {})) : null;\n\n        function paso(n, estado) {\n            sr.querySelectorAll('.rail li').forEach((li, i) => {\n                li.className = i < n ? 'is-done' : (i === n ? (estado || 'is-on') : '');\n            });\n        }\n        function estadoTarjeta(clase) { const c = $('.card'); c.classList.remove('is-busy', 'is-ok', 'is-bad'); if (clase) c.classList.add(clase); }\n\n        function boton(tipo, texto) {\n            const b = $('[data-a=\"entrar\"]');\n            b.classList.remove('is-busy', 'is-ok', 'is-warn');\n            if (tipo) { void b.offsetWidth; b.classList.add('is-' + tipo); }\n            const icono = tipo === 'busy' ? '<span class=\"spin\"><\/span>' : tipo === 'ok' ? ico('check', 17) : tipo === 'warn' ? ico('alert', 17) : '';\n            b.innerHTML = tipo === 'busy' || tipo === 'warn' ? icono + '<span>' + esc(texto) + '<\/span>' : '<span>' + esc(texto) + '<\/span>' + (icono || ico('arrow', 17));\n        }\n\n        function mensaje(html, aviso) {\n            const m = $('#acc-m');\n            if (!html) { m.hidden = true; return; }\n            m.className = 'msg' + (aviso ? ' is-warn' : '');\n            m.innerHTML = ico('alert', 15) + '<span>' + html + '<\/span>';\n            m.hidden = false;\n        }\n\n        function explicar(error) {\n            const f = $('.field'), dev = $('[data-a=\"equipo\"]');\n            f.classList.remove('is-bad'); void f.offsetWidth;\n            dev.classList.remove('is-hot');\n            if (error === 'Licencia vinculada a otro equipo') {\n                dev.classList.add('is-hot');\n                mensaje('<b>Esta clave ya está vinculada a otro equipo.<\/b> Pide al administrador que libere tu equipo y pásale el identificador de abajo (se copia con un clic).', true);\n            } else if (error === 'Licencia no válida') {\n                f.classList.add('is-bad');\n                mensaje('<b>La clave no es válida.<\/b> Revísala o pide una nueva al administrador.');\n            } else {\n                f.classList.add('is-bad');\n                mensaje('<b>Acceso denegado.<\/b> ' + esc(error || 'El servidor no ha autorizado esta clave.'));\n            }\n        }\n\n        /* Fondo: red de nodos ligera (pocos nodos, 30 fotogramas por segundo, sin brillos) */\n        function red() {\n            const cv = $('.net'); if (!cv || reducido()) return;\n            const cx = cv.getContext('2d'); let W = 0, H = 0, nodos = [], ultimo = 0;\n            const medir = () => {\n                const d = Math.min(1.5, window.devicePixelRatio || 1); W = cv.clientWidth; H = cv.clientHeight;\n                cv.width = W * d; cv.height = H * d; cx.setTransform(d, 0, 0, d, 0, 0);\n                const n = Math.round(Math.min(38, W * H / 34000));\n                nodos = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .5, vy: (Math.random() - .5) * .5 }));\n            };\n            medir(); window.addEventListener('resize', medir); red.medir = medir;\n            const L = 150, L2 = L * L;\n            const dibujar = (t) => {\n                if (!abierta) return;\n                raf = requestAnimationFrame(dibujar);\n                if (t - ultimo < 33) return; ultimo = t;\n                cx.clearRect(0, 0, W, H);\n                cx.lineWidth = 1;\n                for (const a of nodos) { a.x += a.vx; a.y += a.vy; if (a.x < 0 || a.x > W) a.vx *= -1; if (a.y < 0 || a.y > H) a.vy *= -1; }\n                for (let i = 0; i < nodos.length; i++) for (let j = i + 1; j < nodos.length; j++) {\n                    const a = nodos[i], b = nodos[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;\n                    if (d2 < L2) { cx.strokeStyle = 'rgba(76,182,255,' + ((1 - Math.sqrt(d2) / L) * .22).toFixed(3) + ')'; cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(b.x, b.y); cx.stroke(); }\n                }\n                cx.fillStyle = 'rgba(127,212,255,.75)';\n                for (const a of nodos) cx.fillRect(a.x - 1, a.y - 1, 2, 2);\n            };\n            raf = requestAnimationFrame(dibujar);\n        }\n\n        function limpiarEventos() {\n            clearInterval(vigia); cancelAnimationFrame(raf);\n            if (alTeclado) document.removeEventListener('keydown', alTeclado, true);\n            if (red.medir) window.removeEventListener('resize', red.medir);\n        }\n        function quitar() { if (raiz) raiz.remove(); raiz = sr = null; }\n\n        function cerrar(despues) {\n            if (!abierta) return;\n            abierta = false; limpiarEventos();\n            const a = anim($('.ov'), [{ opacity: 1 }, { opacity: 0 }], { duration: 350 });\n            const fin = () => { quitar(); if (despues) despues(); };\n            if (a) a.onfinish = fin; else fin();\n        }\n\n        /* =================================================================\n           LA TRANSFORMACIÓN: la ventana de acceso se convierte en la herramienta\n             1. el contenido se apaga y la tarjeta queda como una pieza de cristal vacía;\n             2. esa pieza viaja y cambia de forma hasta ocupar el sitio exacto de la barra;\n             3. la barra se enciende (logo, botones uno a uno, barrido de luz);\n             4. se ejecutan las herramientas reales, que aparecen justo debajo, y la barra de paso se desvanece.\n           Solo se animan transformaciones y opacidad: ni desenfoques ni sombras en movimiento.\n           ================================================================= */\n        function barraHTML(skin) {\n            const items = skin.items.map((it, i) => {\n                const [icono, texto, extra] = it;\n                if (extra === 'field') return `<span class=\"tb-field\" style=\"animation-delay:${.28 + i * .06}s\">${esc(texto)}<i><\/i><\/span>`;\n                return `<span class=\"tb-btn${i === 0 ? ' is-hi' : ''}\" style=\"animation-delay:${.28 + i * .06}s\">${icono ? ico(icono, 14) : ''}<span>${esc(texto)}<\/span>${extra === 'dot' ? '<span class=\"tb-dot\"><\/span>' + ico('chevron', 14) : extra === 'count' ? '<span class=\"tb-count\">0<\/span>' : extra === 'plus' ? ico('plus', 14) : extra === 'chev' ? ico('chevron', 12) : ''}<\/span>`;\n            }).join('');\n            return `<div class=\"tb ${skin.sitio} is-medir\" role=\"presentation\"><span class=\"tb-brand\">${logoSvg('', true)}<\/span>${items}<span class=\"tb-sweep\"><\/span><\/div>`;\n        }\n\n        /* Las herramientas reales arrancan YA, invisibles: así la ventana aterriza sobre su barra de verdad\n           (con los botones que toquen en esa página: solo Refresh en la bandeja de Oceane, todos dentro de un ticket…). */\n        function arrancarOcultas(continuar) {\n            const nuevos = [];\n            const ocultar = (n) => {\n                if (n.nodeType !== 1 || n === raiz || /^(SCRIPT|STYLE|LINK|TEXTAREA)$/.test(n.tagName)) return;\n                n.style.setProperty('opacity', '0', 'important');\n                n.style.setProperty('transition', 'none', 'important');\n                nuevos.push(n);\n            };\n            const obs = new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(ocultar)));\n            try { obs.observe(document.body || document.documentElement, { childList: true }); if (document.body) obs.observe(document.documentElement, { childList: true }); } catch (e) {}\n            try { continuar(); } catch (e) { console.error(e); }\n\n            let mostrado = false;\n            const mostrar = () => {\n                if (mostrado) return; mostrado = true; obs.disconnect();\n                nuevos.forEach(n => { n.style.removeProperty('transition'); n.style.removeProperty('opacity'); });\n            };\n            setTimeout(mostrar, 8000);   // pase lo que pase, nada se queda oculto\n\n            const visible = (el) => { const r = el.getBoundingClientRect(); return r.width > 40 && r.height > 12 && r.bottom > 0 && r.top < innerHeight ? r : null; };\n            const buscar = () => {\n                for (const n of nuevos) {\n                    const raizN = n.shadowRoot || n;\n                    for (const el of raizN.querySelectorAll('.ia-toolbar, .tw-dock')) {\n                        const r = visible(el); if (!r) continue;\n                        const marca = el.querySelector('.ia-brand img, .ia-brand svg, .ia-brand');\n                        return { el, r, marca: marca ? marca.getBoundingClientRect() : null };\n                    }\n                }\n                return null;\n            };\n            // Espera a que la barra exista y deje de cambiar de tamaño (p. ej. Oceane decide qué botones enseña)\n            const esperar = (maxMs, listo) => {\n                const t0 = performance.now(); let antes = null;\n                const mirar = () => {\n                    const b = buscar();\n                    if (b && antes && Math.abs(b.r.width - antes.r.width) < 1 && Math.abs(b.r.left - antes.r.left) < 1) return listo(b);\n                    antes = b;\n                    if (performance.now() - t0 > maxMs) return listo(b);\n                    setTimeout(mirar, 90);\n                };\n                mirar();\n            };\n            // Que la barra real haga su propia entrada (la del Design System) justo al aparecer\n            const reanimar = (bar) => {\n                const hijos = Array.from(bar.children);\n                hijos.forEach(h => h.style.setProperty('animation', 'none'));\n                void bar.offsetWidth;\n                hijos.forEach(h => h.style.removeProperty('animation'));\n            };\n            return { esperar, mostrar, reanimar };\n        }\n\n        function transformar(herramientas, continuar) {\n            const skin = elegirSkin(herramientas);\n            const ov = $('.ov'), card = $('.card');\n\n            // Sin animaciones: directo a la herramienta\n            if (reducido()) { abierta = false; limpiarEventos(); quitar(); continuar(); return; }\n            abierta = false; limpiarEventos();\n            ov.style.pointerEvents = 'none';\n\n            const real = arrancarOcultas(continuar);\n            const origen = card.getBoundingClientRect();\n\n            // 1. La ventana se vacía y solo queda el logo, que «respira» mientras la herramienta se prepara\n            const contenido = card.querySelector('.in');\n            card.classList.add('is-fold');\n            anim(contenido, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'scale(.97)' }], { duration: 220, easing: 'ease-in' });\n            const LH0 = 34, LW = (h) => h * 910 / 220;\n            card.insertAdjacentHTML('beforeend', logoSvg('mlogo', true).replace(/iatel-g/g, 'iatel-g2') + `<span class=\"mprep\">Preparando ${esc(skin.nombre)}<\/span>`);\n            const mlogo = card.querySelector('.mlogo'), mprep = card.querySelector('.mprep');\n            const L0 = { left: (origen.width - LW(LH0)) / 2, top: (origen.height - LH0) / 2, height: LH0 };\n            Object.assign(mlogo.style, { left: L0.left + 'px', top: L0.top + 'px', height: L0.height + 'px' });\n            anim(mlogo, [{ opacity: 0, transform: 'scale(.6)' }, { opacity: 1, transform: 'none' }], { duration: 380, easing: 'cubic-bezier(.34,1.56,.64,1)', fill: 'backwards' });\n            const t0 = performance.now();\n\n            real.esperar(3200, (barra) => {\n                // Si la barra real no aparece (en esa página la herramienta no enseña barra), aterriza en una pastilla\n                let destino, marca, tb = null;\n                if (barra) { destino = barra.r; marca = barra.marca || { left: destino.left + 10, top: destino.top + (destino.height - 18) / 2, height: 18 }; }\n                else {\n                    ov.insertAdjacentHTML('beforeend', barraHTML({ sitio: skin.sitio, items: [['check-circle', skin.nombre + ' activo']] }));\n                    tb = ov.querySelector('.tb'); destino = tb.getBoundingClientRect(); marca = tb.querySelector('.tb-brand svg').getBoundingClientRect();\n                }\n                const L1 = { left: marca.left - destino.left - 1, top: marca.top - destino.top - 1, height: marca.height };\n\n                setTimeout(() => {\n                    // 2. Viaje: la pieza de cristal cambia de forma hasta encajar en la barra; el logo acaba en la marca\n                    if (mprep) anim(mprep, [{ opacity: 1 }, { opacity: 0 }], { duration: 160 });\n                    card.classList.add('is-morph');\n                    Object.assign(card.style, { left: origen.left + 'px', top: origen.top + 'px', width: origen.width + 'px', height: origen.height + 'px' });\n                    ov.classList.add('is-go');\n                    const D = 760, EASE = 'cubic-bezier(.55,0,.15,1)';\n                    const viaje = card.animate([\n                        { left: origen.left + 'px', top: origen.top + 'px', width: origen.width + 'px', height: origen.height + 'px', borderRadius: '20px' },\n                        { left: (origen.left + (destino.left - origen.left) * .55) + 'px', top: (origen.top + (destino.top - origen.top) * .7) + 'px', width: (origen.width * .7 + destino.width * .3) + 'px', height: Math.max(destino.height, origen.height * .35) + 'px', borderRadius: '14px', offset: .55 },\n                        { left: destino.left + 'px', top: destino.top + 'px', width: destino.width + 'px', height: destino.height + 'px', borderRadius: '8px' }\n                    ], { duration: D, easing: EASE, fill: 'forwards' });\n                    mlogo.animate([\n                        { left: L0.left + 'px', top: L0.top + 'px', height: L0.height + 'px' },\n                        { left: L1.left + 'px', top: L1.top + 'px', height: L1.height + 'px' }\n                    ], { duration: D, easing: EASE, fill: 'forwards' });\n\n                    viaje.onfinish = () => {\n                        // 3. Aterriza: debajo ya está la herramienta de verdad; la pieza se funde en ella con un destello\n                        if (barra) { real.mostrar(); real.reanimar(barra.el); } else { tb.classList.remove('is-medir'); tb.classList.add('is-on'); }\n                        anim(card, [{ opacity: 1 }, { opacity: 0 }], { duration: 240, easing: 'ease-out' });\n                        ov.insertAdjacentHTML('beforeend', `<div class=\"flash\" style=\"left:${destino.left}px;top:${destino.top}px;width:${destino.width}px;height:${destino.height}px\"><\/div>`);\n                        const otras = herramientas.map(h => nombreDe(h.id)).filter(n => n.indexOf(skin.nombre) !== 0);\n                        const abajo = destino.top > innerHeight / 2;\n                        const pos = abajo ? `bottom:${innerHeight - destino.top + 8}px;right:${innerWidth - destino.right}px` : `top:${destino.bottom + 8}px;left:${destino.left + destino.width / 2}px`;\n                        ov.insertAdjacentHTML('beforeend', `<div class=\"toast ${abajo ? 'abajo' : 'arriba'}\" style=\"${pos}\" role=\"status\"><span class=\"ok\">${ico('check', 13)}<\/span><span>${esc(skin.nombre)} listo${otras.length ? ' <small>· también ' + esc(otras.join(', ')) + '<\/small>' : ''}<\/span><\/div>`);\n                        if (tb) setTimeout(() => tb.classList.add('is-out'), 1500);\n                        setTimeout(() => { const t = ov.querySelector('.toast'); if (t) t.classList.add('is-out'); }, 2400);\n                        setTimeout(() => { real.mostrar(); quitar(); }, 2900);\n                    };\n                }, Math.max(0, 380 - (performance.now() - t0)));\n            });\n        }\n\n        function enviar() {\n            if (enviando) return;\n            const inp = $('#acc-k'), clave = inp.value.trim();\n            if (!clave) { explicar(null); mensaje('<b>Escribe tu clave<\/b> para continuar.', true); inp.focus(); return; }\n            enviando = true;\n            mensaje(null); $('.field').classList.remove('is-bad');\n            GM_setValue(\"oceane_clave\", clave);\n            paso(1, 'is-run'); estadoTarjeta('is-busy'); boton('busy', 'Verificando licencia…');\n            inp.disabled = true;\n            validar({\n                ok: (herramientas, continuar) => {\n                    sr.querySelectorAll('.rail li').forEach(li => li.className = 'is-done');\n                    estadoTarjeta('is-ok'); boton('ok', 'Acceso concedido');\n                    if (!herramientas.length) {\n                        mensaje('Tu clave es válida, pero no tienes herramientas asignadas para <b>' + esc(WEB) + '<\/b>.', true);\n                        setTimeout(() => cerrar(continuar), 2200);\n                        return;\n                    }\n                    setTimeout(() => transformar(herramientas, continuar), 650);\n                },\n                no: (error) => {\n                    enviando = false; inp.disabled = false;\n                    paso(1, 'is-bad'); estadoTarjeta('is-bad'); boton('warn', 'Acceso denegado');\n                    explicar(error);\n                    setTimeout(() => { if (abierta) { boton(null, 'Entrar'); estadoTarjeta(null); } }, 2600);\n                    inp.select(); inp.focus();\n                },\n                red: (texto) => {\n                    enviando = false; inp.disabled = false;\n                    paso(1, 'is-bad'); estadoTarjeta('is-bad'); boton('warn', 'Sin respuesta');\n                    mensaje(esc(texto), true);\n                    setTimeout(() => { if (abierta) { boton(null, 'Reintentar'); estadoTarjeta(null); paso(0); } }, 2200);\n                }\n            });\n        }\n\n        function abrir(opciones) {\n            if (abierta) return;\n            opciones = opciones || {};\n            try {\n                raiz = document.createElement('iatel-acceso');\n                raiz.style.cssText = 'all: initial; position: fixed; inset: 0; z-index: 2147483647;';\n                sr = raiz.attachShadow({ mode: 'closed' });\n                hojaDeEstilos(sr);\n                const tpl = document.createElement('template'); tpl.innerHTML = marco();\n                sr.appendChild(tpl.content);\n                (document.body || document.documentElement).appendChild(raiz);\n            } catch (e) {\n                // Sin Shadow DOM: se mantiene el aviso clásico\n                raiz = null; sr = null;\n                if (opciones.error) { alert('Oceane Pro (Acceso Denegado): ' + opciones.error); return; }\n                const input = prompt(\"IATEL: Introduce tu clave de acceso para Oceane Pro:\");\n                if (input && !GM_getValue(\"oceane_clave\")) { GM_setValue(\"oceane_clave\", input.trim()); validar(); }\n                return;\n            }\n            abierta = true; enviando = false;\n            const inp = $('#acc-k');\n\n            $('[data-a=\"entrar\"]').addEventListener('click', enviar);\n            inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); enviar(); } });\n            inp.addEventListener('input', () => { $('.field').classList.remove('is-bad'); if (!$('#acc-m').hidden && !$('[data-a=\"equipo\"]').classList.contains('is-hot')) mensaje(null); });\n            $('[data-a=\"ver\"]').addEventListener('click', (e) => {\n                const ver = inp.type === 'password'; inp.type = ver ? 'text' : 'password';\n                e.currentTarget.innerHTML = ico(ver ? 'eyeOff' : 'eye', 17); e.currentTarget.setAttribute('aria-label', ver ? 'Ocultar la clave' : 'Mostrar la clave'); inp.focus();\n            });\n            $('[data-a=\"pegar\"]').addEventListener('click', async () => {\n                try { const t = await navigator.clipboard.readText(); if (t) { inp.value = t.trim(); inp.dispatchEvent(new Event('input')); } } catch (e) { mensaje('El navegador no deja leer el portapapeles: pega la clave con <b>Ctrl + V<\/b>.', true); }\n                inp.focus();\n            });\n            $('[data-a=\"equipo\"]').addEventListener('click', (e) => {\n                const b = e.currentTarget; GM_setClipboard(String(GM_getValue('oceane_hwid', '')));\n                b.classList.add('is-ok'); const antes = b.innerHTML; b.innerHTML = ico('check', 13) + 'Identificador copiado';\n                setTimeout(() => { if (abierta) { b.classList.remove('is-ok'); b.innerHTML = antes; } }, 1800);\n            });\n            $('[data-a=\"luego\"]').addEventListener('click', () => cerrar());\n            alTeclado = (e) => { if (e.key === 'Escape' && abierta && !enviando) { e.stopPropagation(); cerrar(); } };\n            document.addEventListener('keydown', alTeclado, true);\n\n            red();\n            if (opciones.error) { paso(1, 'is-bad'); estadoTarjeta('is-bad'); explicar(opciones.error); }\n            setTimeout(() => { if (abierta) inp.focus(); }, 300);\n\n            // Otra pestaña ha guardado la clave: esta se activa sola\n            vigia = setInterval(() => {\n                if (!abierta || enviando) return;\n                if (GM_getValue(\"oceane_clave\", \"\") && !opciones.error) cerrar(() => validar());\n            }, 1200);\n        }\n\n        return { abrir: abrir };\n    })();\n\n    if (!GM_getValue(\"oceane_clave\", \"\")) {\n        Acceso.abrir();\n    } else {\n        arrancarDesdeCache();\n        validar();\n    }\n})();\n";
function resaltarLoader(t) {
    return esc(t).split('\n').map(l => {
        if (/^\s*\/\//.test(l)) return '<span class="c">' + l + '</span>';
        return l.replace(/(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;)/g, '<span class="s">$1</span>')
                .replace(/\b(const|let|function|return|if|else|try|catch|new|typeof)\b/g, '<span class="k">$1</span>');
    }).join('\n');
}
function vistaInstalacion() {
    const logo = $('.ia-brand img').getAttribute('src');
    return `<section class="ws-page"><div class="ws-wrap">
        ${cabecera('Instalación', 'Tres pasos y listo', 'Todas las herramientas llegan a través de un único complemento, LOADER PRO. Es el único código que se instala en tu navegador: el resto se carga de forma segura cuando inicias sesión con tu clave.')}
        <div class="ws-install">
            <ol class="fp-steps ws-steps-big">
                <li class="ws-reveal"><span class="fp-node">1</span><div><h3>Instala Violentmonkey</h3>
                    <p>Es la extensión del navegador que carga las herramientas sobre las webs de trabajo. Funciona en Firefox, Chrome y Edge.</p>
                    <div class="ws-step-actions"><a class="ia-btn ia-btn--outline ia-btn--md" href="https://violentmonkey.github.io/get-it/" target="_blank" rel="noopener">${icono('external', 14)}Descargar Violentmonkey</a></div></div></li>
                <li class="ws-reveal" style="--d:90ms"><span class="fp-node">2</span><div><h3>Instala LOADER PRO</h3>
                    <p>Es el único script que verás en Violentmonkey. Comprueba tu licencia y carga las herramientas que tienes asignadas en cada web. Pulsa <b>Instalar LOADER PRO</b> y confirma en Violentmonkey.</p>
                    <div class="ws-step-actions">
                        <a class="ia-btn ia-btn--primary ia-btn--md" href="${LOADER_ARCHIVO}">${icono('download', 14)}<span>Instalar LOADER PRO</span></a>
                        <button class="ia-btn ia-btn--outline ia-btn--md" id="ld-copiar">${icono('copy', 14)}<span>Copiar código</span></button>
                        <button class="ia-btn ia-btn--outline ia-btn--md" id="ld-ver" aria-expanded="false" aria-controls="ld-codigo">${icono('code', 14)}<span>Ver código</span></button>
                    </div>
                    <p class="ia-hint" style="margin-top:12px">${icono('bolt', 13)}<span>Si el botón no abre Violentmonkey: copia el código, abre Violentmonkey › «+» › Nuevo, pégalo y guarda.</span></p>
                    <div class="ws-card ws-loader-code" id="ld-codigo" hidden>
                        <div class="ws-loader-head">${icono('file', 15)}<b>${LOADER_ARCHIVO}</b><span class="tw-chip">v${LOADER_VERSION}</span><button class="ia-btn ia-btn--md" id="ld-copiar2">${icono('copy', 14)}<span>Copiar</span></button></div>
                        <pre class="ws-loader-pre" tabindex="0" aria-label="Código del Loader">${resaltarLoader(LOADER)}</pre>
                    </div></div></li>
                <li class="ws-reveal" style="--d:180ms"><span class="fp-node">3</span><div><h3>Inicia sesión</h3>
                    <p>Abre Oceane, Brújula o MAQA. Aparecerá la pantalla de acceso: escribe tu clave personal y pulsa <b>Entrar</b>. La clave queda vinculada a tu equipo y no tendrás que volver a escribirla.</p>
                    <div class="ws-step-tags"><span class="ia-chip" data-tono="brand"><i></i>Oceane</span><span class="ia-chip" data-tono="brand"><i></i>Brújula</span><span class="ia-chip" data-tono="brand"><i></i>MAQA</span></div></div></li>
                <li class="ws-reveal" style="--d:270ms"><span class="fp-node is-done">${icono('check', 15)}</span><div><h3>Listo</h3>
                    <p>Tus herramientas aparecen solas en cada web. Cuando publicamos una versión nueva, se aplica al recargar la página: no hay que reinstalar nada.</p></div></li>
            </ol>
            <aside class="ws-aside">
                <div class="ws-reveal" style="--d:120ms">
                    <div class="ws-login" aria-hidden="true"><div class="ws-login-in">
                        <div class="ws-login-head"><img src="${logo}" alt=""><span class="ia-chip" data-tono="brand"><i></i>Conexión cifrada</span></div>
                        <div class="ws-login-rail"><span class="is-on">01 Clave</span><span>02 Verificación</span><span>03 Herramientas</span></div>
                        <h3>Activa tus <span>herramientas</span></h3>
                        <p>Introduce tu clave de acceso. Se vincula a este equipo.</p>
                        <div class="ws-login-field">${icono('login', 16)}<b>••••-••••</b><i></i></div>
                        <div class="ws-login-btn">Entrar ${icono('arrow-right', 15)}</div>
                        <div class="ws-login-foot"><span>Ahora no</span><code>Equipo 92c5df3a</code></div>
                    </div></div>
                    <p class="ws-login-cap">Así es la pantalla de acceso del paso 3.</p>
                </div>
                <div class="ws-card ws-reveal" style="--d:200ms"><div class="tw-section-title">A tener en cuenta</div>
                    <div class="ws-perm">${icono('shield', 16)}<div><b>Una clave por persona</b><span>Se vincula a tu equipo. Si cambias de ordenador, pide al administrador que libere el anterior: el identificador del equipo se copia desde la propia pantalla de acceso.</span></div></div>
                    <div class="ws-perm">${icono('refresh', 16)}<div><b>Siempre al día</b><span>Cada herramienta se descarga en su última versión al iniciar sesión y se guarda para arrancar al instante.</span></div></div>
                    <div class="ws-perm">${icono('layers', 16)}<div><b>Solo lo que te toca</b><span>Cada web carga únicamente las herramientas que tienes asignadas.</span></div></div>
                </div>
            </aside>
        </div>
    </div></section>`;
}
function montarInstalacion(raiz) {
    const copiarLoader = async (e) => { const b = e.currentTarget; const ok = await copiar(LOADER); btnMsg(b, ok ? 'Código copiado' : 'No se pudo copiar', ok ? 'success' : 'warning', 2200); };
    $('#ld-copiar', raiz).onclick = copiarLoader;
    $('#ld-copiar2', raiz).onclick = copiarLoader;
    $('#ld-ver', raiz).onclick = (e) => {
        const panel = $('#ld-codigo', raiz), b = e.currentTarget, abrir = panel.hidden;
        panel.hidden = !abrir; b.setAttribute('aria-expanded', abrir);
        b.querySelector('span').textContent = abrir ? 'Ocultar código' : 'Ver código';
        if (abrir) anim(panel, [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { duration: 360 });
    };
}

function vistaNoEncontrada() {
    return `<section class="ws-page"><div class="ws-wrap"><div class="ia-empty" style="padding:64px">${icono('compass', 28)}<h2 style="margin:16px 0 8px;font-size:22px">Esta página no existe</h2><p style="margin-bottom:20px">Puede que la herramienta haya cambiado de nombre.</p><a class="ia-btn ia-btn--primary ia-btn--md" href="#/herramientas">Ver herramientas</a></div></div></section>`;
}

/* =====================================================================
   NAVEGACIÓN
   ===================================================================== */
const vista = $('#vista');
const nav = $('#nav'), navInd = $('#nav-ind');
const TITULOS = { inicio: 'Inicio', novedades: 'Novedades', instalacion: 'Instalación', herramientas: 'Herramientas' };
function marcarNav(clave) {
    $$('.ia-btn', nav).forEach(a => { const on = a.dataset.ruta === clave; if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    $$('.ia-menu-item', $('#menu-movil')).forEach(a => a.classList.toggle('is-active', a.dataset.ruta === clave));
    $('#bar-title').textContent = TITULOS[clave] || 'IATEL';
    const act = $(`.ia-btn[data-ruta="${clave}"]`, nav);
    if (act) { navInd.style.opacity = 1; navInd.style.width = act.offsetWidth + 'px'; navInd.style.transform = `translateX(${act.offsetLeft}px)`; }
    else navInd.style.opacity = 0;
}
let rutaActual = null, observador = null;
function observarReveal(raiz) {
    if (observador) observador.disconnect();
    if (reducido() || !('IntersectionObserver' in window)) {
        $$('.ws-reveal', raiz).forEach(e => e.classList.add('is-in'));
        $$('[data-cuenta]', raiz).forEach(contar);
        return;
    }
    observador = new IntersectionObserver((ents) => ents.forEach(en => {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-in'); observador.unobserve(en.target);
        $$('[data-cuenta]', en.target).forEach(contar);
    }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    $$('.ws-reveal', raiz).forEach(e => observador.observe(e));
}
function contar(el) {
    const fin = +el.dataset.cuenta; if (el._contado) return; el._contado = true;
    if (reducido()) { el.textContent = fin; return; }
    const t0 = performance.now(), d = 900;
    const paso = (t) => { const p = Math.min(1, (t - t0) / d); el.textContent = Math.round(fin * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(paso); };
    requestAnimationFrame(paso);
}
function route() {
    const hash = decodeURIComponent((location.hash || '#/').slice(1)) || '/';
    const partes = hash.split('/').filter(Boolean);
    const seccion = partes[0] || 'inicio';
    let html = '', montar = null, claveNav = seccion, anclaje = null, clave = hash;
    if (seccion === 'inicio' || seccion === 'novedades') { html = vistaInicio(); montar = (r) => { hidratarTarjetas(r); montarEscenas(r); cargarNovedades(r); }; anclaje = seccion === 'inicio' ? null : seccion; clave = '/'; }
    else if (seccion === 'herramientas' && partes[1]) { const h = herramienta(partes[1]); html = vistaFicha(h); montar = h ? (r) => montarFicha(r, h) : null; claveNav = 'herramientas'; }
    else if (seccion === 'herramientas') { html = vistaCatalogo(); montar = montarCatalogo; }
    else if (seccion === 'instalacion') { html = vistaInstalacion(); montar = montarInstalacion; }
    else { html = vistaNoEncontrada(); claveNav = null; }

    const misma = rutaActual === clave;
    rutaActual = clave;
    marcarNav(anclaje || claveNav);
    cerrarMenu();
    document.title = (TITULOS[anclaje || claveNav] && claveNav !== 'inicio' ? TITULOS[anclaje || claveNav] + ' · ' : '') + 'iATEL · Herramientas';
    // Misma página de inicio: solo hay que desplazarse al ancla
    if (misma && clave === '/') { irA(anclaje); return; }
    const pintar = () => {
        pararEscenas(); demoTimers.forEach(clearInterval); demoTimers = [];
        vista.innerHTML = html;
        if (montar) montar(vista);
        observarReveal(vista);
        if (anclaje) requestAnimationFrame(() => irA(anclaje, true));
        else if (clave === '/' && introVista()) { const it = $('#intro'); window.scrollTo({ top: it ? it.offsetTop + it.offsetHeight - window.innerHeight : 0, behavior: 'instant' }); }
        else window.scrollTo({ top: 0, behavior: 'instant' });
        anim(vista, [{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], { duration: 420 });
    };
    if (vista.firstElementChild && !reducido()) {
        const a = anim(vista, [{ opacity: 1 }, { opacity: 0 }], { duration: 120, easing: 'ease-in', fill: 'forwards' });
        if (a) a.onfinish = () => { a.cancel(); pintar(); }; else pintar();
    } else pintar();
}
/* La entrada con el logo se ve completa la primera vez de cada sesión; al volver a Inicio se empieza en la portada */
const introVista = () => { try { return sessionStorage.getItem('ws-intro') === '1'; } catch (e) { return false; } };
function marcarIntroVista() { try { sessionStorage.setItem('ws-intro', '1'); } catch (e) {} }
function irA(id, instantaneo) {
    if (!id) { window.scrollTo({ top: 0, behavior: reducido() ? 'auto' : 'smooth' }); return; }
    const el = document.getElementById(id); if (!el) return;
    $$('.ws-reveal', el).forEach(x => x.classList.add('is-in'));
    el.scrollIntoView({ behavior: instantaneo || reducido() ? 'auto' : 'smooth' });
}
window.addEventListener('hashchange', route);
window.addEventListener('resize', () => marcarNav($('.ia-btn[aria-current]', nav) ? $('.ia-btn[aria-current]', nav).dataset.ruta : null));
// En Inicio, la barra sigue la sección visible (Novedades)
window.addEventListener('scroll', () => {
    if (rutaActual !== '/') return;
    const y = window.scrollY + 140;
    const sec = ['novedades'].find(id => { const e = document.getElementById(id); return e && e.offsetTop <= y; });
    const actual = $('.ia-btn[aria-current]', nav), quiere = sec || 'inicio';
    if (!actual || actual.dataset.ruta !== quiere) marcarNav(quiere);
}, { passive: true });

/* Menú en móvil (mismo menú desplegable del sistema) */
const menuBtn = $('#menu-btn'), menuMovil = $('#menu-movil');
menuBtn.innerHTML = icono('menu', 18);
menuMovil.innerHTML = Object.keys(TITULOS).map(k => `<a class="ia-menu-item" role="menuitem" href="#/${k === 'inicio' ? '' : k}" data-ruta="${k}">${esc(TITULOS[k])}</a>`).join('');
function cerrarMenu() { menuMovil.classList.remove('is-open'); menuBtn.setAttribute('aria-expanded', 'false'); }
menuBtn.onclick = (e) => { e.stopPropagation(); const ab = !menuMovil.classList.contains('is-open'); menuMovil.classList.toggle('is-open', ab); menuBtn.setAttribute('aria-expanded', ab); };
document.addEventListener('click', (e) => { if (!e.target.closest('.ws-menu-wrap')) cerrarMenu(); });

/* Brillo que sigue al cursor en las tarjetas */
document.addEventListener('pointermove', (e) => {
    const c = e.target.closest && e.target.closest('.ws-card'); if (!c) return;
    const r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px');
}, { passive: true });

route();
requestAnimationFrame(() => marcarNav($('.ia-btn[aria-current]', nav) ? $('.ia-btn[aria-current]', nav).dataset.ruta : 'inicio'));
})();
</script>
</body>
</html>/ ==UserScript==
// @name         BRUJULA PRO
// @namespace    Violentmonkey Scripts
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABT0lEQVQ4T42RvS9DURjGfy+taCNEdJBYqokRQwcdDEisJlaLiAGTv8BssvsbLAaJREIsNh+xSIcOSDRBEB+ht33l3NPT3nt7qd9yznnOe55znvdIZRkFATP4CIIGVm4nrDvEGoSJL41irWMN/kecgZkZ3RFdN3DBxBk0kwYJq8FVi0FYjuO3vTY9iDtmNIPV2xjEETb9sweO+G+1Z3wDEdD6ftPKzcJPbmJtGxEiD2uxiVZYIr9gaS20SsBqIAu5AryWEW81rTK7gVa/4eUekilbmOxGulKQ7kcv9pD8PHpzDj0ZpDNB7WTHzy3e5phKYRH9eEIyOfRgC8bnkOEJe/31EQyNoqVTJJOFkSn0bBc93K5HWElox8waWq3A1ztc7cPkEvL2iFY+4aEENQ+ZXofnO/T2EnoH/YtMqEgPXM5IH1J9SH4BisdoudiQzeQHb9SQjlYmmBsAAAAASUVORK5CYII=
// @version      2.0.0
// @match        https://brujula.orange.es/coverage*
// @match        http://mxmefm01.wnet/*
// @match        https://calipso-oceane.sso.infra.ftgroup/binOceane/*
// @run-at       document-end
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @connect      pruebabrujula-7221e-default-rtdb.europe-west1.firebasedatabase.app
//
// @author       Sergio Pacheco, Javier Marchal, Gemini, Claude, ChatGPT
// @description  Lote, Abrir TODO, Retención menú, Calculadora de Distancia y Auth Firebase
// ==/UserScript==

(function() {
    'use strict';

    // =====================================================================
    // IATELECOM DESIGN SYSTEM v1.10  (bloque reutilizable: copiar tal cual a otros scripts)
    // Aislamiento: Shadow DOM (host #brujula-mapa-host). Sin CSS global, sin dependencias externas.
    // =====================================================================

    // Logo corporativo (degradado azul, para superficies oscuras). PNG 910x220 incrustado: sin peticiones externas.
    // Si se deja vacío se muestra el wordmark de texto "IATelecom".
    const IADS_LOGO = "data:image/png;base64,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";

    const IADS_ICONS = {
        'refresh':  '<path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/>',
        'check-circle': '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
        'check':    '<path d="m5 12 5 5 9-10"/>',
        'table':    '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16"/>',
        'keyboard': '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>',
        'bolt':     '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
        'x':        '<path d="M18 6 6 18M6 6l12 12"/>',
        'alert':    '<path d="M12 3 2 21h20z"/><path d="M12 10v5M12 18h.01"/>',
        'chevron':  '<path d="m6 9 6 6 6-6"/>',
        'chevron-right': '<path d="m9 6 6 6-6 6"/>',
        'pencil':   '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
        'plus':     '<path d="M12 5v14M5 12h14"/>',
        'trash':    '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
        'escalate': '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
        'compass':  '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
        'minus':    '<path d="M5 12h14"/>',
        'lock':     '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
        'cpu':      '<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4"/>',
        'search':   '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
        'ruler':    '<path d="M3 16 16 3l5 5L8 21z"/><path d="m7 12 2 2M10 9l2 2M13 6l2 2"/>',
        'signal':   '<path d="M12 20h.01"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M5 13a10 10 0 0 1 14 0"/>',
        'grid':     '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
        'ticket':   '<path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4z"/><path d="M13 6v12"/>',
        'file':     '<path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4M9 13h6M9 17h6"/>',
        'more':     '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
        'pin':      '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'
    };

    function iaIcon(name, size) {
        const px = size || 14;
        return '<svg class="ia-icon" data-i="' + name + '" width="' + px + '" height="' + px + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (IADS_ICONS[name] || '') + '</svg>';
    }

    // --- MOVIMIENTO (JS) ---
    // Animaciones con Web Animations API. Si el sistema pide reducir movimiento, no se anima nada y el cambio es inmediato.
    const IADS_EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
    const IADS_EASE_POP = 'cubic-bezier(0.34, 1.56, 0.64, 1)';
    function iaMovimientoReducido() { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
    function iaAnim(el, frames, opts) {
        if (!el || !el.animate || iaMovimientoReducido()) return null;
        try { return el.animate(frames, Object.assign({ duration: 200, easing: IADS_EASE }, opts || {})); } catch (e) { return null; }
    }
    // Cambia el contenido de un botón animando su ancho, para que la barra no dé saltos
    function iaCambioSuave(btn, cambiar) {
        const w0 = btn.getBoundingClientRect().width;                            // ancho que se ve ahora (aunque esté animándose)
        if (btn._iaAncho) { btn._iaAncho.cancel(); btn._iaAncho = null; }
        cambiar();
        const w1 = btn.getBoundingClientRect().width;
        if (Math.abs(w1 - w0) > 1) btn._iaAncho = iaAnim(btn, [{ width: w0 + 'px' }, { width: w1 + 'px' }], { duration: 240 });
    }
    // Modales: entrada por CSS (al pasar de oculto a visible); salida con fundido y después se ocultan
    function iaAbrirOverlay(ov) {
        if (!ov) return;
        if (ov._iaCierre) { ov._iaCierre.forEach(a => a.cancel()); ov._iaCierre = null; }
        ov.style.display = 'flex';
    }
    function iaCerrarOverlay(ov) {
        if (!ov || ov._iaCierre) return;
        if (getComputedStyle(ov).display === 'none') { ov.style.display = 'none'; return; }
        const anims = [
            iaAnim(ov, [{ opacity: 1 }, { opacity: 0 }], { duration: 150, easing: 'ease-in', fill: 'forwards' }),
            iaAnim(ov.firstElementChild, [{ transform: 'none' }, { transform: 'translateY(8px) scale(0.97)' }], { duration: 150, easing: 'ease-in', fill: 'forwards' })
        ].filter(Boolean);
        if (!anims.length) { ov.style.display = 'none'; return; }
        ov._iaCierre = anims;
        anims[0].onfinish = () => { ov.style.display = 'none'; anims.forEach(a => a.cancel()); ov._iaCierre = null; };
    }

    const IADS_CSS = `
        :host { all: initial; }
        *, *::before, *::after { box-sizing: border-box; }

        /* ---------- TOKENS ---------- */
        :host {
            /* Color · marca */
            --ia-brand-500: #0099ff;
            --ia-brand-600: #007acc;
            --ia-brand-glow: rgba(0, 153, 255, 0.35);
            --ia-brand-soft: rgba(0, 153, 255, 0.12);
            /* Color · estado */
            --ia-success: #3fb950;
            --ia-warning: #d29922;
            --ia-danger: #f85149;
            /* Color · superficies */
            --ia-surface-glass: rgba(13, 17, 23, 0.65);
            --ia-surface-bar: rgba(13, 17, 23, 0.85);
            --ia-surface-raised: rgba(13, 17, 23, 0.88);
            --ia-surface-modal: rgba(13, 17, 23, 0.97);
            --ia-surface-solid: #0d1117;
            --ia-hover: rgba(255, 255, 255, 0.08);
            --ia-field: rgba(255, 255, 255, 0.05);
            --ia-overlay: rgba(0, 0, 0, 0.65);
            /* Color · bordes y texto */
            --ia-border: rgba(255, 255, 255, 0.10);
            --ia-border-strong: rgba(255, 255, 255, 0.18);
            --ia-border-focus: rgba(0, 153, 255, 0.60);
            --ia-text: #f0f6fc;
            --ia-text-2: #c9d1d9;
            --ia-text-3: #8b949e;
            --ia-dot-off: #555555;
            /* Tipografía */
            --ia-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            --ia-mono: "JetBrains Mono", "SF Mono", Consolas, Menlo, monospace;
            --ia-fs-2xs: 9px;
            --ia-fs-xs: 11px;
            --ia-fs-sm: 12px;
            --ia-fs-lg: 15px;
            /* Espaciado (rejilla de 2/4 px) */
            --ia-sp-1: 4px;
            --ia-sp-2: 6px;
            --ia-sp-3: 8px;
            --ia-sp-4: 12px;
            --ia-sp-5: 16px;
            --ia-sp-6: 24px;
            /* Radios */
            --ia-r-sm: 4px;
            --ia-r-md: 6px;
            --ia-r-lg: 8px;
            --ia-r-xl: 10px;
            /* Sombras */
            --ia-sh-bar: 0 12px 40px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.15);
            --ia-sh-menu: 0 16px 36px rgba(0, 0, 0, 0.60), 0 0 1px rgba(255, 255, 255, 0.20);
            --ia-sh-modal: 0 24px 60px rgba(0, 0, 0, 0.70);
            --ia-sh-fab: 0 4px 16px rgba(0, 0, 0, 0.30);
            /* Movimiento */
            --ia-ease: cubic-bezier(0.16, 1, 0.3, 1);
            --ia-ease-pop: cubic-bezier(0.34, 1.56, 0.64, 1);
            /* Capas */
            --ia-z-menu: 9999;
            --ia-z-bar: 9999999;
            --ia-z-modal: 2147483646;
            --ia-z-top: 2147483647;
        }

        .ia-icon { flex: none; }
        .ia-hidden { display: none !important; }
        .ia-stack { display: flex; flex-direction: column; gap: var(--ia-sp-2); }
        .ia-mt { margin-top: var(--ia-sp-2); }

        /* ---------- TOOLBAR ---------- */
        .ia-toolbar { position: fixed; top: 10px; left: 0; right: 0; margin: 0 auto; width: max-content; display: flex; align-items: center; padding: 5px var(--ia-sp-3); gap: var(--ia-sp-2); font-family: var(--ia-font); font-size: var(--ia-fs-xs); color: var(--ia-text); z-index: var(--ia-z-bar); border-radius: var(--ia-r-lg); user-select: none; }
        .ia-toolbar::before { content: ""; position: absolute; inset: 0; backdrop-filter: blur(14px) saturate(180%); -webkit-backdrop-filter: blur(14px) saturate(180%); background-color: var(--ia-surface-bar); border: 1px solid var(--ia-border-strong); border-radius: var(--ia-r-lg); box-shadow: var(--ia-sh-bar); z-index: -1; }

        .ia-brand { display: flex; align-items: center; padding-right: var(--ia-sp-4); margin-right: var(--ia-sp-1); border-right: 1px solid var(--ia-border); }
        .ia-brand img { height: 18px; width: auto; display: block; }
        .ia-brand { padding-left: 2px; }
        .ia-wordmark { font-weight: 700; font-size: var(--ia-fs-sm); letter-spacing: 0.2px; color: var(--ia-text); }

        /* ---------- BOTÓN ---------- */
        .ia-btn { background: transparent; color: var(--ia-text-2); border: 1px solid transparent; border-left: 2px solid transparent; padding: 0 10px; border-radius: var(--ia-r-md); cursor: pointer; font-family: inherit; font-weight: 600; font-size: var(--ia-fs-xs); letter-spacing: 0.2px; transition: all 0.18s var(--ia-ease); height: 26px; display: inline-flex; align-items: center; justify-content: center; white-space: nowrap; gap: var(--ia-sp-1); }
        .ia-modal .ia-btn { height: 30px; padding: 0 14px; }
        .ia-btn:hover { color: var(--ia-text); background-color: var(--ia-hover); border-color: var(--ia-border); }
        .ia-btn:active { transform: scale(0.96); transition-duration: 0.06s; }
        .ia-btn { overflow: hidden; }
        .ia-btn:focus-visible, .ia-menu-item:focus-visible, .ia-icon-btn:focus-visible { outline: 2px solid var(--ia-brand-500); outline-offset: 1px; }
        .ia-btn.is-active { color: var(--ia-brand-500); border-left-color: var(--ia-brand-500); background-color: var(--ia-brand-soft); box-shadow: inset 0 0 12px rgba(0, 153, 255, 0.05); }
        .ia-btn--primary { background-color: var(--ia-brand-500); border-color: var(--ia-brand-500); color: #fff; }
        .ia-btn--primary:hover { background-color: var(--ia-brand-600); border-color: var(--ia-brand-600); color: #fff; box-shadow: 0 0 14px var(--ia-brand-glow); }
        .ia-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        /* Estados del botón: el propio botón muestra el progreso y el resultado */
        .ia-btn.is-busy { color: var(--ia-brand-500); border-color: var(--ia-border); border-left-color: var(--ia-brand-500); background-color: var(--ia-brand-soft); pointer-events: none; cursor: progress; }
        .ia-btn.is-success { color: var(--ia-success); border-color: var(--ia-border); border-left-color: var(--ia-success); background-color: rgba(63, 185, 80, 0.12); box-shadow: none; }
        .ia-btn.is-warning { color: var(--ia-warning); border-color: var(--ia-border); border-left-color: var(--ia-warning); background-color: rgba(210, 153, 34, 0.12); box-shadow: none; }

        /* ---------- MENÚ DESPLEGABLE ---------- */
        .ia-menu { display: none; position: absolute; top: calc(100% + 8px); left: 50%; transform: translateX(-50%); background-color: var(--ia-surface-raised); backdrop-filter: blur(16px) saturate(180%); -webkit-backdrop-filter: blur(16px) saturate(180%); border: 1px solid var(--ia-border); border-radius: var(--ia-r-lg); width: max-content; box-shadow: var(--ia-sh-menu); z-index: var(--ia-z-menu); padding: var(--ia-sp-2); animation: ia-menu-in 0.18s var(--ia-ease); }
        .ia-menu-item { display: block; width: 100%; background: transparent; color: var(--ia-text-2); border: none; border-left: 2px solid transparent; padding: 7px var(--ia-sp-4); cursor: pointer; text-align: left; font-family: inherit; font-size: var(--ia-fs-sm); font-weight: 500; border-radius: var(--ia-r-sm); transition: all 0.15s ease; white-space: nowrap; }
        .ia-menu-item:hover { color: var(--ia-brand-500); border-left-color: var(--ia-brand-500); background-color: var(--ia-brand-soft); padding-left: 14px; }
        .ia-menu-item.is-active { color: var(--ia-brand-500); border-left-color: var(--ia-brand-500); background-color: var(--ia-brand-soft); font-weight: 600; }
        /* Grupos dentro de un menú: encabezado fijo al hacer scroll + opciones sangradas */
        .ia-menu-group { position: sticky; top: calc(-1 * var(--ia-sp-2)); z-index: 1; display: flex; align-items: center; gap: var(--ia-sp-2); margin: var(--ia-sp-2) calc(-1 * var(--ia-sp-2)) 2px; padding: var(--ia-sp-3) var(--ia-sp-4) var(--ia-sp-2); background-color: var(--ia-surface-solid); border-top: 1px solid var(--ia-border); font-size: var(--ia-fs-xs); font-weight: 700; letter-spacing: 0.2px; color: var(--ia-text); }
        .ia-menu-group::before { content: ""; width: 3px; height: 12px; border-radius: 2px; background-color: var(--ia-brand-500); }
        .ia-menu-group-count { margin-left: auto; font-weight: 500; color: var(--ia-text-3); }
        .ia-menu-section { position: relative; }
        .ia-menu-item--grouped { padding-left: 22px; }
        .ia-menu-item--grouped:hover { padding-left: 26px; }
        .ia-menu-item--custom { display: flex; align-items: center; gap: var(--ia-sp-2); color: var(--ia-brand-500); font-weight: 600; }
        .ia-menu-sep { height: 1px; margin: var(--ia-sp-1) 0; background-color: var(--ia-border); }

        /* Desplegable de campo: mismo botón y mismo menú que Refresh */
        .ia-dd { position: relative; width: 100%; }
        .ia-dd-trigger { width: 100%; justify-content: space-between; border-color: var(--ia-border); background-color: var(--ia-field); font-weight: 500; font-size: var(--ia-fs-sm); }
        .ia-dd-label { flex: 1; min-width: 0; display: flex; align-items: center; gap: var(--ia-sp-1); text-align: left; overflow: hidden; }
        .ia-dd-text { overflow: hidden; text-overflow: ellipsis; }
        .ia-dd-group { flex: none; color: var(--ia-text-3); font-weight: 600; }
        .ia-dd-label .ia-icon { color: var(--ia-text-3); }
        .ia-dd.is-placeholder .ia-dd-label { color: var(--ia-text-3); }
        .ia-dd-menu { position: fixed; transform: none; max-width: 92vw; overflow-y: auto; animation: ia-dd-in 0.15s var(--ia-ease); }

        /* ---------- INDICADOR DE ESTADO (punto) ---------- */
        .ia-dot { width: 6px; height: 6px; border-radius: 50%; background-color: var(--ia-dot-off); margin-left: var(--ia-sp-1); display: inline-block; transition: background-color 0.25s ease, box-shadow 0.25s ease; }
        .ia-dot.is-on { background-color: var(--ia-brand-500); box-shadow: 0 0 6px var(--ia-brand-glow); }
        .ia-pulse { animation: ia-pulse 0.3s var(--ia-ease); }

        /* ---------- INDICADOR DE CARGA ---------- */
        .ia-spinner { width: 10px; height: 10px; flex: none; border-radius: 50%; border: 2px solid var(--ia-brand-glow); border-top-color: var(--ia-brand-500); animation: ia-spin 0.7s linear infinite; }

        /* ---------- MODAL ---------- */
        .ia-overlay { display: none; position: fixed; inset: 0; background: var(--ia-overlay); z-index: var(--ia-z-modal); align-items: center; justify-content: center; font-family: var(--ia-font); }
        .ia-modal { background-color: var(--ia-surface-modal); border: 1px solid var(--ia-border); border-radius: var(--ia-r-xl); padding: var(--ia-sp-6); width: 440px; max-width: 92vw; max-height: 90vh; overflow-y: auto; box-shadow: var(--ia-sh-modal); color: var(--ia-text); }
        .ia-modal-title { font-size: var(--ia-fs-lg); font-weight: 700; margin-bottom: var(--ia-sp-5); color: var(--ia-brand-500); display: flex; align-items: center; gap: var(--ia-sp-2); }
        .ia-modal-footer { display: flex; justify-content: flex-end; gap: 10px; margin-top: 10px; }
        .ia-section + .ia-modal-footer { margin-top: var(--ia-sp-5); }
        .ia-section-label { font-size: var(--ia-fs-xs); font-weight: 600; margin-bottom: var(--ia-sp-3); color: var(--ia-text-2); }
        .ia-section-label--accent { color: var(--ia-brand-500); display: flex; align-items: center; gap: var(--ia-sp-1); }

        /* ---------- CAMPOS ---------- */
        .ia-field { margin-bottom: var(--ia-sp-5); display: flex; flex-direction: column; gap: var(--ia-sp-2); }
        .ia-field--divided { border-top: 1px solid var(--ia-border); padding-top: var(--ia-sp-5); }
        .ia-label { font-size: var(--ia-fs-xs); color: var(--ia-text-2); font-weight: 600; }
        .ia-control { background-color: var(--ia-field); border: 1px solid var(--ia-border); color: var(--ia-text); border-radius: var(--ia-r-md); padding: 0 10px; height: 30px; font-size: var(--ia-fs-xs); font-weight: 500; font-family: inherit; outline: none; width: 100%; transition: border-color 0.2s; }
        .ia-control:focus { border-color: var(--ia-border-focus); box-shadow: 0 0 0 2px rgba(0, 153, 255, 0.15); }
        textarea.ia-control { height: auto; min-height: 75px; padding: var(--ia-sp-3) 10px; resize: vertical; }
        .ia-capture { font-family: var(--ia-mono); font-size: var(--ia-fs-sm); font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; color: var(--ia-brand-500); cursor: pointer; }
        .ia-capture::placeholder { color: var(--ia-text-3); font-weight: 500; font-family: var(--ia-font); font-size: var(--ia-fs-xs); letter-spacing: 0; text-transform: none; }

        /* ---------- SUBPANEL (opciones que dependen de una selección) ---------- */
        .ia-subpanel { display: flex; flex-direction: column; gap: 10px; margin-top: 2px; padding: var(--ia-sp-4); background-color: rgba(0, 153, 255, 0.05); border: 1px solid var(--ia-border); border-left: 2px solid var(--ia-brand-500); border-radius: var(--ia-r-md); animation: ia-dd-in 0.15s var(--ia-ease); }
        .ia-subpanel-head { display: flex; align-items: center; gap: var(--ia-sp-2); font-size: var(--ia-fs-xs); font-weight: 700; color: var(--ia-brand-500); }
        .ia-subrow { display: grid; grid-template-columns: 76px 1fr; align-items: center; gap: var(--ia-sp-3); }
        .ia-subrow--stack { grid-template-columns: 1fr; gap: var(--ia-sp-2); }
        .ia-sublabel { font-size: var(--ia-fs-xs); font-weight: 600; color: var(--ia-text-2); }
        .ia-subgrid { display: flex; flex-direction: column; gap: var(--ia-sp-3); }
        .ia-is-off { display: none !important; }
        .ia-optional { font-weight: 500; color: var(--ia-text-3); }
        .ia-upper { text-transform: uppercase; }
        .ia-upper::placeholder { text-transform: none; }
        .ia-hint { display: flex; align-items: center; gap: var(--ia-sp-1); font-size: var(--ia-fs-xs); color: var(--ia-brand-500); }
        .ia-hint--muted { color: var(--ia-text-3); }

        /* ---------- LISTA DE ATAJOS ---------- */
        .ia-section { display: flex; flex-direction: column; gap: var(--ia-sp-3); }
        .ia-section + .ia-section { margin-top: var(--ia-sp-5); padding-top: var(--ia-sp-5); border-top: 1px solid var(--ia-border); }
        .ia-section-head { display: flex; align-items: center; gap: var(--ia-sp-2); font-size: var(--ia-fs-xs); font-weight: 700; color: var(--ia-text); }
        .ia-section-head .ia-icon { color: var(--ia-brand-500); }
        .ia-count { margin-left: auto; min-width: 18px; height: 18px; padding: 0 5px; border-radius: 9px; background: var(--ia-brand-soft); border: 1px solid var(--ia-brand-glow); color: var(--ia-brand-500); font-size: var(--ia-fs-2xs); font-weight: 700; display: inline-flex; align-items: center; justify-content: center; }
        .ia-shortcut-list { max-height: 196px; overflow-y: auto; display: flex; flex-direction: column; gap: var(--ia-sp-2); }
        .ia-empty { padding: var(--ia-sp-4); border: 1px dashed var(--ia-border-strong); border-radius: var(--ia-r-md); color: var(--ia-text-3); font-size: var(--ia-fs-xs); text-align: center; }
        .ia-shortcut { display: flex; align-items: center; gap: 10px; min-height: 40px; padding: var(--ia-sp-2) var(--ia-sp-2) var(--ia-sp-2) var(--ia-sp-4); background: var(--ia-field); border: 1px solid var(--ia-border); border-left: 2px solid var(--ia-brand-500); border-radius: var(--ia-r-md); transition: border-color 0.15s ease, background-color 0.15s ease; }
        .ia-shortcut:hover { background-color: var(--ia-hover); border-color: var(--ia-border-strong); border-left-color: var(--ia-brand-500); }
        .ia-kbd-group { flex: none; display: inline-flex; align-items: center; gap: 3px; color: var(--ia-text-3); font-size: var(--ia-fs-2xs); }
        .ia-kbd { font-family: var(--ia-mono); background: var(--ia-brand-soft); color: var(--ia-brand-500); padding: 2px var(--ia-sp-2); border-radius: var(--ia-r-sm); font-size: var(--ia-fs-xs); font-weight: 700; border: 1px solid var(--ia-brand-glow); }
        .ia-shortcut-desc { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
        .ia-shortcut-main { font-size: var(--ia-fs-sm); font-weight: 600; color: var(--ia-text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .ia-shortcut-sub { font-size: var(--ia-fs-xs); color: var(--ia-text-3); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .ia-capture-wrap { position: relative; display: flex; align-items: center; }
        .ia-capture-wrap .ia-icon { position: absolute; left: 10px; color: var(--ia-text-3); pointer-events: none; }
        .ia-capture-wrap .ia-control { padding-left: 32px; }
        .ia-icon-btn { flex: none; width: 28px; height: 28px; background: transparent; border: 1px solid transparent; color: var(--ia-text-3); cursor: pointer; border-radius: var(--ia-r-sm); display: inline-flex; align-items: center; justify-content: center; transition: all 0.15s ease; }
        .ia-icon-btn:hover { color: var(--ia-danger); background: rgba(248, 81, 73, 0.1); border-color: rgba(248, 81, 73, 0.3); }

        /* ---------- MOVIMIENTO ---------- */
        @keyframes ia-menu-in { from { opacity: 0; transform: translate(-50%, -4px); } to { opacity: 1; transform: translate(-50%, 0); } }
        @keyframes ia-pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.6); opacity: 0.7; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes ia-spin { to { transform: rotate(360deg); } }
        @keyframes ia-dd-in { from { opacity: 0; transform: translateY(-6px) scale(0.98); } to { opacity: 1; transform: none; } }
        @keyframes ia-dd-in-up { from { opacity: 0; transform: translateY(6px) scale(0.98); } to { opacity: 1; transform: none; } }
        @keyframes ia-bar-in { from { opacity: 0; transform: translateY(-14px) scale(0.98); } to { opacity: 1; transform: none; } }
        @keyframes ia-rise { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
        @keyframes ia-item-in { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
        @keyframes ia-reveal { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: none; } }
        @keyframes ia-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes ia-modal-in { from { opacity: 0; transform: translateY(12px) scale(0.97); } to { opacity: 1; transform: none; } }
        @keyframes ia-swap-in { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: none; } }
        @keyframes ia-pop { from { opacity: 0; transform: scale(0.3) rotate(-25deg); } to { opacity: 1; transform: none; } }
        @keyframes ia-ring-ok { from { box-shadow: 0 0 0 0 rgba(63, 185, 80, 0.5); } to { box-shadow: 0 0 0 9px rgba(63, 185, 80, 0); } }
        @keyframes ia-shake { 15%, 55% { transform: translateX(-3px); } 35%, 75% { transform: translateX(3px); } 100% { transform: none; } }
        @keyframes ia-autofill { from { border-color: var(--ia-brand-500); box-shadow: 0 0 0 0 rgba(0, 153, 255, 0.55); } to { box-shadow: 0 0 0 7px rgba(0, 153, 255, 0); } }
        @keyframes ia-flash { from { background-color: rgba(0, 153, 255, 0.22); border-color: var(--ia-brand-500); } }

        /* Barra: entra desde arriba y sus elementos aparecen escalonados */
        .ia-toolbar { animation: ia-bar-in 0.5s var(--ia-ease) backwards; }
        .ia-toolbar > * { animation: ia-rise 0.45s var(--ia-ease) backwards; }
        .ia-toolbar > :nth-child(2) { animation-delay: 0.06s; } .ia-toolbar > :nth-child(3) { animation-delay: 0.10s; }
        .ia-toolbar > :nth-child(4) { animation-delay: 0.14s; } .ia-toolbar > :nth-child(5) { animation-delay: 0.18s; }
        .ia-toolbar > :nth-child(6) { animation-delay: 0.22s; } .ia-toolbar > :nth-child(7) { animation-delay: 0.26s; }
        /* Iconos de botón: pequeño gesto al pasar el ratón */
        .ia-btn .ia-icon { transition: transform 0.3s var(--ia-ease); }
        .ia-btn:hover > .ia-icon:first-child { transform: translateY(-1px); }
        .ia-btn:hover > .ia-icon[data-i="refresh"] { transform: rotate(-90deg); }
        .ia-btn:hover > .ia-icon[data-i="escalate"] { transform: translate(1.5px, -1.5px); }
        .ia-btn:hover > .ia-icon[data-i="check-circle"], .ia-btn:hover > .ia-icon[data-i="table"] { transform: scale(1.12); }
        .ia-icon[data-i="chevron"] { transition: transform 0.25s var(--ia-ease); }
        [aria-expanded="true"] > .ia-icon[data-i="chevron"] { transform: rotate(180deg); }
        /* Menús: se despliegan desde el botón y sus opciones entran escalonadas */
        .ia-menu { transform-origin: top center; }
        .ia-dd-menu { transform-origin: top left; }
        .ia-dd-menu.is-up { animation-name: ia-dd-in-up; transform-origin: bottom left; }
        .ia-menu > * { animation: ia-item-in 0.24s var(--ia-ease) backwards; }
        .ia-menu > :nth-child(2) { animation-delay: 0.02s; } .ia-menu > :nth-child(3) { animation-delay: 0.04s; }
        .ia-menu > :nth-child(4) { animation-delay: 0.06s; } .ia-menu > :nth-child(5) { animation-delay: 0.08s; }
        .ia-menu > :nth-child(6) { animation-delay: 0.10s; } .ia-menu > :nth-child(n+7) { animation-delay: 0.12s; }
        /* Estados del botón: el texto nuevo entra, el éxito "salta" con un halo y el aviso se sacude */
        .ia-btn.is-busy > span:not(.ia-spinner), .ia-btn.is-success > *, .ia-btn.is-warning > * { animation: ia-swap-in 0.24s var(--ia-ease) backwards; }
        .ia-btn.is-success > .ia-icon { animation: ia-pop 0.45s var(--ia-ease-pop) backwards; }
        .ia-btn.is-success { animation: ia-ring-ok 0.7s ease-out; }
        .ia-btn.is-warning { animation: ia-shake 0.42s cubic-bezier(0.36, 0.07, 0.19, 0.97); }
        /* Modales: fondo con fundido, ventana que sube y contenido escalonado */
        .ia-overlay { animation: ia-fade 0.2s ease-out; }
        .ia-overlay > .ia-modal { animation: ia-modal-in 0.34s var(--ia-ease); }
        .ia-modal > * { animation: ia-rise 0.38s var(--ia-ease) backwards; }
        .ia-modal > :nth-child(1) { animation-delay: 0.04s; } .ia-modal > :nth-child(2) { animation-delay: 0.07s; }
        .ia-modal > :nth-child(3) { animation-delay: 0.10s; } .ia-modal > :nth-child(4) { animation-delay: 0.13s; }
        .ia-modal > :nth-child(n+5) { animation-delay: 0.16s; }
        /* Campos que aparecen según lo elegido (país, código, comentario personalizado, avisos) */
        .ia-subpanel, .ia-subrow, .ia-hint { animation: ia-reveal 0.26s var(--ia-ease); }
        /* Valor puesto automáticamente: destello de marca en el desplegable */
        .ia-dd.is-autofill .ia-dd-trigger { animation: ia-autofill 0.9s ease-out; }
        /* Atajo recién guardado */
        .ia-shortcut.is-new { animation: ia-flash 1.2s ease-out; }
        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; transition-delay: 0s !important; }
        }
    `;

    // Acceso a la interfaz dentro del Shadow DOM (los ids de la UI ya no están en el document de la página)
    function ui(id) {
        const h = document.getElementById('brujula-mapa-host');
        return (h && h.shadowRoot) ? h.shadowRoot.getElementById(id) : null;
    }



    // =====================================================================
    // INTERFAZ: un único host con Shadow DOM para toda la interfaz de BRÚJULA PRO.
    // La página solo recibe las etiquetas de los nodos del mapa, con estilos en línea (sin CSS global).
    // =====================================================================
    const HOST_ID = 'brujula-mapa-host';
    let SR = null;
    function raizUI() {
        if (SR) return SR;
        let host = document.getElementById(HOST_ID);
        if (!host) {
            host = document.createElement('div');
            host.id = HOST_ID;
            (document.body || document.documentElement).appendChild(host);
        }
        SR = host.shadowRoot || host.attachShadow({ mode: 'open' });
        if (!SR.getElementById('bru-css')) {
            const st = document.createElement('style');
            st.id = 'bru-css';
            st.textContent = IADS_CSS + BRU_CSS;
            SR.appendChild(st);
        }
        return SR;
    }
    const $ = (id) => SR ? SR.getElementById(id) : null;

    // La herramienta solo se muestra en Brújula, en la página "Cobertura móvil" (título <h1>)
    const EN_BRUJULA = location.hostname === 'brujula.orange.es';
    const normalizarTitulo = (t) => (t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
    function enCobertura() {
        return EN_BRUJULA && Array.from(document.querySelectorAll('h1')).some(h => normalizarTitulo(h.textContent) === 'cobertura movil');
    }
    // El acceso se pide solo donde se usa la herramienta: espera a estar en "Cobertura móvil"
    function pedirTokenCuandoToque(aviso) {
        if (!EN_BRUJULA) return;                  // en Oceane y MXMEFM01 no se interrumpe nada
        if (enCobertura()) { pedirTokenUI(aviso); return; }
        const espera = setInterval(() => {
            if (enCobertura()) { clearInterval(espera); pedirTokenUI(aviso); }
        }, 500);
    }

    // Mensajes dentro del botón (mismo patrón que el resto de herramientas)
    function btnEstado(btn, texto, tipo) {
        if (!btn) return;
        if (!btn._iaOriginal) btn._iaOriginal = btn.innerHTML;
        iaCambioSuave(btn, () => {
            btn.classList.remove('is-busy', 'is-success', 'is-warning');
            if (tipo === 'busy') { btn.classList.add('is-busy'); btn.innerHTML = '<span class="ia-spinner"></span><span>' + texto + '</span>'; }
            else if (tipo === 'success') { btn.classList.add('is-success'); btn.innerHTML = iaIcon('check', 13) + '<span>' + texto + '</span>'; }
            else if (tipo === 'warning') { btn.classList.add('is-warning'); btn.innerHTML = iaIcon('alert', 13) + '<span>' + texto + '</span>'; }
        });
    }
    function btnRestaurar(btn) {
        if (!btn || !btn._iaOriginal) return;
        iaCambioSuave(btn, () => {
            btn.classList.remove('is-busy', 'is-success', 'is-warning');
            btn.innerHTML = btn._iaOriginal;
        });
    }

    const BRU_CSS = `
        /* ---------- BARRA (mismo patrón que MASIVAS PRO / OCEANE PRO) ---------- */
        .bru-wrap { position: relative; display: flex; }
        .ia-btn .ia-count { margin-left: 2px; }
        .ia-btn.is-active .ia-count { background: var(--ia-brand-500); border-color: var(--ia-brand-500); color: #fff; }
        .ia-toolbar-field { display: flex; align-items: center; gap: var(--ia-sp-2); padding-left: var(--ia-sp-3); margin-left: var(--ia-sp-1); border-left: 1px solid var(--ia-border); }
        .ia-toolbar-field .ia-label { color: var(--ia-text-3); }
        .bru-dist-val { display: inline-flex; align-items: center; gap: 5px; height: 22px; padding: 0 8px; border-radius: var(--ia-r-sm); font-family: var(--ia-mono); font-size: var(--ia-fs-xs); font-weight: 700;
            color: var(--ia-brand-500); background: var(--ia-brand-soft); border: 1px solid var(--ia-brand-glow); font-variant-numeric: tabular-nums; }
        .bru-dist-new .bru-dist-val { animation: ia-pop 0.4s var(--ia-ease-pop); }

        .bru-node-dist { flex: none; font-size: var(--ia-fs-xs); font-weight: 600; color: var(--ia-text-3); font-variant-numeric: tabular-nums; }
        .bru-node.is-sel .bru-node-dist, .bru-node:hover .bru-node-dist { color: var(--ia-brand-500); }
        .bru-orden { font-style: normal; font-weight: 500; color: var(--ia-text-3); }
        .bru-dist-val { max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        /* Líneas de distancia sobre el mapa */
        .bru-lineas { position: fixed; left: 0; top: 0; width: 0; height: 0; display: none; overflow: hidden; pointer-events: none; z-index: 5; }
        .bru-linea { animation: ia-fade 0.3s ease-out; }
        .bru-l-halo { stroke: rgba(255, 255, 255, 0.85); stroke-width: 5; stroke-linecap: round; }
        .bru-l-trazo { stroke: #0099ff; stroke-width: 2.5; stroke-linecap: round; stroke-dasharray: 7 6; animation: bru-hormigas 1.2s linear infinite; }
        .bru-linea--nodos .bru-l-trazo { stroke: #007acc; }
        .bru-l-fin { fill: #0099ff; stroke: #fff; stroke-width: 2; }
        .bru-l-et rect { fill: rgba(13, 17, 23, 0.94); stroke: rgba(0, 153, 255, 0.7); stroke-width: 1; }
        .bru-l-et text { fill: #f0f6fc; font: 700 11px var(--ia-mono); }
        @keyframes bru-hormigas { to { stroke-dashoffset: -26; } }
        @media (prefers-reduced-motion: reduce) { .bru-l-trazo { animation: none; } }

        /* ---------- MEDIR ---------- */
        .bru-medir-val { font-family: var(--ia-mono); font-weight: 700; color: var(--ia-brand-500); padding-left: var(--ia-sp-2); margin-left: 2px; border-left: 1px solid var(--ia-border); }
        .ia-btn.is-active .bru-medir-val { border-left-color: var(--ia-brand-glow); }
        /* Panel fijo a la derecha: deja libre el centro del mapa, que es donde se hace clic */
        .bru-medir-menu { position: fixed; top: 64px; right: 16px; left: auto; transform: none; width: 340px; max-height: calc(100vh - 80px); overflow-y: auto; padding: var(--ia-sp-4);
            background: radial-gradient(120% 40% at 50% -5%, rgba(0, 153, 255, 0.16), transparent 62%), var(--ia-surface-modal); border-color: var(--ia-border-strong);
            box-shadow: 0 30px 70px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.08); animation: bru-panel-in 0.35s var(--ia-ease); transform-origin: top right; }
        @keyframes bru-panel-in { from { opacity: 0; transform: translateX(16px); } to { opacity: 1; transform: none; } }
        .bru-medir-menu > * + * { margin-top: var(--ia-sp-4); }
        .bru-med-head { display: flex; align-items: center; gap: var(--ia-sp-2); font-size: var(--ia-fs-sm); font-weight: 700; color: var(--ia-text); }
        .bru-med-head > .ia-icon { color: var(--ia-brand-500); }
        .bru-med-head .ia-icon-btn { margin-left: auto; width: 24px; height: 24px; }
        .bru-med-head .ia-icon-btn:hover { color: var(--ia-text); background: var(--ia-hover); border-color: var(--ia-border); }

        .bru-med-slots { display: grid; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr); align-items: center; gap: var(--ia-sp-2); }
        .bru-slot-sep { color: var(--ia-text-3); display: inline-flex; }
        .bru-slot { display: flex; align-items: center; gap: var(--ia-sp-2); min-width: 0; height: 44px; padding: 0 10px 0 8px; cursor: pointer; text-align: left;
            font-family: inherit; color: var(--ia-text); background: var(--ia-field); border: 1px solid var(--ia-border); border-radius: var(--ia-r-md);
            transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease; }
        .bru-slot:hover { border-color: var(--ia-border-strong); background: var(--ia-hover); }
        .bru-slot:focus-visible { outline: 2px solid var(--ia-brand-500); outline-offset: 1px; }
        .bru-slot.is-next { border-color: var(--ia-brand-500); background: var(--ia-brand-soft); animation: bru-latido 1.6s ease-in-out infinite; }
        .bru-slot-k { flex: none; width: 20px; height: 20px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;
            font-size: var(--ia-fs-2xs); font-weight: 800; color: #fff; background: var(--ia-brand-500); box-shadow: 0 0 8px var(--ia-brand-glow); }
        .bru-slot.is-vacio .bru-slot-k { background: transparent; color: var(--ia-text-3); border: 1.5px dashed var(--ia-border-strong); box-shadow: none; }
        .bru-slot-i { flex: none; display: inline-flex; color: var(--ia-brand-500); }
        .bru-slot-i:empty { display: none; }
        .bru-slot-t { min-width: 0; display: flex; flex-direction: column; gap: 1px; }
        .bru-slot-v { font-family: var(--ia-mono); font-size: var(--ia-fs-sm); font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .bru-slot.is-vacio .bru-slot-v { font-family: var(--ia-font); font-weight: 500; color: var(--ia-text-3); font-size: var(--ia-fs-xs); }
        .bru-slot-s { font-size: var(--ia-fs-2xs); color: var(--ia-text-3); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .bru-slot-s:empty { display: none; }

        .bru-med-res { position: relative; display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 14px 12px 12px; border-radius: var(--ia-r-lg); overflow: hidden;
            background: radial-gradient(120% 90% at 50% 0%, rgba(0, 153, 255, 0.20), transparent 70%), rgba(0, 0, 0, 0.18); border: 1px solid var(--ia-brand-glow); }
        .bru-med-res::before { content: ""; position: absolute; top: 0; left: 15%; right: 15%; height: 1px; background: linear-gradient(90deg, transparent, rgba(54, 200, 255, 0.9), transparent); }
        .bru-med-cifra { display: flex; align-items: baseline; gap: 5px; font-variant-numeric: tabular-nums; }
        #medir-num { font-size: 34px; font-weight: 800; letter-spacing: -0.8px; line-height: 1.05; color: var(--ia-text); }
        #medir-uni { font-size: var(--ia-fs-lg); font-weight: 700; color: var(--ia-brand-500); }
        .bru-med-sub { font-size: var(--ia-fs-xs); color: var(--ia-text-3); text-align: center; }
        .bru-med-res.is-vacio { border-color: var(--ia-border); background: rgba(0, 0, 0, 0.18); }
        .bru-med-res.is-vacio::before { display: none; }
        .bru-med-res.is-vacio #medir-num { color: var(--ia-text-3); font-size: 26px; }
        .bru-med-res.is-nuevo .bru-med-cifra { animation: ia-pop 0.45s var(--ia-ease-pop); }

        .bru-med-pista { display: flex; align-items: center; gap: var(--ia-sp-2); margin-top: var(--ia-sp-2) !important; font-size: var(--ia-fs-xs); color: var(--ia-brand-500); }
        .bru-med-atajos { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--ia-sp-2); }
        .bru-med-atajos .ia-btn { height: 28px; justify-content: center; padding: 0 6px; border-color: var(--ia-border); background: var(--ia-field); font-size: var(--ia-fs-xs); }
        .bru-med-atajos .ia-btn.is-active { background: var(--ia-brand-soft); border-color: var(--ia-brand-glow); border-left-color: var(--ia-brand-500); }

        .bru-med-comp { padding-top: var(--ia-sp-4); border-top: 1px solid var(--ia-border); }
        .bru-med-rank { display: flex; flex-direction: column; gap: 2px; margin-top: var(--ia-sp-2); }
        .bru-rk { display: grid; grid-template-columns: 18px minmax(0, 76px) minmax(0, 1fr) auto; grid-template-rows: auto auto; column-gap: var(--ia-sp-3); align-items: center;
            padding: 6px 8px; border: none; border-left: 2px solid transparent; border-radius: var(--ia-r-sm); background: transparent; cursor: pointer; text-align: left; font-family: inherit; color: var(--ia-text-2);
            transition: background-color 0.15s ease, border-color 0.15s ease; }
        .bru-rk:hover { background: var(--ia-brand-soft); border-left-color: var(--ia-brand-500); }
        .bru-rk.is-sel { background: var(--ia-brand-soft); border-left-color: var(--ia-brand-500); color: var(--ia-text); }
        .bru-rk:focus-visible { outline: 2px solid var(--ia-brand-500); outline-offset: -1px; }
        .bru-rk-n { grid-row: 1 / span 2; width: 18px; height: 18px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: var(--ia-fs-2xs); font-weight: 800;
            color: var(--ia-brand-500); background: var(--ia-brand-soft); border: 1px solid var(--ia-brand-glow); }
        .bru-rk-nom { grid-row: 1 / span 2; font-family: var(--ia-mono); font-size: var(--ia-fs-sm); font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .bru-rk-barra { height: 6px; border-radius: 3px; background: rgba(255, 255, 255, 0.06); overflow: hidden; }
        .bru-rk-barra i { display: block; height: 100%; border-radius: 3px; background: linear-gradient(90deg, #0077ff, #36c8ff); transform-origin: left; animation: bru-crecer 0.6s var(--ia-ease) backwards; }
        .bru-rk-d { font-family: var(--ia-mono); font-size: var(--ia-fs-xs); font-weight: 700; color: var(--ia-text); text-align: right; font-variant-numeric: tabular-nums; }
        .bru-rk-dif { grid-column: 3 / span 2; font-size: var(--ia-fs-2xs); color: var(--ia-text-3); text-align: right; }
        @keyframes bru-crecer { from { transform: scaleX(0); } }
        @keyframes bru-latido { 0%, 100% { box-shadow: 0 0 0 0 rgba(0, 153, 255, 0.35); } 50% { box-shadow: 0 0 0 4px rgba(0, 153, 255, 0); } }

        /* Línea de la medida: más marcada, con A y B en los extremos */
        .bru-linea--medida .bru-l-trazo { stroke-width: 3; }
        .bru-linea--medida .bru-l-fin { r: 9; }
        .bru-l-letra { fill: #fff; font: 800 10px var(--ia-font); text-anchor: middle; dominant-baseline: central; pointer-events: none; }
        .bru-linea--medida .bru-l-et rect { height: 26px; stroke-width: 1.5; }
        .bru-linea--medida .bru-l-et text { font-size: 13px; }

        /* Menú "Nodos": buscador + lista con marcas + atajos */
        .bru-nodos-menu { width: 300px; padding: var(--ia-sp-3); }
        .bru-nodos-menu > * + * { margin-top: var(--ia-sp-3); }
        .bru-search { position: relative; display: flex; align-items: center; }
        .bru-search > .ia-icon { position: absolute; left: 10px; color: var(--ia-text-3); pointer-events: none; }
        .bru-search .ia-control { width: 100%; height: 30px; padding-left: 32px; padding-right: 30px; font-size: var(--ia-fs-sm); }
        .bru-search .ia-icon-btn { position: absolute; right: 2px; width: 26px; height: 26px; }
        .bru-search .ia-icon-btn:hover { color: var(--ia-text); background: var(--ia-hover); border-color: var(--ia-border); }
        .bru-list-head { display: flex; align-items: center; gap: var(--ia-sp-2); padding: 0 2px; font-size: var(--ia-fs-xs); font-weight: 700; color: var(--ia-text-2); }
        .bru-list-head::before { content: ""; width: 3px; height: 12px; border-radius: 2px; background: var(--ia-brand-500); }
        .bru-list-head span { margin-left: auto; font-weight: 500; color: var(--ia-text-3); }
        .bru-list { max-height: 260px; overflow-y: auto; display: flex; flex-direction: column; gap: 2px; margin-top: var(--ia-sp-2) !important; scrollbar-width: thin; scrollbar-color: rgba(255, 255, 255, 0.18) transparent; }
        .bru-node { display: flex; align-items: center; gap: 10px; min-height: 30px; padding: 0 6px 0 var(--ia-sp-4); border-radius: var(--ia-r-sm); cursor: pointer; user-select: none;
            font-family: var(--ia-mono); font-size: var(--ia-fs-sm); font-weight: 600; color: var(--ia-text-2); border-left: 2px solid transparent;
            transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, padding 0.15s ease; }
        .bru-node:hover { color: var(--ia-brand-500); border-left-color: var(--ia-brand-500); background-color: var(--ia-brand-soft); }
        .bru-node.is-sel { color: var(--ia-brand-500); background: var(--ia-brand-soft); border-left-color: var(--ia-brand-500); }
        .bru-node input { position: absolute; opacity: 0; pointer-events: none; }
        .bru-check { flex: none; width: 15px; height: 15px; border-radius: 4px; border: 1.5px solid var(--ia-border-strong); display: inline-flex; align-items: center; justify-content: center; color: #fff; transition: all 0.2s var(--ia-ease); }
        .bru-check .ia-icon { opacity: 0; transform: scale(0.4); transition: all 0.25s var(--ia-ease-pop); }
        .bru-node.is-sel .bru-check { background: var(--ia-brand-500); border-color: var(--ia-brand-500); box-shadow: 0 0 8px var(--ia-brand-glow); }
        .bru-node.is-sel .bru-check .ia-icon { opacity: 1; transform: none; }
        .bru-node:has(input:focus-visible) { outline: 2px solid var(--ia-brand-500); outline-offset: -1px; }
        .bru-node-name { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .bru-node .ia-icon-btn { width: 22px; height: 22px; opacity: 0; transition: opacity 0.15s ease; }
        .bru-node:hover .ia-icon-btn, .bru-node .ia-icon-btn:focus-visible { opacity: 1; }
        .bru-node .ia-icon-btn:hover { color: var(--ia-brand-500); background: var(--ia-brand-soft); border-color: var(--ia-brand-glow); }
        .bru-tips { display: flex; flex-direction: column; gap: 5px; padding: var(--ia-sp-3) 2px 2px; border-top: 1px solid var(--ia-border); font-size: var(--ia-fs-xs); color: var(--ia-text-3); }
        .bru-tips div { display: flex; align-items: center; gap: var(--ia-sp-2); white-space: nowrap; }
        .bru-tips .ia-kbd { font-size: var(--ia-fs-2xs); padding: 1px 5px; }

        /* ---------- MENÚ CONTEXTUAL DE NODO ---------- */
        .bru-menu { display: block; position: fixed; left: 0; top: 0; transform: none; min-width: 210px; max-height: calc(100vh - 20px); overflow-y: auto; padding: var(--ia-sp-2); z-index: var(--ia-z-top);
            font-family: var(--ia-font); animation: ia-dd-in 0.16s var(--ia-ease); transform-origin: top left; }
        .bru-menu .ia-menu-group { position: static; margin-top: 0; }
        .bru-menu-title { font-family: var(--ia-mono); color: var(--ia-text); text-transform: none; letter-spacing: 0.3px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 240px; }
        .bru-menu .ia-menu-item { display: flex; align-items: center; gap: var(--ia-sp-2); }
        .bru-menu .ia-menu-item .bru-ok { margin-left: auto; color: var(--ia-brand-500); display: none; }
        .bru-menu .ia-menu-item.is-hecho .bru-ok { display: inline-flex; animation: ia-pop 0.4s var(--ia-ease-pop); }
        .bru-menu .ia-menu-item--custom .ia-icon { color: var(--ia-brand-500); }
        .bru-menu-foot { padding: var(--ia-sp-2) var(--ia-sp-4) 2px; font-size: var(--ia-fs-2xs); color: var(--ia-text-3); }

        /* ---------- AVISO DE DIRECCIÓN (encima del campo; nunca tapa las sugerencias de Google) ---------- */
        .bru-fix { position: fixed; z-index: var(--ia-z-top); width: max-content; max-width: min(480px, 92vw); display: flex; align-items: center; gap: 10px; padding: 9px 9px 9px 12px;
            font-family: var(--ia-font); color: var(--ia-text); background: var(--ia-surface-modal); border: 1px solid var(--ia-border-strong); border-left: 2px solid var(--ia-brand-500);
            border-radius: var(--ia-r-lg); box-shadow: var(--ia-sh-menu); animation: ia-dd-in-up 0.22s var(--ia-ease); transition: border-color 0.25s ease; }
        .bru-fix.is-saliendo { pointer-events: none; }
        .bru-fix-ico { flex: none; width: 16px; display: inline-flex; justify-content: center; color: var(--ia-brand-500); }
        .bru-fix-ico .ia-icon { animation: ia-pop 0.4s var(--ia-ease-pop); }
        .bru-fix[data-estado="ok"] { border-left-color: var(--ia-brand-500); box-shadow: var(--ia-sh-menu), 0 0 0 1px var(--ia-brand-glow); }
        .bru-fix[data-estado="sin"] { border-left-color: var(--ia-warning); }
        .bru-fix[data-estado="sin"] .bru-fix-ico, .bru-fix[data-estado="sin"] .bru-fix-txt b { color: var(--ia-warning); }
        .bru-fix-txt { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
        .bru-fix-txt b { font-size: var(--ia-fs-xs); font-weight: 700; color: var(--ia-brand-500); }
        .bru-fix-det { font-size: var(--ia-fs-xs); color: var(--ia-text-2); }
        .bru-fix-orig { font-size: var(--ia-fs-2xs); color: var(--ia-text-3); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .bru-fix { transition: border-color 0.25s ease, top 0.2s var(--ia-ease); }
        .bru-fix-orig em { font-style: normal; color: var(--ia-text-3); }
        .bru-fix .ia-btn { height: 26px; flex: none; border-color: var(--ia-border); background: var(--ia-field); }

        /* ---------- ACCESO ---------- */
        .bru-login .ia-modal { width: 400px; }
        .bru-login-lead { font-size: var(--ia-fs-sm); line-height: 1.5; color: var(--ia-text-2); margin: calc(-1 * var(--ia-sp-2)) 0 var(--ia-sp-5); }
        .bru-login .ia-control { height: 34px; font-family: var(--ia-mono); font-size: var(--ia-fs-sm); letter-spacing: 0.4px; }
        .bru-login .ia-control.is-error { border-color: rgba(210, 153, 34, 0.7); animation: ia-shake 0.42s cubic-bezier(0.36, 0.07, 0.19, 0.97); }
        .bru-msg { display: none; align-items: flex-start; gap: var(--ia-sp-2); padding: 10px 12px; border-radius: var(--ia-r-md); font-size: var(--ia-fs-xs); line-height: 1.45; animation: ia-reveal 0.26s var(--ia-ease); }
        .bru-msg.is-on { display: flex; }
        .bru-msg[data-tono="warning"] { color: var(--ia-warning); background: rgba(210, 153, 34, 0.10); border: 1px solid rgba(210, 153, 34, 0.30); }
        .bru-msg[data-tono="brand"] { color: var(--ia-brand-500); background: var(--ia-brand-soft); border: 1px solid var(--ia-brand-glow); }
        .bru-msg .ia-icon { margin-top: 1px; }
        .bru-device { display: flex; align-items: center; gap: var(--ia-sp-2); margin-top: var(--ia-sp-4); font-size: var(--ia-fs-xs); color: var(--ia-text-3); }
        .bru-device code { font-family: var(--ia-mono); color: var(--ia-text-2); }
    `;

    // =========================================================
    // 0. CONTROL MULTI-DISPOSITIVO Y EXPULSIÓN REMOTA
    // =========================================================
    const FIREBASE_BASE_URL = "https://pruebabrujula-7221e-default-rtdb.europe-west1.firebasedatabase.app";

    // Generador de huella única del ordenador (sustituto seguro de la MAC)
    function generarHWID() {
        let canvasData = "";
        try {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            ctx.textBaseline = "top";
            ctx.font = "14px 'Arial'";
            ctx.fillText("BrujulaHWID", 2, 2);
            canvasData = canvas.toDataURL();
        } catch(e) {}

        let gpu = 'no-gpu';
        try {
            const gl = document.createElement('canvas').getContext('webgl');
            const debugInfo = gl ? gl.getExtension('WEBGL_debug_renderer_info') : null;
            gpu = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'no-gpu';
        } catch(e) {}

        const datos = [
            navigator.userAgent,
            screen.width + 'x' + screen.height,
            screen.colorDepth,
            new Date().getTimezoneOffset(),
            navigator.hardwareConcurrency || 0,
            gpu,
            canvasData
        ].join('###');

        let hash = 0;
        for (let i = 0; i < datos.length; i++) {
            hash = ((hash << 5) - hash) + datos.charCodeAt(i);
            hash |= 0;
        }
        return 'hw_' + Math.abs(hash).toString(36);
    }

    const miHWID = generarHWID();

    // callback(sesionOk, mensaje, registrado): "registrado" solo es true si Firebase confirmó la escritura
    function registrarYComprobarSesion(token, callback) {
        const endpoint = `${FIREBASE_BASE_URL}/sesiones_activas/${encodeURIComponent(token)}/${miHWID}.json`;

        // 1. Consultar estado del dispositivo específico
        GM_xmlhttpRequest({
            method: "GET",
            url: endpoint,
            timeout: 5000,
            onload: function(res) {
                try {
                    const data = JSON.parse(res.responseText);

                    // Si en Firebase se pone 'activo: false', queda expulsado
                    if (data && data.activo === false) {
                        return callback(false, "Tu equipo ha sido desconectado o bloqueado por el administrador.", false);
                    }

                    // 2. Si está activo o es nuevo, actualiza su latido
                    const payload = {
                        activo: true,
                        ultima_conexion: new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' }),
                        pantalla: `${screen.width}x${screen.height}`,
                        url: window.location.href,
                        timestamp: Date.now()
                    };

                    GM_xmlhttpRequest({
                        method: "PUT",
                        url: endpoint,
                        data: JSON.stringify(payload),
                        timeout: 5000,
                        onload: (r) => callback(true, "Conectado", r.status >= 200 && r.status < 300),
                        onerror: () => callback(true, "Conectado", false),
                        ontimeout: () => callback(true, "Conectado", false)
                    });
                } catch(e) {
                    callback(true, "Conectado", false);
                }
            },
            onerror: () => callback(true, "Conectado", false),
            // Antes faltaba: si Firebase tardaba más de 5 s, la herramienta no llegaba a arrancar nunca
            ontimeout: () => callback(true, "Conectado", false)
        });
    }

    // callback(permitido, motivo): motivo 'red' si no se pudo consultar, 'invalido' si la clave no vale
    function verificarTokenFirebase(token, callback) {
        if (!token) return callback(false, 'invalido');

        const endpoint = `${FIREBASE_BASE_URL}/tokens/${encodeURIComponent(token)}.json`;

        GM_xmlhttpRequest({
            method: "GET",
            url: endpoint,
            timeout: 6000,
            onload: function(response) {
                try {
                    const data = JSON.parse(response.responseText);
                    callback(data === true, data === true ? '' : 'invalido');
                } catch (e) {
                    callback(false, 'red');
                }
            },
            onerror: () => callback(false, 'red'),
            ontimeout: () => callback(false, 'red')
        });
    }

    // Ventana de acceso (sustituye al prompt nativo). Solo da el acceso por bueno cuando Firebase lo confirma.
    function pedirTokenUI(aviso) {
        const sr = raizUI();
        let ov = sr.getElementById('bru-login');
        if (!ov) {
            ov = document.createElement('div');
            ov.id = 'bru-login';
            ov.className = 'ia-overlay bru-login';
            ov.innerHTML = `
                <div class="ia-modal" role="dialog" aria-modal="true" aria-labelledby="bru-login-t">
                    <div class="ia-modal-title" id="bru-login-t">${iaIcon('lock', 16)}<span>Acceso a BRÚJULA PRO</span></div>
                    <p class="bru-login-lead">Introduce tu clave de usuario. Se comprueba en el servidor y este equipo queda registrado en tu sesión.</p>
                    <div class="ia-field">
                        <label class="ia-label" for="bru-token">Clave de usuario</label>
                        <input class="ia-control" id="bru-token" type="password" autocomplete="off" spellcheck="false" placeholder="Tu clave">
                        <div class="bru-msg" id="bru-login-msg" role="status"></div>
                    </div>
                    <div class="ia-modal-footer">
                        <button class="ia-btn" id="bru-login-cancel" type="button">Cancelar</button>
                        <button class="ia-btn ia-btn--primary" id="bru-login-ok" type="button">${iaIcon('lock', 13)}<span>Verificar</span></button>
                    </div>
                    <div class="bru-device">${iaIcon('cpu', 12)}<span>Equipo <code>${miHWID}</code></span></div>
                </div>`;
            sr.appendChild(ov);

            const input = sr.getElementById('bru-token');
            const ok = sr.getElementById('bru-login-ok');
            const msg = sr.getElementById('bru-login-msg');
            const mostrar = (texto, tono) => {
                if (!texto) { msg.classList.remove('is-on'); return; }
                msg.dataset.tono = tono || 'warning';
                msg.innerHTML = iaIcon(tono === 'brand' ? 'bolt' : 'alert', 13) + '<span></span>';
                msg.lastChild.textContent = texto;
                msg.classList.remove('is-on'); void msg.offsetWidth; msg.classList.add('is-on');
            };
            ov._mostrar = mostrar;
            let enCurso = false;

            const fallo = (texto) => {
                enCurso = false;
                input.disabled = false;
                btnEstado(ok, 'Revisa la clave', 'warning');
                mostrar(texto, 'warning');
                input.classList.remove('is-error'); void input.offsetWidth; input.classList.add('is-error');
                setTimeout(() => { btnRestaurar(ok); input.focus(); input.select(); }, 1600);
            };

            const enviar = () => {
                if (enCurso) return;
                const token = input.value.trim();
                if (!token) { fallo('Escribe tu clave para continuar.'); return; }
                enCurso = true;
                input.disabled = true;
                input.classList.remove('is-error');
                mostrar('');
                btnEstado(ok, 'Verificando clave…', 'busy');

                verificarTokenFirebase(token, (permitido, motivo) => {
                    if (!permitido) {
                        fallo(motivo === 'red'
                            ? 'No se ha podido conectar con el servidor de claves. Comprueba la conexión e inténtalo de nuevo.'
                            : 'La clave no existe o está desactivada.');
                        return;
                    }
                    GM_setValue("brujula_token", token);
                    btnEstado(ok, 'Registrando equipo…', 'busy');
                    registrarYComprobarSesion(token, (sesionOk, m, registrado) => {
                        if (!sesionOk) { fallo(m); return; }
                        btnEstado(ok, registrado ? 'Acceso concedido' : 'Clave verificada', 'success');
                        mostrar(registrado ? 'Equipo registrado. Recargando la página…'
                                           : 'Clave verificada. No se pudo registrar el equipo ahora; se volverá a intentar en segundo plano. Recargando…', 'brand');
                        setTimeout(() => location.reload(), 900);
                    });
                });
            };

            ok.addEventListener('click', enviar);
            input.addEventListener('keydown', (e) => {
                e.stopPropagation();
                if (e.key === 'Enter') enviar();
                if (e.key === 'Escape') sr.getElementById('bru-login-cancel').click();
            });
            input.addEventListener('input', () => { input.classList.remove('is-error'); });
            sr.getElementById('bru-login-cancel').addEventListener('click', () => {
                if (enCurso) return;
                iaCerrarOverlay(ov);          // sin clave, la herramienta no se activa en esta carga
            });
        }
        iaAbrirOverlay(ov);
        ov._mostrar(aviso || '', 'warning');
        const input = sr.getElementById('bru-token');
        input.value = '';
        setTimeout(() => input.focus(), 60);
    }

    const tokenActual = GM_getValue("brujula_token", "");

    if (!tokenActual) {
        pedirTokenCuandoToque();
        return;
    }

    verificarTokenFirebase(tokenActual, (permitido) => {
        if (!permitido) {
            GM_setValue("brujula_token", "");
            pedirTokenCuandoToque('Tu sesión ha caducado o tu clave se ha desactivado. Introduce una clave válida.');
            return;
        }

        registrarYComprobarSesion(tokenActual, (sesionOk, msg) => {
            if (!sesionOk) {
                alert("⚠️ " + msg);
                return; // Bloquea la carga
            }

            // Inicia el script normal
            iniciarScriptPrincipal();

            // Latido en segundo plano cada 2 minutos para detectar expulsiones en vivo
            setInterval(() => {
                registrarYComprobarSesion(tokenActual, (ok, m) => {
                    if (!ok) {
                        alert("🔒 " + m);
                        location.reload();
                    }
                });
            }, 2 * 60 * 1000);
        });
    });

    // =========================================================
    // CORRECTOR DE DIRECCIONES
    // Convierte lo que se pega (formato del CRM, abreviaturas de catastro, piso y puerta,
    // provincia repetida...) en "Tipo Nombre, Número, CP Población", que es lo que mejor
    // entiende el buscador de Google de Brújula. Si no reconoce una calle, no toca el texto.
    // =========================================================
    const DIR_TIPOS = {
        'Calle': ['CL', 'C', 'CALLE', 'CALL', 'CLL', 'CLLE'],
        'Avenida': ['AV', 'AVD', 'AVDA', 'AVENIDA', 'AVE', 'AVNDA'],
        'Plaza': ['PZ', 'PZA', 'PL', 'PLZ', 'PLAZA', 'PLZA'],
        'Paseo': ['PS', 'PSO', 'PASEO'],
        'Carretera': ['CR', 'CTRA', 'CRTA', 'CARRETERA', 'CRA'],
        'Camino': ['CM', 'CMNO', 'CAMINO', 'CNO'],
        'Ronda': ['RD', 'RDA', 'RONDA'],
        'Travesía': ['TR', 'TRV', 'TRAV', 'TRVA', 'TRAVESIA', 'TRAVESÍA'],
        'Glorieta': ['GL', 'GTA', 'GLTA', 'GLORIETA'],
        'Urbanización': ['UR', 'URB', 'URBANIZACION', 'URBANIZACIÓN'],
        'Polígono': ['PG', 'POL', 'POLIG', 'POLIGONO', 'POLÍGONO'],
        'Barrio': ['BO', 'BRIO', 'BARRIO', 'BRO'],
        'Callejón': ['CJ', 'CJON', 'CALLEJON', 'CALLEJÓN'],
        'Alameda': ['AL', 'ALAM', 'ALAMEDA'],
        'Pasaje': ['PJ', 'PSJ', 'PSJE', 'PASAJE'],
        'Rambla': ['RB', 'RBLA', 'RAMBLA'],
        'Cuesta': ['CU', 'CTA', 'CUESTA'],
        'Lugar': ['LG', 'LUGAR'],
        'Parque': ['PQ', 'PRQ', 'PARQUE'],
        'Senda': ['SD', 'SENDA'],
        'Bajada': ['BJDA', 'BAJADA'],
        'Autovía': ['AU', 'AUTOVIA', 'AUTOVÍA'],
        'Vía': ['VIA', 'VÍA'],
        'Costanilla': ['CTLA', 'COSTANILLA'],
        'Grupo': ['GR', 'GRUPO'],
        'Partida': ['PDA', 'PARTIDA'],
        'Plazuela': ['PZLA', 'PLAZUELA'],
        'Colonia': ['COL', 'COLONIA'],
        'Carrer': ['CARRER', 'CR.'],
        'Avinguda': ['AVINGUDA', 'AVGDA'],
        'Passeig': ['PASSEIG', 'PG.'],
        'Plaça': ['PLAÇA'],
        'Rúa': ['RUA', 'RÚA'],
        'Travessera': ['TRAVESSERA']
    };
    function dirSinTildes(s) { return s.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }
    function dirClave(s) { return dirSinTildes(s).toUpperCase().replace(/[^A-Z0-9Ñ ]/g, ' ').replace(/\s+/g, ' ').trim(); }
    const DIR_TIPO_DE = (() => {
        const m = {};
        Object.keys(DIR_TIPOS).forEach(t => DIR_TIPOS[t].forEach(a => { m[dirClave(a).replace(/\s/g, '')] = t; }));
        return m;
    })();

    // Lo que va detrás del número y no sirve para localizar el edificio (piso, puerta, escalera...)
    const DIR_RELLENO = new Set(('BJ BAJO BAJ BJO BAJOS ENT ENTLO ENTR ENTRESUELO ENTRES PRAL PPAL PRINCIPAL ATICO ÁTICO AT SOTANO SÓTANO SOT SEMISOTANO ' +
        'LOCAL LC LOC IZ IZQ IZDA IZQDA IZQUIERDA DR DER DCH DCHA DRCHA DERECHA CTRO CENT EXT EXTERIOR INT INTERIOR ' +
        'ESC ESCAL ESCALERA PTA PT PUERTA PISO PLANTA PLT PORTAL PORT PTAL BLQ BLOQ BLOQUE BL BLO EDIF EDIFICIO ED CASA CS ' +
        'APTO APART APARTAMENTO DUPLEX DÚPLEX BIS MOD MODULO MÓDULO NAVE PARC PARCELA MZ MANZANA FASE KM PK ' +
        'PRIMERO PRIMERA SEGUNDO SEGUNDA TERCERO TERCERA CUARTO CUARTA QUINTO QUINTA SEXTO SEXTA SEPTIMO SÉPTIMO OCTAVO NOVENO DECIMO DÉCIMO ' +
        '1ER 1RO 2DO 3RO 4TO 5TO 6TO 7MO 8VO 9NO 10MO DPTO DEPARTAMENTO OFICINA OF HAB').split(' '));
    // Palabras de PISO/PLANTA que pueden llevar un número detrás ("PISO 3", "PL 2")
    const DIR_RELLENO_CON_NUM = new Set('ESC ESCAL ESCALERA PTA PT PUERTA PISO PLANTA PLT PL PORTAL PORT PTAL BLQ BLOQ BLOQUE BL BLO EDIF EDIFICIO ED CASA CS APTO APART APARTAMENTO MOD MODULO NAVE PARC PARCELA MZ MANZANA FASE LOCAL LC LOC OFICINA OF HAB DPTO DEPARTAMENTO'.split(' '));

    const DIR_MESES = new Set('ENERO FEBRERO MARZO ABRIL MAYO JUNIO JULIO AGOSTO SEPTIEMBRE SETIEMBRE OCTUBRE NOVIEMBRE DICIEMBRE'.split(' '));

    const DIR_PROVINCIAS = ['ALAVA', 'ARABA', 'ARABA ALAVA', 'ALBACETE', 'ALICANTE', 'ALACANT', 'ALMERIA', 'ASTURIAS', 'AVILA', 'BADAJOZ',
        'BALEARES', 'ILLES BALEARS', 'ISLAS BALEARES', 'BARCELONA', 'BURGOS', 'CACERES', 'CADIZ', 'CANTABRIA', 'CASTELLON', 'CASTELLO',
        'CIUDAD REAL', 'CORDOBA', 'A CORUÑA', 'A CORUNA', 'LA CORUÑA', 'LA CORUNA', 'CORUÑA', 'CORUNA', 'CUENCA', 'GIRONA', 'GERONA',
        'GRANADA', 'GUADALAJARA', 'GIPUZKOA', 'GUIPUZCOA', 'HUELVA', 'HUESCA', 'JAEN', 'LEON', 'LLEIDA', 'LERIDA', 'LA RIOJA', 'RIOJA',
        'LUGO', 'MADRID', 'MALAGA', 'MURCIA', 'NAVARRA', 'NAFARROA', 'OURENSE', 'ORENSE', 'PALENCIA', 'LAS PALMAS', 'PALMAS', 'PONTEVEDRA',
        'SALAMANCA', 'SANTA CRUZ DE TENERIFE', 'TENERIFE', 'SEGOVIA', 'SEVILLA', 'SORIA', 'TARRAGONA', 'TERUEL', 'TOLEDO', 'VALENCIA',
        'VALENCIA VALENCIA', 'BIZKAIA', 'VIZCAYA', 'ZAMORA', 'ZARAGOZA', 'CEUTA', 'MELILLA', 'ESPAÑA', 'ESPANA', 'SPAIN'];

    const DIR_MINUSCULAS = new Set(['de', 'del', 'la', 'las', 'los', 'el', 'y', 'e', 'en', 'a', 'al', 'i', 'd', 'l', 'da', 'do', 'das', 'dos']);


    function dirTitulo(texto) {
        let primera = true;
        return texto.split(' ').filter(Boolean).map(w => {
            const res = (() => {
                if (/\d/.test(w)) return w.toUpperCase();                                         // M-503, 2B
                if (/^[IVXL]{2,}$/i.test(w) && !/^(LI|IL|VI|XI|LV|IV)$/i.test(w) || /^(II|III|IV|VI|VII|VIII|IX|XI|XII|XIII|XIV|XV|XX|XXI|XXIII)$/i.test(w)) return w.toUpperCase(); // Alfonso XIII
                const low = w.toLowerCase();
                if (!primera && DIR_MINUSCULAS.has(low)) return low;
                // L'Hospitalet, D'Ors
                return low.replace(/(^|[\s'’\-(/])(\p{L})/gu, (m, a, b) => a + b.toUpperCase());
            })();
            primera = false;
            return res;
        }).join(' ');
    }

    function dirEsProvincia(texto) { return DIR_PROVINCIAS.includes(dirClave(texto)); }

    // Población: quita país, provincia entre paréntesis o repetida ("MADRID MADRID", "POZUELO DE ALARCON, MADRID")
    function dirLimpiarPoblacion(partes) {
        let p = partes.map(x => x.replace(/\(.*?\)/g, ' ').replace(/\s+/g, ' ').trim()).filter(x => x && /\p{L}/u.test(x));
        p = p.filter(x => !['ESPANA', 'SPAIN'].includes(dirClave(x)));
        if (!p.length) return '';
        let pob = p[0];
        // Provincia pegada al final sin coma: "POZUELO DE ALARCON MADRID", "SEVILLA SEVILLA"
        const pal = pob.split(' ');
        for (let n = Math.min(4, pal.length - 1); n >= 1; n--) {
            const cola = pal.slice(-n).join(' ');
            const resto = pal.slice(0, -n).join(' ');
            if (dirEsProvincia(cola) && resto && !/^(DE|DEL|LA|LAS|LOS|EL)$/i.test(pal[pal.length - n - 1])) { pob = resto; break; }
        }
        return pob.replace(/[,.;:\-]+$/g, '').trim();
    }

    function normalizarDireccion(entrada) {
        if (!entrada) return null;
        let t = String(entrada);

        // 1. Envoltorios del CRM y ruido
        t = t.replace(/\[\s*DIRECCI[OÓ]N\s*\]\s*#?\s*\[?/gi, ' ')
             .replace(/^\s*(direcci[oó]n|domicilio|ubicaci[oó]n)\s*(de\s+instalaci[oó]n)?\s*[:=\-]\s*/i, '')
             .replace(/[\[\]{}"“”«»]/g, ' ')
             .replace(/(?<!\p{L})['`´’]|['`´’](?!\p{L})/gu, ' ')
             .replace(/[\r\n\t;|]+/g, ', ')
             .replace(/\s+/g, ' ')
             .trim();
        if (!t) return null;
        // Coordenadas: se dejan tal cual
        if (/^-?\d{1,3}[.,]\d+\s*[, ]\s*-?\d{1,3}[.,]\d+$/.test(t)) return null;

        // 2. Formas especiales de escribir el tipo de vía y el número
        t = t.replace(/\bC\s*\/\s*\.?\s*/gi, 'CALLE ')                      // C/ C/. C /
             .replace(/\bAVDA?\s*\/\s*/gi, 'AVENIDA ')
             .replace(/\bP[º°]\s*/gi, 'PASEO ')
             .replace(/\b(N[º°ªo]|NUM\.?|N[UÚ]MERO|NRO\.?|N\.)\s*(?=\d)/gi, ' #N ')   // Nº 5 → marcador de número
             .replace(/\bN[º°]\s*/gi, ' ')
             .replace(/\bS\s*\/\s*N\b|\bS\.N\.?(?=\s|,|$)|\bSIN N[UÚ]MERO\b/gi, ' S/N ')
             .replace(/\bKM\.?\s*(\d+(?:[.,]\d+)?)/gi, (m, n) => ' KM:' + n.replace(',', '.') + ' ')
             .replace(/(\d)\s*-\s*(\d)/g, '$1 $2')                           // 5-2ºB
             .replace(/\s+-\s+|\s+-|-\s+/g, ', ')                            // separadores " - "
             .replace(/(\d)([ºª°])/g, '$1º ')
             .replace(/([A-Za-zÁÉÍÓÚÑáéíóúñ]{2,})\.(?=\s|,|$)/g, '$1')        // AVDA. → AVDA
             .replace(/\s*,\s*/g, ', ')
             .replace(/(,\s*)+/g, ', ')
             .replace(/\s+/g, ' ')
             .replace(/^[,\s]+|[,\s]+$/g, '');

        // 3. Código postal (el último que aparezca): separa la vía de la población
        let cp = '', antes = t, despues = '';
        const cps = [...t.matchAll(/(?<![\d.,:])((?:0[1-9]|[1-4]\d|5[0-2])\d{3})(?![\d.,]\d)/g)];
        if (cps.length) {
            const m = cps[cps.length - 1];
            cp = m[1];
            antes = t.slice(0, m.index).replace(/[,\s]+$/, '');
            despues = t.slice(m.index + m[0].length).replace(/^[,\s]+/, '');
        }

        // 4. Recorre la parte de la vía palabra a palabra (las comas cuentan como corte)
        const fichas = [];
        antes.split(',').forEach((seg, iSeg) => {
            seg.trim().split(' ').filter(Boolean).forEach((w, i) => fichas.push({ w, seg: iSeg, ini: i === 0 }));
        });
        if (!fichas.length) return null;

        let tipo = '';
        let k = 0;
        const primera = dirClave(fichas[0].w).replace(/\s/g, '');
        if (DIR_TIPO_DE[primera] !== undefined && fichas.length > 1) {
            // "C" solo cuenta como calle si va seguido de un nombre
            tipo = DIR_TIPO_DE[primera];
            k = 1;
        } else if (DIR_TIPO_DE[fichas[0].w.toUpperCase()] !== undefined && fichas.length > 1) {
            tipo = DIR_TIPO_DE[fichas[0].w.toUpperCase()];
            k = 1;
        }

        const esNumero = (w) => /^\d{1,4}[A-Z]?$/i.test(w) || w === 'S/N' || /^KM:/.test(w);
        const sigEsMes = (j) => fichas[j + 1] && /^(DE|DEL)$/i.test(fichas[j + 1].w) && fichas[j + 2] && DIR_MESES.has(dirClave(fichas[j + 2].w));

        // Busca el número del portal
        let iNum = -1;
        const marcado = fichas.findIndex((f, j) => j >= k && f.w === '#N');
        if (marcado >= 0 && fichas[marcado + 1] && /^\d/.test(fichas[marcado + 1].w)) iNum = marcado + 1;
        if (iNum < 0) {
            for (let j = k; j < fichas.length; j++) {
                const w = fichas[j].w;
                if (!esNumero(w)) continue;
                if (j === k && /^\d/.test(w)) {
                    // "CALLE 8 ..." : el 8 es el nombre si detrás hay más nombre y otro número
                    const otro = fichas.slice(j + 1).some(f => esNumero(f.w));
                    if (otro || sigEsMes(j)) continue;
                }
                if (sigEsMes(j)) continue;                                  // "1 DE MAYO"
                // El número debe ir pegado al nombre: si lo precede una palabra de piso, no es el portal
                if (j > 0 && DIR_RELLENO_CON_NUM.has(dirClave(fichas[j - 1].w))) continue;
                iNum = j;
                break;
            }
        }

        const nombreFichas = fichas.slice(k, iNum >= 0 ? iNum : fichas.length).filter(f => f.w !== '#N');
        let nombre = '', numero = '', sobrante = [];
        if (iNum >= 0) {
            numero = fichas[iNum].w;
            if (/^KM:/.test(numero)) numero = 'km ' + numero.slice(3).replace('.', ',');
            else if (numero !== 'S/N') numero = numero.replace(/[A-Z]$/i, '');
            sobrante = fichas.slice(iNum + 1);
        } else {
            // Sin número: el nombre llega hasta la primera coma; lo demás puede ser la población
            const s0 = fichas[k] ? fichas[k].seg : 0;
            // El nombre termina en la primera coma o en una palabra de piso/parcela seguida de número
            let fin = fichas.findIndex((f, j) => j > k && (f.seg !== s0 || DIR_RELLENO_CON_NUM.has(dirClave(f.w)) && fichas[j + 1] && /^\d/.test(fichas[j + 1].w)));
            if (fin < 0) fin = fichas.length;
            const nom = fichas.slice(k, fin).filter(f => f.w !== '#N');
            nombreFichas.length = 0; nom.forEach(f => nombreFichas.push(f));
            sobrante = fichas.slice(fin);
        }
        nombre = nombreFichas.map(f => f.w).join(' ').replace(/[,.]+$/, '').trim();
        if (!nombre || (!tipo && !/\p{L}/u.test(nombre))) return null;
        if (!tipo && !numero && !cp) return null;                         // no parece una dirección

        // 5. Lo que sobra tras el número: se descarta piso/puerta y se queda lo que parezca población
        const restos = [];
        let actual = null, segActual = -1;
        sobrante.forEach((f, j) => {
            const c = dirClave(f.w);
            const sig = sobrante[j + 1];
            const articulo = /^(A|O)$/.test(c) && sig && sig.seg === f.seg && /^\p{L}{3,}$/u.test(sig.w) && !DIR_RELLENO.has(dirClave(sig.w));   // A Coruña, O Porriño
            const relleno = !articulo && (!c || c === 'N' || DIR_RELLENO.has(c) || DIR_RELLENO_CON_NUM.has(c) ||
                /^\d/.test(c) || /^[A-Z]$/.test(c) || /º/.test(f.w) || f.w === 'S/N' || f.w === '#N');
            if (relleno) { actual = null; return; }
            if (!actual || f.seg !== segActual) { actual = []; restos.push(actual); segActual = f.seg; }
            actual.push(f.w);
        });
        let poblacionPartes = [];
        if (despues) poblacionPartes = despues.split(',').map(s => s.trim());
        else poblacionPartes = restos.map(r => r.join(' '));
        // Si hay CP, cualquier resto antes de él (salvo provincia) también puede ser la población
        if (despues && restos.length && !dirLimpiarPoblacion(poblacionPartes)) poblacionPartes = restos.map(r => r.join(' '));
        if (!despues && cp === '' && poblacionPartes.length > 1) poblacionPartes = [poblacionPartes.find(p => !dirEsProvincia(p)) || poblacionPartes[0]];
        if (cp && !despues && restos.length) poblacionPartes = restos.map(r => r.join(' '));
        const poblacion = dirLimpiarPoblacion(poblacionPartes);

        // 6. Resultado
        const via = dirTitulo(((tipo ? tipo + ' ' : '') + nombre).replace(/\s+/g, ' '));
        const partes = [via];
        if (numero) partes.push(numero === 'S/N' ? 's/n' : numero);
        const loc = [cp, poblacion ? dirTitulo(poblacion) : ''].filter(Boolean).join(' ');
        if (loc) partes.push(loc);
        const pob = poblacion ? dirTitulo(poblacion) : '';
        return { texto: partes.join(', '), via, tipo, nombre: dirTitulo(nombre), numero: numero === 'S/N' ? 's/n' : numero, cp, poblacion: pob };
    }

    // Versiones de la dirección, de más completa a más sencilla, en el mismo orden que se hace a mano.
    // El CP y el municipio NO se quitan nunca: una calle parecida en otro CP es otra dirección.
    //   1. Calle, número, CP municipio      → "Calle Cabo de la Nau, 48, 52002 Melilla"
    //   2. Calle, CP municipio (sin número) → "Calle Cabo de la Nau, 52002 Melilla"
    //   3. CP municipio                     → "52002 Melilla"
    function variantesDireccion(r) {
        const lugar = [r.cp, r.poblacion].filter(Boolean).join(' ');
        const junta = (...p) => p.filter(Boolean).join(', ');
        const lista = [
            { texto: r.texto, nota: '' },
            { texto: junta(r.via, lugar), nota: 'sin número' },
            { texto: lugar, nota: 'solo CP y municipio' }
        ].filter(v => v.texto && (v.nota !== 'solo CP y municipio' || r.cp || r.poblacion));
        const vistas = new Set();
        return lista.filter(v => {
            const k = v.texto.toLowerCase();
            if (vistas.has(k)) return false;
            vistas.add(k);
            return true;
        });
    }


    // =========================================================
    // SCRIPT PRINCIPAL
    // =========================================================
    function iniciarScriptPrincipal() {

        const OPCIONES_MENU = [
            { nombre: 'KPI-2G', menu: 'rbs-2g_kpi', icono: 'signal' },
            { nombre: 'KPI-3G', menu: 'rbs-3g_kpi', icono: 'signal' },
            { nombre: 'KPI-4G', menu: 'rbs-4g_kpi_noiot', icono: 'signal' },
            { nombre: 'KPI-5G', menu: 'rbs-5g_kpi', icono: 'signal' },
            { nombre: 'Bender', menu: 'site-bender', icono: 'cpu' },
            { nombre: 'OceaneLittle', menu: 'site-olittle', icono: 'ticket' },
            { nombre: 'Alarmas', menu: 'site-mapher_alarm', icono: 'alert' },
            { nombre: 'TP', menu: 'site-zeus', icono: 'file' },
            { nombre: 'OT', menu: 'site-zeuswo', icono: 'file' }
        ];

        // Gestor Calipso Oceane
        if (window.location.href.includes('calipso-oceane.sso.infra.ftgroup')) {
            const CADUCIDAD_MS = 2 * 60 * 1000;

            const leerTicket = () => {
                try {
                    const d = JSON.parse(GM_getValue('brujula_ticket', 'null'));
                    if (d && d.ticket && (Date.now() - d.ts) < CADUCIDAD_MS) return d.ticket;
                } catch (e) {}
                return '';
            };

            if (leerTicket()) {
                let hecho = false;
                const setNativeValue = (el, v) => {
                    const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
                    setter.call(el, v);
                };

                const intentarPegar = setInterval(() => {
                    if (hecho) return;

                    const ticket = leerTicket();
                    if (!ticket) { clearInterval(intentarPegar); return; }

                    const inputTicket = document.getElementById('IDTTIC');
                    const btnBuscar = document.getElementById('btnsx');

                    if (!inputTicket || !btnBuscar || inputTicket.offsetWidth === 0 || document.readyState !== 'complete') return;

                    hecho = true;
                    clearInterval(intentarPegar);
                    GM_setValue('brujula_ticket', '');

                    setTimeout(() => {
                        inputTicket.focus();
                        setNativeValue(inputTicket, ticket);
                        inputTicket.dispatchEvent(new Event('input', { bubbles: true }));
                        inputTicket.dispatchEvent(new Event('change', { bubbles: true }));
                        inputTicket.blur();

                        setTimeout(() => {
                            btnBuscar.disabled = false;
                            btnBuscar.click();
                        }, 800);
                    }, 1500);
                }, 500);

                setTimeout(() => clearInterval(intentarPegar), 60000);
            }
            return;
        }

        // Gestor MXMEFM01
        if (window.location.href.includes('mxmefm01.wnet')) {
            const urlParams = new URLSearchParams(window.location.search);
            const autoSearch = urlParams.get('autoSearch');
            const targetMenu = urlParams.get('targetMenu');

            if (autoSearch) {
                if (targetMenu) {
                    sessionStorage.setItem('brujula_target_menu', targetMenu);
                    sessionStorage.setItem('brujula_target_nodo', autoSearch);
                }

                let lanzada = false;
                const intentarAutoBusqueda = setInterval(() => {
                    if (lanzada) return;

                    const inputTxt = document.getElementById('buscaTxt') ||
                                     document.querySelector('input[name="buscaTxt"]') ||
                                     document.querySelector('input[placeholder*="Busca" i]') ||
                                     document.querySelector('input[type="text"]');

                    if (inputTxt) {
                        const formPadre = inputTxt.closest('form');
                        const btnBuscar = formPadre ? (formPadre.querySelector('input[type="submit"]') || formPadre.querySelector('button') || formPadre.querySelector('input[value*="go" i]')) : null;

                        lanzada = true;
                        clearInterval(intentarAutoBusqueda);

                        inputTxt.focus();
                        inputTxt.value = autoSearch;
                        inputTxt.dispatchEvent(new Event('input', { bubbles: true }));
                        inputTxt.dispatchEvent(new Event('change', { bubbles: true }));

                        setTimeout(() => {
                            if (btnBuscar) btnBuscar.click();
                            else if (formPadre) formPadre.submit();
                        }, 250);
                    }
                }, 300);
                return;
            }

            const menuPendiente = sessionStorage.getItem('brujula_target_menu');
            const nodoPendiente = sessionStorage.getItem('brujula_target_nodo');

            if (menuPendiente && urlParams.has('site')) {
                sessionStorage.removeItem('brujula_target_menu');
                sessionStorage.removeItem('brujula_target_nodo');

                urlParams.set('menu', menuPendiente);

                if (menuPendiente === 'site-mapher_alarm') {
                    urlParams.delete('nodo');
                } else if (menuPendiente === 'site-olittle') {
                    urlParams.delete('nodo');
                    urlParams.set('busqueda', `*${nodoPendiente}*`);
                } else {
                    urlParams.set('nodo', nodoPendiente);
                }

                const nuevaUrl = window.location.pathname + '?' + urlParams.toString();

                if (window.location.search !== '?' + urlParams.toString()) {
                    window.location.replace(nuevaUrl);
                }
            }
            return;
        }

        // =====================================================
        // Lógica Principal Brújula
        // =====================================================
        // Restos de versiones anteriores (estilos globales y elementos sueltos)
        document.querySelectorAll('.nombre-nodo-interno, #buscador-nodos-container, #estilo-nodos-custom, #menu-contextual-nodo').forEach(e => e.remove());
        document.querySelectorAll('.nodo-oculto-custom').forEach(e => e.classList.remove('nodo-oculto-custom'));

        const sr = raizUI();

        // ---------- Etiquetas de nodo en el mapa (estilos en línea: nada de CSS global) ----------
        const ESTILO = (el, props) => { for (const k in props) el.style.setProperty(k, props[k], 'important'); };
        const ETQ_BASE = {
            'position': 'absolute', 'top': '-28px', 'left': '50%', 'transform': 'translateX(-50%)',
            'padding': '3px 9px', 'border-radius': '6px', 'white-space': 'nowrap', 'z-index': '1',
            'font': '700 11px/1.35 "JetBrains Mono", "SF Mono", Consolas, Menlo, monospace', 'letter-spacing': '0.3px',
            'pointer-events': 'auto', 'cursor': 'pointer',
            'transition': 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease, border-color 0.2s ease'
        };
        const ETQ_NORMAL = { 'background': 'rgba(13, 17, 23, 0.92)', 'color': '#f0f6fc', 'border': '1px solid rgba(0, 153, 255, 0.55)', 'box-shadow': '0 4px 12px rgba(0, 0, 0, 0.45)' };
        const ETQ_SEL = { 'background': '#0099ff', 'color': '#ffffff', 'border': '1px solid #0099ff', 'box-shadow': '0 0 0 3px rgba(0, 153, 255, 0.25), 0 4px 12px rgba(0, 0, 0, 0.45)' };
        function pintarEtiqueta(sp, hover) {
            const sel = sp.dataset.bruSel === '1';
            ESTILO(sp, sel ? ETQ_SEL : ETQ_NORMAL);
            ESTILO(sp, {
                'transform': hover ? 'translateX(-50%) scale(1.18)' : 'translateX(-50%)',
                'z-index': hover ? '2' : '1'
            });
            if (hover && !sel) ESTILO(sp, { 'border': '1px solid #0099ff', 'box-shadow': '0 0 14px rgba(0, 153, 255, 0.55), 0 4px 12px rgba(0, 0, 0, 0.45)' });
        }
        function ocultarMarcador(m, ocultar) {
            if (ocultar && m.dataset.bruOculto !== '1') { m.dataset.bruOculto = '1'; m.style.setProperty('display', 'none', 'important'); }
            else if (!ocultar && m.dataset.bruOculto === '1') { delete m.dataset.bruOculto; m.style.removeProperty('display'); }
        }

        // ---------- Menú contextual de nodo ----------
        const menuContextual = document.createElement('div');
        menuContextual.className = 'ia-menu bru-menu';
        menuContextual.setAttribute('role', 'menu');
        menuContextual.style.display = 'none';
        sr.appendChild(menuContextual);

        const abrirPestana = (url) => {
            if (typeof GM_openInTab !== 'undefined') {
                GM_openInTab(url, { active: false, insert: true });
            } else {
                window.open(url, '_blank');
            }
        };
        const urlNodo = (nodo, menu) => `http://mxmefm01.wnet/private/?autoSearch=${encodeURIComponent(nodo)}` + (menu ? `&targetMenu=${encodeURIComponent(menu)}` : '');

        function cerrarMenu() {
            menuContextual.style.display = 'none';
            const a = menuContextual._ancla;
            if (a && a.classList.contains('ia-btn')) { a.classList.remove('is-active'); a.setAttribute('aria-expanded', 'false'); }
            menuContextual._ancla = null;
        }

        // Marca la opción usada cuando el menú sigue abierto (Ctrl + clic)
        function marcarHecho(item) {
            item.classList.remove('is-hecho'); void item.offsetWidth; item.classList.add('is-hecho');
            clearTimeout(item._t); item._t = setTimeout(() => item.classList.remove('is-hecho'), 1800);
        }

        function mostrarMenuContextual(e, nodosTarget, ancla) {
            cerrarMenu();
            menuContextual._ancla = ancla || null;
            if (ancla && ancla.classList.contains('ia-btn')) { ancla.classList.add('is-active'); ancla.setAttribute('aria-expanded', 'true'); }
            const isArray = Array.isArray(nodosTarget);
            const listaNodos = isArray ? nodosTarget : [nodosTarget];
            menuContextual.innerHTML = '';

            const cab = document.createElement('div');
            cab.className = 'ia-menu-group';
            const tit = document.createElement('span');
            tit.className = 'bru-menu-title';
            tit.textContent = isArray ? `Lote · ${nodosTarget.length} ${nodosTarget.length === 1 ? 'nodo' : 'nodos'}` : nodosTarget;
            if (isArray) tit.title = nodosTarget.join(', ');
            cab.appendChild(tit);
            menuContextual.appendChild(cab);

            OPCIONES_MENU.forEach(opcion => {
                const item = document.createElement('button');
                item.type = 'button';
                item.className = 'ia-menu-item';
                item.setAttribute('role', 'menuitem');
                item.innerHTML = iaIcon(opcion.icono, 13) + '<span></span><span class="bru-ok">' + iaIcon('check', 12) + '</span>';
                item.children[1].textContent = opcion.nombre;
                item.addEventListener('click', (ev) => {
                    ev.stopPropagation();
                    listaNodos.forEach(nodo => abrirPestana(urlNodo(nodo, opcion.menu)));
                    if (!ev.ctrlKey) cerrarMenu();
                    else marcarHecho(item);
                });
                menuContextual.appendChild(item);
            });

            const separador = document.createElement('div');
            separador.className = 'ia-menu-sep';
            menuContextual.appendChild(separador);

            const itemTodo = document.createElement('button');
            itemTodo.type = 'button';
            itemTodo.className = 'ia-menu-item ia-menu-item--custom';
            itemTodo.setAttribute('role', 'menuitem');
            const total = listaNodos.length * OPCIONES_MENU.length;
            itemTodo.innerHTML = iaIcon('bolt', 13) + `<span>Abrir todo</span><span class="ia-count" style="margin-left:auto">${total}</span><span class="bru-ok" style="margin-left:6px">${iaIcon('check', 12)}</span>`;
            itemTodo.title = `Abre ${total} pestañas`;
            itemTodo.addEventListener('click', (ev) => {
                ev.stopPropagation();
                listaNodos.forEach(nodo => {
                    OPCIONES_MENU.forEach(opcion => abrirPestana(urlNodo(nodo, opcion.menu)));
                });
                if (!ev.ctrlKey) cerrarMenu();
                else marcarHecho(itemTodo);
            });
            menuContextual.appendChild(itemTodo);

            const pie = document.createElement('div');
            pie.className = 'bru-menu-foot';
            pie.textContent = 'Ctrl + clic para abrir varias sin cerrar el menú';
            menuContextual.appendChild(pie);

            menuContextual.style.display = 'block';

            // Posición: junto al cursor o bajo el botón "Lote", siempre dentro de la ventana
            const r = menuContextual.getBoundingClientRect();
            const ancho = r.width || 210;
            const alto = r.height || 380;
            let posX = e.clientX;
            let posY = e.clientY;
            if (ancla) {
                const rect = ancla.getBoundingClientRect();
                posX = rect.left + rect.width / 2 - ancho / 2;     // centrado bajo el botón, como los menús de la barra
                posY = rect.bottom + 8;
                if (posY + alto > window.innerHeight - 10) posY = rect.top - alto - 6;
            }
            posX = Math.max(10, (posX + ancho > window.innerWidth - 10) ? (window.innerWidth - ancho - 10) : posX);
            posY = Math.max(10, (posY + alto > window.innerHeight - 10) ? (window.innerHeight - alto - 10) : posY);

            menuContextual.style.left = `${posX}px`;
            menuContextual.style.top = `${posY}px`;
        }

        window.addEventListener('click', (e) => {
            if (!e.composedPath().includes(menuContextual)) cerrarMenu();
        }, true);
        window.addEventListener('keydown', (e) => { if (e.key === 'Escape') cerrarMenu(); }, true);

        const pf = ['marcador', 'destino', 'ubicación', 'ubicacion', 'dirección', 'direccion', 'pin', 'dropped', 'marker', 'google'];

        function obtenerTextoNodoValido(el) {
            if (!el) return null;
            let marker = el.closest ? el.closest('gmp-advanced-marker') : null;
            if (!marker && el.classList && el.classList.contains('nombre-nodo-interno')) {
                marker = el.parentElement;
            }
            if (!marker) return null;

            const txt = marker.getAttribute('title') || marker.getAttribute('aria-label') || (marker.querySelector('.nombre-nodo-interno')?.dataset.nombre || '');
            const limpio = txt.trim();
            const n = limpio.toLowerCase();
            if (!n || pf.some(p => n.includes(p))) return null;
            return limpio;
        }

        function getMarkerCoords(marker) {
            if (marker.position && typeof marker.position.lat === 'number') {
                return { lat: marker.position.lat, lng: marker.position.lng };
            } else if (marker.position && typeof marker.position.lat === 'function') {
                return { lat: marker.position.lat(), lng: marker.position.lng() };
            }

            const latAttr = marker.getAttribute('data-lat') || marker.getAttribute('lat');
            const lngAttr = marker.getAttribute('data-lng') || marker.getAttribute('lng');
            if (latAttr && lngAttr) {
                const lat = parseFloat(latAttr);
                const lng = parseFloat(lngAttr);
                if (!isNaN(lat) && !isNaN(lng)) return { lat, lng };
            }
            return null;
        }

        function calcularDistanciaKm(lat1, lon1, lat2, lon2) {
            const R = 6371;
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                      Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return (R * c).toFixed(2);
        }


        // =====================================================
        // DISTANCIAS: punto rojo de la dirección ↔ nodos, y entre nodos
        // =====================================================
        // El punto rojo es el marcador del mapa que NO es un nodo (los mismos que se excluyen con "pf")
        function buscarPin() {
            return Array.from(document.querySelectorAll('gmp-advanced-marker')).find(m => {
                const t = (m.getAttribute('title') || m.getAttribute('aria-label') || '').toLowerCase().trim();
                if (t && !pf.some(x => t.includes(x))) return false;
                const r = m.getBoundingClientRect();
                return r.width > 0 && r.height > 0;
            }) || null;
        }

        // Metros por píxel según la barra de escala de Google ("200 m ▭"). Solo se usa si el marcador
        // no expone sus coordenadas; entonces la distancia se marca como aproximada (≈).
        function metrosPorPixel(dentro) {
            const mapa = dentro && dentro.closest('.gm-style');
            if (!mapa) return null;
            const spans = mapa.querySelectorAll('span');
            for (const sp of spans) {
                const m = /^\s*([\d.,]+)\s*(m|km)\s*$/i.exec(sp.textContent || '');
                if (!m) continue;
                const barra = sp.nextElementSibling;
                const ancho = barra ? barra.getBoundingClientRect().width : 0;
                if (ancho < 10) continue;
                const metros = parseFloat(m[1].replace(/\./g, '').replace(',', '.')) * (m[2].toLowerCase() === 'km' ? 1000 : 1);
                if (metros > 0) return metros / ancho;
            }
            return null;
        }

        // Punto en pantalla: los nodos por su centro; el punto rojo por la punta (abajo)
        function puntoPantalla(m, esPin) {
            const r = m.getBoundingClientRect();
            return { x: r.left + r.width / 2, y: esPin ? r.bottom : r.top + r.height / 2 };
        }

        // Distancia en metros entre dos marcadores: por coordenadas (exacta) o por la escala del mapa (≈)
        function distanciaEntre(a, b, aEsPin, bEsPin) {
            const ca = getMarkerCoords(a), cb = getMarkerCoords(b);
            if (ca && cb) return { m: parseFloat(calcularDistanciaKm(ca.lat, ca.lng, cb.lat, cb.lng)) * 1000, aprox: false };
            const mpp = metrosPorPixel(a);
            if (!mpp) return null;
            const pa = puntoPantalla(a, aEsPin), pb = puntoPantalla(b, bEsPin);
            return { m: Math.hypot(pa.x - pb.x, pa.y - pb.y) * mpp, aprox: true };
        }

        function textoDistancia(d) {
            if (!d) return '';
            const m = d.m;
            let t;
            if (m < 1000) t = (m < 100 ? Math.round(m) : Math.round(m / 10) * 10) + ' m';
            else t = (m / 1000).toFixed(m < 10000 ? 2 : 1).replace('.', ',') + ' km';
            return (d.aprox ? '≈ ' : '') + t;
        }

        // ---------- Líneas sobre el mapa ----------
        const NS_SVG = 'http://www.w3.org/2000/svg';
        const capaLineas = document.createElementNS(NS_SVG, 'svg');
        capaLineas.setAttribute('class', 'bru-lineas');
        capaLineas.setAttribute('aria-hidden', 'true');
        sr.appendChild(capaLineas);
        let lineas = [];                 // [{ a, b, aPin, bPin, texto, el }]
        let bucleLineas = null;

        function crearLinea(tipo) {
            const g = document.createElementNS(NS_SVG, 'g');
            g.setAttribute('class', 'bru-linea' + (tipo ? ' bru-linea--' + tipo : ''));
            const medidaAB = tipo === 'medida';
            g.innerHTML = '<line class="bru-l-halo"/><line class="bru-l-trazo"/><circle class="bru-l-fin" r="' + (medidaAB ? 9 : 4) + '"/><circle class="bru-l-fin" r="' + (medidaAB ? 9 : 4) + '"/>' +
                (medidaAB ? '<text class="bru-l-letra">A</text><text class="bru-l-letra">B</text>' : '') +
                '<g class="bru-l-et"><rect rx="' + (medidaAB ? 13 : 6) + '" ry="' + (medidaAB ? 13 : 6) + '" height="' + (medidaAB ? 26 : 22) + '"/><text y="' + (medidaAB ? 17.5 : 15) + '"></text></g>';
            capaLineas.appendChild(g);
            return g;
        }

        // Une los pares pedidos; reutiliza las líneas que ya existían (solo se anima la nueva)
        function ponerLineas(pares) {
            const clave = (x) => x.tipo + ':' + x.nombreA + '→' + x.nombreB;
            const nuevas = [];
            pares.forEach(par => {
                const vieja = lineas.find(l => clave(l) === clave(par));
                const l = vieja || Object.assign({}, par, { el: crearLinea(par.tipo) });
                Object.assign(l, par, { el: l.el });
                nuevas.push(l);
            });
            lineas.filter(l => !nuevas.includes(l)).forEach(l => l.el.remove());
            lineas = nuevas;
            if (lineas.length && !bucleLineas) bucleLineas = requestAnimationFrame(dibujarLineas);
            if (!lineas.length) capaLineas.style.display = 'none';
        }

        function dibujarLineas() {
            bucleLineas = null;
            if (!lineas.length) return;
            // La capa se recorta al rectángulo del mapa (no pinta sobre el panel lateral ni la cabecera)
            const mapa = lineas[0].a.closest('.gm-style') || lineas[0].a.parentElement;
            const mr = mapa ? mapa.getBoundingClientRect() : { left: 0, top: 0, width: innerWidth, height: innerHeight };
            const visible = mr.width > 0 && enCobertura();
            capaLineas.style.display = visible ? 'block' : 'none';
            if (visible) {
                Object.assign(capaLineas.style, { left: mr.left + 'px', top: mr.top + 'px', width: mr.width + 'px', height: mr.height + 'px' });
                lineas.forEach(l => {
                    const ok = l.a.isConnected && l.b.isConnected && l.a.getBoundingClientRect().width > 0 && l.b.getBoundingClientRect().width > 0;
                    l.el.style.display = ok ? '' : 'none';
                    if (!ok) return;
                    const pa = puntoPantalla(l.a, l.aPin), pb = puntoPantalla(l.b, l.bPin);
                    const x1 = pa.x - mr.left, y1 = pa.y - mr.top, x2 = pb.x - mr.left, y2 = pb.y - mr.top;
                    l.el.querySelectorAll('line').forEach(ln => { ln.setAttribute('x1', x1); ln.setAttribute('y1', y1); ln.setAttribute('x2', x2); ln.setAttribute('y2', y2); });
                    const fines = l.el.querySelectorAll('.bru-l-fin');
                    fines[0].setAttribute('cx', x1); fines[0].setAttribute('cy', y1);
                    fines[1].setAttribute('cx', x2); fines[1].setAttribute('cy', y2);
                    const letras = l.el.querySelectorAll('.bru-l-letra');
                    if (letras.length) { letras[0].setAttribute('x', x1); letras[0].setAttribute('y', y1); letras[1].setAttribute('x', x2); letras[1].setAttribute('y', y2); }
                    const et = l.el.querySelector('.bru-l-et');
                    const txt = et.querySelector('text');
                    if (txt.textContent !== l.texto) txt.textContent = l.texto;
                    const pad = l.tipo === 'medida' ? 12 : 8, alto = l.tipo === 'medida' ? 26 : 22;
                    const w = Math.ceil(txt.getComputedTextLength ? txt.getComputedTextLength() : l.texto.length * 7) + pad * 2;
                    et.querySelector('rect').setAttribute('width', w);
                    txt.setAttribute('x', pad);
                    et.setAttribute('transform', `translate(${((x1 + x2) / 2 - w / 2).toFixed(1)} ${((y1 + y2) / 2 - alto / 2).toFixed(1)})`);
                    // Línea muy corta: la etiqueta taparía los puntos; se oculta
                    et.style.display = Math.hypot(x2 - x1, y2 - y1) < 50 ? 'none' : '';
                });
            }
            bucleLineas = requestAnimationFrame(dibujarLineas);
        }

        function nodoEnPunto(e) {
            let textoNodo = obtenerTextoNodoValido(e.target);
            if (!textoNodo) {
                const elements = document.elementsFromPoint(e.clientX, e.clientY);
                for (const el of elements) {
                    textoNodo = obtenerTextoNodoValido(el);
                    if (textoNodo) break;
                }
            }
            return textoNodo;
        }

        // Tabla de alertas: los textos con acción se resaltan al pasar el ratón
        document.addEventListener('mouseover', (e) => {
            const sp = e.target.closest && e.target.closest('.table-alertas td span[title]');
            if (!sp || sp.dataset.bruHover) return;
            sp.dataset.bruHover = '1';
            sp.style.setProperty('cursor', 'context-menu');
            sp.style.setProperty('transition', 'color 0.2s ease');
            sp.style.setProperty('color', '#0099ff');
            sp.addEventListener('mouseleave', () => { delete sp.dataset.bruHover; sp.style.removeProperty('color'); }, { once: true });
        }, true);

        window.addEventListener('contextmenu', (e) => {
            if (e.composedPath().includes(sr.host)) return;     // dentro de la interfaz de BRÚJULA PRO
            const elementoIncidencia = e.target.closest('.table-alertas a.text-primary.font-bold');
            const elementoSecundario = e.target.closest('.table-alertas td span[title]');

            if (elementoIncidencia || elementoSecundario) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();

                let numTicket = "";
                let textoSeleccionado = window.getSelection().toString().trim();

                if (textoSeleccionado) {
                    numTicket = textoSeleccionado;
                } else if (elementoIncidencia && e.target.closest('a') === elementoIncidencia) {
                    numTicket = elementoIncidencia.textContent.trim();
                } else if (elementoSecundario) {
                    numTicket = elementoSecundario.textContent.trim().split(',')[0].trim();
                }

                if (numTicket) {
                    if (/^\d/.test(numTicket)) {
                        try {
                            GM_setClipboard(numTicket);
                        } catch (err) {
                            navigator.clipboard.writeText(numTicket).catch(() => {});
                        }
                        GM_setValue('brujula_ticket', JSON.stringify({ ticket: numTicket, ts: Date.now() }));
                        const urlCalipso = "https://calipso-oceane.sso.infra.ftgroup/binOceane/Home/StartPage";
                        window.open(urlCalipso, '_blank');
                    } else {
                        window.open(`http://mxmefm01.wnet/private/?autoSearch=${encodeURIComponent(numTicket)}`, '_blank');
                    }
                }
                return;
            }

            const textoNodo = nodoEnPunto(e);
            if (textoNodo) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                mostrarMenuContextual(e, textoNodo);
            } else {
                cerrarMenu();
            }
        }, true);

        window.addEventListener('click', (e) => {
            if (!e.ctrlKey || e.button !== 0) return;
            if (e.composedPath().includes(sr.host)) return;

            const textoNodo = nodoEnPunto(e);
            if (textoNodo) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                window.open(urlNodo(textoNodo), '_blank');
            }
        }, true);

        // ---------- Barra ----------
        // Igual que MASIVAS PRO: barra centrada arriba, oculta salvo en la página "Cobertura móvil".
        const toolbar = document.createElement('div');
        toolbar.className = 'ia-toolbar ia-hidden';
        toolbar.id = 'brujula-pro-barra';
        toolbar.setAttribute('role', 'toolbar');
        toolbar.setAttribute('aria-label', 'BRÚJULA PRO');
        toolbar.innerHTML = `
            <div class="ia-brand">${IADS_LOGO ? `<img src="${IADS_LOGO}" alt="IATelecom">` : '<span class="ia-wordmark">IATelecom</span>'}</div>
            <div class="bru-wrap">
                <button class="ia-btn" id="btn-nodos" type="button" aria-haspopup="true" aria-expanded="false" title="Nodos cargados en el mapa">${iaIcon('signal')}<span>Nodos</span><span class="ia-count" id="contador-nodos">0</span>${iaIcon('chevron', 12)}</button>
                <div class="ia-menu bru-nodos-menu" id="menu-nodos" role="dialog" aria-label="Nodos en el mapa">
                    <div class="bru-search">
                        ${iaIcon('search', 14)}
                        <input class="ia-control" type="text" id="buscador-nodos-input" placeholder="Filtrar nodos (ej: NAVX5, MADX1)" autocomplete="off" spellcheck="false" aria-label="Filtrar nodos">
                        <button class="ia-icon-btn ia-hidden" id="btn-borrar-filtro" type="button" title="Borrar filtro">${iaIcon('x', 13)}</button>
                    </div>
                    <div>
                        <div class="bru-list-head">Nodos en el mapa<em class="bru-orden ia-hidden" id="lista-orden">· por distancia</em><span id="lista-resumen"></span></div>
                        <div class="bru-list" id="lista-nodos-multi" role="group" aria-label="Nodos en el mapa"></div>
                    </div>
                    <div class="bru-tips">
                        <div><span class="ia-kbd-group"><span class="ia-kbd">Clic dcho.</span></span><span>en un nodo: KPI, alarmas, TP, OT…</span></div>
                        <div><span class="ia-kbd-group"><span class="ia-kbd">Ctrl</span>+<span class="ia-kbd">Clic</span></span><span>en un nodo: buscarlo en MXMEFM01</span></div>
                    </div>
                </div>
            </div>
            <button class="ia-btn ia-hidden" id="btn-lote" type="button" aria-haspopup="true">${iaIcon('grid')}<span>Lote</span><span class="ia-count" id="lote-count">0</span>${iaIcon('chevron', 12)}</button>
            <div class="bru-wrap">
                <button class="ia-btn" id="btn-medir" type="button" aria-haspopup="true" aria-expanded="false">${iaIcon('ruler')}<span>Medir</span><span class="bru-medir-val ia-hidden" id="medir-val"></span></button>
                <div class="ia-menu bru-medir-menu" id="menu-medir" role="dialog" aria-label="Medir distancia">
                    <div class="bru-med-head">${iaIcon('ruler', 14)}<span>Medir distancia</span><button class="ia-icon-btn" id="medir-cerrar" type="button" title="Cerrar (Esc)">${iaIcon('x', 13)}</button></div>
                    <div class="bru-med-slots">
                        <button class="bru-slot" type="button" data-slot="a"><span class="bru-slot-k">A</span><span class="bru-slot-i"></span><span class="bru-slot-t"><span class="bru-slot-v"></span><span class="bru-slot-s"></span></span></button>
                        <span class="bru-slot-sep">${iaIcon('chevron-right', 14)}</span>
                        <button class="bru-slot" type="button" data-slot="b"><span class="bru-slot-k">B</span><span class="bru-slot-i"></span><span class="bru-slot-t"><span class="bru-slot-v"></span><span class="bru-slot-s"></span></span></button>
                    </div>
                    <div class="bru-med-res is-vacio" id="medir-res" aria-live="polite"><span class="bru-med-cifra"><span id="medir-num">—</span><span id="medir-uni"></span></span><span class="bru-med-sub" id="medir-sub"></span></div>
                    <div class="bru-med-pista">${iaIcon('bolt', 12)}<span id="medir-pista"></span></div>
                    <div class="bru-med-atajos">
                        <button class="ia-btn" type="button" data-atajo="dir-1">Dirección → 1º</button>
                        <button class="ia-btn" type="button" data-atajo="dir-2">Dirección → 2º</button>
                        <button class="ia-btn" type="button" data-atajo="1-2">1º ↔ 2º</button>
                    </div>
                    <div class="bru-med-comp"><div class="bru-list-head">Más cercanos a la dirección</div><div class="bru-med-rank" id="medir-ranking"></div></div>
                </div>
            </div>
            <button class="ia-btn ia-hidden" id="btn-reset-nodos" type="button" title="Quitar el filtro y las marcas">${iaIcon('refresh')}<span>Limpiar</span></button>
        `;
        sr.appendChild(toolbar);

        const i = $('buscador-nodos-input');
        const lm = $('lista-nodos-multi');
        const c = $('contador-nodos');
        const br = $('btn-reset-nodos');
        const btnLote = $('btn-lote');
        const loteCount = $('lote-count');
        const btnNodos = $('btn-nodos');
        const menuNodos = $('menu-nodos');
        const resumen = $('lista-resumen');
        const btnBorrar = $('btn-borrar-filtro');

        // Las teclas escritas en la barra no deben llegar a los atajos de la página
        toolbar.addEventListener('keydown', (e) => {
            e.stopPropagation();
            if (e.key === 'Escape') { cerrarMenuNodos(); btnNodos.focus(); }
        });

        function abrirMenuNodos() {
            cerrarMenu();
            if (typeof cerrarMedir === 'function') cerrarMedir();
            menuNodos.style.display = 'block';
            btnNodos.classList.add('is-active');
            btnNodos.setAttribute('aria-expanded', 'true');
            setTimeout(() => i.focus(), 60);
        }
        function cerrarMenuNodos() {
            if (menuNodos.style.display !== 'block') return;
            menuNodos.style.display = 'none';
            btnNodos.classList.remove('is-active');
            btnNodos.setAttribute('aria-expanded', 'false');
        }
        btnNodos.addEventListener('click', (e) => {
            e.stopPropagation();
            if (menuNodos.style.display === 'block') cerrarMenuNodos(); else abrirMenuNodos();
        });
        window.addEventListener('click', (e) => {
            if (!e.composedPath().includes(menuNodos) && !e.composedPath().includes(btnNodos)) cerrarMenuNodos();
        }, true);

        let ln = new Set();
        let ns = new Set();

        btnLote.addEventListener('click', (e) => {
            e.stopPropagation();
            cerrarMenuNodos();
            if (ns.size > 0) {
                if (menuContextual.style.display === 'block' && menuContextual._ancla === btnLote) { cerrarMenu(); return; }
                mostrarMenuContextual(e, Array.from(ns), btnLote);
            }
        });

        function ac() {
            lm.innerHTML = '';
            if (!ln.size) {
                lm.innerHTML = '<div class="ia-empty">No hay nodos en el mapa. Busca una dirección para cargarlos.</div>';
                fl();
                return;
            }
            Array.from(ln).sort().forEach(nn => {
                const l = document.createElement('label');
                l.className = 'bru-node' + (ns.has(nn) ? ' is-sel' : '');
                const ck = document.createElement('input');
                ck.type = 'checkbox';
                ck.value = nn;
                if (ns.has(nn)) ck.checked = true;

                ck.addEventListener('change', (e) => {
                    if (e.target.checked) ns.add(e.target.value);
                    else ns.delete(e.target.value);
                    l.classList.toggle('is-sel', e.target.checked);
                    p();
                });

                const chk = document.createElement('span');
                chk.className = 'bru-check';
                chk.innerHTML = iaIcon('check', 11);
                const nombre = document.createElement('span');
                nombre.className = 'bru-node-name';
                nombre.textContent = nn;
                const acc = document.createElement('button');
                acc.type = 'button';
                acc.className = 'ia-icon-btn';
                acc.title = 'Opciones de ' + nn;
                acc.innerHTML = iaIcon('more', 14);
                acc.addEventListener('click', (ev) => { ev.preventDefault(); ev.stopPropagation(); mostrarMenuContextual(ev, nn, acc); });

                const dist = document.createElement('span');
                dist.className = 'bru-node-dist';
                dist.title = 'Distancia al punto de la dirección';
                l.appendChild(ck);
                l.appendChild(chk);
                l.appendChild(nombre);
                l.appendChild(dist);
                l.appendChild(acc);
                lm.appendChild(l);
            });
            fl();
        }

        function cl(t) {
            let m = t.match(/^([a-z]{3})[a-z]?(\d+)/i);
            return m ? (m[1] + m[2]).toLowerCase() : t.toLowerCase();
        }

        function fl() {
            const rq = i.value.trim();
            const qs = rq ? rq.split(',').map(q => cl(q.trim())).filter(q => q !== '') : [];
            const listItems = lm.querySelectorAll('.bru-node');
            let visibles = 0;

            listItems.forEach(item => {
                const val = item.querySelector('input').value;
                let mo = true;
                if (qs.length > 0) {
                    const cnn = cl(val);
                    const nnn = val.toLowerCase();
                    mo = qs.some(q => cnn.includes(q) || nnn.includes(q));
                }
                item.style.display = mo ? 'flex' : 'none';
                if (mo) visibles++;
            });

            btnBorrar.classList.toggle('ia-hidden', !rq);
            let vacioFiltro = lm.querySelector('.bru-vacio-filtro');
            if (ln.size && qs.length && !visibles) {
                if (!vacioFiltro) {
                    vacioFiltro = document.createElement('div');
                    vacioFiltro.className = 'ia-empty bru-vacio-filtro';
                    lm.appendChild(vacioFiltro);
                }
                vacioFiltro.textContent = 'Ningún nodo coincide con «' + rq + '».';
            } else if (vacioFiltro) vacioFiltro.remove();
            const txt = !ln.size ? '' : (qs.length ? `${visibles} de ${ln.size}` : `${ln.size}`) + (ns.size ? ` · ${ns.size} ${ns.size === 1 ? 'marcado' : 'marcados'}` : '');
            if (resumen.textContent !== txt) resumen.textContent = txt;
        }

        // Muestra u oculta un elemento de la barra animando su ancho para que no dé saltos
        function mostrarEnBarra(el, mostrar) {
            if (el.classList.contains('ia-hidden') === !mostrar) return;
            el.classList.toggle('ia-hidden', !mostrar);
            if (mostrar) iaAnim(el, [{ opacity: 0, transform: 'translateY(4px)' }, { opacity: 1, transform: 'none' }], { duration: 260 });
        }

        function p() {
            const rq = i.value.trim();
            const qs = rq ? rq.split(',').map(q => cl(q.trim())).filter(q => q !== '') : [];
            ns.forEach(n => qs.push(cl(n.trim())));

            let nd = false;
            let marcadoresActuales = new Set();
            const marcadorDe = new Map();          // nombre → marcador visible

            document.querySelectorAll('gmp-advanced-marker').forEach(m => {
                const txt = m.getAttribute('title') || m.getAttribute('aria-label') || '';
                const n = txt.toLowerCase().trim();
                const cn = cl(txt);
                const ep = !n || pf.some(p => n.includes(p));

                if (ep) {
                    ocultarMarcador(m, false);
                    return;
                }

                marcadoresActuales.add(txt);

                if (!ln.has(txt)) {
                    ln.add(txt);
                    nd = true;
                }

                let sp = m.querySelector('.nombre-nodo-interno');
                if (!sp) {
                    ESTILO(m, { 'overflow': 'visible', 'cursor': 'pointer' });
                    sp = document.createElement('span');
                    sp.className = 'nombre-nodo-interno';
                    sp.dataset.nombre = txt;
                    const spNombre = document.createElement('span');
                    spNombre.textContent = txt;
                    const spDist = document.createElement('span');
                    spDist.className = 'bru-etq-dist';
                    ESTILO(spDist, { 'margin-left': '7px', 'padding-left': '7px', 'border-left': '1px solid currentColor', 'font-weight': '600', 'opacity': '0.8', 'display': 'none' });
                    sp.appendChild(spNombre);
                    sp.appendChild(spDist);
                    ESTILO(sp, ETQ_BASE);
                    pintarEtiqueta(sp, false);
                    m.addEventListener('mouseenter', () => pintarEtiqueta(sp, true));
                    m.addEventListener('mouseleave', () => pintarEtiqueta(sp, false));
                    m.appendChild(sp);
                }
                const sel = ns.has(txt) ? '1' : '0';
                if (sp.dataset.bruSel !== sel) { sp.dataset.bruSel = sel; pintarEtiqueta(sp, m.matches(':hover')); }

                let mo = true;
                if (qs.length > 0) mo = qs.some(q => cn.includes(q) || n.includes(q));

                if (mo) {
                    ocultarMarcador(m, false);
                    if (!marcadorDe.has(txt)) marcadorDe.set(txt, m);
                } else {
                    ocultarMarcador(m, true);
                }
            });

            let nodosBorrados = false;
            ln.forEach(nodoMemoria => {
                if (!marcadoresActuales.has(nodoMemoria)) {
                    ln.delete(nodoMemoria);
                    ns.delete(nodoMemoria);
                    nodosBorrados = true;
                }
            });

            if (nd || nodosBorrados || (!ln.size && !lm.querySelector('.ia-empty'))) ac();
            fl();

            if (c.textContent !== String(ln.size)) c.textContent = ln.size;
            btnNodos.title = `${ln.size} ${ln.size === 1 ? 'nodo cargado' : 'nodos cargados'} en el mapa`;

            iaCambioSuave(btnLote, () => {
                if (loteCount.textContent !== String(ns.size)) loteCount.textContent = ns.size;
            });
            mostrarEnBarra(btnLote, ns.size > 0);
            btnLote.title = `Abrir opciones para ${ns.size} ${ns.size === 1 ? 'nodo marcado' : 'nodos marcados'}`;
            mostrarEnBarra(br, ns.size > 0 || !!rq);

            actualizarDistancias(marcadorDe);
        }

        // Distancias en etiquetas y lista + datos para el modo Medir
        let ranking = [];                // [{ nombre, d }] nodos ordenados por distancia a la dirección
        function actualizarDistancias(marcadorDe) {
            const pin = buscarPin();
            const dist = new Map();                  // nombre → distancia al punto rojo
            if (pin) marcadorDe.forEach((m, nombre) => { const d = distanciaEntre(pin, m, true, false); if (d) dist.set(nombre, d); });

            // Etiquetas del mapa: "CLM2274 | 620 m". Un nodo puede tener varios marcadores superpuestos
            // (uno por sector/tecnología): se actualizan todos, no solo el primero.
            document.querySelectorAll('gmp-advanced-marker .nombre-nodo-interno').forEach(sp => {
                const sd = sp.querySelector('.bru-etq-dist');
                if (!sd) return;
                const t = textoDistancia(dist.get(sp.dataset.nombre));
                if (sd.textContent !== t) sd.textContent = t;
                sd.style.setProperty('display', t ? 'inline' : 'none', 'important');
            });

            // Lista del menú Nodos: distancia en cada fila y orden de más cercano a más lejano
            const orden = Array.from(dist.keys()).sort((x, y) => dist.get(x).m - dist.get(y).m);
            lm.querySelectorAll('.bru-node').forEach(fila => {
                const nombre = fila.querySelector('input').value;
                const t = textoDistancia(dist.get(nombre));
                const sd = fila.querySelector('.bru-node-dist');
                if (sd.textContent !== t) sd.textContent = t;
                const pos = orden.indexOf(nombre);
                fila.style.order = pos >= 0 ? pos : orden.length + 1;
            });
            const cab = $('lista-orden');
            if (cab) cab.classList.toggle('ia-hidden', !dist.size);

            ranking = orden.map(n => ({ nombre: n, d: dist.get(n) }));
            refrescarMedida();
        }

        // =====================================================
        // MEDIR: elegir dos puntos del mapa (punto rojo o nodos) y ver la distancia
        // =====================================================
        const medida = { activa: false, a: null, b: null, siguiente: 'a' };   // punto: { tipo: 'pin' | 'nodo', nombre }
        const btnMedir = $('btn-medir');
        const menuMedir = $('menu-medir');
        const medirVal = $('medir-val');

        const nombrePunto = (pt) => !pt ? '' : (pt.tipo === 'pin' ? 'Dirección' : pt.nombre);
        const mismoPunto = (x, y) => !!x && !!y && x.tipo === y.tipo && (x.tipo === 'pin' || x.nombre === y.nombre);
        // Marcador visible de un punto (un nodo puede tener varios superpuestos: vale cualquiera visible)
        function elementoDe(pt) {
            if (!pt) return null;
            if (pt.tipo === 'pin') return buscarPin();
            let primero = null;
            for (const m of document.querySelectorAll('gmp-advanced-marker')) {
                if ((m.getAttribute('title') || m.getAttribute('aria-label') || '') !== pt.nombre) continue;
                if (!primero) primero = m;
                if (m.getBoundingClientRect().width > 0) return m;
            }
            return primero;
        }
        function medirEntre(a, b) {
            const ea = elementoDe(a), eb = elementoDe(b);
            if (!ea || !eb) return null;
            return distanciaEntre(ea, eb, a.tipo === 'pin', b.tipo === 'pin');
        }
        const puestoDe = (pt) => pt && pt.tipo === 'nodo' ? ranking.findIndex(r => r.nombre === pt.nombre) : -1;

        function abrirMedir() {
            cerrarMenuNodos(); cerrarMenu();
            medida.activa = true;
            // Al abrir, ya mide la dirección hasta el nodo más cercano
            if (!medida.a && buscarPin()) medida.a = { tipo: 'pin' };
            if (!medida.b && ranking[0] && medida.a && medida.a.tipo === 'pin') medida.b = { tipo: 'nodo', nombre: ranking[0].nombre };
            medida.siguiente = medida.a ? 'b' : 'a';
            menuMedir.style.display = 'block';
            btnMedir.classList.add('is-active');
            btnMedir.setAttribute('aria-expanded', 'true');
            refrescarMedida(true);
        }
        function cerrarMedir() {
            if (!medida.activa) return;
            medida.activa = false;
            menuMedir.style.display = 'none';
            btnMedir.classList.remove('is-active');
            btnMedir.setAttribute('aria-expanded', 'false');
            refrescarMedida();
        }
        btnMedir.addEventListener('click', (e) => { e.stopPropagation(); if (medida.activa) cerrarMedir(); else abrirMedir(); });
        $('medir-cerrar').addEventListener('click', cerrarMedir);
        menuMedir.querySelectorAll('[data-slot]').forEach(b => b.addEventListener('click', () => { medida.siguiente = b.dataset.slot; refrescarMedida(); }));
        menuMedir.querySelectorAll('[data-atajo]').forEach(b => b.addEventListener('click', () => {
            const n = (k) => ranking[k] ? { tipo: 'nodo', nombre: ranking[k].nombre } : null;
            const atajo = b.dataset.atajo;
            if (atajo === 'dir-1') { medida.a = { tipo: 'pin' }; medida.b = n(0); }
            if (atajo === 'dir-2') { medida.a = { tipo: 'pin' }; medida.b = n(1); }
            if (atajo === '1-2') { medida.a = n(0); medida.b = n(1); }
            medida.siguiente = 'b';
            refrescarMedida(true);
        }));
        $('medir-ranking').addEventListener('click', (e) => {
            const fila = e.target.closest('[data-nodo]');
            if (!fila || !buscarPin()) return;
            medida.a = { tipo: 'pin' }; medida.b = { tipo: 'nodo', nombre: fila.dataset.nodo }; medida.siguiente = 'b';
            refrescarMedida(true);
        });

        // Clic en el mapa con Medir abierto: el punto rojo o un nodo pasan a ser A o B
        function puntoEnClic(e) {
            const pin = buscarPin();
            const pila = [e.target].concat(document.elementsFromPoint(e.clientX, e.clientY));
            for (const el of pila) {
                const m = el && el.closest ? el.closest('gmp-advanced-marker') : null;
                if (!m) continue;
                if (m === pin) return { tipo: 'pin' };
                const nombre = obtenerTextoNodoValido(el);
                if (nombre) return { tipo: 'nodo', nombre };
            }
            return null;
        }
        function elegirPunto(pt) {
            const otro = medida.siguiente === 'a' ? medida.b : medida.a;
            if (mismoPunto(pt, otro)) return;
            medida[medida.siguiente] = pt;
            medida.siguiente = 'b';                 // A queda fija como referencia; cada clic nuevo cambia B
            refrescarMedida(true);
        }
        ['pointerdown', 'mousedown', 'pointerup', 'mouseup'].forEach(tipo => window.addEventListener(tipo, (e) => {
            if (!medida.activa || e.button !== 0 || e.composedPath().includes(sr.host)) return;
            if (puntoEnClic(e)) { e.stopPropagation(); e.stopImmediatePropagation(); }   // Brújula no abre su ficha mientras se mide
        }, true));
        window.addEventListener('click', (e) => {
            if (!medida.activa || e.button !== 0 || e.ctrlKey || e.composedPath().includes(sr.host)) return;
            const pt = puntoEnClic(e);
            if (!pt) return;                        // clic en el mapa vacío: se deja mover el mapa
            e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
            elegirPunto(pt);
        }, true);
        window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && medida.activa) cerrarMedir(); }, true);

        // Pinta panel, valor de la barra y línea del mapa
        let firmaMedida = '';
        function refrescarMedida(animar) {
            const pin = buscarPin();
            // El valor de la barra: la medida actual o, sin medir, el nodo más cercano
            let val = '', tit = 'Medir distancias en el mapa';
            const d = medida.a && medida.b ? medirEntre(medida.a, medida.b) : null;
            if (medida.activa && d) { val = textoDistancia(d); tit = `${nombrePunto(medida.a)} → ${nombrePunto(medida.b)}: ${val}`; }
            else if (pin && ranking[0]) { val = textoDistancia(ranking[0].d); tit = `Nodo más cercano a la dirección: ${ranking[0].nombre} · ${val}`; }
            if (medirVal.textContent !== val) iaCambioSuave(btnMedir, () => { medirVal.textContent = val; medirVal.classList.toggle('ia-hidden', !val); });
            btnMedir.title = tit;

            // Línea en el mapa solo mientras se mide
            const ea = medida.activa ? elementoDe(medida.a) : null, eb = medida.activa ? elementoDe(medida.b) : null;
            ponerLineas(ea && eb && d ? [{ a: ea, b: eb, aPin: medida.a.tipo === 'pin', bPin: medida.b.tipo === 'pin', nombreA: nombrePunto(medida.a), nombreB: nombrePunto(medida.b), texto: textoDistancia(d), tipo: 'medida' }] : []);
            document.querySelectorAll('gmp-advanced-marker').forEach(m => {
                if (medida.activa) m.style.setProperty('cursor', 'crosshair', 'important');
                else if (m.style.getPropertyValue('cursor') === 'crosshair') m.style.setProperty('cursor', 'pointer', 'important');
            });
            if (!medida.activa) return;

            // Huecos A y B
            ['a', 'b'].forEach(k => {
                const slot = menuMedir.querySelector(`[data-slot="${k}"]`);
                const pt = medida[k];
                slot.classList.toggle('is-next', medida.siguiente === k);
                slot.classList.toggle('is-vacio', !pt);
                const v = slot.querySelector('.bru-slot-v');
                const ico = slot.querySelector('.bru-slot-i');
                const puesto = puestoDe(pt);
                const nuevo = !pt ? 'Elige en el mapa' : nombrePunto(pt);
                if (v.textContent !== nuevo) v.textContent = nuevo;
                ico.innerHTML = !pt ? '' : iaIcon(pt.tipo === 'pin' ? 'pin' : 'signal', 12);
                const sub = slot.querySelector('.bru-slot-s');
                sub.textContent = !pt ? '' : pt.tipo === 'pin' ? 'Punto rojo' : (puesto >= 0 ? `${puesto + 1}º más cercano` : 'Nodo');
            });
            $('medir-pista').textContent = medida.siguiente === 'a' ? 'Haz clic en el punto rojo o en un nodo para A' : 'Haz clic en el punto rojo o en un nodo para B';

            // Resultado
            const res = $('medir-res');
            const num = $('medir-num'), uni = $('medir-uni'), sub = $('medir-sub');
            if (d) {
                const t = textoDistancia(d).replace('≈ ', '');
                const [n, u] = t.split(' ');
                if (num.textContent !== n) num.textContent = n;
                uni.textContent = u;
                sub.textContent = (d.aprox ? 'aproximada (escala del mapa) · ' : '') + 'en línea recta';
                res.classList.remove('is-vacio');
                const firma = nombrePunto(medida.a) + '|' + nombrePunto(medida.b);
                if (animar && firma !== firmaMedida) { res.classList.remove('is-nuevo'); void res.offsetWidth; res.classList.add('is-nuevo'); }
                firmaMedida = firma;
            } else {
                num.textContent = '—'; uni.textContent = '';
                sub.textContent = !pin && !ranking.length ? 'Busca una dirección para ver el punto rojo y los nodos' : 'Elige dos puntos';
                res.classList.add('is-vacio');
                firmaMedida = '';
            }

            // Atajos disponibles
            menuMedir.querySelector('[data-atajo="dir-1"]').disabled = !pin || ranking.length < 1;
            menuMedir.querySelector('[data-atajo="dir-2"]').disabled = !pin || ranking.length < 2;
            menuMedir.querySelector('[data-atajo="1-2"]').disabled = ranking.length < 2;
            menuMedir.querySelectorAll('[data-atajo]').forEach(b => {
                const a = b.dataset.atajo;
                const activo = (a === 'dir-1' && medida.a?.tipo === 'pin' && ranking[0] && medida.b?.nombre === ranking[0].nombre) ||
                               (a === 'dir-2' && medida.a?.tipo === 'pin' && ranking[1] && medida.b?.nombre === ranking[1].nombre) ||
                               (a === '1-2' && ranking[1] && [medida.a?.nombre, medida.b?.nombre].sort().join() === [ranking[0].nombre, ranking[1].nombre].sort().join());
                b.classList.toggle('is-active', !!activo);
            });

            // Comparativa: los más cercanos a la dirección
            const rk = $('medir-ranking');
            const top = pin ? ranking.slice(0, 4) : [];
            rk.parentElement.classList.toggle('ia-hidden', !top.length);
            const firmaRk = top.map(r => r.nombre + textoDistancia(r.d)).join('|') + '|' + (medida.b ? medida.b.nombre : '');
            if (rk._firma !== firmaRk) {
                rk._firma = firmaRk;
                const max = Math.max(...top.map(r => r.d.m), 1);
                rk.innerHTML = '';
                top.forEach((r, k) => {
                    const fila = document.createElement('button');
                    fila.type = 'button';
                    fila.className = 'bru-rk' + (medida.a?.tipo === 'pin' && medida.b?.nombre === r.nombre ? ' is-sel' : '');
                    fila.dataset.nodo = r.nombre;
                    fila.title = `Medir desde la dirección hasta ${r.nombre}`;
                    fila.innerHTML = `<span class="bru-rk-n">${k + 1}</span><span class="bru-rk-nom"></span><span class="bru-rk-barra"><i style="width:${Math.max(4, r.d.m / max * 100).toFixed(1)}%"></i></span><span class="bru-rk-d">${textoDistancia(r.d)}</span><span class="bru-rk-dif">${k ? '+' + textoDistancia({ m: r.d.m - top[0].d.m, aprox: false }) : 'el más cercano'}</span>`;
                    fila.querySelector('.bru-rk-nom').textContent = r.nombre;
                    rk.appendChild(fila);
                });
            }
        }

        function limpiarDatos() {
            ns.clear();
            i.value = '';

            const checkboxes = lm.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(chk => { chk.checked = false; chk.closest('.bru-node').classList.remove('is-sel'); });

            p();
        }

        br.addEventListener('click', () => { cerrarMenu(); limpiarDatos(); });
        btnBorrar.addEventListener('click', () => { i.value = ''; p(); i.focus(); });
        i.addEventListener('input', p);
        setInterval(p, 1000);
        p();

        // ---------- Dónde se muestra ----------
        // La barra solo aparece en "Cobertura móvil" (mismo vigilante que MASIVAS PRO, cada 500 ms)
        function actualizarVisibilidad() {
            const mostrar = enCobertura();
            if (toolbar.classList.contains('ia-hidden') === !mostrar) return;
            toolbar.classList.toggle('ia-hidden', !mostrar);
            if (!mostrar) { cerrarMenuNodos(); cerrarMenu(); cerrarAvisoDireccion(); cerrarMedir(); }
        }
        setTimeout(actualizarVisibilidad, 0);
        setInterval(actualizarVisibilidad, 500);

        function intentarPulsarBuscar() {
            limpiarDatos();
            setTimeout(() => {
                const botones = Array.from(document.querySelectorAll('button'));
                const botonBuscar = botones.find(btn => btn.classList.contains('button-primary') && btn.textContent.toLowerCase().includes('buscar')) || document.querySelector('button.button-primary.relative.flex-grow');
                if (botonBuscar) botonBuscar.click();
                else revisarResultado();
            }, 400);
        }

        // ---------- Corrector de direcciones al pegar ----------
        // Se busca el campo en cada pegado (antes se fijaba una sola vez y, si al cargar se cogía otro
        // campo de texto, el de la dirección no llegaba a corregirse nunca).
        function campoDireccion() {
            return document.querySelector('input.pac-target-input') ||
                   document.querySelector('input[placeholder*="Dirección" i]') ||
                   document.querySelector('input[placeholder*="direccion" i]') ||
                   document.querySelector('input[aria-label*="direcci" i]') ||
                   document.querySelector('input[name*="dir"]') ||
                   document.querySelector('input[type="text"]');
        }
        function esCampoDireccion(el) {
            return el && el.tagName === 'INPUT' && enCobertura() && el === campoDireccion();
        }

        // Escribe en el campo como lo haría el teclado. Google solo propone sugerencias cuando
        // detecta escritura real: si se cambia el valor "por detrás", el desplegable no aparece.
        function escribirEnCampo(input, texto) {
            input._bruPropio = true;
            try {
                input.focus();
                input.select();
                let ok = false;
                try { ok = document.execCommand('insertText', false, texto); } catch (e) { ok = false; }
                if (!ok || input.value !== texto) {
                    // Respaldo (navegadores sin insertText): valor nativo + eventos
                    const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
                    setter.call(input, texto);
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                    input.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'End' }));
                    input.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, key: 'End' }));
                }
                input.dispatchEvent(new Event('change', { bubbles: true }));
                try { input.setSelectionRange(texto.length, texto.length); } catch (e) {}
            } finally {
                input._bruPropio = false;
            }
        }

        // Desplegable de Google visible con sugerencias, o null
        function desplegableGoogle() {
            return Array.from(document.querySelectorAll('.pac-container')).find(c =>
                c.querySelector('.pac-item') && getComputedStyle(c).display !== 'none' && c.getBoundingClientRect().height > 0) || null;
        }
        // Huella de las sugerencias visibles (para saber si Google ya ha respondido a la búsqueda nueva)
        function sugerenciasGoogle() {
            const c = desplegableGoogle();
            return c ? Array.from(c.querySelectorAll('.pac-item')).map(i => i.textContent).join('|') : null;
        }
        const sinTildes = (t) => (t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
        // ¿La sugerencia es del mismo sitio? Debe nombrar el municipio o el CP de la incidencia.
        // ("Carrer de la Nau, 48, Valencia" no vale para "52002 Melilla")
        function coincideLugar(textoSugerencia, res) {
            if (!res.cp && !res.poblacion) return true;
            const t = sinTildes(textoSugerencia);
            if (res.cp && t.includes(res.cp)) return true;
            if (res.poblacion) {
                const pob = sinTildes(res.poblacion).replace(/[^a-z0-9ñ ]/g, ' ').replace(/\s+/g, ' ').trim();
                if (pob && t.replace(/[^a-z0-9ñ ]/g, ' ').replace(/\s+/g, ' ').includes(pob)) return true;
            }
            return false;
        }
        // Marca en el desplegable de Google las sugerencias del mismo CP/municipio (barra azul)
        // y atenúa las de otros sitios. Devuelve cuántas coinciden.
        function marcarSugerencias(res) {
            const c = desplegableGoogle();
            if (!c) return 0;
            let n = 0;
            c.querySelectorAll('.pac-item').forEach(it => {
                const ok = coincideLugar(it.textContent, res);
                if (ok) n++;
                it.style.setProperty('box-shadow', ok ? 'inset 3px 0 0 #0099ff' : 'none');
                it.style.setProperty('opacity', ok ? '1' : '0.45');
            });
            return n;
        }

        // ---------- Aviso: va ENCIMA del campo para no tapar las sugerencias de Google ----------
        let avisoDir = null;
        let busquedaDir = null;          // búsqueda de sugerencias en curso
        function cerrarAvisoDireccion() {
            if (busquedaDir) { busquedaDir.cancelada = true; busquedaDir = null; }
            if (!avisoDir) return;
            const el = avisoDir; avisoDir = null;
            clearInterval(el._recolocar);
            el.classList.add('is-saliendo');
            const a = iaAnim(el, [{ opacity: 1 }, { opacity: 0, transform: 'translateY(4px)' }], { duration: 140, easing: 'ease-in', fill: 'forwards' });
            if (a) a.onfinish = () => el.remove(); else el.remove();
        }
        // Encima del campo si hay sitio; si no, justo debajo del desplegable de Google (o del campo
        // cuando no hay desplegable). Así nunca tapa ni el campo ni las sugerencias.
        function colocarAviso(av, input) {
            const r = input.getBoundingClientRect();
            av.style.maxWidth = Math.max(320, Math.min(r.width, window.innerWidth - 16)) + 'px';
            const ar = av.getBoundingClientRect();
            let top = r.top - ar.height - 8;
            const barra = $('brujula-pro-barra');
            const limite = (barra && !barra.classList.contains('ia-hidden')) ? barra.getBoundingClientRect().bottom + 8 : 8;
            const pisaBarra = barra && !barra.classList.contains('ia-hidden') && top < limite &&
                r.left < barra.getBoundingClientRect().right && r.left + ar.width > barra.getBoundingClientRect().left;
            if (top < 8 || pisaBarra) {
                const pac = Array.from(document.querySelectorAll('.pac-container')).find(c => getComputedStyle(c).display !== 'none' && c.getBoundingClientRect().height > 0);
                const debajo = pac ? Math.max(pac.getBoundingClientRect().bottom, r.bottom) : r.bottom;
                top = debajo + 8;
            }
            av.style.top = Math.max(8, top) + 'px';
            av.style.left = Math.max(8, Math.min(r.left, window.innerWidth - ar.width - 8)) + 'px';
        }
        // estado: 'buscando' | 'ok' | 'sin'
        function pintarAviso(av, estado, titulo, detalle) {
            av.dataset.estado = estado;
            const ico = av.querySelector('.bru-fix-ico');
            ico.innerHTML = estado === 'buscando' ? '<span class="ia-spinner"></span>' : iaIcon(estado === 'ok' ? 'check' : 'alert', 14);
            av.querySelector('.bru-fix-txt b').textContent = titulo;
            const d = av.querySelector('.bru-fix-det');
            d.textContent = detalle || '';
            d.classList.toggle('ia-hidden', !detalle);
        }
        function crearAviso(input, original) {
            cerrarAvisoDireccion();
            const av = document.createElement('div');
            av.className = 'bru-fix';
            av.setAttribute('role', 'status');
            av.innerHTML = '<span class="bru-fix-ico"></span><div class="bru-fix-txt"><b></b><span class="bru-fix-det"></span><span class="bru-fix-orig">Original: <em></em></span></div>' +
                '<button class="ia-btn" type="button">' + iaIcon('refresh', 12) + '<span>Deshacer</span></button>';
            av.querySelector('em').textContent = original;
            av.querySelector('.bru-fix-orig').title = original;
            const btn = av.querySelector('button');
            if (!original) { av.querySelector('.bru-fix-orig').remove(); btn.remove(); }
            btn.addEventListener('mousedown', (e) => e.preventDefault());       // no quitar el foco del campo
            btn.addEventListener('click', () => {
                if (busquedaDir) { busquedaDir.cancelada = true; busquedaDir = null; }
                escribirEnCampo(input, original);
                cerrarAvisoDireccion();
            });
            sr.appendChild(av);
            avisoDir = av;
            av._recolocar = setInterval(() => { if (avisoDir === av && input.isConnected) colocarAviso(av, input); else clearInterval(av._recolocar); }, 200);
            return av;
        }

        const esperar = (ms) => new Promise(r => setTimeout(r, ms));
        // Al cambiar el texto, Google puede dejar un momento las sugerencias de la búsqueda anterior:
        // solo se tienen en cuenta si han cambiado, o si siguen ahí cuando Google ya ha respondido.
        // Devuelve: 'ok' (hay sugerencias del mismo CP/municipio), 'otras' (solo de otros sitios) o 'nada'.
        async function esperarSugerencias(input, busqueda, ms, previas, res) {
            const inicio = Date.now();
            let visto = 'nada', vistoEn = 0;
            while (Date.now() - inicio < ms) {
                if (busqueda.cancelada) return 'nada';
                const ahora = sugerenciasGoogle();
                if (ahora && (ahora !== previas || Date.now() - inicio >= 700)) {
                    if (marcarSugerencias(res) > 0) return 'ok';
                    if (visto !== 'otras') { visto = 'otras'; vistoEn = Date.now(); }
                    if (ahora !== previas) { previas = ahora; vistoEn = Date.now(); }   // si Google afina la lista, se vuelve a comprobar
                    if (Date.now() - vistoEn >= 400) return 'otras';                    // Google ya respondió: son de otros sitios
                }
                await esperar(90);
            }
            return visto;
        }

        // Escribe la dirección corregida y, si Google no propone nada del mismo CP/municipio,
        // prueba las versiones más sencillas (sin número; solo CP y municipio)
        let esperadaDir = null;          // CP/municipio de la última dirección pegada (para revisar el resultado)
        async function buscarConSugerencias(input, res, original) {
            const variantes = variantesDireccion(res);
            const corregida = res.texto !== original;
            const av = crearAviso(input, original);
            const busqueda = { cancelada: false };
            busquedaDir = busqueda;
            esperadaDir = (res.cp || res.poblacion) ? { cp: res.cp, poblacion: res.poblacion, res } : null;

            pintarAviso(av, 'buscando', corregida ? 'Dirección corregida' : 'Buscando en Google', 'Buscando sugerencias de Google…');
            colocarAviso(av, input);

            let otras = false;
            for (let n = 0; n < variantes.length; n++) {
                if (busqueda.cancelada) return;
                const v = variantes[n];
                if (n > 0) {
                    pintarAviso(av, 'buscando', otras ? 'Sugerencias de otro municipio' : 'Sin sugerencias', `Probando ${v.nota} (${n + 1}/${variantes.length})…`);
                    colocarAviso(av, input);
                }
                const previas = sugerenciasGoogle();
                escribirEnCampo(input, v.texto);
                const r = await esperarSugerencias(input, busqueda, n === 0 ? 1400 : 1100, previas, res);
                if (busqueda.cancelada) return;
                if (r === 'otras') otras = true;
                if (r === 'ok') {
                    busquedaDir = null;
                    const lugar = [res.cp, res.poblacion].filter(Boolean).join(' ');
                    pintarAviso(av, 'ok', n === 0 && corregida ? 'Dirección corregida' : 'Sugerencias encontradas',
                        (n > 0 ? 'Con ' + v.nota + '. ' : '') + (lugar ? 'Las marcadas en azul son de ' + lugar + '.' : 'Elige la que coincida con el domicilio del cliente.'));
                    colocarAviso(av, input);
                    vigilarMarcas(av, res);
                    return;
                }
            }
            // Ninguna versión dio sugerencias del mismo sitio: se deja la más completa para retocarla
            busquedaDir = null;
            if (input.value !== variantes[0].texto) escribirEnCampo(input, variantes[0].texto);
            pintarAviso(av, 'sin', otras ? 'Solo hay sugerencias de otros municipios' : 'Google no da sugerencias',
                'Revisa el CP y el municipio de la incidencia: Google no encuentra ' + ([res.cp, res.poblacion].filter(Boolean).join(' ') || 'esta dirección') + '.');
            colocarAviso(av, input);
        }
        // Mientras el aviso siga abierto, las sugerencias nuevas también se marcan (si el usuario retoca el texto)
        function vigilarMarcas(av, res) {
            const t = setInterval(() => { if (avisoDir !== av) { clearInterval(t); return; } marcarSugerencias(res); }, 250);
        }

        // ---------- Revisión del resultado ----------
        // Tras Buscar, Brújula pone la dirección encontrada como título ("..., 46003 VALÈNCIA, VALENCIA, ESPAÑA").
        // Si su CP no es el de la incidencia, se avisa: es otra dirección.
        const titulosResultado = () => Array.from(document.querySelectorAll('h1, h2, h3, h4, h5'))
            .map(h => h.textContent.replace(/\s+/g, ' ').trim())
            .filter(t => /\b\d{5}\b/.test(t) && /ESPA(Ñ|N)A/i.test(t));
        let revisionResultado = null;
        function revisarResultado() {
            if (!esperadaDir || !esperadaDir.cp) return;
            const esperada = esperadaDir;
            const antes = new Set(titulosResultado());
            if (revisionResultado) clearInterval(revisionResultado);
            const inicio = Date.now();
            revisionResultado = setInterval(() => {
                if (Date.now() - inicio > 10000) { clearInterval(revisionResultado); revisionResultado = null; return; }
                const nuevo = titulosResultado().find(t => !antes.has(t));
                if (!nuevo) return;
                clearInterval(revisionResultado); revisionResultado = null;
                const cps = nuevo.match(/\b\d{5}\b/g) || [];
                const cp = cps[cps.length - 1];
                if (cp && cp !== esperada.cp) {
                    const input = campoDireccion();
                    if (!input) return;
                    const av = crearAviso(input, '');
                    pintarAviso(av, 'sin', `El resultado es de otro código postal (${cp})`,
                        `La incidencia indica ${[esperada.cp, esperada.poblacion].filter(Boolean).join(' ')}: no es la misma dirección. Revisa la búsqueda.`);
                    colocarAviso(av, input);
                    setTimeout(() => { if (avisoDir === av) cerrarAvisoDireccion(); }, 15000);
                }
            }, 300);
        }
        document.addEventListener('click', (e) => {
            const btn = e.target.closest && e.target.closest('button');
            if (btn && enCobertura() && /buscar/i.test(btn.textContent) && !e.composedPath().includes(sr.host)) revisarResultado();
        }, true);

        document.addEventListener('paste', function(e) {
            const input = e.target;
            if (!esCampoDireccion(input)) return;
            const textoPegado = (e.clipboardData || window.clipboardData).getData('text');
            const res = normalizarDireccion(textoPegado);
            if (!res) return;                                   // no parece una dirección: se pega tal cual

            e.preventDefault();
            const original = textoPegado.replace(/\s+/g, ' ').trim();
            buscarConSugerencias(input, res, original);
        }, true);

        // Si el usuario escribe o se va del campo, la búsqueda automática se detiene
        document.addEventListener('input', function(e) {
            if (!avisoDir || !esCampoDireccion(e.target) || e.target._bruPropio) return;
            cerrarAvisoDireccion();
        }, true);
        document.addEventListener('focusout', function(e) {
            if (busquedaDir && esCampoDireccion(e.target)) {
                // Clic en una sugerencia de Google o fuera del campo: no seguir cambiando el texto
                setTimeout(() => { if (document.activeElement !== e.target) cerrarAvisoDireccion(); }, 0);
            }
        }, true);

        document.addEventListener('keydown', function(e) {
            if (!esCampoDireccion(e.target)) return;
            if (busquedaDir && e.key !== 'Shift' && e.key !== 'Control') { busquedaDir.cancelada = true; busquedaDir = null; }
            if (e.key === 'Enter') { cerrarAvisoDireccion(); intentarPulsarBuscar(); }
        }, true);
        window.addEventListener('resize', cerrarAvisoDireccion);
        window.addEventListener('scroll', () => { if (avisoDir) { const inp = campoDireccion(); if (inp) colocarAviso(avisoDir, inp); } }, true);

        document.body.addEventListener('mousedown', function(e) {
            const esSugerenciaGoogle = e.target.closest('.pac-item') || e.target.classList.contains('pac-item');
            if (esSugerenciaGoogle) { cerrarAvisoDireccion(); intentarPulsarBuscar(); }
        });

        // ---------- Aceptar automático del aviso de "Consulta" ----------
        // Misma lógica que antes, pero agrupando las comprobaciones en un solo pase cada 30 ms:
        // con el mapa, el DOM cambia cientos de veces por segundo.
        let revisionPendiente = false;
        function revisarModal() {
            revisionPendiente = false;
            const todosLosBotones = document.querySelectorAll('button, div, span, input[type="button"]');
            todosLosBotones.forEach(elemento => {
                if (elemento.textContent.trim() === 'Aceptar' && elemento.offsetWidth > 0) elemento.click();
            });

            const radioConsulta = Array.from(document.querySelectorAll('input[type="radio"]')).find(radio => {
                const labelText = radio.nextSibling?.textContent || radio.parentElement?.textContent || "";
                return labelText.toLowerCase().includes('consulta');
            });

            const botonAceptarConsulta = Array.from(document.querySelectorAll('button, input[type="button"], div, span')).find(btn => btn.textContent.trim().toLowerCase() === 'aceptar');

            if (radioConsulta && !radioConsulta.checked && botonAceptarConsulta) {
                radioConsulta.click();
                radioConsulta.checked = true;
                radioConsulta.dispatchEvent(new Event('change', { bubbles: true }));
                setTimeout(() => botonAceptarConsulta.click(), 100);
            }
        }
        const observadorModal = new MutationObserver(() => {
            if (revisionPendiente) return;
            revisionPendiente = true;
            setTimeout(revisarModal, 30);
        });

        observadorModal.observe(document.body, { childList: true, subtree: true });
    }

})();
