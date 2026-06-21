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
  serviceUi: {
    eyebrow: 'Service',
    backToServices: '← All services',
    includedTitle: 'What’s included',
    outcomeTitle: 'What you walk away with',
    idealForTitle: 'Ideal for',
    durationLabel: 'Typical duration',
    ctaTitle: 'Not sure which fits?',
    ctaBody: 'Tell us where you are and we’ll point you to the right first move, even if it isn’t us.',
    ctaButton: 'Book a working session',
    ctaHref: '/#contact',
    otherTitle: 'Other services',
    homeHref: '/',
    servicesBase: '/services',
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
    secondaryCta: { label: 'Take the 2-minute Fit Check', href: '#fitcheck' },
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
      { n: '01', name: 'Account Intelligence', body: 'We don\'t guess who to chase. We predict it. Our model identifies where you can be genuinely relevant inside a target account and the moment that makes them ready to listen, so you arrive with a point of view, never a cold "do you have a need?"' },
      { n: '02', name: 'Salience', body: 'You become the authority the buyer already knows, present in their world and on their shortlist, before a single sales conversation.' },
      { n: '03', name: 'Trust', body: 'Relationships built through value, not pitches. By the time commercials come up, you are a trusted peer, not another vendor competing on price.' },
      { n: '04', name: 'Conversion', body: 'Expert-led and problem-first. Because the authority and trust were built upstream, the close is the natural conclusion, not a negotiation.' },
    ],
    pullStat: { stat: '8×', label: 'more effective content & outreach', note: 'realized client result' },
  },
  operate: {
    eyebrow: 'Execution',
    title: 'We don’t hand you a strategy. We build the machine.',
    body: 'Most consultancies leave you with a deck. We put a working acquisition system in place, built around your firm, owned by your team, and still running long after we leave. Four engines do the heavy lifting, on one connected backbone.',
    foundationLabel: 'The Foundation',
    engines: [
      { n: '01', title: 'The Prospecting Engine', body: 'We don\'t guess who to pursue. We predict it. A data model scores your market for genuine fit and reads the signals that say an account is ready to listen: intent, timing, and how the decision actually gets made. You aim every motion at the few accounts that matter, never the many that don\'t.' },
      { n: '02', title: 'The Authority Engine', body: 'We turn your experts\' knowledge into the thought leadership your target buyers need to see, so you\'re a name they already trust before you ever reach out. Your leaders supply the judgement; the engine does the hours. Visible authority on the shortlist, without the calendar cost.' },
      { n: '03', title: 'The Sales-Hook Engine', body: 'A library of value-first reasons for a senior buyer to want to engage, each one a give, not an ask, built from how decision-makers actually say yes. Outreach that lands as a compliment, never a cold pitch.' },
      { n: '04', title: 'The Nurturing Engine', body: 'Relevant, trusted-advisor contact across every account, at scale. The system handles the consistency; your senior people spend their time only where their judgement actually changes the outcome.' },
      { n: '', title: 'The Acquisition Backbone', body: 'The operating layer beneath it all: your process, data, content and AI, working as one connected system. We build it, embed it, and hand you the keys.', foundation: true },
    ],
    cta: { lead: 'The specifics get tailored to your firm. That is what the engagement is for, not a free download.', label: 'See if it fits your firm', href: '#contact' },
  },
  services: {
    eyebrow: 'Services',
    title: 'Engagements built around your stage of growth.',
    body: 'Start with a focused diagnostic or go straight to a full build. Every engagement ends with something your team can run, not just read.',
    items: [
      {
        title: 'Growth Diagnostic',
        slug: 'growth-diagnostic',
        duration: '2–3 weeks',
        body: 'A clear-eyed audit of your enterprise growth situation, with a prioritized roadmap of the highest-impact moves.',
        detail: {
          tagline: 'Know exactly where your enterprise growth is leaking, and what to fix first.',
          overview: 'A focused, evidence-based audit of how you win and grow Tier-1 accounts today. We look at your positioning, pipeline, outreach and the buying journey, then tell you the truth about what is working and what is not.',
          includes: [
            'Review of positioning, offer and target accounts',
            'Pipeline and outreach teardown against what actually moves enterprise buyers',
            'Interviews with your team and, where useful, your clients',
            'A prioritized roadmap of the highest-impact moves',
          ],
          outcome: 'A clear, ranked plan you can act on, with or without us.',
          idealFor: 'Firms that sense the old motion has stalled but want proof before they rebuild.',
        },
      },
      {
        title: 'Go-to-Market Strategy',
        slug: 'go-to-market-strategy',
        duration: '4–6 weeks',
        body: 'Target account strategy, positioning and offer design, focused squarely on winning Tier-1 buyers.',
        detail: {
          tagline: 'A sharp plan for winning the accounts that actually move your numbers.',
          overview: 'We define who to pursue, how to be relevant to them, and the offer that makes the decision easy. This is the strategy layer the Salience Growth Method runs on.',
          includes: [
            'Target account definition and tiering',
            'Positioning and messaging built on how your buyers decide',
            'Offer and pricing design for Tier-1 deals',
            'A go-to-market plan your team can execute',
          ],
          outcome: 'A go-to-market you can put in front of your team on Monday.',
          idealFor: 'Firms moving upmarket who need focus, not another generic playbook.',
        },
      },
      {
        title: 'Sales Execution',
        slug: 'sales-execution',
        duration: '8–12 weeks',
        body: 'We build the pipeline engine, sales process and CRM/reporting, then embed it with your team.',
        detail: {
          tagline: 'The pipeline engine, built and running inside your team.',
          overview: 'We build the outbound system, sales process and reporting that turn strategy into booked meetings, then embed it so your team owns it.',
          includes: [
            'Outbound engine: targeting, sequences and content',
            'A sales process mapped to the enterprise buying journey',
            'CRM, tracking and reporting set up properly',
            'Hands-on enablement with your team',
          ],
          outcome: 'A working pipeline engine your team runs without us.',
          idealFor: 'Firms with a strategy but no repeatable way to fill the pipeline.',
        },
      },
      {
        title: 'Account-Based Growth',
        slug: 'account-based-growth',
        duration: 'Ongoing',
        body: 'A repeatable system to land and expand named Tier-1 accounts: outbound, content and multi-threading combined.',
        detail: {
          tagline: 'Land and expand named Tier-1 accounts, on purpose.',
          overview: 'A repeatable system for winning and growing specific high-value accounts: outbound, authority content and multi-threading working together on the accounts that matter most.',
          includes: [
            'Named account selection and research',
            'Multi-threaded outreach across the buying committee',
            'Account-specific content and points of view',
            'A cadence for landing, then expanding',
          ],
          outcome: 'Steady progress inside the accounts you most want to win.',
          idealFor: 'Firms whose growth depends on a defined set of big logos.',
        },
      },
      {
        title: 'Authority & Thought Leadership',
        slug: 'authority-thought-leadership',
        duration: 'Ongoing',
        body: 'We build your visible expert presence, so Tier-1 buyers already know your name before you reach out, and your outreach actually gets a response.',
        detail: {
          tagline: 'Be the name Tier-1 buyers already trust before you reach out.',
          overview: 'We turn your real expertise into a visible point of view, so the shortlist forms in your favour and your outreach actually gets answered.',
          includes: [
            'A thought-leadership angle rooted in your expertise',
            'A content engine that runs without eating your week',
            'Presence where your buyers actually look',
            'Proof that earns replies and inbound',
          ],
          outcome: 'Recognition that warms every conversation before it starts.',
          idealFor: 'Experts who are excellent but invisible to the buyers that matter.',
        },
      },
      {
        title: 'Revenue Operations',
        slug: 'revenue-operations',
        duration: '6–10 weeks',
        body: 'The data, tooling and dashboards that make pipeline predictable and keep it that way.',
        detail: {
          tagline: 'Make pipeline predictable, and keep it that way.',
          overview: 'The data, tooling and dashboards that turn a busy pipeline into a system you can forecast, diagnose and improve.',
          includes: [
            'CRM and tooling set up to reflect reality',
            'Dashboards for pipeline, conversion and forecast',
            'Clean data and the habits to keep it clean',
            'Clear metrics your team actually uses',
          ],
          outcome: 'A pipeline you can trust the numbers on.',
          idealFor: 'Firms scaling outreach whose reporting can no longer keep up.',
        },
      },
      {
        title: 'Fractional Growth Lead',
        slug: 'fractional-growth-lead',
        duration: 'Retainer',
        body: 'Hands-on growth leadership embedded in your business: strategy and execution, without the full-time headcount.',
        detail: {
          tagline: 'Senior growth leadership, embedded, without the full-time hire.',
          overview: 'Hands-on ownership of your enterprise growth: strategy and execution, in your business, for a fraction of a full-time leader.',
          includes: [
            'Direct ownership of the growth roadmap',
            'Strategy plus week-to-week execution',
            'Leadership for your sales and marketing effort',
            'A steady hand until you are ready to hire',
          ],
          outcome: 'Momentum now, without waiting on a senior hire.',
          idealFor: 'Founders carrying growth themselves who need a partner, not another advisor.',
        },
      },
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
    qualStat: {
      stat: '[[CONFIRM: 82%]]',
      label: 'pre-qualification accuracy. Every account your team works is one a senior buyer recognizes as relevant.',
      note: 'Replace [[CONFIRM: XX%]] with the real figure in src/data/site.ts → results.qualStat.stat',
    },
    qualCorroboration: {
      quote: 'For a fifth of our previous spend, we now get 15× the leads. And thanks to the pre-qualifying, every single one is genuinely relevant to us.',
      role: 'Partner, IT management consultancy',
    },
  },
  fitCheck: {
    eyebrow: 'The Fit Check',
    title: 'Not sure it\'s you? Find out in 2 minutes.',
    subtitle: 'The same fit-scoring logic we run on target accounts, pointed at your firm. No email, no call. You\'ll get a straight answer, including "not yet".',
    cta: 'Take the 2-minute Fit Check',
    progressLabel: 'Question',
    progressOf: 'of',
    retake: 'Start over',
    questions: [
      {
        text: 'What best describes your firm?',
        weakDimension: 'your firm type is a less natural fit for the method',
        options: [
          { label: 'Expertise-led B2B service or consulting firm', score: 2 },
          { label: 'Product or SaaS company', score: 1 },
          { label: 'High-volume agency', score: 0 },
          { label: 'Other', score: 0 },
        ],
      },
      {
        text: 'The accounts you most want to win are...',
        weakDimension: 'you\'re optimizing for volume more than enterprise relevance',
        options: [
          { label: 'Larger or more enterprise than your typical client today', score: 2 },
          { label: 'Same size, you just want more of them', score: 1 },
          { label: 'Smaller and higher-volume', score: 0 },
        ],
      },
      {
        text: 'Today, your biggest deals come from...',
        weakDimension: 'your current deal flow isn\'t yet systematized',
        options: [
          { label: 'One or two key people\'s relationships', score: 2 },
          { label: 'Referrals you can\'t predict or repeat', score: 2 },
          { label: 'A repeatable outbound system that already works', score: 1 },
        ],
      },
      {
        text: 'Do you have genuine, demonstrable expertise to build visible authority on?',
        weakDimension: 'your authority base is still thin',
        options: [
          { label: 'Yes, deep but underexposed', score: 2 },
          { label: 'Some, but a thin track record so far', score: 1 },
          { label: 'Not really, fairly commoditized offering', score: 0, disqualifier: true },
        ],
      },
      {
        text: 'What are you actually looking for?',
        weakDimension: 'you\'re looking for done-for-you results rather than a system your team owns',
        options: [
          { label: 'A system our team owns and runs', score: 2 },
          { label: 'A hands-off, done-for-you lead faucet', score: 1 },
          { label: 'A quick one-off campaign', score: 0, disqualifier: true },
        ],
      },
    ],
    results: {
      strong: {
        tag: 'Strong fit',
        heading: 'This is exactly who the method is built for.',
        body: 'You have real expertise, you\'re chasing bigger accounts than your current motion can reliably reach, and you want a system you own, not a campaign that fades. That\'s the whole design.',
        ctaPrimary: 'Book a working session',
        ctaSecondary: 'Read the method in depth',
      },
      partial: {
        tag: 'Promising fit',
        heading: 'Promising, with one thing to settle first.',
        bodyPre: 'The shape fits, but ',
        bodyPost: '. Worth a conversation before we start. Or read how the method works first.',
        cta: 'Read the method',
      },
      notYet: {
        tag: 'Not yet',
        heading: 'Honestly? We\'re probably not your best move right now.',
        body: 'The method works when there\'s real, demonstrable expertise to make visible and an appetite to build a system rather than run a one-off. If that\'s not where you are yet, a focused authority or positioning project, or a volume channel that fits your model, will serve you better. No hard feelings, no booking needed.',
        cta: 'See the method anyway',
      },
    },
    emailCapture: {
      prompt: 'Want this as a one-page breakdown? Drop an email. That\'s the only thing it\'s for.',
      placeholder: 'Work email',
      consentPre: 'I consent to my details being processed in line with the ',
      consentLink: 'privacy policy',
      consentHref: '/datenschutz',
      consentPost: '.',
      submit: 'Send breakdown',
      successMsg: 'Done. Check your inbox within one business day.',
    },
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
  serviceUi: {
    eyebrow: 'Leistung',
    backToServices: '← Alle Leistungen',
    includedTitle: 'Was enthalten ist',
    outcomeTitle: 'Was Sie mitnehmen',
    idealForTitle: 'Ideal für',
    durationLabel: 'Typische Dauer',
    ctaTitle: 'Nicht sicher, was passt?',
    ctaBody: 'Sagen Sie uns, wo Sie stehen, und wir zeigen Ihnen den richtigen ersten Schritt, auch wenn wir es nicht sind.',
    ctaButton: 'Arbeitsgespräch buchen',
    ctaHref: '/de/#contact',
    otherTitle: 'Weitere Leistungen',
    homeHref: '/de/',
    servicesBase: '/de/services',
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
    secondaryCta: { label: '2-Minuten-Fit-Check starten', href: '#fitcheck' },
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
      { n: '01', name: 'Account Intelligence', body: 'Wir raten nicht, wen wir ansprechen sollen. Wir sagen es vorher. Unser Modell identifiziert, wo Sie in einem Zielkunden wirklich relevant sein können und den Moment, der ihn zum Zuhören bereit macht, damit Sie mit einer klaren Haltung ankommen, nie mit einem kalten „Haben Sie Bedarf?”.' },
      { n: '02', name: 'Salience', body: 'Sie werden zur Autorität, die der Käufer bereits kennt, präsent in seiner Welt und auf seiner Shortlist, noch bevor das erste Gespräch stattfindet.' },
      { n: '03', name: 'Trust', body: 'Beziehungen, die durch echten Mehrwert entstehen, nicht durch Pitches. Wenn es um Konditionen geht, sind Sie bereits ein vertrauter Partner auf Augenhöhe, kein weiterer Anbieter.' },
      { n: '04', name: 'Conversion', body: 'Expertengeführt und problemorientiert. Weil Autorität und Vertrauen vorab aufgebaut wurden, ist der Abschluss die logische Folge, keine Verhandlung.' },
    ],
    pullStat: { stat: '8×', label: 'effektiveres Content & Outreach', note: 'realisiertes Kundenergebnis' },
  },
  operate: {
    eyebrow: 'Umsetzung',
    title: 'Wir übergeben keine Strategie. Wir bauen die Maschine.',
    body: 'Die meisten Beratungen lassen Sie mit einem Deck zurück. Wir bauen ein funktionierendes Akquise-System, zugeschnitten auf Ihre Firma, betrieben von Ihrem Team, und noch lange aktiv, nachdem wir fertig sind. Vier Engines tragen die Hauptlast, auf einem gemeinsamen Fundament.',
    foundationLabel: 'Das Fundament',
    engines: [
      { n: '01', title: 'The Prospecting Engine', body: 'Wir raten nicht, wen wir ansprechen sollen. Wir sagen es vorher. Ein Datenmodell bewertet Ihren Markt auf echte Passung und liest die Signale, die zeigen, wann ein Account bereit ist zuzuhören: Absicht, Timing und wie die Entscheidung tatsächlich fällt. Jede Aktion zielt auf die wenigen Accounts, die zählen, nie auf die vielen, die es nicht tun.' },
      { n: '02', title: 'The Authority Engine', body: 'Wir machen das Wissen Ihrer Experten zu genau der Thought Leadership, die Ihre Zielkunden sehen müssen, damit Sie ein bekannter Name sind, bevor Sie sich melden. Ihre Führungskräfte liefern das Urteil; die Engine erledigt die Stunden. Sichtbare Autorität auf der Shortlist, ohne den Kalenderaufwand.' },
      { n: '03', title: 'The Sales-Hook Engine', body: 'Eine Bibliothek wertorientierter Anlässe, bei denen ein Senior-Käufer von sich aus ins Gespräch kommen will: jeder ein Geben, kein Nehmen, entwickelt daraus, wie Entscheider tatsächlich Ja sagen. Outreach, der wie ein Kompliment ankommt, nie wie ein kalter Pitch.' },
      { n: '04', title: 'The Nurturing Engine', body: 'Relevante Kontaktpunkte über jeden Account hinweg, skalierbar. Das System sorgt für Konstanz; Ihre Führungskräfte setzen ihre Zeit nur dort ein, wo ihr Urteil das Ergebnis wirklich verändert.' },
      { n: '', title: 'The Acquisition Backbone', body: 'Das Fundament darunter: Ihre Prozesse, Daten, Content und KI als ein zusammenhängendes System. Wir bauen es, verankern es und übergeben Ihnen die Schlüssel.', foundation: true },
    ],
    cta: { lead: 'Die konkrete Ausgestaltung wird auf Ihre Firma zugeschnitten. Dafür ist das Mandat da, nicht für einen kostenlosen Download.', label: 'Prüfen, ob es zu Ihrer Firma passt', href: '#contact' },
  },
  services: {
    eyebrow: 'Leistungen',
    title: 'Mandate, die zu Ihrer Situation passen.',
    body: 'Starten Sie mit einer fokussierten Diagnose oder gehen Sie direkt in den vollen Aufbau. Jedes Mandat endet mit etwas, das Ihr Team selbst betreiben kann, nicht nur lesen.',
    items: [
      {
        title: 'Wachstums-Diagnose',
        slug: 'growth-diagnostic',
        duration: '2–3 Wochen',
        body: 'Eine ehrliche Analyse Ihrer Enterprise-Wachstumssituation, mit einer priorisierten Roadmap der wirkungsvollsten nächsten Schritte.',
        detail: {
          tagline: 'Wissen Sie genau, wo Ihr Enterprise-Wachstum verliert, und was zuerst zu beheben ist.',
          overview: 'Eine fokussierte, faktenbasierte Analyse, wie Sie heute Tier-1-Kunden gewinnen und ausbauen. Wir prüfen Positionierung, Pipeline, Outreach und die Buying Journey und sagen Ihnen ehrlich, was funktioniert und was nicht.',
          includes: [
            'Prüfung von Positionierung, Angebot und Zielkunden',
            'Analyse von Pipeline und Outreach an dem, was Enterprise-Käufer wirklich bewegt',
            'Interviews mit Ihrem Team und, wo sinnvoll, Ihren Kunden',
            'Eine priorisierte Roadmap der wirkungsvollsten Schritte',
          ],
          outcome: 'Ein klarer, priorisierter Plan, den Sie umsetzen können, mit oder ohne uns.',
          idealFor: 'Firmen, die spüren, dass das alte Vorgehen stockt, aber Belege wollen, bevor sie umbauen.',
        },
      },
      {
        title: 'Go-to-Market-Strategie',
        slug: 'go-to-market-strategy',
        duration: '4–6 Wochen',
        body: 'Ziel-Account-Strategie, Positionierung und Angebotsdesign, klar darauf ausgerichtet, Tier-1-Kunden zu gewinnen.',
        detail: {
          tagline: 'Ein scharfer Plan, um genau die Kunden zu gewinnen, die Ihre Zahlen bewegen.',
          overview: 'Wir definieren, wen Sie ansprechen, wie Sie für diese Kunden relevant werden und welches Angebot die Entscheidung leicht macht. Das ist die Strategieebene, auf der die Salience Growth Methode läuft.',
          includes: [
            'Definition und Priorisierung der Zielkunden',
            'Positionierung und Botschaften, gebaut auf der Entscheidungslogik Ihrer Käufer',
            'Angebots- und Preisdesign für Tier-1-Deals',
            'Ein Go-to-Market-Plan, den Ihr Team umsetzen kann',
          ],
          outcome: 'Ein Go-to-Market, das Sie Ihrem Team am Montag vorlegen können.',
          idealFor: 'Firmen, die nach oben wachsen und Fokus brauchen, kein weiteres generisches Playbook.',
        },
      },
      {
        title: 'Vertriebs-Aufbau',
        slug: 'sales-execution',
        duration: '8–12 Wochen',
        body: 'Wir bauen Pipeline, Vertriebsprozess und CRM/Reporting auf und verankern das System in Ihrem Team.',
        detail: {
          tagline: 'Die Pipeline-Maschine, aufgebaut und laufend in Ihrem Team.',
          overview: 'Wir bauen das Outbound-System, den Vertriebsprozess und das Reporting, die aus Strategie gebuchte Termine machen, und verankern alles, sodass Ihr Team es besitzt.',
          includes: [
            'Outbound-Engine: Targeting, Sequenzen und Content',
            'Ein Vertriebsprozess entlang der Enterprise-Buying-Journey',
            'CRM, Tracking und Reporting, sauber aufgesetzt',
            'Praktisches Enablement mit Ihrem Team',
          ],
          outcome: 'Eine funktionierende Pipeline-Maschine, die Ihr Team ohne uns betreibt.',
          idealFor: 'Firmen mit Strategie, aber ohne wiederholbaren Weg, die Pipeline zu füllen.',
        },
      },
      {
        title: 'Account-Based Growth',
        slug: 'account-based-growth',
        duration: 'laufend',
        body: 'Ein wiederholbares System, um konkrete Tier-1-Accounts zu gewinnen und auszubauen: Outbound, Content und Multi-Threading kombiniert.',
        detail: {
          tagline: 'Konkrete Tier-1-Accounts gewinnen und ausbauen, mit System.',
          overview: 'Ein wiederholbares System, um bestimmte hochwertige Accounts zu gewinnen und auszubauen: Outbound, Autoritäts-Content und Multi-Threading, abgestimmt auf die Accounts, die am meisten zählen.',
          includes: [
            'Auswahl und Recherche der Ziel-Accounts',
            'Multi-threaded Outreach über das gesamte Buying-Committee',
            'Account-spezifischer Content und Standpunkte',
            'Eine Kadenz zum Gewinnen und anschließenden Ausbauen',
          ],
          outcome: 'Stetiger Fortschritt in den Accounts, die Sie am meisten gewinnen wollen.',
          idealFor: 'Firmen, deren Wachstum von einer definierten Gruppe großer Namen abhängt.',
        },
      },
      {
        title: 'Autorität & Thought Leadership',
        slug: 'authority-thought-leadership',
        duration: 'laufend',
        body: 'Wir machen Sie als Experten sichtbar, mit der Präsenz und den Inhalten, die dafür sorgen, dass Tier-1-Kunden Ihren Namen kennen, bevor Sie sich melden.',
        detail: {
          tagline: 'Seien Sie der Name, dem Tier-1-Käufer schon vertrauen, bevor Sie sich melden.',
          overview: 'Wir machen aus Ihrer echten Expertise einen sichtbaren Standpunkt, sodass die Shortlist zu Ihren Gunsten entsteht und Ihr Outreach tatsächlich beantwortet wird.',
          includes: [
            'Ein Thought-Leadership-Winkel, verankert in Ihrer Expertise',
            'Eine Content-Maschine, die nicht Ihre Woche auffrisst',
            'Präsenz dort, wo Ihre Käufer wirklich hinschauen',
            'Belege, die Antworten und Inbound erzeugen',
          ],
          outcome: 'Bekanntheit, die jedes Gespräch vorwärmt, bevor es beginnt.',
          idealFor: 'Experten, die exzellent, aber für die relevanten Käufer unsichtbar sind.',
        },
      },
      {
        title: 'Revenue Operations',
        slug: 'revenue-operations',
        duration: '6–10 Wochen',
        body: 'Die Daten, das Tooling und die Dashboards, die Pipeline planbar machen und halten.',
        detail: {
          tagline: 'Machen Sie Pipeline planbar, und halten Sie sie so.',
          overview: 'Die Daten, das Tooling und die Dashboards, die aus einer vollen Pipeline ein System machen, das Sie prognostizieren, durchleuchten und verbessern können.',
          includes: [
            'CRM und Tooling, das die Realität abbildet',
            'Dashboards für Pipeline, Conversion und Forecast',
            'Saubere Daten und die Routinen, sie sauber zu halten',
            'Klare Kennzahlen, die Ihr Team wirklich nutzt',
          ],
          outcome: 'Eine Pipeline, deren Zahlen Sie trauen können.',
          idealFor: 'Firmen, die Outreach skalieren und deren Reporting nicht mehr mitkommt.',
        },
      },
      {
        title: 'Fractional Growth Lead',
        slug: 'fractional-growth-lead',
        duration: 'Retainer',
        body: 'Operative Wachstumsführung, eingebettet in Ihr Unternehmen: Strategie und Umsetzung, ohne eine Vollzeitstelle.',
        detail: {
          tagline: 'Erfahrene Wachstumsführung, eingebettet, ohne Vollzeitstelle.',
          overview: 'Operative Verantwortung für Ihr Enterprise-Wachstum: Strategie und Umsetzung, in Ihrem Unternehmen, für einen Bruchteil einer Vollzeit-Führungskraft.',
          includes: [
            'Direkte Verantwortung für die Wachstums-Roadmap',
            'Strategie plus Umsetzung Woche für Woche',
            'Führung für Ihren Vertriebs- und Marketingaufwand',
            'Eine ruhige Hand, bis Sie bereit sind einzustellen',
          ],
          outcome: 'Schwung jetzt, ohne auf eine Senior-Einstellung zu warten.',
          idealFor: 'Gründer, die Wachstum selbst tragen und einen Partner brauchen, keinen weiteren Berater.',
        },
      },
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
    qualStat: {
      stat: '[[CONFIRM: XX%]]',
      label: 'Vorqualifizierungsgenauigkeit. Jeder Account in Ihrer Pipeline ist einer, den ein Senior-Käufer als relevant einschätzen würde.',
      note: 'Replace [[CONFIRM: XX%]] with the real figure in src/data/site.ts → results.qualStat.stat',
    },
    qualCorroboration: {
      quote: 'Für ein Fünftel des bisherigen Budgets erhalten wir heute 15-mal so viele Leads, und durch das Pre-Qualifying ist jeder einzelne wirklich relevant für uns.',
      role: 'Partner, IT-Management-Beratung',
    },
  },
  fitCheck: {
    eyebrow: 'Der Fit Check',
    title: 'Nicht sicher, ob Sie dazugehören? In 2 Minuten Klarheit.',
    subtitle: 'Dieselbe Fit-Logik, die wir auf Ihre Zielkunden anwenden, jetzt auf Ihre Firma gerichtet. Keine E-Mail, kein Anruf. Sie bekommen eine ehrliche Antwort, auch wenn die lautet: noch nicht.',
    cta: 'Zum 2-Minuten-Fit-Check',
    progressLabel: 'Frage',
    progressOf: 'von',
    retake: 'Neu starten',
    questions: [
      {
        text: 'Was beschreibt Ihre Firma am besten?',
        weakDimension: 'Ihr Firmentyp ist eine weniger natürliche Passung für die Methode',
        options: [
          { label: 'Expertengeführter B2B-Dienstleister oder Beratung', score: 2 },
          { label: 'Produkt- oder SaaS-Unternehmen', score: 1 },
          { label: 'Hochvolumen-Agentur', score: 0 },
          { label: 'Sonstiges', score: 0 },
        ],
      },
      {
        text: 'Die Kunden, die Sie am liebsten gewinnen würden, sind...',
        weakDimension: 'Sie optimieren eher auf Volumen als auf Enterprise-Relevanz',
        options: [
          { label: 'Größer oder mehr Enterprise als Ihre heutigen Kunden', score: 2 },
          { label: 'Gleiche Größe, Sie wollen einfach mehr davon', score: 1 },
          { label: 'Kleiner und mit höherem Volumen', score: 0 },
        ],
      },
      {
        text: 'Ihre größten Deals entstehen heute durch...',
        weakDimension: 'Ihr aktueller Dealflow ist noch nicht systematisiert',
        options: [
          { label: 'Ein, zwei persönliche Schlüsselbeziehungen', score: 2 },
          { label: 'Empfehlungen, die Sie nicht steuern können', score: 2 },
          { label: 'Ein bereits funktionierendes Outbound-System', score: 1 },
        ],
      },
      {
        text: 'Haben Sie echte, nachweisbare Expertise, auf der sich sichtbare Autorität aufbauen lässt?',
        weakDimension: 'Ihre Expertisebasis ist noch zu dünn',
        options: [
          { label: 'Ja, tief, aber wenig sichtbar', score: 2 },
          { label: 'Etwas, aber eine dünne Erfolgsbilanz bisher', score: 1 },
          { label: 'Nicht wirklich, recht austauschbares Angebot', score: 0, disqualifier: true },
        ],
      },
      {
        text: 'Was suchen Sie eigentlich?',
        weakDimension: 'Sie suchen fertige Ergebnisse, kein System, das Ihr Team besitzt',
        options: [
          { label: 'Ein System, das unser Team selbst betreibt', score: 2 },
          { label: 'Fertige Leads ohne eigenen Aufwand', score: 1 },
          { label: 'Eine schnelle Einzel-Kampagne', score: 0, disqualifier: true },
        ],
      },
    ],
    results: {
      strong: {
        tag: 'Starke Passung',
        heading: 'Genau für Sie ist die Methode gebaut.',
        body: 'Sie haben echte Expertise, Sie wollen größere Kunden als Ihr heutiges Vorgehen zuverlässig erreicht, und Sie wollen ein System, das Ihr Team besitzt, keine Kampagne, die verpufft. Das ist das Grunddesign.',
        ctaPrimary: 'Arbeitsgespräch buchen',
        ctaSecondary: 'Die Methode im Detail',
      },
      partial: {
        tag: 'Vielversprechend',
        heading: 'Vielversprechend, mit einer Sache, die es zu klären gilt.',
        bodyPre: 'Die Grundform passt, aber ',
        bodyPost: '. Das ist ein Gespräch wert, bevor wir loslegen. Oder lesen Sie zuerst, wie die Methode wirklich funktioniert.',
        cta: 'Die Methode lesen',
      },
      notYet: {
        tag: 'Noch nicht',
        heading: 'Ehrlich gesagt: Wir sind gerade wahrscheinlich nicht Ihr bester Zug.',
        body: 'Die Methode funktioniert, wenn echte, nachweisbare Expertise vorhanden ist und der Wille, ein System aufzubauen, statt eine Einmalkampagne zu fahren. Wenn das noch nicht der Fall ist, werden ein Positionierungs-Projekt oder ein Volumenkanal, der zu Ihrem Modell passt, besser für Sie funktionieren. Kein Problem, kein Anruf nötig.',
        cta: 'Trotzdem die Methode ansehen',
      },
    },
    emailCapture: {
      prompt: 'Ergebnis als eine Seite per Mail? Einfach E-Mail-Adresse hinterlassen.',
      placeholder: 'Geschäftliche E-Mail',
      consentPre: 'Ich willige ein, dass meine Angaben gemäß der ',
      consentLink: 'Datenschutzerklärung',
      consentHref: '/datenschutz',
      consentPost: ' verarbeitet werden.',
      submit: 'Zusammenfassung senden',
      successMsg: 'Erledigt. Sie hören innerhalb eines Werktags von uns.',
    },
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
