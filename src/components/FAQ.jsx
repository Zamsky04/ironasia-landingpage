import { useI18n } from "../i18n/useI18n";

export default function FAQ() {
  const { tn } = useI18n();
  const items = tn("faq.list") || [];

  return (
    <section id="faq" className="py-16 md:py-20 bg-white ia-watermark" data-pos="center" data-size="sm">
      <div className="container-fluid">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center">{tn("faq.title")}</h2>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map(([q, a], i) => (
            <details key={i} className="group rounded-2xl border border-gray-200 p-5 bg-white shadow-sm">
              <summary className="cursor-pointer font-semibold text-slate-900 select-none flex items-center justify-between">
                <span>{q}</span>
                <span className="ml-4 text-slate-400 group-open:rotate-45 transition">+</span>
              </summary>
              <div className="mt-3 text-sm text-muted-600 leading-relaxed whitespace-pre-line">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
