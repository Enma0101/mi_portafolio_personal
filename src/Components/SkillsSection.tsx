import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const skills = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "PostgreSQL", level: 85, category: "Backend" },
  { name: "Python", level: 90, category: "Backend" },
  { name: "Django", level: 90, category: "Backend" },
  { name: "Docker", level: 80, category: "DevOps" },
  { name: "Git", level: 90, category: "DevOps" },
  { name: "Figma", level: 95, category: "Design" },
];

const SkillsSection = () => {
  const { t } = useTranslation();

  const categories = [
    t("skills.categories.frontend"),
    t("skills.categories.backend"),
    t("skills.categories.devops"),
    t("skills.categories.design"),
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-accent/10 text-accent border border-accent/20 mb-4">
            {t("skills.subtitle")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            {t("skills.title")} <span className="text-gradient">{t("skills.highlight")}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat}
              className="glass-card rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-primary mb-5">{cat}</h3>
              <div className="space-y-4">
                {skills
                  .filter((s) => t(`skills.categories.${s.category.toLowerCase()}`) === cat)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
