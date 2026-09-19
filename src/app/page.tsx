export default function Home() {
  return (
    <section className="hero">
      <h1 className="wordmark wordmark--xl">
        <span className="wordmark__main">dulfer.</span>
        <span className="wordmark__sub">cement</span>
      </h1>

      <hr className="rule" />

      <p className="soon" aria-label="Building soon">
        Building soon
        <span className="dots" aria-hidden="true">
          <i>.</i>
          <i>.</i>
          <i>.</i>
        </span>
      </p>

      <p className="tracked hero__line">
        Built for a
        <br />
        stronger tomorrow
      </p>
    </section>
  );
}