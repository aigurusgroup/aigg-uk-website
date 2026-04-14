import Layout from "@/components/Layout";
import { useState, useMemo } from "react";
import { Search, Building2, TrendingUp, Layers, Shield, Clock, ArrowRight, Users, BarChart3, FileText, Scale, Target, PieChart, AlertTriangle, HelpCircle, Settings } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type Audience = "owners" | "investors";

interface FAQItem {
  q: string;
  a: string;
  related?: { label: string; href: string };
}

interface FAQCategory {
  title: string;
  icon: React.ElementType;
  audience: Audience | "platform";
  items: FAQItem[];
}

const popularQuestions: FAQItem[] = [
  { q: "How does AIGG differ from a traditional private equity buyer?", a: "We are operator-led, not financially engineered. Our team has direct experience running and scaling service businesses. We acquire, integrate, and operate — we don't strip assets or flip for short-term returns.", related: { label: "Our Platform", href: "/platform" } },
  { q: "What happens to my team after an acquisition?", a: "Your team stays. We retain management, preserve culture, and provide additional resources — from centralised back-office support to AI-enabled tools — so your people can focus on what they do best.", related: { label: "Our Approach", href: "/sell" } },
  { q: "What types of businesses does AIGG acquire?", a: "We target profitable, well-run service businesses generating £1M–£10M in revenue. We focus on sectors where operational improvement and platform integration create significant long-term value.", related: { label: "Acquisition Criteria", href: "/sell" } },
  { q: "How are investors' returns structured?", a: "Returns are generated through a combination of operational improvement, bolt-on acquisitions, and long-term platform value creation. We provide transparent reporting with quarterly updates on portfolio performance.", related: { label: "For Investors", href: "/investors" } },
  { q: "Is the initial conversation confidential?", a: "Absolutely. Every conversation begins under a strict confidentiality framework. We never disclose your identity, financials, or intent to sell without your explicit written consent.", related: { label: "Start a Conversation", href: "/sell" } },
  { q: "What is the typical acquisition timeline?", a: "From initial conversation to completion, most transactions take 8–16 weeks. We move efficiently because our team handles diligence, legal, and integration in-house.", related: { label: "Our Process", href: "/sell" } },
];

const categories: FAQCategory[] = [
  {
    title: "Process",
    icon: FileText,
    audience: "owners",
    items: [
      { q: "What does the acquisition process look like?", a: "It begins with a confidential conversation. If there's a fit, we move to indicative terms, due diligence, and completion — typically within 8–16 weeks. You'll have a single point of contact throughout." },
      { q: "Do I need to appoint advisors?", a: "You're welcome to, but it's not required. Many owners engage directly with us. We cover our own legal and advisory costs and can recommend independent advisors if you'd prefer representation." },
      { q: "Will the process disrupt my business?", a: "No. We structure diligence to minimise disruption. Most information requests are handled digitally, and we work around your schedule to protect day-to-day operations." },
    ],
  },
  {
    title: "Deal Structure",
    icon: Scale,
    audience: "owners",
    items: [
      { q: "How are deals typically structured?", a: "We offer flexible structures including upfront cash, deferred consideration, and equity rollovers. Each deal is tailored to the seller's priorities — whether that's a clean exit or ongoing participation." },
      { q: "Can I retain a stake in my business?", a: "Yes. We actively encourage sellers to roll equity into the platform. This allows you to participate in the upside as we scale the business and the broader portfolio." },
      { q: "Are there earn-out arrangements?", a: "Where appropriate, yes. Earn-outs are structured fairly, tied to achievable metrics, and designed to align incentives rather than create uncertainty." },
    ],
  },
  {
    title: "Legacy & Team",
    icon: Users,
    audience: "owners",
    items: [
      { q: "Will my brand be preserved?", a: "Yes. We believe strong brands have local equity. Portfolio companies retain their identity, client relationships, and market positioning while benefiting from platform-level resources." },
      { q: "What about my employees?", a: "Your team is a core part of what we're acquiring. We retain staff, invest in development, and provide additional support through centralised operations and modern tools." },
      { q: "Can I stay involved after the sale?", a: "Absolutely. Many founders transition into advisory or leadership roles within the portfolio. We value institutional knowledge and operational continuity." },
    ],
  },
  {
    title: "Valuation",
    icon: BarChart3,
    audience: "owners",
    items: [
      { q: "How do you value a business?", a: "We use a combination of EBITDA multiples, revenue quality analysis, and strategic value assessment. Our valuations reflect fair market value and the long-term potential of the business within our platform." },
      { q: "What multiples do you typically pay?", a: "Multiples vary by sector, size, and growth profile. We aim to pay fair, market-aligned valuations — typically between 4–8x adjusted EBITDA for platform acquisitions." },
      { q: "What if I don't agree with the valuation?", a: "Valuations are a starting point for discussion. We're transparent about our methodology and open to structuring deals that bridge any gap through deferred or performance-linked consideration." },
    ],
  },
  {
    title: "Strategy",
    icon: Target,
    audience: "investors",
    items: [
      { q: "What is AIGG's investment thesis?", a: "We acquire profitable service businesses, integrate them into a centralised platform, and deploy AI-enabled systems to drive operational efficiency and scalable growth across multiple markets." },
      { q: "Which sectors do you focus on?", a: "We target fragmented service sectors where consolidation, operational improvement, and technology deployment create measurable value — including professional services, facilities management, and technical services." },
      { q: "What is the buy-and-build strategy?", a: "We acquire an anchor platform business in each target vertical, then execute disciplined bolt-on acquisitions to consolidate market share, drive synergies, and compound portfolio value." },
    ],
  },
  {
    title: "Returns",
    icon: PieChart,
    audience: "investors",
    items: [
      { q: "What returns can investors expect?", a: "Target returns are aligned with institutional private equity benchmarks. Value is created through operational improvement, multiple arbitrage on bolt-ons, and long-term platform scaling." },
      { q: "How is investor capital deployed?", a: "Capital is deployed into acquisitions, working capital support, and AI infrastructure. We maintain disciplined capital allocation with clear deployment timelines and milestone-based drawdowns." },
      { q: "What is the expected hold period?", a: "We take a long-term view, typically 5–7 years per platform investment. This allows sufficient time to execute the full buy-and-build thesis and maximise value creation." },
    ],
  },
  {
    title: "Deal Flow",
    icon: Layers,
    audience: "investors",
    items: [
      { q: "How do you source acquisition targets?", a: "Through a proprietary network of advisors, intermediaries, and direct outreach. We maintain an active pipeline of qualified opportunities across our target sectors and geographies." },
      { q: "How many acquisitions do you plan per year?", a: "We target 2–4 acquisitions per market annually — one anchor platform and subsequent bolt-ons. Volume is driven by quality, not quotas." },
      { q: "Can investors co-invest in specific deals?", a: "Select co-investment opportunities are available for qualified investors on a deal-by-deal basis, subject to minimum thresholds and allocation availability." },
    ],
  },
  {
    title: "Risk",
    icon: AlertTriangle,
    audience: "investors",
    items: [
      { q: "How do you mitigate acquisition risk?", a: "Through rigorous due diligence, conservative underwriting, and a standardised integration playbook. We focus on profitable, cash-generative businesses with proven track records." },
      { q: "What governance structures are in place?", a: "We operate with institutional-grade governance including an independent advisory board, quarterly reporting, audited financials, and formal investment committee oversight." },
      { q: "What happens if an acquisition underperforms?", a: "Our centralised operations team provides hands-on support. We have structured intervention protocols, operational reserves, and the flexibility to deploy additional resources where needed." },
    ],
  },
  {
    title: "What is AIGG",
    icon: Building2,
    audience: "platform",
    items: [
      { q: "What does AIGG stand for?", a: "AI Guru Group — a multi-market acquisition platform that acquires, integrates, and scales service businesses using centralised operations and AI-enabled systems." },
      { q: "Is AIGG a private equity fund?", a: "AIGG operates with a private equity-style discipline but functions as an operating platform. We don't just invest — we acquire, integrate, and actively manage portfolio companies." },
      { q: "Where does AIGG operate?", a: "We currently operate in the UK market with a structured expansion plan into additional geographies. Each market follows the same disciplined acquisition and integration playbook." },
    ],
  },
  {
    title: "How It Works",
    icon: Settings,
    audience: "platform",
    items: [
      { q: "What does the platform provide to portfolio companies?", a: "Centralised finance, HR, legal, and compliance functions. AI-enabled tools for operations and customer management. Strategic oversight and growth capital for bolt-on acquisitions." },
      { q: "How is AI used within the platform?", a: "We deploy structured AI implementations across portfolio companies — including process automation, predictive analytics, and intelligent workflows — within 90 days of acquisition." },
      { q: "How do portfolio companies benefit from being part of AIGG?", a: "They retain their brand and team while gaining access to institutional-grade infrastructure, shared services, growth capital, and a proven playbook for scaling." },
    ],
  },
];

const conversionFAQs: FAQItem[] = [
  { q: "Is my enquiry confidential?", a: "Yes. Every conversation is conducted under strict confidentiality. We never disclose your identity or business details without your explicit written consent." },
  { q: "Is there any obligation?", a: "None whatsoever. An initial conversation is exploratory. There is no cost, no commitment, and no pressure to proceed." },
  { q: "What happens after I make contact?", a: "A senior member of our team will reach out within 24 hours to arrange a confidential introductory call at your convenience." },
  { q: "How quickly will I hear back?", a: "We respond to all enquiries within one business day. Most initial responses are within a few hours." },
];

const FAQ = () => {
  const [audience, setAudience] = useState<Audience>("owners");
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    const audienceCategories = categories.filter(
      (c) => c.audience === audience || c.audience === "platform"
    );
    if (!search.trim()) return audienceCategories;
    const q = search.toLowerCase();
    return audienceCategories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.q.toLowerCase().includes(q) ||
            item.a.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [audience, search]);

  const filteredPopular = useMemo(() => {
    if (!search.trim()) return popularQuestions;
    const q = search.toLowerCase();
    return popularQuestions.filter(
      (item) =>
        item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Answers to the questions that matter
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Whether you're considering a sale or exploring investment opportunities, find clear answers to the questions business owners and investors ask most.
          </p>

          {/* Toggle */}
          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => setAudience("owners")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                audience === "owners"
                  ? "bg-white text-[hsl(var(--navy))]"
                  : "border border-white/30 text-white/70 hover:border-white/60 hover:text-white"
              }`}
            >
              Business Owner
            </button>
            <button
              onClick={() => setAudience("investors")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                audience === "investors"
                  ? "bg-white text-[hsl(var(--navy))]"
                  : "border border-white/30 text-white/70 hover:border-white/60 hover:text-white"
              }`}
            >
              Investor
            </button>
          </div>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Ask a question…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-foreground text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Sticky search on scroll */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-border py-3 px-6 md:hidden">
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search questions…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-background text-sm border border-border focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent-blue))]"
          />
        </div>
      </div>

      {/* Popular Questions */}
      {!search && (
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Popular Questions
            </h2>
            <p className="text-muted-foreground mb-10">The questions we hear most from business owners and investors.</p>
            <Accordion type="multiple" defaultValue={popularQuestions.map((_, i) => `pop-${i}`)}>
              {filteredPopular.map((item, i) => (
                <AccordionItem key={i} value={`pop-${i}`} className="border-b border-border">
                  <AccordionTrigger className="text-left text-base font-medium text-navy hover:no-underline py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {item.a}
                    {item.related && (
                      <Link to={item.related.href} className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[hsl(var(--accent-blue))] hover:underline">
                        {item.related.label} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Categorised FAQ Sections */}
      <section className="py-20 bg-slate-section">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2" style={{ fontFamily: "var(--font-display)" }}>
            {audience === "owners" ? "For Business Owners" : "For Investors"}
          </h2>
          <p className="text-muted-foreground mb-12">
            {audience === "owners"
              ? "Everything you need to know about selling your business to AIGG."
              : "Key information for institutional and private investors."}
          </p>

          <div className="space-y-12">
            {filteredCategories.map((cat) => (
              <div key={cat.title}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[hsl(var(--accent-blue))]/10 flex items-center justify-center">
                    <cat.icon className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy" style={{ fontFamily: "var(--font-display)" }}>
                    {cat.title}
                  </h3>
                </div>
                <Accordion type="single" collapsible className="bg-white rounded-xl border border-border overflow-hidden">
                  {cat.items.map((item, j) => (
                    <AccordionItem key={j} value={`${cat.title}-${j}`} className="border-b border-border last:border-b-0">
                      <AccordionTrigger className="text-left text-sm font-medium text-navy hover:no-underline px-6 py-4">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed px-6 pb-4">
                        {item.a}
                        {item.related && (
                          <Link to={item.related.href} className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-[hsl(var(--accent-blue))] hover:underline">
                            {item.related.label} <ArrowRight className="h-3 w-3" />
                          </Link>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion FAQ Block */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[hsl(var(--accent-blue))]/10 flex items-center justify-center">
              <Shield className="h-5 w-5 text-[hsl(var(--accent-blue))]" />
            </div>
            <h2 className="text-2xl font-bold text-navy" style={{ fontFamily: "var(--font-display)" }}>
              Before You Reach Out
            </h2>
          </div>
          <Accordion type="multiple" defaultValue={conversionFAQs.map((_, i) => `conv-${i}`)} className="bg-[hsl(var(--slate-bg))] rounded-xl border border-border overflow-hidden mb-12">
            {conversionFAQs.map((item, i) => (
              <AccordionItem key={i} value={`conv-${i}`} className="border-b border-border last:border-b-0">
                <AccordionTrigger className="text-left text-sm font-medium text-navy hover:no-underline px-6 py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed px-6 pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center bg-navy rounded-2xl p-10 md:p-14">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Ready to have a conversation?
            </h3>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Whether you're exploring a sale or considering an investment, our team is ready to speak — confidentially, with no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[hsl(var(--accent-blue))] hover:bg-[hsl(var(--accent-blue))]/90 text-white px-8 py-3 rounded-lg">
                <Link to="/sell">Sell Your Business</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/30 text-foreground bg-white hover:bg-white/10 hover:text-white px-8 py-3 rounded-lg">
                <Link to="/investors">Investor Enquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
