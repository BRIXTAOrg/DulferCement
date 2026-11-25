const values = [
  { number: "01", title: "Made for everyday building", body: "A cement brand focused on the needs of real projects, from the first step to the finishing touches." },
  { number: "02", title: "A thoughtful approach", body: "We believe good construction begins with understanding materials, workmanship and the details that matter." },
  { number: "03", title: "Growing together", body: "We value the people who build, supply and shape the places we call home." },
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <p className="eyebrow eyebrow--dark">ABOUT DULFER</p>
        <h2>A solid start<br /><em>for what comes next.</em></h2>
      </div>
      <div className="about-copy">
        <p className="lead">Every strong structure begins with the right foundation.</p>
        <p>DULFER is a cement brand with a practical outlook on construction. We believe in keeping things straightforward: understand the work, respect the materials and support the people who build.</p>
      </div>
      <div className="feature-grid">
        {values.map((value) => (
          <article className="feature-card" key={value.number}>
            <div className="feature-card__top"><span>{value.number}</span></div>
            <h3>{value.title}</h3>
            <p>{value.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
