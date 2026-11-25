export default function Header() {
  return (
    <header className="site-header">
      <a className="header-logo" href="/" aria-label="DULFER Cement home">
        <img src="/dulferlogo.jpeg" alt="DULFER Cement" />
      </a>
      <nav aria-label="Main navigation" className="site-nav">
        <a href="#about">About DULFER</a>
        <a href="#approach">Our Approach</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-cta" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
    </header>
  );
}
