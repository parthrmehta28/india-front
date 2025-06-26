import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import WhoShouldJoinSection from "@/components/WhoShouldJoinSection";

import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const aboutY = useTransform(scrollYProgress, [0.1, 0.5], [50, -50]);

  useEffect(() => {
    // Update document title for SEO
    document.title = "India First Magazine - Perspectives on India's Future";
  }, []);

  return (
    <div ref={containerRef} className="font-poppins text-darkGray bg-white">
      <Navbar />

      {/* Main content sections with parallax effect */}
      <motion.div style={{ y: heroY }}>
        <HeroSection />
      </motion.div>
      
      <motion.div style={{ y: aboutY }}>
        <AboutSection />
      </motion.div>
      
      <WhySection />
      <WhoShouldJoinSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

// Helper component for sections that animate on scroll
export function AnimateOnScroll({ 
  children, 
  className, 
  animation = { opacity: 1, y: 0 },
  initial = { opacity: 0, y: 20 },
  transition = { duration: 0.6 }
}: {
  children: React.ReactNode;
  className?: string;
  animation?: Record<string, any>;
  initial?: Record<string, any>;
  transition?: Record<string, any>;
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start(animation);
    }
  }, [isInView, controls, animation]);
  
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
