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
      className="relative h-screen min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 cursor-scroll overflow-hidden"
      onClick={scrollToJoin}
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue/5 to-indigo/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-indigo/5 to-blue/10 rounded-full blur-3xl floating-element" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue/5 rounded-full blur-2xl floating-element" style={{animationDelay: '4s'}}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-1/4 w-8 h-8 border-2 border-blue/20 rotate-45 floating-element"></div>
        <div className="absolute bottom-40 left-1/4 w-6 h-6 bg-indigo-200/30 rounded-full floating-element" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-20 w-4 h-4 bg-blue/20 rotate-45 floating-element" style={{animationDelay: '3s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>
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
            className="headline-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight text-center px-2"
            variants={itemVariants}
          >
            Journalism to Grow India
          </motion.h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue to-indigo-800 rounded-full mx-auto mb-8"></div>
          <motion.p 
            className="headline-secondary text-xl sm:text-2xl md:text-3xl text-center mb-6 px-4"
            variants={itemVariants}
          >
            India's first theme-based solutions magazine
          </motion.p>
          <motion.p 
            className="body-text text-center mb-12 px-4 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            Spotlighting strategies to grow business ecosystems, creating opportunities for our economy to be stronger, more inclusive, and fast-growing.
          </motion.p>

          {/* Visual Representation - Journalism connecting to India's Growth */}
          <motion.div 
            className="flex justify-center mb-12"
            variants={itemVariants}
          >
            <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-blue/20 shadow-xl max-w-md">
              <svg 
                width="320" 
                height="240" 
                viewBox="0 0 320 240" 
                className="w-full h-auto"
              >
                <defs>
                  <linearGradient id="journalismGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0058CA" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.8"/>
                  </linearGradient>
                  <linearGradient id="indiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF9933" stopOpacity="0.7"/>
                    <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.7"/>
                    <stop offset="100%" stopColor="#138808" stopOpacity="0.7"/>
                  </linearGradient>
                </defs>
                
                {/* Background subtle grid */}
                <pattern id="heroGrid" width="15" height="15" patternUnits="userSpaceOnUse">
                  <path d="M 15 0 L 0 0 0 15" fill="none" stroke="rgba(0,88,202,0.1)" strokeWidth="0.5"/>
                </pattern>
                <rect width="320" height="240" fill="url(#heroGrid)" opacity="0.3"/>
                
                {/* Central journalism hub - pen/newspaper representing journalism */}
                <g transform="translate(160, 120)">
                  <circle r="25" fill="url(#journalismGradient)" opacity="0.9"/>
                  <circle r="18" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
                  
                  {/* Pen icon in center */}
                  <g transform="translate(-8, -8)">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" 
                          fill="white" 
                          transform="scale(0.7)"/>
                  </g>
                </g>
                
                {/* India map outline in background */}
                <g transform="translate(50, 40)" opacity="0.15">
                  <path d="M30 5 L45 8 L60 15 L70 25 L75 40 L70 55 L60 65 L45 70 L30 68 L15 60 L8 45 L10 30 L18 18 Z" 
                        fill="url(#indiaGradient)" 
                        stroke="#138808" 
                        strokeWidth="1"/>
                </g>
                
                {/* Growth sector nodes around the journalism hub */}
                <g>
                  {/* Manufacturing - top left */}
                  <circle cx="100" cy="60" r="12" fill="rgba(16,185,129,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
                    <animate attributeName="r" values="12;14;12" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <text x="100" y="45" textAnchor="middle" fill="#065f46" fontSize="9" fontWeight="600">Manufacturing</text>
                  
                  {/* Technology - top right */}
                  <circle cx="220" cy="60" r="12" fill="rgba(168,85,247,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
                    <animate attributeName="r" values="12;14;12" dur="3.2s" repeatCount="indefinite"/>
                  </circle>
                  <text x="220" y="45" textAnchor="middle" fill="#581c87" fontSize="9" fontWeight="600">Technology</text>
                  
                  {/* Infrastructure - right */}
                  <circle cx="260" cy="120" r="12" fill="rgba(34,197,94,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
                    <animate attributeName="r" values="12;14;12" dur="2.8s" repeatCount="indefinite"/>
                  </circle>
                  <text x="260" y="105" textAnchor="middle" fill="#14532d" fontSize="9" fontWeight="600">Infrastructure</text>
                  
                  {/* Sustainability - bottom right */}
                  <circle cx="220" cy="180" r="12" fill="rgba(59,130,246,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
                    <animate attributeName="r" values="12;14;12" dur="3.5s" repeatCount="indefinite"/>
                  </circle>
                  <text x="220" y="195" textAnchor="middle" fill="#1e3a8a" fontSize="9" fontWeight="600">Sustainability</text>
                  
                  {/* Economy - bottom left */}
                  <circle cx="100" cy="180" r="12" fill="rgba(251,146,60,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
                    <animate attributeName="r" values="12;14;12" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                  <text x="100" y="195" textAnchor="middle" fill="#9a3412" fontSize="9" fontWeight="600">Economy</text>
                  
                  {/* Geopolitics - left */}
                  <circle cx="60" cy="120" r="12" fill="rgba(236,72,153,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
                    <animate attributeName="r" values="12;14;12" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  <text x="60" y="105" textAnchor="middle" fill="#831843" fontSize="9" fontWeight="600">Geopolitics</text>
                </g>
                
                {/* Connecting lines from journalism hub to growth sectors */}
                <g stroke="rgba(0,88,202,0.4)" strokeWidth="2" strokeLinecap="round">
                  <path d="M 145 105 L 112 72">
                    <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 175 105 L 208 72">
                    <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="2.2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 185 120 L 248 120">
                    <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 175 135 L 208 168">
                    <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="2.8s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 145 135 L 112 168">
                    <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 135 120 L 72 120">
                    <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="3.2s" repeatCount="indefinite"/>
                  </path>
                </g>
                
                {/* Flowing data particles */}
                <g fill="rgba(255,255,255,0.9)">
                  <circle cx="130" cy="85" r="1.5">
                    <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.8s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="190" cy="85" r="1.5">
                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.1s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="210" cy="110" r="1.5">
                    <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.4s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="190" cy="155" r="1.5">
                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.9s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="130" cy="155" r="1.5">
                    <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.6s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="110" cy="110" r="1.5">
                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.2s" repeatCount="indefinite"/>
                  </circle>
                </g>
              </svg>
              
              <div className="text-center mt-4">
                <p className="text-sm font-semibold text-blue-800">Journalism Connecting India's Growth</p>
                <p className="text-xs text-gray-600 mt-1">Solutions-focused reporting across key sectors</p>
              </div>
            </div>
          </motion.div>
          
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
              href="#about" 
              className="inline-block cta-enhanced text-white px-12 py-6 text-xl rounded-2xl font-bold border-2 border-white/20 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              Know More
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
