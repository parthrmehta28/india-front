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
            <motion.div 
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
              <p>Watch this space for more.</p>
              <p>Coming Soon.</p>
            </motion.div>
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
