/**
 * Salience Growth — bilingual content store (EN default at /, DE at /de/).
 * `site` holds language-agnostic config. All copy lives under `en` / `de`.
 * Edit text here; components read their slice via getContent(lang).
 * Search for [[CONFIRM: …]] to find items still to supply.
 */

export type Lang = 'en' | 'de';

export const site = {
  name: 'Salience Growth',
  domain: 'saliencegrowth.com',
  url: 'https://saliencegrowth.com',
  email: 'daniel@saliencegrowth.com', // live Google Workspace mailbox
  bookingUrl: 'https://calendar.app.google/HBYPNgp18NmXVbr18', // public Google appointment schedule
  linkedin: 'https://www.linkedin.com/in/danielostein/',
};

// ============================================================
// ENGLISH
// ============================================================
const en = {
  ui: {
    bookACall: 'Book a call',
    footerNavigate: 'Navigate',
    footerConnect: 'Connect',
    footerContact: 'Contact',
    footerRights: 'All rights reserved.',
    backToSite: '← Back to home',
    tagline: 'Become the obvious choice for Tier-1 buyers — client acquisition engineered like a product.',
    location: 'Germany — working with clients across EU, UK & US',
    // language switch (this page is EN, so it offers DE)
    switchLabel: 'DE',
    switchTitle: 'Auf Deutsch ansehen',
    switchHref: '/de/',
  },
  meta: {
    title: 'Salience Growth — Become the obvious choice for Tier-1 buyers',
    description:
      'Salience Growth helps expertise-led B2B service firms win and scale Tier-1 accounts — client acquisition engineered like a product.',
  },
  nav: [
    { label: 'Method', href: '#method' },
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#approach' },
    { label: 'Results', href: '#results' },
    { label: 'About', href: '#about' },
  ],
  hero: {
    eyebrow: 'B2B growth consultancy',
    titlePre: 'Become the ',
    highlight: 'obvious choice',
    titlePost: ' for enterprise buyers.',
    subtitle:
      'Salience Growth helps expertise-led B2B service firms win and scale Tier-1 accounts — by engineering client acquisition like a product, grounded in how your buyers actually decide. No cold calling. No loss of expert status.',
    primaryCta: { label: 'Book a working session', href: '#contact' },
    secondaryCta: { label: 'See the Method', href: '#method' },
    trustLine: 'Authority-led demand, built and measured like software — not a campaign that fades.',
  },
  proofStrip: [
    { stat: '8×', label: 'more effective content & outreach — realized client result' },
    { stat: 'Tier-1', label: 'enterprise accounts won on relevance, not volume' },
    { stat: '0', label: 'cold calls — authority-led demand by design' },
  ],
  problem: {
    eyebrow: 'The gap',
    title: 'Great B2B service firms stall at the enterprise gate.',
    body: 'You deliver excellent work and your existing clients love you. But breaking into — and scaling within — Tier-1 accounts is a different game. The deals are bigger, the buying committees are larger, and "do great work and referrals will come" stops being enough.',
    points: [
      { title: 'Strategy without execution', body: 'Plenty of advice, decks and frameworks — but nothing that survives contact with your actual pipeline and team.' },
      { title: 'Key-People-dependent growth', body: 'Every meaningful deal runs through one or two people. Growth is capped by their calendar, not your capability.' },
      { title: 'Invisible to the buyers that matter', body: 'You are not in the room when enterprise buyers shortlist partners — so the work goes to a name they already trust.' },
    ],
    whyNow: {
      heading: 'Why the old motion stopped working',
      stats: [
        { stat: '4.82%', label: 'success rate of cold calls into the C-suite', source: 'Cognism, State of Cold Calling 2024' },
        { stat: '67%', label: 'of B2B buyers prefer a rep-free buying experience', source: 'Gartner, 2026' },
        { stat: '94%', label: 'of decision-makers use LLMs to research and pre-select vendors', source: 'Forrester / Corporate Visions, 2026' },
        { stat: '95%', label: 'of deals go to a provider already on the buyer’s day-one shortlist', source: 'Corporate Visions, 2026' },
      ],
      closing:
        'If you aren’t already visible as an authority, you aren’t on the shortlist — and 95% of the time, the shortlist is the whole game. Volume doesn’t reach these buyers anymore. Only relevance does.',
    },
  },
  pillars: {
    eyebrow: 'How we are different',
    title: 'Strategy and operationalization — under one roof.',
    body: 'Most consultancies hand you a strategy and walk away. We design the growth motion and then roll up our sleeves to build it with your team.',
    items: [
      {
        kicker: '01',
        title: 'Growth Strategy',
        body: 'Where the enterprise revenue actually is, who the buyers are, and the positioning that makes you their obvious choice.',
        bullets: [
          'Ideal Tier-1 account & buyer mapping',
          'Positioning and value narrative that lands with enterprise buyers',
          'Offer and pricing architecture for larger engagements',
        ],
      },
      {
        kicker: '02',
        title: 'Operationalization',
        body: 'We turn the strategy into a running system — process, tooling, content and rhythm — that your team owns after we leave.',
        bullets: [
          'Account-based outbound & pipeline engine',
          'Sales process, CRM and reporting that fit how you sell',
          'Enablement so the motion runs without you in every deal',
        ],
        cta: { label: 'See the systems we install', href: '#operate' },
      },
    ],
  },
  method: {
    eyebrow: 'The method',
    title: 'The Salience Growth Method',
    subtitle: 'How you become the obvious choice — by design, not by luck.',
    intro:
      'Enterprise buyers build their shortlist before they take a single sales call. The Salience Growth Method makes you the name already on it. We pair a data-driven read of how your buyers actually decide with product-management discipline — so your growth runs like an engineered system, not a hope. Two things most firms keep separate, working in phase.',
    stages: [
      { n: '01', name: 'Account Intelligence', body: 'We find where you can be genuinely relevant inside a target account — and the moment that makes them ready to listen. You arrive with a point of view, never a cold "do you have a need?"' },
      { n: '02', name: 'Salience', body: 'You become the authority the buyer already knows — present in their world and on the shortlist, before a single sales conversation.' },
      { n: '03', name: 'Trust', body: 'Relationships built through value, not pitches. By the time commercials come up, you are a trusted peer — not another vendor.' },
      { n: '04', name: 'Conversion', body: 'Expert-led and problem-first. Because the authority and trust were earned upstream, the close is the natural conclusion — not a negotiation.' },
    ],
    pullStat: { stat: '8×', label: 'more effective content & outreach', note: 'realized client result' },
  },
  operate: {
    eyebrow: 'Operationalization',
    title: 'We don’t hand you a strategy. We build the machine.',
    body: 'Most consultancies leave you with a deck. We install a working acquisition system — designed around your firm, owned by your team, and still running long after we leave. Three engines do the heavy lifting.',
    engines: [
      { n: '01', title: 'The Sales-Hook Engine', body: 'A library of value-first reasons for a senior buyer to want to engage — each one a give, not an ask, engineered from how decision-makers actually say yes. Outreach that lands as a compliment, never a cold pitch.' },
      { n: '02', title: 'The Nurturing Engine', body: 'Trusted-advisor relevance across every account, at scale. The system carries the consistency; your senior people spend their scarce time only where judgement truly changes the outcome.' },
      { n: '03', title: 'The Acquisition Backbone', body: 'The operating system beneath it all — your process, data, content and AI working as one connected motion. We build it, embed it, and hand you the keys.' },
    ],
    cta: { lead: 'The specifics are engineered around your firm — that’s the engagement, not a free download.', label: 'See if it fits your firm', href: '#contact' },
  },
  services: {
    eyebrow: 'Services',
    title: 'Engagements built around your stage of growth.',
    body: 'Start with a focused diagnostic or run a full operational build. Every engagement ends with something your team can run, not just read.',
    items: [
      { title: 'Growth Diagnostic', duration: '2–3 weeks', body: 'A clear-eyed audit of your enterprise growth motion, with a prioritized roadmap of the highest-leverage moves.' },
      { title: 'Go-to-Market Strategy', duration: '4–6 weeks', body: 'Target account strategy, positioning and offer design focused squarely on Tier-1 buyers.' },
      { title: 'Sales Operationalization', duration: '8–12 weeks', body: 'We build the pipeline engine, sales process and CRM/reporting, then embed it with your team.' },
      { title: 'Account-Based Growth', duration: 'Ongoing', body: 'A repeatable motion to land and expand named Tier-1 accounts — outbound, content and multi-threading.' },
      { title: 'Authority & Thought Leadership', duration: 'Ongoing', body: 'We build your visible expert authority — the thought leadership and presence that makes Tier-1 buyers know you before you reach out, so your outreach converts far better.' },
      { title: 'Revenue Operations', duration: '6–10 weeks', body: 'The data, tooling and dashboards that make pipeline predictable and forecast-able.' },
      { title: 'Fractional Growth Lead', duration: 'Retainer', body: 'Hands-on growth leadership embedded in your business — strategy and execution, part-time.' },
    ],
  },
  approach: {
    eyebrow: 'Approach',
    title: 'A clear path from stuck to scaling.',
    body: 'No black boxes. You always know what we are doing, why, and what comes next. (This is how we work with you — distinct from the acquisition motion the Method installs.)',
    steps: [
      { n: '01', title: 'Diagnose', body: 'We pressure-test your current motion, talk to your team and your customers, and find where enterprise growth is leaking.' },
      { n: '02', title: 'Design', body: 'We define the target accounts, positioning and offer — and the specific motion that will win them.' },
      { n: '03', title: 'Operationalize', body: 'We build the engine with your team: process, tooling, content and cadence. Real pipeline, not theory.' },
      { n: '04', title: 'Scale', body: 'We hand over a system your team owns, with the playbooks and metrics to compound it after we leave.' },
    ],
  },
  results: {
    eyebrow: 'Results',
    title: 'Outcomes that move the needle.',
    hero: { stat: '8×', label: 'more effective content & outreach', note: 'realized result vs. previous baseline' },
    benchmarksHeading: 'Method benchmarks',
    benchmarksNote: 'Account-based / method benchmarks (2025–2026) — directional, not per-client guarantees.',
    benchmarks: [
      { stat: '−23%', label: 'shorter sales cycles' },
      { stat: '+33%', label: 'higher average contract value (ACV)' },
      { stat: '137%', label: 'average ROI of account-based strategies' },
      { stat: '3–5×', label: 'higher meeting rates vs. generic outreach' },
      { stat: '60%', label: 'of decision-makers award work directly off strong thought leadership' },
    ],
  },
  testimonials: {
    eyebrow: 'Client voices',
    title: 'What partners and revenue leaders say.',
    items: [
      { quote: 'For a fifth of our previous spend, we now get 15× the leads — and thanks to the pre-qualifying, every single one is genuinely relevant to us.', role: 'Partner, IT management consultancy' },
      { quote: 'Our first calls went from awkward and unwelcome to real conversations between equals.', role: 'Partner, IT management consultancy' },
      { quote: 'For the first time, we know exactly who we need to target — and how.', role: 'CEO, B2B compliance solution' },
      { quote: 'With hard data — and some uncomfortable truths — Daniel showed us why what we were doing wasn’t working. Within four weeks: a complete turnaround in volume, and, far more importantly, in quality.', role: 'VP Sales, IT services company' },
      { quote: 'No one has ever shown us so clearly, and so data-driven, what works in our target market and what doesn’t. We’ve never learned — or improved — this fast.', role: 'Sales Director, outsourcing firm' },
      { quote: 'Daniel has the strategy — but, almost more importantly, the execution. We thought his roadmap was ambitious. Wrong: most of it landed not in the MVP but the MLP, and far faster than we’d dreamed.', role: 'Chief Revenue Officer, consulting company' },
      { quote: 'As part of the engagement, Daniel interviewed around 13 of our people and two clients. From that, plus his method, he built a training tailored exactly to our needs — and the numbers don’t lie: +60% upsell since, against our annual growth over the previous four years.', role: 'Partner, IT management company' },
    ],
  },
  about: {
    eyebrow: 'About',
    title: 'Salience: the quality of standing out where it counts.',
    body: [
      'Salience Growth exists because the best B2B service firms are too often invisible to the enterprise buyers who would benefit most from them.',
      'We combine a data-driven read of how Tier-1 buyers decide with product-management discipline — so the plan and the engine that executes it are never two separate things. You get a partner who is as comfortable in the boardroom as in your CRM.',
    ],
    credibility: [
      { title: 'Sales Leader', body: '10+ years in B2B sales and new-client acquisition in the Tier-1 / prime segment — revenue enablement and scalable sales processes.' },
      { title: 'Product Leader', body: 'Scaled cross-functional teams from 8 → 26 people, ran 0→1 product launches and GTM, and operationalized GenAI inside sales and product orgs.' },
      { title: 'Finance & Banking', body: 'M.Sc. Finance (Distinction); background at Goldman Sachs and BayernLB. Speaks CEO and CFO fluently — and in data.' },
    ],
    punchline: 'The rare combination that doesn’t just advise on growth — it builds the engine like a product and measures it like a P&L.',
    founder: { name: 'Daniel Stein', role: 'Founder & Principal', photo: '/founder.jpg' },
  },
  contact: {
    eyebrow: 'Get started',
    title: 'Let’s find your path into Tier-1 accounts.',
    body: 'Book a working session or send a note. We’ll talk through where you are, where you want to be, and whether we’re the right partner to get you there.',
    formAction: 'https://formspree.io/f/YOUR_FORM_ID',
    form: {
      name: 'Name',
      email: 'Work email',
      company: 'Company',
      message: 'What are you trying to grow?',
      consentPre: 'I consent to my details being processed to handle my enquiry, in line with the ',
      consentLink: 'privacy policy',
      consentHref: '/datenschutz',
      consentPost: '.',
      submit: 'Send message',
      sending: 'Sending…',
      success: 'Thanks — we’ll be in touch within one business day.',
      error: 'Something went wrong. Please email us directly.',
      networkError: 'Network error. Please email us directly.',
    },
  },
};

// ============================================================
// DEUTSCH
// ============================================================
const de: typeof en = {
  ui: {
    bookACall: 'Termin buchen',
    footerNavigate: 'Navigation',
    footerConnect: 'Kontakt',
    footerContact: 'Kontakt',
    footerRights: 'Alle Rechte vorbehalten.',
    backToSite: '← Zurück zur Startseite',
    tagline: 'Werden Sie die naheliegende Wahl für Tier-1-Kunden — Neukundengewinnung, entwickelt wie ein Produkt.',
    location: 'Deutschland — für Kunden in der EU, UK & USA',
    switchLabel: 'EN',
    switchTitle: 'View in English',
    switchHref: '/',
  },
  meta: {
    title: 'Salience Growth — Werden Sie die naheliegende Wahl für Tier-1-Kunden',
    description:
      'Salience Growth hilft expertengetriebenen B2B-Dienstleistern, Tier-1-Kunden zu gewinnen und auszubauen — Neukundengewinnung, entwickelt wie ein Produkt.',
  },
  nav: [
    { label: 'Methode', href: '#method' },
    { label: 'Leistungen', href: '#services' },
    { label: 'Vorgehen', href: '#approach' },
    { label: 'Ergebnisse', href: '#results' },
    { label: 'Über', href: '#about' },
  ],
  hero: {
    eyebrow: 'B2B-Wachstumsberatung',
    titlePre: 'Werden Sie die ',
    highlight: 'naheliegende Wahl',
    titlePost: ' für Ihre Enterprise-Kunden.',
    subtitle:
      'Salience Growth hilft expertengetriebenen B2B-Dienstleistern, Tier-1-Kunden zu gewinnen und auszubauen — indem wir Neukundengewinnung wie ein Produkt entwickeln, fundiert auf der Art, wie Ihre Kunden tatsächlich entscheiden. Kein Cold Calling. Kein Verlust Ihres Expertenstatus.',
    primaryCta: { label: 'Arbeitsgespräch buchen', href: '#contact' },
    secondaryCta: { label: 'Die Methode ansehen', href: '#method' },
    trustLine: 'Autoritätsbasierte Nachfrage — gebaut und gemessen wie Software, nicht wie eine Kampagne, die verpufft.',
  },
  proofStrip: [
    { stat: '8×', label: 'effektiveres Content & Outreach — realisiertes Kundenergebnis' },
    { stat: 'Tier-1', label: 'Enterprise-Kunden, gewonnen durch Relevanz statt Masse' },
    { stat: '0', label: 'Cold Calls — Nachfrage durch Autorität, by design' },
  ],
  problem: {
    eyebrow: 'Die Lücke',
    title: 'Starke B2B-Dienstleister scheitern an der Enterprise-Schwelle.',
    body: 'Sie liefern hervorragende Arbeit und Ihre Bestandskunden lieben Sie. Doch der Einstieg in Tier-1-Accounts — und das Wachstum darin — ist ein anderes Spiel. Die Deals sind größer, die Buying-Committees größer, und „gute Arbeit spricht sich herum" reicht nicht mehr.',
    points: [
      { title: 'Strategie ohne Umsetzung', body: 'Viel Beratung, Decks und Frameworks — aber nichts, was den Kontakt mit Ihrer realen Pipeline und Ihrem Team übersteht.' },
      { title: 'Abhängigkeit von Schlüsselpersonen', body: 'Jeder relevante Deal läuft über ein, zwei Personen. Wachstum ist durch deren Kalender begrenzt, nicht durch Ihre Leistungsfähigkeit.' },
      { title: 'Unsichtbar für die Kunden, die zählen', body: 'Sie sind nicht im Raum, wenn Enterprise-Kunden ihre Partner-Shortlist erstellen — die Arbeit geht an einen Namen, dem sie bereits vertrauen.' },
    ],
    whyNow: {
      heading: 'Warum die alte Methode nicht mehr funktioniert',
      stats: [
        { stat: '4,82%', label: 'Erfolgsquote von Cold Calls in die C-Suite', source: 'Cognism, State of Cold Calling 2024' },
        { stat: '67%', label: 'der B2B-Käufer bevorzugen einen vertriebsfreien Kaufprozess', source: 'Gartner, 2026' },
        { stat: '94%', label: 'der Entscheider nutzen LLMs, um Anbieter zu recherchieren und vorzuselektieren', source: 'Forrester / Corporate Visions, 2026' },
        { stat: '95%', label: 'der Deals gehen an einen Anbieter, der schon am ersten Tag auf der Shortlist steht', source: 'Corporate Visions, 2026' },
      ],
      closing:
        'Wenn Sie nicht bereits als Autorität sichtbar sind, stehen Sie nicht auf der Shortlist — und in 95% der Fälle ist die Shortlist das ganze Spiel. Masse erreicht diese Käufer nicht mehr. Nur Relevanz.',
    },
  },
  pillars: {
    eyebrow: 'Was uns unterscheidet',
    title: 'Strategie und Umsetzung — aus einer Hand.',
    body: 'Die meisten Beratungen übergeben Ihnen eine Strategie und sind weg. Wir entwickeln die Wachstumsmechanik und bauen sie dann gemeinsam mit Ihrem Team.',
    items: [
      {
        kicker: '01',
        title: 'Wachstumsstrategie',
        body: 'Wo das Enterprise-Umsatzpotenzial wirklich liegt, wer die Käufer sind und welche Positionierung Sie zur naheliegenden Wahl macht.',
        bullets: [
          'Mapping idealer Tier-1-Accounts & Buyer',
          'Positionierung und Value-Narrativ, das bei Enterprise-Käufern ankommt',
          'Angebots- und Preisarchitektur für größere Mandate',
        ],
      },
      {
        kicker: '02',
        title: 'Operationalisierung',
        body: 'Wir machen aus der Strategie ein laufendes System — Prozesse, Tooling, Content und Rhythmus — das Ihr Team nach uns selbst betreibt.',
        bullets: [
          'Account-based Outbound & Pipeline-Engine',
          'Vertriebsprozess, CRM und Reporting, die zu Ihrer Art zu verkaufen passen',
          'Enablement, damit die Mechanik ohne Sie in jedem Deal läuft',
        ],
        cta: { label: 'Die Systeme ansehen, die wir installieren', href: '#operate' },
      },
    ],
  },
  method: {
    eyebrow: 'Die Methode',
    title: 'Die Salience Growth Methode',
    subtitle: 'Wie Sie zur naheliegenden Wahl werden — by design, nicht durch Zufall.',
    intro:
      'Enterprise-Käufer erstellen ihre Shortlist, bevor sie ein einziges Vertriebsgespräch führen. Die Salience Growth Methode macht Sie zu dem Namen, der schon darauf steht. Wir verbinden eine datengetriebene Lesart davon, wie Ihre Käufer tatsächlich entscheiden, mit Produktmanagement-Disziplin — damit Ihr Wachstum wie ein konstruiertes System läuft, nicht wie ein Hoffen. Zwei Dinge, die die meisten Firmen trennen, im Gleichtakt.',
    stages: [
      { n: '01', name: 'Account Intelligence', body: 'Wir finden, wo Sie in einem Ziel-Account wirklich relevant sein können — und den Moment, der ihn bereit macht zuzuhören. Sie kommen mit einer Haltung, nie mit einem kalten „Haben Sie Bedarf?".' },
      { n: '02', name: 'Salience', body: 'Sie werden zur Autorität, die der Käufer bereits kennt — präsent in seiner Welt und auf der Shortlist, noch vor dem ersten Vertriebsgespräch.' },
      { n: '03', name: 'Trust', body: 'Beziehungen, die durch Mehrwert entstehen, nicht durch Pitches. Wenn es um Kommerzielles geht, sind Sie ein vertrauter Partner auf Augenhöhe — kein weiterer Anbieter.' },
      { n: '04', name: 'Conversion', body: 'Expertengeführt und problemorientiert. Weil Autorität und Vertrauen vorab aufgebaut wurden, ist der Abschluss die logische Folge — keine Verhandlung.' },
    ],
    pullStat: { stat: '8×', label: 'effektiveres Content & Outreach', note: 'realisiertes Kundenergebnis' },
  },
  operate: {
    eyebrow: 'Operationalisierung',
    title: 'Wir übergeben keine Strategie. Wir bauen die Maschine.',
    body: 'Die meisten Beratungen lassen Sie mit einem Deck zurück. Wir installieren ein funktionierendes Akquise-System — entwickelt für Ihre Firma, betrieben von Ihrem Team und noch lange aktiv, nachdem wir weg sind. Drei Engines übernehmen die Schwerstarbeit.',
    engines: [
      { n: '01', title: 'The Sales-Hook Engine', body: 'Eine Bibliothek wertorientierter Anlässe, mit denen ein Senior-Käufer von sich aus ins Gespräch kommen will — jeder ein Geben, kein Fragen, entwickelt daraus, wie Entscheider tatsächlich „Ja" sagen. Outreach, der wie ein Kompliment ankommt, nie wie ein kalter Pitch.' },
      { n: '02', title: 'The Nurturing Engine', body: 'Trusted-Advisor-Relevanz über jeden Account hinweg, skalierbar. Das System trägt die Konstanz; Ihre Senior-Leute setzen ihre knappe Zeit nur dort ein, wo Urteilsvermögen das Ergebnis wirklich verändert.' },
      { n: '03', title: 'The Acquisition Backbone', body: 'Das Betriebssystem darunter — Ihre Prozesse, Daten, Content und KI als eine vernetzte Mechanik. Wir bauen es, verankern es und übergeben Ihnen die Schlüssel.' },
    ],
    cta: { lead: 'Die konkrete Ausgestaltung wird auf Ihre Firma zugeschnitten — das ist das Mandat, kein Gratis-Download.', label: 'Prüfen, ob es zu Ihrer Firma passt', href: '#contact' },
  },
  services: {
    eyebrow: 'Leistungen',
    title: 'Mandate, zugeschnitten auf Ihre Wachstumsphase.',
    body: 'Starten Sie mit einer fokussierten Diagnose oder einem vollständigen operativen Aufbau. Jedes Mandat endet mit etwas, das Ihr Team betreiben kann — nicht nur lesen.',
    items: [
      { title: 'Wachstums-Diagnose', duration: '2–3 Wochen', body: 'Eine klare Analyse Ihrer Enterprise-Wachstumsmechanik, mit einer priorisierten Roadmap der wirkungsvollsten Hebel.' },
      { title: 'Go-to-Market-Strategie', duration: '4–6 Wochen', body: 'Ziel-Account-Strategie, Positionierung und Angebotsdesign, klar auf Tier-1-Käufer ausgerichtet.' },
      { title: 'Vertriebs-Operationalisierung', duration: '8–12 Wochen', body: 'Wir bauen Pipeline-Engine, Vertriebsprozess und CRM/Reporting und verankern sie in Ihrem Team.' },
      { title: 'Account-Based Growth', duration: 'laufend', body: 'Eine wiederholbare Mechanik, um benannte Tier-1-Accounts zu gewinnen und auszubauen — Outbound, Content und Multi-Threading.' },
      { title: 'Autorität & Thought Leadership', duration: 'laufend', body: 'Wir bauen Ihre sichtbare Experten-Autorität auf — die Thought Leadership und Präsenz, durch die Tier-1-Käufer Sie kennen, bevor Sie sie ansprechen, damit Ihr Outreach deutlich besser konvertiert.' },
      { title: 'Revenue Operations', duration: '6–10 Wochen', body: 'Die Daten, das Tooling und die Dashboards, die Pipeline planbar und prognostizierbar machen.' },
      { title: 'Fractional Growth Lead', duration: 'Retainer', body: 'Praktische Wachstumsführung, eingebettet in Ihr Unternehmen — Strategie und Umsetzung, in Teilzeit.' },
    ],
  },
  approach: {
    eyebrow: 'Vorgehen',
    title: 'Ein klarer Weg von festgefahren zu skalierend.',
    body: 'Keine Black Boxes. Sie wissen jederzeit, was wir tun, warum und was als Nächstes kommt. (So arbeiten wir mit Ihnen — zu unterscheiden von der Akquise-Mechanik, die die Methode installiert.)',
    steps: [
      { n: '01', title: 'Diagnostizieren', body: 'Wir prüfen Ihre aktuelle Mechanik auf Herz und Nieren, sprechen mit Ihrem Team und Ihren Kunden und finden, wo Enterprise-Wachstum verloren geht.' },
      { n: '02', title: 'Designen', body: 'Wir definieren die Ziel-Accounts, die Positionierung und das Angebot — und die konkrete Mechanik, die sie gewinnt.' },
      { n: '03', title: 'Operationalisieren', body: 'Wir bauen die Engine mit Ihrem Team: Prozesse, Tooling, Content und Kadenz. Echte Pipeline, keine Theorie.' },
      { n: '04', title: 'Skalieren', body: 'Wir übergeben ein System, das Ihr Team besitzt — mit den Playbooks und Kennzahlen, um es nach uns weiter zu verstärken.' },
    ],
  },
  results: {
    eyebrow: 'Ergebnisse',
    title: 'Ergebnisse, die den Unterschied machen.',
    hero: { stat: '8×', label: 'effektiveres Content & Outreach', note: 'realisiertes Ergebnis ggü. vorheriger Baseline' },
    benchmarksHeading: 'Methoden-Benchmarks',
    benchmarksNote: 'Account-based-/Methoden-Benchmarks (2025–2026) — Richtwerte, keine Garantie pro Kunde.',
    benchmarks: [
      { stat: '−23%', label: 'kürzere Sales-Zyklen' },
      { stat: '+33%', label: 'höherer durchschnittlicher Auftragswert (ACV)' },
      { stat: '137%', label: 'durchschnittlicher ROI von Account-based-Strategien' },
      { stat: '3–5×', label: 'höhere Meeting-Raten ggü. generischem Outreach' },
      { stat: '60%', label: 'der Entscheider vergeben Aufträge direkt aufgrund starker Thought Leadership' },
    ],
  },
  testimonials: {
    eyebrow: 'Kundenstimmen',
    title: 'Was Partner und Revenue-Verantwortliche sagen.',
    items: [
      { quote: 'Für ein Fünftel des bisherigen Investments erhalten wir heute 15-mal so viele Leads — und durch das Pre-Qualifying ist jeder einzelne wirklich relevant für uns.', role: 'Partner, IT-Management-Beratung' },
      { quote: 'Unsere Erstgespräche haben sich von unangenehm und ungebeten zu echten Gesprächen auf Augenhöhe entwickelt.', role: 'Partner, IT-Management-Beratung' },
      { quote: 'Zum ersten Mal wissen wir genau, wen wir ansprechen müssen — und wie.', role: 'CEO, B2B-Compliance-Lösung' },
      { quote: 'Datengetrieben und durchaus schmerzhaft hat Daniel uns gezeigt, warum unser bisheriges Vorgehen nicht funktioniert. Innerhalb von vier Wochen: ein kompletter Turnaround beim Volumen — und, weit wichtiger, bei der Qualität.', role: 'VP Sales, IT-Dienstleister' },
      { quote: 'Niemand konnte uns bisher so klar und datenbasiert zeigen, was in unserer Zielgruppe funktioniert und was nicht. So schnell haben wir noch nie gelernt — und uns verbessert.', role: 'Sales Director, Outsourcing-Unternehmen' },
      { quote: 'Daniel beherrscht nicht nur die Strategie, sondern — fast noch wichtiger — die Umsetzung. Seine Roadmap hielten wir für ambitioniert. Weit gefehlt: Das meiste kam nicht erst im MVP, sondern bereits im MLP — und deutlich schneller, als wir zu träumen gewagt hatten.', role: 'Chief Revenue Officer, Beratungsunternehmen' },
      { quote: 'Als Teil des Mandats hat Daniel rund 13 Mitarbeitende und zwei Kunden interviewt. Daraus — kombiniert mit seinem Ansatz — entwickelte er ein Training, exakt auf unseren Bedarf zugeschnitten. Die Zahlen lügen nicht: +60% Upsell seitdem, gemessen am jährlichen Wachstum der vier Jahre zuvor.', role: 'Partner, IT-Management-Unternehmen' },
    ],
  },
  about: {
    eyebrow: 'Über',
    title: 'Salience: die Eigenschaft, dort herauszustechen, wo es zählt.',
    body: [
      'Salience Growth existiert, weil die besten B2B-Dienstleister für die Enterprise-Käufer, die am meisten von ihnen profitieren würden, zu oft unsichtbar sind.',
      'Wir verbinden eine datengetriebene Lesart davon, wie Tier-1-Käufer entscheiden, mit Produktmanagement-Disziplin — damit der Plan und die Engine, die ihn ausführt, nie zwei getrennte Dinge sind. Sie bekommen einen Partner, der im Vorstand ebenso zu Hause ist wie in Ihrem CRM.',
    ],
    credibility: [
      { title: 'Sales Leader', body: '10+ Jahre im B2B-Vertrieb und in der Neukundengewinnung im Tier-1-/Prime-Segment — Revenue Enablement und skalierbare Vertriebsprozesse.' },
      { title: 'Product Leader', body: 'Cross-funktionale Teams von 8 auf 26 Personen skaliert, 0→1-Produkt-Launches und GTM verantwortet und GenAI in Sales- und Produktorganisationen operationalisiert.' },
      { title: 'Finance & Banking', body: 'M.Sc. Finance (mit Auszeichnung); Stationen bei Goldman Sachs und der BayernLB. Spricht CEO und CFO fließend — und in Daten.' },
    ],
    punchline: 'Die seltene Kombination, die Wachstum nicht nur berät — sondern die Engine wie ein Produkt baut und wie eine GuV misst.',
    founder: { name: 'Daniel Stein', role: 'Gründer & Principal', photo: '/founder.jpg' },
  },
  contact: {
    eyebrow: 'Loslegen',
    title: 'Finden wir Ihren Weg in Tier-1-Accounts.',
    body: 'Buchen Sie ein Arbeitsgespräch oder schreiben Sie uns. Wir besprechen, wo Sie stehen, wohin Sie wollen und ob wir der richtige Partner sind, um Sie dorthin zu bringen.',
    formAction: 'https://formspree.io/f/YOUR_FORM_ID',
    form: {
      name: 'Name',
      email: 'Geschäftliche E-Mail',
      company: 'Unternehmen',
      message: 'Was möchten Sie skalieren?',
      consentPre: 'Ich willige ein, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden, gemäß der ',
      consentLink: 'Datenschutzerklärung',
      consentHref: '/datenschutz',
      consentPost: '.',
      submit: 'Nachricht senden',
      sending: 'Wird gesendet…',
      success: 'Danke — wir melden uns innerhalb eines Werktags.',
      error: 'Etwas ist schiefgelaufen. Bitte schreiben Sie uns direkt.',
      networkError: 'Netzwerkfehler. Bitte schreiben Sie uns direkt.',
    },
  },
};

export const content = { en, de };

export function getContent(lang: Lang = 'en') {
  return content[lang] ?? content.en;
}
