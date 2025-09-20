import { useI18n } from "../i18n/useI18n";
export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden" style={{ background:"var(--gradient-hero)" }} aria-label="Hero">
      <div className="container-fluid py-16 sm:py-20 md:py-28 text-white">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs mb-4">
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{background:'var(--color-accent-500)'}} />
              <span>{t("hero.badge")}</span>
            </div>
            <h1 className="text-[2rem] leading-tight sm:text-5xl font-extrabold">{t("hero.h1a")}<br/><span className="text-white/90">{t("hero.h1b")}</span></h1>
            <p className="mt-4 text-white/85 max-w-2xl">{t("hero.p")}</p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
              <a href="http://45.158.10.75:8989/" className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white text-primary-700 hover:opacity-95 transition btn-primary">{t("hero.cta1")}</a>
              <a href="#download" className="btn-ghost-white inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-white/60 text-white hover:bg-white/10 transition">{t("hero.cta2")}</a>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/85 text-sm">
              <div className="flex items-center gap-2"><span>✅</span>{t("hero.trust1")}</div>
              <div className="flex items-center gap-2"><span>🔒</span>{t("hero.trust2")}</div>
              <div className="flex items-center gap-2"><span>⚡</span>{t("hero.trust3")}</div>
            </div>
          </div>
          <div className="relative max-w-[560px] mx-auto w-full">
            <div className="absolute -inset-6 rounded-3xl bg-white/10 blur-2xl" />
            <div className="relative rounded-3xl p-1 bg-white/10 border border-white/20">
              <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl">
                <img src="/logo.png" alt="Logo IronAsia" className="h-16 sm:h-20 w-auto mx-auto" loading="lazy" />
                <p className="mt-4 text-center text-sm sm:text-base text-gray-600">{t("hero.quote")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg className="hidden sm:block absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path fill="#fff" d="M0,64L60,48C120,32,240,0,360,0C480,0,600,32,720,48C840,64,960,64,1080,53.3C1200,43,1320,21,1380,10.7L1440,0L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"/>
      </svg>
    </section>
  );
}
