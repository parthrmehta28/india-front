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
      {/* Coming Soon Banner */}
      <motion.div 
        className="absolute top-12 md:top-24 left-0 right-0 z-20 text-center px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 md:px-6 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
          ✨ Coming Soon
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div 
          className="max-w-3xl mx-auto pt-32 md:pt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-helvetica font-bold text-gray-900 mb-6 md:mb-8 leading-tight tracking-normal text-center px-2"
            variants={itemVariants}
          >
            India's Premier <span className="highlighted-text">Thought Leadership</span> Magazine — <span className="text-blue">Launching August 2025</span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl font-helvetica text-center text-gray mb-8 md:mb-12 px-4"
            variants={itemVariants}
          >
            Journalism to Help India Grow — Be among the founding subscribers of India's most influential thought leadership magazine.
          </motion.p>
          
          {/* Growth Sectors Illustration */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12 max-w-5xl mx-auto px-4"
            variants={itemVariants}
          >
            {/* Manufacturing */}
            <motion.div 
              className="flex flex-col items-center text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:shadow-lg transition-all">
                <svg width="24" height="24" className="md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" stroke="#0058CA" strokeWidth="2" fill="none"/>
                  <path d="M9 12L11 14L15 10" stroke="#0058CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xs md:text-sm font-inter text-gray-700 font-medium">Manufacturing</span>
            </motion.div>

            {/* Technology & AI */}
            <motion.div 
              className="flex flex-col items-center text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:shadow-lg transition-all">
                <svg width="24" height="24" className="md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="#0058CA" strokeWidth="2" fill="none"/>
                  <path d="M8 21L16 21" stroke="#0058CA" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 17L12 21" stroke="#0058CA" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="8" cy="10" r="2" fill="#0058CA"/>
                  <circle cx="16" cy="10" r="2" fill="#0058CA"/>
                  <path d="M10 10L14 10" stroke="#0058CA" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-xs md:text-sm font-inter text-gray-700 font-medium">Technology & AI</span>
            </motion.div>

            {/* Sustainability */}
            <motion.div 
              className="flex flex-col items-center text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:shadow-lg transition-all">
                <svg width="24" height="24" className="md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0058CA" strokeWidth="2" fill="none"/>
                  <path d="M8 12L10 14L16 8" stroke="#0058CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2V6" stroke="#0058CA" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 18V22" stroke="#0058CA" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4.93 4.93L7.76 7.76" stroke="#0058CA" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16.24 16.24L19.07 19.07" stroke="#0058CA" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-xs md:text-sm font-inter text-gray-700 font-medium">Sustainability</span>
            </motion.div>

            {/* Infrastructure */}
            <motion.div 
              className="flex flex-col items-center text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:shadow-lg transition-all">
                <svg width="24" height="24" className="md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21L21 21" stroke="#0058CA" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M5 21V7L12 2L19 7V21" stroke="#0058CA" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                  <path d="M9 9H15" stroke="#0058CA" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 13H15" stroke="#0058CA" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 17H15" stroke="#0058CA" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-xs md:text-sm font-inter text-gray-700 font-medium">Infrastructure</span>
            </motion.div>

            {/* Geopolitics */}
            <motion.div 
              className="flex flex-col items-center text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:shadow-lg transition-all">
                <svg width="24" height="24" className="md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#0058CA" strokeWidth="2" fill="none"/>
                  <path d="M2 12H22" stroke="#0058CA" strokeWidth="2"/>
                  <path d="M12 2A15.3 15.3 0 0 1 12 22A15.3 15.3 0 0 1 12 2Z" stroke="#0058CA" strokeWidth="2" fill="none"/>
                  <circle cx="8" cy="8" r="1.5" fill="#0058CA"/>
                  <circle cx="16" cy="8" r="1.5" fill="#0058CA"/>
                  <circle cx="12" cy="16" r="1.5" fill="#0058CA"/>
                </svg>
              </div>
              <span className="text-xs md:text-sm font-inter text-gray-700 font-medium">Geopolitics</span>
            </motion.div>

            {/* Defense Systems */}
            <motion.div 
              className="flex flex-col items-center text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center group-hover:shadow-lg transition-all">
                <svg width="24" height="24" className="md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 6V12C4 17 8 21 12 22C16 21 20 17 20 12V6L12 2Z" stroke="#0058CA" strokeWidth="2" fill="none"/>
                  <path d="M9 10L11 12L15 8" stroke="#0058CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" stroke="#0058CA" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <span className="text-xs md:text-sm font-inter text-gray-700 font-medium">Defense Systems</span>
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
              Join the Community
            </a>
            
            {/* Animated gradient text below button */}
            <motion.p
              className="text-base font-inter text-center mt-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent font-semibold"
              variants={itemVariants}
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
              Watch this space for more.
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
