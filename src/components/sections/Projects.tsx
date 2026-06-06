"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projects } from "@/data/projects";

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
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
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "var(--heading-color)" }}>
            Featured{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p style={{ color: "var(--text-muted)" }} className="max-w-2xl mx-auto">
            A collection of projects showcasing my development skills and creative problem-solving.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                style={{
                  transform:
                    hoveredId === project.id
                      ? "perspective(1000px) rotateY(2deg) rotateX(-2deg)"
                      : "perspective(1000px) rotateY(0deg) rotateX(0deg)",
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                }}
                className="h-full p-6 rounded-2xl backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500 flex flex-col relative overflow-hidden"
              >
                {/* Spotlight effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Project image placeholder */}
                <div className="relative h-40 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 mb-5 overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white/30">
                      {project.title
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 3)}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Category badge */}
                  <span className="inline-block w-fit px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-500 text-xs font-medium mb-2">
                    {project.category}
                  </span>

                  <h3 className="font-bold mb-2" style={{ color: "var(--heading-color)" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4 flex-1 line-clamp-2" style={{ color: "var(--text-muted)" }}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
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
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-xs" style={{ color: "var(--text-muted)" }}>
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors flex-1 justify-center"
                      style={{
                        backgroundColor: "var(--glass-bg)",
                        border: "1px solid var(--glass-border)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all flex-1 justify-center"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
