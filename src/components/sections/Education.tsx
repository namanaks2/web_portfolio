"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-4">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Academic{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            My educational background and academic achievements.
          </p>
        </motion.div>

        {/* Education cards */}
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-3 rounded-xl bg-indigo-500/10 shrink-0">
                  <GraduationCap className="w-6 h-6 text-indigo-500" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-sm font-medium text-indigo-500 dark:text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-purple-500 dark:text-purple-400 font-medium text-sm mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-gray-400 mb-4">{edu.duration}</p>

                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {/* Coursework */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-gray-400" />
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Relevant Coursework
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 text-xs text-gray-600 dark:text-gray-400 hover:bg-indigo-500/10 hover:border-indigo-500/20 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
