import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const RevealVideo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4"
        >
          Exclusive Reveal
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold"
        >
          Witness the <span className="text-gold-gradient">Unveiling</span>
        </motion.h2>
      </div>

      <motion.div style={{ scale, opacity }} className="max-w-6xl mx-auto overflow-hidden">
        <div className="relative aspect-video bg-card border border-border overflow-hidden group">
          <video
            src="/videos/car-reveal.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 pointer-events-none border border-primary/20" />
        </div>
      </motion.div>
    </section>
  );
};

export default RevealVideo;
