import { useI18n } from "../i18n/useI18n";

const WebIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M6.194 12.753a.75.75 0 001.06.053L16.25 4.806V8.25a.75.75 0 001.5 0V3a.75.75 0 00-.75-.75H12a.75.75 0 000 1.5h3.444L6.14 11.694a.75.75 0 00.054 1.06z"
      clipRule="evenodd"
    />
  </svg>
);


export default function DownloadSection() {
  const { tn, t } = useI18n();
  const titleStr = t("dl.title") || "Mulai Menggunakan IronAsia";
  const parts = titleStr.split(/IronAsia/i);

  return (
    <section id="download" className="relative py-16 md:py-20 bg-gradient-to-b from-primary-400 to-white">
      <div className="container-fluid text-center z-context">
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          {parts[0] ?? titleStr}
          {titleStr.match(/IronAsia/i) && (
            <span className="brand-wordmark text-slate-900">1ronAsia</span>
          )}
          {parts[1] ?? ""}
        </h2>

        <p className="mt-2 text-muted-600">{t("dl.p") || ""}</p>

        <div className="mt-10 flex flex-col items-center gap-y-6">
          <a
            href="https://ironasia.com/"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-lg font-semibold text-white
                       bg-gradient-to-r from-primary-700 to-primary-500 shadow-md
                       hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            <WebIcon />
            {tn("dl.web") || "Jelajahi Platform Web"}
          </a>

          <div className="flex items-center w-full max-w-xs">
            <div className="flex-grow border-t border-slate-300"></div>
            <span className="flex-shrink mx-4 text-sm font-medium text-slate-500">
              {t("dl.or") || "Atau"}
            </span>
            <div className="flex-grow border-t border-slate-300"></div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.ironasia.app"
              target="_blank" rel="noopener" aria-label="Get it on Google Play"
            >
              <img
                src="/assets/google-play-badge.svg"
                alt="Get it on Google Play"
                className="h-12 md:h-14 transition hover:opacity-80"
              />
            </a>
            <a
              href="https://apps.apple.com/app/id0000000000"
              target="_blank" rel="noopener" aria-label="Download on the App Store"
            >
              <img
                src="/assets/app-store-badge.svg"
                alt="Download on the App Store"
                className="h-12 md:h-14 transition hover:opacity-80"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}