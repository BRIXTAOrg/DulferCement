import FeatureIcon from "@/components/FeatureIcon";
export default function Research() {
  return <section className="section research-section">
    <div className="research-visual"><div className="research-orb research-orb--one"/><div className="research-orb research-orb--two"/><div className="research-grid"/><div className="research-label"><FeatureIcon name="research"/> MATERIAL SCIENCE · APPLIED THINKING</div></div>
    <div className="research-copy"><p className="eyebrow eyebrow--dark"><span/> RESEARCH-LED PERSPECTIVE</p><h2>Small details.<br/><em>Structural thinking.</em></h2><p className="lead">Research into cementitious materials looks beyond the visible finish.</p><p>Published studies by Hsu, Chi and Huang examined how material characteristics in blended cement mortar and concrete relate to capillary pore structure and water absorption. That body of work is part of the wider scientific conversation informing DULFER’s approach.</p><p className="research-caveat">We keep the focus on the principle—not proprietary formulation details or laboratory figures.</p></div>
  </section>;
}
