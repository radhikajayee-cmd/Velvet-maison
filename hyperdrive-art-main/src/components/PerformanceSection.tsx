import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 2.5, suffix: "s", label: "0-100 km/h", prefix: "" },
  { value: 350, suffix: " km/h", label: "Top Speed", prefix: "" },
  { value: 1000, suffix: "+", label: "Horsepower", prefix: "" },
];

const AnimatedCounter = ({ value, suffix, prefix, inView }: { value: number; suffix: string; prefix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  const display = value % 1 !== 0 ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <span className="text-gold-gradient">
      {prefix}{display}{suffix}
    </span>
  );
};

const PerformanceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="performance" ref={ref} className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4"
        >
          Raw Power
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl font-bold mb-20"
        >
          Unmatched <span className="text-gold-gradient">Performance</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="text-6xl md:text-8xl font-display font-bold mb-4">
                <AnimatedCounter {...stat} inView={isInView} />
              </div>
              <div className="w-12 h-px bg-primary mb-4" />
              <p className="text-muted-foreground font-body tracking-[0.2em] uppercase text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
