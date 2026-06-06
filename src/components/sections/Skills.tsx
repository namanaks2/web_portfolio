"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Palette, BarChart3, Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Palette,
  BarChart3,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{
              backgroundColor: "var(--badge-bg)",
              border: "1px solid var(--badge-border)",
              color: "var(--badge-text)",
            }}
          >
            Skills & Technologies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "var(--heading-color)" }}>
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p style={{ color: "var(--text-muted)" }} className="max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Bento Grid Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {skillCategories.map((cat, catIndex) => {
            const IconComponent = iconMap[cat.icon];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="group relative rounded-2xl backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/5"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute -inset-px bg-gradient-to-br ${cat.color} opacity-[0.04] rounded-2xl`} />
                </div>

                {/* Category header */}
                <div className="relative px-6 pt-6 pb-4 flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.color} shadow-lg`}>
                    {IconComponent && <IconComponent className="w-5 h-5 text-white" />}
                  </div>
                  <h3 className="font-bold text-lg" style={{ color: "var(--heading-color)" }}>{cat.title}</h3>
                </div>

                {/* Skills as tags/chips */}
                <div className="px-6 pb-6 flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.08 + i * 0.04 }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium hover:bg-purple-500/10 hover:border-purple-500/20 hover:text-purple-500 transition-all duration-300 cursor-default"
                      style={{
                        backgroundColor: "var(--glass-bg)",
                        border: "1px solid var(--glass-border)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span className="text-base">{skill.icon}</span>
                      {skill.name}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom gradient line */}
                <div className={`h-px w-full bg-gradient-to-r ${cat.color} opacity-20`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
