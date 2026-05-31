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
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-300 text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
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
                className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  {/* Type badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-purple-500/10">
                      <Icon className="w-4 h-4 text-purple-500" />
                    </div>
                    <span className="text-xs font-medium text-purple-500 dark:text-purple-400 uppercase tracking-wider">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  {exp.company && (
                    <p className="text-sm text-purple-500 dark:text-purple-400 font-medium mb-1">
                      {exp.company}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mb-4">{exp.duration}</p>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, j) => (
                      <li
                        key={j}
                        className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 text-xs text-gray-500 dark:text-gray-400"
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
