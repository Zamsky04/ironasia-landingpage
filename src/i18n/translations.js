export const LANGS = {
  id: { label: "ID", code: "id", dir: "ltr" },
  en: { label: "EN", code: "en", dir: "ltr" },
  zh: { label: "中文", code: "zh", dir: "ltr" },
};

export const TRANSLATIONS = {
  id: {
    seo: {
      title: "IronAsia – Marketplace B2B Industri: RFQ, Supplier Tervalidasi",
      desc: "IronAsia adalah marketplace B2B industri untuk pengadaan barang: ajukan RFQ kustom, temukan supplier tervalidasi, kelola penawaran & pemesanan dengan cepat dan transparan."
    },
    nav: { fitur: "Fitur", alur: "Alur RFQ", sorotan: "Sorotan", faq: "FAQ", download: "Download", kontak: "Kontak", buka: "Buka Marketplace" },
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
      title: "Kenapa IronAsia?",
      desc: "Kecepatan, transparansi, dan keandalan untuk kebutuhan pengadaan B2B Anda.",
      list: [
        ["RFQ Cepat","Ajukan sekali, terkirim ke banyak supplier relevan."],
        ["Supplier Tervalidasi","Kurasi ketat & verifikasi identitas."],
        ["Katalog Kaya","Ribuan produk industri dengan spesifikasi lengkap."],
        ["Notifikasi Real-time","Pantau status RFQ & penawaran."],
        ["Perbandingan Penawaran","Bandingkan harga, SLA, merek, garansi."],
        ["Integrasi Email","Update otomatis ke inbox Anda."]
      ]
    },
    rfq: {
      title: "Alur RFQ B2B IronAsia",
      desc: "Sederhana untuk buyer, jelas untuk supplier.",
      steps: [
        ["Buat RFQ","Isi spesifikasi, merek opsional, jumlah, SLA & catatan."],
        ["Kirim ke Supplier","Sistem menyalurkan RFQ ke supplier relevan."],
        ["Terima Penawaran","Supplier cek stok/lead time lalu kirim penawaran."],
        ["Bandingkan & Pilih","Bandingkan harga, durasi, garansi, dan reputasi."]
      ],
      ctaBuyer: "Mulai Ajukan RFQ",
      ctaSupplier: "Jadi Supplier"
    },
    show: { title:"Koneksikan Bisnis Anda", p:"Tingkatkan jangkauan & efisiensi dengan ekosistem supplier-buyer aktif. Kelola permintaan, penawaran, dan komunikasi dari satu dashboard.", a:"Katalog", b:"RFQ", c:"Supplier" },
    supplier: { title:"Bergabung sebagai Supplier", p:"Terima RFQ relevan, perluas jaringan B2B, dan tingkatkan omzet.", bullets:["Profil & verifikasi perusahaan","Unggah katalog & kelola stok","Penawaran cepat dengan template"], k1:"RFQ/bulan", v1:"Bervariasi", k2:"Kategori", v2:"Industri & MRO", k3:"Metode", v3:"Online & email", k4:"Dukungan", v4:"Chat & email", c1:"Daftar Supplier", c2:"Pelajari Lebih Lanjut" },
    faq: { title:"Pertanyaan Umum", list:[
      ["Apa itu RFQ di IronAsia?","Permintaan penawaran harga kustom yang dikirim ke banyak supplier sekaligus."],
      ["Bagaimana cara supplier bergabung?","Buat akun, verifikasi, unggah katalog, lalu siap menerima RFQ."],
      ["Apakah ada biaya?","Model biaya dapat bervariasi (hubungi tim kami). Akun dasar umumnya gratis."],
      ["Bagaimana keamanan data?","Kami menerapkan praktik terbaik keamanan dan kontrol akses berbasis peran."]
    ]},
    dl: { title:"Mulai Menggunakan IronAsia", p:"Akses lewat web, atau unduh aplikasi mobile Anda.", web:"Buka Marketplace Web", and:"Download Android", ios:"Download iOS" },
    footer: { privacy:"Kebijakan Privasi", terms:"Syarat & Ketentuan", download:"Download" }
  },

  en: {
    seo: { title: "IronAsia – B2B Industrial Marketplace: RFQ & Verified Suppliers", desc: "IronAsia is a B2B industrial marketplace for procurement: send custom RFQs, find verified suppliers, and manage quotes & orders fast and transparently." },
    nav: { fitur:"Features", alur:"RFQ Flow", sorotan:"Showcase", faq:"FAQ", download:"Download", kontak:"Contact", buka:"Open Marketplace" },
    hero: { badge:"B2B Industrial Marketplace", h1a:"Faster Industrial Procurement", h1b:"with Smart RFQs", p:"Create custom RFQs (specs, brand, quantity) and send to multiple verified suppliers at once. Compare quotes, pick the best, and proceed more efficiently.", cta1:"Open Marketplace", cta2:"Get the App", trust1:"Verified Suppliers", trust2:"Security & Privacy", trust3:"Fast Response", quote:"A trusted B2B platform for RFQs, rich industrial catalog, and transparent procurement." },
    features: { title:"Why IronAsia?", desc:"Speed, transparency, and reliability for your B2B procurement.", list:[
      ["Fast RFQs","Submit once, reach many relevant suppliers."],
      ["Verified Suppliers","Strict curation & identity verification."],
      ["Rich Catalog","Thousands of products with full specs."],
      ["Real-time Notifications","Track RFQ & quote status."],
      ["Quote Comparison","Compare price, SLA, brand, warranty."],
      ["Email Integration","Automatic updates to your inbox."]
    ]},
    rfq:{ title:"IronAsia B2B RFQ Flow", desc:"Simple for buyers, clear for suppliers.", steps:[
      ["Create RFQ","Fill specs, optional brand, quantity, SLA & notes."],
      ["Distribute","System routes RFQs to relevant suppliers."],
      ["Receive Quotes","Suppliers check stock/lead time then respond."],
      ["Compare & Choose","Compare price, lead time, warranty, reputation."]
    ], ctaBuyer:"Start an RFQ", ctaSupplier:"Become a Supplier" },
    show:{ title:"Connect Your Business", p:"Expand reach & efficiency with an active buyer-supplier ecosystem. Manage requests, quotes and communication from a single dashboard.", a:"Catalog", b:"RFQ", c:"Suppliers" },
    supplier:{ title:"Join as a Supplier", p:"Receive relevant RFQs, expand your B2B network, and grow revenue.", bullets:["Company profile & verification","Upload catalog & manage stock","Quick quotes with templates"], k1:"RFQs / month", v1:"Varies", k2:"Category", v2:"Industrial & MRO", k3:"Method", v3:"Online & email", k4:"Support", v4:"Chat & email", c1:"Register Supplier", c2:"Learn More" },
    faq:{ title:"Frequently Asked Questions", list:[
      ["What is an RFQ on IronAsia?","A custom price request sent to many suppliers at once."],
      ["How do suppliers join?","Create account, verify, upload catalog, then start receiving RFQs."],
      ["Are there fees?","Pricing may vary (contact our team). Basic account is generally free."],
      ["How is data secured?","We apply best practices and role-based access control."]
    ]},
    dl:{ title:"Get Started with IronAsia", p:"Access via web or download our mobile apps.", web:"Open Web Marketplace", and:"Download Android", ios:"Download iOS" },
    footer:{ privacy:"Privacy Policy", terms:"Terms & Conditions", download:"Download" }
  },

  zh: {
    seo: { title: "IronAsia – 工业B2B平台：询价(RFQ)与认证供应商", desc: "IronAsia 是工业B2B采购平台：发送自定义询价、查找认证供应商，并快速透明地管理报价与订单。" },
    nav:{ fitur:"功能", alur:"询价流程", sorotan:"亮点", faq:"常见问题", download:"下载", kontak:"联系我们", buka:"打开平台" },
    hero:{ badge:"工业B2B采购平台", h1a:"更高效的工业采购", h1b:"来自智能询价", p:"创建自定义询价（规格、品牌、数量），一次发送给多个认证供应商。对比报价，选择最佳方案并高效推进。", cta1:"打开平台", cta2:"下载应用", trust1:"认证供应商", trust2:"安全与隐私", trust3:"快速响应", quote:"值得信赖的B2B平台：询价、工业目录与透明采购。" },
    features:{ title:"为什么选择 IronAsia？", desc:"为您的B2B采购提供速度、透明与可靠。", list:[
      ["快速询价","一次提交，触达多家相关供应商。"],
      ["认证供应商","严格筛选与身份核验。"],
      ["丰富目录","数千种工业产品与完整规格。"],
      ["实时通知","跟踪询价与报价状态。"],
      ["报价对比","对比价格、交期、品牌与质保。"],
      ["邮件集成","自动更新至您的邮箱。"]
    ]},
    rfq:{ title:"IronAsia 询价流程", desc:"买家简单，供应商清晰。", steps:[
      ["创建询价","填写规格、可选品牌、数量、SLA与备注。"],
      ["分发至供应商","系统路由至相关供应商。"],
      ["接收报价","供应商核对库存/交期后回复。"],
      ["对比并选择","对比价格、交期、质保与信誉。"]
    ], ctaBuyer:"开始询价", ctaSupplier:"成为供应商" },
    show:{ title:"连接您的业务", p:"借助活跃的买卖双方生态扩展覆盖与效率。统一面板管理需求、报价与沟通。", a:"目录", b:"询价", c:"供应商" },
    supplier:{ title:"加入成为供应商", p:"接收相关询价，拓展B2B网络并提升营收。", bullets:["公司资料与认证","上传目录并管理库存","使用模板快速报价"], k1:"询价/每月", v1:"不定", k2:"品类", v2:"工业与MRO", k3:"方式", v3:"在线与邮件", k4:"支持", v4:"聊天与邮件", c1:"注册供应商", c2:"了解更多" },
    faq:{ title:"常见问题", list:[
      ["什么是 IronAsia 的询价？","一次性向多家供应商发送的自定义价格请求。"],
      ["供应商如何加入？","创建账号、完成认证、上传目录后即可接收询价。"],
      ["是否收费？","收费方式可能不同（请联系团队）。基础账号通常免费。"],
      ["数据如何安全？","采用业界最佳安全实践与基于角色的访问控制。"]
    ]},
    dl:{ title:"开始使用 IronAsia", p:"可通过网页访问，或下载移动应用。", web:"打开网页平台", and:"下载 Android", ios:"下载 iOS" },
    footer:{ privacy:"隐私政策", terms:"条款与条件", download:"下载" }
  }
};
