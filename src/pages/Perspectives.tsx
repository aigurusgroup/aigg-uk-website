import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";
import { ArrowRight } from "lucide-react";

const authors = [
  {
    name: "Chris Robinson",
    region: "United Kingdom",
    role: "Intelligence & Systems",
    initials: "CR",
    focus: "AI systems, frameworks, strategy",
    articles: [
      { title: "Why AI Systems Thinking Will Define the Next Decade of Business", date: "March 2026" },
      { title: "Building Intelligence Infrastructure: A Framework", date: "February 2026" },
      { title: "The Strategic Case for Platform-Level AI", date: "January 2026" },
    ],
  },
  {
    name: "Lee Robinson",
    region: "Australia",
    role: "Execution & Operations",
    initials: "LR",
    focus: "Acquisition execution, operator insights",
    articles: [
      { title: "Operator Insights: First 100 Days Post-Acquisition", date: "March 2026" },
      { title: "Scaling Service Businesses Through Systematic Execution", date: "February 2026" },
      { title: "The Acquisition Playbook: Lessons from the Field", date: "December 2025" },
    ],
  },
];

const Perspectives = () => (
  <Layout>
    <section className="section-padding min-h-[40vh] flex items-end">
      <div className="container-narrow">
        <SectionLabel>Perspectives</SectionLabel>
        <h1 className="text-4xl md:text-6xl font-display text-foreground leading-[1.1]">
          Leadership Thinking
        </h1>
        <p className="mt-6 text-lg text-muted-foreground font-body font-light max-w-xl">
          Strategic perspectives from across the AIGG platform.
        </p>
      </div>
    </section>

    <section className="section-padding pt-12">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {authors.map(author => (
            <div key={author.name} className="bg-background p-10 md:p-14">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-8">
                <span className="text-lg font-body font-semibold text-muted-foreground">{author.initials}</span>
              </div>
              <h2 className="text-2xl font-display text-foreground">{author.name}</h2>
              <p className="text-xs font-body font-medium uppercase tracking-widest text-accent mt-1">{author.region}</p>
              <p className="text-sm text-muted-foreground font-body mt-1">{author.role}</p>
              <p className="text-sm text-muted-foreground font-body mt-6 leading-relaxed">
                Focus: {author.focus}
              </p>

              <div className="mt-10 space-y-0 divide-y divide-border">
                {author.articles.map(article => (
                  <div key={article.title} className="py-5 group cursor-pointer">
                    <h3 className="text-base font-display text-foreground group-hover:text-accent transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground font-body">{article.date}</span>
                      <ArrowRight size={12} className="text-muted-foreground group-hover:text-accent transition-colors" />
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
