"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, X, ArrowRight } from "lucide-react";

const commands = [
  { label: "Go to Hero", section: "hero", icon: "🏠" },
  { label: "Go to About", section: "about", icon: "👤" },
  { label: "Go to Skills", section: "skills", icon: "⚡" },
  { label: "Go to Experience", section: "experience", icon: "💼" },
  { label: "Go to Education", section: "education", icon: "🎓" },
  { label: "Go to Projects", section: "projects", icon: "🚀" },
  { label: "Go to Resume", section: "resume", icon: "📄" },
  { label: "Go to Achievements", section: "achievements", icon: "🏆" },
  { label: "Go to Contact", section: "contact", icon: "📧" },
  { label: "Download Resume", section: "download-resume", icon: "📥" },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const executeCommand = useCallback(
    (section: string) => {
      setIsOpen(false);
      setQuery("");


      if (section === "download-resume") {
        // Trigger resume download
        return;
      }

      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      executeCommand(filtered[selectedIndex].section);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-start justify-center pt-[20vh]"
          onClick={() => {
            setIsOpen(false);
            setQuery("");
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg mx-4 rounded-2xl shadow-2xl overflow-hidden"
            style={{
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--card-border)",
            }}
          >
            {/* Search input */}
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{ borderBottom: "1px solid var(--card-border)" }}
            >
              <Search className="w-5 h-5 text-purple-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search commands..."
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: "var(--text-primary)" }}
              />
              <div className="flex items-center gap-1 text-xs" style={{ color: "var(--text-muted)" }}>
                <kbd
                  className="px-1.5 py-0.5 rounded font-mono"
                  style={{
                    backgroundColor: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                    color: "var(--text-muted)",
                  }}
                >
                  ESC
                </kbd>
              </div>
            </div>

            {/* Results */}
            <div className="max-h-[300px] overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <p className="px-4 py-8 text-center text-sm" style={{ color: "var(--text-muted)" }}>
                  No results found.
                </p>
              ) : (
                filtered.map((cmd, index) => (
                  <button
                    key={cmd.section}
                    onClick={() => executeCommand(cmd.section)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors text-sm"
                    style={{
                      backgroundColor:
                        index === selectedIndex ? "var(--badge-bg)" : "transparent",
                      color:
                        index === selectedIndex
                          ? "var(--text-primary)"
                          : "var(--text-secondary)",
                    }}
                  >
                    <span className="text-lg">{cmd.icon}</span>
                    <span className="flex-1">{cmd.label}</span>
                    {index === selectedIndex && (
                      <ArrowRight className="w-4 h-4 text-purple-400" />
                    )}
                  </button>
                ))
              )}
            </div>

            {/* Footer hint */}
            <div
              className="flex items-center justify-between px-4 py-2 text-xs"
              style={{
                borderTop: "1px solid var(--card-border)",
                color: "var(--text-muted)",
              }}
            >
              <span>Navigate with ↑↓ · Select with ↵</span>
              <div className="flex items-center gap-1">
                <Command className="w-3 h-3" />
                <span>K to toggle</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
