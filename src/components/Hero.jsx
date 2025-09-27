import { useI18n } from "../i18n/useI18n";
import { CheckCircleIcon, LockClosedIcon, BoltIcon } from "@heroicons/react/24/solid";

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

            {/* CTA + Badge Store (versi merah-oranye) */}
            <div className="mt-6 sm:mt-8">
              <a
                href="https://ironasia.com/"
                className="
                  group inline-flex items-center gap-2
                  rounded-2xl px-6 py-3.5 font-semibold
                  text-white
                  bg-gradient-to-r from-red-500 via-orange-500 to-red-600
                  shadow-lg shadow-black/20 ring-1 ring-black/10
                  hover:from-red-600 hover:to-orange-500
                  hover:-translate-y-0.5 active:translate-y-0
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300/70
                  transition
                "
                aria-label="Open Marketplace"
              >
                <BoltIcon className="size-5 opacity-90 group-hover:opacity-100" />
                <span>{t("hero.cta1")}</span>
              </a>

              {/* Badge store */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.your.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play"
                  className="inline-flex"
                >
                  <img
                    src="/assets/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width={180}
                    height={54}
                    loading="lazy"
                    className="h-12 w-auto hover:opacity-95 transition"
                  />
                </a>

                {/* App Store */}
                <a
                  href="https://apps.apple.com/app/id0000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on the App Store"
                  className="inline-flex"
                >
                  <img
                    src="/assets/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={160}
                    height={54}
                    loading="lazy"
                    className="h-12 w-auto hover:opacity-95 transition"
                  />
                </a>
              </div>
            </div>
            {/* Trust icons */}
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

      {/* Wave bottom separator */}
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
