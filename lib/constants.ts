export const features = [
  {
    name: "Kanban Pipeline",
    description:
      "Drag-and-drop deals through New, Warm, Reach Out, and Closed stages. Never lose track of a lead again.",
    icon: "LayoutDashboard" as const,
    color: "blue" as const,
  },
  {
    name: "AI Deal Analysis",
    description:
      "Instant AI-powered deal grades, ARV estimates, repair breakdowns, and risk assessments on every property.",
    icon: "Brain" as const,
    color: "purple" as const,
  },
  {
    name: "Built-in VoIP Dialer",
    description:
      "Call sellers directly from your browser. Auto-log calls, take notes, and track follow-ups in one place.",
    icon: "Phone" as const,
    color: "orange" as const,
  },
  {
    name: "Skip Tracing",
    description:
      "Find property owner phone numbers and emails in seconds. One-click lookup integrated into your workflow.",
    icon: "UserSearch" as const,
    color: "green" as const,
  },
  {
    name: "SMS & Email Campaigns",
    description:
      "Send targeted messages to your leads with ready-made templates. Automate follow-ups and track opens.",
    icon: "MessageSquare" as const,
    color: "blue" as const,
  },
  {
    name: "Rental Comps Map",
    description:
      "Pull comparable sales and rental data on an interactive map. Make data-driven offers every time.",
    icon: "MapPin" as const,
    color: "purple" as const,
  },
];

export const painPoints = [
  { tool: "Skip Tracer", icon: "Search" as const, cost: "$50/mo" },
  { tool: "Power Dialer", icon: "Phone" as const, cost: "$150/mo" },
  { tool: "Spreadsheet CRM", icon: "Table" as const, cost: "Free but messy" },
  { tool: "Deal Analyzer", icon: "Calculator" as const, cost: "$30/mo" },
  { tool: "Comps Tool", icon: "Map" as const, cost: "$100/mo" },
];

export const competitorPains = [
  "Locked into monthly contracts",
  "Pay for features you never use",
  "Per-seat pricing adds up fast",
  "Hidden fees for skip traces & calls",
  "Still charging when you're between deals",
];

export const nextgenBenefits = [
  { text: "No monthly subscription — ever", bold: true },
  { text: "$0.05 per skip trace", bold: false },
  { text: "$0.03 per call minute", bold: false },
  { text: "$0.01 per AI deal analysis", bold: false },
  { text: "Free Kanban pipeline & CRM", bold: false },
  { text: "Free SMS & email templates", bold: false },
];

export const earlyAccessPerks = [
  {
    title: "Founding Member Pricing",
    description: "Lock in the lowest rates forever. Prices will go up at launch.",
    icon: "Crown" as const,
  },
  {
    title: "Priority Feature Requests",
    description: "Your feature requests get built first. Shape the product you want.",
    icon: "Zap" as const,
  },
  {
    title: "Direct Dev Access",
    description: "Chat directly with the dev team. Get support in minutes, not days.",
    icon: "MessageCircle" as const,
  },
];

export const techBadges = [
  "Next.js",
  "React",
  "AI-Powered",
  "Real-time",
  "Bank-level Security",
];

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Deal Analyzer", href: "#analyzer" },
  { label: "Pricing", href: "#pricing" },
];
