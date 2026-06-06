"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { User, Rocket, Code2, Lightbulb } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: 15, suffix: "+", icon: "🚀" },
  { label: "Skills Learned", value: 25, suffix: "+", icon: "⚡" },
  { label: "Hackathons & Internships", value: 8, suffix: "+", icon: "🏆" },
  { label: "Years Learning", value: 3, suffix: "+", icon: "📚" },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let current = 0;
    const increment = value / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 40);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32">
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
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "var(--heading-color)" }}>
            Know Who{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              I Am
            </span>
          </h2>
          <p style={{ color: "var(--text-muted)" }} className="max-w-2xl mx-auto">
            A snapshot of my journey, passions, and what drives me forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="leading-relaxed text-lg" style={{ color: "var(--text-secondary)" }}>
              I&apos;m a <strong className="text-purple-500">B.Tech student</strong> driven by a passion for building technology that creates meaningful impact. My interests span across web development, data science, product design, and entrepreneurship, allowing me to explore technology from multiple perspectives.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
              I love learning by building. Whether it's developing responsive web applications, exploring data-driven insights, or experimenting with new technologies, every project helps me grow as a developer and problem solver.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
              With an entrepreneurial mindset, I approach every challenge as an
              opportunity to innovate. Whether it&apos;s leading tech teams,
              participating in hackathons, or launching side projects, I&apos;m
              always looking for the next big thing to build.
            </p>

            {/* Interest tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Web Development",
                "Data Science",
                "Startups",
                "UI/UX Design",
                "Open Source",
                "Machine Learning",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg text-sm hover:bg-purple-500/10 hover:border-purple-500/20 hover:text-purple-500 transition-all duration-300 cursor-default"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                icon: Code2,
                title: "Developer",
                desc: "Building full-stack applications with modern technologies",
                gradient: "from-blue-500/10 to-cyan-500/10",
                border: "border-blue-500/20",
                iconColor: "text-blue-400",
              },
              {
                icon: Rocket,
                title: "Entrepreneur",
                desc: "Turning innovative ideas into scalable digital products",
                gradient: "from-purple-500/10 to-pink-500/10",
                border: "border-purple-500/20",
                iconColor: "text-purple-400",
              },
              {
                icon: Lightbulb,
                title: "Data Enthusiast",
                desc: "Exploring data patterns and building intelligent systems",
                gradient: "from-yellow-500/10 to-orange-500/10",
                border: "border-yellow-500/20",
                iconColor: "text-yellow-400",
              },
              {
                icon: User,
                title: "UI/UX Learner",
                desc: "Creating beautiful, intuitive user experiences",
                gradient: "from-green-500/10 to-emerald-500/10",
                border: "border-green-500/20",
                iconColor: "text-green-400",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`p-5 rounded-2xl bg-gradient-to-br ${card.gradient} border ${card.border} backdrop-blur-sm transition-all duration-300`}
              >
                <card.icon className={`w-8 h-8 ${card.iconColor} mb-3`} />
                <h4 className="font-semibold mb-1 text-sm" style={{ color: "var(--heading-color)" }}>
                  {card.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Animated stats */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 rounded-2xl backdrop-blur-sm text-center group hover:border-purple-500/30 transition-all duration-300"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                inView={isInView}
              />
              <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
