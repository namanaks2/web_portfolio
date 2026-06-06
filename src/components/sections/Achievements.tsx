"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Cloud, Rocket, GitBranch, Filter } from "lucide-react";
import { achievements } from "@/data/achievements";

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Award,
  Cloud,
  Rocket,
  GitBranch,
};

const typeColors: Record<string, string> = {
  certification: "from-blue-500/10 to-cyan-500/10 border-blue-500/20 text-blue-500",
  hackathon: "from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-500",
  workshop: "from-green-500/10 to-emerald-500/10 border-green-500/20 text-green-500",
  leadership: "from-yellow-500/10 to-orange-500/10 border-yellow-500/20 text-yellow-500",
  award: "from-red-500/10 to-orange-500/10 border-red-500/20 text-red-500",
};

const filterOptions = ["All", "certification", "hackathon", "award", "leadership"];

export default function Achievements() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? achievements
      : achievements.filter((a) => a.type === filter);

  return (
    <section id="achievements" className="relative py-24 md:py-32">
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
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "var(--heading-color)" }}>
            Badges &{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Milestones
            </span>
          </h2>
          <p style={{ color: "var(--text-muted)" }} className="max-w-2xl mx-auto">
            Certifications, hackathons, and achievements along my journey.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-300 ${
                filter === opt
                  ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/25"
                  : ""
              }`}
              style={
                filter !== opt
                  ? {
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid var(--card-border)",
                      color: "var(--text-secondary)",
                    }
                  : undefined
              }
            >
              {opt === "All" && <Filter className="w-3.5 h-3.5" />}
              {opt}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((ach, i) => {
            const Icon = iconMap[ach.icon] || Award;
            const colors = typeColors[ach.type] || typeColors.certification;

            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`relative p-5 rounded-2xl bg-gradient-to-br ${colors.split(" ").slice(0, 2).join(" ")} border ${colors.split(" ")[2]} backdrop-blur-sm transition-all duration-300 group`}
              >
                {/* Icon */}
                <div className="mb-3">
                  <Icon className={`w-8 h-8 ${colors.split(" ").pop()}`} />
                </div>

                {/* Type badge */}
                <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider mb-2 ${colors.split(" ").pop()}`}
                  style={{ backgroundColor: "var(--glass-bg)" }}
                >
                  {ach.type}
                </span>

                <h4 className="font-bold text-sm mb-1 line-clamp-2" style={{ color: "var(--heading-color)" }}>
                  {ach.title}
                </h4>
                <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>
                  {ach.organization} · {ach.date}
                </p>
                <p className="text-xs line-clamp-3 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {ach.description}
                </p>

                {ach.link && (
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block mt-3 text-xs font-medium ${colors.split(" ").pop()} hover:underline`}
                  >
                    View Certificate →
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
