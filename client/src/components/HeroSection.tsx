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
      {/* Background Illustration */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* India Gate silhouette */}
          <g transform="translate(50, 200)">
            <path d="M100 300 L100 100 Q100 80 120 80 L180 80 Q200 80 200 100 L200 300" stroke="#0058CA" strokeWidth="3" fill="none"/>
            <path d="M80 300 L220 300" stroke="#0058CA" strokeWidth="4"/>
            <rect x="140" y="120" width="20" height="60" fill="#0058CA" opacity="0.3"/>
          </g>
          
          {/* Lotus petals pattern */}
          <g transform="translate(800, 100)">
            <path d="M0 50 Q25 25 50 50 Q25 75 0 50" fill="#0058CA" opacity="0.15"/>
            <path d="M50 50 Q75 25 100 50 Q75 75 50 50" fill="#0058CA" opacity="0.15"/>
            <path d="M25 25 Q50 0 75 25 Q50 50 25 25" fill="#0058CA" opacity="0.15"/>
            <path d="M25 75 Q50 50 75 75 Q50 100 25 75" fill="#0058CA" opacity="0.15"/>
          </g>
          
          {/* Geometric mandala pattern */}
          <g transform="translate(950, 500)">
            <circle cx="0" cy="0" r="80" stroke="#0058CA" strokeWidth="2" fill="none" opacity="0.2"/>
            <circle cx="0" cy="0" r="60" stroke="#0058CA" strokeWidth="2" fill="none" opacity="0.2"/>
            <circle cx="0" cy="0" r="40" stroke="#0058CA" strokeWidth="2" fill="none" opacity="0.2"/>
            <path d="M-40 0 L40 0 M0 -40 L0 40 M-28 -28 L28 28 M-28 28 L28 -28" stroke="#0058CA" strokeWidth="1" opacity="0.2"/>
          </g>
          
          {/* Abstract mountain range */}
          <g transform="translate(200, 600)">
            <path d="M0 100 L50 50 L100 80 L150 30 L200 60 L250 20 L300 50 L350 100" stroke="#0058CA" strokeWidth="3" fill="none" opacity="0.3"/>
          </g>
          
          {/* Rising arrows symbolizing progress */}
          <g transform="translate(600, 400)">
            <path d="M0 50 L0 10 M-10 20 L0 10 L10 20" stroke="#0058CA" strokeWidth="3" opacity="0.25"/>
            <path d="M30 60 L30 15 M20 25 L30 15 L40 25" stroke="#0058CA" strokeWidth="3" opacity="0.25"/>
            <path d="M60 70 L60 20 M50 30 L60 20 L70 30" stroke="#0058CA" strokeWidth="3" opacity="0.25"/>
          </g>
          
          {/* Decorative border elements */}
          <g>
            <path d="M50 50 Q100 25 150 50" stroke="#0058CA" strokeWidth="2" fill="none" opacity="0.15"/>
            <path d="M1050 750 Q1100 725 1150 750" stroke="#0058CA" strokeWidth="2" fill="none" opacity="0.15"/>
          </g>
          
          {/* Unity circles representing diverse India */}
          <g transform="translate(300, 150)">
            <circle cx="0" cy="0" r="15" fill="#0058CA" opacity="0.2"/>
            <circle cx="40" cy="10" r="12" fill="#0058CA" opacity="0.2"/>
            <circle cx="20" cy="35" r="18" fill="#0058CA" opacity="0.2"/>
            <circle cx="60" cy="30" r="14" fill="#0058CA" opacity="0.2"/>
          </g>
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
