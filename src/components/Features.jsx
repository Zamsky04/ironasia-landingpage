import { useState } from "react";
import { useI18n } from "../i18n/useI18n";

export default function Features() {
  const { tn } = useI18n();
  const items = tn("features.list") || [];
  const icons = ["🌐","🛡️","⚡","💰","🔄","📊","📦","🤝","🔔","🏆"];

  // show more
  const [showAll, setShowAll] = useState(false);
  const initialCount = 6;
  const visibleItems = showAll ? items : items.slice(0, initialCount);

  // mobile/desktop expand per-card (klik)
  const [expanded, setExpanded] = useState(new Set()); // index -> expanded
  const toggleExpanded = (i) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <section
      id="fitur"
      className="relative py-16 md:py-20 bg-white ia-watermark"
      data-pos="center"
      data-size="lg"
    >
      <div className="container-fluid">
        {/* heading */}
        <div className="text-center">
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold">
            {tn("features.title")}
          </h2>
          <p className="mt-2 text-muted-600 max-w-2xl mx-auto">
            {tn("features.desc")}
          </p>
        </div>

        {/* cards */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {visibleItems.map(([title, desc], idx) => {
            const isOpen = expanded.has(idx);
            return (
              <article
                key={idx}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onClick={() => toggleExpanded(idx)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleExpanded(idx)}
                className="group relative rounded-2xl p-6 sm:p-7 text-white
                          shadow-lg hover:shadow-xl transition duration-300
                          border border-white/10 overflow-hidden cursor-pointer
                          focus:outline-none"   // 🚀 ring merah DIHAPUS
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,80,255,.95) 0%, rgba(24,114,255,.92) 45%, rgba(60,140,255,.88) 100%)",
                }}
              >
                {/* top: icon + title */}
                <div className="relative z-[1] flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center 
                                  bg-white/20 border border-white/30 shadow-inner
                                  group-hover:scale-105 transition">
                    <span aria-hidden className="text-lg sm:text-xl text-white">
                      {icons[idx] || "✨"}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg sm:text-xl">{title}</h3>
                </div>

                {/* description: muncul saat hover (desktop) ATAU saat diklik (mobile/desktop) */}
                <p
                  className={`relative z-[1] mt-3 text-base text-white/90 leading-relaxed 
                              overflow-hidden transition-all duration-300 ease-out
                              ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                              group-hover:max-h-40 group-hover:opacity-100`}
                >
                  {desc}
                </p>

                <div
    className={`pointer-events-none absolute inset-x-0 -bottom-px h-[3px] transition
                bg-gradient-to-r from-transparent via-[var(--color-accent-500)] to-transparent
                ${isOpen ? "opacity-100" : "opacity-0"}
                group-hover:opacity-100`}
  />
              </article>
            );
          })}
        </div>

        {/* tombol show more — premium pill */}
        {items.length > initialCount && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold
                      text-white shadow-lg transition
                        focus:outline-none
                        [background:linear-gradient(135deg,var(--color-primary-700),var(--color-primary-600))]
                        hover:[background:linear-gradient(135deg,var(--color-primary-700),var(--color-accent-500))]
                        active:scale-[.99]"
            >
              <span>{showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua Fitur"}</span>
              <svg
                className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`}
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
