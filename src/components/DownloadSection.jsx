import { useI18n } from "../i18n/useI18n";
export default function DownloadSection() {
  const { t } = useI18n();
  return (
    <section id="download" className="py-16 md:py-20 bg-white">
      <div className="container-fluid text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold">{t("dl.title")}</h2>
        <p className="mt-2 text-muted-600">{t("dl.p")}</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <a href="http://45.158.10.75:8989/" className="btn-primary rounded-xl px-5 py-3 font-semibold text-white bg-primary-600 hover:opacity-95 transition" rel="noopener">{t("dl.web")}</a>
          <a href="https://play.google.com/store/apps/details?id=com.ironasia.app" className="btn-store rounded-xl px-5 py-3 font-semibold border border-gray-300 text-gray-800 hover:bg-gray-50 transition" target="_blank" rel="noopener">{t("dl.and")}</a>
          <a href="https://apps.apple.com/app/id0000000000" className="btn-store rounded-xl px-5 py-3 font-semibold border border-gray-300 text-gray-800 hover:bg-gray-50 transition" target="_blank" rel="noopener">{t("dl.ios")}</a>
        </div>
      </div>
    </section>
  );
}
