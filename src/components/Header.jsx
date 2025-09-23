// src/components/Header.jsx
import { useEffect, useState } from "react";
import { useI18n } from "../i18n/useI18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  // Kunci scroll & tandai body saat drawer terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.body.classList.toggle("drawer-open", open);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("drawer-open");
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur shadow-sm">
      <div className="container-fluid h-16 flex items-center justify-between">
        {/* kiri: hamburger + logo */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            className="btn-hamburger"
            aria-label="Open Menu"
            onClick={() => setOpen(true)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="#0f172a" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <a href="/" aria-label="IronAsia Home" className="flex items-center gap-3 shrink-0">
            <img src="/logo.png" alt="Logo IronAsia" className="h-9 w-auto" />
            <span className="brand-wordmark">1ronAsia</span>
          </a>
        </div>

        {/* nav desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600" aria-label="Primary">
          <a href="#fitur" className="hover:text-primary-600">{t("nav.fitur")}</a>
          <a href="#alur" className="hover:text-primary-600">{t("nav.alur")}</a>
          <a href="#showcase" className="hover:text-primary-600">{t("nav.sorotan")}</a>
          <a href="#faq" className="hover:text-primary-600">{t("nav.faq")}</a>
          <a href="#download" className="hover:text-primary-600">{t("nav.download")}</a>
          <a href="#kontak" className="hover:text-primary-600">{t("nav.kontak")}</a>
        </nav>

        {/* kanan */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <LanguageSwitcher />
          {/* <a href="http://45.158.10.75:8989/" className="hidden xl:inline-flex btn-primary" rel="noopener">{t("nav.buka")}</a> */}
        </div>
      </div>

      {/* ===== MOBILE DRAWER ===== */}
      <div
        className={`md:hidden fixed inset-0 z-[1000] transition-opacity duration-200 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        aria-hidden={!open}
      >
        {/* overlay (z tinggi supaya nutup widget melayang) */}
        <div className="absolute inset-0 bg-black/45 z-[1000] drawer-overlay" onClick={() => setOpen(false)} />

        {/* panel: grid 3 baris */}
        <aside
          role="dialog" aria-modal="true"
          className={`absolute right-0 top-0 h-dvh w-screen sm:w-[92vw] sm:max-w-sm bg-white shadow-2xl grid 
                      grid-rows-[auto,1fr,auto] transform transition-transform duration-300 
                      ${open ? "translate-x-0" : "translate-x-full"} pb-safe z-[1010]`}
        >
          {/* header panel */}
          <div className="flex items-center justify-between p-4 border-b">
            <a href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <img src="/logo.png" alt="Logo IronAsia" className="h-8 w-auto" />
              {/* samakan wordmark dengan desktop */}
              <span className="brand-wordmark">1ronAsia</span>
            </a>
            <button className="w-10 h-10 rounded-lg border bg-white" onClick={() => setOpen(false)} aria-label="Close Menu">✕</button>
          </div>

          {/* isi menu (scrollable) */}
          <nav className="min-h-0 overflow-y-auto p-4" aria-label="Mobile">
            <ul className="space-y-1 text-base text-slate-800">
              <li><a onClick={()=>setOpen(false)} href="#fitur"    className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50">✨ {t("nav.fitur")}</a></li>
              <li><a onClick={()=>setOpen(false)} href="#alur"     className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50">📦 {t("nav.alur")}</a></li>
              <li><a onClick={()=>setOpen(false)} href="#showcase" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50">🎯 {t("nav.sorotan")}</a></li>
              <li><a onClick={()=>setOpen(false)} href="#faq"      className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50">❓ {t("nav.faq")}</a></li>
              <li><a onClick={()=>setOpen(false)} href="#download" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50">⬇️ {t("nav.download")}</a></li>
              <li><a onClick={()=>setOpen(false)} href="#kontak"   className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50">📞 {t("nav.kontak")}</a></li>
            </ul>

            <div className="mt-4 border-t pt-4">
              <div className="text-sm text-slate-500 px-1 mb-2">Language</div>
              <LanguageSwitcher />
            </div>
          </nav>

          {/* CTA footer (compact, sticky) */}
          <div className="p-4 border-t">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="http://45.158.10.75:8989/"
                className="btn-primary-compact"
                rel="noopener"
                onClick={()=>setOpen(false)}
                aria-label="Buka Marketplace IronAsia"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                <span>{t("nav.buka")}</span>
              </a>

              <a
                href="https://wa.me/6283160689317?text=Halo%20IronAsia%2C%20saya%20butuh%20bantuan."
                className="btn-wa-compact"
                target="_blank"
                rel="noopener"
                onClick={()=>setOpen(false)}
                aria-label="WhatsApp CS"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.7 13.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1-.2.2-.7.8-.9 1-.2.2-.3.2-.5.1-1-.5-1.9-1.1-2.6-1.9-.2-.2-.2-.4 0-.6.1-.1.3-.3.4-.5.1-.2.1-.3 0-.5-.1-.2-.6-1.1-.8-1.4-.2-.4-.4-.3-.6-.3h-.5c-.2 0-.5.1-.6.3-.6.6-.9 1.5-.9 2.4 0 .3.1.6.2.9.4 1 1.3 2.1 2.2 2.8 1.4 1.1 2.6 1.4 3.6 1.6.4.1.7.1 1.1.1.7 0 1.2-.2 1.6-.3.5-.2 1-.6 1.1-1 .1-.4.1-.8.1-.9 0-.2-.2-.3-.4-.4zM12 2a10 10 0 00-8.6 15l-1 3.7 3.8-1A10 10 0 1012 2z" fill="currentColor"/></svg>
                <span>WhatsApp CS</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
