import { useRef, useState } from "react";
import Swal from "sweetalert2";
import { useI18n } from "../i18n/useI18n";
import { api } from "../lib/api";


const formatDate = (val) => {
  if (!val) return "";
  const d = new Date(val);
  if (isNaN(d)) return val;
  return d.toISOString().slice(0, 10);
};

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
  });

  const [touched, setTouched] = useState({
    nama: false,
    email: false,
    jenis_demo: false,
    prefered_date: false,
    prefered_time: false,
    message: false,
  });

  const markTouched = (k) => setTouched((t) => ({ ...t, [k]: true }));
  const isEmpty = (v) => String(v ?? "").trim() === "";

  const errNama = touched.nama && isEmpty(form.nama);
  const errEmail = touched.email && isEmpty(form.email);
  const errJenis = touched.jenis_demo && isEmpty(form.jenis_demo);
  const errDate = touched.prefered_date && isEmpty(form.prefered_date);
  const errTime = touched.prefered_time && isEmpty(form.prefered_time);
  const errMsg  = touched.message && isEmpty(form.message);

  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState(null); 

  const baseInput = "h-10 w-full rounded-xl border px-3";
  const redIf = (cond) =>
    cond ? " border-rose-400 ring-1 ring-rose-200" : " border-slate-200";

  const stayOnDemo = () => {
    if (demoRef.current) {
      demoRef.current.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const missing =
      isEmpty(form.nama) ||
      isEmpty(form.email) ||
      isEmpty(form.jenis_demo) ||
      isEmpty(form.prefered_date) ||
      isEmpty(form.prefered_time) ||
      isEmpty(form.message);

    if (missing) {
      setTouched({
        nama: true,
        email: true,
        jenis_demo: true,
        prefered_date: true,
        prefered_time: true,
        message: true,
      });
      await Swal.fire({
        icon: "warning",
        title: "Lengkapi data",
        text: "Semua field bertanda * wajib diisi.",
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

      setForm({
        nama: "",
        email: "",
        message: "",
        jenis_demo: "ONLINE",
        prefered_date: "",
        prefered_time: "",
      });
      setTouched({
        nama: false,
        email: false,
        jenis_demo: false,
        prefered_date: false,
        prefered_time: false,
        message: false,
      });
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
            {t("demo.subtitle") ||
              "Isi formulir di bawah ini dan tim kami akan menghubungi Anda."}
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <form
            onSubmit={onSubmit}
            className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
          >
            {/* NAMA */}
            <div>
              <label
                htmlFor="nama"
                className="block text-sm font-medium text-slate-700"
              >
                Nama Perusahaan*
              </label>
              <input
                id="nama"
                name="nama"
                value={form.nama}
                onChange={(e) =>
                  setForm((f) => ({ ...f, nama: e.target.value }))
                }
                onBlur={() => markTouched("nama")}
                className={baseInput + redIf(errNama)}
                placeholder="Nama Perusahaan"
              />
              {errNama && (
                <p className="mt-1 text-xs text-rose-600">
                  Nama Perusahaan wajib diisi.
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                onBlur={() => markTouched("email")}
                className={baseInput + redIf(errEmail)}
                placeholder="nama@perusahaan.com"
              />
              {errEmail && (
                <p className="mt-1 text-xs text-rose-600">
                  Email wajib diisi.
                </p>
              )}
            </div>

            {/* JENIS + TANGGAL + JAM */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="sm:col-span-1">
                <label
                  htmlFor="jenis_demo"
                  className="block text-sm font-medium text-slate-700"
                >
                  Jenis Demo *
                </label>
                <select
                  id="jenis_demo"
                  name="jenis_demo"
                  value={form.jenis_demo}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, jenis_demo: e.target.value }))
                  }
                  onBlur={() => markTouched("jenis_demo")}
                  className={baseInput + redIf(errJenis)}
                >
                  <option value="ONLINE">ONLINE</option>
                  <option value="OFFLINE">OFFLINE</option>
                </select>
                {errJenis && (
                  <p className="mt-1 text-xs text-rose-600">
                    Jenis wajib dipilih.
                  </p>
                )}
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="prefered_date"
                  className="block text-sm font-medium text-slate-700"
                >
                  Tanggal *
                </label>
                <input
                  type="date"
                  id="prefered_date"
                  name="prefered_date"
                  value={form.prefered_date}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, prefered_date: e.target.value }))
                  }
                  onBlur={() => markTouched("prefered_date")}
                  className={baseInput + redIf(errDate)}
                />
                {errDate && (
                  <p className="mt-1 text-xs text-rose-600">
                    Tanggal wajib diisi.
                  </p>
                )}
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="prefered_time"
                  className="block text-sm font-medium text-slate-700"
                >
                  Jam *
                </label>
                <input
                  type="time"
                  id="prefered_time"
                  name="prefered_time"
                  value={form.prefered_time}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, prefered_time: e.target.value }))
                  }
                  onBlur={() => markTouched("prefered_time")}
                  className={baseInput + redIf(errTime)}
                />
                {errTime && (
                  <p className="mt-1 text-xs text-rose-600">
                    Jam wajib diisi.
                  </p>
                )}
              </div>
            </div>

            {/* PESAN */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700"
              >
                Pesan *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                onBlur={() => markTouched("message")}
                className={
                  "min-h-[96px] w-full rounded-xl border px-3 py-2" +
                  (errMsg
                    ? " border-rose-400 ring-1 ring-rose-200"
                    : " border-slate-200")
                }
                placeholder="Tuliskan konteks kebutuhan demo Anda…"
              />
              {errMsg && (
                <p className="mt-1 text-xs text-rose-600">
                  Pesan wajib diisi.
                </p>
              )}
            </div>

            {/* SUBMIT */}
            <div>
              <button
                type="submit"
                disabled={busy}
                className="w-full inline-flex items-center justify-center rounded-xl px-6 py-3.5 font-semibold text-white bg-blue-600 shadow-md transition-all duration-200 hover:bg-blue-700 active:translate-y-px disabled:opacity-50"
              >
                {busy ? "Mengirim…" : "Kirim Permintaan Demo"}
              </button>
            </div>

            {/* fallback text notice (opsional) */}
            {status === "success" && (
              <p className="text-center text-green-600">
                Terima kasih! Permintaan Anda telah terkirim.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-600">
                Terjadi kesalahan. Silakan coba lagi.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
