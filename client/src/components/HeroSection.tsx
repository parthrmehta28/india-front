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
      className="relative h-screen min-h-[600px] flex items-center justify-center bg-white cursor-scroll"
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
            className="text-[5rem] md:text-7xl lg:text-8xl font-helvetica font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Be the Voice that Builds India
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl font-nunito text-gray-700 mb-8"
            variants={itemVariants}
          >
            Join a movement to empower India, driving inclusive, sustainable, and growth-oriented change.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Button 
                asChild
                size="lg"
                className="bg-blue hover:bg-dark-blue text-white transition-all duration-300 hover:shadow-xl z-20 relative overflow-hidden group"
                onClick={(e) => e.stopPropagation()}
              >
                <a href="#join" className="relative z-10 flex items-center gap-2">
                  <span>Join the Movement</span>
                  <motion.div
                    className="w-0 h-0.5 bg-white rounded"
                    initial={{ width: 0 }}
                    whileHover={{ width: "1rem" }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </Button>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </motion.div>
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
