"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Co-Founder, TechVenture Labs",
    text: "Naman's ability to turn complex ideas into elegant, functional products is remarkable. His startup mindset and technical skills make him a standout collaborator.",
    avatar: "AM",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Senior Developer, CodeCraft",
    text: "Working with Naman on our hackathon project was an incredible experience. His dedication to clean code and user experience is truly impressive for a student developer.",
    avatar: "PS",
  },
  {
    id: 3,
    name: "Prof. Rajesh Kumar",
    role: "Faculty Advisor, University Tech Club",
    text: "Naman consistently demonstrates leadership and initiative. His projects go beyond classroom requirements, showing real-world impact and innovative thinking.",
    avatar: "RK",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => {
      if (dir > 0) return (prev + 1) % testimonials.length;
      return (prev - 1 + testimonials.length) % testimonials.length;
    });
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-24 md:py-32">
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "var(--heading-color)" }}>
            What People{" "}
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="max-w-2xl mx-auto relative">
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="p-8 md:p-10 rounded-2xl backdrop-blur-sm text-center"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <Quote className="w-8 h-8 text-purple-400/30 mx-auto mb-4" />

                <p className="text-lg leading-relaxed mb-6 italic" style={{ color: "var(--text-secondary)" }}>
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                {/* Avatar and info */}
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {testimonials[current].avatar}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-sm" style={{ color: "var(--heading-color)" }}>
                      {testimonials[current].name}
                    </p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full hover:text-purple-500 transition-colors"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                color: "var(--text-muted)",
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-purple-500"
                      : ""
                  }`}
                  style={i !== current ? { backgroundColor: "var(--text-muted)" } : undefined}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="p-2 rounded-full hover:text-purple-500 transition-colors"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                color: "var(--text-muted)",
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
