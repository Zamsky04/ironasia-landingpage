// src/components/LanguageSwitcher.jsx
import { useI18n } from "../i18n/useI18n";

// Map bahasa -> negara (ISO-3166 alpha-2)
const langToCountry = {
  id: "id",
  en: "gb", // atau "us" kalau mau
  zh: "cn",
  // contoh tambahan: ja: "jp", ar: "sa", de: "de", fr: "fr"
};

const FlagBtn = ({ cc, active, onClick, label }) => (
  <button
    onClick={onClick}
    aria-label={label}
    title={label}
    className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border transition
      ${active ? "border-primary-300 bg-primary-50" : "border-gray-200 hover:bg-gray-50"}`}
  >
    {/* kelas dari flag-icons */}
    <span className={`fi fi-${cc} rounded`} style={{ width: 20, height: 20 }} />
  </button>
);

export default function LanguageSwitcher() {
  const { lang, setLang, LANGS } = useI18n();

  return ( 
    <div className="flex items-center gap-2">
      {Object.keys(LANGS).map((lng) => {
        const cc = langToCountry[lng] || "id";
        return (
          <FlagBtn
            key={lng}
            cc={cc}
            label={LANGS[lng].label}
            active={lang === lng}
            onClick={() => setLang(lng)}
          />
        );
      })}
    </div>
  );
}
