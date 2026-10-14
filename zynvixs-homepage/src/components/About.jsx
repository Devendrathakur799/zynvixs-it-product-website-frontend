
import { ArrowUpRight, Check } from "lucide-react";

const benefits = [
  "Solutions shaped around real business needs",
  "A practical approach from idea to execution",
  "Technology choices that support long-term growth",
];

export default function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="container about-layout">
        <div className="about-left">
          <div className="eyebrow">WHY ZYNVIXS <span>— 02</span></div>
          <h2>
            Technology is a tool.
            <br />
            <span>Progress is the point.</span>
          </h2>
        </div>

        <div className="about-right">
          <p className="about-lead">
            Good technology should make business simpler, not more
            complicated. We focus on understanding the problem first
            and building a solution that makes sense.
          </p>

          <div className="benefit-list">
            {benefits.map((benefit) => (
              <div className="benefit-item" key={benefit}>
                <span className="benefit-check">
                  <Check size={15} />
                </span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <a className="text-link about-link" href="#contact">
            Start a conversation <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      <div className="container approach-strip">
        <div className="approach-item">
          <span className="approach-num">01</span>
          <div>
            <h3>Understand</h3>
            <p>Start with your goals and challenges.</p>
          </div>
        </div>
        <div className="approach-item">
          <span className="approach-num">02</span>
          <div>
            <h3>Build</h3>
            <p>Choose the right people and technology.</p>
          </div>
        </div>
        <div className="approach-item">
          <span className="approach-num">03</span>
          <div>
            <h3>Improve</h3>
            <p>Keep refining what works.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
