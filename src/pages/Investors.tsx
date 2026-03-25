import Layout from "@/components/Layout";
import { ArrowRight, Target, Cog, Cpu, TrendingUp, ShieldCheck, BarChart3, Bot, Network, Globe, Users, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const pillars = [
  { icon: Target, title: "Acquisition Strategy", desc: "Disciplined sourcing and evaluation of service businesses across fragmented markets, applying rigorous criteria to every opportunity." },
  { icon: Cog, title: "Operational Integration", desc: "Structured post-acquisition playbooks that standardise operations, reduce risk, and establish scalable foundations from day one." },
  { icon: Cpu, title: "AI-Enabled Systems", desc: "Proprietary AI tools deployed across portfolio companies to automate workflows, surface insights, and drive continuous margin improvement." },
  { icon: TrendingUp, title: "Platform Scaling", desc: "Multi-market expansion leveraging shared intellectual property, centralised support functions, and compounding operational leverage." },
];

const valueCreation = [
  { icon: ShieldCheck, title: "Disciplined Acquisition", desc: "Every acquisition follows a structured evaluation framework focused on sustainable cash flows, defensible market positions, and integration readiness." },
  { icon: BarChart3, title: "Operational Improvement", desc: "Centralised operations, standardised reporting, and best-practice implementation drive measurable performance gains across every portfolio company." },
  { icon: Bot, title: "AI & Automation", desc: "Purpose-built AI systems eliminate manual processes, reduce cost bases, and create structural advantages that compound over time." },
  { icon: Network, title: "Platform Leverage", desc: "Shared infrastructure, cross-portfolio learnings, and centralised support functions create value that grows with every acquisition." },
];

const Investors = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", organisation: "", investorType: "", interest: "", notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Enquiry Received", description: "Thank you. Our team will be in touch shortly." });
    setFormData({ name: "", email: "", organisation: "", investorType: "", interest: "", notes: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-in">
              Investors
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.08] mb-6 animate-fade-in-up tracking-tight">
              A Platform Built to Scale Businesses
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
              AIGG applies a structured acquisition and growth model, combining disciplined capital, operational expertise, and AI-enabled systems.
            </p>
            <a href="#investor-form" className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="premium" size="lg">
                Request Investor Information <ArrowRight className="ml-1" size={14} />
              </Button>
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      </section>

      {/* The Opportunity */}
      <section className="py-24 bg-slate-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">The Opportunity</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-8">
              Fragmented Markets. Structural Advantage.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Across the United Kingdom and Australia, essential service industries remain highly fragmented — dominated by owner-operated businesses with limited access to technology, capital, and operational infrastructure.
              </p>
              <p>
                This fragmentation creates a significant consolidation opportunity for a disciplined acquirer with the systems and capability to integrate, improve, and scale these businesses systematically.
              </p>
              <p>
                AIGG is purpose-built to execute on this opportunity — combining structured acquisition methodology, AI-enabled operational systems, and multi-market platform economics to create compounding value across a growing portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The AIGG Platform */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">The AIGG Platform</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Four Pillars of Execution</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {pillars.map(({ icon: Icon, title, desc }) => (
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

      {/* How Value is Created */}
      <section className="py-24 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/40 mb-3">Value Creation</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">How Value Is Created</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-primary-foreground/10">
            {valueCreation.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-navy p-10">
                <div className="w-12 h-12 flex items-center justify-center border border-primary-foreground/10 mb-6">
                  <Icon className="text-primary-foreground/70" size={22} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 tracking-tight">{title}</h3>
                <p className="text-primary-foreground/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Investment Approach</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-8">
              Long-Term. Structured. Disciplined.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                AIGG deploys capital with a long-term orientation, focusing on sustainable value creation rather than short-term financial engineering. Every acquisition is evaluated against rigorous criteria and integrated using proven operational playbooks.
              </p>
              <p>
                Our approach prioritises disciplined capital deployment, structured integration, and systematic operational improvement — creating durable businesses that generate compounding returns over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Market Platform */}
      <section className="py-24 bg-slate-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Multi-Market Platform</p>
              <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-8">
                Core Markets. Independent Execution.
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  AIGG operates across the United Kingdom and Australia as core markets — each with full capability across acquisitions, strategy, AI systems, and execution.
                </p>
                <p>
                  Markets operate independently, developing and retaining their own intellectual property while sharing strategic frameworks and platform infrastructure. There is no hierarchy between markets.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-border">
              {[
                { market: "United Kingdom", icon: Globe },
                { market: "Australia", icon: Globe },
              ].map(({ market, icon: Icon }) => (
                <div key={market} className="bg-background p-8 text-center">
                  <Icon className="mx-auto mb-4 text-muted-foreground" size={28} />
                  <p className="font-display font-semibold text-sm tracking-tight">{market}</p>
                  <p className="text-xs text-muted-foreground mt-1">Core Market</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-start gap-5 mb-8">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/5 border border-border shrink-0 mt-1">
                <Users className="text-foreground" size={22} />
              </div>
              <div>
                <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Who We Work With</p>
                <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">
                  Aligned Capital Partners
                </h2>
              </div>
            </div>
            <div className="space-y-5 text-muted-foreground leading-relaxed pl-[68px]">
              <p>
                AIGG works with institutional and strategic investors seeking structured exposure to service business acquisitions — partners who value disciplined execution, operational rigour, and long-term value creation.
              </p>
              <p>
                We prioritise alignment of interests, transparency in reporting, and a shared commitment to building durable portfolio companies across multiple markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Access */}
      <section className="py-24 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <Lock className="mx-auto mb-6 text-primary-foreground/40" size={32} />
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary-foreground/40 mb-3">Investor Access</p>
          <h2 className="text-2xl lg:text-3xl font-display font-bold tracking-tight mb-4">
            Selective Engagement. Long-Term Alignment.
          </h2>
          <p className="text-primary-foreground/50 text-sm leading-relaxed mb-10">
            AIGG engages selectively with investors who share our commitment to disciplined acquisition, operational excellence, and long-term value creation. All conversations are confidential.
          </p>
          <a href="#investor-form">
            <Button variant="premium-white" size="lg">
              Request Investor Information <ArrowRight className="ml-1" size={14} />
            </Button>
          </a>
        </div>
      </section>

      {/* Investor Enquiry Form */}
      <section id="investor-form" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Enquiry</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
              Request Investor Information
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10">
              Complete the form below to register your interest. All enquiries are handled confidentially.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-medium tracking-wide uppercase">Name</Label>
                  <Input
                    id="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-medium tracking-wide uppercase">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="organisation" className="text-xs font-medium tracking-wide uppercase">Organisation</Label>
                  <Input
                    id="organisation"
                    placeholder="Organisation name"
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="investorType" className="text-xs font-medium tracking-wide uppercase">Investor Type</Label>
                  <Select value={formData.investorType} onValueChange={(val) => setFormData({ ...formData, investorType: val })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="institutional">Institutional</SelectItem>
                      <SelectItem value="family-office">Family Office</SelectItem>
                      <SelectItem value="strategic">Strategic</SelectItem>
                      <SelectItem value="private">Private / Individual</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest" className="text-xs font-medium tracking-wide uppercase">Area of Interest</Label>
                <Select value={formData.interest} onValueChange={(val) => setFormData({ ...formData, interest: val })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="platform-overview">Platform Overview</SelectItem>
                    <SelectItem value="uk-market">United Kingdom Market</SelectItem>
                    <SelectItem value="au-market">Australia Market</SelectItem>
                    <SelectItem value="co-investment">Co-Investment Opportunities</SelectItem>
                    <SelectItem value="general">General Enquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-xs font-medium tracking-wide uppercase">Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Any additional information or questions"
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <Button type="submit" variant="premium" size="lg" className="w-full sm:w-auto">
                Submit Enquiry <ArrowRight className="ml-1" size={14} />
              </Button>

              <p className="text-xs text-muted-foreground mt-4">
                All enquiries are handled confidentially. AIGG engages selectively with aligned capital partners.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Investors;
