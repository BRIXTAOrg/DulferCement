import FeatureIcon from "@/components/FeatureIcon";

const features = [
  {
    number: "01",
    title: "Made for everyday building",
    description:
      "A cement brand focused on the needs of real projects, from the first step to the finishing touches.",
  },
  {
    number: "02",
    title: "A thoughtful approach",
    description:
      "We believe good construction begins with understanding materials, workmanship and the details that matter.",
  },
  {
    number: "03",
    title: "Growing together",
    description:
      "We value the people who build, supply and shape the places we call home.",
  },
];

export default function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow eyebrow--dark">ABOUT DULFER</p>
        <h2 id="about-title">
          A solid start
          <br />
          <em>for what comes next.</em>
        </h2>
      </div>

      <div className="about-copy">
        <p className="lead">
          Every strong structure begins with the right foundation.
        </p>
        <p>
          DULFER is a cement brand with a practical outlook on construction. We
          believe in keeping things straightforward: understand the work, respect
          the materials and support the people who build.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((item, index) => (
          <article key={item.number} className="feature-card">
            <div className="feature-card__top">
              <span>{item.number}</span>
              <FeatureIcon index={index} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}