"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Code2, GitBranch } from "lucide-react";
import { experiences } from "@/data/experience";

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Users,
  Code2,
  GitBranch,
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "var(--heading-color)" }}>
            My{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p style={{ color: "var(--text-muted)" }} className="max-w-2xl mx-auto">
            A timeline of my professional experiences and leadership roles.
          </p>
        </motion.div>

        {/* Horizontal Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {experiences.map((exp, i) => {
            const Icon = iconMap[exp.icon] || Briefcase;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group shadow-sm"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <div>
                  {/* Type badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-purple-500/10">
                      <Icon className="w-4 h-4 text-purple-500" />
                    </div>
                    <span className="text-xs font-medium text-purple-500 uppercase tracking-wider">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-1" style={{ color: "var(--heading-color)" }}>
                    {exp.title}
                  </h3>
                  {exp.company && (
                    <p className="text-sm text-purple-500 font-medium mb-1">
                      {exp.company}
                    </p>
                  )}
                  <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>{exp.duration}</p>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, j) => (
                      <li
                        key={j}
                        className="text-sm flex items-start gap-2"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-4" style={{ borderTop: "1px solid var(--card-border)" }}>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-xs"
                      style={{
                        backgroundColor: "var(--glass-bg)",
                        border: "1px solid var(--glass-border)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
