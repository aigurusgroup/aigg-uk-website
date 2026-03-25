import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Check, Target, Settings, Cpu, TrendingUp } from "lucide-react";
import { team } from "@/data/team";

const pillars = [
  { icon: Target, title: "Acquisition Strategy", desc: "Systematic identification and acquisition of high-potential service businesses." },
  { icon: Settings, title: "Operational Integration", desc: "Structured playbooks aligning operations, systems, and governance." },
  { icon: Cpu, title: "AI-Enabled Systems", desc: "Embedded AI across operational and decision-making layers." },
  { icon: TrendingUp, title: "Platform Scaling", desc: "Data-driven strategies for margin expansion and sustainable growth." },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center pt-16">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-in">
            Acquire · Operate · Scale
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.08] mb-6 animate-fade-in-up tracking-tight">
            Building AI-Enabled Businesses Across the United Kingdom
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            We acquire, operate, and scale service businesses using AI, operational discipline, and strategic execution.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/platform">
              <Button variant="premium" size="lg">
                Explore Platform <ArrowRight className="ml-1" size={14} />
              </Button>
            </Link>
            <Link to="/perspectives">
              <Button variant="premium-outline" size="lg">View Perspectives</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>

    {/* Platform Pillars */}
    <section className="py-24 bg-slate-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">The AIGG Platform</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Four Pillars of Execution</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-8">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-border mb-5">
                <Icon className="text-primary" size={18} />
              </div>
              <h3 className="font-display font-semibold text-sm mb-2 tracking-tight">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Core Markets */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Core Markets</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Two Markets. One Platform.</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            Each market develops and retains its own intellectual property and operating expertise.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {[
            { region: "United Kingdom", desc: "Acquisition strategy, AI systems development, and operational scaling across UK service markets." },
            { region: "Australia", desc: "Independent execution with shared frameworks, scaling service businesses across the Australian market." },
          ].map(m => (
            <div key={m.region} className="bg-card p-10 lg:p-14">
              <Globe size={24} className="text-primary mb-6" />
              <h3 className="font-display font-bold text-2xl tracking-tight mb-2">{m.region}</h3>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Core Market</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* AIGG Operating Model */}
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">AIGG Operating Model</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
              Disciplined Execution at Every Level
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We don't sell AI — we use AI to build better businesses. A structured operating model combining buy-and-build strategy with AI-enabled systems across every portfolio company.
            </p>
          </div>
          <div className="space-y-5">
            {[
              { title: "Buy-and-Build Strategy", desc: "Systematic acquisition of complementary service businesses" },
              { title: "AI-Enabled Systems", desc: "Embedded AI across operational and decision-making layers" },
              { title: "Centralised Processes", desc: "Shared infrastructure reducing overhead and complexity" },
              { title: "Margin Expansion", desc: "Data-driven strategies for continuous profitability improvement" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} className="text-primary" />
                </div>
                <div>
                  <span className="text-foreground/90 text-sm font-medium">{item.title}</span>
                  <p className="text-muted-foreground text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Platform Leadership */}
    <section className="py-24 bg-slate-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Platform Leadership</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Leadership Across Markets</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {team.filter(m => m.isLeadership).map((person) => (
            <Link to="/perspectives" key={person.name} className="bg-card p-10 lg:p-14 group">
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-border flex items-center justify-center mb-6">
                <span className="text-sm font-display font-semibold text-primary">{person.initials}</span>
              </div>
              <h3 className="font-display font-bold text-xl tracking-tight">{person.name}</h3>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">{person.market}</p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">{person.role}</p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{person.focus}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Platform Operators & Contributors */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Platform Operators & Contributors</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Operators, Strategists & Technologists</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            AIGG brings together a network of operators, strategists, and technologists who contribute to platform development, execution, and insights across markets.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {team.map((person) => (
            <Link to="/perspectives" key={person.name} className="bg-card p-8 group">
              <div className="w-11 h-11 rounded-full bg-primary/10 border border-border flex items-center justify-center mb-4">
                <span className="text-xs font-display font-semibold text-primary">{person.initials}</span>
              </div>
              <h3 className="font-display font-semibold text-base tracking-tight group-hover:text-primary transition-colors">{person.name}</h3>
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground mt-1">{person.market}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {person.expertise.map((tag) => (
                  <span key={tag} className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 border border-border text-muted-foreground">{tag}</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3">{person.capability}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                View Insights <ArrowRight size={10} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Perspectives Preview */}
    <section className="py-24 bg-slate-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Perspectives</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Research & Intelligence</h2>
          </div>
          <Link to="/perspectives" className="hidden md:flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors">
            View All <ArrowRight size={12} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {[
            { cat: "Acquisition Strategy", title: "Building the Post-Acquisition Operating Model" },
            { cat: "AI in Practice", title: "How AI is Reshaping Professional Services Valuation" },
            { cat: "Market Insights", title: "2026 Market Landscape: Services Sector Outlook" },
          ].map((article) => (
            <Link to="/perspectives" key={article.title} className="bg-card p-10 group">
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground">{article.cat}</span>
              <h3 className="mt-4 text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors leading-snug tracking-tight">
                {article.title}
              </h3>
              <span className="mt-6 inline-flex items-center gap-1 text-xs text-muted-foreground">
                Read <ArrowRight size={10} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Multi-Market Platform</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight leading-snug mb-6">
            Two Markets. One Platform.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-12">
            AIGG operates across multiple markets with aligned strategy and independent execution.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/sell">
              <Button variant="premium" size="lg">
                Submit Opportunity <ArrowRight className="ml-1" size={14} />
              </Button>
            </Link>
            <a href="https://aigg.com.au" target="_blank" rel="noopener noreferrer">
              <Button variant="premium-outline" size="lg">
                View Australia <ArrowRight className="ml-1" size={14} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
