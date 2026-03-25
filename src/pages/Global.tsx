import Layout from "@/components/Layout";
import SectionLabel from "@/components/SectionLabel";
import { Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Global = () => (
  <Layout>
    <section className="section-padding min-h-[60vh] flex items-center">
      <div className="container-narrow">
        <SectionLabel>Global Presence</SectionLabel>
        <h1 className="text-4xl md:text-6xl font-display text-foreground leading-[1.1]">
          Operating Across Regions
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed font-body font-light">
          AIGG operates across multiple regions including the United Kingdom and Australia, building intelligence and execution infrastructure at scale.
        </p>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          <div className="bg-card p-12 md:p-16">
            <Globe size={28} className="text-accent mb-6" />
            <h2 className="text-2xl font-display text-foreground mb-2">United Kingdom</h2>
            <p className="text-xs font-body font-medium uppercase tracking-widest text-accent mb-6">Intelligence HQ</p>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Home of the AIGG Intelligence Engine. AI systems development, strategic frameworks, and operating model design originate from the UK platform.
            </p>
            <ul className="mt-6 space-y-2">
              {["AI systems research", "Framework development", "Strategic intelligence", "Platform architecture"].map(item => (
                <li key={item} className="text-sm text-muted-foreground font-body flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-12 md:p-16">
            <Globe size={28} className="text-accent mb-6" />
            <h2 className="text-2xl font-display text-foreground mb-2">Australia</h2>
            <p className="text-xs font-body font-medium uppercase tracking-widest text-accent mb-6">Execution Platform</p>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              The AIGG Execution Engine in action. Acquisition identification, integration, and operational scaling across the Australian market.
            </p>
            <ul className="mt-6 space-y-2">
              {["Acquisition execution", "Operational scaling", "Market deployment", "Performance tracking"].map(item => (
                <li key={item} className="text-sm text-muted-foreground font-body flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant="hero-outline" size="lg" asChild>
                <a href="https://aigg.com.au" target="_blank" rel="noopener noreferrer">
                  View AU Platform <ArrowRight className="ml-2" size={14} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Global;
