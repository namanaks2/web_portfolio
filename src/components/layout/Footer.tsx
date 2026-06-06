"use client";

import { motion } from "framer-motion";
import { Mail, Heart, ArrowUp } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/SocialIcons";

const socialLinks = [
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/naman-gupta-64687230a/", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: GithubIcon, href: "https://github.com/namanaks2", label: "GitHub", color: "hover:text-gray-300" },
  { icon: Mail, href: "mailto:namanaks2@gmail.com", label: "Gmail", color: "hover:text-red-400" },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative"
      style={{
        backgroundColor: "var(--footer-bg)",
        borderTop: "1px solid var(--card-border)",
      }}
    >
      {/* Gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Naman Gupta
            </h3>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
              Developer, aspiring data scientist, and startup enthusiast building innovative digital experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--heading-color)" }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(link.href.replace("#", ""))
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm hover:text-purple-500 transition-colors"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--heading-color)" }}>
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl ${social.color} transition-colors`}
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                    color: "var(--text-muted)",
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--card-border)" }}
        >
          <p className="text-xs flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
            © {currentYear} Naman Gupta. Built with
            <Heart className="w-3 h-3 text-red-400 inline" />
            using Next.js &amp; Tailwind CSS
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xs hover:text-purple-500 transition-colors group"
            style={{ color: "var(--text-muted)" }}
          >
            Back to top
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
