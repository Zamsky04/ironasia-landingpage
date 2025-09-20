import { useI18n } from "../i18n/useI18n";
export default function FAQ() {
  const { t } = useI18n();
  const items = t("faq.list") || [];
  return (
    <section id="faq" className="py-16 md:py-20 bg-white">
      <div className="container-fluid">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center">{t("faq.title")}</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map(([q,a], i) => (
            <details key={i} className="group rounded-2xl border border-gray-200 p-5 bg-white shadow-sm">
              <summary className="cursor-pointer font-semibold text-slate-900 select-none flex items-center justify-between">
                {q}
                <span className="ml-4 text-slate-400 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-600">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
