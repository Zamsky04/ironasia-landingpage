import { useI18n } from "../i18n/useI18n";

export default function RFQFlow() {
  const { tn } = useI18n();
  const steps = tn("rfq.steps") || [];

  return (
    <section
      id="alur"
      className="relative py-16 md:py-20 bg-slate-50 ia-watermark wm-soft" 
      data-pos="center"
      data-size="lg"
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200/60 to-transparent"
        aria-hidden
      />

      <div className="container-fluid">
        {/* heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium
                           bg-accent-50 text-accent-700 ring-1 ring-accent-200/60">
            <span className="inline-block size-2.5 rounded-full bg-accent-600" />
            {tn("rfq.badge") || "Alur Permintaan (RFQ)"}
          </span>

          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold">
            {tn("rfq.title")}
          </h2>
          <p className="mt-2 text-muted-600 max-w-3xl mx-auto">{tn("rfq.desc")}</p>
        </div>

        {/* steps */}
        <ol className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map(([title, desc], i) => (
            <li
              key={i}
              className="group h-full rounded-2xl bg-white border border-gray-200 p-5 sm:p-6 shadow-sm
                         transition hover:-translate-y-1 hover:shadow-md hover:ring-1 hover:ring-primary-300/70"
            >
              {/* header step */}
              <div className="flex items-center gap-2 text-xs font-semibold text-primary-700">
                <span className="inline-flex items-center justify-center size-6 rounded-full
                                  bg-primary-50 text-primary-700 ring-1 ring-primary-200/70">
                  {i + 1}
                </span>
                <span className="inline-block size-2 rounded-full bg-accent-600" />
                <span>Step {i + 1}</span>
              </div>

              {/* judul & isi */}
              <h3 className="mt-2 text-base sm:text-lg font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-600 leading-relaxed">
                {desc}
              </p>

              {/* underline halus */}
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-primary-200/50 to-transparent" />
            </li>
          ))}
        </ol>

        {/* Tips */}
        <div className="mt-8 max-w-3xl mx-auto text-sm text-muted-700 bg-white border border-gray-200 rounded-2xl p-5">
          <strong className="block text-slate-900 mb-2">{tn("rfq.tipsTitle")}</strong>
          <ul className="list-disc pl-5 space-y-1">
            {(tn("rfq.tips") || []).map((s, idx) => <li key={idx}>{s}</li>)}
          </ul>
        </div>

        {/* divider bawah */}
        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-accent-200/60 to-transparent" />
      </div>
    </section>
  );
}
