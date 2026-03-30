import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import featuredCar from "@/assets/featured-car.jpg";

const FeaturedModel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hover, setHover] = useState(false);

  return (
    <section id="models" ref={ref} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="overflow-hidden">
            <motion.img
              src={featuredCar}
              alt="Hyper GT luxury car"
              className="w-full h-auto"
              animate={{
                scale: hover ? 1.05 : 1,
                rotateY: hover ? 5 : 0,
                rotateX: hover ? -2 : 0,
              }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/20 -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Featured Model</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Hyper <span className="text-gold-gradient">GT</span>
          </h2>
          <p className="text-muted-foreground font-body font-light text-lg leading-relaxed mb-10">
            A masterpiece of power and precision designed for the next generation of performance.
            Every curve sculpted by wind, every detail crafted with obsession.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="px-8 py-4 bg-primary text-primary-foreground font-body font-medium tracking-wider uppercase text-sm hover:opacity-90 transition-opacity">
              View Details
            </button>
            <button className="px-8 py-4 gold-border text-foreground font-body font-medium tracking-wider uppercase text-sm hover:bg-primary/10 transition-colors">
              Configure
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedModel;
