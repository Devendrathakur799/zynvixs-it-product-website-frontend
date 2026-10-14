
import { ArrowUpRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="container cta-inner">
        <div className="cta-topline">
          <span>HAVE A PROJECT IN MIND?</span>
          <span>LET'S MAKE IT HAPPEN.</span>
        </div>

        <h2>
          Let's build
          <br />
          something <span>meaningful.</span>
        </h2>

        <p>
          Tell us what you're working on. Let's explore how the right
          technology and expertise can help.
        </p>

        <a
          className="button button-light"
          href="mailto:atharv.posam@zynvixs.com?subject=Project%20Enquiry"
        >
          <Mail size={17} />
          Discuss your project
          <ArrowUpRight size={17} />
        </a>

        <span className="cta-decoration" aria-hidden="true">Z.</span>
      </div>
    </section>
  );
}
