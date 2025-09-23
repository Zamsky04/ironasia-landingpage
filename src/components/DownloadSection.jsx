import { useI18n } from "../i18n/useI18n";
export default function DownloadSection() {
  const { tn } = useI18n();
  return (
    <section id="download" className="py-16 md:py-20 bg-white">
      <div className="container-fluid text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold">{tn("dl.title")}</h2>
        <p className="mt-2 text-muted-600">{tn("dl.p")}</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <a href="https://ironasia.com/" className="btn-primary rounded-xl px-5 py-3 font-semibold text-white bg-primary-600 hover:opacity-95 transition" rel="noopener">{tn("dl.web")}</a>
          <a href="https://play.google.com/store/apps/details?id=com.ironasia.app" className="btn-store rounded-xl px-5 py-3 font-semibold border border-gray-300 text-gray-800 hover:bg-gray-50 transition" target="_blank" rel="noopener">{tn("dl.and")}</a>
          <a href="https://apps.apple.com/app/id0000000000" className="btn-store rounded-xl px-5 py-3 font-semibold border border-gray-300 text-gray-800 hover:bg-gray-50 transition" target="_blank" rel="noopener">{tn("dl.ios")}</a>
        </div>
      </div>
    </section>
  );
}
