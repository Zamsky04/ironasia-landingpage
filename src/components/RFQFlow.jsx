import { useI18n } from "../i18n/useI18n";
export default function RFQFlow() {
  const { t } = useI18n();
  const steps = t("rfq.steps") || [];
  return (
    <section id="alur" className="py-14 sm:py-16 md:py-20 bg-slate-50">
      <div className="container-fluid">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center">{t("rfq.title")}</h2>
        <p className="mt-2 text-center text-muted-600 max-w-3xl mx-auto">{t("rfq.desc")}</p>
        <ol className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {steps.map(([title,desc], i) => (
            <li key={i} className="rounded-2xl bg-white border border-gray-200 p-5 sm:p-6 shadow-sm">
              <div className="text-sm font-semibold text-primary-700">Step {i+1}</div>
              <h3 className="mt-1 text-base sm:text-lg font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-600">{desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <a href="http://45.158.10.75:8989/" className="btn-primary rounded-xl px-5 py-3 font-semibold text-white bg-primary-600 hover:opacity-95 transition">{t("rfq.ctaBuyer")}</a>
          <a href="#supplier" className="btn-outline rounded-xl px-5 py-3 font-semibold border border-gray-300 text-gray-800 hover:bg-gray-50 transition">{t("rfq.ctaSupplier")}</a>
        </div>
      </div>
    </section>
  );
}
