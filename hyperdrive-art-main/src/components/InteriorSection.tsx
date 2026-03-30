import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import interiorImg from "@/assets/interior.jpg";

const InteriorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="overflow-hidden"
        >
          <img src={interiorImg} alt="Luxury car interior" className="w-full h-auto hover:scale-105 transition-transform duration-700" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Craftsmanship</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            The Interior <span className="text-gold-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground font-body font-light text-lg leading-relaxed mb-6">
            Step into a world where luxury meets technology. Hand-stitched leather, ambient lighting that responds
            to your mood, and a cockpit designed around the driver. Every surface tells a story of meticulous craftsmanship.
          </p>
          <p className="text-muted-foreground font-body font-light leading-relaxed">
            The panoramic digital display seamlessly integrates navigation, entertainment, and vehicle dynamics into
            one immersive interface — controlled by gesture, voice, or touch.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InteriorSection;
