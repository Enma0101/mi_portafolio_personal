import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-16">
      {/* Decorative orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-display font-black tracking-tight uppercase mb-8 leading-[0.85] cursor-default select-none"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              scale: 1.01,
              textShadow: "6px 6px 0px var(--primary)",
              transition: { duration: 0.2 }
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              textShadow: "3px 3px 0px var(--primary)",
              WebkitTextStroke: "1px currentColor"
            }}
          >
            Enmanuel Fuenmayor
            <br />

          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 shadow-sm">
              {t("hero.tagline")}
            </span>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-display font-bold leading-tight mb-10 text-foreground/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {t("hero.title1")}
            <br />
            <span className="text-gradient">{t("hero.title2")}</span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-body leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-glow"
            >
              {t("hero.viewProjects")}
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
            >
              {t("hero.contactMe")}
            </a>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { icon: Github, href: "https://github.com/Enma0101", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/enmanuel-fuenmayor-b1b0143b3/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:enmanuel.aft@gmail.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:shadow-card-hover hover:text-primary transition-all duration-300"
                aria-label={s.label}
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
