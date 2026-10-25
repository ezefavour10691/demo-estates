(() => {
  const S = SITE, $ = s => document.querySelector(s), $$ = s => document.querySelectorAll(s);
  let lang = (navigator.language || "en").toLowerCase().startsWith("tr") ? "tr" : "en";
  const T = k => S.i18n[lang][k];
  const fmt = n => S.currency + n.toLocaleString("en-GB");
  const wa = txt => `https://wa.me/${S.whatsapp}?text=${encodeURIComponent(txt)}`;
  const opt = (v, t) => `<option value="${v}">${t}</option>`;
  Object.entries(S.colors).forEach(([k, v]) => document.documentElement.style.setProperty("--" + k, v));

  // Built-in placeholder image, used when a listing has no photo.
  const ph = i => {
    const h = [200, 190, 215, 28, 340, 170][i % 6];
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 260'><defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='hsl(${h} 55% 80%)'/><stop offset='1' stop-color='hsl(${h} 45% 42%)'/></linearGradient></defs><rect width='400' height='260' fill='url(#g)'/><path d='M120 175v-55l80-48 80 48v55z' fill='#fff' fill-opacity='.92'/><rect x='186' y='138' width='28' height='37' fill='hsl(${h} 45% 32%)'/></svg>`;
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  };
  const pic = l => `<img src="${l.img || ph(l.id)}" alt="${l.img ? l.title[lang] : ""}" loading="lazy">`;
  const meta = l => `<span class="meta"><span>${l.beds} ${T("beds")}</span><span>${l.baths} ${T("baths")}</span><span>${l.size} m²</span></span>`;

  const card = l => `<button class="card" data-id="${l.id}">${pic(l)}<span class="price">${fmt(l.price)}</span><h3>${l.title[lang]}</h3><span class="area">${l.area}, ${S.types[l.type][lang]}</span>${meta(l)}</button>`;

  function render() {
    const a = $("#fArea").value, b = +$("#fBudget").value, ty = $("#fType").value;
    const list = S.listings.filter(l => (!a || l.area === a) && (!b || l.price <= b) && (!ty || l.type === ty));
    $("#count").textContent = `${list.length} ${T("found")}`;
    $("#grid").innerHTML = list.length ? list.map(card).join("") : `<p class="none">${T("none")}</p>`;
  }

  function build() {
    const ids = ["#fArea", "#fBudget", "#fType"], v = ids.map(s => $(s).value);
    $("#fArea").innerHTML = opt("", T("any")) + S.areas.map(a => opt(a, a)).join("");
    $("#fBudget").innerHTML = opt("", T("any")) + S.budgets.map(b => opt(b, `${T("upTo")} ${fmt(b)}`)).join("");
    $("#fType").innerHTML = opt("", T("any")) + Object.keys(S.types).map(k => opt(k, S.types[k][lang])).join("");
    ids.forEach((s, i) => ($(s).value = v[i]));
  }

  function setLang() {
    document.documentElement.lang = lang;
    document.title = `${S.name} | ${T("heroTitle")}`;
    $$("[data-i]").forEach(e => (e.textContent = T(e.dataset.i)));
    $("#lang").textContent = lang === "en" ? "TR" : "EN";
    $("#fab").textContent = T("waBtn");
    $("#fab").href = wa(T("waGeneral"));
    build();
    render();
  }

  function openHome(id) {
    const l = S.listings.find(x => x.id === id), d = $("#dlg");
    d.innerHTML = `${pic(l)}<button class="x" aria-label="${T("close")}">×</button><div class="dbody"><h3>${l.title[lang]}</h3><p class="price">${fmt(l.price)}</p><p>${l.area}, ${S.types[l.type][lang]}</p><p>${l.desc[lang]}</p>${meta(l)}<a class="btn" target="_blank" rel="noopener" href="${wa(`${T("waHello")} ${l.title[lang]} (${fmt(l.price)}, ${l.area})`)}">${T("waBtn")}</a></div>`;
    d.showModal();
  }

  $("#brand").textContent = S.name;
  $("#foot").textContent = `© ${new Date().getFullYear()} ${S.name}`;
  $("#search").addEventListener("input", render);
  $("#search").addEventListener("submit", e => e.preventDefault());
  $("#grid").addEventListener("click", e => { const c = e.target.closest(".card"); if (c) openHome(+c.dataset.id); });
  $("#dlg").addEventListener("click", e => { if (e.target === e.currentTarget || e.target.closest(".x")) e.currentTarget.close(); });
  $("#lang").addEventListener("click", () => { lang = lang === "en" ? "tr" : "en"; setLang(); });
  $("#cform").addEventListener("submit", e => {
    e.preventDefault();
    window.open(wa(`${$("#cName").value}: ${$("#cMsg").value}`), "_blank", "noopener");
  });

  const ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "RealEstateAgent", name: S.name, email: S.email, areaServed: S.areas });
  document.head.appendChild(ld);

  setLang();
})();