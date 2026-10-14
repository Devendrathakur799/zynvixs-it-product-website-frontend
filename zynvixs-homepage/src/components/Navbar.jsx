
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#home" aria-label="ZYNVIXS home">
          <span className="brand-mark">Z.</span>
          <span>ZYNVIXS<span className="brand-dot">®</span></span>
        </a>

        <nav className={`nav-links ${open ? "nav-open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="nav-mobile-cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Let's talk <ArrowUpRight size={16} />
          </a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let's talk <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  );
}
