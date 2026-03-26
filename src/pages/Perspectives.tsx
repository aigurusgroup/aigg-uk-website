import Layout from "@/components/Layout";
import { useState } from "react";

type Article = {
  title: string;
  excerpt: string;
  author: string;
  market: "Australia" | "United Kingdom";
  topic: string;
  date: string;
};

const articles: Article[] = [
  { title: "How AI is Reshaping Professional Services Valuation", excerpt: "Examining how artificial intelligence models are fundamentally changing the way professional services firms are valued in acquisition contexts.", author: "Chris Robinson", market: "United Kingdom", topic: "AI Strategy", date: "March 2026" },
  { title: "Operator Insights: First 100 Days Post-Acquisition", excerpt: "A practitioner's view on the critical first 100 days after acquiring a service business — what matters, what doesn't, and where value is created.", author: "Lee Robinson", market: "Australia", topic: "Operations", date: "March 2026" },
  { title: "Building the Post-Acquisition Operating Model", excerpt: "A framework for constructing scalable operating models that deliver margin expansion within 12 months of acquisition completion.", author: "Chris Robinson", market: "United Kingdom", topic: "Acquisitions", date: "February 2026" },
  { title: "Scaling Service Businesses Through Systematic Execution", excerpt: "How systematic, repeatable execution frameworks outperform ad-hoc approaches in scaling acquired service businesses.", author: "Lee Robinson", market: "Australia", topic: "Operations", date: "February 2026" },
  { title: "The Role of Automation in Service Business Margins", excerpt: "How systematic automation of operational processes translates directly into measurable margin improvement across service verticals.", author: "Geouffrey Erasmus", market: "United Kingdom", topic: "AI Strategy", date: "January 2026" },
  { title: "2026 Market Landscape: Services Sector Outlook", excerpt: "Comprehensive analysis of market dynamics, valuation trends, and acquisition opportunities across the professional services landscape.", author: "Chris Robinson", market: "United Kingdom", topic: "Market", date: "January 2026" },
  { title: "Financial Due Diligence in Service Business Acquisitions", excerpt: "Key financial frameworks and red flags to assess when acquiring service businesses in fragmented markets.", author: "Loretto Burke", market: "United Kingdom", topic: "Operations", date: "November 2025" },
  { title: "Operator-Led Scaling: What the Textbooks Miss", excerpt: "Practical insights from decades of hands-on scaling across multi-model service operations.", author: "Michael Bradley", market: "United Kingdom", topic: "Operations", date: "October 2025" },
  { title: "The Acquisition Playbook: Lessons from the Field", excerpt: "Distilling years of acquisition experience into a repeatable playbook that reduces risk and accelerates integration.", author: "Lee Robinson", market: "Australia", topic: "Acquisitions", date: "December 2025" },
  { title: "Cross-Border Acquisition Intelligence", excerpt: "How multi-market intelligence platforms create asymmetric advantages in cross-border acquisition strategies.", author: "Chris Robinson", market: "United Kingdom", topic: "Market", date: "October 2025" },
];

const allMarkets = ["All", "United Kingdom", "Australia"] as const;
const allTopics = ["All", "AI Strategy", "Acquisitions", "Operations", "Market"] as const;
const allAuthors = ["All", "Chris Robinson", "Lee Robinson", "Geouffrey Erasmus", "Loretto Burke", "Michael Bradley"] as const;

const Perspectives = () => {
  const [market, setMarket] = useState<string>("All");
  const [topic, setTopic] = useState<string>("All");
  const [author, setAuthor] = useState<string>("All");

  const filtered = articles.filter((a) => {
    if (market !== "All" && a.market !== market) return false;
    if (topic !== "All" && a.topic !== topic) return false;
    if (author !== "All" && a.author !== author) return false;
    return true;
  });

  return (
    <Layout>
      <section className="pt-28 pb-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Perspectives</p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">Insights From the Platform</h1>
            <p className="text-muted-foreground leading-relaxed">
              Thought leadership and market commentary from operators, strategists, and technologists across the AIGG platform.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-border" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-6 mb-12">
            <FilterGroup label="Market" options={allMarkets} value={market} onChange={setMarket} />
            <FilterGroup label="Topic" options={allTopics} value={topic} onChange={setTopic} />
            <FilterGroup label="Author" options={allAuthors} value={author} onChange={setAuthor} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {filtered.map((article, i) => (
              <div key={i} className="bg-card p-8 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">{article.market}</span>
                  <span className="text-muted-foreground/30">·</span>
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">{article.topic}</span>
                </div>
                <h3 className="font-display font-semibold text-base tracking-tight mb-2">{article.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{article.author}</span>
                  <span className="text-xs text-muted-foreground/50">{article.date}</span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground text-sm py-16">No articles match the selected filters.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

const FilterGroup = ({ label, options, value, onChange }: { label: string; options: readonly string[]; value: string; onChange: (v: string) => void }) => (
  <div>
    <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground block mb-2">{label}</span>
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`text-xs px-3 py-1.5 border transition-colors ${
            value === opt
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border text-muted-foreground hover:border-primary/40"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

export default Perspectives;
