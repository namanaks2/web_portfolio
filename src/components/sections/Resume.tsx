"use client";

import { motion } from "framer-motion";
import { Download, FileText, Award, ExternalLink } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-sm font-medium mb-4">
            Resume
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my skills, experience, and education.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Resume preview card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="group relative p-8 md:p-10 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 text-center"
          >
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

            {/* Document icon */}
            <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 mb-6">
              <FileText className="w-12 h-12 text-cyan-500" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Naman Gupta — Resume
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
              Download my latest resume to learn more about my skills,
              experience, education, and the projects I&apos;ve built.
            </p>

            {/* Download button */}
            <motion.a
              href="/Naman-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>

            {/* Info badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                PDF Format
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                Updated 2025
              </span>
              <span className="flex items-center gap-1.5">
                <ExternalLink className="w-3.5 h-3.5" />
                ATS Friendly
              </span>
            </div>
          </motion.div>

          {/* Quick highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              { icon: "💼", title: "Experience", desc: "2+ years in web development and freelancing" },
              { icon: "🎓", title: "Education", desc: "B.Tech CSE — 8.2 CGPA" },
              { icon: "🏆", title: "Achievements", desc: "8+ certifications & hackathon wins" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200/30 dark:border-white/5 text-center"
              >
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

