import { useMemo, useState } from "react";
import { useI18n } from "../i18n/useI18n";

const PlusIcon = ({ className = "size-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function FAQ() {
  const { tn } = useI18n();

  // Struktur baru: faq.groups.{rfq|app|supplier|web} = [[q,a], ...]
  // Fallback: kalau belum ada, pakai list lama sebagai RFQ.
  const groups = tn("faq.groups") || { rfq: tn("faq.list") || [] };

  // urutan tab & label
  const tabs = useMemo(
    () => ([
      ["rfq", "RFQ"],
      ["app", "Aplikasi"],
      ["supplier", "Supplier"],
      ["web", "Web"],
    ].filter(([k]) => Array.isArray(groups[k]) && groups[k].length)),
    [groups]
  );

  const [tab, setTab] = useState(tabs[0]?.[0] || "rfq");
  const items = groups[tab] || [];

  // Accordion: hanya satu open di seluruh grid
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="relative py-16 md:py-20 bg-white wm-off">
      <div className="container-fluid max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold
                           bg-accent-50 text-accent-700 ring-1 ring-accent-200/60">
            <span className="inline-block size-2.5 rounded-full bg-accent-600" />
            {tn("faq.title")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Pertanyaan Umum
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
              <div key={i} className="self-start rounded-[28px] p-[1.5px] bg-primary-600/90">
                {/* isi putih, TIDAK ada gradasi/warna biru di dalam */}
                <div className="rounded-[26px] bg-white border border-slate-200/80 shadow-[0_1px_0_#e5e7eb]">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="w-full list-none cursor-pointer select-none flex items-center justify-between gap-5
                               px-6 py-5 rounded-[26px] text-left focus-ring"
                  >
                    <span className="font-semibold text-[15px] sm:text-base leading-snug text-slate-900">
                      {q}
                    </span>

                    {/* Plus → X; hover merah, open merah */}
                    <span
                      className={`shrink-0 inline-grid place-items-center size-9 rounded-full
                                  ring-1 transition-all
                                  ${isOpen
                                    ? "bg-accent-50 text-accent-700 ring-accent-200/70 rotate-45"
                                    : "bg-primary-50 text-primary-700 ring-primary-200/70 hover:bg-accent-50 hover:text-accent-700 hover:ring-accent-200/70 hover:scale-105"}`}
                      aria-hidden
                    >
                      <PlusIcon className="size-4" />
                    </span>
                  </button>

                  {/* content */}
                  {isOpen && (
                    <div className="px-6 pt-0 pb-5">
                      <div className="h-px bg-slate-200/80 mb-3" />
                      <p className="text-[15px] leading-[1.7] text-slate-600 whitespace-pre-line">
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
