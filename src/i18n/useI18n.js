import { useContext } from "react";
import React from "react";
import { I18nCtx } from "./I18nContext.js";
    
function highlightBrand(text) {
  if (!text || typeof text !== "string") return text;
  const parts = text.split(/(IronAsia|1ronAsia)/g);
  return parts.map((part, idx) => {
    if (part === "IronAsia" || part === "1ronAsia") {
      return React.createElement(
        "span",
        { key: idx, className: "brand-wordmark" },
        "1ronAsia"
      );
    }
    return part;
  });
}

export const useI18n = () => {
  const ctx = useContext(I18nCtx);

  const t = (key) => ctx.t(key);

  const tn = (key) => {
    const raw = ctx.t(key);
    if (Array.isArray(raw)) return raw;    
    if (typeof raw !== "string") return raw;   
    return highlightBrand(raw);
  };

  return { ...ctx, t, tn };
};
