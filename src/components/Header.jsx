// src/components/Header.jsx
import { useEffect, useState } from "react";
import { useI18n } from "../i18n/useI18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  // Kunci scroll saat drawer terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
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
            <span className="font-sutro tracking-tight">1ronAsia</span>
          </a>
        </div>

        {/* tengah: nav desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600" aria-label="Primary">
          <a href="#fitur" className="hover:text-primary-600">{t("nav.fitur")}</a>
          <a href="#alur" className="hover:text-primary-600">{t("nav.alur")}</a>
          <a href="#showcase" className="hover:text-primary-600">{t("nav.sorotan")}</a>
          <a href="#faq" className="hover:text-primary-600">{t("nav.faq")}</a>
          <a href="#download" className="hover:text-primary-600">{t("nav.download")}</a>
          <a href="#kontak" className="hover:text-primary-600">{t("nav.kontak")}</a>
        </nav>

        {/* kanan: HANYA bendera di mobile; CTA hilang dari header */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <LanguageSwitcher />
          {/* kalau mau CTA tampil di desktop sangat besar saja, aktifkan baris di bawah */}
          {/* <a href="http://45.158.10.75:8989/" className="hidden xl:inline-flex btn-primary" rel="noopener">{t("nav.buka")}</a> */}
        </div>
      </div>

      {/* ===== MOBILE DRAWER ===== */}
      <div
        className={`md:hidden fixed inset-0 z-[100] transition-opacity duration-200 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        aria-hidden={!open}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/45" onClick={() => setOpen(false)} />

        {/* panel: full width di mobile, flex column agar konten selalu tampil */}
        <aside
          role="dialog" aria-modal="true"
          className={`absolute right-0 top-0 h-full w-screen sm:w-[92vw] sm:max-w-sm bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* header panel */}
          <div className="flex items-center justify-between p-4 border-b">
            <a href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <img src="/logo.png" alt="Logo IronAsia" className="h-8" />
              <strong>IronAsia</strong>
            </a>
            <button className="w-10 h-10 rounded-lg border bg-white" onClick={() => setOpen(false)} aria-label="Close Menu">✕</button>
          </div>

          {/* isi menu (scrollable) */}
          <nav className="flex-1 overflow-y-auto p-4" aria-label="Mobile">
            <ul className="space-y-1 text-base">
              <li><a onClick={()=>setOpen(false)} href="#fitur" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50">✨ {t("nav.fitur")}</a></li>
              <li><a onClick={()=>setOpen(false)} href="#alur" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50">📦 {t("nav.alur")}</a></li>
              <li><a onClick={()=>setOpen(false)} href="#showcase" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50">🎯 {t("nav.sorotan")}</a></li>
              <li><a onClick={()=>setOpen(false)} href="#faq" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50">❓ {t("nav.faq")}</a></li>
              <li><a onClick={()=>setOpen(false)} href="#download" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50">⬇️ {t("nav.download")}</a></li>
              <li><a onClick={()=>setOpen(false)} href="#kontak" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50">📞 {t("nav.kontak")}</a></li>
            </ul>

            {/* flags di dalam drawer */}
            <div className="mt-4 border-t pt-4">
              <div className="text-sm text-slate-500 px-1 mb-2">Language</div>
              <LanguageSwitcher />
            </div>
          </nav>

          {/* CTA & CS di bawah drawer */}
          <div className="p-4 border-t grid gap-2">
            <a href="http://45.158.10.75:8989/" className="btn-primary" rel="noopener" onClick={()=>setOpen(false)}>
              {t("nav.buka")}
            </a>
            <a href="https://wa.me/6283160689317?text=Halo%20IronAsia%2C%20saya%20butuh%20bantuan."
               className="btn-wa" target="_blank" rel="noopener" onClick={()=>setOpen(false)}>
              WhatsApp CS
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
