  import { useI18n } from "../i18n/useI18n";
  import { CheckCircleIcon, LockClosedIcon, BoltIcon } from '@heroicons/react/24/solid';    

  export default function Hero() {
    const { t } = useI18n();

    return (
      <section
        className="relative overflow-hidden ia-watermark"
        data-pos="center"
        data-size="lg"
        style={{ background: "var(--gradient-hero)" }}
        aria-label="Hero"
      >
        <div className="container-fluid py-16 sm:py-20 md:py-28 text-white">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            
            {/* KIRI: Gambar animasi maskot + dekor */}
            <div className="relative max-w-[520px] mx-auto w-full">
              {/* Maskot */}
              <img
                src="/animasi.png"
                alt="Maskot RFQ IronAsia"
                className="relative z-10 w-full h-auto max-h-[420px] object-contain drop-shadow-2xl"
                loading="lazy"
              />

              <img
                src="/decor/helmet.png"
                alt=""
                className="pointer-events-none select-none absolute -left-6 top-6 w-16 sm:w-20 opacity-90 animate-float-slow"
                aria-hidden="true"
              />
              <img
                src="/decor/gear.png"
                alt=""
                className="pointer-events-none select-none absolute -right-6 top-2 w-14 sm:w-16 opacity-90 animate-spin-slower"
                aria-hidden="true"
              />
              <img
                src="/decor/hbeam.png"
                alt=""
                className="pointer-events-none select-none absolute -left-10 bottom-8 w-28 sm:w-32 opacity-95 animate-bob"
                aria-hidden="true"
              />
              <img
                src="/decor/blueprint.png"
                alt=""
                className="pointer-events-none select-none absolute -right-10 bottom-6 w-24 sm:w-28 opacity-95 animate-float-fast"
                aria-hidden="true"
              />
            </div>

            {/* KANAN: teks */}
            <div className="z-context">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs mb-4">
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full"
                  style={{ background: "var(--color-accent-500)" }}
                />
                <span>{t("hero.badge")}</span>
              </div>

              <h1 className="text-[2rem] leading-tight sm:text-5xl font-extrabold">
                {t("hero.h1a")}
                <br />
                <span className="text-white/90">{t("hero.h1b")}</span>
              </h1>

              <p className="mt-4 text-white/85 max-w-2xl">{t("hero.p")}</p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://ironasia.com/"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white text-primary-700 hover:opacity-95 transition btn-primary"
                >
                  {t("hero.cta1")}
                </a>
                <a
                  href="#download"
                  className="btn-ghost-white inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border border-white/60 text-white hover:bg-white/10 transition"
                >
                  {t("hero.cta2")}
                </a>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/85 text-sm">
                <div className="flex items-center gap-1.5">
                  <CheckCircleIcon className="size-4" />
                  <span>{t("hero.trust1")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <LockClosedIcon className="size-4" />
                  <span>{t("hero.trust2")}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BoltIcon className="size-4" />
                  <span>{t("hero.trust3")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <svg
          className="hidden sm:block absolute -bottom-px left-0 w-full pointer-events-none"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#fff"
            d="M0,64L60,48C120,32,240,0,360,0C480,0,600,32,720,48C840,64,960,64,1080,53.3C1200,43,1320,21,1380,10.7L1440,0L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
          />
        </svg>
      </section>
    );
  }
