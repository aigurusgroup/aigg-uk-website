import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const authors = [
  {
    name: "Chris Robinson",
    region: "United Kingdom",
    role: "Strategy & AI Systems",
    initials: "CR",
    focus: "Strategy, acquisitions, AI systems, market insights",
    articles: [
      { title: "Why AI Systems Thinking Will Define the Next Decade of Business", date: "March 2026" },
      { title: "Building Intelligence Infrastructure: A Framework", date: "February 2026" },
      { title: "The Strategic Case for Platform-Level AI", date: "January 2026" },
    ],
  },
  {
    name: "Lee Robinson",
    region: "Australia",
    role: "Strategy & Execution",
    initials: "LR",
    focus: "Strategy, acquisitions, operational execution",
    articles: [
      { title: "Operator Insights: First 100 Days Post-Acquisition", date: "March 2026" },
      { title: "Scaling Service Businesses Through Systematic Execution", date: "February 2026" },
      { title: "The Acquisition Playbook: Lessons from the Field", date: "December 2025" },
    ],
  },
];

const Perspectives = () => (
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

    <section className="py-24 bg-slate-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {authors.map(author => (
            <div key={author.name} className="bg-background p-10 lg:p-14">
              <div className="w-14 h-14 rounded-full bg-primary/5 border border-border flex items-center justify-center mb-8">
                <span className="text-sm font-display font-semibold text-muted-foreground">{author.initials}</span>
              </div>
              <h2 className="font-display font-bold text-2xl tracking-tight">{author.name}</h2>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">{author.region}</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">{author.role}</p>
              <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
                Focus: {author.focus}
              </p>

              <div className="mt-10 divide-y divide-border">
                {author.articles.map(article => (
                  <div key={article.title} className="py-5 group cursor-pointer">
                    <h3 className="font-display font-semibold text-base text-foreground group-hover:text-primary transition-colors leading-snug tracking-tight">
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
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Perspectives;
