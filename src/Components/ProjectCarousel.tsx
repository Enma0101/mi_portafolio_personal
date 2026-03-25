import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Github } from "./Icons";

interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  stacks: string[];
}

const projects: Project[] = [
  {
    title: "Comics Website",
    description: "Sitio web de lectura digital optimizado para el consumo de contenido multimedia de alta resolución.",
    image: "https://rurmwkgzzglkfcsiwtol.supabase.co/storage/v1/object/sign/ojgxeeigowcyuwwwgvkt/Group%201.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yMzJhY2Q5Yy1hOTlmLTQ3MzYtOWEyNS1jMjExNzcxYTNlOWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvamd4ZWVpZ293Y3l1d3d3Z3ZrdC9Hcm91cCAxLnBuZyIsImlhdCI6MTc3NDQzNTMzNSwiZXhwIjoyMDg5Nzk1MzM1fQ.XtA9kDWhdKj8Ass8g6mW2kPkLzgFw_6BlE04REr4iJQ",
    liveUrl: "https://comicsspider.vercel.app/",
    repoUrl: "https://github.com/Enma0101/Spiderverse_page",
    stacks: ["React", "Node.js", "Supabase", "Tailwind CSS"],
  },
  {
    title: "POS & Warehouse System",
    description: "Sistema integral POS y de gestión de inventarios, con componentes modernos y escalables.",
    image: "https://rurmwkgzzglkfcsiwtol.supabase.co/storage/v1/object/sign/ojgxeeigowcyuwwwgvkt/Group%201%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yMzJhY2Q5Yy1hOTlmLTQ3MzYtOWEyNS1jMjExNzcxYTNlOWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvamd4ZWVpZ293Y3l1d3d3Z3ZrdC9Hcm91cCAxICgxKS5wbmciLCJpYXQiOjE3NzQ0MzYzMTEsImV4cCI6MjA4OTc5NjMxMX0.sCHopaKcKD8WM8yYwa_cl5O4BcxW3jkDKcLneeatJ50",
    liveUrl: "https://moto-chess.vercel.app/",
    repoUrl: "https://github.com/Enma0101/MotoChess",
    stacks: ["React", "Supabase", "Tailwind CSS"],
  },

  {
    title: "POS System",
    description: "Sistema integral POS para la gestión de ventas y facturacion.",
    image: "https://rurmwkgzzglkfcsiwtol.supabase.co/storage/v1/object/sign/ojgxeeigowcyuwwwgvkt/Group%202.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yMzJhY2Q5Yy1hOTlmLTQ3MzYtOWEyNS1jMjExNzcxYTNlOWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvamd4ZWVpZ293Y3l1d3d3Z3ZrdC9Hcm91cCAyLnBuZyIsImlhdCI6MTc3NDQzOTgyNSwiZXhwIjoyMDg5Nzk5ODI1fQ.M2LgE86bB44fw67lTYlFLhXPmY3aIayIT2Vij5Pi56I",
    liveUrl: "https://frontend-supabase-pos-marateta-puhc.vercel.app/",
    repoUrl: "https://github.com/Enma0101/PosMarateta",
    stacks: ["React", "Supabase", "Tailwind CSS"],
  },
  {
    title: "F1_Simulator",
    description: "Simulador de carreras de Formula 1 con graficos retros y jugabilidad realista.",
    image: "https://rurmwkgzzglkfcsiwtol.supabase.co/storage/v1/object/sign/ojgxeeigowcyuwwwgvkt/Group%205%20(3).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yMzJhY2Q5Yy1hOTlmLTQ3MzYtOWEyNS1jMjExNzcxYTNlOWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvamd4ZWVpZ293Y3l1d3d3Z3ZrdC9Hcm91cCA1ICgzKS5wbmciLCJpYXQiOjE3NzQ0MzcxNTgsImV4cCI6MjA4OTc5NzE1OH0.oE2sHRp2i7vF0xwHaXVKzCaZkOItYXAEeDHCVu9L3Qw",
    repoUrl: "https://github.com/Enma0101/Formula-1_Simulator",
    stacks: ["java"],
  },
  {
    title: "Portafolio Creativo",
    description: "Sitio web personal con animaciones, galería interactiva y blog integrado.",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=500&fit=crop",
    repoUrl: "https://github.com/Enma0101/Protafolio",
    stacks: ["React", "Tailwind CSS", "Python"],
  },
  {
    title: "Math app",
    description: "Aplicación de operaciones matemáticas básicas para niños con sistema de gamificación.",
    image: "https://rurmwkgzzglkfcsiwtol.supabase.co/storage/v1/object/sign/ojgxeeigowcyuwwwgvkt/Group%201%20(2).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yMzJhY2Q5Yy1hOTlmLTQ3MzYtOWEyNS1jMjExNzcxYTNlOWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJvamd4ZWVpZ293Y3l1d3d3Z3ZrdC9Hcm91cCAxICgyKS5wbmciLCJpYXQiOjE3NzQ0Mzg5MDEsImV4cCI6MjA4OTc5ODkwMX0.11gA6I-ZuEF8DgS8ycwMAVTTvzOS_N6OIfPYnYONQ4k",
    liveUrl: "https://grupo2pw.miuni.kids/login",
    repoUrl: "https://github.com/Enma0101/math_app",
    stacks: ["React", "Tailwind CSS", "PostgreSQL", "PHP"],
  },
];

const ProjectCarousel = () => {
  const [current, setCurrent] = useState(0);

  const navigate = (dir: number) => {
    setCurrent((prev) => (prev + dir + projects.length) % projects.length);
  };

  const getCardStyle = (index: number) => {
    const diff = index - current;
    const normalized = ((diff % projects.length) + projects.length) % projects.length;
    const centered = normalized > projects.length / 2 ? normalized - projects.length : normalized;

    return {
      x: centered * 280,
      z: -Math.abs(centered) * 150,
      rotateY: centered * -15,
      scale: 1 - Math.abs(centered) * 0.15,
      opacity: Math.abs(centered) > 2 ? 0 : 1 - Math.abs(centered) * 0.3,
    };
  };

  return (
    <section id="projects" className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-secondary/10 text-secondary border border-secondary/20 mb-4">
            Portafolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Mis <span className="text-gradient">Proyectos</span>
          </h2>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative h-[520px] sm:h-[540px] flex items-center justify-center" style={{ perspective: "1200px" }}>
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => {
              const style = getCardStyle(index);
              const isActive = index === current;

              return (
                <motion.div
                  key={project.title}
                  className="absolute w-[300px] sm:w-[360px]"
                  animate={{
                    x: style.x,
                    rotateY: style.rotateY,
                    scale: style.scale,
                    opacity: style.opacity,
                    zIndex: isActive ? 10 : 5 - Math.abs(index - current),
                  }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className={`rounded-2xl overflow-hidden transition-shadow duration-500 ${isActive ? "shadow-card-hover" : "shadow-card"
                      } glass-card`}
                  >
                    {/* Image */}
                    <div className="relative h-48 sm:h-52 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/10 dark:bg-transparent pointer-events-none mix-blend-multiply dark:mix-blend-normal" />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-display font-bold text-lg text-foreground mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{project.description}</p>

                      {/* Stacks */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.stacks.map((stack) => (
                          <span
                            key={stack}
                            className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-primary/10 text-primary"
                          >
                            {stack}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary hover:text-primary transition-colors"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Live Demo
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Github className="h-3.5 w-3.5" />
                            Código
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => navigate(-1)}
            className="p-3 rounded-full glass-card hover:shadow-card-hover transition-all duration-300 hover:text-primary cursor-pointer"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-gradient-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => navigate(1)}
            className="p-3 rounded-full glass-card hover:shadow-card-hover transition-all duration-300 hover:text-primary cursor-pointer"
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
