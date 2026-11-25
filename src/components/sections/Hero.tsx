export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__image" role="img" aria-label="A contemporary home and its surroundings" />
      <div className="hero__shade" />
      <div className="hero__content">
        <p className="eyebrow">DULFER CEMENT</p>
        <h1 id="hero-title">Built on strength.<br /><em>Made for tomorrow.</em></h1>
        <p className="hero__intro">A straightforward approach to cement, construction and the foundations we build our lives on.</p>
        <div className="hero__actions">
          <a className="button button--light" href="#about">Discover DULFER <span>↘</span></a>
          <a className="text-link" href="#contact">Get in touch ↗</a>
        </div>
      </div>
    </section>
  );
}
