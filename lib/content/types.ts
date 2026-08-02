export type Locale = "en" | "tr";

export interface FeatureItem {
  title: string;
  desc: string;
}

export interface AccordionItem {
  title: string;
  content: string;
}

export interface Dictionary {
  site: { title: string; description: string };

  nav: {
    home: string;
    about: string;
    portfolio: string;
    services: string;
    pricing: string;
    contact: string;
    sectors: string;
    careers: string;
    sustainability: string;
    investors: string;
    news: string;
  };

  header: { contactUs: string };

  sectionNav: {
    hero: string;
    about: string;
    partners: string;
    value: string;
    stack: string;
    focus: string;
    services: string;
    cta: string;
  };

  footer: {
    ctaTitle: string;
    ctaSubtitle: string;
    tagline: string;
    mainMenuTitle: string;
    companyTitle: string;
    careers: string;
    faqLabel: string;
    contactUs: string;
    copyright: string;
  };

  homeHero: { badge: string; title: string[]; subtitle: string; cta: string; scrollDown: string; seeWork: string };

  valueProp: {
    eyebrow: string;
    title: string;
    items: FeatureItem[];
  };

  stackShowcase: {
    eyebrow: string;
    title: string[];
    items: FeatureItem[];
  };

  focusAreas: {
    eyebrow: string;
    title: string[];
    cards: { title: string; bullets: string[]; ctaLabel: string; href: string }[];
  };

  ctaGrid: {
    items: { title: string; desc: string; ctaLabel: string; href: string }[];
  };

  aboutUs: {
    description: string;
    items: FeatureItem[];
  };

  logoPartners: { label: string; items: string[] };

  partnerInvite: { title: string; subtitle: string; cta: string };

  latestProject: { label: string; title: string[]; cta: string };

  homeServices: {
    label: string;
    title: string[];
    subtitle: string;
    cta: string;
    items: FeatureItem[];
  };

  aboutHero: { title: string; subtitle: string };

  approach: {
    label: string;
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };

  servicesHero: { title: string; subtitle: string };

  ourServices: {
    label: string;
    title: string[];
    subtitle: string;
    cta: string;
    items: FeatureItem[];
  };

  portfolioHero: { title: string; subtitle: string };

  caseStudy: {
    label: string;
    title: string;
    subtitle: string;
    items: AccordionItem[];
  };

  pricingHero: { title: string; subtitle: string };

  benefits: {
    label: string;
    title: string[];
    subtitle: string;
    items: FeatureItem[];
  };

  pricingSection: {
    label: string;
    title: string;
    subtitle: string;
    standardPlan: string;
    standardDesc: string;
    standardFeatures: string[];
    premiumPlan: string;
    premiumDesc: string;
    premiumFeatures: string[];
    bestValue: string;
    getStarted: string;
  };

  contactHero: { title: string; subtitle: string; email: string };

  form: {
    title: string;
    subtitle: string;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    submit: string;
    termsPrefix: string;
    termsLink: string;
    and: string;
    privacyLink: string;
  };

  faq: {
    label: string;
    title: string;
    subtitle: string;
    items: AccordionItem[];
  };

  sectorsHero: { title: string; subtitle: string };
  sectors: {
    eyebrow: string;
    title: string[];
    items: { title: string; desc: string; detail: string }[];
  };

  careersHero: { title: string; subtitle: string };
  careers: {
    eyebrow: string;
    title: string;
    subtitle: string;
    values: FeatureItem[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaLabel: string;
  };

  sustainabilityHero: { title: string; subtitle: string };
  sustainability: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pillars: FeatureItem[];
  };

  investorsHero: { title: string; subtitle: string };
  investors: {
    eyebrow: string;
    title: string;
    pendingNote: string;
    contactLabel: string;
  };

  newsHero: { title: string; subtitle: string };
  news: {
    eyebrow: string;
    title: string;
    pendingNote: string;
  };
}
