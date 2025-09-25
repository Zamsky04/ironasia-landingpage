import { useI18n } from "../i18n/useI18n";
import { ShieldCheckIcon, BoltIcon, LightBulbIcon, UserGroupIcon, SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion'; 

const ExecutiveGoalAnimation = () => {
  return (
    <div className="relative flex items-center justify-center size-64 md:size-80">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        className="absolute inset-0 border-2 border-primary-200 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="absolute inset-6 border border-primary-200/70 rounded-full"
      />
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: 'mirror' }}
        className="relative flex items-center justify-center size-32 md:size-40 rounded-full bg-white shadow-2xl shadow-primary-200/50"
      >
        <svg className="size-16 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
        </svg>
      </motion.div>
    </div>
  );
};


export default function About() {
  const { t, tn } = useI18n();
  const timelineData = tn("about.timeline") || [];
  const valuesData = tn("about.values") || [];
  const missionData = tn("about.mission") || [];

  const valueIcons = {
    "Integritas": ShieldCheckIcon, "Efisiensi": BoltIcon, "Inovasi": LightBulbIcon,
    "Kolaborasi": UserGroupIcon, "Keberlanjutan": SparklesIcon,
  };

  const splitYearText = (row) => {
    if (typeof row !== "string") return { year: "", text: row };
    const [y, ...rest] = row.split("–");
    return { year: (y || "").trim(), text: rest.join("–").trim() };
  };

  return (
    <section id="about" className="relative py-20 md:py-24 bg-gradient-to-b from-white to-primary-50 overflow-hidden">
      <div className="container-fluid">
        {/* Title */}
        <div className="text-center">
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            {tn("about.title")}
          </h2>
          <p className="mt-3 text-slate-600 max-w-3xl mx-auto text-lg">
            {tn("about.desc")}
          </p>
        </div>

        <div className="mt-20 grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Kolom Kiri: Grafik Animasi */}
          <div className="flex justify-center">
            <ExecutiveGoalAnimation />
          </div>

          {/* Kolom Kanan: Teks Visi & Misi */}
          <div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900">{t("about.visionTitle")}</h3>
              <p className="mt-3 text-xl text-slate-700 leading-relaxed">"{tn("about.vision")}"</p>
            </div>

            <div className="my-10 h-px bg-slate-200" />
            
            <div>
              <h3 className="text-3xl font-bold text-slate-900">{t("about.missionTitle")}</h3>
              <ul className="mt-5 space-y-4">
                {missionData.map((m, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircleIcon className="size-6 text-primary-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 text-lg">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline Horizontal */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-slate-900">{t("about.timelineTitle")}</h3>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative grid grid-cols-3 gap-x-8">
              <div className="absolute top-4 left-0 w-full h-0.5 bg-gradient-to-r from-accent-200 via-primary-200 to-primary-100" />
              {timelineData.map((row, i) => {
                const { year, text } = splitYearText(row);
                return (
                  <div key={i} className="relative text-center">
                    <div className="relative inline-flex items-center justify-center">
                      <span className="absolute size-9 rounded-full bg-primary-100 animate-pulse" />
                      <span className="relative size-4 rounded-full bg-accent-600 ring-4 ring-white shadow-sm" />
                    </div>
                    <div className="mt-4">
                      <div className="text-base font-semibold text-slate-900">{year}</div>
                      <div className="mt-1 text-sm text-slate-600">{text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Kartu Nilai Perusahaan */}
        <div className="mt-24">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900">{t("about.valuesTitle")}</h3>
            <p className="mt-2 text-slate-600 max-w-xl mx-auto">{t("about.valuesDesc")}</p>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {valuesData.map((v, i) => {
              const Icon = valueIcons[v] || SparklesIcon;
              return (
                <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 text-center
                                      shadow-sm transition-all duration-300
                                      hover:shadow-lg hover:-translate-y-1 hover:border-primary-200">
                  <div className="inline-flex items-center justify-center size-12 rounded-lg bg-primary-50">
                    <Icon className="size-6 text-primary-600" />
                  </div>
                  <h4 className="mt-3 font-semibold text-slate-800">{v}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}