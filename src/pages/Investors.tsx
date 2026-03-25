import Layout from "@/components/Layout";
import { ArrowRight, BarChart3, Shield, TrendingUp, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const highlights = [
  { icon: BarChart3, title: "Platform Economics", desc: "Multi-market platform model delivering operational leverage and compounding returns across a growing portfolio of service businesses." },
  { icon: Shield, title: "Disciplined Execution", desc: "Structured acquisition playbooks, rigorous due diligence, and systematic post-acquisition integration reduce risk at every stage." },
  { icon: TrendingUp, title: "Margin Expansion", desc: "AI-enabled systems and centralised operations drive continuous margin improvement across every portfolio company." },
  { icon: Globe, title: "Multi-Market Reach", desc: "Independent execution across the United Kingdom and Australia with shared strategic frameworks and intellectual property." },
];

const Investors = () => (
  <Layout>
    <section className="relative min-h-[60vh] flex items-center pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-in">
            Investors
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.08] mb-6 animate-fade-in-up tracking-tight">
            Building Long-Term Value Through AI-Enabled Acquisitions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            AIGG combines disciplined buy-and-build strategy with AI-enabled operational systems to acquire, integrate, and scale service businesses across multiple markets.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>

    <section className="py-24 bg-slate-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Investment Thesis</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Why AIGG</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {highlights.map(({ icon: Icon, title, desc }) => (
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

    <section className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl mx-auto">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">Get Involved</p>
        <h2 className="text-2xl lg:text-3xl font-display font-bold tracking-tight mb-4">Investor Enquiries</h2>
        <p className="text-primary-foreground/50 text-sm leading-relaxed mb-10">
          For institutional or strategic investor enquiries, please get in touch with our team. All conversations are confidential.
        </p>
        <Link to="/sell">
          <Button variant="premium-white" size="lg">
            Contact Us <ArrowRight className="ml-1" size={14} />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Investors;
