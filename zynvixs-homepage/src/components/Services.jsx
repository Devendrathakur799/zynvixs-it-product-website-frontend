
import {
  ArrowUpRight,
  Users,
  Workflow,
  Code2,
  Box,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "IT Staffing",
    description:
      "The right people for the right roles. Build stronger teams with technology talent that fits your goals.",
    icon: Users,
    tag: "PEOPLE & TALENT",
  },
  {
    number: "02",
    title: "AI & Automation",
    description:
      "Simplify repetitive work, streamline operations and create smarter business workflows.",
    icon: Workflow,
    tag: "SMARTER OPERATIONS",
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "Thoughtful websites and digital products built for real users, business needs and growth.",
    icon: Code2,
    tag: "DIGITAL PRODUCTS",
  },
  {
    number: "04",
    title: "3D & Game Development",
    description:
      "Bring ideas to life through immersive environments, interactive experiences and 3D design.",
    icon: Box,
    tag: "IMMERSIVE EXPERIENCES",
  },
];

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">WHAT WE DO <span>— 01</span></div>
            <h2>
              The right expertise.
              <br />
              <span>For what comes next.</span>
            </h2>
          </div>
          <p>
            From the people you hire to the products you launch,
            we help move your business in the right direction.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <a
                className="service-card"
                href="#contact"
                key={service.number}
              >
                <div className="service-top">
                  <span className="service-number">{service.number}</span>
                  <span className="service-icon">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                </div>

                <div className="service-content">
                  <span className="service-tag">{service.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="service-bottom">
                  <span>Explore service</span>
                  <ArrowUpRight size={18} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
