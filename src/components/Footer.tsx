import SocialIcon from "@/components/SocialIcon";

const socials = [
  { name: "facebook" as const, label: "Facebook", url: "https://www.facebook.com/profile.php?id=61593917714723" },
  { name: "instagram" as const, label: "Instagram", url: "https://www.instagram.com/dulfer.cement/" },
  { name: "linkedin" as const, label: "LinkedIn", url: "https://www.linkedin.com/company/dulfer-cements/" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="footer-logo" href="/" aria-label="DULFER Cement home">
            <img src="/dulferlogo.jpeg" alt="DULFER Cement" />
          </a>
          <p>Cement for the foundations of everyday life.</p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <a href="#about">About DULFER</a>
          <a href="#approach">Our Approach</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-column">
          <h2>Get in touch</h2>
          <a href="mailto:contact@dulfercement.co.in">contact@dulfercement.co.in</a>
          <a href="tel:7635874931">7635874931</a>
          <a href="https://wa.me/917635874931" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        <div className="footer-column footer-social">
          <h2>Follow DULFER</h2>
          <div className="social-list">
            {socials.map((social) => (
              <a key={social.name} href={social.url} aria-label={social.label} title={social.label} target="_blank" rel="noopener noreferrer">
                <SocialIcon name={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 DULFER Cement. All rights reserved.</span>
        <div><a href="/terms">Terms</a><a href="/privacy">Privacy</a></div>
        <span>Made by <a href="https://brixta.site/" target="_blank" rel="noopener noreferrer">Brixta</a></span>
      </div>
    </footer>
  );
}
