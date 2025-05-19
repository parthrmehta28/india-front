import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import WhoShouldJoinSection from "@/components/WhoShouldJoinSection";
import JoinMovementSection from "@/components/JoinMovementSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  useEffect(() => {
    // Update document title for SEO
    document.title = "India First Magazine - Perspectives on India's Future";
  }, []);

  return (
    <div className="font-poppins text-darkGray bg-white">
      <Navbar />

      {/* Main content sections */}
      <HeroSection />
      <AboutSection />
      <WhySection />
      <WhoShouldJoinSection />
      <JoinMovementSection />
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
