import { useI18n } from "../i18n/useI18n";
export default function SupplierCTA() {
  const { t } = useI18n();
  const bullets = t("supplier.bullets") || [];
  return (
    <section id="supplier" className="py-16 md:py-20 bg-slate-50">
      <div className="container-fluid">
        <div className="rounded-3xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{t("supplier.title")}</h2>
              <p className="mt-2 text-muted-600">{t("supplier.p")}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
                {bullets.map((b,i)=><li key={i}>{b}</li>)}
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="https://ironasia.com/" className="btn-primary rounded-xl px-5 py-3 font-semibold text-white bg-primary-600 hover:opacity-95 transition">{t("supplier.c1")}</a>
                <a href="#faq" className="btn-outline rounded-xl px-5 py-3 font-semibold border border-gray-300 text-gray-800 hover:bg-gray-50 transition">{t("supplier.c2")}</a>
              </div>
            </div>
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <h3 className="font-semibold">{t("supplier.title")}</h3>
              <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div><dt className="text-slate-500">{t("supplier.k1")}</dt><dd className="text-slate-900 font-semibold">{t("supplier.v1")}</dd></div>
                <div><dt className="text-slate-500">{t("supplier.k2")}</dt><dd className="text-slate-900 font-semibold">{t("supplier.v2")}</dd></div>
                <div><dt className="text-slate-500">{t("supplier.k3")}</dt><dd className="text-slate-900 font-semibold">{t("supplier.v3")}</dd></div>
                <div><dt className="text-slate-500">{t("supplier.k4")}</dt><dd className="text-slate-900 font-semibold">{t("supplier.v4")}</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
