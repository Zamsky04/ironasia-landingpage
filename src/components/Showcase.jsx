import { useI18n } from "../i18n/useI18n";
export default function Showcase() {
  const { t } = useI18n();
  return (
    <section id="showcase" className="py-16 md:py-20 bg-white">
      <div className="container-fluid">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">{t("show.title")}</h2>
            <p className="mt-3 text-muted-600">{t("show.p")}</p>
            <ul className="mt-5 space-y-2 text-sm text-muted-600 list-disc pl-5">
              <li>{t("show.a")}</li>
              <li>{t("show.b")}</li>
              <li>{t("show.c")}</li>
            </ul>
          </div>
          <div className="relative max-w-[560px] mx-auto w-full">
            <div className="rounded-3xl p-1 bg-white/70 border border-gray-200 shadow-xl">
              <div className="rounded-2xl bg-white p-6">
                <img src="/logo.png" alt="Logo IronAsia" className="h-20 w-auto mx-auto" loading="lazy" />
                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-muted-600">
                  <div className="rounded-xl border p-3">{t("show.a")}</div>
                  <div className="rounded-xl border p-3">{t("show.b")}</div>
                  <div className="rounded-xl border p-3">{t("show.c")}</div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 blur-3xl opacity-30 -inset-8 rounded-[2rem]" style={{background:'var(--color-primary-300)'}} />
          </div>
        </div>
      </div>
    </section>
  );
}
