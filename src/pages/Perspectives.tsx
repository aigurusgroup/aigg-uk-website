import Layout from "@/components/Layout";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { team, perspectiveArticles } from "@/data/team";

const markets = ["All", "United Kingdom", "Australia"];
const topics = ["All", "AI in Service Businesses", "Acquisition Strategy", "Operator Thinking", "Market Commentary"];

const Perspectives = () => {
  const [marketFilter, setMarketFilter] = useState("All");
  const [topicFilter, setTopicFilter] = useState("All");
  const [authorFilter, setAuthorFilter] = useState("All");

  const authorNames = ["All", ...team.map(t => t.name)];

  const filtered = perspectiveArticles
    .filter(pa => marketFilter === "All" || pa.market === marketFilter)
    .filter(pa => authorFilter === "All" || pa.author === authorFilter)
    .map(pa => ({
      ...pa,
      articles: pa.articles.filter(a => topicFilter === "All" || a.topic === topicFilter),
    }))
    .filter(pa => pa.articles.length > 0);

  return (
    <Layout>
      <section className="relative min-h-[40vh] flex items-end pt-16 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3 animate-fade-in">Perspectives</p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.08] animate-fade-in-up tracking-tight">
            Leadership Thinking
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Strategic perspectives from across the AIGG platform.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      {/* Filters */}
      <section className="py-10 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 space-y-4">
          <div>
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground mr-4">Market</span>
            {markets.map(m => (
              <button
                key={m}
                onClick={() => setMarketFilter(m)}
                className={`text-xs font-medium tracking-wide uppercase px-3 py-1.5 border mr-2 transition-colors ${
                  marketFilter === m
                    ? "border-foreground text-foreground bg-primary/5"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
          <div>
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground mr-4">Topic</span>
            {topics.map(t => (
              <button
                key={t}
                onClick={() => setTopicFilter(t)}
                className={`text-xs font-medium tracking-wide uppercase px-3 py-1.5 border mr-2 transition-colors ${
                  topicFilter === t
                    ? "border-foreground text-foreground bg-primary/5"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div>
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground mr-4">Author</span>
            {authorNames.map(a => (
              <button
                key={a}
                onClick={() => setAuthorFilter(a)}
                className={`text-xs font-medium tracking-wide uppercase px-3 py-1.5 border mr-2 transition-colors ${
                  authorFilter === a
                    ? "border-foreground text-foreground bg-primary/5"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-section">
        <div className="container mx-auto px-4 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-sm">No perspectives match the current filters.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-px bg-border">
              {filtered.map(pa => {
                const member = team.find(t => t.name === pa.author);
                return (
                  <div key={pa.author} className="bg-background p-10 lg:p-14">
                    <div className="w-14 h-14 rounded-full bg-primary/5 border border-border flex items-center justify-center mb-8">
                      <span className="text-sm font-display font-semibold text-muted-foreground">{member?.initials}</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl tracking-tight">{pa.author}</h2>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">{pa.market}</p>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground">{member?.role}</p>
                    <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
                      Focus: {member?.focus}
                    </p>
                    <div className="mt-10 divide-y divide-border">
                      {pa.articles.map(article => (
                        <div key={article.title} className="py-5 group cursor-pointer">
                          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">{article.topic}</span>
                          <h3 className="font-display font-semibold text-base text-foreground group-hover:text-primary transition-colors leading-snug tracking-tight mt-1">
                            {article.title}
                          </h3>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-muted-foreground">{article.date}</span>
                            <ArrowRight size={12} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Perspectives;
