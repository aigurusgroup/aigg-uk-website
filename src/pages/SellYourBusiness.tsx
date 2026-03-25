import Layout from "@/components/Layout";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const criteria = [
  "Service-based business model",
  "Revenue of £500K+ annually",
  "Established client base and recurring revenue",
  "Owner looking to exit or scale with a partner",
  "UK or Australia-based operations",
];

const SellYourBusiness = () => (
  <Layout>
    <section className="relative min-h-[60vh] flex items-center pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-in">
            Sell Your Business
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-bold leading-[1.08] mb-6 animate-fade-in-up tracking-tight">
            Submit an Opportunity
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            AIGG acquires and scales service businesses across the United Kingdom and Australia. If you're considering an exit or partnership, we'd like to hear from you.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>

    <section className="py-24 bg-slate-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">What We Look For</p>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-8">Acquisition Criteria</h2>
            <div className="space-y-4">
              {criteria.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="w-6 h-6 border border-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Get In Touch</p>
            <h2 className="text-3xl font-display font-bold tracking-tight mb-8">Start a Conversation</h2>
            <div className="space-y-6">
              <div>
                <label className="text-xs font-medium tracking-wide uppercase text-muted-foreground block mb-2">Your Name</label>
                <input type="text" className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Full name" />
              </div>
              <div>
                <label className="text-xs font-medium tracking-wide uppercase text-muted-foreground block mb-2">Email</label>
                <input type="email" className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-xs font-medium tracking-wide uppercase text-muted-foreground block mb-2">Business Overview</label>
                <textarea rows={4} className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Brief description of your business, revenue, and sector" />
              </div>
              <Button variant="premium" size="lg" className="w-full">
                Submit Opportunity <ArrowRight className="ml-1" size={14} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-navy">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-display font-bold tracking-tight mb-4">Confidential & Professional</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          All enquiries are treated with strict confidentiality. Our team will review your submission and respond within 48 hours to discuss next steps.
        </p>
      </div>
    </section>
  </Layout>
);

export default SellYourBusiness;
