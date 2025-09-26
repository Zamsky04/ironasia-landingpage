// src/components/DemoRequest.jsx
import { useRef, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useI18n } from "../i18n/useI18n";
import { api } from "../lib/api";

const formatDate = (val) => {
  if (!val) return "";
  const d = new Date(val);
  if (isNaN(d)) return val;
  return d.toISOString().slice(0, 10);
};

/* ============== Email validation & typo detection (strict + fuzzy) ============== */

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

/* ================= Komponen ================= */

const COOLDOWN_SECONDS = 60;
const COOLDOWN_KEY = "demoCooldownUntil";
const COOLDOWN_EMAIL_KEY = "demoCooldownEmail";

export default function DemoRequest() {
  const { t } = useI18n();
  const demoRef = useRef(null);

  const [form, setForm] = useState({
    nama: "",
    email: "",
    message: "",
    jenis_demo: "ONLINE",
    prefered_date: "",
    prefered_time: "",
    hp_topic: "", // honeypot anti-bot
  });

  const [touched, setTouched] = useState({});
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState(null);

  // email state
  const [emailErr, setEmailErr] = useState("");
  const [emailHint, setEmailHint] = useState(null);
  const [emailSuggested, setEmailSuggested] = useState(null);

  // cooldown
  const [cooldownLeft, setCooldownLeft] = useState(0);

  const isEmpty = (v) => String(v ?? "").trim() === "";
  const baseInput = "h-10 w-full rounded-xl border px-3";
  const redIf = (cond) => (cond ? " border-rose-400 ring-1 ring-rose-200" : " border-slate-200");

  const stayOnDemo = () => demoRef.current?.scrollIntoView({ behavior: "auto", block: "start" });

  // email validation handlers
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
    if (touched.email) runEmailValidation(value);
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

  // cooldown init
  useEffect(() => {
    const tick = () => {
      const until = Number(localStorage.getItem(COOLDOWN_KEY) || 0);
      const left = Math.max(0, Math.floor((until - Date.now()) / 1000));
      setCooldownLeft(left);
      if (left === 0) localStorage.removeItem(COOLDOWN_EMAIL_KEY);
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

    // honeypot
    if (form.hp_topic) return;

    // cooldown (per email)
    const lastEmail = localStorage.getItem(COOLDOWN_EMAIL_KEY) || "";
    if (cooldownLeft > 0 && lastEmail === form.email.trim()) {
      await Swal.fire({
        icon: "info",
        title: "Tunggu sebentar",
        text: `Anda baru saja mengirim permintaan. Coba lagi dalam ${cooldownLeft} detik.`,
        target: demoRef.current || "#demo",
        returnFocus: false,
        heightAuto: false,
      });
      stayOnDemo();
      return;
    }

    // validasi wajib
    const missing =
      isEmpty(form.nama) ||
      isEmpty(form.email) ||
      isEmpty(form.jenis_demo) ||
      isEmpty(form.prefered_date) ||
      isEmpty(form.prefered_time) ||
      isEmpty(form.message);

    const emailOk = runEmailValidation(form.email);

    if (missing || !emailOk) {
      await Swal.fire({
        icon: "warning",
        title: "Lengkapi data",
        text: "Pastikan semua field bertanda * terisi dan email valid.",
        target: demoRef.current || "#demo",
        returnFocus: false,
        heightAuto: false,
      });
      stayOnDemo();
      return;
    }

    setBusy(true);
    setStatus(null);

    Swal.fire({
      title: "Mengirim...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => Swal.showLoading(),
      target: demoRef.current || "#demo",
      returnFocus: false,
      heightAuto: false,
    });

    try {
      await api.post("/demo", {
        ...form,
        prefered_date: formatDate(form.prefered_date),
      });

      Swal.close();
      await Swal.fire({
        icon: "success",
        title: "Terkirim!",
        text: "Tim kami akan segera menghubungi Anda.",
        confirmButtonText: "OK",
        target: demoRef.current || "#demo",
        returnFocus: false,
        heightAuto: false,
      });

      startCooldown(form.email.trim());

      setForm({
        nama: "",
        email: "",
        message: "",
        jenis_demo: "ONLINE",
        prefered_date: "",
        prefered_time: "",
        hp_topic: "",
      });
      setTouched({});
      setEmailErr("");
      setEmailHint(null);
      setEmailSuggested(null);
      setStatus("success");
    } catch (err) {
      console.error("Create demo failed:", err);
      Swal.close();
      await Swal.fire({
        icon: "error",
        title: "Gagal mengirim",
        text: err?.response?.data?.message || "Silakan coba lagi.",
        confirmButtonText: "Tutup",
        target: demoRef.current || "#demo",
        returnFocus: false,
        heightAuto: false,
      });
      setStatus("error");
    } finally {
      setBusy(false);
      stayOnDemo();
    }
  };

  return (
    <section id="demo" ref={demoRef} className="py-16 md:py-20 bg-slate-50">
      <div className="container-fluid max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {t("demo.title") || "Request a Demo"}
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            {t("demo.subtitle") || "Isi formulir di bawah ini dan tim kami akan menghubungi Anda."}
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <form onSubmit={onSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            {/* Nama */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Nama Perusahaan*</label>
              <input
                value={form.nama}
                onChange={(e) => setForm((f) => ({ ...f, nama: e.target.value }))}
                onBlur={() => setTouched((t) => ({ ...t, nama: true }))}
                className={baseInput + redIf(touched.nama && isEmpty(form.nama))}
                placeholder="Nama Perusahaan"
              />
              {touched.nama && isEmpty(form.nama) && (
                <p className="mt-1 text-xs text-rose-600">Nama Perusahaan wajib diisi.</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Email*</label>
              <input
                type="email"
                value={form.email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                className={baseInput + redIf(touched.email && !!emailErr)}
                placeholder="nama@perusahaan.com"
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

            {/* Jenis + Tanggal + Jam */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700">Jenis Demo*</label>
                <select
                  value={form.jenis_demo}
                  onChange={(e) => setForm((f) => ({ ...f, jenis_demo: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, jenis_demo: true }))}
                  className={baseInput + redIf(touched.jenis_demo && isEmpty(form.jenis_demo))}
                >
                  <option value="ONLINE">ONLINE</option>
                  <option value="OFFLINE">OFFLINE</option>
                </select>
                {touched.jenis_demo && isEmpty(form.jenis_demo) && (
                  <p className="mt-1 text-xs text-rose-600">Jenis wajib dipilih.</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Tanggal*</label>
                <input
                  type="date"
                  value={form.prefered_date}
                  onChange={(e) => setForm((f) => ({ ...f, prefered_date: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, prefered_date: true }))}
                  className={baseInput + redIf(touched.prefered_date && isEmpty(form.prefered_date))}
                />
                {touched.prefered_date && isEmpty(form.prefered_date) && (
                  <p className="mt-1 text-xs text-rose-600">Tanggal wajib diisi.</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Jam*</label>
                <input
                  type="time"
                  value={form.prefered_time}
                  onChange={(e) => setForm((f) => ({ ...f, prefered_time: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, prefered_time: true }))}
                  className={baseInput + redIf(touched.prefered_time && isEmpty(form.prefered_time))}
                />
                {touched.prefered_time && isEmpty(form.prefered_time) && (
                  <p className="mt-1 text-xs text-rose-600">Jam wajib diisi.</p>
                )}
              </div>
            </div>

            {/* Pesan */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Pesan*</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                className={
                  "min-h-[96px] w-full rounded-xl border px-3 py-2" +
                  (touched.message && isEmpty(form.message)
                    ? " border-rose-400 ring-1 ring-rose-200"
                    : " border-slate-200")
                }
                placeholder="Tuliskan konteks kebutuhan demo Anda…"
              />
              {touched.message && isEmpty(form.message) && (
                <p className="mt-1 text-xs text-rose-600">Pesan wajib diisi.</p>
              )}
            </div>

            {/* Honeypot anti-bot */}
            <div className="hidden" aria-hidden="true">
              <label>Jangan diisi</label>
              <input
                value={form.hp_topic}
                onChange={(e) => setForm((f) => ({ ...f, hp_topic: e.target.value }))}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={busy || cooldownLeft > 0}
                className="w-full inline-flex items-center justify-center rounded-xl px-6 py-3.5 font-semibold text-white bg-blue-600 shadow-md transition-all duration-200 hover:bg-blue-700 active:translate-y-px disabled:opacity-50"
              >
                {busy ? "Mengirim…" : cooldownLeft > 0 ? `Tunggu ${cooldownLeft}s` : "Kirim Permintaan Demo"}
              </button>
            </div>

            {status === "success" && (
              <p className="text-center text-green-600">Terima kasih! Permintaan Anda telah terkirim.</p>
            )}
            {status === "error" && (
              <p className="text-center text-red-600">Terjadi kesalahan. Silakan coba lagi.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
