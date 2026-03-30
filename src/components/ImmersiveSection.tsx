import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const ImmersiveSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-24 -bottom-24">
        <video src="/videos/immersive-bg.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover brightness-110 contrast-110 saturate-110" />
        <div className="absolute inset-0 bg-background/60" />
      </motion.div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-center"
        >
          Power Meets <span className="text-gold-gradient">Precision</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default ImmersiveSection;
