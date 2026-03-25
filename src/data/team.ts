export interface TeamMember {
  name: string;
  market: "United Kingdom" | "Australia";
  role: string;
  focus: string;
  capability: string;
  expertise: string[];
  initials: string;
  isLeadership?: boolean;
}

export const team: TeamMember[] = [
  {
    name: "Chris Robinson",
    market: "United Kingdom",
    role: "Strategy & AI Systems",
    focus: "Technology ventures, AI strategy, business acquisition & integration",
    capability: "Entrepreneur and investor with 17 successful ventures across software, AI, and customer-experience technology. Combines deep operational expertise with cutting-edge AI innovation to drive acquisition strategy and platform development.",
    expertise: ["AI", "Strategy", "Acquisitions"],
    initials: "CR",
    isLeadership: true,
  },
  {
    name: "Lee Robinson",
    market: "Australia",
    role: "Strategy & Execution",
    focus: "Strategy, acquisitions, operational execution",
    capability: "Operator and strategist focused on identifying, acquiring, and scaling service businesses across the Australian market. Drives independent execution with shared strategic frameworks.",
    expertise: ["Strategy", "Operations", "Acquisitions"],
    initials: "LR",
    isLeadership: true,
  },
  {
    name: "Geouffrey Erasmus",
    market: "United Kingdom",
    role: "Technology & Architecture",
    focus: "Enterprise software architecture, AI & business intelligence, data engineering",
    capability: "Technology expert with over 20 years in software development, enterprise solutions, and technical team leadership. Drives product innovation across AI-driven automation, data engineering, and business intelligence systems.",
    expertise: ["AI", "Technology", "Data"],
    initials: "GE",
  },
  {
    name: "Loretto Burke",
    market: "United Kingdom",
    role: "Finance & Governance",
    focus: "Financial control, due diligence & deal support, treasury & risk management",
    capability: "Finance executive with 20+ years establishing financial control, governance, and reporting across complex organisations. Leads opportunity assessment, deal execution, and post-acquisition financial integration.",
    expertise: ["Finance", "Due Diligence", "Governance"],
    initials: "LB",
  },
  {
    name: "Michael Bradley",
    market: "United Kingdom",
    role: "Operations & Investment",
    focus: "Operator-led business scaling, acquisition judgement, multi-model operations",
    capability: "Operator and investor with 45+ years across construction, property services, and multi-model business operations. Brings deep judgement on acquisitions and hands-on scaling of portfolio companies.",
    expertise: ["Operations", "Investment", "Scaling"],
    initials: "MB",
  },
];
export interface Article {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  author: string;
  market: "United Kingdom" | "Australia";
}

export const insightCategories = [
  "All",
  "Acquisition Strategy",
  "AI in Service Businesses",
  "Market Commentary",
  "Operator Thinking",
];

export const articles: Article[] = [
  {
    title: "How AI is Reshaping Professional Services Valuation",
    category: "AI in Service Businesses",
    date: "March 2026",
    excerpt: "Examining how artificial intelligence models are fundamentally changing the way professional services firms are valued in acquisition contexts.",
    author: "Chris Robinson",
    market: "United Kingdom",
  },
  {
    title: "Operator Insights: First 100 Days Post-Acquisition",
    category: "Operator Thinking",
    date: "March 2026",
    excerpt: "A practitioner's view on the critical first 100 days after acquiring a service business — what matters, what doesn't, and where value is created.",
    author: "Lee Robinson",
    market: "Australia",
  },
  {
    title: "Building the Post-Acquisition Operating Model",
    category: "Acquisition Strategy",
    date: "February 2026",
    excerpt: "A framework for constructing scalable operating models that deliver margin expansion within 12 months of acquisition completion.",
    author: "Chris Robinson",
    market: "United Kingdom",
  },
  {
    title: "Scaling Service Businesses Through Systematic Execution",
    category: "Operator Thinking",
    date: "February 2026",
    excerpt: "How systematic, repeatable execution frameworks outperform ad-hoc approaches in scaling acquired service businesses.",
    author: "Lee Robinson",
    market: "Australia",
  },
  {
    title: "2026 Market Landscape: Services Sector Outlook",
    category: "Market Commentary",
    date: "January 2026",
    excerpt: "Comprehensive analysis of market dynamics, valuation trends, and acquisition opportunities across the professional services landscape.",
    author: "Chris Robinson",
    market: "United Kingdom",
  },
  {
    title: "The Role of Automation in Service Business Margins",
    category: "AI in Service Businesses",
    date: "January 2026",
    excerpt: "How systematic automation of operational processes translates directly into measurable margin improvement across service verticals.",
    author: "Chris Robinson",
    market: "United Kingdom",
  },
  {
    title: "The Acquisition Playbook: Lessons from the Field",
    category: "Acquisition Strategy",
    date: "December 2025",
    excerpt: "Distilling years of acquisition experience into a repeatable playbook that reduces risk and accelerates integration.",
    author: "Lee Robinson",
    market: "Australia",
  },
  {
    title: "Cross-Border Acquisition Intelligence",
    category: "Market Commentary",
    date: "October 2025",
    excerpt: "How multi-market intelligence platforms create asymmetric advantages in cross-border acquisition strategies.",
    author: "Chris Robinson",
    market: "United Kingdom",
  },
];

export const perspectiveArticles = [
  {
    author: "Chris Robinson",
    market: "United Kingdom" as const,
    articles: [
      { title: "Why AI Systems Thinking Will Define the Next Decade of Business", date: "March 2026", topic: "AI in Service Businesses" },
      { title: "Building Intelligence Infrastructure: A Framework", date: "February 2026", topic: "Acquisition Strategy" },
      { title: "The Strategic Case for Platform-Level AI", date: "January 2026", topic: "AI in Service Businesses" },
    ],
  },
  {
    author: "Lee Robinson",
    market: "Australia" as const,
    articles: [
      { title: "Operator Insights: First 100 Days Post-Acquisition", date: "March 2026", topic: "Operator Thinking" },
      { title: "Scaling Service Businesses Through Systematic Execution", date: "February 2026", topic: "Operator Thinking" },
      { title: "The Acquisition Playbook: Lessons from the Field", date: "December 2025", topic: "Acquisition Strategy" },
    ],
  },
];
