import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Check, Shield, Layers, Cpu, Settings } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

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

const revenueOptions = ["Under £500K", "£500K – £1M", "£1M – £3M", "£3M – £5M", "£5M – £10M", "£10M+"];
const ebitdaOptions = ["Under £100K", "£100K – £250K", "£250K – £500K", "£500K – £1M", "£1M+"];
const timeframeOptions = ["Immediately", "3–6 months", "6–12 months", "12+ months", "Just exploring"];

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(30).optional(),
  businessName: z.string().trim().max(200).optional(),
  industry: z.string().trim().max(100).optional(),
  revenue: z.string().optional(),
  ebitda: z.string().optional(),
  location: z.string().trim().max(200).optional(),
  ownership: z.string().trim().max(20).optional(),
  timeframe: z.string().optional(),
  notes: z.string().trim().max(2000).optional(),
});

const SellYourBusiness = () => {
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", businessName: "", industry: "",
    revenue: "", ebitda: "", location: "", ownership: "", timeframe: "", notes: "",
  });

  useEffect(() => {
    const scriptId = "ghl-form-embed-script";
    if (document.getElementById(scriptId)) return;
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://crm.aigurusgroup.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
    toast({ title: "Submission received", description: "We'll be in touch within 24–48 hours for a confidential discussion." });
    setFormData({ name: "", email: "", phone: "", businessName: "", industry: "", revenue: "", ebitda: "", location: "", ownership: "", timeframe: "", notes: "" });
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

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-primary-foreground/60">Name *</Label>
                  <Input className="mt-1.5 bg-navy-mid border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30" required value={formData.name} onChange={e => updateField("name", e.target.value)} />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-primary-foreground/60">Email *</Label>
                  <Input className="mt-1.5 bg-navy-mid border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30" type="email" required value={formData.email} onChange={e => updateField("email", e.target.value)} />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-primary-foreground/60">Phone</Label>
                  <Input className="mt-1.5 bg-navy-mid border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30" value={formData.phone} onChange={e => updateField("phone", e.target.value)} />
                </div>
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-primary-foreground/60">Business Name</Label>
                  <Input className="mt-1.5 bg-navy-mid border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30" value={formData.businessName} onChange={e => updateField("businessName", e.target.value)} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-primary-foreground/60">Industry</Label>
                  <Input className="mt-1.5 bg-navy-mid border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30" value={formData.industry} onChange={e => updateField("industry", e.target.value)} />
                </div>
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-primary-foreground/60">Location</Label>
                  <Input className="mt-1.5 bg-navy-mid border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30" value={formData.location} onChange={e => updateField("location", e.target.value)} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-primary-foreground/60">Revenue Range</Label>
                  <select className="mt-1.5 w-full h-10 rounded-md border border-primary-foreground/15 bg-navy-mid px-3 text-sm text-primary-foreground" value={formData.revenue} onChange={e => updateField("revenue", e.target.value)}>
                    <option value="">Select...</option>
                    {revenueOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-primary-foreground/60">EBITDA Range</Label>
                  <select className="mt-1.5 w-full h-10 rounded-md border border-primary-foreground/15 bg-navy-mid px-3 text-sm text-primary-foreground" value={formData.ebitda} onChange={e => updateField("ebitda", e.target.value)}>
                    <option value="">Select...</option>
                    {ebitdaOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-primary-foreground/60">Ownership % Available</Label>
                  <Input className="mt-1.5 bg-navy-mid border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30" value={formData.ownership} onChange={e => updateField("ownership", e.target.value)} />
                </div>
                <div>
                  <Label className="text-xs font-medium tracking-wide uppercase text-primary-foreground/60">Timeline</Label>
                  <select className="mt-1.5 w-full h-10 rounded-md border border-primary-foreground/15 bg-navy-mid px-3 text-sm text-primary-foreground" value={formData.timeframe} onChange={e => updateField("timeframe", e.target.value)}>
                    <option value="">Select...</option>
                    {timeframeOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <Label className="text-xs font-medium tracking-wide uppercase text-primary-foreground/60">Notes</Label>
                <Textarea className="mt-1.5 bg-navy-mid border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30" rows={4} placeholder="Anything else you'd like us to know..." value={formData.notes} onChange={e => updateField("notes", e.target.value)} />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Button variant="premium" size="lg" type="submit">
                  Submit Confidentially <ArrowRight className="ml-1" size={14} />
                </Button>
                <p className="text-primary-foreground/40 text-xs">We typically respond within 24–48 hours.</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* GoHighLevel Embedded Form */}
      <section id="ghl-form" className="py-24 bg-navy text-primary-foreground border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">Direct Enquiry</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-3">
              Submit Your Details
            </h2>
            <p className="text-primary-foreground/60 text-sm mb-10">
              Complete the form below and a member of our team will be in touch.
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
