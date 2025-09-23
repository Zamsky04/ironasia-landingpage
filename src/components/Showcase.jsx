import { useI18n } from "../i18n/useI18n";

export default function Showcase() {
  const { t } = useI18n();

  return (
    <section
      id="showcase"
      className="relative py-16 md:py-20 bg-white ia-watermark"
      data-pos="center"
      data-size="sm"
    >
      <div className="container-fluid">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Kiri: teks */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">{t("show.title")}</h2>
            <p className="mt-3 text-muted-600">{t("show.p")}</p>
            <ul className="mt-5 space-y-2 text-sm text-muted-600 list-disc pl-5">
              <li>{t("show.a")}</li>
              <li>{t("show.b")}</li>
              <li>{t("show.c")}</li>
            </ul>
          </div>

          {/* Kanan: kartu visual (tanpa tombol) */}
          <div className="relative max-w-[560px] mx-auto w-full">
            <div className="rounded-3xl p-1 bg-white/70 border border-gray-200 shadow-xl z-context">
              <div className="rounded-2xl bg-white p-6">
                <img
                  src="/logo.png"
                  alt="Logo 1ronAsia"
                  className="h-20 w-auto mx-auto transition-transform duration-300 ease-out will-change-transform hover:-translate-y-1"
                  loading="lazy"
                />

                {/* badge non-interaktif → bukan tombol */}
                <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs select-none">
                  <span className="inline-flex items-center rounded-full px-3 py-2 font-medium
                                   bg-primary-50 text-primary-700 ring-1 ring-primary-200/70 cursor-default">
                    {t("show.a")}
                  </span>
                  <span className="inline-flex items-center rounded-full px-3 py-2 font-medium
                                   bg-accent-50 text-accent-700 ring-1 ring-accent-200/70 cursor-default">
                    {t("show.b")}
                  </span>
                  <span className="inline-flex items-center rounded-full px-3 py-2 font-medium
                                   bg-slate-100 text-slate-700 ring-1 ring-slate-200 cursor-default">
                    {t("show.c")}
                  </span>
                </div>
              </div>
            </div>

            {/* glow halus */}
            <div
              className="absolute -z-10 blur-3xl opacity-30 -inset-8 rounded-[2rem] transition-opacity duration-300 group-hover:opacity-40"
              style={{ background: "var(--color-primary-300)" }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
