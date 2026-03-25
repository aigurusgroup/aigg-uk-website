import Layout from "@/components/Layout";
import { Target, Settings, Cpu, TrendingUp, ArrowRight, DollarSign, Layers, Globe, ShieldCheck, BarChart3, Bot, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const pillars = [
  { icon: Target, title: "Acquisition Strategy", desc: "Systematic identification, evaluation, and acquisition of high-potential service businesses with strong fundamentals and clear growth capacity across target sectors." },
  { icon: Settings, title: "Operational Integration", desc: "Structured post-acquisition playbooks that align operations, governance, and reporting to platform standards — reducing risk and accelerating value creation from day one." },
  { icon: Cpu, title: "AI-Enabled Systems", desc: "Proprietary AI tools embedded across operational and decision-making layers — from workflow automation and cost reduction to real-time business intelligence." },
  { icon: TrendingUp, title: "Platform Scaling", desc: "Data-driven strategies for continuous margin expansion, cross-portfolio leverage, and sustainable growth that compounds with every acquisition." },
];

const steps = [
  { step: "01", label: "Acquire", desc: "Identify and acquire service businesses with strong fundamentals, recurring revenue, and defensible market positions." },
  { step: "02", label: "Integrate", desc: "Deploy structured integration playbooks aligning operations, systems, governance, and reporting to platform standards." },
  { step: "03", label: "Optimise", desc: "Implement AI-enabled systems, automation, and operational best practices to drive efficiency and margin improvement." },
  { step: "04", label: "Scale", desc: "Execute data-driven scaling strategies, cross-portfolio leverage, and multi-market expansion for compounding growth." },
];

const operatingModel = [
  { icon: DollarSign, title: "Financial Control", desc: "Centralised financial reporting, cash flow management, and performance benchmarking across every portfolio company — delivering transparency and accountability." },
  { icon: Layers, title: "Operational Systems", desc: "Standardised operational frameworks covering HR, compliance, procurement, and service delivery — creating consistency and reducing complexity at scale." },
  { icon: Cpu, title: "Technology Layer", desc: "AI-enabled tools and platform infrastructure deployed across the portfolio — automating workflows, surfacing insights, and creating structural cost advantages." },
];

const valueCreation = [
  { icon: ShieldCheck, title: "Disciplined Acquisition", desc: "Every acquisition follows a rigorous evaluation framework focused on sustainable cash flows, defensible positions, and integration readiness." },
  { icon: BarChart3, title: "Operational Improvement", desc: "Centralised operations, standardised reporting, and best-practice implementation drive measurable performance gains across every portfolio company." },
  { icon: Bot, title: "AI-Driven Efficiency", desc: "Purpose-built AI systems eliminate manual processes, reduce cost bases, and create structural advantages that compound over time." },
  { icon: Network, title: "Platform Leverage", desc: "Shared infrastructure, cross-portfolio learnings, and centralised support functions create value that grows with every acquisition." },
];

const Platform = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[70vh] flex items-center pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-in">
            Platform
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.08] mb-6 animate-fade-in-up tracking-tight">
            The AIGG Platform
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            A structured approach to acquiring, integrating, and scaling service businesses.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>

    {/* Platform Overview */}
    <section className="py-24 bg-slate-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Overview</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-8">
            A System, Not a Series of Deals
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              AIGG is not a collection of individual acquisitions. It is a platform — a structured, repeatable system designed to acquire, integrate, and scale service businesses across multiple markets.
            </p>
            <p>
              Every component of the platform is purpose-built: from how we identify and evaluate opportunities, to how we integrate operations, deploy technology, and create long-term value. The result is a scalable engine that improves with every acquisition.
            </p>
            <p>
              This systems-first approach means that each new business benefits from the infrastructure, expertise, and AI-enabled tools that already exist across the portfolio — creating compounding operational leverage and sustainable competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Four Pillars */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Platform Pillars</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Four Pillars of Execution</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-10">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/5 border border-border mb-6">
                <Icon className="text-foreground" size={22} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 tracking-tight">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How the Platform Works */}
    <section className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/40 mb-3">Process</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">How the Platform Works</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10">
          {steps.map(({ step, label, desc }) => (
            <div key={step} className="bg-navy p-8">
              <span className="text-xs font-medium tracking-[0.2em] text-primary-foreground/30 mb-4 block">{step}</span>
              <h3 className="font-display font-bold text-xl mt-2 mb-3 tracking-tight">{label}</h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <blockquote className="text-xl lg:text-2xl font-display font-semibold tracking-tight text-primary-foreground/80 italic">
            "We don't sell AI — we use AI to build better businesses."
          </blockquote>
        </div>
      </div>
    </section>

    {/* Operating Model */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Operating Model</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Platform Infrastructure</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-px bg-border">
          {operatingModel.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-10">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/5 border border-border mb-6">
                <Icon className="text-foreground" size={22} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 tracking-tight">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Value Creation */}
    <section className="py-24 bg-slate-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Value Creation</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">How Value Is Created</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {valueCreation.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-10">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/5 border border-border mb-6">
                <Icon className="text-foreground" size={22} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 tracking-tight">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Multi-Market Platform */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Multi-Market</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-8">
              Core Markets. Independent Execution.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                AIGG operates across the United Kingdom and Australia as core markets — each with full capability across acquisitions, strategy, AI systems, and execution.
              </p>
              <p>
                Markets operate independently, developing and retaining their own intellectual property while sharing strategic frameworks and platform infrastructure. There is no hierarchy between markets — each contributes to and benefits from the platform equally.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border">
            {[
              { market: "United Kingdom", label: "Core Market" },
              { market: "Australia", label: "Core Market" },
            ].map(({ market, label }) => (
              <div key={market} className="bg-slate-section p-8 text-center">
                <Globe className="mx-auto mb-4 text-muted-foreground" size={28} />
                <p className="font-display font-semibold text-sm tracking-tight">{market}</p>
                <p className="text-xs text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/40 mb-3">Get Involved</p>
        <h2 className="text-2xl lg:text-3xl font-display font-bold tracking-tight mb-4">
          Explore the Platform
        </h2>
        <p className="text-primary-foreground/50 text-sm leading-relaxed mb-10">
          Whether you're considering selling your business or exploring investment opportunities, we'd welcome the conversation.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/sell">
            <Button variant="premium-white" size="lg">
              Sell Your Business <ArrowRight className="ml-1" size={14} />
            </Button>
          </Link>
          <Link to="/investors">
            <Button variant="premium-outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              Investor Information <ArrowRight className="ml-1" size={14} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Platform;
