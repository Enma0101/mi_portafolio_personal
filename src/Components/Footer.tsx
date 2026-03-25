import { Code2, Mail } from "lucide-react";
import { Github, Linkedin } from "./Icons";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-foreground font-display font-bold">
          <Code2 className="h-5 w-5 text-primary" />
          Portfolio
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: "https://github.com/Enma0101", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/enmanuel-fuenmayor-b1b0143b3/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:enmanuel.aft@gmail.com", label: "Email" },
          ].map((s, i) => (
            <a 
              key={i} 
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
              className="p-2 rounded-full glass-card hover:shadow-card-hover hover:text-primary transition-all duration-300 text-muted-foreground"
              aria-label={s.label}
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
