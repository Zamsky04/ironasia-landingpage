import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { useI18n } from "../i18n/useI18n";
import { api } from "../lib/api";


const commonDomainTypos = {
  "gamil.com": "gmail.com",
  "gmial.com": "gmail.com",
  "gmaill.com": "gmail.com",
  "gmail.co": "gmail.com",
  "gmail.con": "gmail.com",
  "gmail.cim": "gmail.com",
  "gmail.cmo": "gmail.com",
  "gmail.om": "gmail.com",
  "gmai.com": "gmail.com",
  "gmal.com": "gmail.com",
  "gmil.com": "gmail.com",
  "gmaik.com": "gmail.com",
  "gmaul.com": "gmail.com",
  "gmaiil.com": "gmail.com",
  "gmaill.co": "gmail.com",
  "yaho.com": "yahoo.com",
  "yaoo.com": "yahoo.com",
  "yahho.com": "yahoo.com",
  "outllok.com": "outlook.com",
  "outlook.co": "outlook.com",
  "outlook.con": "outlook.com",
  "hotmial.com": "hotmail.com",
  "hotmail.co": "hotmail.com",
  "hotmail.con": "hotmail.com",
  "iclod.com": "icloud.com",
  "icoud.com": "icloud.com",
  "icloud.co": "icloud.com",
  "protonmai.com": "protonmail.com",
  "protonmail.co": "protonmail.com",
  "proton.me.com": "proton.me",
};

const POPULAR_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
  "proton.me",
  "protonmail.com",
];

function dld(a, b, limit = 2) {
  const al = a.length, bl = b.length;
  if (Math.abs(al - bl) > limit) return limit + 1;
  const dp = Array.from({ length: al + 1 }, (_, i) =>
    Array.from({ length: bl + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= al; i++) {
    for (let j = 1; j <= bl; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + 1);
      }
    }
  }
  return dp[al][bl];
}

function looksCorporateDomain(domain) {
  const d = domain.toLowerCase();
  const dotCount = (d.match(/\./g) || []).length;
  if (dotCount >= 2) return true;
  const corporateTlds = ["co.id", "ac.id", "or.id", "co.uk", "com.au", "co.jp"];
  return corporateTlds.some((tld) => d.endsWith(tld));
}

function bestDomainSuggestion(domain) {
  const d = domain.toLowerCase();
  if (commonDomainTypos[d]) return commonDomainTypos[d];
  if (!looksCorporateDomain(d)) {
    let best = null;
    let bestDist = 3;
    for (const cand of POPULAR_DOMAINS) {
      const dist = dld(d, cand, 3);
      if (dist < bestDist) {
        bestDist = dist;
        best = cand;
      }
    }
    if (best) return best;
  }
  return null;
}

function normalizeEmailInput(raw) {
  return String(raw || "")
    .replace(/[\u200B-\u200D\uFEFF\u00A0]/g, "")
    .trim();
}

function validateEmailWithHints(value) {
  const v = normalizeEmailInput(value);

  if (!v) return { error: "Email tidak boleh kosong." };
  if (/\s/.test(v)) return { error: "Email tidak boleh mengandung spasi." };

  const atCount = (v.match(/@/g) || []).length;
  if (atCount !== 1) return { error: "Format email tidak valid (tanda @ ganda atau tidak ada)." };

  const [local, domain] = v.split("@");
  if (!local || !domain) return { error: "Format email tidak valid (sebelum/sesudah @ kosong)." };

  if (/[<>\u005B\u005D(),;:\\"]/g.test(v)) {
    return { error: "Email mengandung karakter yang tidak diizinkan." };
    }

  if (!/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(local)) {
    return { error: "Bagian sebelum @ mengandung karakter tidak valid." };
  }
  if (local.startsWith(".") || local.endsWith(".") || local.includes("..")) {
    return { error: "Bagian sebelum @ tidak boleh diawali/diakhiri titik atau mengandung dua titik berurutan." };
  }

  if (domain.startsWith(".") || domain.endsWith(".")) {
    return { error: "Domain tidak boleh diawali/diakhiri titik." };
  }
  if (domain.includes("..")) {
    return { error: "Domain tidak boleh mengandung dua titik berurutan." };
  }
  if (!domain.includes(".")) {
    return { error: "Nama domain tidak valid. Gunakan domain dengan titik (mis. perusahaan.co.id)." };
  }

  if (domain.length > 253) {
    return { error: "Nama domain terlalu panjang." };
  }

  const labels = domain.split(".");
  for (const label of labels) {
    if (label.length === 0) return { error: "Domain memiliki label kosong." };
    if (label.length > 63) return { error: "Salah satu label domain terlalu panjang (>63)." };
    if (!/^[A-Za-z0-9-]+$/.test(label)) return { error: "Domain mengandung karakter tidak valid." };
    if (label.startsWith("-") || label.endsWith("-")) {
      return { error: "Label domain tidak boleh diawali/diakhiri tanda minus (-)." };
    }
  }

  const tld = labels[labels.length - 1];
  const isPunycode = tld.toLowerCase().startsWith("xn--");
  const isAlphaMin2 = /^[A-Za-z]{2,}$/.test(tld);
  if (!(isPunycode || isAlphaMin2)) {
    return { error: "Ekstensi domain (TLD) tidak valid. Contoh: .com, .co.id, .id, .org." };
  }

  const suggestion = bestDomainSuggestion(domain);
  if (suggestion && suggestion !== domain.toLowerCase()) {
    return {
      error: "",
      hint: `Sepertinya maksud Anda ${suggestion}?`,
      suggested: `${local}@${suggestion}`,
    };
  }

  return { error: "" };
}

/* ================== Komponen ================== */

const COOLDOWN_SECONDS = 60;
const COOLDOWN_KEY = "helpCooldownUntil";
const COOLDOWN_EMAIL_KEY = "helpCooldownEmail";

export default function Help() {
  const { t } = useI18n();
  const helpRef = useRef(null);
  const fileRef = useRef(null);

  const [subjekOptions, setSubjekOptions] = useState([]);

  const [form, setForm] = useState({
    nama: "",
    email: "",
    subjek_id: "",
    message: "",
    picture: null,
    hp_topic: "", // honeypot anti-bot 
  });

  const [touched, setTouched] = useState({
    nama: false,
    email: false,
    subjek_id: false,
    message: false,
  });

  const [busy, setBusy] = useState(false);

  const [emailErr, setEmailErr] = useState("");
  const [emailHint, setEmailHint] = useState(null);
  const [emailSuggested, setEmailSuggested] = useState(null);

  const [cooldownLeft, setCooldownLeft] = useState(0);

  const isEmpty = (v) => String(v ?? "").trim() === "";
  const baseInput = "h-10 w-full rounded-xl border px-3 text-slate-700";
  const redIf = (cond) => (cond ? " border-rose-400 ring-1 ring-rose-200" : " border-slate-200");

  const markTouched = (k) => setTouched((t) => ({ ...t, [k]: true }));
  const stayOnSection = () => helpRef.current?.scrollIntoView({ behavior: "auto", block: "center" });

  const runEmailValidation = (value) => {
    const { error, hint, suggested } = validateEmailWithHints(value);
    setEmailErr(error || "");
    setEmailHint(hint || null);
    setEmailSuggested(suggested || null);
    return !error;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setForm((f) => ({ ...f, email: value }));
    if (touched.email) {
      runEmailValidation(value);
    } else {
      setEmailErr("");
      setEmailHint(null);
      setEmailSuggested(null);
    }
  };

  const handleEmailBlur = () => {
    setTouched((t) => ({ ...t, email: true }));
    runEmailValidation(form.email);
  };

  const applyEmailSuggestion = () => {
    if (!emailSuggested) return;
    setForm((f) => ({ ...f, email: emailSuggested }));
    runEmailValidation(emailSuggested);
  };

  useEffect(() => {
    const fetchSubjek = async () => {
      try {
        const { data } = await api.get("/subjek");
        if (Array.isArray(data)) setSubjekOptions(data);
      } catch (error) {
        console.error("Failed to fetch subjects:", error);
      }
    };
    fetchSubjek();
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const until = Number(localStorage.getItem(COOLDOWN_KEY) || 0);
      const left = Math.max(0, Math.floor((until - now) / 1000));
      setCooldownLeft(left);
      if (left === 0) {
        localStorage.removeItem(COOLDOWN_EMAIL_KEY);
      }
    };
    tick();
    const id = setInterval(tick, 500);
    return () => clearInterval(id);
  }, []);

  const startCooldown = (email) => {
    const until = Date.now() + COOLDOWN_SECONDS * 1000;
    localStorage.setItem(COOLDOWN_KEY, String(until));
    localStorage.setItem(COOLDOWN_EMAIL_KEY, String(email || ""));
    setCooldownLeft(COOLDOWN_SECONDS);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // honeypot: jika terisi -> drop silently
    if (form.hp_topic && form.hp_topic.trim().length > 0) {
      return;
    }

    // cooldown UI
    const lastEmail = localStorage.getItem(COOLDOWN_EMAIL_KEY) || "";
    if (cooldownLeft > 0 && lastEmail && lastEmail === form.email.trim()) {
      await Swal.fire({
        icon: "info",
        title: "Tunggu sebentar",
        text: `Anda baru saja mengirim tiket. Coba lagi dalam ${cooldownLeft} detik.`,
        target: helpRef.current || "#help",
        returnFocus: false,
        heightAuto: false,
      });
      stayOnSection();
      return;
    }

    setTouched({ nama: true, email: true, subjek_id: true, message: true });

    const baseMissing = isEmpty(form.nama) || isEmpty(form.subjek_id) || isEmpty(form.message);
    const emailOk = runEmailValidation(form.email);

    if (baseMissing || !emailOk) {
      await Swal.fire({
        icon: "warning",
        title: t("help.form.validation.title") || "Lengkapi data",
        text: t("help.form.validation.text") || "Pastikan semua field bertanda * terisi dan email valid.",
        target: helpRef.current || "#help",
        returnFocus: false,
        heightAuto: false,
      });
      stayOnSection();
      return;
    }

    setBusy(true);

    Swal.fire({
      title: t("help.form.submitting") || "Mengirim...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => Swal.showLoading(),
      target: helpRef.current || "#help",
      returnFocus: false,
      heightAuto: false,
    });

    const fd = new FormData();
    fd.append("nama", form.nama);
    fd.append("email", form.email);
    fd.append("subjek_id", form.subjek_id);
    fd.append("message", form.message);
    if (form.picture) fd.append("picture", form.picture);
    fd.append("_client_ts", String(Date.now()));

    try {
      await api.post("/help", fd, { headers: { "Content-Type": "multipart/form-data" } });

      Swal.close();

      await Swal.fire({
        icon: "success",
        title: t("help.form.success.title") || "Terkirim!",
        text: t("help.form.success.text") || "Tiket bantuan Anda telah kami terima.",
        confirmButtonText: "OK",
        target: helpRef.current || "#help",
        returnFocus: false,
        heightAuto: false,
      });

      startCooldown(form.email.trim());

      setForm({ nama: "", email: "", subjek_id: "", message: "", picture: null, hp_topic: "" });
      setTouched({ nama: false, email: false, subjek_id: false, message: false });
      setEmailErr("");
      setEmailHint(null);
      setEmailSuggested(null);
      if (fileRef.current) fileRef.current.value = "";
    } catch (err) {
      console.error("Help request failed:", err);
      Swal.close();
      await Swal.fire({
        icon: "error",
        title: t("help.form.error.title") || "Gagal mengirim",
        text: err?.response?.data?.message || t("help.form.error.text") || "Silakan coba lagi.",
        confirmButtonText: "Tutup",
        target: helpRef.current || "#help",
        returnFocus: false,
        heightAuto: false,
      });
    } finally {
      setBusy(false);
      stayOnSection();
    }
  };

  return (
    <section id="help" ref={helpRef} className="py-16 md:py-20 bg-white">
      <div className="container-fluid max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {t("help.title") || "Butuh Bantuan?"}
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            {t("help.subtitle") ||
              "Tim kami siap membantu. Isi formulir di bawah ini dan kami akan segera menghubungi Anda."}
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <form onSubmit={onSubmit} className="space-y-6 bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-200">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* NAMA */}
              <div>
                <label htmlFor="help_nama" className="block text-sm font-medium text-slate-700 mb-1">
                  {t("help.form.name") || "Nama"}*
                </label>
                <input
                  id="help_nama"
                  name="nama"
                  value={form.nama}
                  onChange={(e) => setForm((f) => ({ ...f, nama: e.target.value }))}
                  onBlur={() => markTouched("nama")}
                  className={`${baseInput}${redIf(touched.nama && isEmpty(form.nama))}`}
                  placeholder={t("help.form.name_placeholder") || "Nama Anda / PIC"}
                />
                {touched.nama && isEmpty(form.nama) && (
                  <p className="mt-1 text-xs text-rose-600">{t("help.form.validation.name") || "Nama wajib diisi."}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label htmlFor="help_email" className="block text-sm font-medium text-slate-700 mb-1">
                  {t("help.form.email") || "Email"}*
                </label>
                <input
                  type="email"
                  id="help_email"
                  name="email"
                  value={form.email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  className={`${baseInput}${redIf(touched.email && !!emailErr)}`}
                  placeholder={t("help.form.email_placeholder") || "nama@perusahaan.com"}
                  autoComplete="email"
                  inputMode="email"
                />
                {touched.email && (
                  <div className="mt-1 text-xs">
                    {emailErr ? (
                      <p className="text-rose-600">{emailErr}</p>
                    ) : emailHint ? (
                      <div className="flex items-center gap-2 text-amber-700">
                        <span>{emailHint}</span>
                        {emailSuggested && (
                          <button
                            type="button"
                            onClick={applyEmailSuggestion}
                            className="px-2 py-0.5 rounded-md border border-amber-300 text-amber-800 hover:bg-amber-50"
                          >
                            Perbaiki
                          </button>
                        )}
                      </div>
                    ) : (
                      <p className="text-emerald-600">Format email terlihat valid.</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* SUBJEK */}
            <div>
              <label htmlFor="help_subjek" className="block text-sm font-medium text-slate-700 mb-1">
                {t("help.form.subject") || "Subjek"}*
              </label>
              <select
                id="help_subjek"
                name="subjek_id"
                value={form.subjek_id}
                onChange={(e) => setForm((f) => ({ ...f, subjek_id: e.target.value }))}
                onBlur={() => markTouched("subjek_id")}
                className={`${baseInput}${redIf(touched.subjek_id && isEmpty(form.subjek_id))}`}
              >
                <option value="">{t("help.form.subject_placeholder") || "Pilih subjek"}</option>
                {subjekOptions.map((s) => (
                  <option key={s.id} value={s.id}>{s.subjek}</option>
                ))}
              </select>
              {touched.subjek_id && isEmpty(form.subjek_id) && (
                <p className="mt-1 text-xs text-rose-600">{t("help.form.validation.subject") || "Subjek wajib dipilih."}</p>
              )}
            </div>

            {/* LAMPIRAN */}
            <div>
              <label htmlFor="help_picture" className="block text-sm font-medium text-slate-700 mb-1">
                {t("help.form.attachment") || "Lampiran (opsional)"}
              </label>
              <input
                ref={fileRef}
                type="file"
                id="help_picture"
                name="picture"
                onChange={(e) => setForm((f) => ({ ...f, picture: e.target.files?.[0] ?? null }))}
                className="h-10 w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
              />
            </div>

            {/* PESAN */}
            <div>
              <label htmlFor="help_message" className="block text-sm font-medium text-slate-700 mb-1">
                {t("help.form.message") || "Pesan"}*
              </label>
              <textarea
                id="help_message"
                name="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                onBlur={() => markTouched("message")}
                className={`w-full rounded-xl border px-3 py-2${redIf(touched.message && isEmpty(form.message))}`}
                placeholder={t("help.form.message_placeholder") || "Jelaskan kendala Anda…"}
              />
              {touched.message && isEmpty(form.message) && (
                <p className="mt-1 text-xs text-rose-600">{t("help.form.validation.message") || "Pesan wajib diisi."}</p>
              )}
            </div>

            {/* Honeypot anti-bot (hidden) */}
            <div aria-hidden="true" className="hidden">
              <label htmlFor="hp_topic">Jangan diisi</label>
              <input
                id="hp_topic"
                name="hp_topic"
                autoComplete="off"
                tabIndex={-1}
                value={form.hp_topic}
                onChange={(e) => setForm((f) => ({ ...f, hp_topic: e.target.value }))}
              />
            </div>

            {/* SUBMIT */}
            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={busy || cooldownLeft > 0}
                className="flex-1 inline-flex items-center justify-center rounded-xl px-6 py-3.5 font-semibold text-white bg-blue-600 shadow-md transition-all duration-200 hover:bg-blue-700 active:translate-y-px disabled:opacity-50"
              >
                {busy
                  ? (t("help.form.submitting") || "Mengirim...")
                  : cooldownLeft > 0
                    ? `Tunggu ${cooldownLeft}s`
                    : (t("help.form.submit") || "Kirim Tiket Bantuan")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
