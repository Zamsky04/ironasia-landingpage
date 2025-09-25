import { useMemo, useState } from "react";
import { useI18n } from "../i18n/useI18n";

const PlusIcon = ({ className = "size-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function FAQ() {
  const { tn } = useI18n();

  const groups = useMemo(() => {
        return tn("faq.groups") || { rfq: tn("faq.list") || [] };
    }, [tn]);

  const tabs = useMemo(
    () => ([
      ["rfq", "RFQ"],
      ["app", "Aplikasi"],
      ["web", "Website"],
      ["supplier", "Supplier"],
      ["customer", "Customer"],
    ].filter(([k]) => Array.isArray(groups[k]) && groups[k].length)),
    [groups]
  );

  const [tab, setTab] = useState(tabs[0]?.[0] || "rfq");
  const items = groups[tab] || [];

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="relative py-16 md:py-20 bg-gradient-to-t from-primary-400 to-white">
      <div className="container-fluid max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {tn("faq.title")}
          </h2>
        </div>

        {/* Tabs kategori */}
        {tabs.length > 1 && (
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {tabs.map(([key, label]) => (
              <button
                key={key}
                onClick={() => { setTab(key); setOpenIndex(null); }}
                className={`px-3.5 py-2 rounded-full text-sm font-medium transition
                  ${tab === key
                    ? "bg-primary-600 text-white"
                    : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"}`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {/* List */}
        <div className="mt-8 grid md:grid-cols-2 gap-4 md:gap-5 items-start">
          {items.map(([q, a], i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`relative rounded-3xl p-[1.5px] transition-all duration-300
                           ${isOpen ? "shadow-xl transform -translate-y-1" : "shadow-sm"}
                           ${isOpen ? "gradient-border-faq" : "hover:gradient-border-faq-hover bg-slate-200/90"}`}
              >
                <div className="rounded-[calc(1.5rem-1.5px)] bg-white border border-transparent">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="w-full list-none cursor-pointer select-none flex items-center justify-between gap-5
                               px-6 py-5 text-left focus-ring rounded-[calc(1.5rem-1.5px)]"
                  >
                    <span className={`font-semibold text-[15px] sm:text-base leading-snug transition-colors duration-300
                                     ${isOpen ? "text-primary-600" : "text-slate-900"}`}>
                      {q}
                    </span>

                    <span
                      className={`shrink-0 inline-grid place-items-center size-9 rounded-full
                                  ring-1 transition-all duration-300 ease-in-out
                                  ${isOpen
                                  ? "bg-accent-600 hover:bg-accent-700 text-white ring-transparent rotate-45" // Menggunakan warna merah (accent) saat terbuka
                                  : "bg-primary-50 text-primary-600 ring-primary-200/70 hover:bg-primary-100 hover:text-primary-700"}`}
                      aria-hidden
                    >
                      <PlusIcon className="size-4 transition-transform duration-300" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pt-0 pb-5">
                      <div className="h-px bg-slate-200 mb-4" />
                      <p className="text-[15px] leading-relaxed text-slate-600 whitespace-pre-line">
                        {a}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}