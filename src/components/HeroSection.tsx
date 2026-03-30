import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-110 contrast-110 saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 flex flex-col justify-end h-full section-padding pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <h1 className="font-body text-2xl md:text-4xl lg:text-5xl font-extralight tracking-[0.15em] uppercase leading-tight mb-4 max-w-3xl">
            Welcome to{" "}
            <span className="text-gold-gradient font-light">Velvet Maison</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground font-body font-light tracking-widest uppercase max-w-md mb-8">
            A new era of luxury, elegance, and sophisticated design.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#models" className="px-6 py-3 bg-primary text-primary-foreground font-body font-light tracking-[0.2em] uppercase text-xs hover:opacity-90 transition-opacity">
              Explore Collection
            </a>
            <a href="#technology" className="px-6 py-3 gold-border text-foreground font-body font-light tracking-[0.2em] uppercase text-xs hover:bg-primary/10 transition-colors">
              Discover Our Story
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
