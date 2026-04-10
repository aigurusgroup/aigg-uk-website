import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Layers, Cpu, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  { icon: Building2, title: "Acquisition Strategy", desc: "We acquire anchor 'platform' businesses in target verticals — strong, well-run companies that become the foundation for disciplined buy-and-build growth." },
  { icon: Layers, title: "Operational Integration", desc: "Centralised back-office functions sit at group level. Portfolio companies retain their brand, team, and customers while benefiting from shared infrastructure." },
  { icon: Cpu, title: "AI-Enabled Systems", desc: "Every portfolio company receives a structured AI implementation — process automation, predictive analytics, and intelligent workflows deployed within 90 days." },
  { icon: TrendingUp, title: "Platform Scaling", desc: "Each market entry follows the same disciplined playbook: anchor acquisition, bolt-ons, AI implementation, and scale across target verticals." },
];

const flowSteps = [
  { num: "01", title: "Acquire", desc: "Identify and acquire high-quality service businesses with strong fundamentals, loyal customers, and proven cash flows." },
  { num: "02", title: "Integrate", desc: "Centralise back-office operations, align governance, and embed the business into the AIGG platform infrastructure." },
  { num: "03", title: "Optimise", desc: "Deploy AI systems and modern operational tools to drive efficiency, reduce cost, and improve customer outcomes." },
  { num: "04", title: "Scale", desc: "Expand through bolt-on acquisitions, cross-selling, and platform leverage to compound value across the portfolio." },
];

const operatingModel = [
  { title: "Financial Control", desc: "Centralised financial management, reporting, and compliance across the portfolio. Standardised KPIs, cash flow oversight, and capital allocation discipline." },
  { title: "Operational Systems", desc: "Shared services for HR, marketing, procurement, and administration. Portfolio companies focus on delivery while the platform handles infrastructure." },
  { title: "Technology Layer", desc: "AI-enabled automation, customer analytics, workflow management, and intelligent systems deployed across every portfolio company." },
];

const valueDrivers = [
  { num: "01", title: "Disciplined Acquisition", desc: "We target businesses with strong fundamentals, proven cash flows, and embedded customer relationships in fragmented markets." },
  { num: "02", title: "Operational Improvement", desc: "Centralised operations, shared services, and professional management lift margins and reduce overhead across the portfolio." },
  { num: "03", title: "AI-Driven Efficiency", desc: "Structured AI deployment drives efficiency, reduces cost, and creates measurable value within 90 days of acquisition." },
  { num: "04", title: "Platform Leverage", desc: "Cross-selling, shared infrastructure, and compounding scale advantages create value beyond what any single business could achieve." },
];

const Platform = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-28 pb-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Platform & Strategy</p>
          <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">The AIGG Platform</h1>
          <p className="text-muted-foreground leading-relaxed">
            A structured approach to acquiring, integrating, and scaling service businesses.
          </p>
        </div>
      </div>
    </section>

    <div className="h-px bg-border" />

    {/* Platform Overview */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Overview</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">A System, Not a Series of Deals</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            AIGG is not a collection of disconnected acquisitions. It is a platform — a structured system designed to acquire, integrate, and scale service businesses using a repeatable and disciplined methodology.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every business that enters the platform benefits from centralised operations, AI-enabled systems, and the compounding advantages of portfolio scale. The result is a platform that creates more value than the sum of its parts.
          </p>
        </div>
        <div className="mt-16 pt-12 border-t border-border text-center">
          <p className="font-display text-xl lg:text-2xl font-bold tracking-tight text-foreground">
            "We don't sell AI — we use AI to build better businesses."
          </p>
        </div>
      </div>
    </section>

    {/* Four Pillars — Navy */}
    <section className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">Core Pillars</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Four Pillars of the Platform</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-navy-mid p-8">
              <div className="w-11 h-11 flex items-center justify-center border border-primary-foreground/15 mb-5">
                <pillar.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-display font-bold text-lg mb-3 tracking-tight">{pillar.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-12 border-t border-primary-foreground/10 text-center">
          <p className="font-display text-xl lg:text-2xl font-bold tracking-tight text-primary-foreground">
            "We don't sell AI — we use AI to build better businesses."
          </p>
        </div>
      </div>
    </section>

    {/* How the Platform Works */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Operating Model</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">How the Platform Works</h2>
        </div>
        <div className="hidden lg:flex items-center justify-center gap-4 mb-12">
          {flowSteps.map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="font-display font-bold text-sm tracking-tight">{step.title}</span>
              {i < flowSteps.length - 1 && <ArrowRight size={16} className="text-primary" />}
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {flowSteps.map((step) => (
            <div key={step.num} className="bg-card p-8">
              <span className="font-display text-muted-foreground/20 font-bold text-4xl block mb-3">{step.num}</span>
              <h3 className="font-display font-bold text-lg mb-3 tracking-tight">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-12 border-t border-border text-center">
          <p className="font-display text-xl lg:text-2xl font-bold tracking-tight">
            "We don't sell AI — we use AI to build better businesses."
          </p>
        </div>
      </div>
    </section>

    {/* Operating Model */}
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Infrastructure</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Operating Model</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-px bg-border">
          {operatingModel.map((item, i) => (
            <div key={i} className="bg-background p-10">
              <h3 className="font-display font-bold text-lg mb-3 tracking-tight">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Value Creation — Navy */}
    <section className="py-24 bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">Returns</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Value Creation</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10">
          {valueDrivers.map((driver) => (
            <div key={driver.num} className="bg-navy-mid p-8">
              <span className="font-display text-primary-foreground/15 font-bold text-4xl block mb-3">{driver.num}</span>
              <h3 className="font-display font-bold text-lg mb-3 tracking-tight">{driver.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{driver.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Multi-Market Platform */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Scale</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">Multi-Market Platform</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            AIGG operates as a multi-market platform where each region functions as a core market with independent execution capability and localised intellectual property.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Markets share a common acquisition playbook, operational framework, and AI implementation methodology — while retaining the autonomy to execute within their local context. This model enables disciplined scaling without sacrificing local relevance.
          </p>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
          Explore the Platform
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Whether you're a business owner considering a transition or an investor seeking structured acquisition exposure.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/sell">
            <Button variant="premium" size="lg">
              Sell Your Business <ArrowRight className="ml-1" size={14} />
            </Button>
          </Link>
          <Link to="/investors">
            <Button variant="premium-outline" size="lg">
              Investor Information <ArrowRight className="ml-1" size={14} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Platform;
