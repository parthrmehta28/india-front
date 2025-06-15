import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const scrollToJoin = () => {
    const joinSection = document.getElementById('join');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen min-h-[600px] flex items-center justify-center bg-white cursor-scroll overflow-hidden"
      onClick={scrollToJoin}
    >
      {/* Minimalist Background Illustration */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Rising arrows symbolizing progress and movement */}
          <g transform="translate(100, 150)">
            <path d="M0 100 L0 40 M-15 55 L0 40 L15 55" stroke="#3b82f6" strokeWidth="3" opacity="0.25"/>
            <path d="M60 120 L60 50 M45 65 L60 50 L75 65" stroke="#60a5fa" strokeWidth="3" opacity="0.3"/>
            <path d="M120 140 L120 60 M105 75 L120 60 L135 75" stroke="#1e40af" strokeWidth="3" opacity="0.35"/>
          </g>
          
          {/* Simple geometric pattern representing unity */}
          <g transform="translate(900, 200)">
            <circle cx="0" cy="0" r="60" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.2"/>
            <circle cx="0" cy="0" r="40" stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.25"/>
            <circle cx="0" cy="0" r="20" stroke="#1e40af" strokeWidth="2" fill="none" opacity="0.3"/>
          </g>
          
          {/* Abstract flowing lines representing movement */}
          <g>
            <path d="M200 600 Q400 550 600 580 Q800 610 1000 570" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.2"/>
            <path d="M150 650 Q350 600 550 630 Q750 660 950 620" stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.25"/>
          </g>
          
          {/* Minimalist lotus element */}
          <g transform="translate(1000, 500)">
            <path d="M0 30 Q15 15 30 30 Q15 45 0 30" fill="#3b82f6" opacity="0.2"/>
            <path d="M30 30 Q45 15 60 30 Q45 45 30 30" fill="#60a5fa" opacity="0.2"/>
            <path d="M15 15 Q30 0 45 15 Q30 30 15 15" fill="#1e40af" opacity="0.2"/>
          </g>
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-2xl md:text-4xl lg:text-5xl font-helvetica font-bold text-gray-900 mb-8 leading-tight tracking-normal"
            variants={itemVariants}
          >
            Be the <span className="highlighted-text">Voice</span> that Builds India
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-helvetica text-center text-gray mb-8"
            variants={itemVariants}
          >
            Join a movement to empower India, driving inclusive, sustainable, and growth-oriented change.
          </motion.p>
          
          {/* Animated gradient text */}
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <motion.p 
              className="text-lg md:text-xl font-helvetica text-center bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent font-semibold"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Watch this space for more. India Front is Coming Soon.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center justify-center gap-4"
            variants={itemVariants}
          >
            <a 
              href="#join" 
              className="inline-block cta-button text-white px-[35.2px] py-[17.6px] text-[19.8px] rounded-md font-semibold transition-all hover:translate-y-[-2px] hover:shadow-lg z-20"
              onClick={(e) => e.stopPropagation()}
            >
              Join the Movement
            </a>
            
            {/* Additional text below button */}
            <motion.p
              className="text-base font-inter text-gray-600 text-center mt-4"
              variants={itemVariants}
            >
              Read on to know more about the India Front Movement
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 text-center z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          ease: "easeInOut" 
        }}
      >
        <a href="#about" className="text-gray-600 inline-block">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
