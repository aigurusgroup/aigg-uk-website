import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Building2, Layers, Cpu, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const platformPillars = [
  { icon: Building2, title: "Acquisition Strategy", desc: "We acquire anchor businesses in target verticals — strong, well-run companies that become the foundation for disciplined buy-and-build growth." },
  { icon: Layers, title: "Operational Integration", desc: "Centralised back-office functions sit at group level. Portfolio companies retain their brand and customers while benefiting from shared infrastructure." },
  { icon: Cpu, title: "AI-Enabled Systems", desc: "Every portfolio company receives a structured AI implementation — process automation, predictive analytics, and intelligent workflows." },
  { icon: TrendingUp, title: "Platform Scaling", desc: "Each market follows the same disciplined playbook: anchor acquisition, bolt-ons, AI implementation, and scale." },
];

const valueDrivers = [
  { num: "01", title: "Disciplined Acquisition", desc: "We target businesses with strong fundamentals, proven cash flows, and embedded customer relationships in fragmented markets." },
  { num: "02", title: "Operational Improvement", desc: "Centralised operations, shared services, and professional management lift margins and reduce overhead across the portfolio." },
  { num: "03", title: "AI & Automation", desc: "Structured AI deployment drives efficiency, reduces cost, and creates measurable value within 90 days of acquisition." },
  { num: "04", title: "Platform Leverage", desc: "Cross-selling, shared infrastructure, and compounding scale advantages create value beyond what any single business could achieve." },
];

const investorTypes = ["Family Office", "Private Investor", "Institutional", "Fund / LP", "Strategic Partner", "Other"];

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  organisation: z.string().trim().max(200).optional(),
  investorType: z.string().optional(),
  interest: z.string().trim().max(500).optional(),
  notes: z.string().trim().max(2000).optional(),
});

const Investors = () => {
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "", email: "", organisation: "", investorType: "", interest: "", notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: "Request received", description: "Our investor relations team will be in touch shortly." });
    setFormData({ name: "", email: "", organisation: "", investorType: "", interest: "", notes: "" });
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: "" }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Investors</p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
              A Platform Built to Scale Businesses
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8">
              AIGG applies a structured acquisition and growth model, combining disciplined capital, operational expertise, and AI-enabled systems.
            </p>
            <a href="#investor-form">
              <Button variant="premium" size="lg">
                Request Investor Information <ArrowRight className="ml-1" size={14} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <div className="h-px bg-border" />

      {/* The Opportunity */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Market Context</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">The Opportunity</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Across the United Kingdom, thousands of established service businesses operate in highly fragmented markets with limited operational infrastructure. Many are founder-led, under-systemised, and approaching a natural point of transition.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This creates a significant opportunity for a disciplined platform to consolidate, professionalise, and scale these businesses — applying modern operational systems and AI to unlock value that individual operators cannot achieve alone.
            </p>
          </div>
        </div>
      </section>

      {/* The AIGG Platform — Navy */}
      <section className="py-24 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">The Platform</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">The AIGG Platform</h2>
            <p className="text-primary-foreground/60 leading-relaxed">
              A structured system for acquiring, integrating, and scaling service businesses across core markets.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10">
            {platformPillars.map((pillar, i) => (
              <div key={i} className="bg-navy-mid p-8">
                <div className="w-11 h-11 flex items-center justify-center border border-primary-foreground/15 mb-5">
                  <pillar.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display font-bold text-lg mb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Value Is Created */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Value Creation</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">How Value Is Created</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {valueDrivers.map((driver) => (
              <div key={driver.num} className="bg-card p-8">
                <span className="font-display text-muted-foreground/20 font-bold text-4xl block mb-3">{driver.num}</span>
                <h3 className="font-display font-bold text-lg mb-3 tracking-tight">{driver.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{driver.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Capital Strategy</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">Investment Approach</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AIGG deploys capital with discipline and patience. We are not seeking rapid exits or speculative returns — our model is built on long-term compounding through operational improvement and platform scale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Capital is deployed into proven businesses with strong fundamentals. Each acquisition is structured to align incentives across all stakeholders — founders, operators, and investors.
            </p>
          </div>
        </div>
      </section>

      {/* Multi-Market Platform + Who We Work With */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Scale</p>
              <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">Multi-Market Platform</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                AIGG operates as a multi-market platform where each region functions as a core market with independent execution capability and localised intellectual property.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Markets share a common acquisition playbook, operational framework, and AI implementation methodology — while retaining the autonomy to execute within their local context.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Alignment</p>
              <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">Who We Work With</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We work with investors who share our long-term perspective — those seeking structured exposure to acquisition-led growth in real, cash-generating businesses.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our investor relationships are selective and built on alignment of values, timeline, and expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Access — Navy */}
      <section className="py-24 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">Access</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">Investor Access</h2>
            <p className="text-primary-foreground/60 leading-relaxed mb-4">
              Engagement with AIGG is selective. We prioritise long-term alignment over transaction volume and work closely with a focused group of capital partners who understand the value of patience and discipline.
            </p>
            <p className="text-primary-foreground/60 leading-relaxed">
              If you are interested in learning more about the AIGG platform and investment structure, we welcome a confidential conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="investor-form" className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-3">
              Request Investor Information
            </h2>
            <p className="text-muted-foreground text-sm mb-10">
              All enquiries are handled confidentially.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Name *</Label>
                  <Input className="mt-1.5" required value={formData.name} onChange={e => updateField("name", e.target.value)} />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Email *</Label>
                  <Input className="mt-1.5" type="email" required value={formData.email} onChange={e => updateField("email", e.target.value)} />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Organisation</Label>
                  <Input className="mt-1.5" value={formData.organisation} onChange={e => updateField("organisation", e.target.value)} />
                </div>
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Investor Type</Label>
                  <select className="mt-1.5 w-full h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground" value={formData.investorType} onChange={e => updateField("investorType", e.target.value)}>
                    <option value="">Select...</option>
                    {investorTypes.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Area of Interest</Label>
                <Input className="mt-1.5" placeholder="e.g. Platform strategy, specific markets, capital structure..." value={formData.interest} onChange={e => updateField("interest", e.target.value)} />
              </div>

              <div>
                <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Notes</Label>
                <Textarea className="mt-1.5" rows={4} placeholder="Any additional context or questions..." value={formData.notes} onChange={e => updateField("notes", e.target.value)} />
              </div>

              <Button variant="premium" size="lg" type="submit">
                Request Investor Information <ArrowRight className="ml-1" size={14} />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;
