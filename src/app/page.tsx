import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className="shared-bg-band">
      <section className="approach-strip" id="approach">
        <div className="approach-strip__heading">
          <p className="eyebrow eyebrow--dark">WHAT WE BRING TO THE TABLE</p>
          <h2>Built for the<br /><em>realities of the Northeast.</em></h2>
        </div>
        <div className="approach-strip__copy">
          <p>
            Across Northeast India, heavy monsoon rains, persistent humidity and
            seasonal flooding can expose buildings to moisture for long periods.
            Water can gradually move into concrete through tiny, connected pores
            in the material. This movement is known as capillary action.
          </p>
          <p>
            Over time, repeated moisture movement can contribute to dampness and
            deterioration. Where water reaches the steel reinforcement inside
            beams and columns, it can encourage corrosion. As the steel expands,
            it may cause cracks and surface damage, affecting the durability of
            the structure.
          </p>
          <p>
            DULFER brings a formulation approach focused on slowing the
            capillary movement of water through the hardened cement matrix.
            By helping limit how easily moisture travels through these tiny
            pathways, our aim is to support better resistance to water
            absorption and long-term concrete durability.
          </p>
          <p className="approach-strip__closing">
            Because a stronger structure begins below the surface. We believe
            a strong foundation is necessary for a stronger tomorrow.
          </p>
        </div>
      </section>
      <Contact />
    </div >
    </>
  );
}
