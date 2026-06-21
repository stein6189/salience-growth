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
          tagline: 'Find out where the enterprise growth is actually getting lost.',
          overview: 'First I look hard at how you win and grow big accounts today: your positioning, your pipeline, your outreach, and the way buyers really move toward a decision. Then I tell you what I find. Including the parts that sting. You walk out with the real picture.',
          includes: [
            'A hard look at positioning, offer and which accounts you are really chasing',
            'Your pipeline and outreach, measured against what moves enterprise buyers',
            'Conversations with your team, and your clients where it helps',
            'A short list of the moves that change the most, in order',
          ],
          outcome: 'A ranked plan you can run with, whether or not you bring me in.',
          idealFor: 'You can feel the old approach stalling, and you want proof before you rebuild.',
        },
      },
      {
        title: 'Go-to-Market Strategy',
        slug: 'go-to-market-strategy',
        duration: '4–6 weeks',
        body: 'Target account strategy, positioning and offer design, focused squarely on winning Tier-1 buyers.',
        detail: {
          tagline: 'Decide who to chase, and why they should care.',
          overview: 'I work out which accounts are worth your time and how to actually matter to them. Then we shape the offer that makes a yes easy. This is the layer the rest of the Salience Growth Method sits on. Get it wrong and everything after it wobbles. So we slow down here.',
          includes: [
            'The accounts worth going after, and the ones to quietly drop',
            'Positioning and messaging built on how your buyers really decide',
            'An offer and price shaped for Tier-1 deals',
            'A plan your team can pick up and run',
          ],
          outcome: 'A go-to-market your team can act on the same week.',
          idealFor: 'You’re moving upmarket and need focus, not a fatter playbook.',
        },
      },
      {
        title: 'Sales Execution',
        slug: 'sales-execution',
        duration: '8–12 weeks',
        body: 'We build the pipeline engine, sales process and CRM/reporting, then embed it with your team.',
        detail: {
          tagline: 'Turn the plan into booked meetings, run by your own team.',
          overview: 'A strategy that never ships is just a nice document. So this is where we build the moving parts: the outbound, a sales process that matches how you really sell, the CRM and tracking underneath, and the rhythm that keeps it alive. We set it up with your people, in your tools, on your accounts. By the end, they run it without me.',
          includes: [
            'An outbound engine: who to reach, what to say, and the content behind it',
            'A sales process mapped to how enterprise buyers really buy',
            'CRM, tracking and reporting that reflect what is actually happening',
            'Time with your team so the system holds after we leave',
          ],
          outcome: 'A pipeline engine your team keeps running on its own.',
          idealFor: 'You have the strategy. What you lack is a repeatable way to fill the pipeline.',
        },
      },
      {
        title: 'Account-Based Growth',
        slug: 'account-based-growth',
        duration: 'Ongoing',
        body: 'A repeatable system to land and expand named Tier-1 accounts: outbound, content and multi-threading combined.',
        detail: {
          tagline: 'Win the specific logos you keep circling, on purpose.',
          overview: 'Some firms live or die by thirty accounts. If that’s you, spray-and-pray outreach is the wrong tool. We pick the accounts that matter, learn how each one buys, and work every seat at the table with outreach built for them. Landing the logo is step one. Then we go wider inside it.',
          includes: [
            'The named accounts worth the effort, properly researched',
            'Outreach across the whole buying committee, not a single contact',
            'A point of view written for that specific account',
            'A rhythm for landing first, then expanding inside',
          ],
          outcome: 'Real movement inside the accounts you most want to win.',
          idealFor: 'Your growth rides on a defined set of big names.',
        },
      },
      {
        title: 'Authority & Thought Leadership',
        slug: 'authority-thought-leadership',
        duration: 'Ongoing',
        body: 'We build your visible expert presence, so Tier-1 buyers already know your name before you reach out, and your outreach actually gets a response.',
        detail: {
          tagline: 'Be a name your buyers know before you ever email them.',
          overview: 'Most experts are excellent and invisible at the same time. We fix the second half. I take what you already know and turn it into a clear point of view your buyers keep running into. By the time you reach out, you’re not a stranger.',
          includes: [
            'A point of view that comes from your real expertise, not borrowed takes',
            'A content engine that does not eat your whole week',
            'Presence in the places your buyers already look',
            'Proof that earns replies, and the occasional inbound',
          ],
          outcome: 'Conversations that start warm, because they already know your name.',
          idealFor: 'You’re genuinely good, and almost nobody who matters knows it.',
        },
      },
      {
        title: 'Revenue Operations',
        slug: 'revenue-operations',
        duration: '6–10 weeks',
        body: 'The data, tooling and dashboards that make pipeline predictable and keep it that way.',
        detail: {
          tagline: 'Make the pipeline something you can actually forecast.',
          overview: 'A busy pipeline you can’t trust is just noise. We set up the tooling and the dashboards that turn it into something you can read and improve. No more guessing in the Monday meeting. You see what’s real, and what’s wishful.',
          includes: [
            'CRM and tooling set up to match what is really happening',
            'Dashboards for pipeline, conversion, forecast and win rate',
            'Clean data, and the small habits that keep it clean',
            'A handful of metrics your team will actually use',
          ],
          outcome: 'Pipeline numbers you can actually believe.',
          idealFor: 'You’re scaling outreach and your reporting has stopped keeping up.',
        },
      },
      {
        title: 'Fractional Growth Lead',
        slug: 'fractional-growth-lead',
        duration: 'Retainer',
        body: 'Hands-on growth leadership embedded in your business: strategy and execution, without the full-time headcount.',
        detail: {
          tagline: 'A senior growth lead in your corner, without the full-time salary.',
          overview: 'Sometimes you need someone who owns growth, not another advisor with opinions. That is the role I step into. I pick up the roadmap and the week-to-week work, lead your sales and marketing effort, and stay until you are ready to hire someone permanent. No long ramp-up. I start where you are.',
          includes: [
            'Direct ownership of the growth roadmap',
            'Strategy and the actual week-to-week work, not just advice',
            'Leadership for your sales and marketing effort',
            'A steady hand until the full-time hire is right',
          ],
          outcome: 'Momentum now, instead of waiting months for the perfect hire.',
          idealFor: 'You’re carrying growth yourself and need a partner, not a report.',
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
        body: 'You’ve got real expertise. You’re going after bigger accounts than your current way of working can reliably reach, and you want to own the system at the end rather than rent a campaign that fades the moment you stop paying for it. So let’s talk.',
        ctaPrimary: 'Book a working session',
        ctaSecondary: 'Read the method in depth',
      },
      partial: {
        tag: 'Promising fit',
        heading: 'Promising, with one thing to settle first.',
        bodyPre: 'The shape’s right. But ',
        bodyPost: '. That’s worth talking through before we start. Or just read how the method works and decide for yourself.',
        cta: 'Read the method',
      },
      notYet: {
        tag: 'Not yet',
        heading: 'Honestly? I’m probably not your best move right now.',
        body: 'The method needs two things: real expertise worth making visible, and the appetite to build something that lasts instead of running a one-off. If you’re not there yet, that’s fine. I’d rather say so now than take your money. A sharper positioning project, or a volume channel that suits your model, will do more for you today. No hard feelings, no call needed.',
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
          tagline: 'Herausfinden, wo das Enterprise-Wachstum wirklich verloren geht.',
          overview: 'Zuerst schaue ich mir genau an, wie Sie heute große Kunden gewinnen und ausbauen: Ihre Positionierung, Ihre Pipeline, Ihren Outreach und den Weg, den Ihre Käufer bis zur Entscheidung nehmen. Dann sage ich Ihnen, was ich sehe. Auch die unangenehmen Teile. Sie bekommen das ehrliche Bild.',
          includes: [
            'Ein ehrlicher Blick auf Positionierung, Angebot und die Accounts, die Sie wirklich verfolgen',
            'Ihre Pipeline und Ihr Outreach, gemessen an dem, was Enterprise-Käufer bewegt',
            'Gespräche mit Ihrem Team, und mit Ihren Kunden, wo es hilft',
            'Eine kurze Liste der Schritte, die am meisten verändern, in Reihenfolge',
          ],
          outcome: 'Ein priorisierter Plan, den Sie umsetzen können, ob mit mir oder ohne.',
          idealFor: 'Sie spüren, dass das alte Vorgehen stockt, und wollen Belege, bevor Sie umbauen.',
        },
      },
      {
        title: 'Go-to-Market-Strategie',
        slug: 'go-to-market-strategy',
        duration: '4–6 Wochen',
        body: 'Ziel-Account-Strategie, Positionierung und Angebotsdesign, klar darauf ausgerichtet, Tier-1-Kunden zu gewinnen.',
        detail: {
          tagline: 'Festlegen, wen Sie ansprechen, und warum es ihn interessieren sollte.',
          overview: 'Ich erarbeite, welche Accounts Ihre Zeit wert sind und wie Sie für diese Accounts wirklich relevant werden. Dann gestalten wir das Angebot, das ein Ja leicht macht. Das ist die Ebene, auf der der Rest der Salience Growth Methode aufbaut. Stimmt sie nicht, wackelt alles danach. Deshalb nehmen wir uns hier Zeit.',
          includes: [
            'Die Accounts, die sich lohnen, und die, die Sie ruhig streichen können',
            'Positionierung und Botschaften, gebaut auf der echten Entscheidungslogik Ihrer Käufer',
            'Ein Angebot und ein Preis, zugeschnitten auf Tier-1-Deals',
            'Ein Plan, den Ihr Team aufnehmen und umsetzen kann',
          ],
          outcome: 'Ein Go-to-Market, das Ihr Team in derselben Woche umsetzen kann.',
          idealFor: 'Sie wachsen nach oben und brauchen Fokus, kein dickeres Playbook.',
        },
      },
      {
        title: 'Vertriebs-Aufbau',
        slug: 'sales-execution',
        duration: '8–12 Wochen',
        body: 'Wir bauen Pipeline, Vertriebsprozess und CRM/Reporting auf und verankern das System in Ihrem Team.',
        detail: {
          tagline: 'Aus dem Plan werden gebuchte Termine, betrieben von Ihrem eigenen Team.',
          overview: 'Eine Strategie, die nie in Betrieb geht, ist nur ein schönes Dokument. Hier bauen wir also die beweglichen Teile: den Outbound, einen Vertriebsprozess, der zu Ihrer Art zu verkaufen passt, das CRM und Tracking darunter, und den Rhythmus, der alles am Laufen hält. Wir richten es mit Ihren Leuten ein, in Ihren Tools, an Ihren Accounts. Am Ende läuft es ohne mich.',
          includes: [
            'Eine Outbound-Engine: wen ansprechen, was sagen, und der Content dahinter',
            'Ein Vertriebsprozess, abgestimmt darauf, wie Enterprise-Käufer wirklich kaufen',
            'CRM, Tracking und Reporting, die abbilden, was tatsächlich passiert',
            'Zeit mit Ihrem Team, damit das System nach uns hält',
          ],
          outcome: 'Eine Pipeline-Maschine, die Ihr Team selbst am Laufen hält.',
          idealFor: 'Die Strategie steht. Was fehlt, ist ein wiederholbarer Weg, die Pipeline zu füllen.',
        },
      },
      {
        title: 'Account-Based Growth',
        slug: 'account-based-growth',
        duration: 'laufend',
        body: 'Ein wiederholbares System, um konkrete Tier-1-Accounts zu gewinnen und auszubauen: Outbound, Content und Multi-Threading kombiniert.',
        detail: {
          tagline: 'Genau die Logos gewinnen, um die Sie ständig kreisen, mit Absicht.',
          overview: 'Manche Firmen leben von dreißig Accounts. Wenn das auf Sie zutrifft, ist Gießkannen-Outreach das falsche Werkzeug. Wir wählen die Accounts, die zählen, lernen, wie jeder einzelne kauft, und bearbeiten jeden Sitz am Tisch mit Outreach, der für ihn gemacht ist. Das Logo zu landen ist Schritt eins. Danach gehen wir tiefer hinein.',
          includes: [
            'Die benannten Accounts, die den Aufwand wert sind, sauber recherchiert',
            'Outreach über das ganze Buying-Committee, nicht nur einen Kontakt',
            'Ein Standpunkt, geschrieben für genau diesen Account',
            'Ein Rhythmus, um erst zu landen und dann auszubauen',
          ],
          outcome: 'Echte Bewegung in den Accounts, die Sie am meisten gewinnen wollen.',
          idealFor: 'Ihr Wachstum hängt an einer festen Gruppe großer Namen.',
        },
      },
      {
        title: 'Autorität & Thought Leadership',
        slug: 'authority-thought-leadership',
        duration: 'laufend',
        body: 'Wir machen Sie als Experten sichtbar, mit der Präsenz und den Inhalten, die dafür sorgen, dass Tier-1-Kunden Ihren Namen kennen, bevor Sie sich melden.',
        detail: {
          tagline: 'Ein Name, den Ihre Käufer schon kennen, bevor Sie überhaupt schreiben.',
          overview: 'Die meisten Experten sind exzellent und unsichtbar zugleich. Die zweite Hälfte beheben wir. Ich nehme das, was Sie ohnehin wissen, und mache daraus einen klaren Standpunkt, dem Ihre Käufer immer wieder begegnen. Wenn Sie sich dann melden, sind Sie kein Fremder mehr.',
          includes: [
            'Ein Standpunkt aus Ihrer echten Expertise, nicht aus geliehenen Thesen',
            'Eine Content-Maschine, die nicht Ihre ganze Woche frisst',
            'Präsenz dort, wo Ihre Käufer ohnehin hinschauen',
            'Belege, die Antworten bringen, und ab und zu Inbound',
          ],
          outcome: 'Gespräche, die warm beginnen, weil man Ihren Namen schon kennt.',
          idealFor: 'Sie sind richtig gut, und kaum jemand, der zählt, weiß davon.',
        },
      },
      {
        title: 'Revenue Operations',
        slug: 'revenue-operations',
        duration: '6–10 Wochen',
        body: 'Die Daten, das Tooling und die Dashboards, die Pipeline planbar machen und halten.',
        detail: {
          tagline: 'Die Pipeline so aufstellen, dass Sie sie wirklich prognostizieren können.',
          overview: 'Eine volle Pipeline, der Sie nicht trauen, ist nur Rauschen. Wir richten das Tooling und die Dashboards ein, die daraus etwas machen, das Sie lesen und verbessern können. Kein Raten mehr im Montagsmeeting. Sie sehen, was echt ist, und was Wunschdenken.',
          includes: [
            'CRM und Tooling, eingerichtet auf das, was wirklich passiert',
            'Dashboards für Pipeline, Conversion, Forecast und Win-Rate',
            'Saubere Daten, und die kleinen Routinen, die sie sauber halten',
            'Eine Handvoll Kennzahlen, die Ihr Team wirklich nutzt',
          ],
          outcome: 'Pipeline-Zahlen, denen Sie tatsächlich glauben können.',
          idealFor: 'Sie skalieren Outreach, und Ihr Reporting kommt nicht mehr mit.',
        },
      },
      {
        title: 'Fractional Growth Lead',
        slug: 'fractional-growth-lead',
        duration: 'Retainer',
        body: 'Operative Wachstumsführung, eingebettet in Ihr Unternehmen: Strategie und Umsetzung, ohne eine Vollzeitstelle.',
        detail: {
          tagline: 'Eine erfahrene Wachstumsführung an Ihrer Seite, ohne das Vollzeitgehalt.',
          overview: 'Manchmal brauchen Sie jemanden, der Wachstum verantwortet, nicht noch einen Berater mit Meinungen. Genau in diese Rolle gehe ich. Ich übernehme die Roadmap und die Arbeit Woche für Woche, führe Ihren Vertrieb und Ihr Marketing, und bleibe, bis Sie bereit sind, jemanden fest einzustellen. Keine lange Anlaufzeit. Ich starte da, wo Sie stehen.',
          includes: [
            'Direkte Verantwortung für die Wachstums-Roadmap',
            'Strategie und die tatsächliche Wochenarbeit, nicht nur Ratschläge',
            'Führung für Ihren Vertriebs- und Marketingaufwand',
            'Eine ruhige Hand, bis die feste Einstellung wirklich passt',
          ],
          outcome: 'Schwung jetzt, statt monatelang auf die perfekte Einstellung zu warten.',
          idealFor: 'Sie tragen Wachstum selbst und brauchen einen Partner, keinen Report.',
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
        body: 'Sie haben echte Expertise. Sie wollen größere Kunden, als Ihr heutiges Vorgehen zuverlässig erreicht, und Sie wollen am Ende ein eigenes System besitzen statt eine Kampagne zu mieten, die verpufft, sobald das Budget endet. Reden wir.',
        ctaPrimary: 'Arbeitsgespräch buchen',
        ctaSecondary: 'Die Methode im Detail',
      },
      partial: {
        tag: 'Vielversprechend',
        heading: 'Vielversprechend, mit einer Sache, die es zu klären gilt.',
        bodyPre: 'Die Grundform stimmt. Aber ',
        bodyPost: '. Das sollten wir besprechen, bevor wir loslegen. Oder lesen Sie einfach zuerst, wie die Methode funktioniert.',
        cta: 'Die Methode lesen',
      },
      notYet: {
        tag: 'Noch nicht',
        heading: 'Ehrlich gesagt: Ich bin gerade wahrscheinlich nicht Ihr bester Zug.',
        body: 'Die Methode braucht zwei Dinge: echte, sichtbar zu machende Expertise und die Bereitschaft, etwas Dauerhaftes aufzubauen statt eine einzelne Kampagne zu fahren. Wenn Sie noch nicht so weit sind, ist das völlig in Ordnung. Ich sage es lieber jetzt, als Ihr Geld zu nehmen. Ein klareres Positionierungs-Projekt oder ein Volumenkanal, der zu Ihrem Modell passt, bringt Ihnen heute mehr. Kein Problem, kein Anruf nötig.',
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
