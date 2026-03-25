import Layout from "@/components/Layout";
import { Brain, Cpu, Settings, Layers, Zap, BarChart3, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Platform = () => (
  <Layout>
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

    {/* What We Do */}
    <section className="py-24 bg-slate-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">What We Do</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Acquire. Integrate. Scale.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {[
            { icon: Brain, title: "Acquire Businesses", desc: "Identify and acquire high-potential service businesses with strong fundamentals and growth capacity." },
            { icon: Settings, title: "Implement AI & Systems", desc: "Deploy AI-enabled operational systems, automation frameworks, and data-driven decision layers across every acquisition." },
            { icon: Zap, title: "Scale Through Integration", desc: "Execute structured integration playbooks that drive margin expansion and sustainable, repeatable growth." },
          ].map(({ icon: Icon, title, desc }) => (
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

    {/* AIGG Operating Model */}
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">AIGG Operating Model</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
            Disciplined Execution at Every Level
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            A structured operating model integrating buy-and-build strategy, AI systems, and operational discipline into a unified platform that sits across every portfolio company.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {[
            { icon: Cpu, title: "Buy-and-Build Strategy", desc: "Systematic acquisition of complementary service businesses to build market position." },
            { icon: Layers, title: "AI Integration", desc: "Embedded AI across operational and decision-making layers for real-time intelligence." },
            { icon: Settings, title: "Centralised Operations", desc: "Shared infrastructure and processes reducing overhead and operational complexity." },
            { icon: BarChart3, title: "Margin Expansion", desc: "Data-driven strategies for continuous profitability improvement across the portfolio." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-10">
              <h3 className="font-display font-semibold text-lg mb-2 tracking-tight">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Platform in Action */}
    <section className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">Multi-Market Platform</p>
          <blockquote className="text-2xl lg:text-3xl font-display font-bold tracking-tight leading-snug mb-6">
            "See the platform in action across markets."
          </blockquote>
          <p className="text-primary-foreground/50 text-sm mb-10">
            Independent execution, shared frameworks, aligned strategy.
          </p>
          <a href="https://aigg.com.au" target="_blank" rel="noopener noreferrer">
            <Button variant="premium-white" size="lg">
              View Australia Platform <ArrowRight className="ml-1" size={14} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Platform;
