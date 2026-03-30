import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = ["Home", "Models", "Technology", "Performance", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-5">
        <span className="text-2xl font-display font-bold text-gold-gradient tracking-wider">
          VELOCITÀ
        </span>
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-body font-light tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
