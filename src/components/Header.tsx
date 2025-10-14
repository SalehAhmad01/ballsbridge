import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-primary">
            <span className="font-heading text-xl font-bold text-primary-foreground">
              B
            </span>
          </div>
          <span className="font-heading text-xl font-bold uppercase tracking-tight">
            Ballsbridge <span className="text-accent">Construction</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive(item.href) ? "text-accent" : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/news">
            <Button
              variant="default"
              size="sm"
              className="ml-4 bg-accent hover:bg-accent-hover"
            >
              Blog / News
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-border md:hidden">
          <nav className="container flex flex-col space-y-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item.href) ? "text-accent" : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/news" onClick={() => setIsMenuOpen(false)}>
              <Button
                variant="default"
                className="bg-accent hover:bg-accent-hover"
              >
                Blog / News
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
