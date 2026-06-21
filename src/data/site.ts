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
  email: 'daniel@saliencegrowth.com',
  bookingUrl: 'https://calendar.app.google/HBYPNgp18NmXVbr18',
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
    tagline: 'Become the obvious choice for Tier-1 buyers. Client acquisition built like a product.',
    location: 'Germany, working with clients across EU, UK & US',
    switchLabel: 'DE',
    switchTitle: 'Auf Deutsch ansehen',
    switchHref: '/de/',
  },
  meta: {
    title: 'Salience Growth | Become the obvious choice for Tier-1 buyers',
    description:
      'Salience Growth helps B2B service firms win and grow Tier-1 accounts by treating client acquisition as a product, built on how buyers actually decide.',
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
      'Salience Growth helps B2B service firms win and grow Tier-1 accounts by treating client acquisition as a product, built on how your buyers actually make decisions. No cold calling. No pitching your way in.',
    primaryCta: { label: 'Book a working session', href: '#contact' },
    secondaryCta: { label: 'See the Method', href: '#method' },
    trustLine: 'Demand built on authority, tracked and improved like software. Not a campaign you hope sticks.',
  },
  proofStrip: [
    { stat: '8×', label: 'more effective content & outreach: realized client result' },
    { stat: 'Tier-1', label: 'enterprise accounts won on relevance, not volume' },
    { stat: '0', label: 'cold calls. We build demand through authority, not noise' },
  ],
  problem: {
    eyebrow: 'The gap',
    title: 'Great B2B service firms stall at the enterprise gate.',
    body: 'You deliver excellent work and your existing clients love you. But breaking into, and scaling within, Tier-1 accounts is a different game. The deals are bigger, the buying committees are larger, and "do great work and referrals will come" no longer cuts it.',
    points: [
      { title: 'Strategy without execution', body: 'Plenty of advice, decks and frameworks. But nothing that survives contact with your actual pipeline and team.' },
      { title: 'Key-People-dependent growth', body: 'Every meaningful deal runs through one or two people. Growth is capped by their calendar, not your capability.' },
      { title: 'Invisible to the buyers that matter', body: 'You are not in the room when enterprise buyers put together their shortlist. The work goes to a name they already trust.' },
    ],
    whyNow: {
      heading: 'Why the old playbook stopped working',
      stats: [
        { stat: '4.82%', label: 'success rate of cold calls into the C-suite', source: 'Cognism, State of Cold Calling 2024' },
        { stat: '67%', label: 'of B2B buyers prefer a rep-free buying experience', source: 'Gartner, 2026' },
        { stat: '94%', label: 'of decision-makers use LLMs to research and pre-select vendors', source: 'Forrester / Corporate Visions, 2026' },
        { stat: '95%', label: 'of deals go to a provider already on the buyer’s day-one shortlist', source: 'Corporate Visions, 2026' },
      ],
      closing:
        'If you are not already visible as an authority, you are not on the shortlist. 95% of the time, the shortlist is the whole game. Volume does not reach these buyers anymore. Only relevance does.',
    },
  },
  pillars: {
    eyebrow: 'What sets us apart',
    title: 'Strategy and execution, under one roof.',
    body: 'Most consultancies hand you a strategy and disappear. We design the approach and then roll up our sleeves to build it with your team.',
    items: [
      {
        kicker: '01',
        title: 'Growth Strategy',
        body: 'Where the enterprise revenue actually is, who the real buyers are, and the positioning that makes you their obvious choice.',
        bullets: [
          'Ideal Tier-1 account & buyer mapping',
          'Positioning and value narrative that lands with enterprise buyers',
          'Offer and pricing architecture for larger engagements',
        ],
      },
      {
        kicker: '02',
        title: 'Execution',
        body: 'We turn the strategy into a running system: process, tooling, content and rhythm. Your team owns it after we leave.',
        bullets: [
          'Account-based outbound & pipeline engine',
          'Sales process, CRM and reporting that fit how you sell',
          'Enablement so the system runs without us in every deal',
        ],
        cta: { label: 'See the systems we build', href: '#operate' },
      },
    ],
  },
  method: {
    eyebrow: 'The method',
    title: 'The Salience Growth Method',
    subtitle: 'How you become the obvious choice, by design, not by chance.',
    intro:
      'Enterprise buyers put together their shortlist before they take a single sales call. The Salience Growth Method makes you the name already on it. We combine a sharp understanding of how your buyers actually decide with product-management discipline, so your growth runs like a system, not a gamble. Two things most firms keep separate, working together.',
    stages: [
      { n: '01', name: 'Account Intelligence', body: 'We find where you can be genuinely relevant inside a target account, and when the timing is right for them to listen. You show up with a perspective, never a cold "do you have a need?"' },
      { n: '02', name: 'Salience', body: 'You become the authority the buyer already knows, present in their world and on their shortlist, before a single sales conversation.' },
      { n: '03', name: 'Trust', body: 'Relationships built through value, not pitches. By the time commercials come up, you are a trusted peer, not another vendor competing on price.' },
      { n: '04', name: 'Conversion', body: 'Expert-led and problem-first. Because the authority and trust were built upstream, the close is the natural conclusion, not a negotiation.' },
    ],
    pullStat: { stat: '8×', label: 'more effective content & outreach', note: 'realized client result' },
  },
  operate: {
    eyebrow: 'Execution',
    title: 'We don’t hand you a strategy. We build the machine.',
    body: 'Most consultancies leave you with a deck. We put a working acquisition system in place, built around your firm, owned by your team, and still running long after we leave. Three engines do the heavy lifting.',
    engines: [
      { n: '01', title: 'The Sales-Hook Engine', body: 'A library of value-first reasons for a senior buyer to want to engage, each one a give, not an ask, built from how decision-makers actually say yes. Outreach that lands as a compliment, never a cold pitch.' },
      { n: '02', title: 'The Nurturing Engine', body: 'Relevant, trusted-advisor contact across every account, at scale. The system handles the consistency; your senior people spend their time only where their judgement actually changes the outcome.' },
      { n: '03', title: 'The Acquisition Backbone', body: 'The operating layer beneath it all: your process, data, content and AI, working as one connected system. We build it, embed it, and hand you the keys.' },
    ],
    cta: { lead: 'The specifics get tailored to your firm. That is what the engagement is for, not a free download.', label: 'See if it fits your firm', href: '#contact' },
  },
  services: {
    eyebrow: 'Services',
    title: 'Engagements built around your stage of growth.',
    body: 'Start with a focused diagnostic or go straight to a full build. Every engagement ends with something your team can run, not just read.',
    items: [
      { title: 'Growth Diagnostic', duration: '2–3 weeks', body: 'A clear-eyed audit of your enterprise growth situation, with a prioritized roadmap of the highest-impact moves.' },
      { title: 'Go-to-Market Strategy', duration: '4–6 weeks', body: 'Target account strategy, positioning and offer design, focused squarely on winning Tier-1 buyers.' },
      { title: 'Sales Execution', duration: '8–12 weeks', body: 'We build the pipeline engine, sales process and CRM/reporting, then embed it with your team.' },
      { title: 'Account-Based Growth', duration: 'Ongoing', body: 'A repeatable system to land and expand named Tier-1 accounts: outbound, content and multi-threading combined.' },
      { title: 'Authority & Thought Leadership', duration: 'Ongoing', body: 'We build your visible expert presence, so Tier-1 buyers already know your name before you reach out, and your outreach actually gets a response.' },
      { title: 'Revenue Operations', duration: '6–10 weeks', body: 'The data, tooling and dashboards that make pipeline predictable and keep it that way.' },
      { title: 'Fractional Growth Lead', duration: 'Retainer', body: 'Hands-on growth leadership embedded in your business: strategy and execution, without the full-time headcount.' },
    ],
  },
  approach: {
    eyebrow: 'Approach',
    title: 'No guesswork. A clear path forward.',
    body: 'No black boxes. You always know what we are doing, why, and what comes next. (This is how we work together, separate from the outreach system the Method puts in place.)',
    steps: [
      { n: '01', title: 'Diagnose', body: 'We pressure-test your current setup, talk to your team and your customers, and find exactly where enterprise growth is stalling.' },
      { n: '02', title: 'Design', body: 'We define the target accounts, positioning and offer, and the specific approach that will actually win them.' },
      { n: '03', title: 'Build', body: 'We build the system with your team: process, tooling, content and cadence. Real pipeline, not slides.' },
      { n: '04', title: 'Scale', body: 'We hand over a system your team owns, with the playbooks and metrics to keep improving it after we leave.' },
    ],
  },
  results: {
    eyebrow: 'Results',
    title: 'What our clients actually see.',
    hero: { stat: '8×', label: 'more effective content & outreach', note: 'realized result vs. previous baseline' },
    benchmarksHeading: 'Method benchmarks',
    benchmarksNote: 'Account-based / method benchmarks (2025–2026), directional, not per-client guarantees.',
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
      { quote: 'For a fifth of our previous spend, we now get 15× the leads. And thanks to the pre-qualifying, every single one is genuinely relevant to us.', role: 'Partner, IT management consultancy' },
      { quote: 'Our first conversations went from awkward and unwelcome to real dialogue between equals.', role: 'Partner, IT management consultancy' },
      { quote: 'For the first time, we know exactly who we need to target, and how.', role: 'CEO, B2B compliance solution' },
      { quote: 'With hard data, and some uncomfortable truths, Daniel showed us why what we were doing wasn’t working. Within four weeks: a complete turnaround, in volume and, far more importantly, in quality.', role: 'VP Sales, IT services company' },
      { quote: 'Nobody had ever shown us so clearly, and with such solid data, what works in our market and what doesn’t. We have never learned and improved this fast.', role: 'Sales Director, outsourcing firm' },
      { quote: 'Daniel has the strategy. But more importantly, he has the execution. We thought his roadmap was ambitious. We were wrong: most of it came in not as an MVP but as an MLP, and far faster than we had imagined.', role: 'Chief Revenue Officer, consulting company' },
      { quote: 'As part of the engagement, Daniel interviewed around 13 of our people and two clients. From that, he built a training tailored exactly to our situation. The numbers speak for themselves: +60% upsell since, compared with our annual growth over the four years before.', role: 'Partner, IT management company' },
    ],
  },
  about: {
    eyebrow: 'About',
    title: 'Salience: the quality of standing out where it counts.',
    body: [
      'Salience Growth exists because the best B2B service firms are too often invisible to the enterprise buyers who would benefit most from working with them.',
      'We combine a rigorous understanding of how Tier-1 buyers make decisions with product-management discipline, so strategy and execution are always the same project. A partner as comfortable in the boardroom as in your CRM.',
    ],
    credibility: [
      { title: 'Sales Leader', body: '10+ years in B2B sales and new-client acquisition at the Tier-1 / prime segment: revenue enablement and building sales processes that scale.' },
      { title: 'Product Leader', body: 'Scaled cross-functional teams from 8 to 26 people, led 0→1 product launches and go-to-market, and put GenAI to work inside sales and product organizations.' },
      { title: 'Finance & Banking', body: 'M.Sc. Finance (Distinction); background at Goldman Sachs and BayernLB. Fluent in the language of CEOs and CFOs, and in data.' },
    ],
    punchline: 'Rare in consulting: we don’t just design the plan. We build it with you, and measure it like a P&L.',
    founder: { name: 'Daniel Stein', role: 'Founder & Principal', photo: '/founder.jpg' },
  },
  contact: {
    eyebrow: 'Get started',
    title: 'Let’s find your path into Tier-1 accounts.',
    body: 'Book a working session or send a note. We’ll talk through where you are, where you want to be, and whether we’re the right fit.',
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
      success: 'Thanks, we’ll be in touch within one business day.',
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
    tagline: 'Die naheliegende Wahl für Tier-1-Kunden. Neukundengewinnung, gebaut wie ein Produkt.',
    location: 'Deutschland, für Kunden in der EU, UK & USA',
    switchLabel: 'EN',
    switchTitle: 'View in English',
    switchHref: '/',
  },
  meta: {
    title: 'Salience Growth | Die naheliegende Wahl für Tier-1-Kunden',
    description:
      'Salience Growth hilft B2B-Dienstleistern, Tier-1-Kunden zu gewinnen und auszubauen: Neukundengewinnung, entwickelt wie ein Produkt.',
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
    titlePost: ' für Enterprise-Kunden.',
    subtitle:
      'Salience Growth hilft B2B-Dienstleistern, Tier-1-Kunden zu gewinnen und auszubauen, indem wir Neukundengewinnung wie ein Produkt entwickeln, basierend darauf, wie Ihre Kunden wirklich entscheiden. Kein Cold Calling. Kein Pitchen gegen günstigere Anbieter.',
    primaryCta: { label: 'Arbeitsgespräch buchen', href: '#contact' },
    secondaryCta: { label: 'Die Methode ansehen', href: '#method' },
    trustLine: 'Nachfrage durch Autorität, aufgebaut und gemessen wie Software. Nicht wie eine Kampagne, die verpufft.',
  },
  proofStrip: [
    { stat: '8×', label: 'effektiveres Content & Outreach: realisiertes Kundenergebnis' },
    { stat: 'Tier-1', label: 'Enterprise-Kunden, gewonnen durch Relevanz statt Masse' },
    { stat: '0', label: 'Cold Calls. Wir bauen Nachfrage durch Autorität, nicht durch Volumen' },
  ],
  problem: {
    eyebrow: 'Die Lücke',
    title: 'Starke B2B-Dienstleister scheitern an der Enterprise-Schwelle.',
    body: 'Sie liefern hervorragende Arbeit und Ihre Bestandskunden schätzen Sie. Doch der Einstieg in Tier-1-Accounts, und das Wachstum darin, ist ein anderes Spiel. Die Deals sind größer, die Entscheidungsgremien größer, und „gute Arbeit spricht sich herum“ reicht einfach nicht mehr.',
    points: [
      { title: 'Strategie ohne Umsetzung', body: 'Viel Beratung, Decks und Frameworks. Aber nichts, was den Kontakt mit Ihrer realen Pipeline übersteht.' },
      { title: 'Abhängigkeit von Schlüsselpersonen', body: 'Jeder relevante Deal läuft über ein, zwei Personen. Wachstum ist durch deren Kalender begrenzt, nicht durch Ihre Leistungsfähigkeit.' },
      { title: 'Unsichtbar für die Kunden, die zählen', body: 'Sie sind nicht im Raum, wenn Enterprise-Kunden ihre Shortlist zusammenstellen. Die Arbeit geht an einen Namen, dem sie bereits vertrauen.' },
    ],
    whyNow: {
      heading: 'Warum das alte Vorgehen nicht mehr funktioniert',
      stats: [
        { stat: '4,82%', label: 'Erfolgsquote von Cold Calls in die C-Suite', source: 'Cognism, State of Cold Calling 2024' },
        { stat: '67%', label: 'der B2B-Käufer bevorzugen einen Kaufprozess ohne Vertriebskontakt', source: 'Gartner, 2026' },
        { stat: '94%', label: 'der Entscheider nutzen KI, um Anbieter zu recherchieren und vorzuselektieren', source: 'Forrester / Corporate Visions, 2026' },
        { stat: '95%', label: 'der Deals gehen an einen Anbieter, der am ersten Tag schon auf der Shortlist stand', source: 'Corporate Visions, 2026' },
      ],
      closing:
        'Wer als Autorität nicht sichtbar ist, steht nicht auf der Shortlist. In 95% der Fälle ist die Shortlist das ganze Spiel. Masse erreicht diese Käufer nicht mehr. Nur Relevanz.',
    },
  },
  pillars: {
    eyebrow: 'Was uns unterscheidet',
    title: 'Strategie und Umsetzung aus einer Hand.',
    body: 'Die meisten Beratungen übergeben Ihnen eine Strategie und sind weg. Wir entwickeln den Ansatz gemeinsam mit Ihnen und bauen ihn dann auch um.',
    items: [
      {
        kicker: '01',
        title: 'Wachstumsstrategie',
        body: 'Wo das Enterprise-Potenzial wirklich liegt, wer die Entscheider sind und welche Positionierung Sie zur naheliegenden Wahl macht.',
        bullets: [
          'Mapping idealer Tier-1-Accounts und Buyer',
          'Positionierung und Wertbotschaft, die bei Enterprise-Kunden ankommen',
          'Angebots- und Preisarchitektur für größere Mandate',
        ],
      },
      {
        kicker: '02',
        title: 'Umsetzung',
        body: 'Wir machen aus der Strategie ein laufendes System: Prozesse, Tooling, Content und Rhythmus, das Ihr Team selbst betreibt.',
        bullets: [
          'Account-based Outbound & Pipeline-Aufbau',
          'Vertriebsprozess, CRM und Reporting, die zu Ihrer Arbeitsweise passen',
          'Enablement, damit das System ohne uns in jedem Deal läuft',
        ],
        cta: { label: 'Die Systeme ansehen, die wir bauen', href: '#operate' },
      },
    ],
  },
  method: {
    eyebrow: 'Die Methode',
    title: 'Die Salience Growth Methode',
    subtitle: 'Wie Sie zur naheliegenden Wahl werden, planvoll, nicht durch Zufall.',
    intro:
      'Enterprise-Käufer stellen ihre Shortlist zusammen, bevor sie das erste Verkaufsgespräch führen. Die Salience Growth Methode sorgt dafür, dass Sie darauf stehen. Wir verbinden ein genaues Verständnis davon, wie Ihre Käufer wirklich entscheiden, mit Produktmanagement-Disziplin, damit Ihr Wachstum wie ein System läuft, nicht auf gut Glück. Zwei Dinge, die die meisten Unternehmen trennen; bei uns greifen sie ineinander.',
    stages: [
      { n: '01', name: 'Account Intelligence', body: 'Wir finden, wo Sie in einem Zielkunden wirklich relevant sein können, und wann der richtige Zeitpunkt ist, damit er zuhört. Sie kommen mit einer Haltung, nie mit einem kalten „Haben Sie Bedarf?“.' },
      { n: '02', name: 'Salience', body: 'Sie werden zur Autorität, die der Käufer bereits kennt, präsent in seiner Welt und auf seiner Shortlist, noch bevor das erste Gespräch stattfindet.' },
      { n: '03', name: 'Trust', body: 'Beziehungen, die durch echten Mehrwert entstehen, nicht durch Pitches. Wenn es um Konditionen geht, sind Sie bereits ein vertrauter Partner auf Augenhöhe, kein weiterer Anbieter.' },
      { n: '04', name: 'Conversion', body: 'Expertengeführt und problemorientiert. Weil Autorität und Vertrauen vorab aufgebaut wurden, ist der Abschluss die logische Folge, keine Verhandlung.' },
    ],
    pullStat: { stat: '8×', label: 'effektiveres Content & Outreach', note: 'realisiertes Kundenergebnis' },
  },
  operate: {
    eyebrow: 'Umsetzung',
    title: 'Wir übergeben keine Strategie. Wir bauen die Maschine.',
    body: 'Die meisten Beratungen lassen Sie mit einem Deck zurück. Wir bauen ein funktionierendes Akquise-System, zugeschnitten auf Ihre Firma, betrieben von Ihrem Team, und noch lange aktiv, nachdem wir fertig sind. Drei Engines tragen die Hauptlast.',
    engines: [
      { n: '01', title: 'The Sales-Hook Engine', body: 'Eine Bibliothek wertorientierter Anlässe, bei denen ein Senior-Käufer von sich aus ins Gespräch kommen will: jeder ein Geben, kein Nehmen, entwickelt daraus, wie Entscheider tatsächlich Ja sagen. Outreach, der wie ein Kompliment ankommt, nie wie ein kalter Pitch.' },
      { n: '02', title: 'The Nurturing Engine', body: 'Relevante Kontaktpunkte über jeden Account hinweg, skalierbar. Das System sorgt für Konstanz; Ihre Führungskräfte setzen ihre Zeit nur dort ein, wo ihr Urteil das Ergebnis wirklich verändert.' },
      { n: '03', title: 'The Acquisition Backbone', body: 'Das Fundament darunter: Ihre Prozesse, Daten, Content und KI als ein zusammenhängendes System. Wir bauen es, verankern es und übergeben Ihnen die Schlüssel.' },
    ],
    cta: { lead: 'Die konkrete Ausgestaltung wird auf Ihre Firma zugeschnitten. Dafür ist das Mandat da, nicht für einen kostenlosen Download.', label: 'Prüfen, ob es zu Ihrer Firma passt', href: '#contact' },
  },
  services: {
    eyebrow: 'Leistungen',
    title: 'Mandate, die zu Ihrer Situation passen.',
    body: 'Starten Sie mit einer fokussierten Diagnose oder gehen Sie direkt in den vollen Aufbau. Jedes Mandat endet mit etwas, das Ihr Team selbst betreiben kann, nicht nur lesen.',
    items: [
      { title: 'Wachstums-Diagnose', duration: '2–3 Wochen', body: 'Eine ehrliche Analyse Ihrer Enterprise-Wachstumssituation, mit einer priorisierten Roadmap der wirkungsvollsten nächsten Schritte.' },
      { title: 'Go-to-Market-Strategie', duration: '4–6 Wochen', body: 'Ziel-Account-Strategie, Positionierung und Angebotsdesign, klar darauf ausgerichtet, Tier-1-Kunden zu gewinnen.' },
      { title: 'Vertriebs-Aufbau', duration: '8–12 Wochen', body: 'Wir bauen Pipeline, Vertriebsprozess und CRM/Reporting auf und verankern das System in Ihrem Team.' },
      { title: 'Account-Based Growth', duration: 'laufend', body: 'Ein wiederholbares System, um konkrete Tier-1-Accounts zu gewinnen und auszubauen: Outbound, Content und Multi-Threading kombiniert.' },
      { title: 'Autorität & Thought Leadership', duration: 'laufend', body: 'Wir machen Sie als Experten sichtbar, mit der Präsenz und den Inhalten, die dafür sorgen, dass Tier-1-Kunden Ihren Namen kennen, bevor Sie sich melden.' },
      { title: 'Revenue Operations', duration: '6–10 Wochen', body: 'Die Daten, das Tooling und die Dashboards, die Pipeline planbar machen und halten.' },
      { title: 'Fractional Growth Lead', duration: 'Retainer', body: 'Operative Wachstumsführung, eingebettet in Ihr Unternehmen: Strategie und Umsetzung, ohne eine Vollzeitstelle.' },
    ],
  },
  approach: {
    eyebrow: 'Vorgehen',
    title: 'Kein Rätselraten. Ein klarer Weg nach vorne.',
    body: 'Keine Black Boxes. Sie wissen jederzeit, was wir tun, warum und was als Nächstes kommt. (So arbeiten wir zusammen, getrennt von der Akquise-Mechanik, die die Methode aufbaut.)',
    steps: [
      { n: '01', title: 'Diagnostizieren', body: 'Wir durchleuchten Ihr aktuelles Vorgehen, sprechen mit Ihrem Team und Ihren Kunden, und finden genau, wo Enterprise-Wachstum verloren geht.' },
      { n: '02', title: 'Konzipieren', body: 'Wir definieren die Zielkunden, die Positionierung und das Angebot, und den konkreten Ansatz, der sie tatsächlich gewinnt.' },
      { n: '03', title: 'Aufbauen', body: 'Wir bauen das System gemeinsam mit Ihrem Team: Prozesse, Tooling, Content und Kadenz. Echte Pipeline, keine Folien.' },
      { n: '04', title: 'Skalieren', body: 'Wir übergeben ein System, das Ihr Team besitzt, mit den Playbooks und Kennzahlen, um es nach uns weiterzuentwickeln.' },
    ],
  },
  results: {
    eyebrow: 'Ergebnisse',
    title: 'Was unsere Kunden tatsächlich erreicht haben.',
    hero: { stat: '8×', label: 'effektiveres Content & Outreach', note: 'realisiertes Ergebnis ggü. vorheriger Baseline' },
    benchmarksHeading: 'Methoden-Benchmarks',
    benchmarksNote: 'Account-based-Benchmarks (2025–2026), Richtwerte, keine Garantie pro Kunde.',
    benchmarks: [
      { stat: '−23%', label: 'kürzere Sales-Zyklen' },
      { stat: '+33%', label: 'höherer durchschnittlicher Auftragswert (ACV)' },
      { stat: '137%', label: 'durchschnittlicher ROI von Account-based-Strategien' },
      { stat: '3–5×', label: 'höhere Meeting-Raten vs. generischem Outreach' },
      { stat: '60%', label: 'der Entscheider vergeben Aufträge direkt aufgrund starker Thought Leadership' },
    ],
  },
  testimonials: {
    eyebrow: 'Kundenstimmen',
    title: 'Was Partner und Vertriebsverantwortliche sagen.',
    items: [
      { quote: 'Für ein Fünftel des bisherigen Budgets erhalten wir heute 15-mal so viele Leads, und durch das Pre-Qualifying ist jeder einzelne wirklich relevant für uns.', role: 'Partner, IT-Management-Beratung' },
      { quote: 'Unsere Erstgespräche haben sich von unangenehm und ungelegen zu echten Gesprächen auf Augenhöhe entwickelt.', role: 'Partner, IT-Management-Beratung' },
      { quote: 'Zum ersten Mal wissen wir genau, wen wir ansprechen müssen, und wie.', role: 'CEO, B2B-Compliance-Lösung' },
      { quote: 'Datenbasiert und durchaus schmerzhaft hat Daniel uns gezeigt, warum unser bisheriges Vorgehen nicht funktioniert hat. Innerhalb von vier Wochen: ein kompletter Turnaround, im Volumen und, noch wichtiger, in der Qualität.', role: 'VP Sales, IT-Dienstleister' },
      { quote: 'Niemand konnte uns bisher so klar und faktenbasiert zeigen, was in unserer Zielgruppe funktioniert und was nicht. So schnell haben wir noch nie gelernt und uns so schnell verbessert.', role: 'Sales Director, Outsourcing-Unternehmen' },
      { quote: 'Daniel beherrscht nicht nur die Strategie, sondern, fast noch wichtiger, die Umsetzung. Seine Roadmap hielten wir für ambitioniert. Weit gefehlt: Das meiste kam nicht als MVP, sondern als MLP, und deutlich schneller, als wir es uns vorgestellt hatten.', role: 'Chief Revenue Officer, Beratungsunternehmen' },
      { quote: 'Als Teil des Mandats hat Daniel rund 13 Mitarbeitende und zwei Kunden interviewt. Daraus entwickelte er ein Training, das exakt auf unsere Situation zugeschnitten war. Die Zahlen sprechen für sich: +60% Upsell seitdem, verglichen mit dem jährlichen Wachstum der vier Jahre davor.', role: 'Partner, IT-Management-Unternehmen' },
    ],
  },
  about: {
    eyebrow: 'Über',
    title: 'Salience: die Eigenschaft, dort aufzufallen, wo es zählt.',
    body: [
      'Salience Growth gibt es, weil die besten B2B-Dienstleister für die Enterprise-Kunden, die am meisten von ihrer Arbeit profitieren würden, zu oft unsichtbar sind.',
      'Wir verbinden ein genaues Verständnis davon, wie Tier-1-Kunden Entscheidungen treffen, mit Produktmanagement-Disziplin: Strategie und Umsetzung sind immer ein und dasselbe Projekt. Ein Partner, der im Vorstand genauso sicher ist wie in Ihrem CRM.',
    ],
    credibility: [
      { title: 'Sales Leader', body: '10+ Jahre im B2B-Vertrieb und in der Neukundengewinnung im Tier-1-Segment: Revenue Enablement und Vertriebsprozesse, die skalieren.' },
      { title: 'Product Leader', body: 'Cross-funktionale Teams von 8 auf 26 Personen aufgebaut, 0→1-Produkt-Launches und Go-to-Market verantwortet und KI in Vertriebs- und Produktorganisationen eingeführt.' },
      { title: 'Finance & Banking', body: 'M.Sc. Finance (mit Auszeichnung); Stationen bei Goldman Sachs und der BayernLB. Spricht die Sprache von CEOs und CFOs, und die der Daten.' },
    ],
    punchline: 'Selten in der Beratung: Wir entwerfen den Plan nicht nur, wir bauen ihn mit Ihnen, und messen ihn wie eine GuV.',
    founder: { name: 'Daniel Stein', role: 'Gründer & Principal', photo: '/founder.jpg' },
  },
  contact: {
    eyebrow: 'Loslegen',
    title: 'Finden wir Ihren Weg in Tier-1-Accounts.',
    body: 'Buchen Sie ein Arbeitsgespräch oder schreiben Sie uns. Wir sprechen darüber, wo Sie stehen, wo Sie hinwollen und ob wir die richtigen sind, um Sie dorthin zu bringen.',
    formAction: 'https://formspree.io/f/YOUR_FORM_ID',
    form: {
      name: 'Name',
      email: 'Geschäftliche E-Mail',
      company: 'Unternehmen',
      message: 'Was möchten Sie ausbauen?',
      consentPre: 'Ich willige ein, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden, gemäß der ',
      consentLink: 'Datenschutzerklärung',
      consentHref: '/datenschutz',
      consentPost: '.',
      submit: 'Nachricht senden',
      sending: 'Wird gesendet…',
      success: 'Danke, wir melden uns innerhalb eines Werktags.',
      error: 'Etwas ist schiefgelaufen. Bitte schreiben Sie uns direkt.',
      networkError: 'Netzwerkfehler. Bitte schreiben Sie uns direkt.',
    },
  },
};

export const content = { en, de };

export function getContent(lang: Lang = 'en') {
  return content[lang];
}
