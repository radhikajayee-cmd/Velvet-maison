import { motion } from "framer-motion";

const CTASection = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(43_74%_49%_/_0.08),transparent_70%)]" />
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
      >
        Experience the Future of{" "}
        <span className="text-gold-gradient">Driving</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex gap-4 justify-center flex-wrap"
      >
        <button className="px-10 py-5 bg-primary text-primary-foreground font-body font-medium tracking-wider uppercase text-sm hover:opacity-90 transition-opacity">
          Book Test Drive
        </button>
        <a href="#models" className="px-10 py-5 gold-border text-foreground font-body font-medium tracking-wider uppercase text-sm hover:bg-primary/10 transition-colors">
          Explore Models
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
