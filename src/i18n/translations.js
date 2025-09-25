// src/i18n/translation.js
export const LANGS = {
  id: { label: "ID", code: "id", dir: "ltr" },
  en: { label: "EN", code: "en", dir: "ltr" },
  zh: { label: "中文", code: "zh", dir: "ltr" },
};

export const TRANSLATIONS = {
  id: {
    seo: {
      title: "1ronAsia – Marketplace B2B Industri: RFQ, Supplier Tervalidasi",
      desc: "1ronAsia adalah marketplace B2B industri untuk pengadaan barang: ajukan RFQ kustom, temukan supplier tervalidasi, kelola penawaran & pemesanan dengan cepat dan transparan."
    },
    nav: { about: "Tentang Kami", fitur: "Fitur", alur: "Alur RFQ", sorotan: "Sorotan", faq: "FAQ", download: "Download", kontak: "Kontak", buka: "Buka Marketplace" },
    hero: {
      badge: "Marketplace B2B Industri",
      h1a: "Pengadaan Industri Lebih Cepat",
      h1b: "dengan RFQ Cerdas",
      p: "Ajukan RFQ kustom (spesifikasi, merek, jumlah) ke banyak supplier tervalidasi sekaligus. Bandingkan penawaran, pilih terbaik, dan proses lebih efisien.",
      cta1: "Buka Marketplace",
      cta2: "Download Aplikasi",
      trust1: "Supplier Tervalidasi", trust2: "Keamanan & Privasi", trust3: "Respon Cepat",
      quote: "Platform B2B tepercaya untuk RFQ, katalog industri lengkap, dan pengadaan transparan."
    },
     features: {
      title:"Kenapa Memilih 1ronAsia?",
      desc:"Marketplace B2B & B2C terpercaya untuk pengadaan material bangunan: lebih cepat, aman, dan transparan.",
      list: [
        ["Market Luas","Supplier & pembeli terhubung ke pasar nasional bahkan internasional, peluang bisnis makin besar."],
        ["Supplier Tervalidasi","Setiap supplier diverifikasi untuk keamanan & kualitas."],
        ["Efisiensi 40%","Proses pembelian & distribusi lebih cepat dibanding cara tradisional."],
        ["Transparansi Harga","Harga & kualitas tercatat jelas, minim risiko KKN."],
        ["Fleksibilitas Penjualan","Supplier bisa menawarkan produk grosir & retail."],
        ["Data & Insight","Dapatkan data tren kebutuhan proyek untuk strategi bisnis lebih tepat."],
        ["Likuidasi Stok Lama","Barang terserap pasar lebih cepat, gudang lebih efisien."],
        ["Customer Care","Komunikasi langsung buyer-supplier, feedback cepat."],
        ["Notifikasi Real-time","Pantau RFQ, penawaran, & pesanan kapan saja."],
        ["Branding & Kredibilitas","Supplier tampil lebih profesional dengan profil resmi."]
      ]
    },
    rfq: {
      title: "Alur RFQ B2B IronAsia",
      desc: "Langkah-langkah sederhana: tulis kebutuhan → kirim → terima & bandingkan penawaran → pilih terbaik.",
      steps: [
        ["Tulis Kebutuhan Anda",
         "Jelaskan barang/jasa yang dicari dengan bahasa sederhana: nama produk, fungsi, merek (opsional), spesifikasi penting (ukuran/tipe/standar), jumlah, lokasi kirim, dan target waktu. Lampirkan foto/daftar spesifikasi jika ada."],
        ["Kirim RFQ ke Supplier Relevan",
         "Sistem kami menyalurkan RFQ Anda ke supplier yang sesuai kategori dan area layanan. Semua supplier menerima informasi yang sama untuk memastikan perbandingan adil."],
        ["Supplier Mengecek & Mengajukan Penawaran",
         "Supplier memeriksa stok/lead time lalu mengirim penawaran berisi harga, estimasi pengiriman, merek/alternatif, garansi, dan catatan ongkir/instalasi bila perlu."],
        ["Ajukan Pertanyaan (Opsional)",
         "Kalau ada detail yang kurang jelas, gunakan kolom pesan untuk tanya: contoh pengganti merek, standar SNI/ISO, MOQ, atau opsi kualitas berbeda."],
        ["Bandingkan Semua Penawaran",
         "Bandingkan harga, waktu pengiriman, syarat pembayaran, garansi, reputasi supplier, dan ulasan. Tampilan perbandingan dibuat rapi agar Anda cepat mengambil keputusan."],
        ["Negosiasi Ringan",
         "Anda bisa minta revisi: ubah jumlah, minta diskon, ganti merek, atau sesuaikan SLA. Supplier mengirim penawaran final setelah disepakati."],
        ["Putuskan Pemenang",
         "Pilih supplier terbaik sesuai prioritas Anda (harga, kecepatan, kualitas). Sistem akan meminta konfirmasi sebelum lanjut ke pesanan."],
        ["Lanjut ke PO & Tracking",
         "Setelah memilih, buat PO (Purchase Order). Pantau status pengiriman, unggah bukti, dan selesaikan pembayaran sesuai ketentuan."]
      ],
      tipsTitle: "Tips singkat agar RFQ Anda cepat mendapat penawaran bagus:",
      tips: [
        "Tulis spesifikasi minimum yang wajib (misal: voltase, diameter, standar material).",
        "Sertakan jumlah & lokasi kirim; ongkir sering memengaruhi harga.",
        "Buka opsi merek pengganti jika tujuan Anda harga terbaik.",
        "Cantumkan deadline pengiriman yang realistis.",
        "Jika ada target harga, sebutkan sebagai acuan (opsional)."
      ],
      ctaBuyer: "Mulai Ajukan RFQ", 
      ctaSupplier: "Jadi Supplier"
    },

    show: { title:"Koneksikan Bisnis Anda", p:"Tingkatkan jangkauan & efisiensi dengan ekosistem supplier-buyer aktif. Kelola permintaan, penawaran, dan komunikasi dari satu dashboard.", a:"Katalog", b:"RFQ", c:"Supplier" },

    supplier: { title:"Bergabung sebagai Supplier", p:"Terima RFQ relevan, perluas jaringan B2B, dan tingkatkan omzet.", bullets:["Profil & verifikasi perusahaan","Unggah katalog & kelola stok","Penawaran cepat dengan template"], k1:"RFQ/bulan", v1:"Bervariasi", k2:"Kategori", v2:"Industri & MRO", k3:"Metode", v3:"Online & email", k4:"Dukungan", v4:"Chat & email", c1:"Bergabung sebagai supplier", c2:"Pelajari Lebih Lanjut" },

    faq: {
      title: "Pertanyaan Umum",
      groups: {
        rfq: [
          ["Apa itu RFQ?",
          "RFQ (Request for Quotation) adalah permintaan penawaran harga. Anda menuliskan kebutuhan (spesifikasi, jumlah, lokasi), lalu sistem mengirimkannya ke banyak supplier sekaligus agar mudah dibandingkan."],
          ["Kapan sebaiknya menggunakan RFQ?",
          "Gunakan RFQ bila kebutuhan Anda sudah jelas: tipe, ukuran, jumlah, dan waktu target. Jika membutuhkan solusi menyeluruh (misalnya desain atau instalasi kompleks), gunakan RFP (Request for Proposal)."],
          ["Apa yang wajib saya tulis di RFQ?",
          "Cantumkan nama barang/jasa, spesifikasi penting, jumlah, lokasi pengiriman, dan waktu kebutuhan. Bisa juga menambahkan merek tertentu, foto/lampiran, atau batasan kualitas."],
          ["Bagaimana cara membandingkan penawaran?",
          "Semua penawaran ditampilkan berdampingan: harga, lead time, garansi, ongkos kirim, dan syarat pembayaran. Anda dapat menyaring serta mengurutkan untuk memudahkan pilihan."],
          ["Bagaimana jika penawaran belum sesuai?",
          "Gunakan kolom pesan untuk bertanya atau bernegosiasi: ubah jumlah, minta diskon, ganti merek setara, atau minta estimasi pengiriman lain."],
          ["Apakah ada biaya?",
          "Akun dasar gratis. Untuk layanan premium (misalnya dukungan prioritas), biaya dapat berlaku sesuai ketentuan."]
        ],
        app: [
          ["Apakah tersedia aplikasi mobile?",
          "Ya. IronAsia memiliki aplikasi mobile agar Anda bisa memantau RFQ, menerima notifikasi penawaran, dan berkomunikasi langsung dengan supplier lewat ponsel."],
          ["Bagaimana cara login di aplikasi?",
          "Gunakan email dan kata sandi yang sama seperti di web. Kami juga mendukung login cepat melalui OTP yang dikirim ke email Anda."],
          ["Apakah saya bisa mengunggah file lewat aplikasi?",
          "Bisa. Anda dapat melampirkan PDF, foto produk, atau file spreadsheet kecil saat membuat RFQ."],
          ["Mengapa saya tidak menerima notifikasi di aplikasi?",
          "Pastikan izin notifikasi di ponsel sudah aktif, dan periksa apakah notifikasi aplikasi IronAsia tidak dalam kondisi dibisukan."]
        ],
        web: [
          ["Apa itu website IronAsia?",
          "Website resmi IronAsia ada di https://ironasia.com. Di sana Anda bisa melihat informasi, fitur, dan mulai mengajukan RFQ (Request for Quotation) secara online."],
          ["Bagaimana cara mulai menggunakan web IronAsia?",
          "1. Buka https://ironasia.com.\n2. Klik tombol 'Daftar' untuk membuat akun baru atau 'Masuk' jika sudah punya akun.\n3. Setelah login, Anda bisa membuat RFQ, melihat penawaran supplier, atau mengelola pesanan."],
          ["Apakah saya perlu akun untuk mencoba?",
          "Ya, untuk bisa mengajukan RFQ atau menerima penawaran, Anda perlu akun. Pendaftaran cepat dengan email dan data dasar."],
          ["Fitur apa saja yang tersedia di web?",
          "Di web, Anda bisa: membuat RFQ, mencari supplier, membandingkan penawaran, mengirim pesan ke supplier, dan melacak status pesanan."],
          ["Apakah web IronAsia bisa diakses di HP?",
          "Bisa. Website IronAsia mendukung tampilan responsif, jadi bisa dibuka dari komputer maupun ponsel tanpa perlu aplikasi."],
          ["Bagaimana kalau saya hanya ingin lihat-lihat dulu?",
          "Tanpa login, Anda masih bisa melihat halaman informasi umum tentang fitur IronAsia. Namun untuk ajukan RFQ atau interaksi dengan supplier, Anda harus login dulu."]
        ],
        supplier: [
          ["Bagaimana cara menjadi supplier di IronAsia?",
          "Anda harus melakukan registrasi akun supplier. Proses ini memerlukan unggahan dokumen resmi seperti NIB (Nomor Induk Berusaha) dan persetujuan atas syarat & ketentuan IronAsia."],
          ["Apakah saya bisa merevisi penawaran?",
          "Bisa. Anda dapat mengirim revisi harga, lead time, atau alternatif merek selama RFQ belum ditutup."],
          ["Apakah menerima RFQ berbayar?",
          "Menerima RFQ relevan gratis. Namun tersedia paket promosi dan fitur unggulan yang bersifat opsional."],
          ["Bagaimana meningkatkan peluang menang?",
          "Respon cepat, jelaskan stok dan lead time secara rinci, sertakan garansi atau layanan purna jual, serta tawarkan alternatif setara bila produk utama tidak tersedia."]
        ],
        customer: [
          ["Bagaimana cara menjadi customer di IronAsia?",
          "Registrasi akun customer cukup dengan mengunggah KTP sebagai identitas resmi dan menyetujui syarat & ketentuan IronAsia."],
          ["Bagaimana memastikan kualitas barang?",
          "Gunakan supplier yang sudah terverifikasi, periksa spesifikasi di penawaran, minta surat garansi atau COA bila perlu, dan simpan bukti transaksi."],
          ["Kapan saya harus menerbitkan PO?",
          "Setelah memilih penawaran pemenang dan menyepakati harga, pengiriman, serta pembayaran. Sistem IronAsia akan membantu membuat PO dan melacak statusnya."],
          ["Apakah data saya aman?",
          "Kami menerapkan praktik keamanan terbaik dengan kontrol akses berbasis peran. Hanya pihak yang berwenang yang dapat melihat detail RFQ Anda."]
        ]
      }
    },

    about: {
      title:"Tentang Kami",
      timelineTitle:"Sejarah Perusahaan",
      timeline:["2020 – Ide lahir","2021-2024 – Pengembangan platform","2025 – Peluncuran resmi IronAsia"],
      visionTitle:"Visi",
      vision:"Menjadi platform e-commerce material bangunan terbesar di Indonesia dengan menghubungkan seluruh ekosistem industri konstruksi.",
      missionTitle:"Misi",
      mission:[
        "Memberikan akses mudah ke berbagai produk material.",
        "Menciptakan transparansi harga & kualitas.",
        "Membantu kontraktor & toko material dapat material tepat waktu.",
        "Mendorong digitalisasi industri konstruksi Indonesia.",
        "Melayani kebutuhan B2B & B2C secara hybrid."
      ],
      valuesTitle:"Nilai Perusahaan",
      values:["Integritas","Efisiensi","Inovasi","Kolaborasi","Keberlanjutan"]
    },

    demo: {
      title: "Minta Demo Gratis",
      subtitle: "Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda untuk menjadwalkan demo personal.",
      form: {
        name: "Nama Lengkap",
        company: "Nama Perusahaan",
        email: "Alamat Email",
        phone: "Nomor Telepon",
        role: "Jabatan Anda",
        message: "Pesan Tambahan",
        placeholder: "Apa yang ingin Anda ketahui lebih lanjut?",
        submit: "Kirim Permintaan Demo",
        submitting: "Mengirim...",
        success: "Terima kasih! Permintaan Anda telah terkirim.",
        error: "Terjadi kesalahan. Silakan coba lagi."
      }
    },

    help: {
      title: "Butuh Bantuan?",
      subtitle: "Tim kami siap membantu. Isi formulir di bawah ini dan kami akan segera menghubungi Anda.",
      form: {
        name: "Nama Lengkap",
        name_placeholder: "Masukkan nama Anda",
        email: "Alamat Email",
        email_placeholder: "email@anda.com",
        subject: "Subjek",
        subject_placeholder: "— Pilih Kategori Bantuan —",
        attachment: "Lampiran (Opsional)",
        message: "Pesan Anda",
        message_placeholder: "Jelaskan kendala atau pertanyaan Anda di sini...",
        submit: "Kirim Tiket Bantuan",
        submitting: "Mengirim...",
        validation: {
          title: "Data Belum Lengkap",
          text: "Mohon isi semua kolom yang ditandai *.",
          name: "Nama wajib diisi.",
          email: "Email wajib diisi.",
          subject: "Subjek wajib dipilih.",
          message: "Pesan wajib diisi."
        },
        success: {
          title: "Terkirim!",
          text: "Tiket bantuan Anda telah kami terima. Tim kami akan segera merespon."
        },
        error: {
          title: "Gagal Mengirim",
          text: "Terjadi kesalahan. Silakan coba lagi nanti."
        }
      }
    },

    dl: {
      title: "Mulai Menggunakan IronAsia",
      p: "Akses lewat web, atau unduh aplikasi mobile Anda.",
      web: "Marketplace 1ronAsia",
      or: "Atau unduh aplikasi seluler kami:",
      and: "Download Android",
      ios: "Download iOS"
    },
    footer: { privacy:"Kebijakan Privasi", terms:"Syarat & Ketentuan", download:"Download" }
  },

  /* ================= EN (mirroring, concise yet clear) ================= */
  en: {
    seo: { title: "IronAsia – B2B Industrial Marketplace: RFQ & Verified Suppliers", desc: "IronAsia is a B2B industrial marketplace for procurement: send custom RFQs, find verified suppliers, and manage quotes & orders fast and transparently." },
    nav: { about: "About Us", fitur:"Features", alur:"RFQ Flow", sorotan:"Showcase", faq:"FAQ", download:"Download", kontak:"Contact", buka:"Open Marketplace" },
    hero: { badge:"B2B Industrial Marketplace", h1a:"Faster Industrial Procurement", h1b:"with Smart RFQs", p:"Create custom RFQs (specs, brand, quantity) and send to multiple verified suppliers at once. Compare quotes, pick the best, and proceed more efficiently.", cta1:"Open Marketplace", cta2:"Get the App", trust1:"Verified Suppliers", trust2:"Security & Privacy", trust3:"Fast Response", quote:"A trusted B2B platform for RFQs, rich industrial catalog, and transparent procurement." },
    features:{ title:"Why Choose IronAsia?", desc:"A trusted B2B & B2C marketplace for building materials: faster, safer, and transparent.", list:[
      ["Wider Market","Connect with national and international buyers and suppliers."],
      ["Verified Suppliers","Every supplier is strictly verified for quality and safety."],
      ["40% Faster Procurement","Purchasing and distribution are up to 40% faster than traditional methods."],
      ["Transparent Pricing","Clear prices and product quality reduce risks of unfair practices."],
      ["Sales Flexibility","Suppliers can sell both wholesale and retail."],
      ["Data & Insights","Gain project demand insights to improve strategy."],
      ["Stock Clearance","Move old inventory quickly and free up storage."],
      ["Customer Care","Direct communication between buyers and suppliers with quick feedback."],
      ["Real-time Notifications","Track RFQs, quotes, and orders anytime, anywhere."],
      ["Branding & Credibility","Suppliers build professional profiles with verified company data."]
    ]},
    rfq:{ title:"IronAsia B2B RFQ Flow", desc:"Write needs → send → receive & compare quotes → choose the winner.", steps:[
      ["Describe Your Need","Name, key specs, quantity, ship-to location, timing. Add brand (optional) and attachments if any."],
      ["Distribute to Relevant Suppliers","The system routes your RFQ to vetted, relevant suppliers."],
      ["Suppliers Respond","They check stock/lead time and reply with price, ETA, warranty, shipping notes."],
      ["Ask Questions (Optional)","Clarify brand alternatives, standards, MOQ, etc."],
      ["Compare Quotes","Side-by-side table: price, lead time, warranty, terms, reputation."],
      ["Light Negotiation","Request revisions: quantity, discount, brand change, SLA."],
      ["Select Winner","Choose based on your priority: price, speed, or quality."],
      ["PO & Tracking","Issue PO and track fulfillment and documents."]
    ],
    tipsTitle:"Quick tips for better quotes:",
    tips:["State must-have specs","Include quantity & ship-to location","Allow brand alternatives if possible","Set realistic delivery deadline","Share target price (optional)"]},
    show:{ title:"Connect Your Business", p:"Expand reach & efficiency with an active buyer-supplier ecosystem. Manage requests, quotes and communication from a single dashboard.", a:"Catalog", b:"RFQ", c:"Suppliers" },
    supplier:{ title:"Join as a Supplier", p:"Receive relevant RFQs, expand your B2B network, and grow revenue.", bullets:["Company profile & verification","Upload catalog & manage stock","Quick quotes with templates"], k1:"RFQs / month", v1:"Varies", k2:"Category", v2:"Industrial & MRO", k3:"Method", v3:"Online & email", k4:"Support", v4:"Chat & email", c1:"Join as a supplier", c2:"Learn More" },
    faq: {
      title: "Frequently Asked Questions",
      groups: {
        rfq: [
          ["What is an RFQ?", 
          "RFQ (Request for Quotation) is a request for price quotation. You write down your needs (specifications, quantity, location), and the system sends them to many suppliers at once so you can easily compare."],
          ["When should I use an RFQ?", 
          "Use an RFQ when your needs are clear: type, size, quantity, and target time. If you require a comprehensive solution (e.g., design or complex installation), use an RFP (Request for Proposal)."],
          ["What must I include in an RFQ?", 
          "Include product/service name, key specifications, quantity, delivery location, and required date. You can also add a specific brand, photos/attachments, or quality requirements."],
          ["How do I compare quotations?", 
          "All quotations are displayed side by side: price, lead time, warranty, shipping cost, and payment terms. You can filter and sort to make selection easier."],
          ["What if the quotation doesn’t fit?", 
          "Use the message column to ask or negotiate: change the quantity, request a discount, suggest equivalent brands, or ask for another delivery estimate."],
          ["Are there any fees?", 
          "Basic accounts are free. Premium services (such as priority support) may be charged according to terms."]
        ],
        app: [
          ["Is there a mobile app?", 
          "Yes. IronAsia has a mobile app so you can track RFQs, receive quotation notifications, and communicate directly with suppliers via phone."],
          ["How do I log in on the app?", 
          "Use the same email and password as on the website. We also support quick login via OTP sent to your email."],
          ["Can I upload files through the app?", 
          "Yes. You can attach PDFs, product photos, or small spreadsheets when creating an RFQ."],
          ["Why am I not receiving notifications in the app?", 
          "Make sure notification permissions on your phone are enabled, and check that IronAsia notifications are not muted."]
        ],
        web: [
          ["What is the IronAsia website?", 
          "The official IronAsia website is at https://ironasia.com. There you can view information, features, and start submitting RFQs online."],
          ["How do I start using IronAsia web?", 
          "1. Open https://ironasia.com, 2. Click 'Sign Up' to create a new account or 'Login' if you already have one.\n3. After logging in, you can create RFQs, view supplier quotations, or manage orders."],
          ["Do I need an account to try?", 
          "Yes, to submit RFQs or receive quotations, you need an account. Registration is quick with just email and basic info."],
          ["What features are available on the web?", 
          "On the website, you can: create RFQs, search suppliers, compare quotations, message suppliers, and track order status."],
          ["Can IronAsia web be accessed on mobile?", 
          "Yes. The IronAsia website supports responsive design, so it can be opened from computers or phones without needing an app."],
          ["What if I just want to browse first?", 
          "Without logging in, you can still view general information about IronAsia’s features. But to submit RFQs or interact with suppliers, you must log in."]
        ],
        supplier: [
          ["How do I become a supplier on IronAsia?", 
          "You must register a supplier account. This process requires uploading official documents such as NIB (Business Identification Number) and accepting IronAsia’s terms & conditions."],
          ["Can I revise my quotation?", 
          "Yes. You can send revised prices, lead times, or alternative brands as long as the RFQ is still open."],
          ["Is receiving RFQs paid?", 
          "Receiving relevant RFQs is free. However, promotional packages and featured options are available optionally."],
          ["How can I increase my chances of winning?", 
          "Respond quickly, explain stock and lead time clearly, include warranty or after-sales service, and offer equivalent alternatives if the main product is unavailable."]
        ],
        customer: [
          ["How do I become a customer on IronAsia?", 
          "Register a customer account by uploading your ID card (KTP) as official identity and accepting IronAsia’s terms & conditions."],
          ["How do I ensure product quality?", 
          "Use verified suppliers, check specifications in quotations, request warranty letters or COAs if necessary, and keep transaction evidence."],
          ["When should I issue a PO?", 
          "After choosing the winning quotation and agreeing on price, delivery, and payment. IronAsia’s system will help you create a PO and track its status."],
          ["Is my data safe?", 
          "We apply best security practices with role-based access control. Only authorized parties can view your RFQ details."]
        ]
      }
    },


    about:{ title:"About Us", timelineTitle:"Company Timeline", timeline:["2020 – Idea born","2021-2024 – Platform development","2025 – Official launch of IronAsia"], visionTitle:"Vision", vision:"To become Indonesia’s largest building materials e-commerce platform, connecting the entire construction ecosystem.", missionTitle:"Mission", mission:["Provide easy access to a wide range of building materials.","Ensure transparent pricing and quality.","Help contractors and retailers get materials on time.","Promote digitalization of Indonesia’s construction industry.","Serve both B2B and B2C needs in a hybrid way."], valuesTitle:"Core Values", values:["Integrity","Efficiency","Innovation","Collaboration","Sustainability"] },

    demo: {
      title: "Request a Free Demo",
      subtitle: "Fill out the form below and our team will contact you shortly to schedule a personal demo.",
      form: {
        name: "Full Name",
        company: "Company Name",
        email: "Email Address",
        phone: "Phone Number",
        role: "Your Role",
        message: "Additional Message",
        placeholder: "What would you like to know more about?",
        submit: "Send Demo Request",
        submitting: "Submitting...",
        success: "Thank you! Your request has been sent.",
        error: "An error occurred. Please try again."
      }
    },

    help: {
      title: "Need Help?",
      subtitle: "Our team is here to assist. Fill out the form below, and we will get back to you shortly.",
      form: {
        name: "Full Name",
        name_placeholder: "Enter your name",
        email: "Email Address",
        email_placeholder: "your@email.com",
        subject: "Subject",
        subject_placeholder: "— Select a Help Category —",
        attachment: "Attachment (Optional)",
        message: "Your Message",
        message_placeholder: "Describe your issue or question here...",
        submit: "Submit Help Ticket",
        submitting: "Submitting...",
        validation: {
          title: "Incomplete Data",
          text: "Please fill in all required fields marked with *.",
          name: "Name is required.",
          email: "Email is required.",
          subject: "Subject is required.",
          message: "Message is required."
        },
        success: {
          title: "Submitted!",
          text: "Your help ticket has been received. Our team will respond shortly."
        },
        error: {
          title: "Submission Failed",
          text: "An error occurred. Please try again later."
        }
      }
    },

    dl:{ title:"Get Started with IronAsia", p:"Access via web or download our mobile apps.", or:"Or download our mobile app:", web:"Open Web Marketplace", and:"Download Android", ios:"Download iOS" },
    footer:{ privacy:"Privacy Policy", terms:"Terms & Conditions", download:"Download" }
  },

  /* ================= ZH (简体) — refined/native ================= */
  zh: {
    seo: {
      title: "IronAsia – 工业 B2B 平台：询价（RFQ）与认证供应商",
      desc: "IronAsia 是面向工业采购的 B2B 平台：发送自定义询价（RFQ），寻找认证供应商，并以更快捷、透明的方式管理报价与订单。"
    },
    nav: {
      about: "关于我们",
      fitur: "功能",
      alur: "询价流程",
      sorotan: "亮点",
      faq: "常见问题",
      download: "下载",
      kontak: "联系我们",
      buka: "打开平台"
    },
    hero: {
      badge: "工业 B2B 采购平台",
      h1a: "更高效的工业采购",
      h1b: "借助智能询价",
      p: "创建自定义询价（规格、品牌、数量），一次发送给多家认证供应商。对比报价，选择更优方案，高效推进采购流程。",
      cta1: "打开平台",
      cta2: "下载应用",
      trust1: "认证供应商",
      trust2: "安全与隐私",
      trust3: "快速响应",
      quote: "值得信赖的 B2B 平台：智能询价、丰富工业目录与透明采购流程。"
    },
    features: {
      title: "为什么选择 IronAsia？",
      desc: "值得信赖的 B2B/B2C 建材与工业品平台：更快、更安全、更透明。",
      list: [
        ["更广阔的市场","连接全国乃至国际的买家与供应商，拓展业务机会。"],
        ["认证供应商","严格审核供应商资质，保障交易安全与质量。"],
        ["效率提升 40%","采购与分发效率较传统方式最高可提升 40%。"],
        ["价格透明","价格与质量信息清晰可追溯，降低不公平风险。"],
        ["销售灵活","同时支持批发与零售销售场景。"],
        ["数据洞察","获取项目需求趋势，为业务决策提供参考。"],
        ["库存清理","更快处置滞销库存，提升仓储利用率。"],
        ["客户关怀","买卖双方直接沟通，反馈更及时。"],
        ["实时通知","随时跟踪询价、报价与订单状态。"],
        ["品牌与信誉","完善企业资料，塑造专业可信的供应商形象。"]
      ]
    },
    rfq: {
      title: "IronAsia 询价（RFQ）流程",
      desc: "填写需求 → 分发供应商 → 接收并对比报价 → 选择中选供应商。",
      steps: [
        ["填写采购需求",
        "以简明语言描述所需商品/服务：名称、用途、关键规格（尺寸/型号/标准）、数量、收货地点与期望时间。可附图片或规格清单。"],
        ["分发给匹配供应商",
        "系统将 RFQ 路由至匹配品类与服务区域的认证供应商，确保信息一致、便于公平对比。"],
        ["供应商提交报价",
        "供应商确认库存/交期后，提供报价、预计发货时间、品牌/替代方案、质保与运费/安装说明（如适用）。"],
        ["提问与澄清（可选）",
        "就品牌替代、标准（如 SNI/ISO）、最小起订量（MOQ）或不同品质档次进行沟通。"],
        ["对比全部报价",
        "对比价格、交期、付款条款、质保、供应商口碑与评价；表格化呈现，便于快速决策。"],
        ["轻量协商",
        "可请求调整：数量、折扣、品牌或服务级别（SLA）；供应商据此提交最终报价。"],
        ["选择中选供应商",
        "依据价格、时效或质量等优先级选择最合适的供应商，系统将引导确认下一步。"],
        ["发出 PO 并追踪",
        "确认后生成采购订单（PO），跟踪发货与收货流程，上传凭证并按约完成结算。"]
      ],
      tipsTitle: "提高优质报价命中率的小提示：",
      tips: [
        "明确“必需”规格（如电压、直径、材料标准）。",
        "写清数量与收货地点；运费常影响最终报价。",
        "若以价格为先，可允许等效品牌以扩大选择面。",
        "设定合理的交期与到货时间。",
        "如有目标价，可作为参考给出（可选）。"
      ],
      ctaBuyer: "开始提交询价",
      ctaSupplier: "成为供应商"
    },
    show: {
      title: "连接您的业务",
      p: "借助活跃的买卖双方生态，拓展覆盖与提升效率。在同一控制台中管理需求、报价与沟通。",
      a: "目录",
      b: "询价",
      c: "供应商"
    },
    supplier: {
      title: "加入成为供应商",
      p: "接收匹配的 RFQ，拓展 B2B 网络，提升营收。",
      bullets: ["企业资料与认证","上传目录并管理库存","使用模板快速报价"],
      k1: "每月询价量",
      v1: "因类目而异",
      k2: "品类",
      v2: "工业与 MRO",
      k3: "方式",
      v3: "在线与邮件",
      k4: "支持",
      v4: "聊天与邮件",
      c1: "以供应商身份加入",
      c2: "了解更多"
    },
    faq: {
      title: "常见问题",
      groups: {
        rfq: [
          ["什么是RFQ？", 
          "RFQ（询价单）是请求报价的过程。您填写需求（规格、数量、地点），系统会同时发送给多个供应商，方便比较。"],
          ["什么时候应该使用RFQ？", 
          "当您的需求已明确时使用RFQ：类型、尺寸、数量和目标时间。如果需要整体解决方案（例如设计或复杂安装），请使用RFP（提案请求）。"],
          ["RFQ中必须填写什么？", 
          "请填写产品/服务名称、关键规格、数量、交付地点和需求时间。也可以附加特定品牌、照片/附件或质量要求。"],
          ["如何比较报价？", 
          "所有报价会并排显示：价格、交期、质保、运费和付款条件。您可以筛选和排序以便选择。"],
          ["如果报价不符合怎么办？", 
          "您可以在消息栏询问或谈判：修改数量、要求折扣、更换等效品牌，或要求其他交货时间。"],
          ["需要费用吗？", 
          "基础账户免费。高级服务（如优先支持）可能会收取费用。"]
        ],
        app: [
          ["是否有移动应用？", 
          "有。IronAsia 提供移动应用，您可以通过手机跟踪RFQ、接收报价通知，并直接与供应商沟通。"],
          ["如何在应用中登录？", 
          "使用与网站相同的邮箱和密码。我们也支持通过邮箱发送的OTP快速登录。"],
          ["我可以通过应用上传文件吗？", 
          "可以。您可以在创建RFQ时附加PDF、产品照片或小型表格文件。"],
          ["为什么我没有收到应用通知？", 
          "请确保已开启手机通知权限，并检查IronAsia应用通知是否未被静音。"]
        ],
        web: [
          ["什么是IronAsia网站？", 
          "IronAsia的官方网站是 https://ironasia.com/mainhome。在这里您可以查看信息、功能并在线提交RFQ。"],
          ["如何开始使用IronAsia网站？", 
          "1. 打开 https://ironasia.com/mainhome。\n2. 点击“注册”创建新账户，或点击“登录”进入已有账户。\n3. 登录后，您可以创建RFQ、查看供应商报价或管理订单。"],
          ["尝试时是否需要账户？", 
          "是的，若要提交RFQ或接收报价，您需要一个账户。注册过程很快，仅需邮箱和基本信息。"],
          ["网站上有哪些功能？", 
          "在网站上，您可以：创建RFQ、搜索供应商、比较报价、与供应商交流、并跟踪订单状态。"],
          ["IronAsia网站可以在手机上使用吗？", 
          "可以。IronAsia网站支持响应式设计，可以在电脑或手机上访问，无需下载应用。"],
          ["如果我只是想先浏览怎么办？", 
          "无需登录，您仍然可以查看IronAsia功能的常规信息。但提交RFQ或与供应商互动必须先登录。"]
        ],
        supplier: [
          ["如何成为IronAsia的供应商？", 
          "您需要注册供应商账户。此过程需要上传正式文件（如NIB营业执照）并同意IronAsia的条款和条件。"],
          ["我可以修改报价吗？", 
          "可以。在RFQ关闭前，您可以提交修改后的价格、交期或替代品牌。"],
          ["接收RFQ需要付费吗？", 
          "接收相关RFQ免费。但有可选的推广套餐和优先功能。"],
          ["如何提高中标几率？", 
          "快速响应，清楚说明库存和交期，提供质保或售后服务，并在主要产品缺货时提供等效替代方案。"]
        ],
        customer: [
          ["如何成为IronAsia的客户？", 
          "注册客户账户时需上传身份证（KTP）作为正式身份并同意IronAsia的条款和条件。"],
          ["如何确保商品质量？", 
          "选择已验证的供应商，检查报价中的规格，如有需要可要求质保证书或COA，并保存交易凭证。"],
          ["什么时候需要发布PO？", 
          "在选择中标报价并确认价格、交付和付款后。IronAsia系统会帮助您生成PO并跟踪状态。"],
          ["我的数据安全吗？", 
          "我们采用最佳安全实践，并基于角色控制访问。只有授权方才能查看您的RFQ详情。"]
        ]
      }
    },
    about: {
      title: "关于我们",
      timelineTitle: "公司历程",
      timeline: ["2020 – 概念提出","2021–2024 – 平台研发","2025 – IronAsia 正式上线"],
      visionTitle: "愿景",
      vision: "成为印尼领先的建材电商平台，连接整个建筑产业生态。",
      missionTitle: "使命",
      mission: [
        "提供便捷获取多品类建材的途径。",
        "确保价格与质量透明可控。",
        "帮助承包商与零售商按时获得所需材料。",
        "推动印尼建筑行业数字化升级。",
        "以混合模式同时服务 B2B 与 B2C 场景。"
      ],
      valuesTitle: "核心价值观",
      values: ["诚信","效率","创新","协作","可持续性"]
    },

    demo: {
      title: "请求免费演示",
      subtitle: "请填写以下表格，我们的团队将尽快与您联系安排个人演示。",
      form: {
        name: "全名",
        company: "公司名称",
        email: "电子邮件地址",
        phone: "电话号码",
        role: "您的职位",
        message: "附加信息",
        placeholder: "您想了解更多关于什么？",
        submit: "发送演示请求",
        submitting: "提交中...",
        success: "谢谢！您的请求已发送。",
        error: "发生错误。请再试一次。"
      }
    },

    help: {
      title: "需要帮助吗？",
      subtitle: "我们的团队随时准备为您提供帮助。请填写下面的表格，我们会尽快与您联系。",
      form: {
        name: "全名",
        name_placeholder: "输入您的姓名",
        email: "电子邮件地址",
        email_placeholder: "your@email.com",
        subject: "主题",
        subject_placeholder: "— 选择帮助类别 —",
        attachment: "附件（可选）",
        message: "您的留言",
        message_placeholder: "请在此处描述您的问题...",
        submit: "提交帮助请求",
        submitting: "提交中...",
        validation: {
          title: "信息不完整",
          text: "请填写所有带*号的必填项。",
          name: "姓名是必填项。",
          email: "电子邮件是必填项。",
          subject: "主题是必填项。",
          message: "留言是必填项。"
        },
        success: {
          title: "已提交！",
          text: "我们已收到您的帮助请求，我们的团队将尽快回复。"
        },
        error: {
          title: "提交失败",
          text: "发生错误，请稍后再试。"
        }
      }
    },

    dl: {
      title: "开始使用 IronAsia",
      p: "可通过网页访问，或下载移动端应用。",
      or: "或下载移动端应用：",
      web: "打开网页平台",
      and: "下载 Android",
      ios: "下载 iOS"
    },
    footer: {
      privacy: "隐私政策",
      terms: "条款与条件",
      download: "下载"
    }
  }
};
