export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div
        className="hero__image"
        role="img"
        aria-label="Macro view of water droplets resting on a dark textured cement surface"
      />
      <div className="hero__shade" />
      <div className="hero__content">
        <div className="hero__accent" aria-hidden="true" />
        <h1 id="hero-title" className="hero__title">
          <span className="hero__title-light">A microscopic difference.</span>
          <br />
          <strong>A meaningful ambition.</strong>
        </h1>
        <p className="hero__subtitle">
          DEVELOPED AROUND THE SCIENCE OF WATER ABSORPTION.
        </p>
        <div className="hero__actions">
          <a className="button button--light" href="#about">
            Discover DULFER <span>↘</span>
          </a>
          <a className="text-link" href="#contact">
            Get in touch ↗
          </a>
        </div>
      </div>
    </section>
  );
}