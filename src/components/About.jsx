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
    <section id="about" className="py-20 bg-white ia-watermark" data-pos="center" data-size="lg">
      <div className="container-fluid">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{tn("about.title")}</h2>
          <p className="mt-3 text-muted-600 max-w-2xl mx-auto text-lg">{tn("about.vision")}</p>
        </div>

        {/* Grid Content */}
        <div className="mt-14 grid lg:grid-cols-3 gap-8">
          {/* Timeline (rapi & tidak menabrak) */}
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold"> {tn("about.timelineTitle")} </h3>

            <ol className="mt-6">
              {timeline.map((row, i) => {
                const { year, text } = splitYearText(row);
                const isLast = i === timeline.length - 1;
                return (
                  <li key={i} className="grid grid-cols-[20px_1fr] gap-x-4">
                    {/* rail + dot */}
                    <div className="relative">
                      {/* rail */}
                      {!isLast && (
                        <span className="absolute left-[9px] top-4 bottom-[-14px] w-[2px] bg-primary-100" aria-hidden />
                      )}
                      {/* dot */}
                      <span className="absolute left-1.5 top-2 h-3.5 w-3.5 rounded-full bg-primary-600 ring-4 ring-white shadow" aria-hidden />
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

          {/* Vision */}
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-8 shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">🌟 {t("about.visionTitle")}</h3>
            <p className="text-sm text-muted-700 leading-relaxed">{tn("about.vision")}</p>
          </div>

          {/* Mission */}
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-8 shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">🎯 {t("about.missionTitle")}</h3>
            <ul className="mt-1 space-y-2 text-sm text-muted-700 list-disc pl-5">
              {mission.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values (ikon profesional) */}
        <div className="mt-12 rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-8 shadow-sm text-center">
          <h3 className="text-xl font-semibold">{t("about.valuesTitle")}</h3>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {values.map((v, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3.5 py-2 text-sm font-medium text-primary-800 shadow-sm"
              >
                <Icon name={String(v)} />
                <span>{v}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
