import { useI18n } from "../i18n/useI18n";

export default function DownloadSection() {
  const { t } = useI18n();               // ⟵ pakai t(), bukan tn()
  const titleStr = t("dl.title") || "Mulai Menggunakan IronAsia";
  const parts = titleStr.split(/IronAsia/i); // pecah jika ada kata IronAsia

  return (
    <section id="download" className="py-16 md:py-20 bg-white">
      <div className="container-fluid text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          {parts[0] ?? titleStr}
          {titleStr.match(/IronAsia/i) && (
            <span className="brand-wordmark text-slate-900">1ronAsia</span>
          )}
          {parts[1] ?? ""}
        </h2>

        <p className="mt-2 text-muted-600">{t("dl.p") || ""}</p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="https://ironasia.com/"
            rel="noopener"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white
                       bg-gradient-to-r from-primary-700 to-primary-500 shadow-md
                       hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            {t("dl.web") || "Buka Marketplace Web"}
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.ironasia.app"
            target="_blank" rel="noopener"
            className="btn-store rounded-xl px-5 py-3 font-semibold border border-gray-300 text-gray-800
                       hover:bg-primary-50 hover:text-primary-700 hover:border-primary-300 transition"
          >
            {t("dl.and") || "Download Android"}
          </a>

          <a
            href="https://apps.apple.com/app/id0000000000"
            target="_blank" rel="noopener"
            className="btn-store rounded-xl px-5 py-3 font-semibold border border-gray-300 text-gray-800
                       hover:bg-gray-100 hover:text-slate-900 transition"
          >
            {t("dl.ios") || "Download iOS"}
          </a>
        </div>
      </div>
    </section>
  );
}
