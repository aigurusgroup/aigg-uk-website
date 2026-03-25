import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Insights", href: "/insights" },
  { label: "Perspectives", href: "/perspectives" },
  { label: "Global", href: "/global" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-display font-bold text-lg tracking-tight text-foreground">AIGG</span>
          <span className="text-[10px] text-muted-foreground tracking-widest uppercase font-medium border-l border-border pl-3">United Kingdom</span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-xs font-medium tracking-wide uppercase transition-colors ${
                location.pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/platform">
            <Button variant="nav" size="sm">Explore Platform</Button>
          </Link>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border px-4 pb-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="block py-3 text-xs font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/platform" onClick={() => setIsOpen(false)}>
            <Button variant="nav" size="sm" className="mt-2 w-full">Explore Platform</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
