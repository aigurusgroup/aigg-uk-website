import Layout from "@/components/Layout";
import { Target, Settings, Cpu, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const pillars = [
  { icon: Target, title: "Acquisition Strategy", desc: "Systematic identification, evaluation, and acquisition of high-potential service businesses with strong fundamentals and growth capacity." },
  { icon: Settings, title: "Operational Integration", desc: "Structured integration playbooks that align acquired businesses to platform standards, reducing complexity and accelerating value creation." },
  { icon: Cpu, title: "AI-Enabled Systems", desc: "Embedded artificial intelligence across operational and decision-making layers — from automation to real-time business intelligence." },
  { icon: TrendingUp, title: "Platform Scaling", desc: "Data-driven strategies for continuous margin expansion, cross-portfolio leverage, and sustainable, repeatable growth." },
];

const steps = [
  { step: "01", label: "Acquire", desc: "Identify and acquire service businesses with strong fundamentals across target sectors." },
  { step: "02", label: "Integrate", desc: "Deploy structured integration playbooks aligning operations, systems, and governance." },
  { step: "03", label: "Optimise", desc: "Implement AI-enabled systems and automation to drive operational efficiency and intelligence." },
  { step: "04", label: "Scale", desc: "Execute data-driven scaling strategies for margin expansion and sustainable growth." },
];

const Platform = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-center pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-in">
            Platform Overview
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.08] mb-6 animate-fade-in-up tracking-tight">
            The AIGG Platform
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            A multi-market platform combining acquisition strategy, operational execution, and AI-enabled systems to build and scale service businesses.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>

    {/* 4 Pillars */}
    <section className="py-24 bg-slate-section">
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
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Process</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">How the Platform Works</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map(({ step, label, desc }) => (
            <div key={step} className="bg-background p-10">
              <span className="text-xs font-medium tracking-widest text-muted-foreground">{step}</span>
              <h3 className="font-display font-bold text-xl mt-4 mb-2 tracking-tight">{label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Key Statement */}
    <section className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl lg:text-3xl font-display font-bold tracking-tight leading-snug mb-8">
            "We don't sell AI — we use AI to build better businesses."
          </blockquote>
          <p className="text-primary-foreground/50 text-sm mb-10 max-w-lg mx-auto leading-relaxed">
            Independent execution, shared frameworks, aligned strategy across every market.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/sell">
              <Button variant="premium-white" size="lg">
                Submit Opportunity <ArrowRight className="ml-1" size={14} />
              </Button>
            </Link>
            <a href="https://aigg.com.au" target="_blank" rel="noopener noreferrer">
              <Button variant="premium-outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                View Australia Platform <ArrowRight className="ml-1" size={14} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Platform;
