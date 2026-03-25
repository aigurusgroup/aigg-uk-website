import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Platform", href: "/platform" },
  { label: "Insights", href: "/insights" },
  { label: "Perspectives", href: "/perspectives" },
  { label: "Global Presence", href: "/global" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-wide flex items-center justify-between h-16 px-6 md:px-12 lg:px-24 xl:px-32">
        <Link to="/" className="font-display text-xl tracking-tight text-foreground">
          AIGG
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-xs font-body font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block py-3 text-xs font-body font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
