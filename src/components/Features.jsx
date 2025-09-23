import { useI18n } from "../i18n/useI18n";

export default function Features() {
  const { tn } = useI18n();
  const items = tn("features.list") || [];

  // 10 ikon (fallback -> ✨)
  const icons = [
    "🌐","🛡️","⚡","💰","🔄","📊","📦","🤝","🔔","🏆",
  ];

  return (
    <section
      id="fitur"
      className="relative py-16 md:py-20 bg-white ia-watermark"
      data-pos="center"
      data-size="lg"
    >
      {/* garis pemisah halus di atas */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200/70 to-transparent"
        aria-hidden
      />

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
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map(([title, desc], idx) => (
            <article
              key={idx}
              className="relative card hover:shadow-lg hover:-translate-y-1 transition
                         ring-1 ring-gray-200/70 hover:ring-primary-300/80"
            >
              {/* icon circle */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 sm:mb-4
                           ring-1 ring-primary-200/70"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary-50), var(--color-accent-50))",
                  color: "var(--color-primary-700)",
                }}
              >
                <span aria-hidden className="text-base sm:text-lg">
                  {icons[idx] || "✨"}
                </span>
              </div>

              {/* text */}
              <h3 className="font-semibold text-base sm:text-lg">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-600">{desc}</p>

              {/* underline gradient halus saat hover */}
              <div
                className="pointer-events-none mt-4 h-px bg-gradient-to-r from-transparent via-primary-200/50 to-transparent
                           opacity-0 group-hover:opacity-100 transition"
              />
            </article>
          ))}
        </div>

        {/* garis penutup halus di bawah */}
        <div
          className="mt-10 h-px bg-gradient-to-r from-transparent via-accent-200/70 to-transparent"
          aria-hidden
        />
      </div>
    </section>
  );
}
