import { useI18n } from "../i18n/useI18n";

export default function FAQ() {
  const { tn } = useI18n();
  const items = tn("faq.list") || [];

  return (
    <section
      id="faq"
      className="relative py-16 md:py-20 bg-white ia-watermark wm-off" // matikan watermark di FAQ
      data-pos="center"
      data-size="sm"
    >
      <div className="container-fluid">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium
                           bg-accent-50 text-accent-700 ring-1 ring-accent-200/60">
            <span className="inline-block size-2.5 rounded-full bg-accent-600" />
            {tn("faq.title")}
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold">Pertanyaan Umum</h2>
        </div>

        {/* List */}
        <div className="mt-8 grid md:grid-cols-2 gap-5 md:gap-6">
          {items.map(([q, a], i) => (
            <details
              key={i}
              className="group rounded-2xl border border-gray-200 bg-white p-0 shadow-sm
                         hover:shadow-md transition-shadow"
            >
              <summary
                className="list-none cursor-pointer select-none
                           flex items-center justify-between gap-4
                           px-5 py-4 rounded-2xl"
              >
                <span className="font-semibold text-slate-900">{q}</span>

                {/* plus → times ketika open */}
                <span
                  className="shrink-0 grid place-items-center size-7 rounded-full
                             bg-primary-50 text-primary-700 ring-1 ring-primary-200/70
                             transition-transform group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>

              <div className="px-5 pb-5 pt-0">
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-3" />
                <p className="text-sm text-muted-600 leading-relaxed whitespace-pre-line">
                  {a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
