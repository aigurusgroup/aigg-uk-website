import { Award, Users, Cpu, Quote } from "lucide-react";

const metrics = [
  { value: "25+", label: "Transactions Led" },
  { value: "£250M+", label: "Transaction Value Delivered" },
  { value: "20+", label: "Years Operator Experience" },
];

const awards = [
  { icon: Award, label: "Customer Service Awards" },
  { icon: Users, label: "Investors in People" },
  { icon: Cpu, label: "Best New Technology" },
];

const TrackRecord = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-3xl mb-16">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Track Record</p>
        <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
          A new platform. A proven team.
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Built by experienced operators with a track record of acquiring, scaling, and integrating service businesses across the UK and Australia.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-px bg-border mb-px">
        {metrics.map((m) => (
          <div key={m.label} className="bg-background p-10 text-center">
            <p className="font-display font-bold text-4xl tracking-tight mb-1">{m.value}</p>
            <p className="text-muted-foreground text-sm">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-px bg-border mb-12">
        {awards.map((a) => (
          <div key={a.label} className="bg-background p-8 flex flex-col items-center text-center">
            <a.icon className="text-primary mb-4" size={28} />
            <p className="font-display font-bold text-sm tracking-tight">{a.label}</p>
          </div>
        ))}
      </div>

      <blockquote className="text-center max-w-3xl mx-auto">
        <p className="text-primary italic text-base lg:text-lg leading-relaxed">
          "We combine hands-on operational experience with disciplined acquisition strategy — giving business owners confidence that their business is in the right hands."
        </p>
      </blockquote>
    </div>
  </section>
);

export default TrackRecord;
