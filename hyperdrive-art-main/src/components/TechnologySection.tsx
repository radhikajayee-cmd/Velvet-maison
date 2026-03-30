import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Brain, Wind } from "lucide-react";

const features = [
  { icon: Zap, title: "Electric Performance", description: "Instant torque delivery with our next-gen powertrain. Zero compromise between sustainability and raw power." },
  { icon: Brain, title: "AI Driving System", description: "Machine learning algorithms that adapt to your driving style, optimizing every journey for maximum performance and safety." },
  { icon: Wind, title: "Advanced Aerodynamics", description: "Active aero surfaces sculpted in the wind tunnel. Every curve reduces drag while increasing downforce." },
];

const TechnologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technology" ref={ref} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Innovation</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Pioneering <span className="text-gold-gradient">Technology</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group p-8 bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_hsl(43_74%_49%_/_0.1)]"
            >
              <feat.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-2xl font-semibold mb-4">{feat.title}</h3>
              <p className="text-muted-foreground font-body font-light leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
