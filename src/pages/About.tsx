import Layout from "@/components/Layout";
import { team } from "@/data/team";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => (
  <Layout>
    <section className="pt-28 pb-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">About AIGG</p>
          <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">Who We Are</h1>
          <p className="text-muted-foreground leading-relaxed">
            AI Gurus Group is an acquisition and growth platform. We acquire established, profitable
            service businesses and strengthen them with AI, automation, and modern operational systems.
          </p>
        </div>
      </div>
    </section>

    <div className="h-px bg-border" />

    {/* Founder Story & Mission */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-display font-bold tracking-tight mb-6">Founder Story</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>Chris Robinson founded AIGG with a clear thesis: the UK's service economy is filled with exceptional businesses run by founders approaching transition — and these businesses deserve better options than being absorbed by generic roll-ups or left to decline.</p>
              <p>With 17 successful ventures across software, AI, and customer-experience technology, Chris combines deep operational expertise with cutting-edge AI innovation to drive acquisition strategy and platform development.</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold tracking-tight mb-6">Our Mission</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>To acquire promising service businesses and strengthen them through intelligent automation, modern systems, and customer-focused innovation — driving sustainable growth for founders, teams, and investors.</p>
              <p>We are not a typical acquisition firm. We are operators. We take ownership, invest in capability, and build long-term value.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Why AI + Acquisitions */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h2 className="text-2xl font-display font-bold tracking-tight mb-6">Why AI + Acquisitions</h2>
        <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
          <p>Most service businesses operate on systems built 10–15 years ago. Their processes work, but they're manual, slow, and expensive. AI isn't about replacing people — it's about removing friction, automating the mundane, and letting skilled professionals focus on what matters.</p>
          <p>When you combine this operational capability with disciplined acquisition, you create something powerful: a platform that gets better with every business it adds.</p>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-24 bg-background">
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
              <div className="w-11 h-11 rounded-full bg-primary/5 border border-border flex items-center justify-center mb-4">
                <span className="text-xs font-display font-semibold text-muted-foreground">{person.initials}</span>
              </div>
              <h3 className="font-display font-semibold text-base tracking-tight group-hover:text-primary transition-colors">{person.name}</h3>
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground mt-1">{person.market}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {person.expertise.map((tag) => (
                  <span key={tag} className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 border border-border text-muted-foreground">{tag}</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3">{person.capability}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                View Insights <ArrowRight size={10} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Vision */}
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">Long-Term Vision</p>
        <h2 className="text-2xl lg:text-3xl font-display font-bold tracking-tight mb-6 text-primary-foreground">
          Building a multi-vertical, AI-enabled services platform — starting in London, scaling nationally.
        </h2>
        <p className="text-primary-foreground/50 text-sm leading-relaxed mb-10">
          We see a future where the UK's best service businesses are connected through shared technology, shared services, and a shared commitment to excellence.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/markets">
            <Button variant="premium-white" size="lg">
              Core Markets <ArrowRight className="ml-1" size={14} />
            </Button>
          </Link>
          <a href="https://aigg.com.au" target="_blank" rel="noopener noreferrer">
            <Button variant="premium-outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              View Australia <ArrowRight className="ml-1" size={14} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
