import { useI18n } from "../i18n/useI18n";
export default function Features() {
  const { t } = useI18n();
  const items = t("features.list") || [];
  return (
    <section id="fitur" className="py-14 sm:py-16 md:py-20 bg-white">
      <div className="container-fluid">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center">{t("features.title")}</h2>
        <p className="mt-2 text-center text-muted-600 max-w-2xl mx-auto">{t("features.desc")}</p>
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map(([title,desc], idx) => (
            <div key={idx} className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-5 sm:p-6 shadow-sm hover:shadow-lg transition">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-3 sm:mb-4" style={{background:'var(--color-primary-50)', color:'var(--color-primary-700)'}}>
                <span aria-hidden>{["⚡","🛡️","📦","🔔","📊","✉️"][idx]}</span>
              </div>
              <h3 className="font-semibold text-base sm:text-lg">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
