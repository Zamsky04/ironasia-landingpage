export default function CustomerSupport() {
  const waNumber = "6283160689317"; // ganti nomormu tanpa + (62 untuk Indonesia)
  const waText = encodeURIComponent("Halo IronAsia, saya butuh bantuan.");
  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col gap-2">
      <a
        href={`https://wa.me/${waNumber}?text=${waText}`}
        target="_blank" rel="noopener"
        className="btn-wa !px-4 !py-3 rounded-full shadow-lg"
        aria-label="WhatsApp Customer Support"
        title="WhatsApp Customer Support"
      >
        {/* ikon WA sederhana */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.37 0 0 5.37 0 12a11.86 11.86 0 001.64 6L0 24l6.18-1.62A11.86 11.86 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.82c-1.89 0-3.71-.55-5.28-1.59l-.38-.24-3.67.96.98-3.58-.25-.39A9.8 9.8 0 012.18 12C2.18 6.9 6.9 2.18 12 2.18S21.82 6.9 21.82 12 17.1 21.82 12 21.82zm5.36-6.48c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.14-.19.29-.74.93-.9 1.12-.16.19-.33.2-.62.07-.29-.15-1.23-.45-2.34-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.14-.14.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.81 1.16 3 .14.19 2 3.06 4.84 4.29.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z"/>
        </svg>
      </a>

      <a
        href="mailto:support@ironasia.id"
        className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 bg-white shadow-sm hover:bg-gray-50"
        title="Email Support"
        aria-label="Email Support"
      >
        ✉️
      </a>
    </div>
  );
}
