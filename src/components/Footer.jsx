import { useI18n } from "../i18n/useI18n";
export default function Footer() {
  const { t } = useI18n();
  return (
    <footer id="kontak" className="border-t border-gray-200 bg-white">
      <div className="container-fluid py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo IronAsia" className="h-8 w-auto" />
            <span className="font-semibold">IronAsia</span>
          </div>
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} IronAsia. All rights reserved.</p>
          <nav className="text-sm text-slate-600 flex gap-4" aria-label="Footer">
            <a href="/privacy" className="hover:text-primary-600">{t("footer.privacy")}</a>
            <a href="/terms" className="hover:text-primary-600">{t("footer.terms")}</a>
            <a href="#download" className="hover:text-primary-600">{t("footer.download")}</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
