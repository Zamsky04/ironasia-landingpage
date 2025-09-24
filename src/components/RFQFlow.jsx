import { useState } from "react";
import { useI18n } from "../i18n/useI18n";

export default function RFQFlow() {
  const { tn } = useI18n();
  const steps = tn("rfq.steps") || [];

  const topCount = Math.ceil(steps.length / 2);
  const top = steps.slice(0, topCount);
  const bottom = steps.slice(topCount);

  // State dipakai khusus untuk mobile (desktop = hover-only)
  const [open, setOpen] = useState(new Set());
  const toggle = (i) =>
    setOpen((prev) => {
      const n = new Set(prev);
      n.has(i) ? n.delete(i) : n.add(i);
      return n;
    });

  const StepHeader = ({ i }) => (
    <div className="flex items-center gap-2 text-[11px] font-semibold text-primary-700">
      <span className="inline-flex items-center justify-center size-6 rounded-full bg-primary-50 text-primary-700 ring-1 ring-primary-200">
        {i + 1}
      </span>
      <span className="inline-block size-1.5 rounded-full bg-accent-600" />
      <span className="uppercase tracking-wide">Step {i + 1}</span>
    </div>
  );

  // Tinggi slot deskripsi agar kartu seragam (desktop)
  // Atur sesuai rata-rata 3–4 baris teks
  const DESC_SLOT_DESKTOP = "h-24"; // ~96px
  const DESC_SLOT_MOBILE  = "max-h-40"; // batas expand saat buka

  /* ======================= DESKTOP ITEM (HOVER-ONLY) ======================= */
  const DesktopItem = ({ globalIndex, title, desc }) => {
    return (
      <article
        className={[
          "group relative h-full rounded-2xl bg-white border border-blue-200",
          "shadow-sm hover:shadow-md transition-shadow duration-300",
          "focus-within:shadow-md"
        ].join(" ")}
      >
        <div className="flex h-full flex-col p-5 sm:p-6">
          <StepHeader i={globalIndex} />

          {/* Title dibatasi 2 baris supaya header seragam */}
          <h3 className="mt-2 text-base sm:text-lg font-semibold text-slate-900 line-clamp-2">
            {title}
          </h3>

          {/* Slot deskripsi punya tinggi FIXED -> tinggi kartu konstan.
              Saat tidak dihover: disembunyikan dengan opacity + translateY
              Saat hover: smooth fade+slide tanpa mengubah layout */}
          <div className={`mt-2 relative ${DESC_SLOT_DESKTOP} overflow-hidden`}>
            <p
              className={[
                "absolute inset-0 text-sm text-slate-600 leading-relaxed",
                "transition duration-300 ease-out",
                "opacity-0 translate-y-1",            // default tersembunyi
                "group-hover:opacity-100 group-hover:translate-y-0", // tampil saat hover
                "motion-reduce:transition-none"
              ].join(" ")}
            >
              {desc}
            </p>
          </div>

          {/* Aksen garis (muncul saat hover) — tidak memengaruhi tinggi */}
          <div
            className={[
              "mt-3 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent-500)] to-transparent",
              "transition-opacity duration-300 opacity-0 group-hover:opacity-100",
              "motion-reduce:transition-none"
            ].join(" ")}
          />
        </div>
      </article>
    );
  };

  return (
    <section id="alur" className="relative py-16 md:py-20 bg-slate-50">
      <div className="container-fluid">
        {/* heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-accent-50 text-accent-700 ring-1 ring-accent-200/60">
            <span className="inline-block size-2.5 rounded-full bg-accent-600" />
            {tn("rfq.badge") || "Alur Permintaan (RFQ)"}
          </span>
        </div>
        <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-center">
          {tn("rfq.title")}
        </h2>
        <p className="mt-2 text-muted-600 max-w-3xl mx-auto text-center">{tn("rfq.desc")}</p>

        {/* ======================= DESKTOP (2 ROWS) ======================= */}
        <div
          className="hidden lg:grid grid-rows-2 gap-x-7 gap-y-6 mt-10"
          style={{
            gridTemplateColumns: `repeat(${Math.max(top.length, bottom.length) || 1}, minmax(0,1fr))`
          }}
        >
          {/* Row 1 */}
          {top.map(([title, desc], idx) => (
            <div key={`t-${idx}`} className="row-start-1 h-full">
              <DesktopItem globalIndex={idx} title={title} desc={desc} />
            </div>
          ))}

          {/* Row 2 */}
          {bottom.map(([title, desc], idx) => {
            const gi = top.length + idx;
            return (
              <div key={`b-${idx}`} className="row-start-2 h-full">
                <DesktopItem globalIndex={gi} title={title} desc={desc} />
              </div>
            );
          })}
        </div>

        {/* ======================= MOBILE/TABLET ======================= */}
        <ol className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:hidden">
          {steps.map(([title, desc], i) => {
            const isOpen = open.has(i);
            return (
              <li key={i} className="h-full">
                <div className="relative h-full rounded-2xl border border-blue-200 bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`rfq-desc-${i}`}
                    className="w-full text-left px-5 py-5 sm:px-6 sm:py-6 flex flex-col"
                  >
                    <StepHeader i={i} />
                    <h3 className="mt-2 text-base sm:text-lg font-semibold text-slate-900 line-clamp-2">
                      {title}
                    </h3>
                  </button>

                  {/* Collapsible: tidak ambil ruang saat tertutup */}
                  <div
                    id={`rfq-desc-${i}`}
                    aria-hidden={!isOpen}
                    className={[
                      "px-5 pb-5 sm:px-6 sm:pb-6 -mt-2",
                      "overflow-hidden transition-all duration-300",
                      isOpen ? `${DESC_SLOT_MOBILE} opacity-100` : "max-h-0 opacity-0",
                      "motion-reduce:transition-none"
                    ].join(" ")}
                  >
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {desc}
                    </p>
                    <div
                      className={[
                        "mt-3 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent-500)] to-transparent",
                        "transition-opacity duration-300",
                        isOpen ? "opacity-100" : "opacity-0",
                        "motion-reduce:transition-none"
                      ].join(" ")}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
