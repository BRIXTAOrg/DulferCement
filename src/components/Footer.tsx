// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="footer">
      <p className="tracked">
        Strong foundations
        <br />
        Brighter tomorrows
      </p>
      <p className="tracked footer__right">
        Portland Cement Type I
        <br />© {new Date().getFullYear()} dulfer. cement
      </p>
    </footer>
  );
}