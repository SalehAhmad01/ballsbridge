import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about#team" },
      { name: "Careers", href: "/careers" },
      { name: "News & Insights", href: "/blog" },
    ],
    services: [
      { name: "Commercial Construction", href: "/services#commercial" },
      { name: "Residential Construction", href: "/services#residential" },
      { name: "Renovation", href: "/services#renovation" },
      { name: "Project Management", href: "/services#management" },
    ],
    resources: [
      { name: "Projects", href: "/projects" },
      { name: "Case Studies", href: "/projects#case-studies" },
      { name: "Safety & Certifications", href: "/about#safety" },
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-accent">
                <span className="font-heading text-xl font-bold text-accent-foreground">
                  B
                </span>
              </div>
              <span className="font-heading text-lg font-bold uppercase tracking-tight">
                Ballsbridge
              </span>
            </div>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Building landmarks across Nigeria with safety-first,
              budget-focused, quality-guaranteed construction services.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-white/70 hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-accent transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-accent" />
                <span>37 Kwame Nkrumah Crescent Asokoro, Abuja.</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-accent" />
                <a
                  href="tel:+234803 376 9333"
                  className="hover:text-accent transition-colors"
                >
                  +234 803 376 9333
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-accent" />
                <a
                  href="mailto:ballsbridgecontractorsltd@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  ballsbridgecontractorsltd@gmail.com

                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© {currentYear} Ballsbridge Construction. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link
              to="/accessibility"
              className="hover:text-accent transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
