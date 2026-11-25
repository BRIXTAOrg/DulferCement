import FeatureIcon from "@/components/FeatureIcon";
const steps = [
  {icon:"bag" as const,label:"THE BAG",title:"Protection during storage.",body:"A moisture-resistant bag helps protect cement while it is packed, transported and stored. That is packaging performance."},
  {icon:"layers" as const,label:"THE MATERIAL",title:"A different question begins.",body:"Once cement is mixed and used in mortar or concrete, water absorption depends on the hardened cementitious material—not on the bag it came in."},
  {icon:"research" as const,label:"THE RESEARCH",title:"Look closer at the structure.",body:"Published studies have explored how blended cement systems, material characteristics and pore structure can influence water absorption in mortar and concrete."}
];
export default function Technology() {
  return <section className="technology-section" id="technology"><div className="technology-inner">
    <div className="section-heading section-heading--light"><p className="eyebrow"><span/> THE THINKING BEHIND DULFER</p><h2>Not just how cement<br/><em>is packed. How it performs.</em></h2><p className="section-intro">There’s an important difference between keeping water out of a cement bag and understanding how water interacts with hardened mortar or concrete.</p></div>
    <div className="technology-grid">{steps.map((s,i)=><article className="technology-card" key={s.label}><div className="technology-card__meta"><FeatureIcon name={s.icon}/><span>0{i+1} / {s.label}</span></div><h3>{s.title}</h3><p>{s.body}</p></article>)}</div>
    <div className="technology-note"><span className="note-mark">i</span><p>DULFER’s product thinking is informed by published research on blended cement mortar and concrete. These studies report that mix composition and material characteristics can influence pore structure and measured water absorption. Actual performance depends on product formulation, mix design, curing and site practices.</p></div>
  </div></section>;
}
