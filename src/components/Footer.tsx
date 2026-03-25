import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border section-padding py-16">
    <div className="container-wide">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <span className="font-display text-xl text-foreground">AIGG</span>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
            AI-enabled intelligence and acquisition platform operating across multiple regions.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground mb-4">Platform</h4>
          <div className="space-y-3">
            <Link to="/platform" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Intelligence Engine</Link>
            <Link to="/insights" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Insights</Link>
            <Link to="/perspectives" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Perspectives</Link>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground mb-4">Regions</h4>
          <div className="space-y-3">
            <span className="block text-sm text-foreground/70">United Kingdom</span>
            <span className="block text-sm text-foreground/70">Australia</span>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} AI Gurus Group. All rights reserved.</p>
        <p className="text-xs text-muted-foreground">Global Intelligence Platform</p>
      </div>
    </div>
  </footer>
);

export default Footer;
