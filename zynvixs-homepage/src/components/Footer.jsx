
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a className="brand footer-logo" href="#home">
            <span className="brand-mark">Z.</span>
            <span>ZYNVIXS<span className="brand-dot">®</span></span>
          </a>
          <p>
            Innovate. Automate. Elevate.
            <br />
            Technology built around business.
          </p>
        </div>

        <div className="footer-column">
          <span className="footer-heading">EXPLORE</span>
          <a href="#services">Our services</a>
          <a href="#about">About us</a>
          <a href="#contact">Get in touch</a>
        </div>

        <div className="footer-column">
          <span className="footer-heading">CONNECT</span>
          <a
            href="https://www.linkedin.com/company/zynvixs"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram <ArrowUpRight size={14} />
          </a>
          <a href="mailto:atharv.posam@zynvixs.com">
            Email us <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} ZYNVIXS. All rights reserved.</span>
        <a href="#home">BACK TO TOP ↑</a>
        <span>USA / INDIA</span>
      </div>
    </footer>
  );
}
