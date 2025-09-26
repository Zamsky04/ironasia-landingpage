export const commonDomainTypos = {
  "gamil.com": "gmail.com","gmial.com": "gmail.com","gmaill.com": "gmail.com",
  "gmail.co": "gmail.com","gmail.con": "gmail.com","gmail.cim": "gmail.com",
  "gmail.cmo": "gmail.com","gmail.om": "gmail.com","gmai.com": "gmail.com",
  "gmal.com": "gmail.com","gmil.com": "gmail.com","gmaik.com": "gmail.com",
  "gmaul.com": "gmail.com","gmaiil.com": "gmail.com","gmaill.co": "gmail.com",
  "yaho.com": "yahoo.com","yaoo.com": "yahoo.com","yahho.com": "yahoo.com",
  "outllok.com": "outlook.com","outlook.co": "outlook.com","outlook.con": "outlook.com",
  "hotmial.com": "hotmail.com","hotmail.co": "hotmail.com","hotmail.con": "hotmail.com",
  "iclod.com": "icloud.com","icoud.com": "icloud.com","icloud.co": "icloud.com",
  "protonmai.com": "protonmail.com","protonmail.co": "protonmail.com","proton.me.com": "proton.me",
};

const GTLD_SET = new Set([
  "com","org","net","edu","gov","mil","int",
  "biz","info","name","pro","aero","coop","museum",
  "io","ai","app","dev","cloud","tech","shop","store","blog",
  "site","online","xyz","me","tv","us","uk","ca","de","fr","nl",
  "it","es","se","no","dk","fi","pl","ru","ch","at","be","cz",
  "in","jp","kr","sg","my","th","vn","ph","hk","tw","cn",
  "au","nz","id","sa","ae","qa","kw","tr","gr","pt","ie","ro",
  "hu","sk","si","bg","lt","lv","ee","ua","by","br","ar","cl",
  "mx","co","pe","uy","za","ng","ke","eg"
]);

// ISO 3166-1 alpha-2 ccTLD (ringkas tapi lengkap; 'xo' TIDAK ada)
const CC_TLD_SET = new Set([
  "ac","ad","ae","af","ag","ai","al","am","ao","aq","ar","as","at","au","aw","ax","az",
  "ba","bb","bd","be","bf","bg","bh","bi","bj","bl","bm","bn","bo","bq","br","bs","bt","bv","bw","by","bz",
  "ca","cc","cd","cf","cg","ch","ci","ck","cl","cm","cn","co","cr","cu","cv","cw","cx","cy","cz",
  "de","dj","dk","dm","do","dz",
  "ec","ee","eg","eh","er","es","et","eu",
  "fi","fj","fk","fm","fo","fr",
  "ga","gb","gd","ge","gf","gg","gh","gi","gl","gm","gn","gp","gq","gr","gs","gt","gu","gw","gy",
  "hk","hm","hn","hr","ht","hu",
  "id","ie","il","im","in","io","iq","ir","is","it",
  "je","jm","jo","jp",
  "ke","kg","kh","ki","km","kn","kp","kr","kw","ky","kz",
  "la","lb","lc","li","lk","lr","ls","lt","lu","lv","ly",
  "ma","mc","md","me","mf","mg","mh","mk","ml","mm","mn","mo","mp","mq","mr","ms","mt","mu","mv","mw","mx","my","mz",
  "na","nc","ne","nf","ng","ni","nl","no","np","nr","nu","nz",
  "om",
  "pa","pe","pf","pg","ph","pk","pl","pm","pn","pr","ps","pt","pw","py",
  "qa",
  "re","ro","rs","ru","rw",
  "sa","sb","sc","sd","se","sg","sh","si","sj","sk","sl","sm","sn","so","sr","ss","st","sv","sx","sy","sz",
  "tc","td","tf","tg","th","tj","tk","tl","tm","tn","to","tr","tt","tv","tw","tz",
  "ua","ug","uk","um","us","uy","uz",
  "va","vc","ve","vg","vi","vn","vu",
  "wf","ws",
  "ye","yt",
  "za","zm","zw"
]);

// public suffix 2-level yang sering dipakai
const PUBLIC_SUFFIX_2L = new Set([
  "co.id","ac.id","or.id","sch.id","go.id",
  "co.uk","ac.uk","gov.uk",
  "com.au","net.au","org.au","edu.au","gov.au",
  "co.jp","ne.jp","or.jp","ac.jp",
  "com.sg","com.my","com.hk","com.tw","com.cn"
]);

function isValidPublicSuffix(labels) {
  const n = labels.length;
  if (n < 2) return false;
  const last = labels[n - 1].toLowerCase();
  const last2 = (labels[n - 2] + "." + labels[n - 1]).toLowerCase();

  // cek 2-level public suffix dulu
  if (PUBLIC_SUFFIX_2L.has(last2)) return true;

  // lalu cek TLD satu label: gTLD atau ccTLD
  return GTLD_SET.has(last) || CC_TLD_SET.has(last);
}

const POPULAR_DOMAINS = [
  "gmail.com","yahoo.com","outlook.com","hotmail.com","icloud.com","proton.me","protonmail.com",
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
  const corporateTlds = ["co.id","ac.id","or.id","co.uk","com.au","co.jp"];
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
      if (dist < bestDist) { bestDist = dist; best = cand; }
    }
    if (best) return best;
  }
  return null;
}

export function normalizeEmailInput(raw) {
  return String(raw || "").replace(/[\u200B-\u200D\uFEFF\u00A0]/g, "").trim();
}

/** i18n-aware email validation
 * @param {string} value
 * @param {(key:string)=>string|undefined} t
 * @param {'help'|'demo'} ns optional namespace to pick suggestion button label
 */
export function validateEmailWithHints(value, t, ns = 'help') {
  const v = normalizeEmailInput(value);

  const msg = (k, fallback) => (t && t(k)) || fallback;

  if (!v) return { error: msg("errors.email.empty", "Email cannot be empty.") };
  if (/\s/.test(v)) return { error: msg("errors.email.spaces", "Email must not contain spaces.") };

  const atCount = (v.match(/@/g) || []).length;
  if (atCount !== 1) return { error: msg("errors.email.at", "Invalid email format (missing/duplicate @).") };

  const [local, domain] = v.split("@");
  if (!local || !domain) return { error: msg("errors.email.parts", "Invalid email format (local/domain missing).") };

  if (/[<>\u005B\u005D(),;:\\"]/g.test(v)) {
    return { error: msg("errors.email.disallowed", "Email contains disallowed characters.") };
  }

  if (!/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(local)) {
    return { error: msg("errors.email.localInvalid", "Local part contains invalid characters.") };
  }
  if (local.startsWith(".") || local.endsWith(".") || local.includes("..")) {
    return { error: msg("errors.email.localDots", "Local part must not start/end with dot or contain consecutive dots.") };
  }

  if (domain.startsWith(".") || domain.endsWith(".")) {
    return { error: msg("errors.email.domainEdgeDot", "Domain must not start or end with a dot.") };
  }
  if (domain.includes("..")) {
    return { error: msg("errors.email.domainDoubleDot", "Domain must not contain consecutive dots.") };
  }
  if (!domain.includes(".")) {
    return { error: msg("errors.email.domainNoDot", "Domain must contain a dot (e.g., company.co.id).") };
  }
  if (domain.length > 253) {
    return { error: msg("errors.email.domainTooLong", "Domain name is too long.") };
  }

  const labels = domain.split(".");
  for (const label of labels) {
    if (label.length === 0) return { error: msg("errors.email.domainEmptyLabel", "Domain contains an empty label.") };
    if (label.length > 63) return { error: msg("errors.email.domainLabelTooLong", "One of the domain labels exceeds 63 characters.") };
    if (!/^[A-Za-z0-9-]+$/.test(label)) return { error: msg("errors.email.domainInvalidChars", "Domain contains invalid characters.") };
    if (label.startsWith("-") || label.endsWith("-")) {
      return { error: msg("errors.email.domainDashEdge", "Domain labels must not start or end with a dash (-).") };
    }
  }

  const suggestion = bestDomainSuggestion(domain);
    if (suggestion && suggestion !== domain.toLowerCase()) {
    return {
        error: msg("errors.email.suspectDomain", "Suspicious domain. Did you mean {0}?").replace("{0}", suggestion),
        hint:  msg("errors.email.hint", "Did you mean {0}?").replace("{0}", suggestion),
        suggested: `${local}@${suggestion}`,
        fixLabel: (t && t(`${ns}.form.fix`)) || "Fix",
    };
    }

    // 2) Kalau tidak ada saran, baru ketatkan TLD/public suffix
    const tld = labels[labels.length - 1];
    const isPunycode = tld.toLowerCase().startsWith("xn--");
    const isAlphaMin2 = /^[A-Za-z]{2,}$/.test(tld);
    if (!(isPunycode || isAlphaMin2)) {
    return { error: msg("errors.email.tld", "Invalid top-level domain (e.g., .com, .co.id, .id, .org).") };
    }

    if (!isValidPublicSuffix(labels)) {
    return { error: msg("errors.email.tld", "Invalid top-level domain (e.g., .com, .co.id, .id, .org).") };
    }

    return { error: "", okLabel: (t && t("common.valid")) || "Looks valid." };
}
