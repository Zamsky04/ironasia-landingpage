import { useI18n } from "../i18n/useI18n";

export default function RFQFlow() {
  const { tn } = useI18n();
  const steps = tn("rfq.steps") || [];

  return (
    <section id="alur" className="py-14 sm:py-16 md:py-20 bg-slate-50 ia-watermark" data-pos="center" data-size="lg">
      <div className="container-fluid">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center">{tn("rfq.title")}</h2>
        <p className="mt-2 text-center text-muted-600 max-w-3xl mx-auto">{tn("rfq.desc")}</p>

        <ol className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map(([title, desc], i) => (
            <li key={i} className="rounded-2xl bg-white border border-gray-200 p-5 sm:p-6 shadow-sm">
              <div className="text-xs font-semibold text-primary-700">Step {i + 1}</div>
              <h3 className="mt-1 text-base sm:text-lg font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-600 leading-relaxed">{desc}</p>
            </li>
          ))}
        </ol>

        {/* Tambahan ringkas: tips sederhana */}
        <div className="mt-8 max-w-3xl mx-auto text-sm text-muted-600 bg-white border border-gray-200 rounded-2xl p-5">
          <strong className="block text-slate-800 mb-2">{tn("rfq.tipsTitle")}</strong>
          <ul className="list-disc pl-5 space-y-1">
            {(tn("rfq.tips") || []).map((s, idx) => <li key={idx}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
