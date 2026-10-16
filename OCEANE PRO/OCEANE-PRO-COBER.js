// ==UserScript==
// @name         OCEANE PRO - COBERTURA
// @namespace    OCEANE PRO
// @version      44.0
// @description  Suite profesional completa: Fix adición de comentarios en Padre, navegación robusta a comentarios, persistencia Hijo/Padre y Excel perfecto.
// @match        *://calipso-oceane.sso.infra.ftgroup/*
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  // =========================================================
  // 1. CONFIGURACIÓN Y MAPAS DE DATOS
  // =========================================================

  const STORAGE_KEY = 'ocean_ticket_datos_copiados';
  const STORAGE_KEY_CHK = 'ocean_ticket_checklist_copiado';

  const PRIORIDAD_POR_SEGMENTO = {
    RESIDENCIAL: '4',
    JAZZTEL: '4',
    SOHO: '4',
    OMV: '4',
    PYME: '3'
  };

  const SINTOMA_POR_SEGMENTO = {
    RESIDENCIAL: { val: '61700', text: 'RESIDENCIAL' },
    JAZZTEL: { val: '1002641', text: 'JAZZTEL' },
    OMV: { val: '1002642', text: 'OMV' },
    PYME: { val: '1002637', text: 'PYME' },
    SOHO: { val: '1002636', text: 'SOHO' }
  };

  const CP_PROVINCIAS = {
    '01': 'ÁLAVA', '02': 'ALBACETE', '03': 'ALICANTE', '04': 'ALMERÍA', '05': 'ÁVILA', '06': 'BADAJOZ',
    '07': 'BALEARES', '08': 'BARCELONA', '09': 'BURGOS', '10': 'CÁCERES', '11': 'CÁDIZ', '12': 'CASTELLÓN',
    '13': 'CIUDAD REAL', '14': 'CÓRDOBA', '15': 'A CORUÑA', '16': 'CUENCA', '17': 'GIRONA', '18': 'GRANADA',
    '19': 'GUADALAJARA', '20': 'GIPUZKOA', '21': 'HUELVA', '22': 'HUESCA', '23': 'JAÉN', '24': 'LEÓN',
    '25': 'LLEIDA', '26': 'LA RIOJA', '27': 'LUGO', '28': 'MADRID', '29': 'MÁLAGA', '30': 'MURCIA',
    '31': 'NAVARRA', '32': 'OURENSE', '33': 'ASTURIAS', '34': 'PALENCIA', '35': 'LAS PALMAS', '36': 'PONTEVEDRA',
    '37': 'SALAMANCA', '38': 'SANTA CRUZ DE TENERIFE', '39': 'CANTABRIA', '40': 'SEGOVIA', '41': 'SEVILLA',
    '42': 'SORIA', '43': 'TARRAGONA', '44': 'TERUEL', '45': 'TOLEDO', '46': 'VALENCIA', '47': 'VALLADOLID',
    '48': 'BIZKAIA', '49': 'ZAMORA', '50': 'ZARAGOZA', '51': 'CEUTA', '52': 'MELILLA'
  };

  const CONFIG_BRUJULA = {
    'DOWN': { desc: '[COBERTURA] Caída del nodo radio que da cobertura a la zona', impacto: 'Interrumpido', diasPrevision: 4, mesesPrevision: 0, sufijoEDS: '_DOWN' },
    'MC': { desc: '[COBERTURA] Caída del nodo radio que da cobertura a la zona', impacto: 'Interrumpido', diasPrevision: 10, mesesPrevision: 0, sufijoEDS: '_MC' },
    'HALTED': { desc: '[COBERTURA] Caída del nodo radio que da cobertura a la zona', impacto: 'Interrumpido', diasPrevision: 10, mesesPrevision: 0, sufijoEDS: '_INDISP' },
    'ALARMAS': { desc: '[COBERTURA] Caída del nodo radio que da cobertura a la zona', impacto: 'Interrumpido', diasPrevision: 10, mesesPrevision: 0, sufijoEDS: '_INDISP' },
    'PCAR': { desc: '[REINTENTOS] Necesidad de reintentos para emitir/recibir llamadas de voz y establecer conexiones de datos en la zona', impacto: 'Degradado', diasPrevision: 10, mesesPrevision: 0, sufijoEDS: '_DEGRADADO' },
    'RSSI': { desc: '[REINTENTOS] Necesidad de reintentos para emitir/recibir llamadas de voz y establecer conexiones de datos en la zona', impacto: 'Degradado', diasPrevision: 0, mesesPrevision: 3, sufijoEDS: '_RSSI' }
  };

  function calcularFechaPrevision(dias, meses) {
    let d = new Date();
    if (dias > 0) d.setDate(d.getDate() + dias);
    if (meses > 0) d.setMonth(d.getMonth() + meses);
    let day = String(d.getDate()).padStart(2, '0');
    let month = String(d.getMonth() + 1).padStart(2, '0');
    let year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // =========================================================
  // 2. RECUPERACIÓN DE TEXTO Y REFERENCIA DOM PURA
  // =========================================================

  function getDirectPageText() {
    let text = "";
    try {
      if (document.body) {
        text += (document.body.innerText || document.body.textContent || "") + "\n";
      }
    } catch (e) {}

    try {
      let iframes = document.querySelectorAll('iframe, frame');
      for (let i = 0; i < iframes.length; i++) {
        try {
          let doc = iframes[i].contentDocument;
          if (doc && doc.body) {
            text += (doc.body.innerText || doc.body.textContent || "") + "\n";
          }
        } catch (err) {}
      }
    } catch (e) {}

    return text.replace(/\u00a0/g, " ");
  }

  function buscarReferenciaTerceros(fullText) {
    let docs = [document];
    try {
      if (window.top && window.top.document && !docs.includes(window.top.document)) {
        docs.push(window.top.document);
      }
    } catch(e) {}

    try {
      let iframes = document.querySelectorAll('iframe, frame');
      for (let i = 0; i < iframes.length; i++) {
        try {
          if (iframes[i].contentDocument) docs.push(iframes[i].contentDocument);
        } catch(e) {}
      }
    } catch(e) {}

    for (let d of docs) {
      try {
        let inp = d.getElementById('forthirdpartyref') ||
                  d.querySelector('input[name="ViewData.BodyTicComModel.ThirdPartyRef"]') ||
                  d.querySelector('input[id*="thirdpartyref" i]') ||
                  d.getElementById('REFTIERS');

        if (inp) {
          let val = (inp.value || inp.getAttribute('value') || '').trim();
          if (val && val.length > 3 && !/RECORDAR|COMENTARIOS/i.test(val)) {
            return val;
          }
        }
      } catch(e) {}
    }

    if (fullText) {
      let mExact = fullText.match(/\b(JAZ-[0-9]{7,14})\b/i) || fullText.match(/\b(2-[A-Z0-9]{6,14})\b/i);
      if (mExact) return mExact[1].trim();

      let mLabel = fullText.match(/Referencia de terceros\s*:\s*([A-Z0-9\-]+)/i);
      if (mLabel && mLabel[1] && !/RECORDAR|COMENTARIOS/i.test(mLabel[1])) {
        return mLabel[1].trim();
      }
    }

    return "";
  }

  function extraerDatosLocales(text) {
    let msisdn = '';
    const mNum = text.match(/LINEA AFECTADA\s*:?\s*(\d{9})/i) ||
                 text.match(/NumA\s*:?\s*(\d{9})/i) ||
                 text.match(/TEL[EÉ]FONO\s*:?\s*(\d{9})/i) ||
                 text.match(/MSISDN\s*:?\s*(\d{9})/i) ||
                 text.match(/\b[67]\d{8}\b/);
    if (mNum) msisdn = mNum[1] || mNum[0];

    let segmento = 'RESIDENCIAL';
    const textUp = text.toUpperCase();

    if (/\bJAZZTEL\b/.test(textUp)) segmento = 'JAZZTEL';
    else if (/\bOMV\b/.test(textUp)) segmento = 'OMV';
    else if (/\bSOHO\b/.test(textUp)) segmento = 'SOHO';
    else if (/\bEMPRESA\b/.test(textUp)) segmento = 'SOHO';
    else if (/\bPYME\b/.test(textUp)) segmento = 'PYME';

    if (textUp.includes('NEGOCIO N') || textUp.includes('SEGMENTO VALOR:EMPRESA') || textUp.includes('SEGMENTO: EMPRESA')) segmento = 'SOHO';
    if (/\bPYME\b/.test(textUp)) segmento = 'PYME';
    if (textUp.includes('OMV JAZZTEL') || textUp.includes('INICIADOR : OMV JAZZTEL')) segmento = 'JAZZTEL';

    let calle = 'N/A', localidad = '', provincia = '';
    const lineas = text.split('\n');
    for (let i = 0; i < lineas.length; i++) {
      let l = lineas[i].trim();
      let lUp = l.toUpperCase();

      if (lUp.startsWith('DIRECCION :') || lUp.startsWith('DIRECCIÓN :') || lUp.startsWith('DIRECCION:') || lUp.startsWith('DIRECCIÓN:')) {
        calle = l.split(':')[1].trim();
      } else if (lUp.includes('DIRECCIÓN EXACTA') || lUp.includes('DIRECCION EXACTA')) {
        let partes = l.split(':');
        if (partes.length > 1 && partes[1].trim() !== '') calle = partes[1].split(',')[0].trim();
      } else if (lUp.includes('DIRECCIÓN DONDE SUCEDE') || lUp.includes('DIRECCION DONDE SUCEDE')) {
        let partes = l.split(':');
        if (partes.length > 1 && partes[1].trim() !== '') {
          calle = partes[1].split(',')[0].trim();
        } else if (i + 1 < lineas.length) {
          let sig = lineas[i + 1].trim();
          if (sig.toUpperCase().startsWith('C.') || sig.toUpperCase().startsWith('CALLE') || sig.toUpperCase().startsWith('AVENIDA')) calle = sig.split(',')[0].trim();
        }
      }
      if (lUp.startsWith('LOCALIDAD :') || lUp.startsWith('LOCALIDAD:')) localidad = l.split(':')[1].trim();
      if (lUp.startsWith('CODIGO_POSTAL') || lUp.startsWith('CÓDIGO_POSTAL')) {
        let partes = l.split(':');
        if (partes.length > 1) {
          let cpMatch = partes[1].match(/\d{5}/);
          if (cpMatch) {
            let cod = cpMatch[0];
            if (CP_PROVINCIAS[cod.substring(0, 2)]) provincia = CP_PROVINCIAS[cod.substring(0, 2)];
          }
        }
      }
    }

    if (!provincia) {
      let matchCP = text.match(/\b(0[1-9]|[1-4][0-9]|5[0-2])\d{3}\b/);
      if (matchCP) {
        let cod = matchCP[0];
        if (CP_PROVINCIAS[cod.substring(0, 2)]) provincia = CP_PROVINCIAS[cod.substring(0, 2)];
      }
    }

    return { msisdn, segmento, calle, localidad, provincia };
  }

  function buildDescripcion(data) {
    const parts = [data.msisdn || '', data.calle || 'N/A'];
    if (data.localidad && data.provincia && data.localidad.toUpperCase() !== data.provincia.toUpperCase()) {
      parts.push(data.localidad, data.provincia);
    } else {
      parts.push(data.provincia || data.localidad || 'N/A', 'ESPAÑA');
    }
    parts.push(data.segmento || 'RESIDENCIAL');
    return `[IATEL] ` + parts.filter(Boolean).map(s => s.trim().toUpperCase()).join(' / ');
  }

  function extractChecklist(fullText) {
    let commentNodes = [];
    try {
      document.querySelectorAll('div[id^="divCmt"]').forEach(el => commentNodes.push(el));
      let iframes = document.querySelectorAll('iframe, frame');
      for (let i = 0; i < iframes.length; i++) {
        try {
          iframes[i].contentDocument.querySelectorAll('div[id^="divCmt"]').forEach(el => commentNodes.push(el));
        } catch (e) {}
      }
    } catch (e) {}

    for (let i = commentNodes.length - 1; i >= 0; i--) {
      let t = (commentNodes[i].innerText || commentNodes[i].textContent || '').trim();
      let up = t.toUpperCase();
      if (up.includes('MSISDN') && (up.includes('COBERTURA') || up.includes('ANTENAS') || up.includes('INCIDENCIA'))) {
        let idx = up.indexOf('MSISDN');
        return idx !== -1 ? t.substring(idx) : t;
      }
      if (up.includes('TIPO1') && up.includes('SINTOMA')) {
        let idx = up.indexOf('TIPO1');
        return idx !== -1 ? t.substring(idx) : t;
      }
    }

    let up = fullText.toUpperCase();
    let keywords = ['MSISDN :', 'MSISDN:', 'LINEA AFECTADA', '1. LINEA AFECTADA', 'TIPO1 :', 'TIPO1:'];
    for (let kw of keywords) {
      let idx = up.lastIndexOf(kw);
      if (idx !== -1) {
        let chunk = fullText.substring(idx, idx + 2500);
        let endIdx = chunk.indexOf('\n\n\n\n');
        return endIdx !== -1 ? chunk.substring(0, endIdx).trim() : chunk.trim();
      }
    }

    return '';
  }

  // =========================================================
  // 3. GESTIÓN VISUAL DE BOTONES
  // =========================================================

  const defaultButtonTexts = {
    'ocean-btn-copiar': 'Extraer datos',
    'ocean-btn-rellenar': 'Rellenar Padre',
    'ocean-btn-asociar': 'Asociar a ICF de red',
    'ocean-btn-brujula': 'Rellenar Brújula',
    'ocean-btn-excel': 'Excel Llegadas'
  };

  const activeTimeouts = {};

  function restaurarBotonNormal(btnId) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.classList.remove('active', 'done');
    btn.innerHTML = defaultButtonTexts[btnId] || 'Acción';
  }

  function setTempBtnText(btnId, htmlText, duration = 3000) {
    const btn = document.getElementById(btnId);
    if (!btn) return;

    btn.classList.remove('active');
    btn.classList.add('done');
    btn.innerHTML = htmlText;

    if (activeTimeouts[btnId]) {
      clearTimeout(activeTimeouts[btnId]);
    }

    activeTimeouts[btnId] = setTimeout(() => {
      restaurarBotonNormal(btnId);
      delete activeTimeouts[btnId];
    }, duration);
  }

  document.addEventListener('ocean-status', (e) => {
    ['ocean-btn-rellenar', 'ocean-btn-asociar', 'ocean-btn-brujula'].forEach(id => {
      const b = document.getElementById(id);
      if (b && b.classList.contains('active')) {
        b.innerHTML = '<span class="ocean-spinner"></span>' + e.detail;
      }
    });
  });

  function inyectarEnFrames(win, scriptCode) {
    try {
      if (win && win.document) {
        const script = win.document.createElement('script');
        script.textContent = scriptCode;
        const target = win.document.head || win.document.documentElement;
        target.appendChild(script);
        setTimeout(() => script.remove(), 60000);
      }
    } catch (e) {}
  }

  // =========================================================
  // 4. ACCIÓN: EXTRAER DATOS (CAPTURA ESENCIALES DEL HIJO)
  // =========================================================

  function copiarDatos() {
    const btnId = 'ocean-btn-copiar';
    try {
      GM_setValue('ocean_padre_id', '');
      GM_setValue('ocean_brujula_id', '');
      GM_setValue('ocean_brujula_nodo', '');
      GM_setValue('ocean_brujula_afec', '');

      const text = getDirectPageText();
      if (!text || text.length < 30) {
        setTempBtnText(btnId, '❌ Sin texto', 3000);
        return;
      }

      const chkList = extractChecklist(text);
      GM_setValue(STORAGE_KEY_CHK, chkList);

      const data = extraerDatosLocales(text);
      let calleLimpia = (data.calle || 'N/A').replace(/\d+/g, '').replace(/[,ºª\.-]/g, '').replace(/\s+/g, ' ').trim().toUpperCase();
      if (!calleLimpia) calleLimpia = 'N/A';

      const payload = {
        msisdn: (data.msisdn || '').replace(/\D/g, ''),
        segmento: (data.segmento || 'RESIDENCIAL').toUpperCase().trim(),
        calle: calleLimpia,
        localidad: (data.localidad || '').toUpperCase(),
        provincia: (data.provincia || '').toUpperCase(),
      };
      GM_setValue(STORAGE_KEY, payload);

      let matchHeader = text.match(/\b\d{4}[A-Z0-9]{6}\b/i);
      if (matchHeader) GM_setValue('ocean_hijo_id', matchHeader[0].toUpperCase());

      let matchApe = text.match(/Creado el[\s:]*(\d{2}\/\d{2}\/\d{4}\s\d{2}:\d{2})/i);
      if (matchApe) GM_setValue('ocean_hijo_fecha_ape', matchApe[1]);

      let refHijo = buscarReferenciaTerceros(text);
      if (refHijo) GM_setValue('ocean_hijo_ref', refHijo);

      setTempBtnText(btnId, '✓ Completado', 3000);
    } catch (err) {
      console.error("[Oceane Pro] Error en copiarDatos:", err);
      setTempBtnText(btnId, '❌ Fallo', 3000);
    }
  }

  // =========================================================
  // 5. ACCIÓN: EXPORTAR A EXCEL (PERSISTENCIA Y ORDEN EXACTO)
  // =========================================================

  function recopilarDatosExcel() {
    const btnId = 'ocean-btn-excel';
    try {
      const fullText = getDirectPageText();
      const fullTextUp = fullText.toUpperCase();

      let currentScreenId = '';
      let matchHeader = fullText.match(/\b\d{4}[A-Z0-9]{6}\b/i);
      if (matchHeader) currentScreenId = matchHeader[0].toUpperCase();

      let memHijoId = GM_getValue('ocean_hijo_id', '');
      let memHijoFechaApe = GM_getValue('ocean_hijo_fecha_ape', '');
      let memHijoRef = GM_getValue('ocean_hijo_ref', '');

      let idPadre = GM_getValue('ocean_padre_id', '');
      let idBrujula = GM_getValue('ocean_brujula_id', '');
      let nodoAnalizado = GM_getValue('ocean_brujula_nodo', '');
      let mainCausa = GM_getValue('ocean_brujula_afec', '');

      let idEntrada = '';
      if (memHijoId) {
        idEntrada = memHijoId;
        if (currentScreenId !== memHijoId && !idPadre) {
          idPadre = currentScreenId;
        }
      } else {
        idEntrada = currentScreenId;
      }

      let fechaApertura = memHijoFechaApe;
      if (!fechaApertura) {
        let matchApe = fullText.match(/Creado el[\s:]*(\d{2}\/\d{2}\/\d{4}\s\d{2}:\d{2})/i);
        if (matchApe) fechaApertura = matchApe[1];
      }

      let refTercio = memHijoRef;
      if (!refTercio) {
        refTercio = buscarReferenciaTerceros(fullText);
      }

      let ultimoEstado = "";
      let matchEst = fullText.match(/Último estado[\s:]*([a-zA-Z]+)/i);
      if (matchEst) ultimoEstado = matchEst[1].trim();

      let zonaFull = "";
      let matchZon = fullText.match(/Emplaz\/Prov\/Loc\/Munici\/CP\/Zona[\s:]*([^\n]+)/i);
      if (matchZon) zonaFull = matchZon[1].trim().toUpperCase();

      if (mainCausa) {
        if (mainCausa === 'OPTIMIZACION') mainCausa = "CausaICF_Optimizacion";
        else if (mainCausa === 'MC') mainCausa = "CausaICF_MC";
        else if (mainCausa === 'DOWN') mainCausa = "CausaICF_DOWN";
        else if (mainCausa === 'HALTED') mainCausa = "CausaICF_HALTED";
        else if (mainCausa === 'ALARMAS') mainCausa = "CausaICF_ALARMAS";
        else if (mainCausa === 'OT') mainCausa = "CausaICF_OT";
        else if (mainCausa === 'MASTERLIST') mainCausa = "CausaICF_ML";
        else if (mainCausa === 'PCAR') mainCausa = "CausaICF_PCAR";
        else if (mainCausa === 'RSSI') mainCausa = "CausaICF_RSSI_OSP";
        else if (mainCausa === 'CONGESTION') mainCausa = "CausaICF_CONG";
      } else {
        let matchCausa = fullText.match(/CausaICF_[A-Za-z0-9_]+/i);
        if (matchCausa) {
          mainCausa = matchCausa[0];
          let idxSub = mainCausa.toUpperCase().indexOf('SUBCAUSA');
          if (idxSub !== -1) mainCausa = mainCausa.substring(0, idxSub);
        }
      }

      let msisdn = '';
      const storedData = GM_getValue(STORAGE_KEY, null);
      if (storedData && storedData.msisdn) {
        msisdn = storedData.msisdn;
      } else {
        let mNum = fullText.match(/LINEA AFECTADA\s*:?\s*(\d{9})/i) ||
                   fullText.match(/NumA\s*:?\s*(\d{9})/i) ||
                   fullText.match(/TEL[EÉ]FONO\s*:?\s*(\d{9})/i) ||
                   fullText.match(/MSISDN\s*:?\s*(\d{9})/i) ||
                   fullText.match(/\b[67]\d{8}\b/);
        if (mNum) msisdn = mNum[1] || mNum[0];
      }

      let segmento = (storedData && storedData.segmento) ? storedData.segmento : 'RESIDENCIAL';
      if (!storedData) {
        if (/\bJAZZTEL\b/.test(fullTextUp)) segmento = 'JAZZTEL';
        else if (/\bOMV\b/.test(fullTextUp)) segmento = 'OMV';
        else if (/\bSOHO\b/.test(fullTextUp)) segmento = 'SOHO';
        else if (/\bEMPRESA\b/.test(fullTextUp)) segmento = 'SOHO';
        else if (/\bPYME\b/.test(fullTextUp)) segmento = 'PYME';

        if (fullTextUp.includes('NEGOCIO N') || fullTextUp.includes('SEGMENTO VALOR:EMPRESA') || fullTextUp.includes('SEGMENTO: EMPRESA')) segmento = 'SOHO';
        if (/\bPYME\b/.test(fullTextUp)) segmento = 'PYME';
        if (fullTextUp.includes('OMV JAZZTEL') || fullTextUp.includes('INICIADOR : OMV JAZZTEL')) segmento = 'JAZZTEL';
      }

      // GESTOR: Regla especial para "MARCHAL MARTÍNEZ JAVIER" -> "Marchal"
      let gestor = '';
      if (/MARCHAL\s+MART[IÍ]NEZ\s+JAVIER/i.test(fullText) || /MARCHAL/i.test(fullText.match(/([^\n]+)[\s\r\n]+ICF COBERTURA\(XSP00050\)/i)?.[1] || '')) {
        gestor = 'Marchal';
      } else {
        let matchGestor = fullText.match(/([a-zA-ZÁÉÍÓÚÑáéíóúñ]+)[\s\r\n]+ICF COBERTURA\(XSP00050\)/i);
        if (matchGestor && matchGestor[1]) {
          gestor = matchGestor[1].charAt(0).toUpperCase() + matchGestor[1].slice(1).toLowerCase();
        }
      }

      if (!nodoAnalizado) {
        let matchNodo = fullTextUp.match(/\[NODO_CLIENTE\]#\[([A-Z0-9]+)\]/);
        if (matchNodo) {
          let n = matchNodo[1];
          if (n.length === 8 && (n[3] === 'X' || n[3] === 'Y')) n = n.substring(0, 3) + n.substring(4);
          nodoAnalizado = n;
        } else {
          let m2 = fullTextUp.match(/\b([A-Z]{3})[XY]([0-9]{4})\b/);
          if (m2) nodoAnalizado = m2[1] + m2[2];
        }
      }

      let hasICF = false;
      let matchICF = fullText.match(/\n\s*(ICF|VDF-NIC)\s*\n/i);
      if (matchICF) hasICF = true;

      let hasHuella = fullTextUp.includes('CAUSAICF_HUELLA');
      let hasRSSIVDF = fullTextUp.includes('CAUSAICF_RSSI_VDF');

      let estado = 'ESCALADO';
      let isRechazado = /DatosErroneos|EnVentana|Brujula|NoRed|IMPROCEDENTE/i.test(mainCausa);
      let isEscaladoForzoso = /Optimizacion|FueraVentana/i.test(mainCausa);

      if (isRechazado) estado = 'RECHAZADO';
      else if (isEscaladoForzoso) estado = 'ESCALADO';
      else {
        if (hasHuella) estado = 'CERRADO';
        else if (idPadre !== '') estado = 'ESCALADO';
        else if (hasICF) estado = 'ESCALADO';
        else if (ultimoEstado.toLowerCase() === 'cerrado' || ultimoEstado.toLowerCase() === 'reparado') estado = 'CERRADO';
        else if (['PYME', 'EMPRESA', 'SOHO'].includes(segmento) && hasRSSIVDF && !hasICF) estado = 'CERRADO';
        else estado = 'CERRADO';
      }

      let grupoEscalado = '';
      if (estado === 'ESCALADO') {
        if (/(MC|DOWN|ALARMAS|HALTED|CELFI|RSSI_OSP)/i.test(mainCausa)) grupoEscalado = 'XSPHUA10';
        else if (/PCAR/i.test(mainCausa)) grupoEscalado = hasICF ? 'XSPHUA10' : 'XSP00020';
        else if (/(OT|Optimizacion|CONG|ML)/i.test(mainCausa)) {
          if (['RESIDENCIAL', 'OMV', 'SOHO', 'JAZZTEL'].includes(segmento)) grupoEscalado = 'XSP00021';
          else {
            if (zonaFull.endsWith('REST')) grupoEscalado = '515556';
            else if (zonaFull.endsWith('RNOR')) grupoEscalado = '515558';
            else if (zonaFull.endsWith('RSUR')) grupoEscalado = '515557';
            else if (zonaFull.endsWith('RCEN')) grupoEscalado = '515555';
            else grupoEscalado = 'XSP00021';
          }
        } else if (/RSSI_VDF/i.test(mainCausa)) {
          if (['PYME', 'EMPRESA', 'SOHO'].includes(segmento)) grupoEscalado = 'XSPHUA10';
        }
      }

      let causaEscalado = '', causaCierre = '', etiquetaCausa = '', fechaHoraCierre = '';
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0');
      let yyyy = today.getFullYear();
      let hh = String(today.getHours()).padStart(2, '0');
      let min = String(today.getMinutes()).padStart(2, '0');
      let fechaHoy = `${dd}/${mm}/${yyyy}`;

      if (estado === 'ESCALADO') {
        causaEscalado = mainCausa;
      } else {
        causaCierre = mainCausa;
        fechaHoraCierre = `${dd}/${mm}/${yyyy} ${hh}:${min}`;
        grupoEscalado = '';

        if (hasHuella && !hasRSSIVDF) etiquetaCausa = 'INFANCIA';
        else if (hasHuella && hasRSSIVDF) etiquetaCausa = 'RSSI VDF';
        else if (/(MC|DOWN|ALARMAS|HALTED|CELFI|RSSI_OSP|PCAR)/i.test(mainCausa)) etiquetaCausa = 'Recuperado';
        else if (/DatosErroneos/i.test(mainCausa)) etiquetaCausa = 'Falta info';
        else if (/Brujula/i.test(mainCausa)) etiquetaCausa = 'Ya comunicado';
        else if (/NoRed/i.test(mainCausa)) etiquetaCausa = 'No Red';
      }

      const excelRow = [
        idEntrada,
        idPadre,
        msisdn,
        refTercio,
        idBrujula,
        grupoEscalado,
        estado,
        causaEscalado,
        causaCierre,
        etiquetaCausa,
        nodoAnalizado,
        fechaHoy,
        segmento,
        fechaApertura,
        fechaHoraCierre,
        gestor
      ].join('\t');

      const copyFallback = (txt) => {
        const textArea = document.createElement("textarea");
        textArea.value = txt;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        let res = false;
        try { res = document.execCommand('copy'); } catch (err) {}
        document.body.removeChild(textArea);
        return res;
      };

      let success = copyFallback(excelRow);

      if (success) {
        setTempBtnText(btnId, '✓ Copiado', 3000);
      } else if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(excelRow).then(() => {
          setTempBtnText(btnId, '✓ Copiado', 3000);
        }).catch(() => {
          setTempBtnText(btnId, '❌ Error copia', 3000);
        });
      } else {
        setTempBtnText(btnId, '❌ Error copia', 3000);
      }
    } catch (error) {
      console.error("[Excel] Error:", error);
      setTempBtnText(btnId, '❌ Error', 3000);
    }
  }

  // =========================================================
  // 6. ACCIÓN: ASOCIAR A ICF DE RED
  // =========================================================

  function asociarICF() {
    const btnId = 'ocean-btn-asociar';
    let padreID = GM_getValue('ocean_padre_id', '');
    if (!padreID) {
      setTempBtnText(btnId, '❌ Ejecuta Padre 1º', 3000);
      return;
    }

    const data = GM_getValue(STORAGE_KEY, null);
    const segmento = data ? (data.segmento || 'RESIDENCIAL') : 'RESIDENCIAL';
    const sintoma = SINTOMA_POR_SEGMENTO[segmento] || { val: '61700', text: 'RESIDENCIAL' };

    iniciarFlujoAsociarHijo(padreID, sintoma);
  }

  function iniciarFlujoAsociarHijo(padreID, sintoma) {
    const btnId = 'ocean-btn-asociar';
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.classList.add('active');
      btn.classList.remove('done');
      btn.innerHTML = '<span class="ocean-spinner"></span>Asociando...';
    }

    const handleDone = function (e) {
      document.removeEventListener('OceanHijoFinished', handleDone);
      if (e.detail && e.detail === 'error') {
        setTempBtnText(btnId, '❌ Error Asociando', 3000);
      } else {
        setTempBtnText(btnId, '✓ Completado', 3000);
      }
    };
    document.addEventListener('OceanHijoFinished', handleDone, { once: true });

    const scriptCode = `
      (async function() {
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        const updateStatus = (msg) => {
          try { window.top.document.dispatchEvent(new CustomEvent('ocean-status', { detail: msg })); }
          catch(e) { document.dispatchEvent(new CustomEvent('ocean-status', { detail: msg })); }
        };

        function buscarElementoPorTextoOId(ids, textoBuscado) {
          function buscar(d) {
            if(!d) return null;
            for(let id of ids) {
              let el = d.getElementById(id);
              if (el && (el.offsetWidth > 0 || el.offsetHeight > 0)) return el;
            }
            if(textoBuscado) {
              let links = d.querySelectorAll('a, span');
              for(let l of links) {
                if(l.textContent && l.textContent.trim().toLowerCase() === textoBuscado.toLowerCase()) {
                  return l;
                }
              }
            }
            let found = null;
            d.querySelectorAll('iframe, frame').forEach(f => {
              if (found) return;
              try { found = buscar(f.contentDocument); } catch (e) {}
            });
            return found;
          }
          try { return buscar(window.top.document); } catch(e) { return buscar(document); }
        }

        async function waitForElemento(ids, textoBuscado, retries = 50, delay = 150) {
          for(let i = 0; i < retries; i++) {
            let el = buscarElementoPorTextoOId(ids, textoBuscado);
            if(el) return el;
            await sleep(delay);
          }
          return null;
        }

        function seleccionarOpcionPorTexto(selectElement, textoBuscado) {
          if (!selectElement) return false;
          let target = textoBuscado.toString().toLowerCase().trim();
          for (let i = 0; i < selectElement.options.length; i++) {
            if (selectElement.options[i].text.toLowerCase().includes(target) || selectElement.options[i].value.toLowerCase() === target) {
              if (selectElement.value !== selectElement.options[i].value) {
                selectElement.value = selectElement.options[i].value;
                selectElement.dispatchEvent(new Event('change', {bubbles:true}));
              }
              return true;
            }
          }
          return false;
        }

        try {
          let icfRed = "${padreID}";
          let sintomaObj = ${JSON.stringify(sintoma)};

          updateStatus("Abriendo Relaciones...");
          let btnRelaciones = await waitForElemento(['menu_hlnk_I6_L1', 'menu_hlnk_I7_L1', 'menu_hlnk_I5_L1', 'menu_lbtn_I6_L1'], 'relaciones');
          if(btnRelaciones) {
            btnRelaciones.click();
            await sleep(1500);
          }

          updateStatus("Abriendo Maestro/Hijo...");
          let btnMaestroHijo = await waitForElemento(['menu_lbtn_I6_1_L2', 'menu_lbtn_I7_1_L2', 'menu_lbtn_I5_1_L2'], 'maestro/hijo');
          if(btnMaestroHijo) {
            btnMaestroHijo.click();
            await sleep(2000);
          }

          updateStatus("Agregando Padre...");
          let btnAgregarPadre = await waitForElemento(['ATTACH_PERE'], null, 40, 150);
          if(btnAgregarPadre) {
            btnAgregarPadre.click();
            await sleep(1500);
          }

          let btnSi = await waitForElemento(['btnDYes'], null, 30, 150);
          if(btnSi) {
            btnSi.click();
            await sleep(2500);
          }

          updateStatus("Buscando ICF...");
          let inputTicNum = await waitForElemento(['ticNum'], null, 30, 150);
          if(inputTicNum) {
            inputTicNum.value = icfRed;
            inputTicNum.dispatchEvent(new Event('input', {bubbles:true}));
            inputTicNum.dispatchEvent(new Event('change', {bubbles:true}));
            await sleep(500);
          }

          let btnBuscarPadre = await waitForElemento(['SEARCHTICMASTER'], null, 30, 150);
          if(btnBuscarPadre) {
            btnBuscarPadre.click();
            await sleep(3500);
          }

          updateStatus("Abriendo Detalles...");
          let btnDetalles = await waitForElemento(['menu_lbtn_I1_L1'], 'detalles');
          if (btnDetalles) {
            btnDetalles.click();
            await sleep(1500);
          }

          updateStatus("Editando Detalles...");
          let etiqueta = "[INC_RED_ICF_ASOCIADA]" + icfRed;

          for (let step = 0; step < 3; step++) {
            let docs = [];
            try { docs.push(window.top.document); } catch(e) { docs.push(document); }
            docs[0].querySelectorAll('iframe, frame').forEach(f => {
              try { if(f.contentDocument) docs.push(f.contentDocument); } catch(e){}
            });

            docs.forEach(doc => {
              var famSel = doc.getElementById('IDTFAMSYM');
              if (famSel && famSel.value !== "617") {
                famSel.value = "617";
                famSel.dispatchEvent(new Event('change', {bubbles:true}));
              }

              var symSel = doc.getElementById('IDTSYM');
              if (symSel && famSel && famSel.value === "617") {
                seleccionarOpcionPorTexto(symSel, sintomaObj.val);
              }

              var dscArea = doc.getElementById('DSCTIC') || doc.querySelector('textarea[name*="DscTic"]');
              if (dscArea && dscArea.value.indexOf(etiqueta) === -1) {
                dscArea.value = dscArea.value + etiqueta;
                dscArea.dispatchEvent(new Event('input', {bubbles:true}));
              }

              if (window.CKEDITOR && window.CKEDITOR.instances) {
                for (var idx in window.CKEDITOR.instances) {
                  try {
                    var inst = window.CKEDITOR.instances[idx];
                    var currentData = inst.getData();
                    if (currentData.indexOf(etiqueta) === -1) {
                      if (currentData.trim().match(/<\\/p>$/i)) {
                        inst.setData(currentData.trim().replace(/<\\/p>$/i, etiqueta + '</p>'));
                      } else {
                        inst.setData(currentData + etiqueta);
                      }
                    }
                  } catch(e){}
                }
              }

              doc.querySelectorAll('iframe').forEach(ifr => {
                try {
                  var cdoc = ifr.contentDocument;
                  if (cdoc && (cdoc.title.includes('DSCTIC') || ifr.title.includes('DSCTIC'))) {
                    if (cdoc.body.innerHTML.indexOf(etiqueta) === -1) {
                      if (cdoc.body.innerHTML.trim().match(/<\\/p>$/i)) {
                        cdoc.body.innerHTML = cdoc.body.innerHTML.trim().replace(/<\\/p>$/i, etiqueta + '</p>');
                      } else {
                        cdoc.body.innerHTML += etiqueta;
                      }
                      cdoc.body.dispatchEvent(new Event('input', {bubbles:true}));
                    }
                  }
                } catch(e){}
              });
            });
            await sleep(800);
          }

          let btnGuardarFinal = await waitForElemento(['ENRTIC'], 'guardar', 30, 150);
          if(btnGuardarFinal) {
            updateStatus("Guardando Detalles...");
            btnGuardarFinal.click();
            await sleep(2500);
          }

          const evDone = new CustomEvent('OceanHijoFinished');
          try { window.top.document.dispatchEvent(evDone); } catch(e) { document.dispatchEvent(evDone); }
        } catch(e) {
          console.error("[Ocean] Error en flujo Asociación:", e);
          const evErr = new CustomEvent('OceanHijoFinished', { detail: 'error' });
          try { window.top.document.dispatchEvent(evErr); } catch(e) { document.dispatchEvent(evErr); }
        }
      })();
    `;
    inyectarEnFrames(window.top || window, scriptCode);
  }

  // =========================================================
  // 7. ROBOT BRÚJULA
  // =========================================================

  function ejecutarBrujula() {
    const btnId = 'ocean-btn-brujula';
    let padreID = GM_getValue('ocean_padre_id', '');
    let nodo = GM_getValue('ocean_brujula_nodo', '');
    let afec = GM_getValue('ocean_brujula_afec', '');

    if (!padreID || !nodo || !afec) {
      setTempBtnText(btnId, '❌ Falta datos Padre', 3000);
      return;
    }

    const config = CONFIG_BRUJULA[afec];
    if (!config) {
      setTempBtnText(btnId, '❌ Afectación no válida', 3000);
      return;
    }

    const btn = document.getElementById(btnId);
    if (btn) {
      btn.classList.add('active');
      btn.classList.remove('done');
      btn.innerHTML = '<span class="ocean-spinner"></span>Iniciando...';
    }

    iniciarFlujoBrujula(nodo, config, padreID);
  }

  function iniciarFlujoBrujula(nodo, config, icfRed) {
    const btnId = 'ocean-btn-brujula';
    document.addEventListener('OceanBrujulaFinished', function handleDone(e) {
      document.removeEventListener('OceanBrujulaFinished', handleDone);
      if(e.detail === 'error') {
        setTempBtnText(btnId, '❌ Error Brujula', 3000);
      } else {
        GM_setValue('ocean_brujula_id', e.detail);
        setTempBtnText(btnId, '✓ Completado', 3000);
      }
    });

    const fechaPrevista = calcularFechaPrevision(config.diasPrevision, config.mesesPrevision);
    const strInterna = `[BRUJULA]#[${nodo}]`;
    const strEDS = `[${nodo}${config.sufijoEDS}]`;

    const scriptCode = `
      (async function() {
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        function normalizarTexto(s) { return s.normalize('NFD').replace(/[\\u0300-\\u036f]/g, '').toLowerCase().trim(); }

        const updateStatus = (msg) => {
          try { window.top.document.dispatchEvent(new CustomEvent('ocean-status', { detail: msg })); }
          catch(e) { document.dispatchEvent(new CustomEvent('ocean-status', { detail: msg })); }
        };

        function buscarEnFrames(id) {
          function buscar(d) {
            if(!d) return null;
            const el = d.getElementById(id); if (el) return el;
            let found = null; d.querySelectorAll('iframe, frame').forEach(f => { if (found) return; try { found = buscar(f.contentDocument); } catch (e) {} }); return found;
          }
          try { return buscar(window.top.document); } catch(e) { return buscar(document); }
        }

        async function waitForId(id, retries = 30) {
          for(let i=0; i<retries; i++) {
            let el = buscarEnFrames(id); if(el && el.offsetWidth > 0) return el; await sleep(500);
          } return null;
        }

        function seleccionarOpcionPorTexto(selectElement, textoBuscado) {
          if (!selectElement) return false;
          let target = normalizarTexto(textoBuscado);
          for (let i = 0; i < selectElement.options.length; i++) {
            if (normalizarTexto(selectElement.options[i].text).includes(target)) {
              if (selectElement.value !== selectElement.options[i].value) {
                selectElement.value = selectElement.options[i].value;
                selectElement.dispatchEvent(new Event('change', {bubbles:true}));
              }
              return true;
            }
          } return false;
        }

        async function procesarComentarioAsync(t, tpTexto) {
          const btnAdd = buscarEnFrames("btnAddComment");
          if (btnAdd) btnAdd.click(); else return;

          for(let i=0; i<40; i++) {
            updateStatus("Insertando " + tpTexto + "...");
            await sleep(250);
            const ed = buscarEnFrames('.cke_editable') || document.querySelector('.cke_editable');
            if (ed) {
              if (tpTexto) { const s = buscarEnFrames('ddlCommentTypes'); if (s) seleccionarOpcionPorTexto(s, tpTexto); }
              ed.innerHTML = t; ed.dispatchEvent(new Event('input', { bubbles: true })); ed.dispatchEvent(new Event('blur', { bubbles: true }));
              await sleep(300);
              const btnSave = buscarEnFrames("btnSaveCmt"); if (btnSave) btnSave.click();
              await sleep(2000); return;
            }
          }
        }

        try {
          const config = ${JSON.stringify(config)};
          const fechaPrevista = "${fechaPrevista}";
          const icfRed = "${icfRed}";
          const strInterna = ${JSON.stringify(strInterna)};
          const strEDS = ${JSON.stringify(strEDS)};

          for(let i=0; i<5; i++) {
            updateStatus("Detalles...");
            let docs = [];
            try { docs.push(window.top.document); } catch(e) { docs.push(document); }
            docs[0].querySelectorAll('iframe, frame').forEach(f => { try { if(f.contentDocument) docs.push(f.contentDocument); } catch(e){} });

            docs.forEach(doc => {
              var dateInput = doc.getElementById('CONFIRMEDPLANNEDRESTORATIONDATEDate');
              if (dateInput && dateInput.value !== fechaPrevista) {
                dateInput.value = fechaPrevista; dateInput.dispatchEvent(new Event('input', {bubbles:true})); dateInput.dispatchEvent(new Event('change', {bubbles:true}));
                var hSelect = doc.getElementById('CONFIRMEDPLANNEDRESTORATIONDATEDropDownHours');
                if(hSelect) { hSelect.removeAttribute('disabled'); hSelect.value = "12"; hSelect.dispatchEvent(new Event('change')); }
                var mSelect = doc.getElementById('CONFIRMEDPLANNEDRESTORATIONDATEDropDownMins');
                if(mSelect) { mSelect.removeAttribute('disabled'); mSelect.value = "0"; mSelect.dispatchEvent(new Event('change')); }
              }

              var selPrioridad = doc.getElementById('STRIDTPRI');
              if(selPrioridad && selPrioridad.value !== "4") { selPrioridad.value = "4"; selPrioridad.dispatchEvent(new Event('change')); }

              var famSel = doc.getElementById('IDTFAMSYM');
              if(famSel && famSel.value !== "615") { famSel.value = "615"; famSel.dispatchEvent(new Event('change')); }
              var symSel = doc.getElementById('IDTSYM');
              if(symSel && famSel && famSel.value === "615" && symSel.value !== "61503") { symSel.value = "61503"; symSel.dispatchEvent(new Event('change')); }

              var selOrigen = doc.getElementById('IDTORIAPP');
              if(selOrigen) seleccionarOpcionPorTexto(selOrigen, "Interna");
              var selImpacto = doc.getElementById('IDTNTR');
              if(selImpacto) seleccionarOpcionPorTexto(selImpacto, config.impacto);

              if (window.CKEDITOR && window.CKEDITOR.instances) {
                for (var idx in window.CKEDITOR.instances) {
                  try {
                    var inst = window.CKEDITOR.instances[idx];
                    if (inst.getData().indexOf('[COBERTURA]') === -1 && inst.getData().indexOf('[REINTENTOS]') === -1) { inst.setData(config.desc); }
                  } catch(e){}
                }
              }

              doc.querySelectorAll('iframe').forEach(ifr => {
                try {
                  var cdoc = ifr.contentDocument;
                  if (cdoc && (cdoc.title.includes('DSCTIC') || ifr.title.includes('DSCTIC'))) {
                    if (cdoc.body.innerHTML.indexOf('[COBERTURA]') === -1 && cdoc.body.innerHTML.indexOf('[REINTENTOS]') === -1) {
                      cdoc.body.innerHTML = config.desc; cdoc.body.dispatchEvent(new Event('input', {bubbles:true}));
                    }
                  }
                } catch(e){}
              });
            });
            await sleep(500);
          }

          updateStatus("Guardando Detalles...");
          let btnGuardarDetalles = await waitForId('ENRTIC');
          if(btnGuardarDetalles) { btnGuardarDetalles.click(); await sleep(3500); }

          updateStatus("Cargando Relaciones...");
          if (icfRed !== "") {
            let btnRelaciones = await waitForId('menu_hlnk_I7_L1');
            if(btnRelaciones) { btnRelaciones.click(); await sleep(1000); }

            let btnMaestroHijo = await waitForId('menu_lbtn_I7_1_L2');
            if(btnMaestroHijo) { btnMaestroHijo.click(); await sleep(2000); }

            let inputPadreExistente = buscarEnFrames('MASTERTICNUMBER');
            if (inputPadreExistente && inputPadreExistente.value && inputPadreExistente.value.trim() !== "") {
              updateStatus("Padre ya asociado...");
              await sleep(1500);
            } else {
              updateStatus("Asociando Padre...");
              let btnAgregarPadre = await waitForId('ATTACH_PERE');
              if(btnAgregarPadre) { btnAgregarPadre.click(); await sleep(1500); }

              let btnSi = await waitForId('btnDYes');
              if(btnSi) { btnSi.click(); await sleep(2500); }

              let inputTicNum = await waitForId('ticNum');
              if(inputTicNum) {
                inputTicNum.value = icfRed;
                inputTicNum.dispatchEvent(new Event('input', {bubbles:true})); inputTicNum.dispatchEvent(new Event('change', {bubbles:true}));
                await sleep(500);
              }

              let btnBuscarPadre = await waitForId('SEARCHTICMASTER');
              if(btnBuscarPadre) { btnBuscarPadre.click(); await sleep(3000); }
            }
          }

          updateStatus("Abriendo Intervenciones...");
          let btnInterv = await waitForId('menu_lbtn_I5_L1');
          if(btnInterv) { btnInterv.click(); await sleep(2500); }

          updateStatus("Activando...");
          let btnActivar = await waitForId('TRANSFERT_X');
          if(btnActivar) { btnActivar.click(); await sleep(2000); }

          updateStatus("Escribiendo Grupo...");
          let inputGrupo = await waitForId('TEXT_IDENTIFIANTEDS');
          if(inputGrupo) {
            inputGrupo.value = "515007";
            inputGrupo.dispatchEvent(new Event('input', {bubbles:true})); inputGrupo.dispatchEvent(new Event('change', {bubbles:true}));
          }

          for(let intentos = 0; intentos < 15; intentos++) {
            updateStatus("Buscando Grupo...");
            let btnBuscar = await waitForId('RECH_EDS');
            if(btnBuscar) btnBuscar.click();

            let encontrado = false;
            function checkGrupo(d) {
              if (encontrado || !d) return;
              if (d.body && d.body.textContent.includes("515007")) encontrado = true;
              d.querySelectorAll('iframe, frame').forEach(f => { try { checkGrupo(f.contentDocument); } catch(e){} });
            }
            for(let w = 0; w < 6; w++) { await sleep(500); try{checkGrupo(window.top.document);}catch(e){} if(encontrado) break; }
            if(encontrado) break;
          }

          updateStatus("Extrayendo ID...");
          await sleep(1000);
          let brujulaID = null;

          let searchDocs = [];
          try { searchDocs.push(window.top.document); } catch(e) { searchDocs.push(document); }
          searchDocs[0].querySelectorAll('iframe, frame').forEach(f => { try { if(f.contentDocument) searchDocs.push(f.contentDocument); } catch(e){} });

          for(let d of searchDocs) {
            let header = d.getElementById('divHeader');
            if(header) {
              let spans = header.querySelectorAll('span.margintop3');
              for(let s of spans) {
                let txt = s.textContent.trim();
                if(/^[0-9]{4}[A-Z0-9]{6}$/i.test(txt)) { padreID = txt.toUpperCase(); break; }
              }
            }
            if(padreID) break;

            if (d.body) {
              let match = d.body.textContent.match(/\b[0-9]{4}[A-Z0-9]{6}\b/ig);
              if (match) {
                for(let m of match) {
                  if(m.toUpperCase() !== icfRed.toUpperCase()) { brujulaID = m.toUpperCase(); break; }
                }
              }
            }
          }

          const evDone = new CustomEvent('OceanBrujulaFinished', { detail: brujulaID || 'ERROR' });
          try { window.top.document.dispatchEvent(evDone); } catch(e) { document.dispatchEvent(evDone); }
        } catch(e) {
          console.error("[Brújula] Error en flujo completo:", e);
          const evErr = new CustomEvent('OceanBrujulaFinished', { detail: 'error' });
          try { window.top.document.dispatchEvent(evErr); } catch(e) { document.dispatchEvent(evErr); }
        }
      })();
    `;
    inyectarEnFrames(window.top || window, scriptCode);
  }

  // =========================================================
  // 8. ROBOT PADRE (MODAL Y FLUJO CON RESCATE DE COMENTARIOS)
  // =========================================================

  function mostrarModalRellenar() {
    const data = GM_getValue(STORAGE_KEY, null);
    if (!data) { setTempBtnText('ocean-btn-rellenar', '❌ Extrae datos 1º', 3000); return; }

    const checklist = GM_getValue(STORAGE_KEY_CHK, '');
    if (!checklist || checklist.trim() === '') { setTempBtnText('ocean-btn-rellenar', '❌ Sin Checklist', 3000); return; }

    const descripcionDefault = buildDescripcion(data);

    const oldModal = document.getElementById('ocean-custom-modal-overlay');
    if (oldModal) oldModal.remove();

    const modalHtml = `
    <div id="ocean-custom-modal-overlay" style="position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.4); z-index:99999999; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); opacity:0; transition:opacity 0.3s ease; font-family:'Inter', system-ui, sans-serif;">
        <div id="ocean-custom-modal-content" style="background:rgba(24, 24, 27, 0.85); padding:18px; border-radius:12px; box-shadow:0 15px 35px -10px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08); width:300px; text-align:left; border-left:3px solid #ff2a2a; transform:scale(0.9) translateY(15px); transition:all 0.4s cubic-bezier(0.25, 1, 0.5, 1); color:#ffffff; backdrop-filter:blur(20px);">
            <div style="margin-bottom:16px; display:flex; align-items:center; gap:8px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff2a2a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="filter:drop-shadow(0 0 4px rgba(255,42,42,0.4)); flex-shrink:0;">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                <h3 style="margin:0; font-size:13px; font-weight:600; color:#fff; letter-spacing:0.3px;">RELLENAR ICF DE RED</h3>
            </div>
            <div style="margin-bottom:12px; text-align:left;">
                <label style="display:block; margin-bottom:4px; color:#c9d1d9; font-size:11px;">Nodo/Celda:</label>
                <input type="text" id="ocean-mod-nodo" class="modal-input-ocean" placeholder="Ej: ANDX1234M1A" autocomplete="off" style="text-transform:uppercase;">
            </div>
            <div style="margin-bottom:12px; text-align:left;">
                <label style="display:block; margin-bottom:4px; color:#c9d1d9; font-size:11px;">Afectación:</label>
                <select id="ocean-mod-afectacion" class="modal-input-ocean">
                    <option style="background:#121214;" value="OPTIMIZACION">OPTIMIZACIÓN</option>
                    <option style="background:#121214;" value="MC">MC</option>
                    <option style="background:#121214;" value="DOWN">DOWN</option>
                    <option style="background:#121214;" value="HALTED">HALTED</option>
                    <option style="background:#121214;" value="ALARMAS">ALARMAS</option>
                    <option style="background:#121214;" value="PCAR">PCAR</option>
                    <option style="background:#121214;" value="RSSI">RSSI</option>
                    <option style="display:block; background:#121214;" value="CONGESTION">CONGESTIÓN</option>
                    <option style="background:#121214;" value="OT">OT</option>
                    <option style="background:#121214;" value="MASTERLIST">MASTERLIST</option>
                </select>
            </div>
            <div id="ocean-mod-dinamico" style="margin-bottom:12px; display:flex; justify-content:space-between; gap:8px;"></div>
            <div id="ocean-mod-icf-container" style="display:none; margin-bottom:12px;">
                <label style="display:flex; align-items:center; cursor:pointer; font-size:11px; color:#c9d1d9;">
                    <input type="checkbox" id="ocean-mod-icf-check" style="margin-right:6px; accent-color:#ff2a2a; width:14px; height:14px; cursor:pointer;">
                    Añadir Comentario ICF (VDF-NIC)
                </label>
            </div>
            <div style="margin-bottom:20px; text-align:left;">
                <label style="display:block; margin-bottom:4px; color:#c9d1d9; font-size:11px;">Descripción:</label>
                <textarea id="ocean-mod-desc" class="modal-input-ocean" style="resize:vertical; min-height:55px;"></textarea>
            </div>
            <div style="display:flex; justify-content:flex-end; gap:8px;">
                <button id="ocean-mod-cancel" class="modal-btn-cancel">CANCELAR</button>
                <button id="ocean-mod-ok" class="modal-btn-submit">INICIAR FLUJO</button>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const overlay = document.getElementById('ocean-custom-modal-overlay');
    const modalContent = document.getElementById('ocean-custom-modal-content');
    const nodoInp = document.getElementById('ocean-mod-nodo');
    const afecSel = document.getElementById('ocean-mod-afectacion');
    const dinDiv = document.getElementById('ocean-mod-dinamico');
    const descInp = document.getElementById('ocean-mod-desc');

    descInp.value = descripcionDefault;

    void overlay.offsetWidth;
    overlay.style.opacity = '1';
    modalContent.style.transform = 'scale(1) translateY(0)';

    const cerrarModal = () => {
      overlay.style.pointerEvents = 'none';
      overlay.style.opacity = '0';
      modalContent.style.transform = 'scale(0.95) translateY(10px)';
      setTimeout(() => overlay.remove(), 300);
    };

    function updateIcfVisibility() {
      let val = afecSel.value;
      let subVal = document.getElementById('ocean-mod-sub') ? document.getElementById('ocean-mod-sub').value : '';

      if (['DOWN', 'MC', 'HALTED', 'ALARMAS'].includes(val) || (val === 'PCAR' && subVal === 'PLR')) {
        document.getElementById('ocean-mod-icf-container').style.display = 'block';
        document.getElementById('ocean-mod-icf-check').checked = true;
      } else {
        document.getElementById('ocean-mod-icf-container').style.display = 'none';
        document.getElementById('ocean-mod-icf-check').checked = false;
      }
    }

    afecSel.addEventListener('change', (e) => {
      let val = e.target.value;
      let html = '';

      if (val === 'PCAR') html = `<select id="ocean-mod-sub" class="modal-input-ocean" style="width:48%;"><option style="background:#121214;" value="PLR">PLR</option><option style="background:#121214;" value="DCR">DCR</option><option style="background:#121214;" value="CSSR">CSSR</option></select><input type="number" id="ocean-mod-val" class="modal-input-ocean" style="width:48%;" placeholder="% Afect.">`;
      else if (val === 'RSSI') html = `<select id="ocean-mod-sub" class="modal-input-ocean" style="width:48%;"><option style="background:#121214;" value="2G">2G</option><option style="background:#121214;" value="3G">3G</option><option style="background:#121214;" value="4G">4G</option><option style="background:#121214;" value="5G">5G</option></select><input type="number" id="ocean-mod-val" class="modal-input-ocean" style="width:48%;" placeholder="Valor (ej: 70)">`;
      else if (val === 'CONGESTION') html = `<select id="ocean-mod-sub" class="modal-input-ocean" style="width:48%;"><option style="background:#121214;" value="PRB">PRB</option><option style="background:#121214;" value="PDCCH">PDCCH</option><option style="background:#121214;" value="USERS">USERS</option></select><input type="number" id="ocean-mod-val" class="modal-input-ocean" style="width:48%;" placeholder="% Afect.">`;

      dinDiv.innerHTML = html;
      let sub = document.getElementById('ocean-mod-sub');
      if (sub) sub.addEventListener('change', updateIcfVisibility);
      updateIcfVisibility();
    });

    updateIcfVisibility();

    document.getElementById('ocean-mod-cancel').addEventListener('click', cerrarModal);

    document.getElementById('ocean-mod-ok').addEventListener('click', () => {
      let cell = nodoInp.value.trim().toUpperCase();
      if (cell.length <= 3) {
        nodoInp.style.borderColor = '#ff2a2a';
        nodoInp.style.boxShadow = '0 0 0 2px rgba(255,42,42,0.2)';
        return;
      }
      let nodo = cell.substring(0, cell.length - 3);
      let afec = afecSel.value;
      let addIcf = document.getElementById('ocean-mod-icf-check').checked;

      GM_setValue('ocean_brujula_nodo', nodo);
      GM_setValue('ocean_brujula_afec', afec);

      let tags = "";
      let fechaPrevista = "";

      if (afec === 'DOWN') { fechaPrevista = calcularFechaPrevision(4, 0); }
      else if (['MC', 'HALTED', 'ALARMAS', 'PCAR', 'CONGESTION'].includes(afec)) { fechaPrevista = calcularFechaPrevision(10, 0); }
      else if (afec === 'RSSI') { fechaPrevista = calcularFechaPrevision(0, 3); }

      if (afec === 'OPTIMIZACION') tags = "CausaICF_Optimizacion";
      else if (afec === 'MC') tags = "CausaICF_MC";
      else if (afec === 'DOWN') tags = "CausaICF_DOWN";
      else if (afec === 'HALTED') tags = "CausaICF_HALTED";
      else if (afec === 'ALARMAS') tags = "CausaICF_ALARMAS";
      else if (afec === 'OT') tags = "CausaICF_OT<br>SubCausaICF_FueraVentana";
      else if (afec === 'MASTERLIST') tags = "CausaICF_ML";
      else {
        let sub = document.getElementById('ocean-mod-sub').value;
        let val = document.getElementById('ocean-mod-val').value;
        if (!val) {
          const valInp = document.getElementById('ocean-mod-val');
          valInp.style.borderColor = '#ff2a2a';
          valInp.style.boxShadow = '0 0 0 2px rgba(255,42,42,0.2)';
          return;
        }
        if (afec === 'PCAR') tags = `CausaICF_PCAR<br>SubCausaICF_${sub}_${val}%`;
        else if (afec === 'RSSI') tags = `CausaICF_RSSI_OSP<br>SubCausaICF_RSSI${sub}_-${val.replace('-','')}`;
        else if (afec === 'CONGESTION') tags = `CausaICF_CONG<br>SubCausaICF_${sub}_${val}%`;
      }

      let edsTxt = `[NODO_CLIENTE]#[${nodo}]<br>[CELDA]#[${cell}]<br>${tags}`;
      let descripcionElegida = descInp.value.trim();
      if (!descripcionElegida) descripcionElegida = descripcionDefault;

      cerrarModal();

      const prioridad = PRIORIDAD_POR_SEGMENTO[data.segmento] || '4';
      const sintoma = SINTOMA_POR_SEGMENTO[data.segmento] || { val: '61700', text: 'RESIDENCIAL' };
      const textoChecklist = checklist.replace(/\n/g, '<br>');

      iniciarFlujoPadreCompleto(descripcionElegida, prioridad, sintoma, textoChecklist, edsTxt, fechaPrevista, afec, addIcf);
    });
  }

  function iniciarFlujoPadreCompleto(descripcion, prioridad, sintoma, textoChecklist, edsTxt, fechaPrevista, afec, addIcf) {
    const btnId = 'ocean-btn-rellenar';
    const btn = document.getElementById(btnId);
    if (btn) { btn.classList.add('active'); btn.classList.remove('done'); btn.innerHTML = '<span class="ocean-spinner"></span>Iniciando...'; }

    document.addEventListener('OceanPadreFinished', function handleDone(e) {
      document.removeEventListener('OceanPadreFinished', handleDone);
      if(e.detail && e.detail !== 'ERROR') {
        GM_setValue('ocean_padre_id', e.detail);
        setTempBtnText(btnId, `✓ Completado`, 3000);
      } else {
        setTempBtnText(btnId, '❌ Fallo ID', 3000);
      }
    });

    const scriptCode = `
      (async function() {
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        const updateStatus = (msg) => {
          try { window.top.document.dispatchEvent(new CustomEvent('ocean-status', { detail: msg })); }
          catch(e) { document.dispatchEvent(new CustomEvent('ocean-status', { detail: msg })); }
        };

        function buscarEnFrames(id) {
          function buscar(d) {
            if(!d) return null;
            const el = d.getElementById(id); if (el) return el;
            let found = null;
            d.querySelectorAll('iframe, frame').forEach(f => {
              if (found) return;
              try { found = buscar(f.contentDocument); } catch (e) {}
            });
            return found;
          }
          try { return buscar(window.top.document); } catch(e) { return buscar(document); }
        }

        function buscarElementoPorTextoOId(ids, textoBuscado) {
          function buscar(d) {
            if(!d) return null;
            for(let id of ids) {
              let el = d.getElementById(id);
              if (el && (el.offsetWidth > 0 || el.offsetHeight > 0)) return el;
            }
            if(textoBuscado) {
              let links = d.querySelectorAll('a, span');
              for(let l of links) {
                if(l.textContent && l.textContent.trim().toLowerCase() === textoBuscado.toLowerCase()) {
                  return l;
                }
              }
            }
            let found = null;
            d.querySelectorAll('iframe, frame').forEach(f => {
              if (found) return;
              try { found = buscar(f.contentDocument); } catch (e) {}
            });
            return found;
          }
          try { return buscar(window.top.document); } catch(e) { return buscar(document); }
        }

        async function waitForId(id, retries = 50) {
          for(let i=0; i<retries; i++) {
            let el = buscarEnFrames(id); if(el && el.offsetWidth > 0) return el; await sleep(150);
          } return null;
        }

        function seleccionarOpcionPorTexto(selectElement, textoBuscado) {
          if (!selectElement) return false;
          let target = textoBuscado.toString().toLowerCase().trim();
          for (let i = 0; i < selectElement.options.length; i++) {
            if (selectElement.options[i].text.toLowerCase().includes(target) || selectElement.options[i].value.toLowerCase() === target) {
              if (selectElement.value !== selectElement.options[i].value) {
                selectElement.value = selectElement.options[i].value;
                selectElement.dispatchEvent(new Event('change', {bubbles:true}));
              }
              return true;
            }
          } return false;
        }

        function checkCommentExists(searchText) {
          let found = false;
          let target = searchText.replace(/<[^>]+>/g, '').toLowerCase().trim();
          if (target.length > 40) target = target.substring(0, 40);

          function searchDoc(d) {
            if(found || !d) return;
            let divs = d.querySelectorAll('div[id^="divCmt"]');
            for(let i=0; i<divs.length; i++) {
              let txt = (divs[i].innerText || divs[i].textContent || '').toLowerCase();
              if (txt.includes(target)) {
                found = true;
                return;
              }
            }
            d.querySelectorAll('iframe, frame').forEach(f => { try { searchDoc(f.contentDocument); } catch(e){} });
          }
          try { searchDoc(window.top.document); } catch(e) { searchDoc(document); }
          return found;
        }

        async function procesarComentarioAsync(t, tpTexto, msgStatus, opTexto) {
          const btnAdd = buscarEnFrames("btnAddComment") || buscarElementoPorTextoOId(['btnAddComment'], 'añadir comentario');
          if (btnAdd) btnAdd.click(); else return;

          for(let i=0; i<40; i++) {
            updateStatus(msgStatus);
            await sleep(250);

            // 1. Intentar mediante la instancia global de CKEditor
            let ckInstance = null;
            if (window.CKEDITOR && window.CKEDITOR.instances) {
              for (let k in window.CKEDITOR.instances) {
                if (window.CKEDITOR.instances[k] && window.CKEDITOR.instances[k].status === 'ready') {
                  ckInstance = window.CKEDITOR.instances[k];
                  break;
                }
              }
            }

            if (ckInstance) {
              if (tpTexto) { const s = buscarEnFrames('ddlCommentTypes'); if (s) seleccionarOpcionPorTexto(s, tpTexto); }
              if (opTexto) { const o = buscarEnFrames('ddlOperationTypes'); if (o) seleccionarOpcionPorTexto(o, opTexto); }
              ckInstance.setData(t);
              await sleep(400);
              const btnSave = buscarEnFrames("btnSaveCmt") || buscarElementoPorTextoOId(['btnSaveCmt'], 'guardar');
              if (btnSave) btnSave.click();
              await sleep(2000);
              return;
            }

            // 2. Intentar buscando el elemento .cke_editable en todos los frames
            let ed = null;
            function findEditable(d) {
              if (ed || !d) return;
              let el = d.querySelector('.cke_editable') || d.querySelector('body.cke_editable');
              if (el) { ed = el; return; }
              d.querySelectorAll('iframe, frame').forEach(f => {
                try { findEditable(f.contentDocument); } catch(e){}
              });
            }
            try { findEditable(window.top.document); } catch(e) { findEditable(document); }

            if (ed) {
              if (tpTexto) { const s = buscarEnFrames('ddlCommentTypes'); if (s) seleccionarOpcionPorTexto(s, tpTexto); }
              if (opTexto) { const o = buscarEnFrames('ddlOperationTypes'); if (o) seleccionarOpcionPorTexto(o, opTexto); }

              ed.focus();
              ed.innerHTML = t;
              ed.dispatchEvent(new Event('input', { bubbles: true }));
              ed.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));
              await sleep(300);
              ed.dispatchEvent(new Event('blur', { bubbles: true }));

              const btnSave = buscarEnFrames("btnSaveCmt") || buscarElementoPorTextoOId(['btnSaveCmt'], 'guardar');
              if (btnSave) btnSave.click();
              await sleep(2000);
              return;
            }
          }
        }

        try {
          const dText = ${JSON.stringify(descripcion)};
          const chk = ${JSON.stringify(textoChecklist)};
          const eds = ${JSON.stringify(edsTxt)};
          const fechaPrevistaStr = ${JSON.stringify(fechaPrevista)};
          const afecStr = ${JSON.stringify(afec)};
          const addIcfFlag = ${JSON.stringify(addIcf)};

          for(let i=0; i<5; i++) {
            updateStatus("Rellenando Detalles...");
            let docs = [];
            try { docs.push(window.top.document); } catch(e) { docs.push(document); }
            docs[0].querySelectorAll('iframe, frame').forEach(f => { try { if(f.contentDocument) docs.push(f.contentDocument); } catch(e){} });

            docs.forEach(doc => {
              if (fechaPrevistaStr) {
                var dateInput = doc.getElementById('CONFIRMEDPLANNEDRESTORATIONDATEDate');
                if (dateInput && dateInput.value !== fechaPrevistaStr) {
                  dateInput.value = fechaPrevistaStr;
                  dateInput.dispatchEvent(new Event('input', {bubbles:true})); dateInput.dispatchEvent(new Event('change', {bubbles:true}));

                  var hSelect = doc.getElementById('CONFIRMEDPLANNEDRESTORATIONDATEDropDownHours');
                  if(hSelect) { hSelect.removeAttribute('disabled'); hSelect.value = "12"; hSelect.dispatchEvent(new Event('change', {bubbles:true})); }
                  var mSelect = doc.getElementById('CONFIRMEDPLANNEDRESTORATIONDATEDropDownMins');
                  if(mSelect) { mSelect.removeAttribute('disabled'); mSelect.value = "0"; mSelect.dispatchEvent(new Event('change', {bubbles:true})); }
                }
              }

              var famSel = doc.getElementById('IDTFAMSYM');
              if(famSel && famSel.value !== "617") { famSel.value = "617"; famSel.dispatchEvent(new Event('change', {bubbles:true})); }
              var symSel = doc.getElementById('IDTSYM');
              if(symSel && famSel && famSel.value === "617") seleccionarOpcionPorTexto(symSel, ${JSON.stringify(sintoma.val)});

              var selPrioridad = doc.getElementById('STRIDTPRI');
              if(selPrioridad && selPrioridad.value !== ${JSON.stringify(prioridad)}) { selPrioridad.value = ${JSON.stringify(prioridad)}; selPrioridad.dispatchEvent(new Event('change', {bubbles:true})); }

              var selOrigen = doc.getElementById('IDTORIAPP');
              if(selOrigen && selOrigen.value !== "3") { selOrigen.value = "3"; selOrigen.dispatchEvent(new Event('change', {bubbles:true})); }

              var selImpacto = doc.getElementById('IDTNTR');
              if(selImpacto && selImpacto.value !== "E") { selImpacto.value = "E"; selImpacto.dispatchEvent(new Event('change', {bubbles:true})); }

              var startH = doc.getElementById('STARTDATETICDropDownHours');
              if(startH && startH.value !== "0") { startH.value = "0"; startH.dispatchEvent(new Event('change', {bubbles:true})); }
              var startM = doc.getElementById('STARTDATETICDropDownMins');
              if(startM && startM.value !== "0") { startM.value = "0"; startM.dispatchEvent(new Event('change', {bubbles:true})); }

              if (window.CKEDITOR && window.CKEDITOR.instances) {
                for (var idx in window.CKEDITOR.instances) { try { var inst = window.CKEDITOR.instances[idx]; if (inst.getData().indexOf('[IATEL]') === -1) inst.setData(dText); } catch(e){} }
              }
              doc.querySelectorAll('iframe').forEach(ifr => {
                try {
                  var cdoc = ifr.contentDocument;
                  if (cdoc && (cdoc.title.includes('DSCTIC') || ifr.title.includes('DSCTIC'))) {
                    if (cdoc.body.innerHTML.indexOf('[IATEL]') === -1) { cdoc.body.innerHTML = dText; cdoc.body.dispatchEvent(new Event('input', {bubbles:true})); }
                  }
                } catch(e){}
              });
              var dscArea = doc.getElementById('DSCTIC') || doc.querySelector('textarea[name*="DscTic"]');
              if (dscArea && dscArea.value.indexOf('[IATEL]') === -1) { dscArea.value = dText; dscArea.dispatchEvent(new Event('input', {bubbles:true})); }
            });
            await sleep(500);
          }

          updateStatus("Guardando Detalles...");
          let btnGuardarDetalles = await waitForId('ENRTIC');
          if(btnGuardarDetalles) { btnGuardarDetalles.click(); await sleep(3500); }

          updateStatus("Abriendo Comentarios...");
          let btnMenuComentarios = await waitForId('menu_lbtn_I2_L1') || buscarElementoPorTextoOId(['menu_lbtn_I2_L1'], 'comentarios');
          if(btnMenuComentarios) {
            btnMenuComentarios.click();
            await sleep(1500);

            let chkExiste = checkCommentExists(chk);
            let edsExiste = checkCommentExists(eds);
            let estrExiste = checkCommentExists("[ESTRUCTURAL_OSP]");
            let icfExiste = checkCommentExists("VDF-NIC");

            if (chk && !chkExiste) await procesarComentarioAsync(chk, "Interna", "Añadiendo checklist...");
            else if (chkExiste) { updateStatus("Checklist omitido..."); await sleep(400); }

            if (eds && !edsExiste) await procesarComentarioAsync(eds, "EDS", "Añadiendo etiquetas...");
            else if (edsExiste) { updateStatus("Etiquetas omitidas..."); await sleep(400); }

            if(afecStr === 'RSSI') {
              if (!estrExiste) await procesarComentarioAsync("[ESTRUCTURAL_OSP]", "Cliente", "Añadiendo coment. estruc...");
              else { updateStatus("Estructural omitido..."); await sleep(400); }
            }

            if (addIcfFlag) {
              if (!icfExiste) await procesarComentarioAsync("ICF", "Interna", "Añadiendo coment. ICF...", "VDF-NIC");
              else { updateStatus("ICF omitido..."); await sleep(400); }
            }
          }

          updateStatus("Extrayendo ID...");
          await sleep(1000);
          let padreID = null;

          let searchDocs = [];
          try { searchDocs.push(window.top.document); } catch(e) { searchDocs.push(document); }
          searchDocs[0].querySelectorAll('iframe, frame').forEach(f => { try { if(f.contentDocument) searchDocs.push(f.contentDocument); } catch(e){} });

          for(let d of searchDocs) {
            let header = d.getElementById('divHeader');
            if(header) {
              let spans = header.querySelectorAll('span.margintop3');
              for(let s of spans) {
                let txt = s.textContent.trim();
                if(/^[0-9]{4}[A-Z0-9]{6}$/i.test(txt)) { padreID = txt.toUpperCase(); break; }
              }
            }
            if(padreID) break;

            if (d.body) {
              let match = d.body.textContent.match(/\b[0-9]{4}[A-Z0-9]{6}\b/i);
              if (match) { padreID = match[0].toUpperCase(); break; }
            }
          }

          const evDone = new CustomEvent('OceanPadreFinished', { detail: padreID || 'ERROR' });
          try { window.top.document.dispatchEvent(evDone); } catch(e) { document.dispatchEvent(evDone); }

        } catch(e) {
          console.error("[Ocean] Error en flujo Padre:", e);
          const evErr = new CustomEvent('OceanPadreFinished', { detail: 'ERROR' });
          try { window.top.document.dispatchEvent(evErr); } catch(e) { document.dispatchEvent(evErr); }
        }
      })();
    `;
    inyectarEnFrames(window.top || window, scriptCode);
  }

  // =========================================================
  // 9. MONTAJE DE LA INTERFAZ (GLASSMORPHISM)
  // =========================================================

  function buildMenu() {
    try {
      if (window.top !== window.self) return;
      if (document.getElementById("helper-menu-container")) return;
    } catch (e) { return; }

    const s = document.createElement('style');
    s.id = 'estilo-oceane-pro';
    s.innerHTML = `
      :root {
        --op-bg-glass: rgba(18, 18, 20, 0.75);
        --op-bg-hover: rgba(255, 255, 255, 0.08);
        --op-border-subtle: rgba(255, 255, 255, 0.12);
        --op-accent: #ff2a2a;
        --op-accent-glow: rgba(255, 42, 42, 0.25);
        --op-accent-bg: rgba(255, 42, 42, 0.1);
        --op-text-primary: #ffffff;
        --op-text-secondary: #a1a1aa;
        --op-font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
      }

      @keyframes oceanSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes fadeInMenu {
        0% { opacity: 0; transform: translateY(-10px) scale(0.98); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }

      .ocean-spinner {
        display: inline-block;
        width: 12px;
        height: 12px;
        border: 1.5px solid rgba(255, 42, 42, 0.25);
        border-top-color: var(--op-accent);
        border-radius: 50%;
        animation: oceanSpin 0.7s linear infinite;
        margin-right: 6px;
      }

      #helper-menu-container {
        position: fixed;
        top: 16px;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: max-content;
        display: flex;
        align-items: center;
        padding: 4px 6px;
        gap: 4px;
        font-family: var(--op-font-sans);
        color: var(--op-text-primary);
        z-index: 9999999;
        border-radius: 12px;
        background: var(--op-bg-glass);
        backdrop-filter: blur(24px) saturate(180%);
        -webkit-backdrop-filter: blur(24px) saturate(180%);
        border: 1px solid var(--op-border-subtle);
        box-shadow:
          0 10px 30px -10px rgba(0, 0, 0, 0.5),
          0 4px 12px rgba(0, 0, 0, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.15);
        user-select: none;
        opacity: 0;
        animation: fadeInMenu 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
      }

      .btn-oceane {
        background: transparent;
        color: var(--op-text-secondary);
        border: 1px solid transparent;
        padding: 0 12px;
        border-radius: 8px;
        cursor: pointer;
        font-family: inherit;
        font-weight: 500;
        font-size: 11px;
        letter-spacing: 0.2px;
        transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1);
        height: 26px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        box-sizing: border-box;
        min-width: 110px;
      }

      .btn-oceane:hover:not(:disabled) { color: var(--op-text-primary); background-color: var(--op-bg-hover); }
      .btn-oceane:active:not(:disabled) { transform: scale(0.96); }

      .btn-oceane.active, .btn-oceane.done {
        color: var(--op-accent) !important;
        background-color: var(--op-accent-bg) !important;
        border: 1px solid rgba(255, 42, 42, 0.3) !important;
        box-shadow: 0 4px 12px var(--op-accent-glow), inset 0 0 0 1px rgba(255, 42, 42, 0.05);
      }

      .modal-input-ocean { width: 100%; box-sizing: border-box; background: rgba(13, 17, 23, 0.6); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 8px; border-radius: 5px; font-size: 11px; font-family: inherit; outline: none; transition: all 0.2s; }
      .modal-input-ocean:focus { border-color: var(--op-accent); box-shadow: 0 0 0 2px var(--op-accent-bg); }
      .modal-btn-cancel { background: transparent; color: var(--op-text-secondary); border: 1px solid transparent; padding: 0 10px; border-radius: 5px; cursor: pointer; font-family: inherit; font-weight: 600; font-size: 10px; height: 24px; transition: all 0.2s ease; outline: none; letter-spacing: 0.5px; }
      .modal-btn-cancel:hover { background: var(--op-bg-hover); color: var(--op-text-primary); border-color: var(--op-border-subtle); }
      .modal-btn-cancel:active { transform: scale(0.96); }
      .modal-btn-submit { background: transparent; color: var(--op-accent); border: 1px solid var(--op-border-subtle); border-left: 2px solid var(--op-accent); background-color: var(--op-accent-bg); padding: 0 10px; border-radius: 5px; cursor: pointer; font-family: inherit; font-weight: 600; font-size: 10px; height: 24px; transition: all 0.2s ease; outline: none; letter-spacing: 0.5px; }
      .modal-btn-submit:hover { color: #fff; background-color: var(--op-accent); border-color: var(--op-accent); box-shadow: 0 0 10px var(--op-accent-glow); }
      .modal-btn-submit:active { transform: scale(0.96); }
    `;
    document.head.appendChild(s);

    const menu = document.createElement("div");
    menu.id = "helper-menu-container";

    const btnCopiar = document.createElement("button"); btnCopiar.id = "ocean-btn-copiar"; btnCopiar.className = "btn-oceane"; btnCopiar.innerHTML = "Extraer datos"; btnCopiar.onclick = copiarDatos;
    const btnRellenar = document.createElement("button"); btnRellenar.id = "ocean-btn-rellenar"; btnRellenar.className = "btn-oceane"; btnRellenar.innerHTML = "Rellenar Padre"; btnRellenar.onclick = mostrarModalRellenar;
    const btnAsociar = document.createElement("button"); btnAsociar.id = "ocean-btn-asociar"; btnAsociar.className = "btn-oceane"; btnAsociar.innerHTML = "Asociar a ICF de red"; btnAsociar.onclick = asociarICF;
    const btnBrujula = document.createElement("button"); btnBrujula.id = "ocean-btn-brujula"; btnBrujula.className = "btn-oceane"; btnBrujula.innerHTML = "Rellenar Brújula"; btnBrujula.onclick = ejecutarBrujula;
    const btnExcel = document.createElement("button"); btnExcel.id = "ocean-btn-excel"; btnExcel.className = "btn-oceane"; btnExcel.innerHTML = "Excel Llegadas"; btnExcel.onclick = recopilarDatosExcel;

    menu.appendChild(btnCopiar);
    menu.appendChild(btnRellenar);
    menu.appendChild(btnAsociar);
    menu.appendChild(btnBrujula);
    menu.appendChild(btnExcel);

    document.body.appendChild(menu);
  }

  try {
    if (document.readyState === 'complete' || document.readyState === 'interactive') buildMenu();
    else document.addEventListener('DOMContentLoaded', buildMenu);
  } catch (e) {}

  setInterval(() => {
    try { buildMenu(); } catch (e) {}
  }, 1000);

})();