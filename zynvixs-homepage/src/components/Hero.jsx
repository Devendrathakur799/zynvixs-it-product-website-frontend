
import { ArrowDownRight, ArrowUpRight, MoveUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="status-dot" />
          TECHNOLOGY & DIGITAL SOLUTIONS
        </div>

        <h1>
          Good ideas.
          <br />
          <span>Better</span> execution.
        </h1>

        <p className="hero-description">
          We help ambitious businesses build better digital products,
          find the right technology talent, and turn complex challenges
          into practical solutions.
        </p>

        <div className="hero-actions">
          <a className="button button-dark" href="#services">
            Explore our services <ArrowUpRight size={17} />
          </a>
          <a className="text-link" href="#about">
            Get to know us <ArrowDownRight size={17} />
          </a>
        </div>

        <div className="hero-note">
          <span className="note-line" />
          <span>INNOVATE. AUTOMATE. ELEVATE.</span>
        </div>
      </div>

      <div className="hero-art" aria-label="Abstract geometric brand artwork">
        <div className="art-topline">
          <span>IDEAS INTO IMPACT</span>
          <span>01 / 04</span>
        </div>

        <div className="art-canvas">
          <div className="art-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="art-square art-square-back" />
          <div className="art-square art-square-front">
            <span className="square-letter">Z</span>
          </div>

          <div className="art-accent" />
          <div className="art-label art-label-top">THINK CLEARLY.</div>
          <div className="art-label art-label-bottom">BUILD BOLDLY.</div>
          <MoveUpRight className="art-arrow" size={27} strokeWidth={1.5} />

          <div className="art-index">Z / 26</div>
        </div>

        <div className="art-caption">
          <span>STRATEGY MEETS TECHNOLOGY</span>
          <span className="caption-mark">↗</span>
        </div>
      </div>
    </section>
  );
}
