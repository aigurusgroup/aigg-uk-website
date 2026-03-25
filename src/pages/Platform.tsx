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
            A multi-region platform combining AI intelligence and acquisition execution. Two engines, one unified system.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>

    <section className="py-24 bg-slate-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-px bg-border">
          <div className="bg-background p-12">
            <div className="w-12 h-12 flex items-center justify-center bg-primary/5 border border-border mb-6">
              <Brain className="text-foreground" size={22} />
            </div>
            <h2 className="font-display font-bold text-2xl tracking-tight mb-4">Intelligence Engine</h2>
            <ul className="space-y-3">
              {["AI systems & models", "Automation frameworks", "Operating models", "Margin expansion strategies", "Data-driven decision layers"].map(item => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-foreground flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background p-12">
            <div className="w-12 h-12 flex items-center justify-center bg-primary/5 border border-border mb-6">
              <Zap className="text-foreground" size={22} />
            </div>
            <h2 className="font-display font-bold text-2xl tracking-tight mb-4">Execution Engine</h2>
            <ul className="space-y-3">
              {["Acquisition identification", "Due diligence systems", "Post-acquisition integration", "Operational scaling", "Performance optimisation"].map(item => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-foreground flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">AIGG Operating System™</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
            Proprietary Infrastructure for Acquisition-Driven Growth
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            The AIGG OS integrates AI, automation, and performance frameworks into a single cohesive layer that sits across every portfolio operation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {[
            { icon: Cpu, title: "AI Integration Layer", desc: "Embedded AI across all operational touchpoints for real-time intelligence." },
            { icon: Settings, title: "Process Automation", desc: "Systematic elimination of manual processes across the value chain." },
            { icon: Layers, title: "Scalable Infrastructure", desc: "Architecture designed to support rapid growth post-acquisition." },
            { icon: BarChart3, title: "Performance Optimisation", desc: "Continuous improvement cycles driven by data and machine learning." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-10">
              <h3 className="font-display font-semibold text-lg mb-2 tracking-tight">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">Execution Platform</p>
          <blockquote className="text-2xl lg:text-3xl font-display font-bold tracking-tight leading-snug mb-6">
            "See the platform in action across Australia."
          </blockquote>
          <p className="text-primary-foreground/50 text-sm mb-10">
            From intelligence to execution — one platform at a time.
          </p>
          <a href="https://aigg.com.au" target="_blank" rel="noopener noreferrer">
            <Button variant="premium-white" size="lg">
              View AU Platform <ArrowRight className="ml-1" size={14} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Platform;
