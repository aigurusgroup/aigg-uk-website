import Layout from "@/components/Layout";
import { ArrowRight, Clock, Shield, Cog, Settings2, CheckCircle2, Heart, MessageSquare, FileSearch, Handshake, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const whyAigg = [
  { icon: Clock, title: "Long-Term Focus", desc: "We acquire to build — not to flip. Our commitment is to grow businesses over the long term, preserving what makes them valuable while unlocking new potential." },
  { icon: Shield, title: "Structured Approach", desc: "Every transition follows a clear, documented process. From initial conversation through to completion, you'll know exactly where things stand at every stage." },
  { icon: Cog, title: "Operational Expertise", desc: "We bring proven operational systems, AI-enabled tools, and centralised support functions that strengthen businesses from within — without disrupting what already works." },
  { icon: Settings2, title: "Flexible Structures", desc: "We understand that every business and owner is different. We work collaboratively to find deal structures that reflect your priorities and circumstances." },
];

const processSteps = [
  { step: "01", icon: MessageSquare, title: "Initial Discussion", desc: "A confidential conversation to understand your business, your goals, and whether there's a potential fit." },
  { step: "02", icon: FileSearch, title: "Review", desc: "A structured review of your business including financials, operations, customers, and growth potential." },
  { step: "03", icon: Handshake, title: "Structure", desc: "We work together to agree commercial terms and a deal structure that reflects mutual interests." },
  { step: "04", icon: RefreshCw, title: "Transition", desc: "A managed transition with full operational support, ensuring continuity for your team, customers, and stakeholders." },
];

const criteria = [
  "Recurring or consistent revenue streams",
  "Established and loyal customer base",
  "Proven operational track record",
  "Clear opportunity for growth or improvement",
];

const SellYourBusiness = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", businessName: "", industry: "",
    revenueRange: "", ebitdaRange: "", location: "", ownership: "",
    timeline: "", notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Submission Received", description: "Thank you. We'll be in touch within 24–48 hours." });
    setFormData({ name: "", email: "", phone: "", businessName: "", industry: "", revenueRange: "", ebitdaRange: "", location: "", ownership: "", timeline: "", notes: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const updateSelect = (field: string) => (val: string) =>
    setFormData((prev) => ({ ...prev, [field]: val }));

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-in">
              Sell Your Business
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.08] mb-6 animate-fade-in-up tracking-tight">
              Considering Selling Your Business?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
              We partner with business owners to transition, grow, and scale businesses through a structured and thoughtful approach.
            </p>
            <a href="#enquiry-form" className="animate-fade-in-up inline-block" style={{ animationDelay: "0.2s" }}>
              <Button variant="premium" size="lg">
                Start a Confidential Discussion <ArrowRight className="ml-1" size={14} />
              </Button>
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      {/* A Different Approach */}
      <section className="py-24 bg-slate-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Our Approach</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-8">
              A Different Approach to Business Transitions
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Selling a business is one of the most significant decisions an owner can make. We understand that it's not just a financial transaction — it involves people, relationships, and the legacy you've built over years of hard work.
              </p>
              <p>
                AIGG takes a long-term approach to every acquisition. We focus on continuity, operational improvement, and structured growth — ensuring that businesses continue to thrive under new ownership while respecting the foundations that made them successful.
              </p>
              <p>
                Our model is built around partnership, not disruption. We work closely with owners through every stage of the process to ensure a transition that reflects your priorities and protects what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AIGG */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Why AIGG</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Why Business Owners Choose AIGG</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {whyAigg.map(({ icon: Icon, title, desc }) => (
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

      {/* Process */}
      <section className="py-24 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/40 mb-3">Process</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Our Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10">
            {processSteps.map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="bg-navy p-8">
                <span className="text-xs font-medium tracking-[0.2em] text-primary-foreground/30 mb-4 block">{step}</span>
                <div className="w-10 h-10 flex items-center justify-center border border-primary-foreground/10 mb-5">
                  <Icon className="text-primary-foreground/70" size={18} />
                </div>
                <h3 className="font-display font-semibold text-base mb-2 tracking-tight">{title}</h3>
                <p className="text-primary-foreground/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Criteria</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-10">What We Look For</h2>
            <div className="space-y-5">
              {criteria.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                  <p className="text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="py-24 bg-slate-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-start gap-5 mb-8">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/5 border border-border shrink-0 mt-1">
                <Heart className="text-foreground" size={22} />
              </div>
              <div>
                <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">What Matters to Us</p>
                <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">
                  Legacy. Relationships. Continuity.
                </h2>
              </div>
            </div>
            <div className="space-y-5 text-muted-foreground leading-relaxed pl-[68px]">
              <p>
                We recognise that behind every business is a team, a customer base, and a community that depend on it. Our approach is built on respect for what you've created and a genuine commitment to its future.
              </p>
              <p>
                We take time to understand the culture, the people, and the relationships that define your business — and we build transition plans that protect and strengthen them through the process and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/40 mb-3">Get in Touch</p>
          <h2 className="text-2xl lg:text-3xl font-display font-bold tracking-tight mb-4">
            Start a Confidential Conversation
          </h2>
          <p className="text-primary-foreground/50 text-sm leading-relaxed mb-10">
            All discussions are private and handled with discretion. There is no obligation and no pressure — just a genuine conversation about your options.
          </p>
          <a href="#enquiry-form">
            <Button variant="premium-white" size="lg">
              Start a Confidential Discussion <ArrowRight className="ml-1" size={14} />
            </Button>
          </a>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry-form" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Submit</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
              Submit Your Business
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10">
              Complete the form below and a member of our team will be in touch. All information is treated as strictly confidential.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-medium tracking-wide uppercase">Name</Label>
                  <Input id="name" placeholder="Full name" value={formData.name} onChange={update("name")} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-medium tracking-wide uppercase">Email</Label>
                  <Input id="email" type="email" placeholder="Email address" value={formData.email} onChange={update("email")} required />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs font-medium tracking-wide uppercase">Phone</Label>
                  <Input id="phone" type="tel" placeholder="Phone number" value={formData.phone} onChange={update("phone")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessName" className="text-xs font-medium tracking-wide uppercase">Business Name</Label>
                  <Input id="businessName" placeholder="Business name" value={formData.businessName} onChange={update("businessName")} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-xs font-medium tracking-wide uppercase">Industry</Label>
                  <Input id="industry" placeholder="e.g. Professional Services" value={formData.industry} onChange={update("industry")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-xs font-medium tracking-wide uppercase">Location</Label>
                  <Input id="location" placeholder="City or region" value={formData.location} onChange={update("location")} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-xs font-medium tracking-wide uppercase">Revenue Range</Label>
                  <Select value={formData.revenueRange} onValueChange={updateSelect("revenueRange")}>
                    <SelectTrigger><SelectValue placeholder="Select range" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-500k">Under £500k</SelectItem>
                      <SelectItem value="500k-1m">£500k – £1m</SelectItem>
                      <SelectItem value="1m-3m">£1m – £3m</SelectItem>
                      <SelectItem value="3m-5m">£3m – £5m</SelectItem>
                      <SelectItem value="5m-10m">£5m – £10m</SelectItem>
                      <SelectItem value="10m-plus">£10m+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium tracking-wide uppercase">EBITDA Range</Label>
                  <Select value={formData.ebitdaRange} onValueChange={updateSelect("ebitdaRange")}>
                    <SelectTrigger><SelectValue placeholder="Select range" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-100k">Under £100k</SelectItem>
                      <SelectItem value="100k-250k">£100k – £250k</SelectItem>
                      <SelectItem value="250k-500k">£250k – £500k</SelectItem>
                      <SelectItem value="500k-1m">£500k – £1m</SelectItem>
                      <SelectItem value="1m-plus">£1m+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-xs font-medium tracking-wide uppercase">Ownership %</Label>
                  <Select value={formData.ownership} onValueChange={updateSelect("ownership")}>
                    <SelectTrigger><SelectValue placeholder="Select ownership" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100">100% (Sole Owner)</SelectItem>
                      <SelectItem value="majority">Majority Stake</SelectItem>
                      <SelectItem value="minority">Minority Stake</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium tracking-wide uppercase">Timeline</Label>
                  <Select value={formData.timeline} onValueChange={updateSelect("timeline")}>
                    <SelectTrigger><SelectValue placeholder="Select timeline" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (0–3 months)</SelectItem>
                      <SelectItem value="near-term">Near-term (3–6 months)</SelectItem>
                      <SelectItem value="medium-term">Medium-term (6–12 months)</SelectItem>
                      <SelectItem value="exploratory">Exploratory (12+ months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-xs font-medium tracking-wide uppercase">Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Anything else you'd like us to know"
                  rows={4}
                  value={formData.notes}
                  onChange={update("notes")}
                />
              </div>

              <Button type="submit" variant="premium" size="lg" className="w-full sm:w-auto">
                Submit Opportunity <ArrowRight className="ml-1" size={14} />
              </Button>

              <p className="text-xs text-muted-foreground mt-4">
                We typically respond within 24–48 hours. All information is treated as strictly confidential.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SellYourBusiness;
