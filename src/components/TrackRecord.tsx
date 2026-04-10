import { Award, Users, Cpu } from "lucide-react";

const metrics = [
  { value: "17+", label: "Deals Completed" },
  { value: "£152M", label: "Total Deal Value" },
];

const awards = [
  { icon: Award, label: "Customer Service Awards" },
  { icon: Users, label: "Investors in People" },
  { icon: Cpu, label: "Best New Technology" },
];

const TrackRecord = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mb-16">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">Track Record</p>
        <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-6">
          Proven Platform Performance
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Credentials earned across the AI Gurus platform — reflecting our commitment to disciplined acquisition, operational excellence, and innovation.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-px bg-border mb-px">
        {metrics.map((m) => (
          <div key={m.label} className="bg-background p-10 text-center">
            <p className="font-display font-bold text-4xl tracking-tight mb-1">{m.value}</p>
            <p className="text-muted-foreground text-sm">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-px bg-border">
        {awards.map((a) => (
          <div key={a.label} className="bg-background p-8 flex flex-col items-center text-center">
            <a.icon className="text-primary mb-4" size={28} />
            <p className="font-display font-bold text-sm tracking-tight">{a.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrackRecord;
