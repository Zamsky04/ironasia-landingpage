// src/components/DemoRequest.jsx
import { useRef, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useI18n } from "../i18n/useI18n";
import { api } from "../lib/api";
import { validateEmailWithHints } from "../lib/emailValidation";

const formatDate = (val) => {
  if (!val) return "";
  const d = new Date(val);
  if (isNaN(d)) return val;
  return d.toISOString().slice(0, 10);
};

const COOLDOWN_SECONDS = 60;
const COOLDOWN_KEY = "demoCooldownUntil";
const COOLDOWN_EMAIL_KEY = "demoCooldownEmail";

export default function DemoRequest() {
  const { t } = useI18n();
  const tt = (k, fb) => t(k) || fb;
  const demoRef = useRef(null);

  const [emailFixLabel, setEmailFixLabel] = useState(t("demo.form.fix") || "Fix");

  const [form, setForm] = useState({
    nama: "",
    email: "",
    message: "",
    jenis_demo: "ONLINE",
    prefered_date: "",
    prefered_time: "",
    hp_topic: "",
  });

  const [touched, setTouched] = useState({});
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState(null);

  const [emailErr, setEmailErr] = useState("");
  const [emailHint, setEmailHint] = useState(null);
  const [emailSuggested, setEmailSuggested] = useState(null);

  const [cooldownLeft, setCooldownLeft] = useState(0);

  const isEmpty = (v) => String(v ?? "").trim() === "";
  const baseInput = "h-10 w-full rounded-xl border px-3";
  const redIf = (cond) => (cond ? " border-rose-400 ring-1 ring-rose-200" : " border-slate-200");

  const stayOnDemo = () => demoRef.current?.scrollIntoView({ behavior: "auto", block: "start" });

  const runEmailValidation = (value) => {
    const out = validateEmailWithHints(value, t, "demo");
    const { error, hint, suggested, fixLabel } = out;
    setEmailErr(error || "");
    setEmailHint(hint || null);
    setEmailSuggested(suggested || null);
    if (fixLabel) setEmailFixLabel(fixLabel);
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

    if (form.hp_topic) return; // honeypot

    const lastEmail = localStorage.getItem(COOLDOWN_EMAIL_KEY) || "";
    if (cooldownLeft > 0 && lastEmail === form.email.trim()) {
      await Swal.fire({
        icon: "info",
        title: tt("common.wait.title", "Please wait"),
        text: tt("demo.cooldown.text", "You just sent a request. Try again in {0} seconds.")
          .replace("{0}", cooldownLeft),
        target: demoRef.current || "#demo",
        returnFocus: false,
        heightAuto: false,
      });
      stayOnDemo();
      return;
    }

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
        title: tt("demo.form.validation.title", "Incomplete Data"),
        text: tt("demo.form.validation.text", "Please fill all required fields and provide a valid email."),
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
      title: tt("demo.form.submitting", "Submitting..."),
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => Swal.showLoading(),
      target: demoRef.current || "#demo",
      returnFocus: false,
      heightAuto: false,
    });

    try {
      await api.post("/demo", { ...form, prefered_date: formatDate(form.prefered_date) });

      Swal.close();
      await Swal.fire({
        icon: "success",
        title: tt("demo.form.success.title", "Submitted!"),
        text: tt("demo.form.success.text", "Our team will contact you shortly."),
        confirmButtonText: tt("common.ok", "OK"),
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
      setEmailErr(""); setEmailHint(null); setEmailSuggested(null);
      setStatus("success");
    } catch (err) {
      console.error("Create demo failed:", err);
      Swal.close();
      await Swal.fire({
        icon: "error",
        title: tt("demo.form.error.title", "Submission Failed"),
        text: err?.response?.data?.message || tt("demo.form.error.text", "Please try again."),
        confirmButtonText: tt("common.close", "Close"),
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
            {tt("demo.title", "Request a Demo")}
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            {tt("demo.subtitle", "Fill out the form and our team will reach out.")}
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <form onSubmit={onSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            {/* Nama Perusahaan */}
            <div>
              <label className="block text-sm font-medium text-slate-700">{tt("demo.form.company", "Company Name")}*</label>
              <input
                value={form.nama}
                onChange={(e) => setForm((f) => ({ ...f, nama: e.target.value }))}
                onBlur={() => setTouched((t) => ({ ...t, nama: true }))}
                className={baseInput + redIf(touched.nama && isEmpty(form.nama))}
                placeholder={tt("demo.form.company_placeholder", "Company Name")}
              />
              {touched.nama && isEmpty(form.nama) && (
                <p className="mt-1 text-xs text-rose-600">{tt("demo.form.validation.company", "Company name is required.")}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700">{tt("demo.form.email", "Email")}*</label>
              <input
                type="email"
                value={form.email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                className={baseInput + redIf(touched.email && !!emailErr)}
                placeholder={tt("demo.form.email_placeholder", "name@company.com")}
                autoComplete="email"
                inputMode="email"
              />
              {touched.email && (
                <div className="mt-1 text-xs">
                  {emailErr ? (
                    <div className="flex items-center gap-2 text-rose-700">
                      <span>{emailErr}</span>
                      {emailSuggested && (
                        <button
                          type="button"
                          onClick={applyEmailSuggestion}
                          className="px-2 py-0.5 rounded-md border border-rose-300 text-rose-800 hover:bg-rose-50"
                        >
                          {emailFixLabel}
                        </button>
                      )}
                    </div>
                  ) : emailHint ? (
                    <div className="flex items-center gap-2 text-amber-700">
                      <span>{emailHint}</span>
                      {emailSuggested && (
                        <button
                          type="button"
                          onClick={applyEmailSuggestion}
                          className="px-2 py-0.5 rounded-md border border-amber-300 text-amber-800 hover:bg-amber-50"
                        >
                          {emailFixLabel}
                        </button>
                      )}
                    </div>
                  ) : (
                    <p className="text-emerald-600">{t("common.valid") || "Looks valid."}</p>
                  )}
                </div>
              )}
            </div>

            {/* Jenis + Tanggal + Jam */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700">{tt("demo.form.type", "Demo Type")}*</label>
                <select
                  value={form.jenis_demo}
                  onChange={(e) => setForm((f) => ({ ...f, jenis_demo: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, jenis_demo: true }))}
                  className={baseInput + redIf(touched.jenis_demo && isEmpty(form.jenis_demo))}
                >
                  <option value="ONLINE">{tt("demo.form.type_online", "ONLINE")}</option>
                  <option value="OFFLINE">{tt("demo.form.type_offline", "OFFLINE")}</option>
                </select>
                {touched.jenis_demo && isEmpty(form.jenis_demo) && (
                  <p className="mt-1 text-xs text-rose-600">{tt("demo.form.validation.type", "Type is required.")}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">{tt("demo.form.date", "Date")}*</label>
                <input
                  type="date"
                  value={form.prefered_date}
                  onChange={(e) => setForm((f) => ({ ...f, prefered_date: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, prefered_date: true }))}
                  className={baseInput + redIf(touched.prefered_date && isEmpty(form.prefered_date))}
                />
                {touched.prefered_date && isEmpty(form.prefered_date) && (
                  <p className="mt-1 text-xs text-rose-600">{tt("demo.form.validation.date", "Date is required.")}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">{tt("demo.form.time", "Time")}*</label>
                <input
                  type="time"
                  value={form.prefered_time}
                  onChange={(e) => setForm((f) => ({ ...f, prefered_time: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, prefered_time: true }))}
                  className={baseInput + redIf(touched.prefered_time && isEmpty(form.prefered_time))}
                />
                {touched.prefered_time && isEmpty(form.prefered_time) && (
                  <p className="mt-1 text-xs text-rose-600">{tt("demo.form.validation.time", "Time is required.")}</p>
                )}
              </div>
            </div>

            {/* Pesan */}
            <div>
              <label className="block text-sm font-medium text-slate-700">{tt("demo.form.message", "Message")}*</label>
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
                placeholder={tt("demo.form.placeholder", "Tell us your demo context…")}
              />
              {touched.message && isEmpty(form.message) && (
                <p className="mt-1 text-xs text-rose-600">{tt("demo.form.validation.message", "Message is required.")}</p>
              )}
            </div>

            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              <label>Do not fill</label>
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
                {busy
                  ? tt("demo.form.submitting", "Submitting...")
                  : cooldownLeft > 0
                    ? tt("common.wait.seconds", "Wait {0}s").replace("{0}", cooldownLeft)
                    : tt("demo.form.submit", "Send Demo Request")}
              </button>
            </div>

            {status === "success" && (
              <p className="text-center text-green-600">{tt("demo.form.success.banner", "Thank you! Your request has been sent.")}</p>
            )}
            {status === "error" && (
              <p className="text-center text-red-600">{tt("demo.form.error.banner", "An error occurred. Please try again.")}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
