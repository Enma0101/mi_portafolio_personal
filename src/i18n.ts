import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact"
      },
      hero: {
        tagline: "Full Stack Web Developer",
        title1: "Creating unique",
        title2: "digital experiences",
        description: "I am a computer engineer dedicated to the design and development of modern, fast, and scalable applications. Combining creativity with best development practices.",
        viewProjects: "View projects",
        contactMe: "Contact me"
      },
      skills: {
        title: "Skills &",
        highlight: "Tools",
        subtitle: "Technologies",
        categories: {
          frontend: "Frontend",
          backend: "Backend",
          devops: "DevOps",
          design: "Design"
        }
      },
      projects: {
        subtitle: "Portfolio",
        title: "My",
        highlight: "Projects",
        liveDemo: "Live Demo",
        code: "Code",
        list: {
          comics: {
            title: "Comics Website",
            description: "Digital reading website optimized for high-resolution multimedia content consumption."
          },
          posWarehouse: {
            title: "POS & Warehouse System",
            description: "Comprehensive POS and inventory management system with modern, scalable components."
          },
          pos: {
            title: "POS System",
            description: "Comprehensive POS system for sales and billing management."
          },
          f1: {
            title: "F1 Simulator",
            description: "Formula 1 racing simulator with retro graphics and realistic gameplay."
          },
          creativePortfolio: {
            title: "Creative Portfolio",
            description: "Personal website with animations, interactive gallery, and integrated blog."
          },
          mathApp: {
            title: "Math app",
            description: "Basic math operations application for children with a gamification system."
          }
        }
      },
      contact: {
        subtitle: "Contact",
        title: "Have a",
        highlight: "project?",
        location: "Maracaibo, Venezuela",
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        messagePlaceholder: "Your message...",
        sendButton: "Send message"
      },
      footer: {
        rights: "All rights reserved."
      }
    }
  },
  es: {
    translation: {
      nav: {
        about: "Sobre mí",
        skills: "Skills",
        projects: "Proyectos",
        contact: "Contacto"
      },
      hero: {
        tagline: "Desarrollador Web Full Stack",
        title1: "Creando experiencias",
        title2: "digitales únicas",
        description: "Soy un ing en informatica dedicado al diseño y desarrollo de aplicaciones informaticas modernas, rápidas y escalables. Combinando creatividad con las mejores prácticas de desarrollo.",
        viewProjects: "Ver proyectos",
        contactMe: "Contáctame"
      },
      skills: {
        title: "Skills &",
        highlight: "Herramientas",
        subtitle: "Tecnologías",
        categories: {
          frontend: "Frontend",
          backend: "Backend",
          devops: "DevOps",
          design: "Design"
        }
      },
      projects: {
        subtitle: "Portafolio",
        title: "Mis",
        highlight: "Proyectos",
        liveDemo: "Ver Demo",
        code: "Código",
        list: {
          comics: {
            title: "Comics Website",
            description: "Sitio web de lectura digital optimizado para el consumo de contenido multimedia de alta resolución."
          },
          posWarehouse: {
            title: "POS & Warehouse System",
            description: "Sistema integral POS y de gestión de inventarios, con componentes modernos y escalables."
          },
          pos: {
            title: "POS System",
            description: "Sistema integral POS para la gestión de ventas y facturacion."
          },
          f1: {
            title: "F1_Simulator",
            description: "Simulador de carreras de Formula 1 con graficos retros y jugabilidad realista."
          },
          creativePortfolio: {
            title: "Portafolio Creativo",
            description: "Sitio web personal con animaciones, galería interactiva y blog integrado."
          },
          mathApp: {
            title: "Math app",
            description: "Aplicación de operaciones matemáticas básicas para niños con sistema de gamificación."
          }
        }
      },
      contact: {
        subtitle: "Contacto",
        title: "¿Tienes un",
        highlight: "proyecto?",
        location: "Maracaibo, Venezuela",
        namePlaceholder: "Nombre",
        emailPlaceholder: "Email",
        messagePlaceholder: "Tu mensaje...",
        sendButton: "Enviar mensaje"
      },
      footer: {
        rights: "Todos los derechos reservados."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
