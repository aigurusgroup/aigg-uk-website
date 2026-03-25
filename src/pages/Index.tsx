import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Check, Cpu, Settings, Layers, BarChart3 } from "lucide-react";

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
            Building AI-Enabled Businesses at Scale
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
            <Link to="/insights">
              <Button variant="premium-outline" size="lg">View Insights</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>

    {/* The AIGG Platform */}
    <section className="py-24 bg-slate-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">The AIGG Platform</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight max-w-3xl">
            A multi-market platform combining acquisition strategy, operational execution, and AI-enabled systems.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          <div className="bg-background p-10">
            <Globe size={24} className="text-foreground mb-6" />
            <h3 className="font-display font-bold text-xl mb-2 tracking-tight">United Kingdom</h3>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Core Market</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Acquisition strategy, AI systems development, and operational scaling across UK service markets.
            </p>
          </div>
          <div className="bg-background p-10">
            <Globe size={24} className="text-foreground mb-6" />
            <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Australia</h3>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Core Market</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Independent execution with shared frameworks, scaling service businesses across the Australian market.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* What We Do */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">What We Do</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Acquire. Integrate. Scale.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {[
            { step: "01", title: "Acquire Businesses", desc: "Identify and acquire high-potential service businesses with strong fundamentals and growth capacity." },
            { step: "02", title: "Implement AI & Systems", desc: "Deploy AI-enabled operational systems, automation frameworks, and data-driven decision layers." },
            { step: "03", title: "Scale Through Integration", desc: "Execute structured integration playbooks that drive margin expansion and sustainable growth." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-background p-10">
              <span className="text-xs font-medium tracking-widest text-muted-foreground">{step}</span>
              <h3 className="font-display font-semibold text-lg mt-4 mb-2 tracking-tight">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* UK Market Focus */}
    <section className="py-24 bg-slate-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">UK Market Focus</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
              Identifying, Acquiring, and Scaling Service Businesses
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Within the UK, AIGG focuses on identifying, acquiring, and scaling service businesses using its platform model. We combine local market expertise with shared AI frameworks and operational discipline.
            </p>
            <Link to="/platform">
              <Button variant="premium-outline" size="lg">
                Learn More <ArrowRight className="ml-1" size={14} />
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {[
              "Service business acquisition pipeline",
              "AI-enabled operational transformation",
              "Structured integration playbooks",
              "Data-driven margin expansion",
            ].map((item) => (
              <div key={item} className="flex items-start gap-4 p-5 border border-border bg-background">
                <span className="w-1 h-1 rounded-full bg-foreground flex-shrink-0 mt-2" />
                <span className="text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* AIGG Operating Model */}
    <section className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">AIGG Operating Model</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
              Disciplined Execution at Every Level
            </h2>
            <p className="text-primary-foreground/60 leading-relaxed">
              A structured operating model that combines buy-and-build strategy with AI integration, centralised operations, and systematic margin expansion across every portfolio company.
            </p>
          </div>

          <div className="space-y-5">
            {[
              { title: "Buy-and-Build Strategy", desc: "Systematic acquisition of complementary service businesses" },
              { title: "AI Integration", desc: "Embedded AI across operational and decision-making layers" },
              { title: "Centralised Operations", desc: "Shared infrastructure reducing overhead and complexity" },
              { title: "Margin Expansion", desc: "Data-driven strategies for continuous profitability improvement" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border border-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} className="text-primary-foreground/70" />
                </div>
                <div>
                  <span className="text-primary-foreground/90 text-sm font-medium">{item.title}</span>
                  <p className="text-primary-foreground/50 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Insights */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Insights</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Research & Intelligence</h2>
          </div>
          <Link to="/insights" className="hidden md:flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors">
            View All <ArrowRight size={12} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {[
            { cat: "AI in Service Businesses", title: "How AI is Reshaping Professional Services Valuation" },
            { cat: "Operating Systems", title: "Building the Post-Acquisition Operating Model" },
            { cat: "Market Intelligence", title: "2026 Market Landscape: Services Sector Outlook" },
          ].map((article) => (
            <Link to="/insights" key={article.title} className="bg-background p-10 group">
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

    {/* Perspectives */}
    <section className="py-24 bg-slate-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Perspectives</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Leadership Thinking</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {[
            { name: "Chris Robinson", region: "United Kingdom", focus: "Strategy, acquisitions, AI systems, market insights", initials: "CR" },
            { name: "Lee Robinson", region: "Australia", focus: "Strategy, acquisitions, operational execution", initials: "LR" },
          ].map((person) => (
            <Link to="/perspectives" key={person.name} className="bg-background p-10 group">
              <div className="w-14 h-14 rounded-full bg-primary/5 border border-border flex items-center justify-center mb-6">
                <span className="text-sm font-display font-semibold text-muted-foreground">{person.initials}</span>
              </div>
              <h3 className="font-display font-bold text-xl tracking-tight">{person.name}</h3>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">{person.region}</p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{person.focus}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Platform in Action */}
    <section className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">Multi-Market Platform</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight leading-snug mb-6">
            Independent Execution, Shared Frameworks
          </h2>
          <p className="text-primary-foreground/50 text-sm leading-relaxed mb-12">
            AIGG operates across multiple markets with independent execution, shared frameworks, and aligned strategy.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/global">
              <Button variant="premium-white" size="lg">
                Global Presence <ArrowRight className="ml-1" size={14} />
              </Button>
            </Link>
            <a href="https://aigg.com.au" target="_blank" rel="noopener noreferrer">
              <Button variant="premium-outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
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
