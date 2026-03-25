import Layout from "@/components/Layout";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { articles, insightCategories } from "@/data/team";

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
            {insightCategories.map(cat => (
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
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground">{article.category}</span>
                      <span className="text-[10px] text-muted-foreground/50">·</span>
                      <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">{article.author}</span>
                      <span className="text-[10px] text-muted-foreground/50">·</span>
                      <span className="text-[10px] tracking-widest uppercase text-muted-foreground">{article.market}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground group-hover:text-primary transition-colors leading-snug tracking-tight">
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
