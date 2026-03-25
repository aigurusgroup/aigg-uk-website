import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Cpu, Zap, Settings, TrendingUp, Layers, BarChart3, Globe, Check } from "lucide-react";

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center pt-16">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-in">
            Intelligence · Systems · Platform
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.08] mb-6 animate-fade-in-up tracking-tight">
            AI-Enabled Business Transformation, Built for Scale
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            We develop the intelligence, systems, and operating frameworks that power modern acquisition platforms.
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
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">
            A multi-region platform combining AI intelligence and acquisition execution.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          <div className="bg-background p-10">
            <div className="w-12 h-12 flex items-center justify-center bg-primary/5 border border-border mb-6">
              <Brain className="text-foreground" size={22} />
            </div>
            <h3 className="font-display font-bold text-xl mb-3 tracking-tight">Intelligence Engine</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI systems, strategic frameworks, and operating models designed to identify, analyse, and optimise business opportunities at scale.
            </p>
          </div>
          <div className="bg-background p-10">
            <div className="w-12 h-12 flex items-center justify-center bg-primary/5 border border-border mb-6">
              <Zap className="text-foreground" size={22} />
            </div>
            <h3 className="font-display font-bold text-xl mb-3 tracking-tight">Execution Engine</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Acquisitions, scaling playbooks, and operational infrastructure that translate intelligence into measurable business outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Intelligence Engine */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Intelligence Engine</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Systems-Level Thinking</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {[
            { icon: Cpu, title: "AI Systems", desc: "Purpose-built AI models and decision engines for operational intelligence." },
            { icon: Settings, title: "Automation Frameworks", desc: "End-to-end process automation reducing manual overhead across the value chain." },
            { icon: Layers, title: "Operating Models", desc: "Scalable organisational frameworks designed for acquisition-driven growth." },
            { icon: TrendingUp, title: "Margin Expansion", desc: "Data-driven strategies that systematically improve profitability post-acquisition." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-10">
              <h3 className="font-display font-semibold text-lg mb-2 tracking-tight">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* AIGG Operating System™ */}
    <section className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">AIGG Operating System™</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
              The Infrastructure Layer
            </h2>
            <p className="text-primary-foreground/60 leading-relaxed">
              A proprietary operating system integrating AI, automation, and performance optimisation into a unified platform that sits across every portfolio operation.
            </p>
          </div>

          <div className="space-y-5">
            {[
              "AI Integration Layer",
              "Process Automation",
              "Scalable Infrastructure",
              "Performance Optimisation",
            ].map((item) => (
              <div key={item} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border border-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} className="text-primary-foreground/70" />
                </div>
                <span className="text-primary-foreground/80 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Platform in Action */}
    <section className="py-24 bg-slate-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Platform in Action</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
            Intelligence Applied Across Regions
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-10">
            See how AIGG applies its intelligence layer across operating regions including Australia.
          </p>
          <a href="https://aigg.com.au" target="_blank" rel="noopener noreferrer">
            <Button variant="premium" size="lg">
              View Execution Platform <ArrowRight className="ml-1" size={14} />
            </Button>
          </a>
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
            { name: "Chris Robinson", region: "United Kingdom", focus: "AI systems, frameworks, strategy", initials: "CR" },
            { name: "Lee Robinson", region: "Australia", focus: "Acquisition execution, operator insights", initials: "LR" },
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

    {/* Global Presence */}
    <section className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">Global Presence</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight leading-snug mb-6">
            Operating Across Regions
          </h2>
          <p className="text-primary-foreground/50 text-sm leading-relaxed mb-12">
            AIGG operates across multiple regions including the United Kingdom and Australia, building intelligence infrastructure at scale.
          </p>
          <div className="flex justify-center gap-16">
            <div className="text-center">
              <Globe size={24} className="text-primary-foreground/50 mx-auto mb-3" />
              <p className="text-sm font-medium text-primary-foreground">United Kingdom</p>
              <p className="text-xs text-primary-foreground/40 mt-1">Intelligence HQ</p>
            </div>
            <div className="text-center">
              <Globe size={24} className="text-primary-foreground/50 mx-auto mb-3" />
              <p className="text-sm font-medium text-primary-foreground">Australia</p>
              <p className="text-xs text-primary-foreground/40 mt-1">Execution Platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
