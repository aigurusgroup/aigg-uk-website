import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";
import { Brain, Cpu, Settings, Layers, TrendingUp, Zap, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Platform = () => (
  <Layout>
    <section className="section-padding min-h-[60vh] flex items-center">
      <div className="container-narrow">
        <SectionLabel>Platform Overview</SectionLabel>
        <h1 className="text-4xl md:text-6xl font-display text-foreground leading-[1.1]">
          The AIGG Platform
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed font-body font-light">
          A multi-region platform combining AI intelligence and acquisition execution. Two engines, one unified system.
        </p>
      </div>
    </section>

    <section className="section-padding bg-card pt-0">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          <div className="bg-background p-12">
            <Brain size={28} className="text-accent mb-6" />
            <h2 className="text-2xl font-display text-foreground mb-4">Intelligence Engine</h2>
            <ul className="space-y-3">
              {["AI systems & models", "Automation frameworks", "Operating models", "Margin expansion strategies", "Data-driven decision layers"].map(item => (
                <li key={item} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background p-12">
            <Zap size={28} className="text-accent mb-6" />
            <h2 className="text-2xl font-display text-foreground mb-4">Execution Engine</h2>
            <ul className="space-y-3">
              {["Acquisition identification", "Due diligence systems", "Post-acquisition integration", "Operational scaling", "Performance optimisation"].map(item => (
                <li key={item} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <SectionLabel>AIGG Operating System™</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight mb-6">
          Proprietary infrastructure for acquisition-driven growth.
        </h2>
        <p className="text-muted-foreground font-body max-w-2xl leading-relaxed mb-16">
          The AIGG OS integrates AI, automation, and performance frameworks into a single cohesive layer that sits across every portfolio operation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { icon: Cpu, title: "AI Integration Layer", desc: "Embedded AI across all operational touchpoints for real-time intelligence." },
            { icon: Settings, title: "Process Automation", desc: "Systematic elimination of manual processes across the value chain." },
            { icon: Layers, title: "Scalable Infrastructure", desc: "Architecture designed to support rapid growth post-acquisition." },
            { icon: BarChart3, title: "Performance Optimisation", desc: "Continuous improvement cycles driven by data and machine learning." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-border p-8">
              <Icon size={20} className="text-accent mb-4" />
              <h3 className="text-lg font-display text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-navy text-center">
      <div className="container-narrow">
        <SectionLabel>Execution Platform</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-display text-foreground leading-tight mb-6">
          See the platform in action across Australia.
        </h2>
        <Button variant="hero-outline" size="lg" asChild>
          <a href="https://aigg.com.au" target="_blank" rel="noopener noreferrer">
            View AU Platform <ArrowRight className="ml-2" size={14} />
          </a>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Platform;
