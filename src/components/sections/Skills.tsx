"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl" />
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
            Skills & Technologies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {skillCategories.map((cat, i) => {
            const IconComponent = iconMap[cat.icon];
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(i)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === i
                    ? "text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 bg-white/50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10"
                }`}
              >
                {activeCategory === i && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${cat.color}`}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {IconComponent && <IconComponent className="w-4 h-4" />}
                  {cat.title}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {skillCategories[activeCategory].skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 backdrop-blur-sm hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {skill.name}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-purple-500 dark:text-purple-400 font-medium">
                    {skill.level}%
                  </span>
                </div>

                {/* Modern Step-Meter Block Indicator */}
                <div className="flex items-center gap-1.5 mt-2">
                  {[1, 2, 3, 4, 5].map((step) => {
                    const threshold = step * 20;
                    const isActive = skill.level >= threshold - 5;
                    return (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0.15, scale: 0.8 }}
                        whileInView={{ 
                          opacity: isActive ? 1 : 0.15,
                          scale: 1
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 + step * 0.04 }}
                        className={`h-1.5 flex-1 rounded-sm transition-all duration-300 ${
                          isActive
                            ? `bg-gradient-to-r ${skillCategories[activeCategory].color}`
                            : "bg-gray-300 dark:bg-gray-800"
                        }`}
                      />
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
