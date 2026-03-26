import Layout from "@/components/Layout";

const markets = [
  {
    name: "United Kingdom",
    hq: "National",
    lead: "Chris Robinson",
    sectors: ["Professional Services", "Property Services", "Home Improvement", "Technology Services"],
    description: "AIGG United Kingdom operates as a core market with full capability across acquisitions, strategy, AI systems, and execution. Building scale across fragmented UK service verticals through disciplined buy-and-build.",
  },
  {
    name: "Australia",
    hq: "National",
    lead: "Lee Robinson",
    sectors: ["Accountancy", "Conveyancing / Legal", "Surveying", "RTO / Education"],
    description: "AIGG Australia operates as a core market with full capability across acquisitions, strategy, AI systems, and execution. Focused on acquiring and scaling service businesses across key sectors in the Australian economy.",
  },
];

const Markets = () => (
  <Layout>
    <section className="pt-28 pb-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Core Markets</p>
          <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">Multi-Market Platform</h1>
          <p className="text-muted-foreground leading-relaxed">
            AIGG operates across multiple core markets, each with independent capability, localised intellectual property, and full execution authority.
          </p>
        </div>
      </div>
    </section>

    <div className="h-px bg-border" />

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-muted-foreground max-w-3xl mb-16 leading-relaxed">
          Each market develops and retains its own intellectual property and operating expertise. There is no hierarchy between markets — each functions as a core component of the AIGG platform.
        </p>

        <div className="grid lg:grid-cols-2 gap-px bg-border">
          {markets.map((market) => (
            <div key={market.name} className="bg-card p-10 lg:p-12">
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground">Core Market</span>
              <h2 className="font-display font-bold text-3xl mt-2 mb-1 tracking-tight">{market.name}</h2>
              <p className="text-sm text-muted-foreground mb-6">{market.hq} · Led by {market.lead}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">{market.description}</p>
              <div>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground block mb-3">Target Sectors</span>
                <div className="flex flex-wrap gap-2">
                  {market.sectors.map((s) => (
                    <span key={s} className="text-[10px] font-medium tracking-wide uppercase text-muted-foreground border border-border px-2.5 py-1">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Markets;
