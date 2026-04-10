export interface TeamMember {
  name: string;
  market: "United Kingdom" | "Australia";
  role: string;
  focus: string;
  capability: string;
  expertise: string[];
  initials: string;
  isLeadership?: boolean;
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    name: "Chris Robinson",
    market: "United Kingdom",
    role: "Founder & CEO",
    focus: "Technology ventures, AI strategy, business acquisition & integration",
    capability: "Entrepreneur, founder, and investor with a track record of building, scaling, and exiting technology-driven businesses. With 17 successful ventures across software, AI, and customer-experience technology, Chris combines deep operational expertise with cutting-edge AI innovation.",
    expertise: ["Technology Ventures & Exits", "AI & Automation Strategy", "Business Acquisition", "Operational Transformation"],
    initials: "CR",
    isLeadership: true,
    linkedin: "https://www.linkedin.com/in/chris-robinson-979940b/",
  },
  {
    name: "Lee Robinson",
    market: "Australia",
    role: "Founder & CEO",
    focus: "Strategy, acquisitions, operational execution",
    capability: "Lee brings over 20 years of experience across finance, operations, and business acquisitions. His career spans both the UK and Australia, with deep expertise in buy-and-build strategies. Prior to founding AIGG Australia, Lee gained significant exposure to roll-up execution, including experience with National Optical Care.",
    expertise: ["Finance & Operations", "Buy-and-Build Strategy", "M&A Execution", "Portfolio Management"],
    initials: "LR",
    isLeadership: true,
    linkedin: "https://www.linkedin.com/in/lee-robinson-9a769639/",
  },
  {
    name: "Geoffrey Erasmus",
    market: "United Kingdom",
    role: "Founder & CTO",
    focus: "Enterprise software architecture, AI & business intelligence, data engineering",
    capability: "Technology expert with over 20 years of experience in software development, leading technical teams, and delivering enterprise solutions. Deep expertise in business intelligence, data warehousing, and AI-driven automation.",
    expertise: ["Enterprise Software Architecture", "AI & Business Intelligence", "Technical Leadership", "Data Engineering"],
    initials: "GE",
  },
  {
    name: "Loretto Burke",
    market: "United Kingdom",
    role: "Co-Founder & Head of Finance",
    focus: "Financial control, due diligence & deal support, treasury & risk management",
    capability: "Finance executive with 20+ years' experience establishing financial control, governance, and reporting across complex organisations. Responsible for accounting, treasury, and financial governance across the portfolio.",
    expertise: ["Financial Control", "Due Diligence & Deal Support", "Treasury & Risk", "Statutory Reporting"],
    initials: "LB",
  },
  {
    name: "Michael Bradley",
    market: "United Kingdom",
    role: "Co-Founder & Director",
    focus: "Operator-led business scaling, acquisition judgement, multi-model operations",
    capability: "Operator, investor, and business builder with a track record spanning more than 45 years across construction, home-improvement, and property services sectors.",
    expertise: ["Property Services", "Operator-Led Scaling", "Acquisition Judgement", "Multi-Model Operations"],
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
  "Market Insights",
  "AI in Practice",
  "Operator Thinking",
];

export const articles: Article[] = [
  {
    title: "How AI is Reshaping Professional Services Valuation",
    category: "AI in Practice",
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
    category: "Market Insights",
    date: "January 2026",
    excerpt: "Comprehensive analysis of market dynamics, valuation trends, and acquisition opportunities across the professional services landscape.",
    author: "Chris Robinson",
    market: "United Kingdom",
  },
  {
    title: "The Role of Automation in Service Business Margins",
    category: "AI in Practice",
    date: "January 2026",
    excerpt: "How systematic automation of operational processes translates directly into measurable margin improvement across service verticals.",
    author: "Geouffrey Erasmus",
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
    category: "Market Insights",
    date: "October 2025",
    excerpt: "How multi-market intelligence platforms create asymmetric advantages in cross-border acquisition strategies.",
    author: "Chris Robinson",
    market: "United Kingdom",
  },
  {
    title: "Financial Due Diligence in Service Business Acquisitions",
    category: "Acquisition Strategy",
    date: "November 2025",
    excerpt: "Key financial frameworks and red flags to assess when acquiring service businesses in fragmented markets.",
    author: "Loretto Burke",
    market: "United Kingdom",
  },
  {
    title: "Operator-Led Scaling: What the Textbooks Miss",
    category: "Operator Thinking",
    date: "October 2025",
    excerpt: "Practical insights from decades of hands-on scaling across multi-model service operations.",
    author: "Michael Bradley",
    market: "United Kingdom",
  },
];

export const perspectiveArticles = [
  {
    author: "Chris Robinson",
    market: "United Kingdom" as const,
    articles: [
      { title: "Why AI Systems Thinking Will Define the Next Decade of Business", date: "March 2026", topic: "AI in Practice" },
      { title: "Building Intelligence Infrastructure: A Framework", date: "February 2026", topic: "Acquisition Strategy" },
      { title: "The Strategic Case for Platform-Level AI", date: "January 2026", topic: "AI in Practice" },
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
  {
    author: "Geouffrey Erasmus",
    market: "United Kingdom" as const,
    articles: [
      { title: "Engineering AI-First Service Platforms", date: "February 2026", topic: "AI in Practice" },
      { title: "Data Architecture for Acquired Businesses", date: "January 2026", topic: "AI in Practice" },
    ],
  },
  {
    author: "Loretto Burke",
    market: "United Kingdom" as const,
    articles: [
      { title: "Financial Due Diligence in Service Business Acquisitions", date: "November 2025", topic: "Acquisition Strategy" },
      { title: "Post-Acquisition Financial Integration: A Framework", date: "October 2025", topic: "Acquisition Strategy" },
    ],
  },
  {
    author: "Michael Bradley",
    market: "United Kingdom" as const,
    articles: [
      { title: "Operator-Led Scaling: What the Textbooks Miss", date: "October 2025", topic: "Operator Thinking" },
      { title: "Judgement in Acquisitions: Beyond the Spreadsheet", date: "September 2025", topic: "Operator Thinking" },
    ],
  },
];
