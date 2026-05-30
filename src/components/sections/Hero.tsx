"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Mail,
  ChevronDown,
  Download,
  MessageSquare,
  ExternalLink,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/SocialIcons";
import { gsap } from "gsap";

const socialLinks = [
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/naman-gupta-64687230a/", label: "LinkedIn", color: "hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/30" },
  { icon: GithubIcon, href: "https://github.com/namanaks2/", label: "GitHub", color: "hover:bg-gray-500/20 hover:text-gray-300 hover:border-gray-500/30" },
  { icon: Mail, href: "mailto:namanaks2@gmail.com", label: "Gmail", color: "hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/30" },

];

export default function Hero() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (blobRef.current) {
      gsap.to(blobRef.current, {
        x: "random(-50, 50)",
        y: "random(-50, 50)",
        rotation: "random(-15, 15)",
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={blobRef}
          className="absolute top-1/4 -left-20 w-72 h-72 md:w-96 md:h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"
        />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 md:w-96 md:h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-purple-600 dark:text-purple-300 font-medium">
              Available for opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
          >
            <span className="text-gray-900 dark:text-white">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Naman Gupta
            </span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-8"
          >
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Aspiring Data Scientist",
                2000,
                "Startup Enthusiast",
                2000,
                "UI/UX Learner",
                2000,
                "Entrepreneur",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-medium"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed text-base md:text-lg"
          >
            B.Tech student passionate about building innovative digital
            solutions. Turning ideas into impactful products through code,
            design, and entrepreneurship.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <ExternalLink className="w-4 h-4" />
              View Projects
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
            </a>

            <a
              href="/Naman-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 font-medium text-sm hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 font-medium text-sm hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center gap-3"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 text-gray-500 transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-purple-400" />
        </motion.div>
      </motion.div> */}
    </section>
  );
}
