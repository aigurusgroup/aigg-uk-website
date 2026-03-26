import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DealSources = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", firm: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Opportunity received", description: "Thank you — we'll review and respond within 48 hours." });
    setFormData({ name: "", email: "", firm: "", details: "" });
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Deal Sources & Partners</p>
            <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">Submit an Opportunity</h1>
            <p className="text-muted-foreground leading-relaxed">
              We work with brokers, accountants, and advisors who have clients considering a sale.
              We respond fast, maintain confidentiality, and run a professional process.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-border" />

      {/* Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-border bg-card">
              <h3 className="font-display font-semibold text-sm mb-2">We Welcome Introductions</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Whether you're a broker with a mandate, an accountant with a retiring client, or an advisor exploring options — we want to hear from you.
              </p>
            </div>
            <div className="p-8 border border-border bg-card">
              <h3 className="font-display font-semibold text-sm mb-2">Fast Response</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                We respond to every opportunity within 48 hours and provide clear feedback on fit and interest.
              </p>
            </div>
            <div className="p-8 border border-border bg-card">
              <h3 className="font-display font-semibold text-sm mb-2">Professional Process</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                NDAs on request. Structured due diligence. Clean deal execution. Your client's legacy is safe with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-display font-bold tracking-tight mb-2">Submit an Opportunity</h2>
            <p className="text-muted-foreground text-sm mb-8">All enquiries are confidential.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Your Name *</Label>
                <Input className="mt-1.5" required value={formData.name} onChange={e => updateField("name", e.target.value)} />
              </div>
              <div>
                <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Email *</Label>
                <Input className="mt-1.5" type="email" required value={formData.email} onChange={e => updateField("email", e.target.value)} />
              </div>
              <div>
                <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Firm</Label>
                <Input className="mt-1.5" value={formData.firm} onChange={e => updateField("firm", e.target.value)} />
              </div>
              <div>
                <Label className="text-xs font-medium tracking-wide uppercase text-muted-foreground">Opportunity Details</Label>
                <Textarea className="mt-1.5" rows={4} placeholder="Brief description of the business / opportunity..." value={formData.details} onChange={e => updateField("details", e.target.value)} />
              </div>
              <Button variant="premium" size="lg" type="submit" className="w-full">
                Submit Opportunity <ArrowRight className="ml-1" size={14} />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DealSources;
