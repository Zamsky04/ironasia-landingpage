import { useState } from "react";
import { useI18n } from "../i18n/useI18n";
import { GlobeAltIcon, ShieldCheckIcon, BoltIcon, BanknotesIcon, ArrowPathIcon, ChartBarIcon, ArchiveBoxIcon, UserGroupIcon, BellIcon, TrophyIcon } from '@heroicons/react/24/outline';

export default function Features() {
  const { tn } = useI18n();
  const items = tn("features.list") || [];

  const icons = [
    GlobeAltIcon, ShieldCheckIcon, BoltIcon, BanknotesIcon, ArrowPathIcon, 
    ChartBarIcon, ArchiveBoxIcon, UserGroupIcon, BellIcon, TrophyIcon
  ];

  const [showAll, setShowAll] = useState(false);
  const initialCount = 6;
  const visibleItems = showAll ? items : items.slice(0, initialCount);

  const [expanded, setExpanded] = useState(new Set());
  const toggleExpanded = (i) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <section
      id="fitur"
      className="relative py-16 md:py-20 bg-gradient-to-t from-primary-300 to-white"
    >
      <div className="container-fluid">
        <div className="text-center">
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900">
            {tn("features.title")}
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            {tn("features.desc")}
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {visibleItems.map(([title, desc], idx) => {
            const isOpen = expanded.has(idx);
            const Icon = icons[idx] || TrophyIcon;
            
            return (
              <article
                key={idx}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onClick={() => toggleExpanded(idx)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleExpanded(idx)}
                className="group relative rounded-2xl p-6 sm:p-7 bg-white border border-slate-200
                           shadow-lg transition-all duration-300 ease-out cursor-pointer
                           hover:shadow-xl hover:-translate-y-1.5"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center justify-center size-12 rounded-xl 
                                  bg-primary-100 ring-4 ring-primary-50
                                  transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-6 text-primary-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-lg sm:text-xl text-slate-800">{title}</h3>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out
                            ${isOpen 
                              ? "max-h-60 opacity-100 mt-4" 
                              : "max-h-0 opacity-0 mt-0 group-hover:max-h-60 group-hover:opacity-100 group-hover:mt-4"
                            }`}
                >
                  <p className="text-base text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </article>
            );
          })}
        </div>

        {items.length > initialCount && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 font-semibold
                          bg-white text-primary-700 border border-slate-300 shadow-md
                          transition-all duration-200
                          hover:bg-primary-50 hover:border-primary-300 hover:shadow-lg hover:-translate-y-0.5
                          active:scale-[.98]"
            >
              <span>{showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua Fitur"}</span>
              <svg
                className={`size-4 transition-transform ${showAll ? "rotate-180" : ""}`}
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}