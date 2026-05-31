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
  Sparkles,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/SocialIcons";
import { gsap } from "gsap";

const socialLinks = [
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/naman-gupta-64687230a/",
    label: "LinkedIn",
    color:
      "hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/30",
  },
  {
    icon: GithubIcon,
    href: "https://github.com/namanaks2/",
    label: "GitHub",
    color:
      "hover:bg-gray-500/20 hover:text-gray-300 hover:border-gray-500/30",
  },
  {
    icon: Mail,
    href: "mailto:namanaks2@gmail.com",
    label: "Gmail",
    color: "hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/30",
  },
];

/* ───── animation orchestration ───── */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ───── floating particles ───── */
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-purple-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}



export default function Hero() {
  const blobRef = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (blobRef.current) {
      gsap.to(blobRef.current, {
        x: "random(-60, 60)",
        y: "random(-60, 60)",
        rotation: "random(-20, 20)",
        scale: "random(0.9, 1.15)",
        duration: 10,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
    if (blob2Ref.current) {
      gsap.to(blob2Ref.current, {
        x: "random(-40, 40)",
        y: "random(-40, 40)",
        rotation: "random(-10, 10)",
        scale: "random(0.85, 1.1)",
        duration: 12,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2,
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
          className="absolute top-1/4 -left-20 w-72 h-72 md:w-[28rem] md:h-[28rem] bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"
        />
        <div
          ref={blob2Ref}
          className="absolute bottom-1/4 -right-20 w-72 h-72 md:w-[28rem] md:h-[28rem] bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-sm text-purple-600 dark:text-purple-300 font-medium">
              Open to work &amp; collaborations
            </span>
          </motion.div>

          {/* Main heading with shimmer */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2"
          >
            <span className="text-gray-900 dark:text-white">
              Hi, I&apos;m{" "}
            </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                Naman Gupta
              </span>
              {/* shimmer sweep */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent bg-clip-text"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
                style={{ WebkitBackgroundClip: "text" }}
              />
            </span>
          </motion.h1>

          {/* Subheading with typing */}
          <motion.div
            variants={fadeUp}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 h-9"
          >
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2500,
                "Aspiring Data Scientist",
                2500,
                "Startup Enthusiast",
                2500,
                "UI/UX Designer",
                2500,
                "Tech Entrepreneur",
                2500,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="font-medium"
            />
          </motion.div>

          {/* Professional description */}
          <motion.p
            variants={fadeUp}
            className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed text-base md:text-lg"
          >
            B.Tech undergraduate crafting{" "}
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              scalable software
            </span>{" "}
            and{" "}
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              data-driven solutions
            </span>
            . I blend engineering precision with entrepreneurial thinking to
            build products that solve real-world problems.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium text-sm shadow-lg shadow-purple-500/25 overflow-hidden"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* button glow on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <ExternalLink className="w-4 h-4 relative z-10" />
              <span className="relative z-10">View Projects</span>
            </motion.a>

            <motion.a
              href="/Naman-Resume.pdf"
              download
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 font-medium text-sm backdrop-blur-sm overflow-hidden"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 font-medium text-sm backdrop-blur-sm overflow-hidden"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <MessageSquare className="w-4 h-4" />
              Let&apos;s Talk
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-3 mb-12"
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 text-gray-500 transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.15, y: -4, rotate: [0, -5, 5, 0] }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>


        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        {/* <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium">
          Scroll to explore
        </span> */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
