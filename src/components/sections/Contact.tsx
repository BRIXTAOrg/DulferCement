const phone = "7635874931";
const whatsappHref = `https://wa.me/91${phone}?text=${encodeURIComponent("Hello DULFER team, I would like to know more about your cement products.")}`;

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2>Let’s build<br /><em>something lasting.</em></h2>
          <p className="contact-intro">For Product Information, Dealer Enquiries or any other questions, get in touch with the DULFER team.</p>
        </div>
        <div className="contact-panel">
          <span className="contact-index">WE’RE HERE TO HELP</span>
          <h3>Talk to<br />our team.</h3>
          <a className="button button--light button--wide" href="mailto:contact@dulfercement.co.in">Email us <span>↗</span></a>
          <a className="button button--light button--wide contact-method" href={`tel:${phone}`}>Call us <span>↗</span></a>
          <a className="button button--light button--wide contact-method" href={whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp us <span>↗</span></a>
        </div>
      </div>
    </section>
  );
}
