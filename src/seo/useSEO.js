import { useEffect } from "react";
export function useSEO({ title, description, url = "https://ironasia.id/", image = "https://ironasia.id/og-cover.png" }) {
  useEffect(() => {
    document.title = title || document.title;
    const ensure = (sel, create) => { let el = document.querySelector(sel); if (!el) { el = create(); document.head.appendChild(el); } return el; };
    const set = (el, attrs) => Object.entries(attrs).forEach(([k,v]) => el.setAttribute(k,v));

    set(ensure("link[rel=canonical]", () => document.createElement("link")), { rel:"canonical", href:url });
    set(ensure("meta[name=description]",()=>document.createElement("meta")), { name:"description", content:description });

    const og = (p,c) => set(ensure(`meta[property='${p}']`,()=>document.createElement("meta")), { property:p, content:c });
    const tw = (n,c) => set(ensure(`meta[name='${n}']`,()=>document.createElement("meta")), { name:n, content:c });

    og("og:title", title); og("og:description", description); og("og:type","website"); og("og:url", url); og("og:image", image);
    tw("twitter:card","summary_large_image"); tw("twitter:title", title); tw("twitter:description", description); tw("twitter:image", image);

    // hreflang alternates
    const alts = [["id", url+"?lang=id"],["en",url+"?lang=en"],["zh",url+"?lang=zh"]];
    document.querySelectorAll("link[rel='alternate'][hreflang]").forEach(n=>n.remove());
    alts.forEach(([hl,href]) => { const l=document.createElement("link"); l.rel="alternate"; l.hreflang=hl; l.href=href; document.head.appendChild(l); });
  }, [title, description, url, image]);
}
