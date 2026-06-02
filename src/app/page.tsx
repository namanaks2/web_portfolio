"use client";

import dynamic from "next/dynamic";
import Preloader from "@/components/layout/Preloader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Resume from "@/components/sections/Resume";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

// Dynamic imports for performance-heavy UI components
const ParticleBackground = dynamic(() => import("@/components/ui/ParticleBackground"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ui/ScrollProgress"), { ssr: false });
const CommandPalette = dynamic(() => import("@/components/ui/CommandPalette"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/ui/BackToTop"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), { ssr: false });

export default function Home() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <ParticleBackground />
      <CommandPalette />
      <BackToTop />
      <CustomCursor />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <Resume />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
