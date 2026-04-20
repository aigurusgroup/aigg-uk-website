import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Layers, Cpu, TrendingUp, Check, Linkedin } from "lucide-react";
import { useState } from "react";
import { team } from "@/data/team";
import heroBg from "@/assets/hero-bg.png";
import TrackRecord from "@/components/TrackRecord";

const pillars = [
  { icon: Building2, title: "Acquisition Strategy", desc: "We acquire anchor 'platform' businesses in target verticals — strong, well-run companies that become the foundation for disciplined buy-and-build growth." },
  { icon: Layers, title: "Operational Integration", desc: "Centralised back-office functions sit at group level. Portfolio companies retain their brand, team, and customers while benefiting from shared infrastructure." },
  { icon: Cpu, title: "AI-Enabled Systems", desc: "Every portfolio company receives a structured AI implementation — process automation, predictive analytics, and intelligent workflows deployed within 90 days." },
  { icon: TrendingUp, title: "Platform Scaling", desc: "Each market entry follows the same disciplined playbook: anchor acquisition, bolt-ons, AI implementation, and scale across target verticals." },
];

const steps = [
  { number: "01", title: "Acquire", description: "Identify and acquire high-quality service businesses with strong fundamentals, loyal customers, and proven cash flows." },
  { number: "02", title: "Integrate", description: "Centralise back-office operations, align governance, and embed the business into the AIGG platform infrastructure." },
  { number: "03", title: "Optimise", description: "Deploy AI systems and modern operational tools to drive efficiency, reduce cost, and improve customer outcomes." },
  { number: "04", title: "Scale", description: "Expand through bolt-on acquisitions, cross-selling, and platform leverage to compound value across the portfolio." },
];

const whatWeDo = [
  { icon: Building2, title: "Acquire", description: "We acquire high-quality service businesses with strong fundamentals, loyal customers, and proven cash flows." },
  { icon: Cpu, title: "Optimise", description: "We deploy AI and modern operational systems to drive efficiency, reduce cost, and improve customer outcomes." },
  { icon: TrendingUp, title: "Scale", description: "We scale through platform integration, centralised operations, and disciplined buy-and-build execution." },
];

const criteria = [
  "Recurring or repeat revenue",
  "Established customer base",
  "Operational inefficiencies",
  "Strong local presence",
];

const approaches = [
  "Buy-and-build strategy across target verticals",
  "AI-enabled systems for operational uplift",
  "Centralised operations and shared services",
  "Performance optimisation across the portfolio",
];

const edges = [
  "AI-led operational uplift across every acquisition",
  "Centralised platform model for shared services and scale",
  "Disciplined buy-and-build execution capability",
  "Deep finance and M&A expertise across UK and Australia",
];

type Article = {
  title: string;
  excerpt: string;
  author: string;
  market: "Australia" | "United Kingdom";
  topic: string;
  date: string;
};

const articles: Article[] = [
  { title: "How AI is Reshaping Professional Services Valuation", excerpt: "How artificial intelligence is reshaping the economics of buy-and-build strategies in professional services.", author: "Chris Robinson", market: "United Kingdom", topic: "AI Strategy", date: "March 2026" },
  { title: "Building the Post-Acquisition Operating Model", excerpt: "Lessons from executing a disciplined acquisition strategy across fragmented service sectors.", author: "Chris Robinson", market: "United Kingdom", topic: "Acquisitions", date: "February 2026" },
  { title: "Operator Insights: First 100 Days Post-Acquisition", excerpt: "How centralised operations and shared services create compounding value across a portfolio.", author: "Lee Robinson", market: "Australia", topic: "Operations", date: "March 2026" },
  { title: "The Role of Automation in Service Business Margins", excerpt: "Integrating AI tools into the acquisition assessment process for faster, deeper insight.", author: "Geouffrey Erasmus", market: "United Kingdom", topic: "AI Strategy", date: "January 2026" },
  { title: "Financial Due Diligence in Service Business Acquisitions", excerpt: "Building scalable financial controls as the platform grows across markets and verticals.", author: "Loretto Burke", market: "United Kingdom", topic: "Operations", date: "November 2025" },
  { title: "Operator-Led Scaling: What the Textbooks Miss", excerpt: "Practical insights from decades of hands-on scaling across multi-model service operations.", author: "Michael Bradley", market: "United Kingdom", topic: "Operations", date: "October 2025" },
];

const allMarkets = ["All", "United Kingdom", "Australia"] as const;
const allTopics = ["All", "AI Strategy", "Acquisitions", "Operations", "Market"] as const;
const allAuthors = ["All", "Chris Robinson", "Lee Robinson", "Geouffrey Erasmus", "Loretto Burke", "Michael Bradley"] as const;

const expertiseColors: Record<string, string> = {
  AI: "border-primary/30 text-primary",
  "AI & Automation": "border-primary/30 text-primary",
  Engineering: "border-primary/30 text-primary",
  Data: "border-primary/30 text-primary",
  Technology: "border-primary/30 text-primary",
  Finance: "border-foreground/15 text-foreground/70",
  Governance: "border-foreground/15 text-foreground/70",
  "Due Diligence": "border-foreground/15 text-foreground/70",
  Operations: "border-muted-foreground/30 text-muted-foreground",
  Strategy: "border-muted-foreground/30 text-muted-foreground",
  "M&A": "border-foreground/15 text-foreground/70",
  Acquisitions: "border-foreground/15 text-foreground/70",
  Investment: "border-foreground/15 text-foreground/70",
  Scaling: "border-muted-foreground/30 text-muted-foreground",
};

const FilterGroup = ({ label, options, value, onChange }: { label: string; options: readonly string[]; value: string; onChange: (v: string) => void }) => (
  <div>
    <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground block mb-2">{label}</span>
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`text-xs px-3 py-1.5 border transition-colors ${
            value === opt
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border text-muted-foreground hover:border-primary/40"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

const Index = () => {
  const [market, setMarket] = useState<string>("All");
  const [topic, setTopic] = useState<string>("All");
  const [author, setAuthor] = useState<string>("All");

  const filtered = articles.filter((a) => {
    if (market !== "All" && a.market !== market) return false;
    if (topic !== "All" && a.topic !== topic) return false;
    if (author !== "All" && a.author !== author) return false;
    return true;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-16 bg-card overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-in">
              Acquisitions · AI · Platform
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.08] mb-6 animate-fade-in-up tracking-tight">
              WE BUY BUSINESSES AND BUILD ON WHAT YOU'VE CREATED.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
              Operator-led acquisitions designed to scale your business while protecting your people, clients, and legacy.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/sell">
                <Button variant="premium" size="lg">
                  Sell Your Business <ArrowRight className="ml-1" size={14} />
                </Button>
              </Link>
              <Link to="/investors">
                <Button variant="premium-outline" size="lg">Partner With Us</Button>
              </Link>
              <Link to="/deal-sources">
                <Button variant="premium-outline" size="lg">Submit an Opportunity</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      {/* The AIGG Platform */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">The AIGG Platform</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">The AIGG Platform</h2>
            <p className="text-muted-foreground leading-relaxed">
              A structured approach to acquiring, integrating, and scaling businesses.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-card p-8">
                <div className="w-11 h-11 flex items-center justify-center border border-border mb-5">
                  <pillar.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display font-bold text-lg mb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-12 border-t border-border text-center">
            <p className="font-display text-xl lg:text-2xl font-bold tracking-tight text-foreground">
              "We don't sell AI — we use AI to build better businesses."
            </p>
          </div>
        </div>
      </section>

      <TrackRecord />

      {/* How the Platform Works */}
      <section className="py-24 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">Operating Model</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">How the Platform Works</h2>
            <p className="text-primary-foreground/60 leading-relaxed">
              A repeatable, scalable system applied across every acquisition and market.
            </p>
          </div>
          <div className="hidden lg:flex items-center justify-center gap-4 mb-16">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="font-display font-bold text-lg tracking-tight">{step.title}</span>
                {i < steps.length - 1 && <ArrowRight size={18} className="text-primary" />}
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10">
            {steps.map((step) => (
              <div key={step.number} className="bg-navy-mid p-8">
                <span className="font-display text-primary-foreground/15 font-bold text-4xl block mb-3">{step.number}</span>
                <h3 className="font-display font-bold text-xl mb-3 tracking-tight">{step.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-12 border-t border-primary-foreground/10 text-center">
            <p className="font-display text-xl lg:text-2xl font-bold tracking-tight text-primary-foreground/90">
              "We don't sell AI — we use AI to build better businesses."
            </p>
          </div>
        </div>
      </section>

      {/* Multi-Market Platform Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">The AIGG Platform</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">A Multi-Market Acquisition Platform</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              AIGG operates as a multi-market platform where each region functions as a core market with independent capability and localised intellectual property.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {[
              { name: "United Kingdom", location: "National", status: "Core Market" },
              { name: "Australia", location: "National", status: "Core Market" },
            ].map((m) => (
              <div key={m.name} className="bg-card p-10">
                <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground">{m.status}</span>
                <h3 className="font-display font-bold text-2xl mt-2 mb-1 tracking-tight">{m.name}</h3>
                <p className="text-muted-foreground text-sm">{m.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">What We Do</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Acquire · Optimise · Scale</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whatWeDo.map((pillar, i) => (
              <div key={i} className="group">
                <div className="w-12 h-12 flex items-center justify-center border border-border mb-6">
                  <pillar.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-display font-bold text-xl mb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Focus */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Market</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
              Market Focus
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              AIGG focuses on acquiring and scaling service businesses across key sectors,
              applying AI-enabled systems and operational excellence to build lasting portfolio value
              in the market.
            </p>
          </div>
        </div>
      </section>

      {/* Where We Focus */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Investment Focus</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">Where We Focus</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              AIGG focuses on service-based businesses operating in fragmented markets with strong fundamentals and opportunities for operational improvement.
            </p>
            <ul className="space-y-3 mb-8">
              {criteria.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm leading-relaxed italic">
              Our focus evolves based on market opportunity and platform fit.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Our Approach</p>
              <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
                Disciplined Execution
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We combine institutional acquisition discipline with modern technology execution.
                Every acquisition is assessed, structured, and integrated through a repeatable platform model.
              </p>
            </div>
            <div className="space-y-5">
              {approaches.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Edge — Navy */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">Our Edge</p>
              <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6 text-primary-foreground">
                Why AIGG
              </h2>
              <p className="text-primary-foreground/60 leading-relaxed mb-8">
                We don't sell AI — we use AI to build better businesses. Our competitive advantage lies in combining
                institutional acquisition discipline with modern technology execution.
              </p>
            </div>
            <div className="space-y-5">
              {edges.map((edge, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full border border-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-accent-blue" />
                  </div>
                  <span className="text-primary-foreground/70 text-sm leading-relaxed">{edge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Markets — Navy */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">Core Markets</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6 text-primary-foreground">
              A Platform Built Across Markets
            </h2>
            <p className="text-primary-foreground/60 leading-relaxed">
              Each market develops and retains its own intellectual property and operating expertise,
              while benefiting from shared platform capabilities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-px max-w-2xl mx-auto">
            <div className="bg-navy-mid p-10 text-center">
              <h3 className="font-display font-bold text-2xl mb-1 tracking-tight text-primary-foreground">United Kingdom</h3>
              <p className="text-primary-foreground/50 text-sm">National</p>
            </div>
            <div className="bg-navy-mid p-10 text-center">
              <h3 className="font-display font-bold text-2xl mb-1 tracking-tight text-primary-foreground">Australia</h3>
              <p className="text-primary-foreground/50 text-sm">National</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Business Owners */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">For Business Owners</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
              Considering a Sale?
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed mb-10">
              <p>We provide a confidential, respectful process designed for founders who have built something meaningful.</p>
              <ul className="space-y-2 text-left max-w-md mx-auto">
                {[
                  "Confidential discussions from day one",
                  "Flexible deal structures - earnouts, partial exits, full exits",
                  "Legacy protection for your team and customers",
                  "Continued growth support post-acquisition",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/sell">
              <Button variant="premium" size="lg">
                Start Confidential Discussion <ArrowRight className="ml-1" size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* For Investors */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">For Investors</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
              Partner With AIGG
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed mb-10">
              <p>Access structured investment exposure to AI-enhanced service businesses across the United Kingdom.</p>
              <div className="grid sm:grid-cols-3 gap-6 mt-8 text-left">
                {[
                  { title: "Off-Market Access", desc: "Proprietary deal flow through direct sourcing and broker networks." },
                  { title: "AI Value Creation", desc: "Technology-driven operational uplift across every portfolio company." },
                  { title: "Structured Exposure", desc: "Disciplined capital deployment with clear return frameworks." },
                ].map((item) => (
                  <div key={item.title} className="border border-border p-6 bg-card">
                    <h4 className="font-display font-semibold text-foreground text-sm mb-2">{item.title}</h4>
                    <p className="text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <Link to="/investors">
              <Button variant="premium" size="lg">
                Request Investor Pack <ArrowRight className="ml-1" size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Deal Sources */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">For Brokers & Advisors</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
              Deal Sources & Partners
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10">
              We welcome introductions from brokers, accountants, and advisors. Fast response, professional process, strict confidentiality.
            </p>
            <Link to="/deal-sources">
              <Button variant="premium" size="lg">
                Submit Opportunity <ArrowRight className="ml-1" size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Platform Leadership</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Leadership</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {team.map((leader) => (
              <div key={leader.name} className="border border-border bg-card p-8">
                <div className="flex items-center gap-3">
                  <h3 className="font-display font-bold text-lg tracking-tight mb-1">{leader.name}</h3>
                  {leader.linkedin && (
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] font-medium tracking-wide uppercase text-primary hover:underline -mt-1" onClick={(e) => e.stopPropagation()}>
                      <Linkedin className="h-3.5 w-3.5" /> Connect
                    </a>
                  )}
                </div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">{leader.role} — {leader.market}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{leader.capability}</p>
                <div className="flex flex-wrap gap-2">
                  {leader.expertise.map((e) => (
                    <span key={e} className="text-[10px] font-medium tracking-wide uppercase text-muted-foreground border border-border px-2.5 py-1">{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Operators & Contributors */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-6">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Network</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Platform Operators & Contributors</h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mb-16 leading-relaxed">
            AIGG brings together a network of operators, strategists, and technologists who contribute to platform development, execution, and insights across markets.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((op) => (
              <div key={op.name} className="border border-border bg-background p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-display font-bold text-lg tracking-tight">{op.name}</h3>
                  {op.linkedin && (
                    <a href={op.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] font-medium tracking-wide uppercase text-primary hover:underline">
                      <Linkedin className="h-3.5 w-3.5" /> Connect
                    </a>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {op.expertise.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] font-medium tracking-wide uppercase border px-2.5 py-1 ${expertiseColors[tag] ?? "border-border text-muted-foreground"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{op.capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perspectives */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Perspectives</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Insights From the Platform</h2>
          </div>
          <div className="flex flex-wrap gap-6 mb-12">
            <FilterGroup label="Market" options={allMarkets} value={market} onChange={setMarket} />
            <FilterGroup label="Topic" options={allTopics} value={topic} onChange={setTopic} />
            <FilterGroup label="Author" options={allAuthors} value={author} onChange={setAuthor} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {filtered.map((article, i) => (
              <div key={i} className="bg-card p-8 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">{article.market}</span>
                  <span className="text-muted-foreground/30">·</span>
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">{article.topic}</span>
                </div>
                <h3 className="font-display font-semibold text-base tracking-tight mb-2">{article.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{article.author}</span>
                  <span className="text-xs text-muted-foreground/50">{article.date}</span>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground text-sm py-16">No articles match the selected filters.</p>
          )}
        </div>
      </section>

      {/* Platform Vision */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">Platform Vision</p>
            <h2 className="text-2xl lg:text-3xl font-display font-bold tracking-tight leading-snug mb-6 text-primary-foreground">
              Building a multi-vertical, AI-enabled services platform — scaling nationally across core markets.
            </h2>
            <p className="text-primary-foreground/50 text-sm leading-relaxed max-w-2xl mx-auto">
              We see a future where the United Kingdom's best service businesses are connected through shared technology, shared services, and a shared commitment to excellence.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
