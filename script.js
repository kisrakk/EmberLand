/* ===== EMBERLAND festival — script =====
   Everything lives inside startEmberland(site), where "site" is the main <div class="site">. */

/* All the text in English and Spanish (elements with data-i18n="key" get swapped) */
const TEXT = {
"en": {
"navLineup": "Line-up",
"navEvents": "Events",
"navTickets": "Tickets",
"navVenue": "Venue",
"navInfo": "Info",
"cartBtn": "Tickets",
"heroKicker": "TABERNAS DESERT · ALMERÍA · SPAIN",
"heroDates": "22—25 JULY 2027 · 4 NIGHTS UNDER THE DESERT SKY",
"days": "days",
"hours": "hours",
"minutes": "minutes",
"seconds": "seconds",
"getTickets": "GET TICKETS",
"watchVibe": "WATCH THE VIBE ↓",
"f4days": "4 DAYS",
"f6stages": "6 STAGES",
"f90": "90+ ARTISTS",
"f40k": "40,000 BURNERS",
"mDesert": "TABERNAS DESERT",
"mDates": "22—25 JULY 2027",
"mNights": "4 NIGHTS",
"mStages": "6 STAGES",
"mArtists": "90+ ARTISTS",
"mFire": "FIRE ART",
"mSunrise": "SUNRISE SETS",
"aboutBig": "is a four-day desert gathering of electronic music, giant fire art and light shows, built from nothing in the only desert in Europe.",
"sArtists": "artists",
"sStages": "stages",
"sNights": "nights",
"sBurners": "burners",
"thu": "THU 22",
"fri": "FRI 23",
"sat": "SAT 24",
"sun": "SUN 25",
"sunriseSet": "Sunrise closing set",
"fictional": "All artists are fictional · line-up subject to change",
"vibeQuote1": "burn bright.",
"shuffle": "SHUFFLE THE DECK ↻",
"vibeQuote2": "leave no trace.",
"upcoming": "UPCOMING",
"eventsLead": "Can’t wait until July? Ember Nights bring the fire to cities around Spain and Portugal all year.",
"mainBurn": "The main burn: 4 nights, 6 stages, 90+ artists, giant fire art.",
"from": "from",
"book": "BOOK →",
"closingParty": "CLOSING PARTY · SANT ANTONI",
"pTabernas": "TABERNAS DESERT · ALMERÍA",
"tickets": "TICKETS",
"ticketsLead": "Pick your pass. Every ticket is a wristband plus a lanyard pass, sent to your phone and posted to your door.",
"dayPass": "Day Pass",
"pass4": "4-Day Pass",
"camp": "4-Day + Camp",
"vip": "VIP Pass",
"whenDay": "1 DAY · THU/FRI/SAT/SUN",
"when4": "22—25 JULY",
"whenCamp": "21—26 JULY",
"bestSeller": "BEST SELLER",
"limited": "LIMITED",
"pkOneDay": "Entry for one day",
"pkStages": "All 6 stages",
"pkShuttle": "Free shuttle",
"pkNights": "All 4 nights",
"pkSunrise": "Sunrise closing set",
"pkEverything": "Everything in 4-day pass",
"pkCampSpot": "Shaded camp spot",
"pkShowers": "Showers & lockers",
"pkEarly": "Early entry Wed",
"pkDecks": "Raised viewing decks",
"pkFast": "Fast-lane entry",
"pkBars": "VIP bars & lounge",
"pkGlamp": "Glamping tent upgrade",
"add": "ADD +",
"added": "ADDED ✓",
"ticketsNote": "Prices include fees · payment in up to 3 instalments · demo site, nothing is really sold",
"desert": "THE DESERT",
"venueLead": "Tabernas, Almería: canyons, red rock and the sunsets they filmed westerns in. Thirty minutes from Almería city, a world away from everything else.",
"shuttle": "Shuttle",
"shuttleT": "Free buses every 30 minutes from Almería airport and train station.",
"camping": "Camping",
"campingT": "Shaded camp with showers, lockers and 24h water points. Glamping tents for VIP.",
"cashless": "Cashless",
"cashlessT": "Load your wristband once, tap to pay everywhere.",
"noTrace": "Leave no trace",
"noTraceT": "Reusable cups, refill stations and a crew that leaves the desert spotless.",
"goodToKnow": "GOOD TO KNOW",
"q1": "What age do I need to be?",
"a1": "Emberland is 18+. Bring a valid ID or passport, your name must match your ticket.",
"q2": "Can I change the name on my ticket?",
"a2": "Yes, free of charge until 1 July 2027 from your ticket account.",
"q3": "How hot does it get?",
"a3": "Days reach 35°C, nights cool to around 20°C. Shade, water points and misting zones are everywhere.",
"q4": "Is it accessible?",
"a4": "We have accessible viewing platforms, camping, toilets and shuttles. Write to us and we’ll plan your visit together.",
"newsTitle": "FIRST TO KNOW. FIRST TO BURN.",
"signUp": "SIGN UP",
"newsThanks": "You’re on the list. See you in the dust 🔥",
"copyright": "© 2027 EMBERLAND FESTIVAL · TABERNAS, ALMERÍA",
"terms": "Terms",
"privacy": "Privacy",
"cookies": "Cookies",
"credit": "Concept website · design & code by Kisrak Kulacoglu · photos for demo only",
"yourTickets": "YOUR TICKETS",
"cartEmpty": "No tickets yet. Pick a pass and come back 🔥",
"total": "Total",
"checkoutBtn": "CHECKOUT →",
"checkout": "CHECKOUT",
"fullName": "Full name (as on your ID)",
"email": "Email",
"phone": "Phone",
"payment": "Payment",
"card": "Card",
"split": "3 instalments",
"terms18": "I’m 18+ and accept the ticket terms.",
"payBtn": "PAY & GET MY PASSES",
"back": "← Back to tickets",
"demoShop": "Demo shop: please don’t enter real payment details.",
"youreIn": "YOU’RE IN! 🔥",
"doneText": "Your passes are below and on their way to",
"backSite": "BACK TO THE SITE",
"mapAria": "Interactive satellite map of the Tabernas desert with the festival site, camping and shuttle stops",
"mapLayers": "Switch map style",
"mapHome": "Show the whole area",
"mapHint": "Click the map to zoom with your mouse wheel · tap a pin for details",
"directions": "Directions ↗",
"plSite": "EMBERLAND site",
"plSiteSub": "Gates open 22 July · 18:00",
"plSiteInfo": "Six stages, art installations and the main fire. Follow the orange signs from the A-92 exit.",
"plCamp": "Ember Camp",
"plCampSub": "Camping & glamping",
"plCampInfo": "Shaded pitches, showers, lockers and 24h water. Opens Wednesday 21 July for camp passes.",
"plTown": "Tabernas",
"plTownSub": "Village · shops & pharmacy",
"plTownInfo": "The nearest village: supermarket, pharmacy, cash machines and tapas bars, 10 minutes by shuttle.",
"plFort": "Fort Bravo / Texas Hollywood",
"plFortSub": "Western film set · day trips",
"plFortInfo": "The old western film town. Festival-goers get a discount on daytime visits.",
"plBuggy": "Desert buggy tours",
"plBuggySub": "Partner activity",
"plBuggyInfo": "Sunrise buggy rides through the canyons. Book at the info point on site.",
"plStation": "Almería station · Shuttle A",
"plStationSub": "Free · every 30 min",
"plStationInfo": "Train and bus station. Shuttle A leaves from bay 4, 12:00 to 02:00, about 35 minutes to the site.",
"plAirport": "Almería Airport · Shuttle B",
"plAirportSub": "Free · every 30 min",
"plAirportInfo": "Shuttle B waits outside Arrivals, 10:00 to 00:00, about 40 minutes to the site.",
"mapNote": "Locations are approximate · demo map"
},
"es": {
"navLineup": "Cartel",
"navEvents": "Eventos",
"navTickets": "Entradas",
"navVenue": "Recinto",
"navInfo": "Info",
"cartBtn": "Entradas",
"heroKicker": "DESIERTO DE TABERNAS · ALMERÍA · ESPAÑA",
"heroDates": "22—25 JULIO 2027 · 4 NOCHES BAJO EL CIELO DEL DESIERTO",
"days": "días",
"hours": "horas",
"minutes": "minutos",
"seconds": "segundos",
"getTickets": "COMPRAR ENTRADAS",
"watchVibe": "MIRA EL AMBIENTE ↓",
"f4days": "4 DÍAS",
"f6stages": "6 ESCENARIOS",
"f90": "90+ ARTISTAS",
"f40k": "40.000 BURNERS",
"mDesert": "DESIERTO DE TABERNAS",
"mDates": "22—25 JULIO 2027",
"mNights": "4 NOCHES",
"mStages": "6 ESCENARIOS",
"mArtists": "90+ ARTISTAS",
"mFire": "ARTE DE FUEGO",
"mSunrise": "SETS AL AMANECER",
"aboutBig": "son cuatro días de música electrónica, arte de fuego gigante y espectáculos de luz en el desierto, levantados de la nada en el único desierto de Europa.",
"sArtists": "artistas",
"sStages": "escenarios",
"sNights": "noches",
"sBurners": "burners",
"thu": "JUE 22",
"fri": "VIE 23",
"sat": "SÁB 24",
"sun": "DOM 25",
"sunriseSet": "Set de cierre al amanecer",
"fictional": "Todos los artistas son ficticios · cartel sujeto a cambios",
"vibeQuote1": "arde fuerte.",
"shuffle": "BARAJAR LAS FOTOS ↻",
"vibeQuote2": "no dejes huella.",
"upcoming": "PRÓXIMOS",
"eventsLead": "¿No puedes esperar a julio? Las Ember Nights llevan el fuego a ciudades de España y Portugal todo el año.",
"mainBurn": "El gran fuego: 4 noches, 6 escenarios, 90+ artistas, arte de fuego gigante.",
"from": "desde",
"book": "RESERVAR →",
"closingParty": "FIESTA DE CIERRE · SANT ANTONI",
"pTabernas": "DESIERTO DE TABERNAS · ALMERÍA",
"tickets": "ENTRADAS",
"ticketsLead": "Elige tu pase. Cada entrada es una pulsera más un pase con cordón, en tu móvil y enviado a tu puerta.",
"dayPass": "Pase de día",
"pass4": "Pase 4 días",
"camp": "4 días + camping",
"vip": "Pase VIP",
"whenDay": "1 DÍA · JUE/VIE/SÁB/DOM",
"when4": "22—25 JULIO",
"whenCamp": "21—26 JULIO",
"bestSeller": "MÁS VENDIDO",
"limited": "LIMITADO",
"pkOneDay": "Entrada para un día",
"pkStages": "Los 6 escenarios",
"pkShuttle": "Bus lanzadera gratis",
"pkNights": "Las 4 noches",
"pkSunrise": "Set de cierre al amanecer",
"pkEverything": "Todo lo del pase de 4 días",
"pkCampSpot": "Parcela de camping con sombra",
"pkShowers": "Duchas y taquillas",
"pkEarly": "Entrada anticipada el miércoles",
"pkDecks": "Plataformas elevadas",
"pkFast": "Acceso rápido",
"pkBars": "Barras y lounge VIP",
"pkGlamp": "Mejora a tienda glamping",
"add": "AÑADIR +",
"added": "AÑADIDO ✓",
"ticketsNote": "Precios con gastos incluidos · pago en hasta 3 plazos · web de demostración, no se vende nada",
"desert": "EL DESIERTO",
"venueLead": "Tabernas, Almería: cañones, roca roja y los atardeceres donde se rodaron los westerns. A treinta minutos de Almería capital, a un mundo de todo lo demás.",
"shuttle": "Lanzadera",
"shuttleT": "Autobuses gratis cada 30 minutos desde el aeropuerto y la estación de tren de Almería.",
"camping": "Camping",
"campingT": "Camping con sombra, duchas, taquillas y puntos de agua 24 h. Tiendas glamping para VIP.",
"cashless": "Sin efectivo",
"cashlessT": "Recarga tu pulsera una vez y paga en todas partes con un toque.",
"noTrace": "No dejes huella",
"noTraceT": "Vasos reutilizables, fuentes para rellenar y un equipo que deja el desierto impecable.",
"goodToKnow": "BUENO SABERLO",
"q1": "¿Qué edad necesito tener?",
"a1": "Emberland es para mayores de 18. Trae DNI o pasaporte válido; tu nombre debe coincidir con la entrada.",
"q2": "¿Puedo cambiar el nombre de mi entrada?",
"a2": "Sí, gratis hasta el 1 de julio de 2027 desde tu cuenta.",
"q3": "¿Cuánto calor hace?",
"a3": "De día se llega a 35 °C y por la noche baja a unos 20 °C. Hay sombra, puntos de agua y zonas de nebulización por todas partes.",
"q4": "¿Es accesible?",
"a4": "Tenemos plataformas, camping, aseos y lanzaderas accesibles. Escríbenos y planificamos tu visita juntos.",
"newsTitle": "EL PRIMERO EN SABERLO. EL PRIMERO EN ARDER.",
"signUp": "APÚNTATE",
"newsThanks": "Ya estás en la lista. Nos vemos en el polvo 🔥",
"copyright": "© 2027 EMBERLAND FESTIVAL · TABERNAS, ALMERÍA",
"terms": "Condiciones",
"privacy": "Privacidad",
"cookies": "Cookies",
"credit": "Web conceptual · diseño y código de Kisrak Kulacoglu · fotos solo para la demo",
"yourTickets": "TUS ENTRADAS",
"cartEmpty": "Aún no tienes entradas. Elige un pase y vuelve 🔥",
"total": "Total",
"checkoutBtn": "PAGAR →",
"checkout": "PAGO",
"fullName": "Nombre completo (como en tu DNI)",
"email": "Email",
"phone": "Teléfono",
"payment": "Pago",
"card": "Tarjeta",
"split": "3 plazos",
"terms18": "Soy mayor de 18 y acepto las condiciones de compra.",
"payBtn": "PAGAR Y RECIBIR MIS PASES",
"back": "← Volver a las entradas",
"demoShop": "Tienda de demostración: no introduzcas datos de pago reales.",
"youreIn": "¡ESTÁS DENTRO! 🔥",
"doneText": "Aquí tienes tus pases; también van de camino a",
"backSite": "VOLVER A LA WEB",
"mapAria": "Mapa satélite interactivo del desierto de Tabernas con el recinto, el camping y las paradas de lanzadera",
"mapLayers": "Cambiar estilo de mapa",
"mapHome": "Ver toda la zona",
"mapHint": "Haz clic en el mapa para hacer zoom con la rueda · toca un pin para ver detalles",
"directions": "Cómo llegar ↗",
"plSite": "Recinto EMBERLAND",
"plSiteSub": "Puertas: 22 julio · 18:00",
"plSiteInfo": "Seis escenarios, instalaciones de arte y el gran fuego. Sigue las señales naranjas desde la salida de la A-92.",
"plCamp": "Ember Camp",
"plCampSub": "Camping y glamping",
"plCampInfo": "Parcelas con sombra, duchas, taquillas y agua 24 h. Abre el miércoles 21 de julio para pases con camping.",
"plTown": "Tabernas",
"plTownSub": "Pueblo · tiendas y farmacia",
"plTownInfo": "El pueblo más cercano: supermercado, farmacia, cajeros y bares de tapas, a 10 minutos en lanzadera.",
"plFort": "Fort Bravo / Texas Hollywood",
"plFortSub": "Poblado del oeste · excursiones",
"plFortInfo": "El antiguo poblado de películas del oeste. Descuento para asistentes en las visitas de día.",
"plBuggy": "Rutas en buggy por el desierto",
"plBuggySub": "Actividad colaboradora",
"plBuggyInfo": "Rutas en buggy al amanecer por los cañones. Reserva en el punto de información.",
"plStation": "Estación de Almería · Lanzadera A",
"plStationSub": "Gratis · cada 30 min",
"plStationInfo": "Estación de tren y autobús. La lanzadera A sale del andén 4, de 12:00 a 02:00, unos 35 minutos hasta el recinto.",
"plAirport": "Aeropuerto de Almería · Lanzadera B",
"plAirportSub": "Gratis · cada 30 min",
"plAirportInfo": "La lanzadera B espera a la salida de Llegadas, de 10:00 a 00:00, unos 40 minutos hasta el recinto.",
"mapNote": "Ubicaciones aproximadas · mapa de demostración"
}
};

function startEmberland(site) {
  const $ = function (sel) { return site.querySelector(sel); };
  const $$ = function (sel) { return site.querySelectorAll(sel); };
  const view = site.ownerDocument.defaultView;          // the browser window
  const reduceMotion = view.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let cart = [];                                         // e.g. [{ id: 'pass4', name: '4-day pass', price: 219, qty: 2, c1: '#FF5A1F', c2: '#E8261C', when: '22—25 JUL' }]
  const euro = function (n) { return '€' + n.toLocaleString('en-GB'); };

  /* 0. Language switch (EN / ES) */
  let lang = 'en';
  const t = function (key) { return (TEXT[lang] && TEXT[lang][key]) || TEXT.en[key] || ''; };
  // "@pass4" inside a string becomes the translated name, e.g. "4-Day Pass" or "Pase 4 días"
  const tr = function (str) { return String(str).replace(/@(\w+)/g, function (m, key) { return t(key); }); };
  let refreshMap = function () {};                   // the map replaces this once it exists
  function setLanguage(code) {
    lang = code;
    site.setAttribute('lang', code);
    if (site.ownerDocument.documentElement) site.ownerDocument.documentElement.lang = code;
    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.dataset.i18n); });
    $$('[data-lang]').forEach(function (b) { b.dataset.active = b.dataset.lang === code ? 'true' : 'false'; });
    $$('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    refreshMap();
    renderCart();
    try { view.localStorage.setItem('ember-lang', code); } catch (e) {}
  }

  /* 1. Countdown to the first night of the festival */
  const START = new Date('2027-07-22T18:00:00+02:00').getTime();
  function tick() {
    let left = Math.max(0, START - Date.now());
    const d = Math.floor(left / 86400000); left -= d * 86400000;
    const h = Math.floor(left / 3600000); left -= h * 3600000;
    const m = Math.floor(left / 60000); left -= m * 60000;
    const s = Math.floor(left / 1000);
    const pad = function (n) { return String(n).padStart(2, '0'); };
    $('.js-days').textContent = String(d).padStart(3, '0');
    $('.js-hours').textContent = pad(h);
    $('.js-mins').textContent = pad(m);
    $('.js-secs').textContent = pad(s);
  }
  tick();
  setInterval(tick, 1000);

  /* 2. Things pop in when they scroll into view */
  function countUp(el) {
    const target = Number(el.dataset.count);
    const t0 = performance.now();
    const step = function (now) {
      const p = Math.min(1, (now - t0) / 1400);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString('en-GB');
      if (p < 1) view.requestAnimationFrame(step);
    };
    view.requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in view && !reduceMotion) {
    const watcher = new view.IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        entry.target.querySelectorAll('[data-count]').forEach(countUp);
        watcher.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    $$('[data-reveal]').forEach(function (el) { watcher.observe(el); });
  } else {
    $$('[data-reveal]').forEach(function (el) { el.classList.add('in'); });
    $$('[data-count]').forEach(function (el) { el.textContent = Number(el.dataset.count).toLocaleString('en-GB'); });
  }

  /* 3. Parallax: pictures move at different speeds while you scroll */
  const movers = $$('[data-speed]');
  function parallax() {
    const vh = view.innerHeight;
    movers.forEach(function (el) {
      const box = el.getBoundingClientRect();
      const offset = (box.top + box.height / 2 - vh / 2) * Number(el.dataset.speed);
      el.style.transform = 'translateY(' + offset.toFixed(1) + 'px)';
    });
  }
  if (!reduceMotion) {
    view.addEventListener('scroll', function () { view.requestAnimationFrame(parallax); }, { passive: true });
    parallax();
  }

  /* 3b. 3D photo cloud (like the reference video).
     The photos float at different depths and slowly drift. Every few seconds they all fly together
     into ONE card, hold for a moment, then burst back out into the cloud. Each round a different photo leads. */
  const deck = $('.collage');
  const cloud = $('.cloud');
  const shots = Array.prototype.slice.call($$('.shot'));
  const LOOP = 7400;                                  // one full round, in milliseconds
  const COLLAPSE = 3800, HOLD = 5100, BURST = 6000;   // when each part of the round starts
  let clock = 0, last = 0, running = false, lead = 0, reshuffle = false, lastRound = -1;
  const ease = function (x) { x = Math.min(1, Math.max(0, x)); return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };
  const pop = function (x) { x = Math.min(1, Math.max(0, x)); const c1 = 1.4, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); };
  function homes() {                                  // home spot of every photo, in pixels
    const w = shots[0].offsetWidth, h = shots[0].offsetHeight;
    const spread = view.innerWidth < 820 ? 0.62 : 1;
    return shots.map(function (el) {
      return { x: Number(el.dataset.x) * w * 1.04 * spread, y: Number(el.dataset.y) * h * 0.92, z: Number(el.dataset.z) };
    });
  }
  function shufflePhotos() {
    const imgs = shots.map(function (el) { return el.querySelector('img'); });
    const pics = imgs.map(function (img) { return [img.src, img.alt]; });
    for (let i = pics.length - 1; i > 0; i--) {       // Fisher–Yates shuffle
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = pics[i]; pics[i] = pics[j]; pics[j] = tmp;
    }
    imgs.forEach(function (img, i) { img.src = pics[i][0]; img.alt = pics[i][1]; });
  }
  function drawCloud(now) {
    const t = clock % LOOP;
    const round = Math.floor(clock / LOOP);
    if (round !== lastRound) { lastRound = round; lead = (lead + 1) % shots.length; }   // next photo leads
    if (reshuffle && t > HOLD) { reshuffle = false; shufflePhotos(); }
    const H = homes();
    // order: the photos furthest from the centre leave first, the leader arrives last and stays on top
    const rank = shots.map(function (el, i) { return i === lead ? 99 : Math.hypot(H[i].x, H[i].y) * -1; });
    const order = rank.map(function (r, i) { return [r, i]; }).sort(function (a, b) { return a[0] - b[0]; }).map(function (p) { return p[1]; });
    let together = 0;                                 // 0 = cloud, 1 = everything stacked into one card
    shots.forEach(function (el, i) {
      const r = order.indexOf(i);
      let m = 0;
      if (t >= COLLAPSE && t < HOLD) m = ease((t - COLLAPSE - r * 40) / 650);
      else if (t >= HOLD && t < BURST) m = 1;
      else if (t >= BURST) m = 1 - pop((t - BURST - r * 32) / 850);
      together += m / shots.length;
      const h = H[i];
      const bob = Math.sin(now / 900 + i * 1.7) * 9 * (1 - m);
      const stackZ = i === lead ? 180 : 170 - r * 4;                     // the stack, with the leader in front
      const x = h.x * (1 - m), y = h.y * (1 - m) + bob, z = h.z + (stackZ - h.z) * m;
      el.style.transform = 'translate(-50%, -50%) translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,' + z.toFixed(1) + 'px)';
      el.style.zIndex = Math.round(z + 1000);
    });
    // the whole cloud slowly turns, and tilts a little with your scroll
    const box = deck.getBoundingClientRect();
    const scrollTilt = ((box.top + box.height / 2) - view.innerHeight / 2) / view.innerHeight * 14;
    const calm = 1 - 0.85 * together;
    cloud.style.transform = 'rotateY(' + ((Math.sin(now / 2600) * 11 + scrollTilt) * calm).toFixed(2) + 'deg) rotateX(' + ((Math.cos(now / 3400) * 5 - scrollTilt * 0.4) * calm).toFixed(2) + 'deg)';
  }
  function cloudLoop(now) {
    if (!running) return;
    if (last) clock += Math.min(100, now - last);       // the clock only moves while you can see the gallery
    last = now;
    drawCloud(now);
    view.requestAnimationFrame(cloudLoop);
  }
  function shuffleDeck() {                            // the button: collapse right now and come back shuffled
    const t = clock % LOOP;
    if (t < COLLAPSE) clock += COLLAPSE - t;
    reshuffle = true;
  }
  if (deck && shots.length) {
    if (reduceMotion) {
      const H = homes();
      shots.forEach(function (el, i) { el.style.transform = 'translate(-50%, -50%) translate3d(' + H[i].x + 'px,' + H[i].y + 'px,' + H[i].z + 'px)'; });
    } else if ('IntersectionObserver' in view) {
      new view.IntersectionObserver(function (entries) {
        const visible = entries[0].isIntersecting;
        if (visible && !running) { running = true; last = 0; view.requestAnimationFrame(cloudLoop); }
        if (!visible) running = false;
      }, { threshold: 0.05 }).observe(deck);
      drawCloud(0);
    }
  }

  /* 4. Glow that follows the mouse */
  const glow = $('.cursor-glow');
  site.addEventListener('mousemove', function (e) {
    glow.style.setProperty('--mx', e.clientX + 'px');
    glow.style.setProperty('--my', e.clientY + 'px');
  });

  /* 5. Line-up day tabs */
  function showDay(day) {
    $$('.day').forEach(function (b) { b.dataset.on = b.dataset.day === day ? 'true' : 'false'; });
    $$('.bill').forEach(function (b) { b.dataset.on = b.dataset.bill === day ? 'true' : 'false'; });
  }

  /* 6. Tickets cart */
  function addTicket(btn) {
    const d = btn.dataset;
    const found = cart.find(function (item) { return item.id === d.add; });
    if (found) found.qty += 1;
    else cart.push({ id: d.add, name: d.name, price: Number(d.price), qty: 1, c1: d.c1, c2: d.c2, when: d.when });
    renderCart();
    const pill = $('.cart-btn');
    pill.classList.remove('bump'); void pill.offsetWidth; pill.classList.add('bump');
    const label = btn.querySelector('[data-i18n]');
    btn.classList.add('done'); label.textContent = t('added');
    setTimeout(function () { btn.classList.remove('done'); label.textContent = t(label.dataset.i18n); }, 1200);
  }
  function total() { return cart.reduce(function (s, i) { return s + i.price * i.qty; }, 0); }
  function renderCart() {
    $('.js-count').textContent = cart.reduce(function (s, i) { return s + i.qty; }, 0);
    site.dataset.hasitems = cart.length ? 'true' : 'false';
    $('.cart-items').innerHTML = cart.map(function (item, i) {
      return '<div class="ci"><span class="ci-dot" style="background:linear-gradient(' + item.c1 + ',' + item.c2 + ')"></span>' +
        '<div class="ci-info"><b>' + tr(item.name) + '</b><small>' + tr(item.when) + ' · ' + euro(item.price) + '</small></div>' +
        '<div class="qty"><button type="button" data-qty="' + i + '|-1" aria-label="One less">−</button><span>' + item.qty + '</span><button type="button" data-qty="' + i + '|1" aria-label="One more">+</button></div>' +
        '<span class="ci-price">' + euro(item.price * item.qty) + '</span></div>';
    }).join('');
    $$('.js-total').forEach(function (el) { el.textContent = euro(total()); });
  }
  function openCart(step) {
    site.dataset.step = step || 'cart';
    site.dataset.cart = 'open';
  }

  /* 7. A fake QR code (a random pattern, just for the look) */
  function fakeQR(seed) {
    let n = seed, cells = '';
    const rnd = function () { n = (n * 9301 + 49297) % 233280; return n / 233280; };
    for (let y = 0; y < 21; y++) for (let x = 0; x < 21; x++) {
      const corner = (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13);
      if (corner) {
        const cx = x > 13 ? x - 14 : x, cy = y > 13 ? y - 14 : y;
        const ring = cx === 0 || cy === 0 || cx === 6 || cy === 6 || (cx > 1 && cx < 5 && cy > 1 && cy < 5);
        if (ring) cells += '<rect x="' + x + '" y="' + y + '" width="1" height="1"/>';
      } else if (rnd() > 0.52) cells += '<rect x="' + x + '" y="' + y + '" width="1" height="1"/>';
    }
    return '<svg viewBox="0 0 21 21" fill="#0D0605" shape-rendering="crispEdges">' + cells + '</svg>';
  }

  /* 8. Checkout → passes */
  const checkout = $('#fe-checkout');
  checkout.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!checkout.checkValidity()) { checkout.reportValidity(); return; }
    const name = checkout.elements.name.value;
    $('.js-email').textContent = checkout.elements.email.value;
    let html = '', k = 1;
    cart.forEach(function (item) {
      for (let q = 0; q < item.qty; q++) {
        html += '<div class="mini-pass" style="animation-delay:' + (k * 0.1) + 's"><div class="mp-art"><svg viewBox="0 0 90 120" preserveAspectRatio="none"><rect width="90" height="120" fill="' + item.c1 + '"/><circle cx="20" cy="100" r="60" fill="' + item.c2 + '"/><circle cx="70" cy="20" r="26" fill="#FFC24A"/></svg></div>' +
          '<div class="mp-info"><b>' + tr(item.name) + '</b><small>' + tr(item.when) + '</small><small>' + name + '</small><small>#EMB-' + (40000 + Math.floor(Math.random() * 59999)) + '</small></div>' +
          '<div class="mp-qr">' + fakeQR(k * 7919 + item.price) + '</div></div>';
        k++;
      }
    });
    $('.done-passes').innerHTML = html;
    cart = [];
    renderCart();
    checkout.reset();
    site.dataset.step = 'done';
  });

  /* 9. Newsletter (demo) */
  const news = $('#fe-news');
  news.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!news.checkValidity()) { news.reportValidity(); return; }
    news.dataset.sent = 'true';
    news.reset();
  });

  /* 11. Interactive map with Leaflet (a free map library).
     Leaflet is loaded from a CDN only when you scroll near the map. Satellite photos come from Esri.
     If anything fails to load, the drawn desert map simply stays visible. */
  const mapBox = $('.venue-map');
  const PLACES = [
    // [key, latitude, longitude, icon, style]
    ['plSite', 37.0815, -2.4180, '🔥', 'main'],
    ['plCamp', 37.0752, -2.4040, '⛺', ''],
    ['plTown', 37.0497, -2.3907, '', 'town'],
    ['plFort', 37.0228, -2.4436, '🎬', ''],
    ['plBuggy', 36.9585, -2.4135, '🏜️', ''],
    ['plStation', 36.8346, -2.4558, '🚌', ''],
    ['plAirport', 36.8439, -2.3701, '✈️', '']
  ];
  // the two free shuttle routes (roughly along the A-92 motorway)
  const ROUTE_A = [[36.8346, -2.4558], [36.8560, -2.4470], [36.8890, -2.4369], [36.9300, -2.4290], [36.9700, -2.4140], [37.0100, -2.3990], [37.0497, -2.3907], [37.0650, -2.4000], [37.0815, -2.4180]];
  const ROUTE_B = [[36.8439, -2.3701], [36.8530, -2.3950], [36.8700, -2.4200], [36.8890, -2.4369]];
  function startMap(L) {
    const leafEl = $('.leaf');
    const map = L.map(leafEl, { zoomControl: false, scrollWheelZoom: false, attributionControl: true, minZoom: 9, maxZoom: 17,
      maxBounds: [[36.55, -2.95], [37.40, -1.85]] });
    L.control.zoom({ position: 'topleft' }).addTo(map);
    const esri = 'https://server.arcgisonline.com/ArcGIS/rest/services/';
    const satellite = L.layerGroup([
      L.tileLayer(esri + 'World_Imagery/MapServer/tile/{z}/{y}/{x}', { attribution: 'Imagery © Esri, Maxar, Earthstar Geographics' }),
      L.tileLayer(esri + 'Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}', { opacity: 0.9 }),
      L.tileLayer(esri + 'Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}')
    ]);
    const dark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { subdomains: 'abcd', attribution: '© OpenStreetMap contributors © CARTO' });
    let onSatellite = true;
    satellite.addTo(map);
    // show the real map as soon as the first satellite picture arrives
    satellite.eachLayer(function (layer) { layer.on('tileload', function () { mapBox.classList.add('map-on'); }); });

    L.polyline(ROUTE_A, { color: '#FF3D14', weight: 9, opacity: 0.4 }).addTo(map);
    L.polyline(ROUTE_A, { color: '#FFC24A', weight: 3, dashArray: '8 10', className: 'route-glow' }).addTo(map);
    L.polyline(ROUTE_B, { color: '#FF3D14', weight: 9, opacity: 0.4 }).addTo(map);
    L.polyline(ROUTE_B, { color: '#FFC24A', weight: 3, dashArray: '8 10', className: 'route-glow' }).addTo(map);

    const markers = PLACES.map(function (p) {
      const big = p[4] === 'main';
      const icon = L.divIcon({ className: '', html: '<div class="mpin ' + p[4] + '"><span>' + p[3] + '</span></div>',
        iconSize: big ? [50, 50] : [36, 36], iconAnchor: big ? [25, 50] : (p[4] === 'town' ? [15, 15] : [18, 36]) });
      const marker = L.marker([p[1], p[2]], { icon: icon, title: '', riseOnHover: true, zIndexOffset: big ? 1000 : 0 }).addTo(map);
      marker.bindTooltip('', { permanent: true, direction: 'right', offset: big ? [22, -30] : (p[4] === 'town' ? [14, 0] : [16, -22]), className: 'map-label' + (big ? ' main' : '') });
      marker.bindPopup('');
      return marker;
    });
    refreshMap = function () {                        // write the labels in the current language
      markers.forEach(function (marker, i) {
        const key = PLACES[i][0];
        marker.setTooltipContent('<b>' + t(key) + '</b><small>' + t(key + 'Sub') + '</small>');
        marker.setPopupContent('<b>' + t(key) + '</b>' + t(key + 'Info') +
          '<br><a href="https://www.google.com/maps/dir/?api=1&destination=' + PLACES[i][1] + ',' + PLACES[i][2] + '" target="_blank" rel="noopener">' + t('directions') + '</a>');
      });
    };
    refreshMap();
    const everything = L.latLngBounds(PLACES.map(function (p) { return [p[1], p[2]]; }));
    map.fitBounds(everything, { padding: [50, 50] });
    map.on('click focus', function () { map.scrollWheelZoom.enable(); });
    leafEl.addEventListener('mouseleave', function () { map.scrollWheelZoom.disable(); });
    mapBox.addEventListener('click', function (e) {
      if (e.target.closest('[data-map-home]')) map.flyToBounds(everything, { padding: [50, 50], duration: 1.2 });
      if (e.target.closest('[data-map-layer]')) {
        onSatellite = !onSatellite;
        if (onSatellite) { map.removeLayer(dark); satellite.addTo(map); } else { map.removeLayer(satellite); dark.addTo(map); }
      }
    });
    view.addEventListener('resize', function () { map.invalidateSize(); });
  }
  function loadLeaflet() {
    if (view.L && view.L.map) { startMap(view.L); return; }
    const doc = site.ownerDocument;
    const css = doc.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
    doc.head.appendChild(css);
    const lib = doc.createElement('script');
    lib.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
    lib.onload = function () { try { startMap(view.L); } catch (err) { console.warn('Map could not start', err); } };
    lib.onerror = function () { console.warn('Leaflet could not load, showing the drawn map instead'); };
    doc.head.appendChild(lib);
  }
  if (mapBox) {
    if ('IntersectionObserver' in view) {
      const mapWatch = new view.IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { mapWatch.disconnect(); loadLeaflet(); }
      }, { rootMargin: '600px 0px' });
      mapWatch.observe(mapBox);
    } else loadLeaflet();
  }

  /* 10. One click listener for everything */
  site.addEventListener('click', function (event) {
    if (event.target.closest('.leaflet-container')) return;   // the map handles its own clicks
    const el = event.target.closest('[data-shuffle],[data-lang],[data-day],[data-add],[data-open-cart],[data-close-cart],[data-checkout],[data-back],[data-qty],a[href^="#"]');
    if (!el) return;
    const d = el.dataset;
    if ('shuffle' in d) shuffleDeck();
    else if (d.lang) setLanguage(d.lang);
    else if (d.day) showDay(d.day);
    else if (d.add) addTicket(el);
    else if ('openCart' in d) openCart('cart');
    else if ('closeCart' in d) { site.dataset.cart = 'closed'; if (site.dataset.step === 'done') site.dataset.step = 'cart'; }
    else if ('checkout' in d) { if (cart.length) site.dataset.step = 'checkout'; }
    else if ('back' in d) site.dataset.step = 'cart';
    else if (d.qty) {
      const p = d.qty.split('|');
      const item = cart[Number(p[0])];
      item.qty += Number(p[1]);
      if (item.qty < 1) cart.splice(Number(p[0]), 1);
      renderCart();
    } else {
      const href = el.getAttribute('href');
      if (href === '#') return;
      const target = href === '#top' ? site : site.querySelector(href);
      if (target) { event.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }
  });
  site.addEventListener('keydown', function (e) { if (e.key === 'Escape') site.dataset.cart = 'closed'; });

  let startLang = 'en';
  try { startLang = view.localStorage.getItem('ember-lang') || 'en'; } catch (e) {}
  setLanguage(startLang === 'es' ? 'es' : 'en');
}

/* Run it when the page has loaded */
const siteElement = document.querySelector('.site');
if (siteElement) startEmberland(siteElement);
