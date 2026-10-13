(function telecomWizardMaster() {

  // =========================================================================
  // IATELECOM DESIGN SYSTEM v1.5 (mismo bloque que OCEANE PRO)
  // Aislamiento: Shadow DOM (host #telecom-wizard-ui). Sin dependencias externas.
  // =========================================================================
  // >>> LOGO: pega aquí tu línea original "const IADS_LOGO = "data:image/png;base64,...";"
  // >>> Si se deja vacío se muestra el wordmark de texto "IATelecom".
  const IADS_LOGO = "";

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
      'user':     '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
      'phone':    '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
      'globe':    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
      'plane':    '<path d="M10.5 13.5 3 11l1.5-1.5 7 1 4-4.5a2 2 0 0 1 3 3L14 13l1 7-1.5 1.5-2.5-7.5-3 3v3L6.5 22 5 18l-4-1.5 1.5-1.5h3z"/>',
      'message':  '<path d="M4 5h16v11H8l-4 4z"/>',
      'voicemail':'<circle cx="6.5" cy="12" r="3.5"/><circle cx="17.5" cy="12" r="3.5"/><path d="M6.5 15.5h11"/>',
      'search':   '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
      'copy':     '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/>',
      'minus':    '<path d="M5 12h14"/>',
      'shield':   '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="M12 8v5M12 16h.01"/>',
      'trash':    '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>'
  };

  function iaIcon(name, size) {
      const px = size || 14;
      return '<svg class="ia-icon" width="' + px + '" height="' + px + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (IADS_ICONS[name] || '') + '</svg>';
  }

  const IADS_CSS = `
      :host { all: initial; }
      *, *::before, *::after { box-sizing: border-box; }

      /* ---------- TOKENS ---------- */
      :host {
          --ia-brand-500: #0099ff;
          --ia-brand-600: #007acc;
          --ia-brand-glow: rgba(0, 153, 255, 0.35);
          --ia-brand-soft: rgba(0, 153, 255, 0.12);
          --ia-success: #3fb950;
          --ia-warning: #d29922;
          --ia-danger: #f85149;
          --ia-surface-glass: rgba(13, 17, 23, 0.65);
          --ia-surface-bar: rgba(13, 17, 23, 0.85);
          --ia-surface-raised: rgba(13, 17, 23, 0.88);
          --ia-surface-modal: rgba(13, 17, 23, 0.97);
          --ia-surface-solid: #0d1117;
          --ia-hover: rgba(255, 255, 255, 0.08);
          --ia-field: rgba(255, 255, 255, 0.05);
          --ia-overlay: rgba(0, 0, 0, 0.65);
          --ia-border: rgba(255, 255, 255, 0.10);
          --ia-border-strong: rgba(255, 255, 255, 0.18);
          --ia-border-focus: rgba(0, 153, 255, 0.60);
          --ia-text: #f0f6fc;
          --ia-text-2: #c9d1d9;
          --ia-text-3: #8b949e;
          --ia-dot-off: #555555;
          --ia-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          --ia-mono: "JetBrains Mono", "SF Mono", Consolas, Menlo, monospace;
          --ia-fs-2xs: 9px;
          --ia-fs-xs: 11px;
          --ia-fs-sm: 12px;
          --ia-fs-lg: 15px;
          --ia-sp-1: 4px;
          --ia-sp-2: 6px;
          --ia-sp-3: 8px;
          --ia-sp-4: 12px;
          --ia-sp-5: 16px;
          --ia-sp-6: 24px;
          --ia-r-sm: 4px;
          --ia-r-md: 6px;
          --ia-r-lg: 8px;
          --ia-r-xl: 10px;
          --ia-sh-bar: 0 12px 40px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.15);
          --ia-sh-menu: 0 16px 36px rgba(0, 0, 0, 0.60), 0 0 1px rgba(255, 255, 255, 0.20);
          --ia-sh-modal: 0 24px 60px rgba(0, 0, 0, 0.70);
          --ia-sh-fab: 0 4px 16px rgba(0, 0, 0, 0.30);
          --ia-ease: cubic-bezier(0.16, 1, 0.3, 1);
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
      .ia-btn:active { transform: scale(0.97); }
      .ia-btn:focus-visible, .ia-menu-item:focus-visible, .ia-icon-btn:focus-visible { outline: 2px solid var(--ia-brand-500); outline-offset: 1px; }
      .ia-btn.is-active { color: var(--ia-brand-500); border-left-color: var(--ia-brand-500); background-color: var(--ia-brand-soft); box-shadow: inset 0 0 12px rgba(0, 153, 255, 0.05); }
      .ia-btn--primary { background-color: var(--ia-brand-500); border-color: var(--ia-brand-500); color: #fff; }
      .ia-btn--primary:hover { background-color: var(--ia-brand-600); border-color: var(--ia-brand-600); color: #fff; box-shadow: 0 0 14px var(--ia-brand-glow); }
      .ia-btn:disabled { opacity: 0.5; cursor: not-allowed; }
      .ia-btn--danger { color: var(--ia-danger); border-color: rgba(248, 81, 73, 0.45); }
      .ia-btn--danger:hover { color: var(--ia-danger); background-color: rgba(248, 81, 73, 0.1); border-color: var(--ia-danger); }
      .ia-btn.is-busy { color: var(--ia-brand-500); border-color: var(--ia-border); border-left-color: var(--ia-brand-500); background-color: var(--ia-brand-soft); pointer-events: none; cursor: progress; }
      .ia-btn.is-success { color: var(--ia-success); border-color: var(--ia-border); border-left-color: var(--ia-success); background-color: rgba(63, 185, 80, 0.12); box-shadow: none; }
      .ia-btn.is-warning { color: var(--ia-warning); border-color: var(--ia-border); border-left-color: var(--ia-warning); background-color: rgba(210, 153, 34, 0.12); box-shadow: none; }

      /* ---------- MENÚ DESPLEGABLE ---------- */
      .ia-menu { display: none; position: absolute; top: calc(100% + 8px); left: 50%; transform: translateX(-50%); background-color: var(--ia-surface-raised); backdrop-filter: blur(16px) saturate(180%); -webkit-backdrop-filter: blur(16px) saturate(180%); border: 1px solid var(--ia-border); border-radius: var(--ia-r-lg); width: max-content; box-shadow: var(--ia-sh-menu); z-index: var(--ia-z-menu); padding: var(--ia-sp-2); animation: ia-menu-in 0.18s var(--ia-ease); }
      .ia-menu-item { display: block; width: 100%; background: transparent; color: var(--ia-text-2); border: none; border-left: 2px solid transparent; padding: 7px var(--ia-sp-4); cursor: pointer; text-align: left; font-family: inherit; font-size: var(--ia-fs-sm); font-weight: 500; border-radius: var(--ia-r-sm); transition: all 0.15s ease; white-space: nowrap; }
      .ia-menu-item:hover { color: var(--ia-brand-500); border-left-color: var(--ia-brand-500); background-color: var(--ia-brand-soft); padding-left: 14px; }
      .ia-menu-item.is-active { color: var(--ia-brand-500); border-left-color: var(--ia-brand-500); background-color: var(--ia-brand-soft); font-weight: 600; }
      .ia-menu-group { position: sticky; top: calc(-1 * var(--ia-sp-2)); z-index: 1; display: flex; align-items: center; gap: var(--ia-sp-2); margin: var(--ia-sp-2) calc(-1 * var(--ia-sp-2)) 2px; padding: var(--ia-sp-3) var(--ia-sp-4) var(--ia-sp-2); background-color: var(--ia-surface-solid); border-top: 1px solid var(--ia-border); font-size: var(--ia-fs-xs); font-weight: 700; letter-spacing: 0.2px; color: var(--ia-text); }
      .ia-menu-group::before { content: ""; width: 3px; height: 12px; border-radius: 2px; background-color: var(--ia-brand-500); }
      .ia-menu-group-count { margin-left: auto; font-weight: 500; color: var(--ia-text-3); }
      .ia-menu-section { position: relative; }
      .ia-menu-item--grouped { padding-left: 22px; }
      .ia-menu-item--grouped:hover { padding-left: 26px; }
      .ia-menu-item--custom { display: flex; align-items: center; gap: var(--ia-sp-2); color: var(--ia-brand-500); font-weight: 600; }
      .ia-menu-sep { height: 1px; margin: var(--ia-sp-1) 0; background-color: var(--ia-border); }

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

      /* ---------- SUBPANEL ---------- */
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
      @keyframes ia-dd-in { from { opacity: 0; } to { opacity: 1; } }
      @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; transition-delay: 0s !important; }
      }
  `;

  const TW_CSS = `
        /* ================= 360 PRO: componentes del panel (IATelecom DS v1.3) ================= */
        .tw-panel { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: min(1150px, 95vw); max-height: 92vh;
            display: flex; box-sizing: border-box; overflow: hidden; background-color: var(--ia-surface-solid);
            border: 1px solid var(--ia-border); border-radius: var(--ia-r-xl); box-shadow: var(--ia-sh-modal); color: var(--ia-text); font-family: var(--ia-font);
            font-size: var(--ia-fs-sm); z-index: var(--ia-z-modal); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
            animation: tw-pop 0.32s var(--ia-ease); }
        .tw-panel.ia-hidden { display: none !important; }
        .tw-panel * { scrollbar-width: thin; scrollbar-color: var(--ia-border-strong) transparent; }
        .tw-panel ::-webkit-scrollbar { width: 8px; } .tw-panel ::-webkit-scrollbar-thumb { background: var(--ia-border-strong); border-radius: 4px; }

        .tw-rail { position: relative; flex: none; width: 222px; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box; padding: 76px var(--ia-sp-4);
            background: linear-gradient(180deg, rgba(0, 153, 255, 0.05), rgba(255, 255, 255, 0.015) 40%); border-right: 1px solid var(--ia-border); }
        .tw-brand { position: absolute; top: var(--ia-sp-5); left: var(--ia-sp-4); right: var(--ia-sp-4); display: flex; align-items: center; gap: var(--ia-sp-3); height: 36px; padding: 0 var(--ia-sp-2); }
        .tw-brand .ia-brand { padding-right: var(--ia-sp-3); margin-right: 0; }
        .tw-brand .ia-brand img { height: 20px; }
        .tw-title { margin: 0; font-size: var(--ia-fs-lg); font-weight: 700; color: var(--ia-text); letter-spacing: 0.2px; white-space: nowrap; }
        .tw-sidebar { position: relative; display: flex; flex-direction: column; gap: 2px; overflow-y: auto; }
        .tw-nav-ind { position: absolute; left: 0; right: 0; top: 0; height: 0; border-left: 2px solid var(--ia-brand-500); border-radius: var(--ia-r-sm); background-color: var(--ia-brand-soft);
            pointer-events: none; opacity: 0; transition: transform 0.32s var(--ia-ease), height 0.32s var(--ia-ease), opacity 0.2s ease; }
        .tw-cat-btn { position: relative; z-index: 1; display: flex; align-items: center; gap: var(--ia-sp-3); width: 100%; padding: 9px var(--ia-sp-4); background: transparent; border: none;
            border-radius: var(--ia-r-sm); color: var(--ia-text-2); font-family: inherit; font-size: var(--ia-fs-sm); font-weight: 500; text-align: left; cursor: pointer;
            transition: color 0.2s ease, background-color 0.2s ease; }
        .tw-cat-btn .ia-icon { transition: transform 0.25s var(--ia-ease); }
        .tw-cat-btn:hover { color: var(--ia-text); background-color: var(--ia-hover); }
        .tw-cat-btn:hover .ia-icon { transform: translateX(2px); }
        .tw-cat-btn.active { color: var(--ia-brand-500); font-weight: 600; background-color: transparent; }
        .tw-cat-btn:focus-visible { outline: 2px solid var(--ia-brand-500); outline-offset: 1px; }

        .tw-main { flex: 1; min-width: 0; display: flex; flex-direction: column; padding: var(--ia-sp-5) var(--ia-sp-6) var(--ia-sp-6); }
        .tw-top-bar { display: flex; align-items: center; gap: var(--ia-sp-3); padding-bottom: var(--ia-sp-5); margin-bottom: var(--ia-sp-5); border-bottom: 1px solid var(--ia-border); }
        .tw-search { position: relative; flex: 1; min-width: 180px; display: flex; align-items: center; }
        .tw-search .ia-icon { position: absolute; left: 12px; color: var(--ia-text-3); pointer-events: none; transition: color 0.2s ease; }
        .tw-search:focus-within .ia-icon { color: var(--ia-brand-500); }
        .tw-search .ia-control { height: 36px; padding-left: 36px; font-size: var(--ia-fs-sm); font-family: var(--ia-mono); letter-spacing: 0.4px; transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease; }
        .tw-search .ia-control:focus { background-color: rgba(255, 255, 255, 0.07); }
        .tw-search .ia-control::placeholder { font-family: var(--ia-font); letter-spacing: 0; color: var(--ia-text-3); }
        .tw-top-bar .ia-btn { height: 36px; padding: 0 14px; font-size: var(--ia-fs-sm); }
        .tw-top-bar .ia-btn--primary { min-width: 100px; }
        .tw-sep { width: 1px; height: 22px; background: var(--ia-border); flex: none; }
        .tw-top-bar #tw-hide-btn { color: var(--ia-text-3); }
        .tw-top-bar #tw-hide-btn:hover { color: var(--ia-text); }
        .tw-nav-count { margin-left: auto; min-width: 18px; height: 18px; padding: 0 5px; border-radius: 9px; display: inline-flex; align-items: center; justify-content: center;
            background: rgba(248, 81, 73, 0.15); border: 1px solid rgba(248, 81, 73, 0.4); color: var(--ia-danger); font-size: var(--ia-fs-2xs); font-weight: 700; }

        .tw-content-area { flex: 1; min-width: 0; min-height: 280px; overflow-y: auto; padding: 0; }
        .tw-content-area.has-scroll { padding-right: var(--ia-sp-3); margin-right: calc(-1 * var(--ia-sp-3)); }
        .tw-empty { display: flex; flex-direction: column; gap: var(--ia-sp-4); min-height: 280px; height: 100%; align-items: center; justify-content: center; color: var(--ia-text-3); font-size: var(--ia-fs-sm); text-align: center; }
        .tw-empty .ia-icon { color: var(--ia-brand-500); }
        .tw-empty .ia-spinner { width: 18px; height: 18px; }

        .tw-card-header { display: flex; align-items: center; gap: var(--ia-sp-2); font-size: var(--ia-fs-lg); font-weight: 700; color: var(--ia-brand-500); padding-bottom: var(--ia-sp-4); margin-bottom: var(--ia-sp-4); border-bottom: 1px solid var(--ia-border); }

        .tw-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: var(--ia-sp-4); align-items: start; }
        .tw-cards + .tw-cards { margin-top: var(--ia-sp-4); }
        .tw-card { min-width: 0; background: var(--ia-field); border: 1px solid var(--ia-border); border-radius: var(--ia-r-md); padding: var(--ia-sp-4) var(--ia-sp-5); }
        .tw-card--wide { grid-column: 1 / -1; }
        .tw-subgrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); column-gap: 0; }
        .tw-subgrid > .tw-data-list { padding: 0 var(--ia-sp-5); border-left: 1px solid var(--ia-border-strong); }
        .tw-subgrid > .tw-data-list:first-child { padding-left: 0; border-left: none; }
        .tw-subgrid > .tw-data-list:last-child { padding-right: 0; }
        .tw-section-title { display: flex; align-items: center; gap: var(--ia-sp-2); margin: 0 0 var(--ia-sp-3); font-size: var(--ia-fs-xs); font-weight: 700; color: var(--ia-text); letter-spacing: 0.2px; }
        .tw-section-title::before { content: ""; flex: none; width: 3px; height: 12px; border-radius: 2px; background-color: var(--ia-brand-500); }
        .tw-section-title .tw-count { margin-left: auto; }

        .tw-data-list { display: flex; flex-direction: column; }
        .tw-row { display: grid; grid-template-columns: minmax(96px, 1fr) minmax(0, max-content); align-items: start; column-gap: var(--ia-sp-4); padding: 7px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: var(--ia-fs-sm); line-height: 1.4; }
        .tw-row:last-child { border-bottom: none; }
        .tw-row > span:first-child { color: var(--ia-text-3); font-weight: 500; }
        .tw-row > :last-child { justify-self: end; text-align: right; }
        .tw-row b { text-align: right; color: var(--ia-text); font-weight: 600; overflow-wrap: anywhere; }
        .tw-val { display: flex; flex-direction: column; align-items: flex-end; gap: 1px; text-align: right; max-width: 100%; }
        .tw-detail { font-size: var(--ia-fs-xs); color: var(--ia-text-2); overflow-wrap: anywhere; }
        .tw-detail.is-num { font-family: var(--ia-mono); }
        .tw-muted { color: var(--ia-text-3); font-weight: 500; }

        .tw-badge { display: inline-flex; align-items: flex-start; gap: 6px; font-weight: 600; font-size: var(--ia-fs-xs); line-height: 1.5; color: var(--ia-text-2); text-align: right; }
        .tw-badge::before { content: ""; flex: none; width: 6px; height: 6px; margin-top: 0.5em; border-radius: 50%; background-color: var(--ia-dot-off); }
        .tw-badge.is-bad { color: var(--ia-danger); } .tw-badge.is-bad::before { background-color: var(--ia-danger); box-shadow: 0 0 6px rgba(248, 81, 73, 0.5); }
        .tw-badge.is-good { color: var(--ia-success); } .tw-badge.is-good::before { background-color: var(--ia-success); }
        .tw-badge.is-info { color: var(--ia-brand-500); } .tw-badge.is-info::before { background-color: var(--ia-brand-500); }
        .tw-badge.is-warn { color: var(--ia-warning); } .tw-badge.is-warn::before { background-color: var(--ia-warning); }
        .tw-badge.is-off { color: var(--ia-text-3); }
        .tw-volte-ok { color: var(--ia-success) !important; } .tw-volte-warn { color: var(--ia-warning) !important; } .tw-volte-ko { color: var(--ia-danger) !important; }

        .tw-copy, .tw-chip { display: inline-flex; align-items: center; gap: 6px; padding: 2px var(--ia-sp-2); background: var(--ia-brand-soft); border: 1px solid var(--ia-brand-glow); border-radius: var(--ia-r-sm);
            color: var(--ia-brand-500); font-family: var(--ia-mono); font-size: var(--ia-fs-sm); font-weight: 700; line-height: 1.4; }
        .tw-copy { cursor: pointer; transition: all 0.15s ease; }
        .tw-copy:hover { background-color: rgba(0, 153, 255, 0.2); border-color: var(--ia-brand-500); }
        .tw-copy:focus-visible { outline: 2px solid var(--ia-brand-500); outline-offset: 1px; }
        .tw-copy.is-copied { color: var(--ia-success); background-color: rgba(63, 185, 80, 0.12); border-color: rgba(63, 185, 80, 0.5); }
        .tw-copy.is-error { color: var(--ia-warning); background-color: rgba(210, 153, 34, 0.12); border-color: rgba(210, 153, 34, 0.5); }

        .tw-card-header--alert { margin-top: var(--ia-sp-6); color: var(--ia-danger); border-bottom-color: rgba(248, 81, 73, 0.35); }
        .tw-card-header--alert .tw-count { margin-left: var(--ia-sp-1); }
        .tw-alert-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: var(--ia-sp-4); }
        .tw-alert { display: grid; grid-template-columns: auto minmax(0, 1fr) minmax(0, max-content); align-items: start; column-gap: var(--ia-sp-3); width: 100%; box-sizing: border-box;
            padding: var(--ia-sp-4) var(--ia-sp-5); background: linear-gradient(0deg, rgba(248, 81, 73, 0.05), rgba(248, 81, 73, 0.05)), var(--ia-field);
            border: 1px solid rgba(248, 81, 73, 0.3); border-left: 2px solid var(--ia-danger); border-radius: var(--ia-r-md); color: var(--ia-text); font-family: inherit; text-align: left; cursor: pointer; transition: all 0.15s ease; }
        .tw-alert:hover { background: linear-gradient(0deg, rgba(248, 81, 73, 0.1), rgba(248, 81, 73, 0.1)), var(--ia-field); border-color: rgba(248, 81, 73, 0.55); border-left-color: var(--ia-danger); }
        .tw-alert:focus-visible { outline: 2px solid var(--ia-brand-500); outline-offset: 1px; }
        .tw-alert > .ia-icon { color: var(--ia-danger); margin-top: 2px; }
        .tw-alert-txt { min-width: 0; display: flex; flex-direction: column; gap: 2px; }
        .tw-alert-main { font-size: var(--ia-fs-sm); font-weight: 600; overflow-wrap: anywhere; }
        .tw-alert-sub { font-size: var(--ia-fs-xs); color: var(--ia-text-3); overflow-wrap: anywhere; }
        .tw-alert-detail { font-size: var(--ia-fs-xs); color: var(--ia-text-2); overflow-wrap: anywhere; }
        .tw-alert-detail.is-num { font-family: var(--ia-mono); }
        .tw-alert > .tw-val, .tw-alert > .tw-pill { justify-self: end; max-width: 100%; }
        .tw-count { min-width: 18px; height: 18px; padding: 0 5px; border-radius: 9px; display: inline-flex; align-items: center; justify-content: center; font-size: var(--ia-fs-2xs); font-weight: 700;
            background: rgba(248, 81, 73, 0.15); border: 1px solid rgba(248, 81, 73, 0.4); color: var(--ia-danger); }

        .tw-bonos-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: var(--ia-sp-3); }
        .tw-bono-item { display: flex; flex-direction: column; gap: var(--ia-sp-2); padding: var(--ia-sp-4); background: rgba(0, 0, 0, 0.2); border: 1px solid var(--ia-border); border-radius: var(--ia-r-md); }
        .tw-bono-header { display: flex; justify-content: space-between; align-items: flex-start; gap: var(--ia-sp-3); }
        .tw-bono-title { font-weight: 600; color: var(--ia-text); font-size: var(--ia-fs-sm); line-height: 1.35; word-break: break-word; }
        .tw-pill { flex: none; display: inline-flex; align-items: center; gap: 5px; padding: 2px var(--ia-sp-2); border-radius: 9px; font-size: var(--ia-fs-2xs); font-weight: 700; border: 1px solid; }
        .tw-pill.ok { color: var(--ia-success); background: rgba(63, 185, 80, 0.12); border-color: rgba(63, 185, 80, 0.35); }
        .tw-pill.ko { color: var(--ia-danger); background: rgba(248, 81, 73, 0.12); border-color: rgba(248, 81, 73, 0.35); }
        .tw-bono-total { display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding: 8px var(--ia-sp-3); background: rgba(0, 0, 0, 0.25); border-radius: var(--ia-r-sm); }
        .tw-bono-total span { color: var(--ia-text-2); font-weight: 500; }
        .tw-bono-total b { font-size: var(--ia-fs-lg); font-weight: 700; }
        .tw-bono-total b.ok { color: var(--ia-success); } .tw-bono-total b.ko { color: var(--ia-danger); }

        details.tw-card > summary { display: flex; align-items: center; gap: var(--ia-sp-3); list-style: none; cursor: pointer; margin: calc(-1 * var(--ia-sp-4)) calc(-1 * var(--ia-sp-5)); padding: var(--ia-sp-4) var(--ia-sp-5); border-radius: var(--ia-r-md); }
        details.tw-card > summary::-webkit-details-marker { display: none; }
        details.tw-card > summary:hover { background-color: var(--ia-hover); }
        details.tw-card > summary .tw-section-title { margin: 0; }
        details.tw-card[open] > summary { margin-bottom: var(--ia-sp-1); }
        .tw-summary-hint { margin-left: auto; font-size: var(--ia-fs-xs); color: var(--ia-text-3); font-weight: 500; }
        .tw-summary-icon { display: inline-flex; color: var(--ia-text-3); transition: transform 0.2s var(--ia-ease); }
        details.tw-card[open] .tw-summary-icon { transform: rotate(180deg); }

        .tw-dock { position: fixed; top: 10px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: var(--ia-sp-2); padding: 5px var(--ia-sp-3);
            font-family: var(--ia-font); font-size: var(--ia-fs-xs); color: var(--ia-text); cursor: pointer; z-index: var(--ia-z-top); border-radius: var(--ia-r-lg); user-select: none; }
        .tw-dock::before { content: ""; position: absolute; inset: 0; z-index: -1; backdrop-filter: blur(14px) saturate(180%); -webkit-backdrop-filter: blur(14px) saturate(180%);
            background-color: var(--ia-surface-bar); border: 1px solid var(--ia-border-strong); border-radius: var(--ia-r-lg); box-shadow: var(--ia-sh-bar); }
        .tw-dock.ia-hidden { display: none !important; }
        .tw-dock .ia-brand { padding-right: var(--ia-sp-3); margin-right: var(--ia-sp-1); }
        .tw-dock .ia-brand img { height: 18px; }
        .tw-dock-btn { gap: var(--ia-sp-2); font-weight: 700; }
        .tw-dock-btn .tw-count { margin: 0 -2px; }
        .tw-dock-btn .ia-icon { transition: transform 0.25s var(--ia-ease); }
        .tw-dock:hover .tw-dock-btn { color: var(--ia-text); background-color: var(--ia-hover); border-color: var(--ia-border); }
        .tw-dock:hover .tw-dock-btn .ia-icon { transform: rotate(90deg); color: var(--ia-brand-500); }

        @keyframes tw-pop { from { opacity: 0; transform: translate(-50%, -48%) scale(0.97); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); } }
        @keyframes tw-drop { from { opacity: 0; transform: translate(-50%, -8px); } to { opacity: 1; transform: translate(-50%, 0); } }
        @keyframes tw-up { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
        .tw-dock { animation: tw-drop 0.3s var(--ia-ease); }
        .tw-anim > * { animation: tw-up 0.3s var(--ia-ease) both; }
        .tw-anim > .tw-cards > *, .tw-anim > .tw-alert-list > * { animation: tw-up 0.34s var(--ia-ease) both; }
        .tw-anim > :nth-child(2), .tw-anim > .tw-cards > :nth-child(2), .tw-anim > .tw-alert-list > :nth-child(2) { animation-delay: 40ms; }
        .tw-anim > :nth-child(3), .tw-anim > .tw-cards > :nth-child(3), .tw-anim > .tw-alert-list > :nth-child(3) { animation-delay: 80ms; }
        .tw-anim > :nth-child(4), .tw-anim > .tw-cards > :nth-child(4), .tw-anim > .tw-alert-list > :nth-child(4) { animation-delay: 120ms; }
        .tw-anim > :nth-child(n+5), .tw-anim > .tw-cards > :nth-child(n+5), .tw-anim > .tw-alert-list > :nth-child(n+5) { animation-delay: 160ms; }
        .tw-alert, .tw-card { transition: transform 0.2s var(--ia-ease), border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease; }
        .tw-alert:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35); }
        .tw-copy:active, .tw-alert:active { transform: scale(0.98); }

        @media (max-width: 900px) {
            .tw-rail { width: 176px; padding: 68px var(--ia-sp-3); }
            .tw-brand { top: var(--ia-sp-4); left: var(--ia-sp-3); right: var(--ia-sp-3); }
            .tw-brand .ia-brand { display: none; }
            .tw-main { padding: var(--ia-sp-4); }
            .tw-top-bar { flex-wrap: wrap; }
            .tw-sep { display: none; }
        }
`;

  // =========================================================================
  // 1. ESTILOS GLOBALES DE LA TABLA DEL CRM
  // =========================================================================
  let style = document.getElementById('atc-master-css');
  if (!style) {
    style = document.createElement('style');
    style.id = 'atc-master-css';
    document.head.appendChild(style);
  }

  style.innerHTML = `
    .p-datatable h2, h2.text-gray-800, [class*="text-gray-800"] { color: #000000 !important; font-size: 14px !important; font-weight: 800 !important; letter-spacing: 0.2px !important; }
    .p-datatable-tbody span, .p-datatable-tbody td, [data-v-23f418b9], [data-v-410bc847] { color: #0f172a !important; font-size: 13.5px !important; font-weight: 600 !important; }
    h2.text-masorange, h3.text-gray-800, [class*="text-masorange"] { color: #1d4ed8 !important; font-size: 16px !important; font-weight: 900 !important; }
    .p-datatable-tbody td { border-bottom: 1px solid #e2e8f0 !important; padding: 6px 10px !important; }
    .p-datatable-tbody tr:nth-child(even), tr.p-row-even, .p-datatable-tbody tr:nth-child(odd), tr.p-row-odd, .p-datatable-tbody tr, .p-datatable-tbody td, .p-datatable-thead tr, .p-datatable-thead th { background-color: #ffffff !important; background: #ffffff !important; }
    .p-datatable-tbody tr:hover, .p-datatable-tbody tr:hover td { background-color: #f8fafc !important; }
  `;

  function forceStyles() {
    document.querySelectorAll('.p-datatable-tbody td').forEach(td => {
      td.style.setProperty('border-bottom', '1px solid #e2e8f0', 'important');
    });
    document.querySelectorAll('.p-datatable-tbody tr, .p-datatable-tbody td, .p-datatable-thead tr, .p-datatable-thead th').forEach(el => {
      el.style.setProperty('background-color', '#ffffff', 'important');
    });
  }
  forceStyles();

  if (!window.atcObserver) {
    let timeoutId;
    window.atcObserver = new MutationObserver(() => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(forceStyles, 100);
    });
    window.atcObserver.observe(document.body, { childList: true, subtree: true });
  }

  // =========================================================================
  // 2. FUNCIONES AUXILIARES Y DE EXTRACCIÓN
  // =========================================================================
  function getElementByXPath(xpath) {
    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }

  function getEstadoOriginal(text) {
    if (!text) return '';
    const match = String(text).match(/\b(desactivado|activado)\b/i);
    return match ? match[0] : '';
  }

  function clickTabByText(tabText) {
    const elements = Array.from(document.querySelectorAll('button, a, div, span, li, td'));
    const target = elements.find(el => {
      if (el.closest('#telecom-wizard-ui')) return false;
      const txt = el.innerText ? el.innerText.trim().toLowerCase() : '';
      return txt === tabText.toLowerCase();
    });

    if (target) { target.click(); return true; }
    return false;
  }

  function checkImsSinDatos() {
    const containers = document.querySelectorAll('body *:not(#telecom-wizard-ui)');
    for (let el of containers) {
      const text = (el.innerText || '').trim().toUpperCase();
      if (text.includes('IMS') && (text.includes('SIN DATOS') || text.includes('NO DATA AVAILABLE'))) return true;
    }
    return false;
  }

  function checkIsRegisteredGlobal() {
    const containers = document.querySelectorAll('body *:not(#telecom-wizard-ui)');
    for (let el of containers) {
      if (el.children.length === 0) {
        const text = (el.innerText || '').trim();
        if (text === 'REGISTERED') return true;
      }
    }
    return false;
  }

  const oldUI = document.getElementById('telecom-wizard-ui');
  if (oldUI) oldUI.remove();
  const oldHideToggle = document.getElementById('tw-hide-toggle');
  if (oldHideToggle) oldHideToggle.remove();

  function readVolteServiceByCode(code) {
    const targetCode = String(code || '').trim().toUpperCase();
    const rows = document.querySelectorAll('tr');
    let foundRow = false;
    let foundEmptyStatus = false;

    for (const row of rows) {
      if (row.closest('#telecom-wizard-ui')) continue;
      const cells = Array.from(row.querySelectorAll('td, th'));
      if (cells.length < 2) continue;
      const firstCell = (cells[0].innerText || '').trim().toUpperCase();
      if (firstCell !== targetCode) continue;

      foundRow = true;
      const statusCell = cells[1];
      let statusText = (statusCell.innerText || '').trim();

      if (statusText === '-' || /no provisionado/i.test(statusText)) return 'Desactivado';

      statusText = statusText.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
      if (/activad|desactivad/i.test(statusText)) {
        let cleanVal = statusText.replace(/^(X|✓|✕|✖|✔|\-)\s*/i, '').trim();
        if (cleanVal) return cleanVal.charAt(0).toUpperCase() + cleanVal.slice(1);
      }

      const estadoOriginal = getEstadoOriginal(statusText);
      if (estadoOriginal) return estadoOriginal;

      const hasRed = statusCell.querySelector('.text-red-500, .bg-red-500, .btn-danger, [class*="red"], .cross');
      if (hasRed) return 'Desactivado';

      const hasGreen = statusCell.querySelector('.text-green-500, .bg-green-500, .btn-success, [class*="green"], .check');
      if (hasGreen || /✓/.test(statusCell.innerText || '')) return 'Activado';

      if (!statusText) foundEmptyStatus = true;
    }
    if (foundEmptyStatus || foundRow) return foundEmptyStatus ? 'Mal provisionado' : 'Mal provisionado';
    return 'N/A';
  }

  function readVolteCfu() { return readVolteServiceByCode('CFU'); }

  function normalizarTextoComparacion(text) {
    return String(text || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
  }

  function getAliasesServicio(code, fallbackText) {
    const mapa = {
      BAIC: ['BAIC', 'llamadas entrantes', 'bloqueo de llamadas entrantes'],
      BAOC: ['BAOC', 'llamadas salientes', 'bloqueo de llamadas salientes'],
      ENTERTAINMENTCALLS: ['ENTERTAINMENTCALLS', 'entretenimiento', 'premium ent', 'premium entretenimiento', 'llamadas salientes a numeros premium de entretenimiento', 'bloqueo de llamadas salientes a numeros premium de entretenimiento'],
      INFORMATIONALCALLS: ['INFORMATIONALCALLS', 'informacion', 'información', 'premium inf', 'premium informacion', 'llamadas salientes a numeros premium de informacion', 'bloqueo de llamadas salientes a numeros premium de informacion'],
      BICRO: ['BICRO', 'roaming saliente', 'bloqueo roaming saliente'],
      BOIC: ['BOIC', 'internacional saliente', 'bloqueo internacional saliente'],
      OPDNDCB: ['OPDNDCB', 'bloqueo entrante', 'bloqueo llamadas entrantes'],
      OPALL: ['OPALL', 'bloqueo saliente', 'bloqueo llamadas salientes'],
      OPINTERNATIONAL: ['OPINTERNATIONAL', 'bloqueo internacional', 'bloqueo llamadas internacionales'],
      OBO: ['OBO', 'bloqueo internac.', 'bloqueo internacional'],
      OBR: ['OBR', 'bloqueo roaming', 'roaming total', 'roaming fuera plmn'],
      NAM: ['NAM', 'modo acceso de red']
    };
    const aliases = mapa[String(code || '').toUpperCase()] || [];
    if (fallbackText) aliases.push(fallbackText);
    return [...new Set(aliases.map(normalizarTextoComparacion).filter(Boolean))];
  }

  function filaCoincideServicio(row, code, fallbackText, parentSectionKeyword) {
    if (!row || row.closest('#telecom-wizard-ui')) return false;
    if (parentSectionKeyword) {
      const container = row.closest('div, section, table');
      const containerText = normalizarTextoComparacion(container ? container.innerText : '');
      if (!containerText.includes(normalizarTextoComparacion(parentSectionKeyword))) return false;
    }
    const rowText = normalizarTextoComparacion(row.innerText || '');
    if (!rowText) return false;
    const aliases = getAliasesServicio(code, fallbackText);
    return aliases.some(alias => {
      if (alias === normalizarTextoComparacion(code)) {
        return new RegExp('(^|\\s)' + alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(\\s|$)', 'i').test(rowText);
      }
      return rowText.includes(alias);
    });
  }

  function readImsForwarding(code) {
    const targetCode = String(code).trim().toUpperCase();
    const rows = document.querySelectorAll('tr');
    let foundMatches = [];

    for (let row of rows) {
      if (row.closest('#telecom-wizard-ui')) continue;
      const cells = row.querySelectorAll('td, th');
      if (cells.length >= 2) {
        const firstCellText = (cells[0].innerText || cells[0].textContent || '').trim().toUpperCase();
        if (firstCellText === targetCode) {
          foundMatches.push({ row: row, cells: cells });
        }
      }
    }

    if (foundMatches.length === 0) return 'Desactivado';

    const bestMatch = foundMatches[foundMatches.length - 1];
    const cells = bestMatch.cells;
    const statusCell = cells[1];
    const statusText = (statusCell.innerText || statusCell.textContent || '').trim();
    let estado = 'Desactivado';

    if (/desactivad/i.test(statusText) || statusCell.querySelector('.pi-times, .text-red-500, [class*="red"], [class*="danger"], .cross') || statusText.includes('X') || statusText.includes('✕')) {
      estado = 'Desactivado';
    } else if (/activad/i.test(statusText) || statusCell.querySelector('.pi-check, .text-green-500, [class*="green"]') || statusText.includes('✓')) {
      estado = 'Activado';
    }

    let detalles = '';
    if (cells.length >= 3) {
      const destCell = cells[2];
      let destText = (destCell.innerText || destCell.textContent || '').trim();
      if (destText && destText !== '-') {
        destText = destText.replace(/tel:/i, '').trim();
        if (destText && !/activad|desactivad/i.test(destText)) {
          detalles = destText.startsWith('(') ? ` ${destText}` : ` (${destText})`;
        }
      }
    }
    return `${estado}${detalles}`;
  }

  function readSmsValueByLabel(label) {
    const target = normalizarTextoComparacion(label);
    const rows = document.querySelectorAll('tr');

    for (let row of rows) {
      if (row.closest('#telecom-wizard-ui')) continue;
      const cells = row.querySelectorAll('td, th');
      if (cells.length >= 1) {
        const firstCellText = normalizarTextoComparacion(cells[0].innerText);
        const rowText = normalizarTextoComparacion(row.innerText);

        if (firstCellText === target || rowText.startsWith(target + ' ') || rowText.includes(target)) {
          const estadoOriginal = getEstadoOriginal(row.innerText || '');
          if (estadoOriginal) return estadoOriginal;
          const secondCell = cells[1];
          const secondCellText = secondCell ? secondCell.innerText.trim().replace(/\s+/g, ' ') : '';
          if (secondCellText) return secondCellText;

          if (secondCell && secondCell.querySelector('.bg-red-500, .btn-danger, [class*="red"]')) return 'Desactivado';
          if (secondCell && secondCell.querySelector('svg, .check, .active, .enabled, [class*="green"]')) return 'Activado';
          if ((row.innerText || '').includes('✓')) return 'Activado';
          return 'Desactivado';
        }
      }
    }
    return 'N/A';
  }

  function readServiceByCodeOrText(code, fallbackText, parentSectionKeyword) {
    const rows = document.querySelectorAll('tr');

    for (let row of rows) {
      if (filaCoincideServicio(row, code, fallbackText, parentSectionKeyword)) {
        const cells = row.querySelectorAll('td, th');
        let valText = '';

        if (cells.length >= 2) {
          valText = cells[1].innerText.trim();
        } else {
          valText = row.innerText.replace(new RegExp(code, 'i'), '').trim();
        }

        if (valText === '-' || /no provisionado/i.test(valText)) return 'Desactivado';

        valText = valText.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
        if (/activad|desactivad/i.test(valText)) {
          let cleanVal = valText.replace(/^(X|✓|✕|✖|✔|\-)\s*/i, '').trim();
          if (cleanVal) return cleanVal.charAt(0).toUpperCase() + cleanVal.slice(1);
        }

        const rowTextOriginal = row.innerText || '';
        let estado = getEstadoOriginal(rowTextOriginal);

        if (!estado) {
          const isDeactivated = row.querySelector('.pi-times, .text-red-500, [class*="red"], .cross');
          if (isDeactivated) estado = 'Desactivado';
          const isActivated = row.querySelector('.pi-check, .text-green-500, [class*="green"], .check') || rowTextOriginal.includes('✓');
          if (isActivated) estado = 'Activado';
        }
        if (!estado) estado = 'Desactivado';
        estado = estado.charAt(0).toUpperCase() + estado.slice(1).toLowerCase();

        return estado;
      }
    }

    const headings = document.querySelectorAll('h2, h3, h4, span.font-bold, div.font-bold, .text-sl');
    for (let heading of headings) {
      if (filaCoincideServicio(heading, code, fallbackText, parentSectionKeyword)) {
        const container = heading.closest('div[class*="flex"], div[class*="grid"], article, section') || heading.parentElement;
        if (container) {
          const nextEl = heading.nextElementSibling;
          let valText = nextEl && nextEl.innerText ? nextEl.innerText.trim() : container.innerText.replace(heading.innerText, '').trim();

          if (valText === '-' || /no provisionado/i.test(valText)) return 'Desactivado';

          valText = valText.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
          if (/activad|desactivad/i.test(valText)) {
            let cleanVal = valText.replace(/^(X|✓|✕|✖|✔|\-)\s*/i, '').trim();
            if (cleanVal) return cleanVal.charAt(0).toUpperCase() + cleanVal.slice(1);
          }

          const containerText = container.innerText || '';
          let estado = getEstadoOriginal(containerText);

          if (!estado) {
            const isDeactivated = container.querySelector('.pi-times, .text-red-500, [class*="red"], .cross');
            if (isDeactivated) estado = 'Desactivado';
            const isActivated = container.querySelector('.pi-check, .text-green-500, [class*="green"], .check') || containerText.includes('✓');
            if (isActivated) estado = 'Activado';
          }
          if (!estado) estado = 'Desactivado';
          estado = estado.charAt(0).toUpperCase() + estado.slice(1).toLowerCase();

          return estado;
        }
      }
    }
    return 'Desactivado';
  }

  function readForwarding(inputName) {
    const input = document.querySelector(`body *:not(#telecom-wizard-ui) input[name="${inputName}"], input#${inputName}`);
    let targetRow = null;

    if (input) {
      targetRow = input.closest('tr');
    } else {
      const rows = document.querySelectorAll('tr');
      for (let row of rows) {
        if (row.closest('#telecom-wizard-ui')) continue;
        if (row.innerText.toLowerCase().includes(inputName.toLowerCase())) {
          targetRow = row; break;
        }
      }
    }

    if (targetRow) {
      const rowTxt = targetRow.innerText || '';
      const estadoOriginal = getEstadoOriginal(rowTxt);
      if (estadoOriginal && !/desactivad/i.test(estadoOriginal)) {
        const valInput = targetRow.querySelector(`input[name="${inputName}"], input#${inputName}`);
        const phone = valInput && valInput.value ? valInput.value.trim() : (rowTxt.match(/\b\d{9,12}\b/)?.[0] || '');

        const timeInput = targetRow.querySelector('select, input[type="number"], .time-val');
        let timeTxt = '';
        if (timeInput) {
          timeTxt = timeInput.value ? ` (Tiempo: ${timeInput.value}s)` : '';
        } else {
          const timeMatch = rowTxt.match(/time:\s*(\d+\s*s\.?)/i);
          if (timeMatch) timeTxt = ` (Tiempo: ${timeMatch[1]})`;
        }

        const estado = estadoOriginal || 'Activado';
        return `${estado}${phone ? ' (' + phone + ')' : ''}${timeTxt}`;
      }
    }
    return 'Desactivado';
  }

  function readCallWaiting() {
    const rows = document.querySelectorAll('tr');
    for (let row of rows) {
      if (row.closest('#telecom-wizard-ui')) continue;
      const txt = row.innerText.toLowerCase();
      if (txt.includes('llamada en espera') || txt.includes('caw')) {
        const estadoOriginal = getEstadoOriginal(row.innerText || '');
        if (estadoOriginal) return estadoOriginal;
        const toggle = row.querySelector('input[type="checkbox"], .switch, .toggle');
        if (toggle && (toggle.checked || toggle.classList.contains('active'))) return 'Activado';
        return 'Desactivado';
      }
    }
    return 'Desactivado';
  }

  function readNPValue(field) {
    const rows = document.querySelectorAll('tr');
    for (let row of rows) {
      if (row.closest('#telecom-wizard-ui')) continue;
      const cells = row.querySelectorAll('td, th');
      if (cells.length >= 2) {
        if (cells[0].innerText.trim().toUpperCase() === field.toUpperCase()) {
          const restValues = Array.from(cells).slice(1).map(c => c.innerText.trim()).filter(Boolean);
          return restValues.join(' ');
        }
      }
    }

    const allSpans = document.querySelectorAll('span, div, a');
    for(let el of allSpans) {
      if (el.closest('#telecom-wizard-ui')) continue;
      if (el.innerText.trim().toUpperCase() === field.toUpperCase()) {
        const next = el.nextElementSibling;
        if (next && next.innerText) return next.innerText.trim();
      }
    }

    return 'N/A';
  }

  function readUniversalBonos() {
    const individuales = [];
    const grupo = [];
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
      if (table.closest('#telecom-wizard-ui')) return;
      let container = table.closest('div, section');
      let sectionText = container ? container.innerText.toUpperCase() : '';
      let tableText = table.innerText.toUpperCase();

      const isGroup = sectionText.includes('DATOS DEL GRUPO') || tableText.includes('PCGROUPID');
      const isInternet = sectionText.includes('BONOS CONTRATADOS') || tableText.includes('BONO-TARIFA');

      if (!isGroup && !isInternet) return;

      const headerRow = table.querySelector('tr');
      if (!headerRow) return;
      const headers = Array.from(headerRow.querySelectorAll('th, td')).map(h => h.innerText.trim().toUpperCase());

      let idxNombre = 0;
      let idxVolumen = headers.findIndex(h => h.includes('VOLUMEN'));
      let idxConsumido = headers.findIndex(h => h.includes('CONSUMIDO'));

      const rows = table.querySelectorAll('tr');
      rows.forEach((row, index) => {
        if (index === 0) return;
        const cells = Array.from(row.querySelectorAll('td')).map(c => c.innerText.trim());
        if (cells.length < 2) return;

        const name = cells[idxNombre] || cells[0];
        if (!name || name.length < 2 || /^(cfu|cfb|cfnrc|cfnry)$/i.test(name)) return;

        const itemData = {
          nombre: name,
          volumen: (idxVolumen !== -1 && cells[idxVolumen]) ? cells[idxVolumen] : (cells[cells.length - 2] || '-'),
          consumido: (idxConsumido !== -1 && cells[idxConsumido]) ? cells[idxConsumido] : (cells[cells.length - 1] || '-')
        };

        if (isGroup) {
          if (!grupo.some(b => b.nombre === itemData.nombre)) grupo.push(itemData);
        } else {
          if (!individuales.some(b => b.nombre === itemData.nombre)) individuales.push(itemData);
        }
      });
    });
    return { individuales, grupo };
  }

  function parseToMB(str) {
    if (!str || str === '-') return 0;
    let targetStr = str;
    const parentesisMatch = str.match(/\(([^)]+)\)/);
    if (parentesisMatch) targetStr = parentesisMatch[1];
    const cleanStr = targetStr.replace(',', '.').trim();
    const match = cleanStr.match(/([\d.]+)\s*(GB|MB|KB|TB)?/i);
    if (!match) return 0;
    let val = parseFloat(match[1]);
    if (isNaN(val)) return 0;
    let unit = (match[2] || 'MB').toUpperCase();
    if (unit === 'GB') return val * 1024;
    if (unit === 'TB') return val * 1024 * 1024;
    if (unit === 'KB') return val / 1024;
    return val;
  }

  function getVolteDataDynamic() {
    return {
      cfu: readVolteServiceByCode('CFU'), baic: readVolteServiceByCode('BAIC'), baoc: readVolteServiceByCode('BAOC'),
      bicro: readVolteServiceByCode('BICRO'), boic: readVolteServiceByCode('BOIC'), opdndcb: readVolteServiceByCode('OPDNDCB'),
      opall: readVolteServiceByCode('OPALL'), opinternational: readVolteServiceByCode('OPINTERNATIONAL')
    };
  }

  function getVozDataDynamic() {
    const rawSchar = readNPValue('SCHAR');
    let msisdnRaw = readNPValue('MSISDN');
    let nrnRaw = readNPValue('NRN');
    let imsiRaw = readNPValue('IMSI');
    let marcaRaw = readNPValue('MARCA');

    const tipoPago = /prepago/i.test(rawSchar) ? 'PREPAGO' : 'POSTPAGO';
    const msisdnLimpio = msisdnRaw.replace(/Número de Teléfono/i, '').trim() || msisdnRaw.split(' ')[0];
    const nrnLimpio = nrnRaw.replace(/NRN/i, '').trim() || nrnRaw.split(' ')[0];
    const imsiLimpio = imsiRaw.replace(/IMSI/i, '').trim() || imsiRaw.split(' ')[0];
    const marcaLimpia = marcaRaw ? marcaRaw.replace(/Marca/i, '').trim() : 'N/A';

    const rawVolte = readNPValue('VOLTE');
    const isSinDatos = checkImsSinDatos();
    const isRegistered = checkIsRegisteredGlobal();

    const volteActivo = /^s(?:í|i)$/i.test((rawVolte || '').trim());
    let estadoVolteTxt = 'No tiene VoLTE';

    if (volteActivo) {
      if (isRegistered) {
        estadoVolteTxt = 'Activo y registrado en VoLTE';
      } else {
        estadoVolteTxt = 'Tiene VoLTE pero no está registrado';
      }
    }

    return {
      np: {
        msisdn: msisdnLimpio,
        marca: marcaLimpia,
        imsi: imsiLimpio,
        tipoPago: tipoPago,
        nrn: nrnLimpio,
        vlrAddress: readNPValue('VLR-Address'),
        fourG: readNPValue('4G'),
        epgId: readNPValue('EPG ID'),
        estadoVolte: estadoVolteTxt
      },
      bloqueosOp: {
        entrantes: readServiceByCodeOrText('BAIC', 'Bloqueo de llamadas entrantes'),
        salientes: readServiceByCodeOrText('BAOC', 'Bloqueo de llamadas salientes'),
        premiumEnt: readServiceByCodeOrText('ENTERTAINMENTCALLS', 'Bloqueo de llamadas salientes a números premium de entretenimiento'),
        premiumInf: readServiceByCodeOrText('INFORMATIONALCALLS', 'Bloqueo de llamadas salientes a números premium de información')
      },
      bloqueosCli: {
        entrantes: readServiceByCodeOrText('', 'Nacionales Entrantes'),
        salientes: readServiceByCodeOrText('', 'Nacionales Salientes'),
        internacionales: readServiceByCodeOrText('', 'Internacionales')
      },
      desvios: { cfu: readForwarding('cfu'), cfb: readForwarding('cfb'), cfnrc: readForwarding('cfnrc'), cfnry: readForwarding('cfnry') },
      volte: getVolteDataDynamic()
    };
  }

  function getDatosDataDynamic() { return { nam: readServiceByCodeOrText('NAM', 'Modo acceso de red'), bonos: readUniversalBonos() }; }

  function getRoamingDataDynamic() {
    return {
      obo: readServiceByCodeOrText('OBO'), roamingExceptEspana: readServiceByCodeOrText('', 'Roaming (excepto a España)'),
      obr: readServiceByCodeOrText('OBR'), noRoaming: readSmsValueByLabel('NoRoaming'), localUsageRedirect: readSmsValueByLabel('LocalUsageRedirect'),
      rowRedirect1: readSmsValueByLabel('ROW_Redirect_1'), volte: getVolteDataDynamic()
    };
  }

  function getSmsDataDynamic() {
    return { servicios: { entrante: readSmsValueByLabel('Entrante'), saliente: readSmsValueByLabel('Saliente'), porMsc: readSmsValueByLabel('Por MSC') } };
  }

  function getBuzonDataDynamic() {
    const isSinDatos = checkImsSinDatos();
    return {
      desvios: { cfu: readForwarding('cfu'), cfb: readForwarding('cfb'), cfnrc: readForwarding('cfnrc'), cfnry: readForwarding('cfnry'), caw: readCallWaiting() },
      imsDesvios: {
        cfnr: isSinDatos ? 'No tiene Volte' : readImsForwarding('CFNR'),
        cfnrc: isSinDatos ? 'No tiene Volte' : readImsForwarding('CFNRC'),
        cfb: isSinDatos ? 'No tiene Volte' : readImsForwarding('CFB')
      },
      vms: { block: readSmsValueByLabel('BLOCK'), cos: readSmsValueByLabel('COS'), subid: readSmsValueByLabel('SUBID'), vmslangcode: readSmsValueByLabel('VMSLANGCODE') }
    };
  }

  // =========================================================================
  // 3. PRESENTACIÓN (IATelecom DS)
  // =========================================================================
  const estadoDe = (text) => {
    const t = String(text || '');
    if (/desactivad/i.test(t)) return 'off';
    if (/activad/i.test(t)) return 'on';
    if (/mal provisionado/i.test(t)) return 'warn';
    return null;
  };
  const TONO = {
    bloqueo:  { on: ['is-bad', 'Bloqueo activo'], off: ['is-off', 'Sin bloqueo'] },
    servicio: { on: ['is-good', 'Servicio activo'], off: ['is-bad', 'Servicio desactivado'] },
    info:     { on: ['is-good', 'Configurado'], off: ['is-off', 'No configurado'] }
  };
  const esProblema = (text, tipo) => {
    const e = estadoDe(text);
    return (tipo === 'bloqueo' && e === 'on') || (tipo === 'servicio' && e === 'off');
  };
  const escapar = (t) => String(t == null ? '' : t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function partirEstado(text) {
    const t = String(text || '').replace(/\s+/g, ' ').trim();
    const m = t.match(/^(mal provisionado|desactivado|activado)\b\s*(.*)$/i);
    if (!m) return null;
    let detalle = m[2].trim();
    const envuelto = (d) => {
      if (!d.startsWith('(') || !d.endsWith(')')) return false;
      let n = 0;
      for (let i = 0; i < d.length; i++) { if (d[i] === '(') n++; else if (d[i] === ')') { n--; if (n === 0 && i < d.length - 1) return false; } }
      return n === 0;
    };
    if (envuelto(detalle)) detalle = detalle.slice(1, -1).trim();
    const rep = detalle.match(/^(.*?)\s*\((.*)\)$/);
    if (rep && rep[1] && normalizarTextoComparacion(rep[1]) === normalizarTextoComparacion(rep[2])) detalle = rep[1].trim();
    return { estado: m[1], detalle };
  }
  const renderBadge = (text, tipo = 'bloqueo') => {
    if (!text) return '<span class="tw-muted">—</span>';
    if (text.includes('No tiene Volte')) return `<span class="tw-muted">No tiene VoLTE</span>`;
    const e = estadoDe(text);
    const partes = partirEstado(text);
    if (!e || !partes) return `<b>${text}</b>`;
    const { estado, detalle } = partes;
    const [clase, ayuda] = e === 'warn' ? ['is-warn', 'Revisar provisión'] : TONO[tipo][e];
    const esNumero = /\d{5,}/.test(detalle);
    return `<span class="tw-val" title="${ayuda}"><span class="tw-badge ${clase}">${estado}</span>${detalle ? `<span class="tw-detail${esNumero ? ' is-num' : ''}">${detalle}</span>` : ''}</span>`;
  };
  const valor = (t) => (t && String(t).trim()) ? `<b>${t}</b>` : '<span class="tw-muted">—</span>';
  const fila = (etiqueta, html) => `<div class="tw-row"><span>${etiqueta}</span>${html}</div>`;
  const tarjeta = (titulo, filas, extra = '') => `<div class="tw-card ${extra}"><div class="tw-section-title">${titulo}</div><div class="tw-data-list">${filas}</div></div>`;

  const renderVolteSection = (v) => {
    const isSinDatos = checkImsSinDatos();
    if (isSinDatos) {
      return `<div class="tw-cards"><div class="tw-card tw-card--wide"><div class="tw-section-title">VoLTE</div><div class="tw-no-volte tw-muted">No tiene VoLTE</div></div></div>`;
    }
    return `
      <div class="tw-cards"><div class="tw-card tw-card--wide">
        <div class="tw-section-title">VoLTE</div>
        <div class="tw-subgrid">
          <div class="tw-data-list">
            ${fila('CFU (incondicional)', renderBadge(v.cfu, 'info'))}
            ${fila('BAIC (entrantes)', renderBadge(v.baic))}
            ${fila('BAOC (salientes)', renderBadge(v.baoc))}
          </div>
          <div class="tw-data-list">
            ${fila('BICRO (roaming saliente)', renderBadge(v.bicro))}
            ${fila('BOIC (internacional saliente)', renderBadge(v.boic))}
            ${fila('OPDNDCB (bloqueo entrante)', renderBadge(v.opdndcb))}
          </div>
          <div class="tw-data-list">
            ${fila('OPALL (bloqueo saliente)', renderBadge(v.opall))}
            ${fila('OPINTERNATIONAL', renderBadge(v.opinternational))}
          </div>
        </div>
      </div></div>
    `;
  };

  const existeServicio = (code, texto) => Array.from(document.querySelectorAll('tr')).some(row => filaCoincideServicio(row, code, texto));
  function bonoConsumido(b) {
    const rawVolMB = parseToMB(b.volumen);
    const consMB = parseToMB(b.consumido);
    const nombreLower = (b.nombre || '').toLowerCase();
    const isUnlimited = !b.volumen || b.volumen.trim() === '' || b.volumen === '-' || b.volumen.toLowerCase().includes('ilimitado') || nombreLower.includes('unlimited') || nombreLower.includes('ilimitad') || nombreLower.includes('infinit') || (rawVolMB === 0 && consMB > 0);
    const volMB = isUnlimited ? Infinity : rawVolMB;
    return !isUnlimited && (volMB > 0) ? (consMB >= volMB) : false;
  }

  function calcularAlertas(v) {
    const nam = readServiceByCodeOrText('NAM', 'Modo acceso de red');
    const r = getRoamingDataDynamic();
    const s = getSmsDataDynamic();
    const lista = [
      ['VOZ', 'Servicios de voz › Bloqueos del operador', 'Llamadas entrantes', v.bloqueosOp.entrantes, 'bloqueo'],
      ['VOZ', 'Servicios de voz › Bloqueos del operador', 'Llamadas salientes', v.bloqueosOp.salientes, 'bloqueo'],
      ['VOZ', 'Servicios de voz › Bloqueos del operador', 'Premium entretenimiento', v.bloqueosOp.premiumEnt, 'bloqueo'],
      ['VOZ', 'Servicios de voz › Bloqueos del operador', 'Premium información', v.bloqueosOp.premiumInf, 'bloqueo'],
      ['VOZ', 'Servicios de voz › Bloqueos del cliente', 'Nacionales entrantes', v.bloqueosCli.entrantes, 'bloqueo'],
      ['VOZ', 'Servicios de voz › Bloqueos del cliente', 'Nacionales salientes', v.bloqueosCli.salientes, 'bloqueo'],
      ['VOZ', 'Servicios de voz › Bloqueos del cliente', 'Internacionales', v.bloqueosCli.internacionales, 'bloqueo'],
      ['DATOS', 'Datos e internet › Teleservicios', 'NAM (acceso a red)', existeServicio('NAM', 'Modo acceso de red') ? nam : '', 'servicio'],
      ['ROAMING', 'Roaming › Servicios de bloqueo', 'OBO (internacional)', r.obo, 'bloqueo'],
      ['ROAMING', 'Roaming › Servicios de bloqueo', 'Roaming (excepto España)', r.roamingExceptEspana, 'bloqueo'],
      ['ROAMING', 'Roaming › Servicios de bloqueo', 'OBR (bloqueo total)', r.obr, 'bloqueo'],
      ['SMS', 'Mensajes (SMS) › Servicios de mensajería', 'Entrante', s.servicios.entrante, 'servicio'],
      ['SMS', 'Mensajes (SMS) › Servicios de mensajería', 'Saliente', s.servicios.saliente, 'servicio'],
      ['SMS', 'Mensajes (SMS) › Servicios de mensajería', 'Por MSC', s.servicios.porMsc, 'servicio']
    ];
    const alertas = lista.filter(a => esProblema(a[3], a[4])).map(([cat, ruta, nombre, val, tipo]) => ({ cat, ruta, nombre, val, tipo }));
    const bonos = readUniversalBonos();
    const consumidos = [...bonos.grupo, ...bonos.individuales].filter(bonoConsumido).map(b => b.nombre);
    if (consumidos.length) {
      alertas.push({
        cat: 'DATOS', ruta: 'Datos e internet › ' + consumidos.join(', '),
        nombre: consumidos.length === 1 ? 'Tarifa consumida' : consumidos.length + ' tarifas consumidas',
        pill: 'Consumida'
      });
    }
    return alertas;
  }

  const soloEstado = (val) => { const p = partirEstado(val); return p ? p.estado : val; };
  const detalleAlerta = (a) => {
    const p = a.val ? partirEstado(a.val) : null;
    return p && p.detalle ? `<span class="tw-alert-detail${/\d{5,}/.test(p.detalle) ? ' is-num' : ''}">${p.detalle}</span>` : '';
  };

  function renderAlertas(alertas) {
    if (!alertas.length) return '';
    const items = alertas.map(a => `
      <button type="button" class="tw-alert" data-ir="${a.cat}" title="Ver en ${escapar(a.ruta.split(' › ')[0])}">
        ${iaIcon('shield', 15)}
        <span class="tw-alert-txt">
          <span class="tw-alert-main">${a.nombre}</span>
          ${detalleAlerta(a)}
          <span class="tw-alert-sub">${a.ruta}</span>
        </span>
        ${a.pill ? `<span class="tw-pill ko">${a.pill}</span>` : renderBadge(soloEstado(a.val), a.tipo)}
      </button>`).join('');
    return `
      <div class="tw-card-header tw-card-header--alert">${iaIcon('shield', 16)}<span>Alertas</span><span class="tw-count">${alertas.length}</span></div>
      <div class="tw-alert-list">${items}</div>`;
  }

  const host = document.createElement('div');
  host.id = 'telecom-wizard-ui';
  const SR = host.attachShadow({ mode: 'open' });
  const dsStyle = document.createElement('style');
  dsStyle.textContent = IADS_CSS + TW_CSS;
  SR.appendChild(dsStyle);

  const logoHTML = IADS_LOGO
    ? `<img src="${IADS_LOGO}" alt="IATelecom">`
    : `<span class="ia-wordmark">IATelecom</span>`;

  const ui = document.createElement('div');
  ui.className = 'tw-panel';
  ui.setAttribute('role', 'dialog');
  ui.setAttribute('aria-label', '360 PRO');
  ui.innerHTML = `
    <aside class="tw-rail">
      <div class="tw-brand">
        <div class="ia-brand">${logoHTML}</div>
        <h3 class="tw-title">360 PRO</h3>
      </div>
      <nav class="tw-sidebar" id="tw-step2" aria-label="Categorías">
        <span class="tw-nav-ind" aria-hidden="true"></span>
        <button class="tw-cat-btn active" data-cat="CLIENTE">${iaIcon('user', 15)}<span>Info. cliente</span></button>
        <button class="tw-cat-btn" data-cat="VOZ">${iaIcon('phone', 15)}<span>Servicios de voz</span></button>
        <button class="tw-cat-btn" data-cat="DATOS">${iaIcon('globe', 15)}<span>Datos e internet</span></button>
        <button class="tw-cat-btn" data-cat="ROAMING">${iaIcon('plane', 15)}<span>Roaming</span></button>
        <button class="tw-cat-btn" data-cat="SMS">${iaIcon('message', 15)}<span>Mensajes (SMS)</span></button>
        <button class="tw-cat-btn" data-cat="BUZON">${iaIcon('voicemail', 15)}<span>Buzón y perdidas</span></button>
      </nav>
    </aside>

    <section class="tw-main">
      <div class="tw-top-bar">
        <div id="tw-search-box" class="tw-search">
          ${iaIcon('search', 15)}
          <input type="text" id="tw-phone-input" class="ia-control" placeholder="Buscar línea (ej. 623925620)" maxlength="15" autocomplete="off" aria-label="Número de línea" />
        </div>
        <button id="tw-search-btn" class="ia-btn ia-btn--primary" title="Buscar línea y leer datos">${iaIcon('search', 14)}<span>Buscar</span></button>
        <button id="tw-reset-btn" class="ia-btn ia-btn--danger">${iaIcon('refresh', 14)}<span>Resetear línea</span></button>
        <span class="tw-sep" aria-hidden="true"></span>
        <button id="tw-hide-btn" class="ia-btn" title="Ocultar la herramienta (queda un acceso arriba)">${iaIcon('minus', 14)}<span>Ocultar</span></button>
      </div>

      <div class="tw-content-area" id="tw-step3">
        <div id="tw-empty-state" class="tw-empty">
          ${iaIcon('search', 22)}
          <span>Introduce un número en el buscador para comenzar.</span>
        </div>
      </div>
    </section>
  `;

  const dock = document.createElement('div');
  dock.className = 'tw-dock ia-hidden';
  dock.title = 'Abrir 360 PRO';
  dock.innerHTML = `
    <span class="ia-brand">${logoHTML}</span>
    <button type="button" class="ia-btn tw-dock-btn" aria-label="Abrir 360 PRO">
      <span>360 PRO</span>
      <span class="tw-count ia-hidden" id="tw-dock-count" title="Alertas de la línea"></span>
      ${iaIcon('plus', 14)}
    </button>
  `;

  SR.appendChild(ui);
  SR.appendChild(dock);
  document.body.appendChild(host);

  const searchBtn = SR.getElementById('tw-search-btn');
  const resetBtn = SR.getElementById('tw-reset-btn');
  const step3 = SR.getElementById('tw-step3');
  const phoneInput = SR.getElementById('tw-phone-input');

  let activeCat = 'CLIENTE';

  function btnMsg(btn, texto, tipo, ms, titulo) {
    if (!btn) return;
    if (!btn._ia) btn._ia = { html: btn.innerHTML, w: btn.offsetWidth, t: null };
    clearTimeout(btn._ia.t);
    btn.classList.remove('is-busy', 'is-success', 'is-warning');
    btn.classList.add('is-' + tipo);
    const icono = tipo === 'busy' ? '<span class="ia-spinner"></span>' : (tipo === 'success' ? iaIcon('check') : iaIcon('alert'));
    btn.style.minWidth = btn._ia.w + 'px';
    btn.innerHTML = icono + '<span>' + texto + '</span>';
    if (titulo) btn.title = titulo;
    btn.setAttribute('aria-live', 'polite');
    if (ms) btn._ia.t = setTimeout(() => btnReset(btn), ms);
  }
  function btnReset(btn) {
    if (!btn || !btn._ia) return;
    clearTimeout(btn._ia.t);
    btn.classList.remove('is-busy', 'is-success', 'is-warning');
    btn.innerHTML = btn._ia.html;
    btn.style.minWidth = '';
    btn.removeAttribute('aria-live');
    btn._ia = null;
  }

  async function copiarAlPortapapeles(texto) {
    const foco = document.createElement("input"); foco.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;"; document.body.appendChild(foco);
    const enfocar = () => { try { window.focus(); foco.focus(); } catch (e) {} };
    try {
      enfocar();
      for (let i = 0; i < 4; i++) { try { await navigator.clipboard.writeText(texto); return true; } catch (e) { await new Promise(r => setTimeout(r, 250)); enfocar(); } }
      try {
        const ta = document.createElement("textarea"); ta.value = texto; ta.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;";
        document.body.appendChild(ta); ta.focus(); ta.select(); const ok = document.execCommand("copy"); document.body.removeChild(ta); return ok;
      } catch (e) { return false; }
    } finally { foco.remove(); }
  }

  function leerImsi() {
    const imsiRaw = readNPValue('IMSI');
    const imsiLimpio = imsiRaw.replace(/IMSI/i, '').trim() || imsiRaw.split(' ')[0];
    const m = String(imsiLimpio || '').match(/\b\d{14,15}\b/);
    return m ? m[0] : '';
  }
  const renderImsi = (imsi) => {
    const valido = /^\d{14,15}$/.test(String(imsi || '').trim());
    if (!valido) return valor(imsi);
    return `<button type="button" class="tw-copy" data-copy="${imsi}" title="Pulsa para copiar el IMSI" aria-label="Copiar IMSI ${imsi}"><span>${imsi}</span>${iaIcon('copy', 13)}</button>`;
  };

  step3.addEventListener('click', async (e) => {
    const alerta = e.target.closest('[data-ir]');
    if (alerta) { e.stopPropagation(); irACategoria(alerta.getAttribute('data-ir')); return; }
    const chip = e.target.closest('[data-copy]');
    if (!chip) return;
    e.stopPropagation();
    const valorCopia = chip.getAttribute('data-copy');
    const ok = await copiarAlPortapapeles(valorCopia);
    clearTimeout(chip._t);
    chip.classList.remove('is-copied', 'is-error');
    chip.classList.add(ok ? 'is-copied' : 'is-error');
    chip.innerHTML = (ok ? iaIcon('check', 13) : iaIcon('alert', 13)) + `<span>${ok ? 'Copiado' : 'No se pudo copiar'}</span>`;
    chip._t = setTimeout(() => {
      chip.classList.remove('is-copied', 'is-error');
      chip.innerHTML = `<span>${valorCopia}</span>${iaIcon('copy', 13)}`;
    }, 1500);
  });

  // ==========================================
  // OCULTAR / MOSTRAR
  // ==========================================
  const sinMovimiento = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const animar = (el, frames, ms, easing) => (el.animate && !sinMovimiento()) ? el.animate(frames, { duration: ms, easing: easing || 'cubic-bezier(0.16, 1, 0.3, 1)' }) : null;

  function finBarraSuperior() {
    try {
      const pila = document.elementsFromPoint(Math.round(innerWidth / 2), 4).filter(el => el !== host && !host.contains(el) && el !== document.documentElement && el !== document.body);
      for (const el of pila) {
        let n = el;
        while (n && n !== document.body) {
          const r = n.getBoundingClientRect();
          if (r.width >= innerWidth * 0.9 && r.top <= 4 && r.height >= 24 && r.height <= 120) return r.bottom;
          n = n.parentElement;
        }
      }
    } catch (e) {}
    return 0;
  }
  const sonda = document.createElement('div');
  sonda.style.cssText = 'position:fixed;top:0;left:0;width:0;height:0;pointer-events:none;';
  SR.appendChild(sonda);
  const desfase = () => { const r = sonda.getBoundingClientRect(); return { x: r.left, y: r.top }; };
  function centrarPanel() {
    const d = desfase();
    ui.style.top = (innerHeight / 2 - d.y) + 'px';
    ui.style.left = (innerWidth / 2 - d.x) + 'px';
  }
  function colocarDock() {
    const d = desfase();
    dock.style.top = (finBarraSuperior() + 6 - d.y) + 'px';
    dock.style.left = (innerWidth / 2 - d.x) + 'px';
  }
  window.addEventListener('resize', () => { if (isHidden) colocarDock(); else centrarPanel(); });
  centrarPanel();

  let isHidden = false;
  function setOculto(oculto) {
    if (oculto === isHidden) return;
    isHidden = oculto;
    if (oculto) {
      const a = animar(ui, [{ opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }, { opacity: 0, transform: 'translate(-50%, -54%) scale(0.96)' }], 200, 'cubic-bezier(0.4, 0, 1, 1)');
      const fin = () => { if (isHidden) { ui.classList.add('ia-hidden'); dock.classList.remove('ia-hidden'); colocarDock(); } };
      if (a) a.onfinish = fin; else fin();
    } else {
      dock.classList.add('ia-hidden');
      ui.classList.remove('ia-hidden');
      centrarPanel();
      animar(ui, [{ opacity: 0, transform: 'translate(-50%, -54%) scale(0.96)' }, { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }], 320);
      moverIndicador(false);
    }
  }
  SR.getElementById('tw-hide-btn').onclick = (e) => { e.preventDefault(); e.stopPropagation(); setOculto(true); };
  dock.addEventListener('click', (e) => { e.stopPropagation(); setOculto(false); });

  const indicador = SR.querySelector('.tw-nav-ind');
  function moverIndicador(animado = true) {
    const activo = SR.querySelector('.tw-cat-btn.active');
    if (!activo || !activo.offsetHeight) return;
    if (!animado) indicador.style.transition = 'none';
    indicador.style.transform = `translateY(${activo.offsetTop}px)`;
    indicador.style.height = activo.offsetHeight + 'px';
    indicador.style.opacity = '1';
    if (!animado) { void indicador.offsetHeight; indicador.style.transition = ''; }
  }
  requestAnimationFrame(() => moverIndicador(false));

  function animarCambio(altoAntes) {
    step3.classList.remove('tw-anim'); void step3.offsetWidth; step3.classList.add('tw-anim');
    const altoDespues = ui.offsetHeight;
    if (altoAntes && Math.abs(altoAntes - altoDespues) > 2) {
      animar(ui, [{ height: altoAntes + 'px' }, { height: altoDespues + 'px' }], 320);
    }
    moverIndicador();
  }

  function pintarContadores(alertas) {
    const porCat = {};
    alertas.forEach(a => { porCat[a.cat] = (porCat[a.cat] || 0) + 1; });
    SR.querySelectorAll('.tw-cat-btn').forEach(btn => {
      let c = btn.querySelector('.tw-nav-count');
      const n = porCat[btn.dataset.cat] || 0;
      if (n && !c) { c = document.createElement('span'); c.className = 'tw-nav-count'; btn.appendChild(c); }
      if (c) { if (n) { c.textContent = n; c.title = n === 1 ? '1 alerta' : n + ' alertas'; } else c.remove(); }
    });
    const dc = SR.getElementById('tw-dock-count');
    dc.textContent = alertas.length;
    dc.classList.toggle('ia-hidden', !alertas.length);
  }

  const ajustarScroll = () => step3.classList.toggle('has-scroll', step3.scrollHeight > step3.clientHeight + 1);
  new ResizeObserver(ajustarScroll).observe(step3);
  new MutationObserver(() => requestAnimationFrame(ajustarScroll)).observe(step3, { childList: true });

  function irACategoria(cat) {
    SR.querySelectorAll('.tw-cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
    renderCategory(cat);
    step3.scrollTop = 0;
  }

  function renderCategory(cat) {
    const altoAntes = isHidden ? 0 : ui.offsetHeight;
    activeCat = cat;
    if (cat === 'CLIENTE') {
      const v = getVozDataDynamic();
      const volteClase = v.np.estadoVolte === 'No tiene VoLTE' ? 'tw-volte-ko' : (v.np.estadoVolte === 'Activo y registrado en VoLTE' ? 'tw-volte-ok' : 'tw-volte-warn');
      const tipoPagoHTML = v.np.tipoPago === 'PREPAGO' ? `<span class="tw-chip" title="Línea de prepago">${v.np.tipoPago}</span>` : valor(v.np.tipoPago);
      const alertas = calcularAlertas(v);
      pintarContadores(alertas);
      step3.innerHTML = `
        <div class="tw-card-header">${iaIcon('user', 16)}<span>Información del cliente</span></div>
        <div class="tw-cards">
          ${tarjeta('Identificación',
            fila('MSISDN', valor(v.np.msisdn)) + fila('Marca', valor(v.np.marca)) + fila('IMSI', renderImsi(v.np.imsi)) + fila('Tipo de pago', tipoPagoHTML))}
          ${tarjeta('Red y enrutamiento',
            fila('NRN', valor(v.np.nrn)) + fila('VLR-Address', valor(v.np.vlrAddress)) + fila('4G', valor(v.np.fourG)) + fila('EPG ID', valor(v.np.epgId)))}
          ${tarjeta('Estado VoLTE general',
            fila('Disponibilidad', `<b class="${volteClase}">${v.np.estadoVolte}</b>`))}
        </div>
        ${renderAlertas(alertas)}
      `;
    } else if (cat === 'VOZ') {
      const v = getVozDataDynamic();
      step3.innerHTML = `
        <div class="tw-card-header">${iaIcon('phone', 16)}<span>Servicios de voz</span></div>
        <div class="tw-cards">
          ${tarjeta('Bloqueos del operador',
            fila('Llamadas entrantes', renderBadge(v.bloqueosOp.entrantes)) + fila('Llamadas salientes', renderBadge(v.bloqueosOp.salientes)) +
            fila('Premium entretenimiento', renderBadge(v.bloqueosOp.premiumEnt)) + fila('Premium información', renderBadge(v.bloqueosOp.premiumInf)))}
          ${tarjeta('Bloqueos del cliente',
            fila('Nacionales entrantes', renderBadge(v.bloqueosCli.entrantes)) + fila('Nacionales salientes', renderBadge(v.bloqueosCli.salientes)) +
            fila('Internacionales', renderBadge(v.bloqueosCli.internacionales)))}
          ${tarjeta('Desvíos de llamada',
            fila('Incondicional (cfu)', renderBadge(v.desvios.cfu, 'info')) + fila('Cuando ocupado (cfb)', renderBadge(v.desvios.cfb, 'info')) +
            fila('No accesible (cfnrc)', renderBadge(v.desvios.cfnrc, 'info')) + fila('No contesta (cfnry)', renderBadge(v.desvios.cfnry, 'info')))}
        </div>
        ${renderVolteSection(v.volte)}
      `;
    } else if (cat === 'DATOS') {
      const d = getDatosDataDynamic();
      const renderCards = (lista) => {
        return lista.map(b => {
          const rawVolMB = parseToMB(b.volumen);
          const consMB = parseToMB(b.consumido);
          const nombreLower = (b.nombre || '').toLowerCase();
          const isUnlimited = !b.volumen || b.volumen.trim() === '' || b.volumen === '-' || b.volumen.toLowerCase().includes('ilimitado') || nombreLower.includes('unlimited') || nombreLower.includes('ilimitad') || nombreLower.includes('infinit') || (rawVolMB === 0 && consMB > 0);
          const volMB = isUnlimited ? Infinity : rawVolMB;
          const esConsumida = !isUnlimited && (volMB > 0) ? (consMB >= volMB) : false;

          let volumenTxt = isUnlimited ? 'Ilimitado' : (volMB >= 1024 ? (volMB / 1024).toFixed(2) + ' GB' : volMB.toFixed(2) + ' MB');
          let consumidoTxt = consMB > 0 ? (consMB >= 1024 ? (consMB / 1024).toFixed(2) + ' GB' : consMB.toFixed(2) + ' MB') : '0 MB';
          let restanteTxt = isUnlimited ? 'Ilimitado' : '0 MB';

          if (!isUnlimited) {
            const restaMB = Math.max(0, volMB - consMB);
            restanteTxt = restaMB >= 1024 ? (restaMB / 1024).toFixed(2) + ' GB' : (restaMB === 0 ? '0 MB' : restaMB.toFixed(2) + ' MB');
          }

          const statusBadge = esConsumida ? `<span class="tw-pill ko">Consumida</span>` : `<span class="tw-pill ok">OK</span>`;

          return `
            <div class="tw-bono-item">
              <div class="tw-bono-header">
                <div class="tw-bono-title">${b.nombre}</div>
                ${statusBadge}
              </div>
              <div class="tw-data-list">
                ${fila('Volumen', `<b>${volumenTxt}</b>`)}
                ${fila('Consumido', `<b>${consumidoTxt}</b>`)}
              </div>
              <div class="tw-bono-total">
                <span>Total disponible</span>
                <b class="${esConsumida ? 'ko' : 'ok'}">${restanteTxt}</b>
              </div>
            </div>
          `;
        }).join('');
      };

      let bonosHTML = '';
      const tieneGrupo = d.bonos.grupo && d.bonos.grupo.length > 0;
      const tieneIndiv = d.bonos.individuales && d.bonos.individuales.length > 0;
      const tarjetaBonos = (titulo, lista) => `
        <div class="tw-card tw-card--wide">
          <div class="tw-section-title">${titulo}</div>
          <div class="tw-bonos-grid">${renderCards(lista)}</div>
        </div>`;

      if (tieneGrupo && tieneIndiv) {
        bonosHTML = `
          ${tarjetaBonos('Datos del grupo compartido', d.bonos.grupo)}
          <details class="tw-card tw-card--wide">
            <summary>
              <span class="tw-section-title">Bonos contratados (internet)</span>
              <span class="tw-summary-hint">Pulsa para ver los ${d.bonos.individuales.length} bonos</span>
              <span class="tw-summary-icon">${iaIcon('chevron', 14)}</span>
            </summary>
            <div class="tw-bonos-grid">${renderCards(d.bonos.individuales)}</div>
          </details>
        `;
      } else if (tieneGrupo) {
        bonosHTML = tarjetaBonos('Datos del grupo compartido', d.bonos.grupo);
      } else if (tieneIndiv) {
        bonosHTML = tarjetaBonos('Bonos contratados (internet)', d.bonos.individuales);
      } else {
        bonosHTML = `<div class="tw-card tw-card--wide"><div class="tw-section-title">Bonos contratados (internet)</div><div class="tw-muted">No hay bonos registrados.</div></div>`;
      }

      step3.innerHTML = `
        <div class="tw-card-header">${iaIcon('globe', 16)}<span>Datos e internet</span></div>
        <div class="tw-cards">
          ${tarjeta('Teleservicios', fila('NAM (acceso a red)', renderBadge(d.nam, 'servicio')))}
          ${bonosHTML}
        </div>
      `;
    } else if (cat === 'ROAMING') {
      const r = getRoamingDataDynamic();
      step3.innerHTML = `
        <div class="tw-card-header">${iaIcon('plane', 16)}<span>Roaming internacional</span></div>
        <div class="tw-cards">
          ${tarjeta('Servicios de bloqueo',
            fila('OBO (internacional)', renderBadge(r.obo)) + fila('Roaming (excepto España)', renderBadge(r.roamingExceptEspana)) + fila('OBR (bloqueo total)', renderBadge(r.obr)))}
          ${tarjeta('Redirección y estado',
            fila('NoRoaming', valor(r.noRoaming)) + fila('LocalUsageRedirect', valor(r.localUsageRedirect)) + fila('ROW_Redirect_1', valor(r.rowRedirect1)))}
        </div>
        ${renderVolteSection(r.volte)}
      `;
    } else if (cat === 'SMS') {
      const s = getSmsDataDynamic();
      step3.innerHTML = `
        <div class="tw-card-header">${iaIcon('message', 16)}<span>Mensajería SMS</span></div>
        <div class="tw-cards">
          ${tarjeta('Servicios de mensajería',
            fila('Entrante', renderBadge(s.servicios.entrante, 'servicio')) + fila('Saliente', renderBadge(s.servicios.saliente, 'servicio')) +
            fila('Por MSC', renderBadge(s.servicios.porMsc, 'servicio')))}
        </div>
      `;
    } else if (cat === 'BUZON') {
      const b = getBuzonDataDynamic();
      step3.innerHTML = `
        <div class="tw-card-header">${iaIcon('voicemail', 16)}<span>Buzón y perdidas</span></div>
        <div class="tw-cards">
          ${tarjeta('Desvíos y llamada en espera',
            fila('Incondicional (cfu)', renderBadge(b.desvios.cfu, 'info')) + fila('Cuando ocupado (cfb)', renderBadge(b.desvios.cfb, 'info')) +
            fila('No accesible (cfnrc)', renderBadge(b.desvios.cfnrc, 'info')) + fila('No contesta (cfnry)', renderBadge(b.desvios.cfnry, 'info')) +
            fila('Llamada en espera (caw)', renderBadge(b.desvios.caw, 'info')))}
          ${tarjeta('Configuración IMS',
            fila('CFNR', renderBadge(b.imsDesvios.cfnr, 'info')) + fila('CFNRC', renderBadge(b.imsDesvios.cfnrc, 'info')) + fila('CFB', renderBadge(b.imsDesvios.cfb, 'info')))}
          ${tarjeta('Servicio de buzón de voz (VMS)',
            fila('BLOCK (estado)', renderBadge(b.vms.block)) + fila('COS (clase)', valor(b.vms.cos)) + fila('SUBID (key)', valor(b.vms.subid)) + fila('VMSLANGCODE', valor(b.vms.vmslangcode)))}
        </div>
      `;
    }
    animarCambio(altoAntes);
  }
  // =========================================================================
  // 4. ACCIONES Y CONTROLADORES DE EVENTOS
  // =========================================================================
  let isResetting = false;

  async function runAutoReset() {
    if (isResetting) return;
    isResetting = true;
    resetBtn.disabled = true;

    const oldAlert = window.alert;
    window.alert = function() {};
    const muteStyle = document.createElement('style');
    muteStyle.innerHTML = '.p-toast, .p-toast-message, .p-dialog { display: none !important; opacity: 0 !important; visibility: hidden !important; }';
    document.head.appendChild(muteStyle);

    try {
      btnMsg(resetBtn, 'Iniciando...', 'busy');
      const spans = Array.from(document.querySelectorAll('span.p-button-label'));
      const btnInicio = spans.find(s => s.innerText.trim().toLowerCase() === 'reseteo de línea');

      if (!btnInicio) {
        window.alert = oldAlert;
        btnMsg(resetBtn, 'Botón no encontrado', 'warning');
        oldAlert('No se encontró el botón "Reseteo de línea" en la página.');
        return;
      }

      const clickableInicio = btnInicio.closest('button') || btnInicio;
      clickableInicio.click();

      btnMsg(resetBtn, 'Confirmando...', 'busy');
      let btnConfirmar = null; let intentos = 0;
      while (!btnConfirmar && intentos < 20) {
        await new Promise(r => setTimeout(r, 250));
        const modalesSpans = Array.from(document.querySelectorAll('span.p-button-label'));
        btnConfirmar = modalesSpans.find(s => s.innerText.trim().toLowerCase() === 'resetear');
        intentos++;
      }

      if (!btnConfirmar) {
        window.alert = oldAlert;
        btnMsg(resetBtn, 'Sin confirmación', 'warning');
        oldAlert('No apareció el botón "Resetear" a tiempo.');
        return;
      }

      const clickableConfirmar = btnConfirmar.closest('button') || btnConfirmar;
      clickableConfirmar.click();

      btnMsg(resetBtn, 'Línea reseteada', 'success');

    } catch (e) {
      console.error('Error en auto-reset:', e);
      window.alert = oldAlert;
      btnMsg(resetBtn, 'Error al resetear', 'warning');
      oldAlert('Ocurrió un error en el automatismo de reseteo.');
    } finally {
      setTimeout(() => {
        isResetting = false;
        resetBtn.disabled = false;
        btnReset(resetBtn);

        window.alert = oldAlert;
        if (muteStyle.parentNode) muteStyle.parentNode.removeChild(muteStyle);
      }, 4000);
    }
  }

  let isScanning = false;

  async function runScan() {
    if (isScanning) return;
    isScanning = true;

    step3.innerHTML = `
      <div class="tw-empty">
        <span class="ia-spinner"></span>
        <span>Leyendo datos de la línea...</span>
      </div>
    `;

    try {
      clickTabByText('ims');
      await new Promise(r => setTimeout(r, 800));

      let subTabClicked = clickTabByText('under') || clickTabByText('all');
      if (!subTabClicked) {
        let targetElement = getElementByXPath('/html/body/div[1]/div/header/div/div/div[2]/div[2]/button[1]/span')
                         || getElementByXPath('/html/body/div[1]/div/header/div/div/div[2]/div[2]/button[1]');
        if (targetElement) targetElement.click();
      }
      await new Promise(r => setTimeout(r, 800));
      renderCategory(activeCat);
    } catch (e) {
      console.error('Error durante el escaneo:', e);
    } finally {
      isScanning = false;
    }
  }

  async function copiarImsiTrasBusqueda() {
    const imsi = leerImsi();
    if (!imsi) { btnMsg(searchBtn, 'IMSI no encontrado', 'warning', 2500); return; }
    const ok = await copiarAlPortapapeles(imsi);
    if (ok) btnMsg(searchBtn, 'IMSI copiado', 'success', 2000, imsi);
    else btnMsg(searchBtn, 'Pulsa el IMSI para copiarlo', 'warning', 3500);
  }

  async function searchLineInCRM(phoneNumber) {
    const cleanNumber = String(phoneNumber || '').trim();
    if (!cleanNumber) return;

    // ===== CORRECCIÓN =====
    // Casilla de búsqueda del CRM: SOLO input#search-input (//*[@id="search-input"]).
    // Si todavía no está en la página, se espera hasta 5 s. Nunca se usa el buscador del menú.
    const buscarCasilla = () => {
      const porId = Array.from(document.querySelectorAll('[id="search-input"]')).filter(i => !i.closest('#telecom-wizard-ui'));
      if (porId.length) {
        return porId.find(i => { const r = i.getBoundingClientRect(); return r.width > 0 && r.height > 0; }) || porId[0];
      }
      const x = getElementByXPath('//*[@id="search-input"]');
      return (x && !x.closest('#telecom-wizard-ui')) ? x : null;
    };

    let crmInput = buscarCasilla();
    if (!crmInput) {
      btnMsg(searchBtn, 'Buscando casilla...', 'busy');
      for (let i = 0; i < 20 && !crmInput; i++) {
        await new Promise(r => setTimeout(r, 250));
        crmInput = buscarCasilla();
      }
    }
    if (!crmInput) { btnMsg(searchBtn, 'No encuentro #search-input', 'warning', 3500); return; }
    // ===== FIN CORRECCIÓN =====

    try {
      searchBtn.disabled = true;
      btnMsg(searchBtn, 'Buscando...', 'busy');

      crmInput.focus();
      const proto = Object.getPrototypeOf(crmInput);
      const valueSetter = Object.getOwnPropertyDescriptor(proto, 'value')?.set;
      if (valueSetter) valueSetter.call(crmInput, cleanNumber); else crmInput.value = cleanNumber;

      crmInput.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
      crmInput.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
      await new Promise(r => setTimeout(r, 100));

      // La lupa de #search-input es un <div class="p-inputgroupaddon"> (no un <button>) que se activa al haber valor
      const grupo = crmInput.closest('.p-inputgroup') || crmInput.parentElement;
      const lupa = grupo ? grupo.querySelector('.p-inputgroupaddon') : null;

      if (lupa) {
        // Espera (máx. 2 s) a que la lupa deje de estar deshabilitada y la pulsa
        for (let i = 0; i < 20 && /cursor-not-allowed|opacity-50/.test(lupa.className); i++) {
          await new Promise(r => setTimeout(r, 100));
        }
        const objetivo = lupa.querySelector('i') || lupa;
        ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click'].forEach(tipo =>
          objetivo.dispatchEvent(new MouseEvent(tipo, { bubbles: true, cancelable: true, composed: true, view: window })));
      } else {
        const keyOptions = { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true, cancelable: true, composed: true };
        crmInput.dispatchEvent(new KeyboardEvent('keydown', keyOptions));
        crmInput.dispatchEvent(new KeyboardEvent('keypress', keyOptions));
        crmInput.dispatchEvent(new KeyboardEvent('keyup', keyOptions));
      }

      setTimeout(() => {
        activeCat = 'CLIENTE';
        SR.querySelectorAll('.tw-cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === 'CLIENTE'));

        runScan().then(async () => {
          searchBtn.disabled = false;
          btnReset(searchBtn);
          await copiarImsiTrasBusqueda();
        });
      }, 2200);

    } catch (e) {
      console.error('Error al buscar la línea:', e);
      alert('No se pudo ejecutar la búsqueda.');
      searchBtn.disabled = false;
      btnReset(searchBtn);
    }
  }

  searchBtn.onclick = (e) => { e.stopPropagation(); searchLineInCRM(phoneInput.value); };
  phoneInput.onkeydown = (e) => { if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); searchLineInCRM(phoneInput.value); } };
  resetBtn.onclick = (e) => { e.stopPropagation(); runAutoReset(); };

  SR.querySelectorAll('.tw-cat-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      irACategoria(btn.dataset.cat);
    };
  });

  console.log('✅ 360 PRO: Inicializado (v6.4 - IATelecom Design System).');
})();