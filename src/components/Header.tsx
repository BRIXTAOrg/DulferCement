// components/Header.tsx

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="wordmark wordmark--sm" aria-label="dulfer. cement home">
        <span className="wordmark__main">dulfer.</span>
        <span className="wordmark__sub">cement</span>
      </a>
      <p className="tracked header__tag">
        People
        <br />
        Materials
        <br />
        Progress
      </p>
    </header>
  );
}