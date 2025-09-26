// src/pages/Help.jsx
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { useI18n } from "../i18n/useI18n";
import { api } from "../lib/api";
import { validateEmailWithHints } from "../lib/emailValidation";

const COOLDOWN_SECONDS = 60;
const COOLDOWN_KEY = "helpCooldownUntil";
const COOLDOWN_EMAIL_KEY = "helpCooldownEmail";

export default function Help() {
  const { t } = useI18n();
  const tt = (k, fb) => t(k) || fb;

  const helpRef = useRef(null);
  const fileRef = useRef(null);

  const [emailFixLabel, setEmailFixLabel] = useState(t("demo.form.fix") || "Fix");

  const [subjekOptions, setSubjekOptions] = useState([]);
  const [form, setForm] = useState({ nama: "", email: "", subjek_id: "", message: "", picture: null, hp_topic: "" });
  const [touched, setTouched] = useState({ nama: false, email: false, subjek_id: false, message: false });
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
      const out = validateEmailWithHints(value, t, "help");
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
    else {
      setEmailErr(""); setEmailHint(null); setEmailSuggested(null);
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
    (async () => {
      try {
        const { data } = await api.get("/subjek");
        if (Array.isArray(data)) setSubjekOptions(data);
      } catch (e) {
        console.error("Failed to fetch subjects:", e);
      }
    })();
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const until = Number(localStorage.getItem(COOLDOWN_KEY) || 0);
      const left = Math.max(0, Math.floor((until - now) / 1000));
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

    if (form.hp_topic?.trim()) return; // honeypot

    const lastEmail = localStorage.getItem(COOLDOWN_EMAIL_KEY) || "";
    if (cooldownLeft > 0 && lastEmail === form.email.trim()) {
      await Swal.fire({
        icon: "info",
        title: tt("common.wait.title", "Please wait"),
        text: tt("help.cooldown.text", "You just sent a ticket. Try again in {0} seconds.")
          .replace("{0}", cooldownLeft),
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
        title: tt("help.form.validation.title", "Incomplete Data"),
        text: tt("help.form.validation.text", "Please fill all required fields and provide a valid email."),
        target: helpRef.current || "#help",
        returnFocus: false,
        heightAuto: false,
      });
      stayOnSection();
      return;
    }

    setBusy(true);

    Swal.fire({
      title: tt("help.form.submitting", "Submitting..."),
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
        title: tt("help.form.success.title", "Submitted!"),
        text: tt("help.form.success.text", "Your help ticket has been received."),
        confirmButtonText: tt("common.ok", "OK"),
        target: helpRef.current || "#help",
        returnFocus: false,
        heightAuto: false,
      });

      startCooldown(form.email.trim());

      setForm({ nama: "", email: "", subjek_id: "", message: "", picture: null, hp_topic: "" });
      setTouched({ nama: false, email: false, subjek_id: false, message: false });
      setEmailErr(""); setEmailHint(null); setEmailSuggested(null);
      if (fileRef.current) fileRef.current.value = "";
    } catch (err) {
      console.error("Help request failed:", err);
      Swal.close();
      await Swal.fire({
        icon: "error",
        title: tt("help.form.error.title", "Submission Failed"),
        text: err?.response?.data?.message || tt("help.form.error.text", "Please try again."),
        confirmButtonText: tt("common.close", "Close"),
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
            {tt("help.title", "Need Help?")}
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            {tt("help.subtitle", "Our team is here to assist. Fill the form and we'll contact you shortly.")}
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <form onSubmit={onSubmit} className="space-y-6 bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-200">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* NAMA */}
              <div>
                <label htmlFor="help_nama" className="block text-sm font-medium text-slate-700 mb-1">
                  {tt("help.form.name", "Full Name")}*
                </label>
                <input
                  id="help_nama"
                  name="nama"
                  value={form.nama}
                  onChange={(e) => setForm((f) => ({ ...f, nama: e.target.value }))}
                  onBlur={() => markTouched("nama")}
                  className={`${baseInput}${redIf(touched.nama && isEmpty(form.nama))}`}
                  placeholder={tt("help.form.name_placeholder", "Your name / PIC")}
                />
                {touched.nama && isEmpty(form.nama) && (
                  <p className="mt-1 text-xs text-rose-600">{tt("help.form.validation.name", "Name is required.")}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label htmlFor="help_email" className="block text-sm font-medium text-slate-700 mb-1">
                  {tt("help.form.email", "Email Address")}*
                </label>
                <input
                  type="email"
                  id="help_email"
                  name="email"
                  value={form.email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  className={`${baseInput}${redIf(touched.email && !!emailErr)}`}
                  placeholder={tt("help.form.email_placeholder", "name@company.com")}
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
            </div>

            {/* SUBJEK */}
            <div>
              <label htmlFor="help_subjek" className="block text-sm font-medium text-slate-700 mb-1">
                {tt("help.form.subject", "Subject")}*
              </label>
              <select
                id="help_subjek"
                name="subjek_id"
                value={form.subjek_id}
                onChange={(e) => setForm((f) => ({ ...f, subjek_id: e.target.value }))}
                onBlur={() => markTouched("subjek_id")}
                className={`${baseInput}${redIf(touched.subjek_id && isEmpty(form.subjek_id))}`}
              >
                <option value="">{tt("help.form.subject_placeholder", "— Select a Help Category —")}</option>
                {subjekOptions.map((s) => (
                  <option key={s.id} value={s.id}>{s.subjek}</option>
                ))}
              </select>
              {touched.subjek_id && isEmpty(form.subjek_id) && (
                <p className="mt-1 text-xs text-rose-600">{tt("help.form.validation.subject", "Subject is required.")}</p>
              )}
            </div>

            {/* LAMPIRAN */}
            <div>
              <label htmlFor="help_picture" className="block text-sm font-medium text-slate-700 mb-1">
                {tt("help.form.attachment", "Attachment (Optional)")}
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
                {tt("help.form.message", "Your Message")}*
              </label>
              <textarea
                id="help_message"
                name="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                onBlur={() => markTouched("message")}
                className={`w-full rounded-xl border px-3 py-2${redIf(touched.message && isEmpty(form.message))}`}
                placeholder={tt("help.form.message_placeholder", "Describe your issue…")}
              />
              {touched.message && isEmpty(form.message) && (
                <p className="mt-1 text-xs text-rose-600">{tt("help.form.validation.message", "Message is required.")}</p>
              )}
            </div>

            {/* Honeypot */}
            <div aria-hidden="true" className="hidden">
              <label htmlFor="hp_topic">Do not fill</label>
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
                  ? tt("help.form.submitting", "Submitting...")
                  : cooldownLeft > 0
                    ? tt("common.wait.seconds", "Wait {0}s").replace("{0}", cooldownLeft)
                    : tt("help.form.submit", "Submit Help Ticket")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
