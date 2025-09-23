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
    /* ======= RFQ (dibuat sederhana & lengkap untuk pemula) ======= */
    rfq: {
      title: "Alur RFQ B2B IronAsia",
      desc: "Langkah-langkah sederhana: tulis kebutuhan → kirim → terima & bandingkan penawaran → pilih terbaik.",
      steps: [
        ["1) Tulis Kebutuhan Anda",
         "Jelaskan barang/jasa yang dicari dengan bahasa sederhana: nama produk, fungsi, merek (opsional), spesifikasi penting (ukuran/tipe/standar), jumlah, lokasi kirim, dan target waktu. Lampirkan foto/daftar spesifikasi jika ada."],
        ["2) Kirim RFQ ke Supplier Relevan",
         "Sistem kami menyalurkan RFQ Anda ke supplier yang sesuai kategori dan area layanan. Semua supplier menerima informasi yang sama untuk memastikan perbandingan adil."],
        ["3) Supplier Mengecek & Mengajukan Penawaran",
         "Supplier memeriksa stok/lead time lalu mengirim penawaran berisi harga, estimasi pengiriman, merek/alternatif, garansi, dan catatan ongkir/instalasi bila perlu."],
        ["4) Ajukan Pertanyaan (Opsional)",
         "Kalau ada detail yang kurang jelas, gunakan kolom pesan untuk tanya: contoh pengganti merek, standar SNI/ISO, MOQ, atau opsi kualitas berbeda."],
        ["5) Bandingkan Semua Penawaran",
         "Bandingkan harga, waktu pengiriman, syarat pembayaran, garansi, reputasi supplier, dan ulasan. Tampilan perbandingan dibuat rapi agar Anda cepat mengambil keputusan."],
        ["6) Negosiasi Ringan",
         "Anda bisa minta revisi: ubah jumlah, minta diskon, ganti merek, atau sesuaikan SLA. Supplier mengirim penawaran final setelah disepakati."],
        ["7) Putuskan Pemenang",
         "Pilih supplier terbaik sesuai prioritas Anda (harga, kecepatan, kualitas). Sistem akan meminta konfirmasi sebelum lanjut ke pesanan."],
        ["8) Lanjut ke PO & Tracking",
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
      ctaBuyer: "Mulai Ajukan RFQ",   // tetap ada untuk komponen lain, tapi kita tidak tampilkan di RFQFlow
      ctaSupplier: "Jadi Supplier"
    },

    /* ======= Showcase etc (tak berubah) ======= */
    show: { title:"Koneksikan Bisnis Anda", p:"Tingkatkan jangkauan & efisiensi dengan ekosistem supplier-buyer aktif. Kelola permintaan, penawaran, dan komunikasi dari satu dashboard.", a:"Katalog", b:"RFQ", c:"Supplier" },

    supplier: { title:"Bergabung sebagai Supplier", p:"Terima RFQ relevan, perluas jaringan B2B, dan tingkatkan omzet.", bullets:["Profil & verifikasi perusahaan","Unggah katalog & kelola stok","Penawaran cepat dengan template"], k1:"RFQ/bulan", v1:"Bervariasi", k2:"Kategori", v2:"Industri & MRO", k3:"Metode", v3:"Online & email", k4:"Dukungan", v4:"Chat & email", c1:"Bergabung sebagai supplier", c2:"Pelajari Lebih Lanjut" },

    /* ======= FAQ (ditambah & diperjelas) ======= */
    faq: {
      title: "Pertanyaan Umum",
      list: [
        ["Apa itu RFQ di IronAsia?",
         "RFQ (Request for Quotation) adalah permintaan penawaran harga. Anda menulis kebutuhan (spesifikasi/jumlah/lokasi), sistem mengirim ke banyak supplier sekaligus, lalu Anda membandingkan penawaran."],
        ["Kapan saya sebaiknya pakai RFQ?",
         "Gunakan bila kebutuhan sudah jelas (contoh: tipe pompa, ukuran pipa, kapasitas mesin). Untuk proyek kompleks yang butuh solusi menyeluruh, gunakan RFP (proposal)."],
        ["Apa saja yang wajib saya tulis agar supplier paham?",
         "Minimal: nama barang, spesifikasi penting, jumlah, lokasi pengiriman, dan waktu yang Anda butuhkan. Tambahkan merek/seri (bila wajib), foto/lampiran, serta batasan kualitas jika ada."],
        ["Apakah saya bisa menyebut merek tertentu?",
         "Boleh. Anda juga bisa membuka alternatif merek dengan tingkat kualitas setara agar lebih banyak penawaran masuk."],
        ["Bagaimana perbandingan penawaran ditampilkan?",
         "Kami menampilkan tabel ringkas (harga, lead time, garansi, catatan ongkir, dll). Anda bisa mengurutkan dan menyaring agar keputusan lebih cepat."],
        ["Bagaimana jika penawaran belum sesuai?",
         "Gunakan kolom pesan/negosiasi: ubah jumlah, minta diskon, ganti merek, atau tanya ketersediaan stok. Supplier akan kirim revisi."],
        ["Apakah ada biaya menggunakan RFQ?",
         "Akun dasar umumnya gratis. Skema biaya lain (mis. layanan premium) dapat berlaku — hubungi tim kami untuk detail."],
        ["Apakah data RFQ saya aman?",
         "Kami menerapkan praktik keamanan terbaik dan kontrol akses berbasis peran. Hanya pihak relevan yang dapat melihat detail RFQ Anda."],
        ["Kapan saya menerbitkan PO?",
         "Setelah memilih penawaran pemenang dan menyepakati syarat (harga, pengiriman, pembayaran). Sistem membantu membuat PO dan melacak pesanan."],
        ["Apakah IronAsia menjamin kualitas barang?",
         "Supplier melalui proses verifikasi. Namun, Anda tetap perlu memeriksa spesifikasi, uji fungsi (jika perlu), dan menyimpan dokumentasi transaksi."],
        ["Bisakah saya mengimpor daftar kebutuhan dari file?",
         "Dukungan impor CSV/Excel tersedia secara bertahap. Untuk sekarang, Anda dapat menempel daftar spesifikasi ke kolom catatan atau melampirkan file."],
        ["Bagaimana kalau saya pemula dan belum tahu spesifikasi tepat?",
         "Tulis masalah dan tujuan penggunaan (contoh: 'butuh blower untuk ruang 50 m², 8 jam/hari'). Supplier dapat menyarankan opsi, lalu Anda pilih yang paling cocok."]
      ]
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

    dl: { title:"Mulai Menggunakan IronAsia", p:"Akses lewat web, atau unduh aplikasi mobile Anda.", web:"Buka Marketplace Web", and:"Download Android", ios:"Download iOS" },
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
      ["1) Describe Your Need","Name, key specs, quantity, ship-to location, timing. Add brand (optional) and attachments if any."],
      ["2) Distribute to Relevant Suppliers","The system routes your RFQ to vetted, relevant suppliers."],
      ["3) Suppliers Respond","They check stock/lead time and reply with price, ETA, warranty, shipping notes."],
      ["4) Ask Questions (Optional)","Clarify brand alternatives, standards, MOQ, etc."],
      ["5) Compare Quotes","Side-by-side table: price, lead time, warranty, terms, reputation."],
      ["6) Light Negotiation","Request revisions: quantity, discount, brand change, SLA."],
      ["7) Select Winner","Choose based on your priority: price, speed, or quality."],
      ["8) PO & Tracking","Issue PO and track fulfillment and documents."]
    ],
    tipsTitle:"Quick tips for better quotes:",
    tips:["State must-have specs","Include quantity & ship-to location","Allow brand alternatives if possible","Set realistic delivery deadline","Share target price (optional)"]},
    show:{ title:"Connect Your Business", p:"Expand reach & efficiency with an active buyer-supplier ecosystem. Manage requests, quotes and communication from a single dashboard.", a:"Catalog", b:"RFQ", c:"Suppliers" },
    supplier:{ title:"Join as a Supplier", p:"Receive relevant RFQs, expand your B2B network, and grow revenue.", bullets:["Company profile & verification","Upload catalog & manage stock","Quick quotes with templates"], k1:"RFQs / month", v1:"Varies", k2:"Category", v2:"Industrial & MRO", k3:"Method", v3:"Online & email", k4:"Support", v4:"Chat & email", c1:"Join as a supplier", c2:"Learn More" },
    faq:{ title:"Frequently Asked Questions", list:[
      ["What is an RFQ on IronAsia?","A price request sent to multiple suppliers at once for easy comparison."],
      ["When should I use an RFQ?","When your need is clear. For complex solution work, use an RFP."],
      ["What do suppliers need to know?","Name, key specs, quantity, ship-to location, timing, and any brand requirement."],
      ["Can I require a specific brand?","Yes, or allow equivalents for more competitive quotes."],
      ["How are quotes compared?","Side-by-side table: price, lead time, warranty, shipping, payment terms."],
      ["If quotes don’t fit?","Use messages to request revisions or negotiate."],
      ["Any fees?","Basic usage is generally free. Contact our team for premium options."],
      ["Is my data secure?","We apply best-practice security and role-based access control."],
      ["When do I issue a PO?","After you pick a winner and confirm terms."],
      ["Do you guarantee product quality?","Suppliers are verified, but you should still validate specs and keep documentation."],
      ["Can I import a list?","CSV/Excel import is rolling out; meanwhile attach files or paste specs."],
      ["I’m new and unsure of specs.","Describe your use case and constraints—suppliers can suggest suitable options."]
    ]},

    about:{ title:"About Us", timelineTitle:"Company Timeline", timeline:["2020 – Idea born","2021-2024 – Platform development","2025 – Official launch of IronAsia"], visionTitle:"Vision", vision:"To become Indonesia’s largest building materials e-commerce platform, connecting the entire construction ecosystem.", missionTitle:"Mission", mission:["Provide easy access to a wide range of building materials.","Ensure transparent pricing and quality.","Help contractors and retailers get materials on time.","Promote digitalization of Indonesia’s construction industry.","Serve both B2B and B2C needs in a hybrid way."], valuesTitle:"Core Values", values:["Integrity","Efficiency","Innovation","Collaboration","Sustainability"] },

    dl:{ title:"Get Started with IronAsia", p:"Access via web or download our mobile apps.", web:"Open Web Marketplace", and:"Download Android", ios:"Download iOS" },
    footer:{ privacy:"Privacy Policy", terms:"Terms & Conditions", download:"Download" }
  },

  /* ================= ZH (简体) ================= */
  zh: {
    seo: { title: "IronAsia – 工业B2B平台：询价(RFQ)与认证供应商", desc: "IronAsia 是工业B2B采购平台：发送自定义询价、查找认证供应商，并快速透明地管理报价与订单。" },
    nav:{ about:"关于我们", fitur:"功能", alur:"询价流程", sorotan:"亮点", faq:"常见问题", download:"下载", kontak:"联系我们", buka:"打开平台" },
    hero:{ badge:"工业B2B采购平台", h1a:"更高效的工业采购", h1b:"来自智能询价", p:"创建自定义询价（规格、品牌、数量），一次发送给多个认证供应商。对比报价，选择最佳方案并高效推进。", cta1:"打开平台", cta2:"下载应用", trust1:"认证供应商", trust2:"安全与隐私", trust3:"快速响应", quote:"值得信赖的B2B平台：询价、工业目录与透明采购。" },
    features:{ title:"为什么选择 IronAsia？", desc:"可信赖的B2B & B2C建材平台：更快、更安全、更透明。", list:[
      ["更广阔的市场","连接全国乃至国际买家与供应商。"],
      ["认证供应商","所有供应商都经过严格验证，确保交易安全。"],
      ["效率提升40%","采购和分销比传统方式快40%。"],
      ["透明价格","清晰的价格与质量，减少不公平风险。"],
      ["销售灵活性","支持批发和零售销售。"],
      ["数据与洞察","获取项目需求数据，优化业务策略。"],
      ["库存清理","帮助更快地处理旧库存。"],
      ["客户服务","买卖双方直接沟通，反馈更快速。"],
      ["实时通知","随时随地跟踪询价、报价和订单。"],
      ["品牌与信誉","供应商展示更专业的企业形象。"]
    ]},
    rfq:{ title:"IronAsia 询价流程", desc:"填写需求 → 分发供应商 → 接收并对比报价 → 选择中标方。", steps:[
      ["1) 填写需求","名称、关键规格、数量、收货地与时间。可选品牌与附件。"],
      ["2) 分发到相关供应商","系统路由至匹配的已认证供应商。"],
      ["3) 供应商响应","反馈价格、交期、质保、运费等信息。"],
      ["4) 提问澄清（可选）","确认替代品牌、标准、MOQ等。"],
      ["5) 对比报价","表格并列展示：价格、交期、质保、条款等。"],
      ["6) 轻量协商","请求修改：数量、折扣、品牌或SLA。"],
      ["7) 选择中标","根据价格/速度/质量等优先级决定。"],
      ["8) 发出PO并追踪","发出PO，跟踪履约与单据。"]
    ],
    tipsTitle:"快速获得好报价的小提示：",
    tips:["写清必需规格","包含数量与收货地","尽量允许等效品牌","交期要合理","可提供目标价（可选）"]},
    show:{ title:"连接您的业务", p:"借助活跃生态提升覆盖与效率。统一面板管理需求、报价与沟通。", a:"目录", b:"询价", c:"供应商" },
    supplier:{ title:"加入成为供应商", p:"接收相关询价，拓展B2B网络并提升营收。", bullets:["公司资料与认证","上传目录并管理库存","用模板快速报价"], k1:"询价/每月", v1:"不定", k2:"品类", v2:"工业与MRO", k3:"方式", v3:"在线与邮件", k4:"支持", v4:"聊天与邮件", c1:"以供应商身份加入", c2:"了解更多" },
    faq:{ title:"常见问题", list:[
      ["什么是询价（RFQ）？","一次性向多家供应商发送价格请求，便于快速对比。"],
      ["何时使用RFQ？","当需求已清晰。若需完整解决方案，建议RFP。"],
      ["供应商需要哪些信息？","名称、关键规格、数量、收货地、时间与品牌要求等。"],
      ["能指定品牌吗？","可以，或允许等效品牌以获得更多报价。"],
      ["如何对比？","价格、交期、质保、运费、支付条款等并列显示。"],
      ["不满意报价怎么办？","通过消息协商并请求修订。"],
      ["是否收费？","基础使用通常免费。付费方案请联系团队。"],
      ["数据安全吗？","采用业界最佳实践与基于角色的访问控制。"],
      ["何时发PO？","选定中标并确认条款后。"],
      ["是否保证质量？","供应商已认证，但仍建议核对规格并保留单据。"],
      ["能导入清单吗？","CSV/Excel导入逐步开放；现可附加文件或粘贴规格。"],
      ["我是新手不清楚规格","描述场景与限制，供应商可给出合适建议。"]
    ]},
    about:{ title:"关于我们", timelineTitle:"公司历程", timeline:["2020 – 概念诞生","2021-2024 – 平台开发","2025 – IronAsia 正式上线"], visionTitle:"愿景", vision:"成为印尼最大的建材电商平台，连接整个建筑生态系统。", missionTitle:"使命", mission:["提供便捷获取各类建材的途径。","确保价格与质量透明。","帮助承包商与零售商准时获得建材。","推动印尼建筑行业的数字化。","同时服务 B2B 与 B2C 混合需求。"], valuesTitle:"核心价值观", values:["诚信","效率","创新","协作","可持续性"] },
    dl:{ title:"开始使用 IronAsia", p:"可通过网页或下载移动应用。", web:"打开网页平台", and:"下载 Android", ios:"下载 iOS" },
    footer:{ privacy:"隐私政策", terms:"条款与条件", download:"下载" }
  }
};
