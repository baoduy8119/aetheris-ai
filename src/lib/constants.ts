export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export const HOME_VARIANTS: NavItem[] = [
  {
    title: "01. AI CRM & Sales",
    href: "/home-ai-crm",
    description: "Next-gen predictive CRM with workflow automation",
    badge: "CRM",
  },
  {
    title: "02. AI Marketing Studio",
    href: "/home-ai-marketing",
    description: "Generative copy, images, and social media tools",
    badge: "Marketing",
  },
  {
    title: "03. Developer Tools",
    href: "/home-ai-dev-tools",
    description: "API infrastructure, RAG vector search, and code generation",
    badge: "Dev",
  },
  {
    title: "04. FinTech Intelligence",
    href: "/home-ai-finance",
    description: "Predictive markets, smart wallets, and fraud detection",
    badge: "Finance",
  },
  {
    title: "05. Autonomous Voice AI",
    href: "/home-ai-voice-agent",
    description: "Human-grade conversational voice support agents",
    badge: "Voice",
  },
  {
    title: "06. Cyber Security & Guardrails",
    href: "/home-ai-security",
    description: "Zero-trust LLM firewall and prompt injection defense",
    badge: "Security",
  },
];

export const INNER_PAGES: NavItem[] = [
  { title: "Features Matrix", href: "/features" },
  { title: "Pricing & Plans", href: "/pricing", badge: "20% OFF" },
  { title: "About AETHERIS", href: "/about" },
  { title: "Contact Lab", href: "/contact" },
];

export const FOOTER_LINKS = {
  ecosystem: [
    { title: "AI CRM & Sales", href: "/home-ai-crm" },
    { title: "Marketing Studio", href: "/home-ai-marketing" },
    { title: "Developer Tools", href: "/home-ai-dev-tools" },
    { title: "FinTech Intelligence", href: "/home-ai-finance" },
    { title: "Voice Agent Mesh", href: "/home-ai-voice-agent" },
    { title: "Security & Guardrails", href: "/home-ai-security" },
  ],
  resources: [
    { title: "SDK Documentation", href: "/features" },
    { title: "Pricing Tiers", href: "/pricing" },
    { title: "Contact Engineering", href: "/contact" },
    { title: "Developer Login", href: "/auth/login" },
  ],
  legal: [
    { title: "Zero-Data Retention Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "SOC-2 Type II Compliance", href: "#" },
  ],
};
