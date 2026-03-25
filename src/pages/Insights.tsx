import Layout from "@/components/Layout";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  "All",
  "AI in Service Businesses",
  "Operating Systems",
  "Market Intelligence",
  "Future of Professional Services",
];

const articles = [
  { title: "How AI is Reshaping Professional Services Valuation", category: "AI in Service Businesses", date: "March 2026", excerpt: "Examining how artificial intelligence models are fundamentally changing the way professional services firms are valued in acquisition contexts." },
  { title: "Building the Post-Acquisition Operating Model", category: "Operating Systems", date: "February 2026", excerpt: "A framework for constructing scalable operating models that deliver margin expansion within 12 months of acquisition completion." },
  { title: "2026 Market Landscape: Services Sector Outlook", category: "Market Intelligence", date: "January 2026", excerpt: "Comprehensive analysis of market dynamics, valuation trends, and acquisition opportunities across the professional services landscape." },
  { title: "The Role of Automation in Service Business Margins", category: "AI in Service Businesses", date: "January 2026", excerpt: "How systematic automation of operational processes translates directly into measurable margin improvement across service verticals." },
  { title: "Platform Thinking in Professional Services", category: "Future of Professional Services", date: "December 2025", excerpt: "Why the future of professional services belongs to platform operators, not individual service providers." },
  { title: "Data-Driven Due Diligence: The AIGG Approach", category: "Operating Systems", date: "November 2025", excerpt: "Leveraging AI-powered analytics to transform traditional due diligence into a predictive, systematic process." },
  { title: "Cross-Border Acquisition Intelligence", category: "Market Intelligence", date: "October 2025", excerpt: "How multi-region intelligence platforms create asymmetric advantages in cross-border acquisition strategies." },
  { title: "The Next Wave of Service Business Consolidation", category: "Future of Professional Services", date: "September 2025", excerpt: "Analysing structural trends driving the next phase of consolidation in fragmented service industries." },
];

const Insights = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? articles : articles.filter(a => a.category === active);

  return (
    <Layout>
      <section className="relative min-h-[40vh] flex items-end pt-16 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3 animate-fade-in">Insights</p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.08] animate-fade-in-up tracking-tight">
            Research & Intelligence
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Analysis, frameworks, and perspectives from the AIGG intelligence platform.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs font-medium tracking-wide uppercase px-4 py-2 border transition-colors ${
                  active === cat
                    ? "border-foreground text-foreground bg-primary/5"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="divide-y divide-border">
            {filtered.map(article => (
              <article key={article.title} className="py-10 group cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground">{article.category}</span>
                    <h2 className="mt-2 text-xl md:text-2xl font-display font-semibold text-foreground group-hover:text-primary transition-colors leading-snug tracking-tight">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 md:pt-6">
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                    <ArrowRight size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
