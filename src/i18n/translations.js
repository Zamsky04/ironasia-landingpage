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
      list: [
        ["什么是 RFQ？",
        "RFQ（询价）是一次性向多家供应商发出价格与条件请求，便于快速对比与选择。"],
        ["何时使用 RFQ？",
        "当需求已比较明确时更合适；若是方案型项目，请考虑 RFP（方案征集）。"],
        ["供应商需要哪些信息？",
        "名称、关键规格、数量、收货地点与时间要求，以及是否必须指定品牌等。"],
        ["能否指定品牌？",
        "可以；如允许等效品牌，往往能获得更具竞争力的报价。"],
        ["如何对比报价？",
        "以并列表格呈现价格、交期、质保、运费与付款条款等，清晰直观。"],
        ["如果报价不合适怎么办？",
        "通过消息沟通，提出修改或进行轻量协商。"],
        ["是否收费？",
        "基础使用通常免费；若需高级服务，请联系团队。"],
        ["数据是否安全？",
        "采用行业最佳实践与基于角色的访问控制，仅相关方可查看。"],
        ["何时发出 PO？",
        "选定中选供应商并确认条款后，即可生成采购订单（PO）。"],
        ["是否保证商品质量？",
        "供应商已通过资质审核，但仍建议复核规格并保留交易凭证。"],
        ["能否导入需求清单？",
        "CSV/Excel 导入将逐步开放；当前可附加文件或粘贴规格。"],
        ["我是新手不确定规格怎么办？",
        "描述使用场景与约束（如“50 m² 空间，日用 8 小时”），供应商可给出合适建议。"]
      ]
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
    dl: {
      title: "开始使用 IronAsia",
      p: "可通过网页访问，或下载移动端应用。",
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
