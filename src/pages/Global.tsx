import Layout from "@/components/Layout";
import { Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Global = () => (
  <Layout>
    <section className="relative min-h-[60vh] flex items-center pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-in">
            Multi-Market Platform
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.08] mb-6 animate-fade-in-up tracking-tight">
            Independent Execution, Shared Frameworks
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            AIGG operates as a multi-market platform with independent execution, shared frameworks, and aligned strategy across regions.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>

    <section className="py-24 bg-slate-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-px bg-border">
          <div className="bg-background p-12 lg:p-16">
            <Globe size={28} className="text-foreground mb-6" />
            <h2 className="font-display font-bold text-2xl tracking-tight mb-2">United Kingdom</h2>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">Core Market</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Acquisition strategy, AI systems development, and operational scaling across UK service markets. Building and scaling businesses through disciplined execution.
            </p>
            <ul className="space-y-2">
              {["Acquisition strategy & execution", "AI systems development", "Operational scaling", "Market intelligence"].map(item => (
                <li key={item} className="text-sm text-muted-foreground flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-foreground flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background p-12 lg:p-16">
            <Globe size={28} className="text-foreground mb-6" />
            <h2 className="font-display font-bold text-2xl tracking-tight mb-2">Australia</h2>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">Core Market</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Independent execution with shared frameworks. Acquiring and scaling service businesses across the Australian market with local expertise.
            </p>
            <ul className="space-y-2 mb-8">
              {["Acquisition execution", "Operational scaling", "Market deployment", "Performance tracking"].map(item => (
                <li key={item} className="text-sm text-muted-foreground flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-foreground flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="https://aigg.com.au" target="_blank" rel="noopener noreferrer">
              <Button variant="premium-outline" size="lg">
                View AU Platform <ArrowRight className="ml-1" size={14} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Global;
