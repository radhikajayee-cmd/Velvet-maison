import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="px-6 md:px-12 lg:px-24 py-16 bg-secondary border-t border-border">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
      <div>
        <span className="text-2xl font-display font-bold text-gold-gradient tracking-wider">VELOCITÀ</span>
        <p className="text-muted-foreground font-body font-light mt-4 text-sm leading-relaxed">
          Engineering the future of performance since 2024.
        </p>
      </div>

      <div>
        <h4 className="font-body font-medium tracking-[0.2em] uppercase text-sm mb-4">Navigate</h4>
        <div className="flex flex-col gap-3">
          {["Home", "Models", "Technology", "Performance"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-body font-medium tracking-[0.2em] uppercase text-sm mb-4">Connect</h4>
        <div className="flex gap-4">
          {[Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-body font-medium tracking-[0.2em] uppercase text-sm mb-4">Contact</h4>
        <p className="text-muted-foreground text-sm">Radhika</p>
        <a href="mailto:radhikajayee@gmail.com" className="text-primary text-sm hover:underline">
          radhikajayee@gmail.com
        </a>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border text-center">
      <p className="text-muted-foreground text-xs font-body">
        © 2026 VELOCITÀ. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
