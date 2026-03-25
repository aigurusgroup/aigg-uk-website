import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Cpu, BarChart3, Layers, Zap, Settings, TrendingUp, Globe } from "lucide-react";

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding min-h-[90vh] flex items-center">
      <div className="container-narrow">
        <div className="animate-fade-in">
          <SectionLabel>Global Intelligence Platform</SectionLabel>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display leading-[1.1] text-foreground mt-4">
            AI-Enabled Business Transformation, Built for Scale
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-body font-light">
            We develop the intelligence, systems, and operating frameworks that power modern acquisition platforms.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/platform">Explore Platform <ArrowRight className="ml-2" size={14} /></Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/insights">View Insights</Link>
            </Button>
          </div>
        </div>
        <div className="mt-24 h-px bg-border animate-line-expand" />
      </div>
    </section>

    {/* The AIGG Platform */}
    <section className="section-padding">
      <div className="container-narrow">
        <SectionLabel>The AIGG Platform</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-display text-foreground leading-tight">
          A multi-region platform combining AI intelligence and acquisition execution.
        </h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          <div className="bg-background p-10 md:p-14">
            <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-6">
              <Brain size={20} className="text-accent" />
            </div>
            <h3 className="text-xl font-display text-foreground mb-3">Intelligence Engine</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-body">
              AI systems, strategic frameworks, and operating models designed to identify, analyse, and optimise business opportunities at scale.
            </p>
          </div>
          <div className="bg-background p-10 md:p-14">
            <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-6">
              <Zap size={20} className="text-accent" />
            </div>
            <h3 className="text-xl font-display text-foreground mb-3">Execution Engine</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-body">
              Acquisitions, scaling playbooks, and operational infrastructure that translate intelligence into measurable business outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Intelligence Engine */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <SectionLabel>Intelligence Engine</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight mb-16">
          Systems-level thinking applied to business transformation.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { icon: Cpu, title: "AI Systems", desc: "Purpose-built AI models and decision engines for operational intelligence." },
            { icon: Settings, title: "Automation Frameworks", desc: "End-to-end process automation reducing manual overhead across the value chain." },
            { icon: Layers, title: "Operating Models", desc: "Scalable organisational frameworks designed for acquisition-driven growth." },
            { icon: TrendingUp, title: "Margin Expansion", desc: "Data-driven strategies that systematically improve profitability post-acquisition." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon size={16} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-display text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* AIGG Operating System™ */}
    <section className="section-padding">
      <div className="container-narrow">
        <SectionLabel>AIGG Operating System™</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight mb-6">
          The infrastructure layer that powers every acquisition.
        </h2>
        <p className="text-muted-foreground font-body max-w-2xl leading-relaxed mb-16">
          A proprietary operating system integrating AI, automation, and performance optimisation into a unified platform.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {[
            "AI Integration Layer",
            "Process Automation",
            "Scalable Infrastructure",
            "Performance Optimisation",
          ].map((item) => (
            <div key={item} className="bg-background p-8 text-center">
              <p className="text-sm font-body font-medium text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Platform in Action */}
    <section className="section-padding bg-navy">
      <div className="container-narrow text-center">
        <SectionLabel>Platform in Action</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight mb-6">
          Intelligence applied across operating regions.
        </h2>
        <p className="text-muted-foreground font-body max-w-xl mx-auto leading-relaxed mb-10">
          See how AIGG applies its intelligence layer across operating regions including Australia.
        </p>
        <Button variant="hero-outline" size="lg" asChild>
          <a href="https://aigg.com.au" target="_blank" rel="noopener noreferrer">
            View Execution Platform <ArrowRight className="ml-2" size={14} />
          </a>
        </Button>
      </div>
    </section>

    {/* Insights Preview */}
    <section className="section-padding">
      <div className="container-narrow">
        <div className="flex items-end justify-between mb-16">
          <div>
            <SectionLabel>Insights</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight">
              Research & Intelligence
            </h2>
          </div>
          <Link to="/insights" className="hidden md:flex items-center gap-2 text-xs font-body font-semibold uppercase tracking-widest text-accent hover:text-foreground transition-colors">
            View All <ArrowRight size={12} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {[
            { cat: "AI in Service Businesses", title: "How AI is Reshaping Professional Services Valuation" },
            { cat: "Operating Systems", title: "Building the Post-Acquisition Operating Model" },
            { cat: "Market Intelligence", title: "2026 Market Landscape: Services Sector Outlook" },
          ].map((article) => (
            <Link to="/insights" key={article.title} className="bg-background p-8 group hover:bg-card transition-colors">
              <span className="text-[10px] font-body font-semibold uppercase tracking-widest text-accent">{article.cat}</span>
              <h3 className="mt-4 text-lg font-display text-foreground group-hover:text-accent transition-colors leading-snug">
                {article.title}
              </h3>
              <span className="mt-6 inline-flex items-center gap-1 text-xs text-muted-foreground font-body">
                Read <ArrowRight size={10} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Perspectives Preview */}
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <SectionLabel>Perspectives</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight mb-16">
          Leadership Thinking
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {[
            { name: "Chris Robinson", region: "United Kingdom", focus: "AI systems, frameworks, strategy", initials: "CR" },
            { name: "Lee Robinson", region: "Australia", focus: "Acquisition execution, operator insights", initials: "LR" },
          ].map((person) => (
            <Link to="/perspectives" key={person.name} className="bg-background p-10 md:p-14 group">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-6">
                <span className="text-sm font-body font-semibold text-muted-foreground">{person.initials}</span>
              </div>
              <h3 className="text-xl font-display text-foreground">{person.name}</h3>
              <p className="text-xs font-body font-medium uppercase tracking-widest text-accent mt-1">{person.region}</p>
              <p className="text-sm text-muted-foreground font-body mt-4 leading-relaxed">{person.focus}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Global Presence */}
    <section className="section-padding">
      <div className="container-narrow text-center">
        <SectionLabel>Global Presence</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight mb-6">
          Operating Across Regions
        </h2>
        <p className="text-muted-foreground font-body max-w-xl mx-auto leading-relaxed mb-12">
          AIGG operates across multiple regions including the United Kingdom and Australia, building intelligence infrastructure at scale.
        </p>
        <div className="flex justify-center gap-16">
          <div className="text-center">
            <Globe size={24} className="text-accent mx-auto mb-3" />
            <p className="text-sm font-body font-medium text-foreground">United Kingdom</p>
            <p className="text-xs text-muted-foreground font-body mt-1">Intelligence HQ</p>
          </div>
          <div className="text-center">
            <Globe size={24} className="text-accent mx-auto mb-3" />
            <p className="text-sm font-body font-medium text-foreground">Australia</p>
            <p className="text-xs text-muted-foreground font-body mt-1">Execution Platform</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
