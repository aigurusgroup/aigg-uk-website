import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { team } from "@/data/team";

const About = () => (
  <Layout>
    <section className="relative min-h-[60vh] flex items-center pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-in">
            About AIGG
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.08] mb-6 animate-fade-in-up tracking-tight">
            AI Gurus Group
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            A multi-market platform that acquires, operates, and scales service businesses using AI-enabled systems, operational discipline, and strategic execution.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>

    <section className="py-24 bg-slate-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Our Approach</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">Platform-Led Value Creation</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AIGG operates as a multi-market platform where each region functions as a core market with independent capability and localised intellectual property. We combine buy-and-build strategy with AI-enabled systems to create lasting value across every portfolio company.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We don't sell AI — we use AI to build better businesses. Our platform integrates acquisition strategy, operational integration, AI systems, and scaling frameworks into a unified model that compounds across markets.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { label: "Founded", value: "Multi-market platform" },
              { label: "Markets", value: "United Kingdom · Australia" },
              { label: "Focus", value: "Service business acquisition & scaling" },
              { label: "Approach", value: "AI-enabled operations & integration" },
            ].map(item => (
              <div key={item.label} className="border-b border-border pb-4">
                <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground">{item.label}</span>
                <p className="text-sm font-medium mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Platform Operators & Contributors</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Operators, Strategists & Technologists</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
            AIGG brings together a network of operators, strategists, and technologists who contribute to platform development, execution, and insights across markets.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {team.map((person) => (
            <Link to="/perspectives" key={person.name} className="bg-card p-8 group">
              <div className="w-11 h-11 rounded-full bg-primary/10 border border-border flex items-center justify-center mb-4">
                <span className="text-xs font-display font-semibold text-primary">{person.initials}</span>
              </div>
              <h3 className="font-display font-semibold text-base tracking-tight group-hover:text-primary transition-colors">{person.name}</h3>
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground mt-1">{person.market}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {person.expertise.map((tag) => (
                  <span key={tag} className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 border border-border text-muted-foreground">{tag}</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3">{person.capability}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                View Insights <ArrowRight size={10} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-navy">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-display font-bold tracking-tight mb-4">Two Markets. One Platform.</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-10">
          AIGG operates across multiple markets with aligned strategy and independent execution.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/markets">
            <Button variant="premium" size="lg">
              Core Markets <ArrowRight className="ml-1" size={14} />
            </Button>
          </Link>
          <a href="https://aigg.com.au" target="_blank" rel="noopener noreferrer">
            <Button variant="premium-outline" size="lg">
              View Australia <ArrowRight className="ml-1" size={14} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
