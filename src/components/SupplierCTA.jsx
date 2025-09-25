import { useI18n } from "../i18n/useI18n";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function SupplierCTA() {
  const { t } = useI18n();
  const bullets = t("supplier.bullets") || [];

  return (
    <section id="supplier" className="py-16 md:py-20 bg-slate-50">
      <div className="container-fluid">
        <div className="rounded-3xl bg-gradient-to-br from-primary-50 via-white to-accent-50/20 border border-primary-100 p-8 md:p-10 shadow-md">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Kolom Kiri: Info & Tombol Aksi */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-8 w-1.5 rounded-full bg-accent-500" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {t("supplier.title")}
                </h2>
              </div>
              <p className="mt-3 text-muted-600">{t("supplier.p")}</p>
              <ul className="mt-5 space-y-2 text-slate-700 list-disc pl-5">
                {bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://ironasia.com/"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 font-semibold text-white 
                             bg-gradient-to-r from-primary-700 to-primary-500 shadow-md 
                             transition-all duration-300 ease-in-out
                             hover:shadow-lg hover:-translate-y-1 
                             hover:bg-gradient-to-r hover:from-accent-600 hover:to-accent-500"
                >
                  {t("supplier.c1")}
                </a>
                <a
                  href="#faq"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold 
                             bg-slate-200 text-slate-800 
                             transition-all duration-300 ease-in-out
                             hover:shadow-md hover:-translate-y-1 
                             hover:bg-slate-300 hover:text-slate-900"
                >
                  <span>{t("supplier.c2")}</span>
                  <ArrowRightIcon className="size-4" />
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <span className="absolute -top-1 left-6 w-20 h-1.5 rounded-full bg-accent-500" />
              <h3 className="font-semibold">{t("supplier.title")}</h3>
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                <div>
                  <dt className="text-slate-500">{t("supplier.k1")}</dt>
                  <dd className="text-slate-900 font-semibold">{t("supplier.v1")}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">{t("supplier.k2")}</dt>
                  <dd className="text-slate-900 font-semibold">{t("supplier.v2")}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">{t("supplier.k3")}</dt>
                  <dd className="text-slate-900 font-semibold">{t("supplier.v3")}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">{t("supplier.k4")}</dt>
                  <dd className="text-slate-900 font-semibold">{t("supplier.v4")}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}