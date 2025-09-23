import { useI18n } from "../i18n/useI18n";

/* ---------- Ikon SVG ringan (inline) ---------- */
const Icon = ({ name, className = "h-4 w-4" }) => {
  const common = "stroke-current";
  switch (name.toLowerCase()) {
    case "integritas":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${className} ${common}`}>
          <path d="M12 3l7 4v5c0 5-7 9-7 9s-7-4-7-9V7l7-4z" strokeWidth="1.8" />
          <path d="M9.5 12.5l2 2 3.5-4" strokeWidth="1.8" />
        </svg>
      );
    case "efisiensi":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${className} ${common}`}>
          <path d="M3 12h18M12 3v18" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="8" strokeWidth="1.8" />
        </svg>
      );
    case "inovasi":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${className} ${common}`}>
          <path d="M12 3a7 7 0 00-4 12v2a2 2 0 002 2h4a2 2 0 002-2v-2A7 7 0 0012 3z" strokeWidth="1.8" />
          <path d="M9 21h6" strokeWidth="1.8" />
        </svg>
      );
    case "kolaborasi":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${className} ${common}`}>
          <circle cx="8" cy="8" r="3" strokeWidth="1.8" />
          <circle cx="16" cy="8" r="3" strokeWidth="1.8" />
          <path d="M3 20a5 5 0 0110 0M11 20a5 5 0 0110 0" strokeWidth="1.8" />
        </svg>
      );
    case "keberlanjutan":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${className} ${common}`}>
          <path d="M12 3c4 4 6 7 6 10a6 6 0 11-12 0c0-3 2-6 6-10z" strokeWidth="1.8" />
          <path d="M12 3v10" strokeWidth="1.8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={`${className} ${common}`}>
          <path d="M5 12l4 4L19 6" strokeWidth="1.8" />
        </svg>
      );
  }
};

/* ---------- util timeline: pecah '2025 – ...' ---------- */
const splitYearText = (row) => {
  if (typeof row !== "string") return { year: "", text: row };
  const [y, ...rest] = row.split("–");
  return { year: (y || "").trim(), text: rest.join("–").trim() };
};

export default function About() {
  const { t, tn } = useI18n();
  const timeline = t("about.timeline") || [];
  const values = t("about.values") || [];
  const mission = t("about.mission") || [];

  return (
    <section
      id="about"
      className="relative -mt-px py-20 bg-white ia-watermark"
      data-pos="center"
      data-size="lg"
    >
      <div className="container-fluid">
        {/* Title */}
        <div className="text-center">

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
            {tn("about.title")}
          </h2>
          <p className="mt-3 text-muted-700 max-w-2xl mx-auto text-lg">
            {tn("about.vision")}
          </p>
        </div>

        {/* Grid Content */}
        <div className="mt-14 grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm
                          hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span className="inline-block size-2.5 rounded-full bg-accent-600 ring-4 ring-accent-50" />
              {tn("about.timelineTitle")}
            </h3>

            <ol className="mt-6">
              {timeline.map((row, i) => {
                const { year, text } = splitYearText(row);
                const isLast = i === timeline.length - 1;
                return (
                  <li key={i} className="grid grid-cols-[22px_1fr] gap-x-4">
                    {/* rail + dot */}
                    <div className="relative">
                      {!isLast && (
                        <span
                          className="absolute left-[10px] top-4 bottom-[-14px] w-[2px]
                                     bg-gradient-to-b from-accent-200 via-primary-200 to-primary-100"
                          aria-hidden
                        />
                      )}
                      <span
                        className="absolute left-2 top-2 h-3.5 w-3.5 rounded-full
                                   bg-accent-600 ring-4 ring-white shadow"
                        aria-hidden
                      />
                    </div>
                    {/* content */}
                    <div className="pb-6">
                      <div className="text-sm font-semibold text-slate-900">{year}</div>
                      <div className="mt-0.5 text-sm text-slate-700">{text}</div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Vision card */}
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span className="inline-block h-4 w-1.5 rounded-full bg-accent-600" />
              {t("about.visionTitle")}
            </h3>
            <p className="text-sm text-muted-700 leading-relaxed">{tn("about.vision")}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-[11px] font-medium px-2 py-1 rounded-full bg-primary-50 text-primary-700 ring-1 ring-primary-200/70">
                B2B Focus
              </span>
              <span className="text-[11px] font-medium px-2 py-1 rounded-full bg-accent-50 text-accent-700 ring-1 ring-accent-200/70">
                Compliance
              </span>
            </div>
          </div>

          {/* Mission card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span className="inline-block h-4 w-1.5 rounded-full bg-primary-600" />
              {t("about.missionTitle")}
            </h3>
            <ul className="mt-1 space-y-2 text-sm text-muted-700">
              {mission.map((m, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-block size-1.5 rounded-full bg-accent-600 ring-2 ring-accent-100" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values */}
        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm text-center">
          <h3 className="text-xl font-semibold">{t("about.valuesTitle")}</h3>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {values.map((v, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium
                           border shadow-sm
                           bg-gradient-to-r from-primary-50 to-accent-50
                           text-primary-800 border-primary-200/70 hover:from-primary-50 hover:to-accent-100
                           transition-colors"
              >
                <span className="grid place-items-center size-5 rounded-full
                                  bg-white ring-1 ring-primary-200/70">
                  <Icon name={String(v)} className="h-3.5 w-3.5 text-primary-700" />
                </span>
                <span className="whitespace-nowrap">{v}</span>
              </span>
            ))}
          </div>

          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-accent-200 to-transparent" />
        </div>
      </div>
    </section>
  );
}
