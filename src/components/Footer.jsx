import { useI18n } from "../i18n/useI18n";

const Ico = {
  Mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  Phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M6 3h3l2 5-2 1a12 12 0 005 5l1-2 5 2v3a2 2 0 01-2 2A16 16 0 014 5a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  MapPin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  Globe: (p) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M3 12h18M12 3a18 18 0 010 18M12 3a18 18 0 000 18" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
};

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-gradient-to-br from-[#374151] via-[#4B5563] to-[#1f2937] text-slate-300 pt-12 pb-8 mt-0">
      <div className="container-fluid grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo IronAsia" className="h-10 w-auto" />
            <span className="brand-wordmark text-white">1ronAsia</span>
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Marketplace B2B & B2C material bangunan—cepat, transparan, efisien.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h4 className="font-semibold text-white mb-3">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-accent-400">Tentang Kami</a></li>
            <li><a href="#fitur" className="hover:text-accent-400">Fitur</a></li>
            <li><a href="#alur" className="hover:text-accent-400">Alur RFQ</a></li>
            <li><a href="#supplier" className="hover:text-accent-400">Supplier</a></li>
            <li><a href="#faq" className="hover:text-accent-400">FAQ</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="font-semibold text-white mb-3">Hubungi Kami</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Ico.MapPin className="w-4 h-4 text-slate-400"/> Tangerang, Banten</li>
            <li className="flex items-center gap-2"><Ico.Mail className="w-4 h-4 text-slate-400"/> info@ironasia.co.id</li>
            <li className="flex items-center gap-2"><Ico.Phone className="w-4 h-4 text-slate-400"/> +62-812-xxxx-xxxx</li>
            <li className="flex items-center gap-2"><Ico.Globe className="w-4 h-4 text-slate-400"/> www.ironasia.co.id</li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="font-semibold text-white mb-3">Gabung Sekarang</h4>
          <a
            href="#alur"
            className="w-full mb-2 inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white
                      bg-gradient-to-r from-[#6B7280] via-[#4B5563] to-[#374151]
                      shadow-md transition hover:brightness-110 hover:shadow-lg"
          >
            Ajukan RFQ
          </a>
          <a
            href="#supplier"
            className="w-full inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-slate-400 text-slate-200 
                      transition hover:bg-slate-700/40 hover:border-slate-300"
          >
            {t("footer.download")}
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="container-fluid mt-10 border-t border-slate-600/60 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} IronAsia. All rights reserved.</p>
        <nav className="flex gap-4">
          <a href="/privacy" className="hover:text-accent-400">{t("footer.privacy")}</a>
          <a href="/terms" className="hover:text-accent-400">{t("footer.terms")}</a>
          <a href="#download" className="hover:text-accent-400">{t("footer.download")}</a>
        </nav>
      </div>
    </footer>
  );
}
