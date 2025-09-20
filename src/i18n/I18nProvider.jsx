import React, { useEffect, useMemo, useState } from "react";
import { TRANSLATIONS, LANGS } from "./translations.js";
import { I18nCtx } from "./I18nContext.js";

export default function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "id");

  useEffect(() => {
    // baca ?lang=xx sekali saat awal
    const q = new URLSearchParams(location.search).get("lang");
    if (q && LANGS[q]) setLang(q);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = LANGS[lang]?.dir || "ltr";
  }, [lang]);

  const t = useMemo(() => {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.id;
    const fn = (path) => path.split(".").reduce((o,k)=> (o && o[k]!==undefined ? o[k] : null), dict);
    return fn;
  }, [lang]);

  return <I18nCtx.Provider value={{ lang, setLang, t, LANGS }}>{children}</I18nCtx.Provider>;
}
