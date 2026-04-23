import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Layers, Cpu, Settings } from "lucide-react";
import { useEffect } from "react";

const whyPillars = [
  { icon: Shield, title: "Long-Term Focus", description: "We acquire to build — not to flip. Our model is centred on sustainable growth and long-term value creation." },
  { icon: Layers, title: "Structured Approach", description: "Every acquisition follows a disciplined process — from initial discussion through to integration and growth." },
  { icon: Cpu, title: "Operational Expertise", description: "Our platform provides centralised operations, AI-enabled systems, and hands-on support from experienced operators." },
  { icon: Settings, title: "Flexible Structures", description: "Full exit, partial exit, or earnout — we tailor deal structures to meet the needs and goals of every owner." },
];

const processSteps = [
  { num: "01", title: "Initial Discussion", desc: "A confidential conversation to understand your business, goals, and timeline." },
  { num: "02", title: "Review", desc: "We assess fit, fundamentals, and alignment with the AIGG platform strategy." },
  { num: "03", title: "Structure", desc: "We propose a deal structure tailored to your objectives and circumstances." },
  { num: "04", title: "Transition", desc: "Smooth handover with continuity planning, team support, and operational integration." },
];

const lookingFor = [
  "Recurring or consistent revenue",
  "Established customer base",
  "Proven operations",
  "Growth opportunity",
];

const SellYourBusiness = () => {
  useEffect(() => {
    const scriptId = "ghl-form-embed-script";
    if (document.getElementById(scriptId)) return;
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://crm.aigurusgroup.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">For Business Owners</p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
              Considering Selling Your Business?
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We partner with business owners to transition, grow, and scale businesses through a structured and thoughtful approach.
            </p>
            <a href="#contact-form">
              <Button variant="premium" size="lg">
                Start a Confidential Discussion <ArrowRight className="ml-1" size={14} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <div className="h-px bg-border" />

      {/* Approach */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Our Approach</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
              A Different Approach to Business Transitions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We believe in long-term value creation — not short-term financial engineering. When we acquire a business, we're investing in its future, its people, and its customers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our platform provides the operational infrastructure, AI-enabled systems, and strategic support to help businesses grow well beyond what they could achieve independently. We focus on continuity, structured growth, and building something that lasts.
            </p>
          </div>
        </div>
      </section>

      {/* Why AIGG — Navy */}
      <section className="py-24 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">Why AIGG</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
              Why Business Owners Choose AIGG
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10">
            {whyPillars.map((pillar, i) => (
              <div key={i} className="bg-navy-mid p-8">
                <div className="w-11 h-11 flex items-center justify-center border border-primary-foreground/15 mb-5">
                  <pillar.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display font-bold text-lg mb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">How It Works</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Our Process</h2>
          </div>
          <div className="hidden lg:flex items-center justify-center gap-4 mb-12">
            {processSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="font-display font-bold text-sm tracking-tight">{step.title}</span>
                {i < processSteps.length - 1 && <ArrowRight size={16} className="text-primary" />}
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {processSteps.map((step) => (
              <div key={step.num} className="bg-card p-8">
                <span className="font-display text-muted-foreground/20 font-bold text-4xl block mb-3">{step.num}</span>
                <h3 className="font-display font-bold text-lg mb-3 tracking-tight">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Criteria</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">What We Look For</h2>
            <ul className="space-y-3 mb-6">
              {lookingFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Our Commitment</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">What Matters to Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We understand that selling a business is more than a financial transaction. It represents years of work, relationships, and trust that you've built within your community.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              That's why we prioritise continuity — for your team, your customers, and your legacy. Every transition is handled with discretion, respect, and a genuine commitment to the long-term success of the business.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA + Form — Navy */}
      <section id="contact-form" className="py-24 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-3">
              Start a Confidential Conversation
            </h2>
            <p className="text-primary-foreground/60 text-sm mb-10">
              All discussions are private and handled with discretion.
            </p>

            <iframe
              src="https://crm.aigurusgroup.com/widget/form/6WplSKp2zDtAHqjlbCHN"
              style={{ width: "100%", height: "1423px", border: "none", borderRadius: "8px" }}
              id="inline-6WplSKp2zDtAHqjlbCHN"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Form 0"
              data-height="1423"
              data-layout-iframe-id="inline-6WplSKp2zDtAHqjlbCHN"
              data-form-id="6WplSKp2zDtAHqjlbCHN"
              title="Form 0"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SellYourBusiness;
