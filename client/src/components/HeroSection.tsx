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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="pt-32 md:pt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Content Section */}
            <motion.div className="lg:text-left text-center" variants={itemVariants}>
              <h1 className="headline-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
                Journalism to Grow India
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue to-indigo-800 rounded-full lg:mx-0 mx-auto mb-8"></div>
              <p className="headline-secondary text-xl sm:text-2xl md:text-3xl mb-6">
                India's first theme-based solutions magazine
              </p>
              <p className="body-text mb-12 max-w-lg lg:mx-0 mx-auto">
                Spotlighting strategies to grow business ecosystems, creating opportunities for our economy to be stronger, more inclusive, and fast-growing.
              </p>
            </motion.div>

            {/* Visual Element - Unboxed and Enlarged */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              variants={itemVariants}
            >
              <svg 
                width="480" 
                height="360" 
                viewBox="0 0 480 360" 
                className="w-full h-auto max-w-lg"
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
                <pattern id="heroGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,88,202,0.08)" strokeWidth="0.5"/>
                </pattern>
                <rect width="480" height="360" fill="url(#heroGrid)" opacity="0.3"/>
                
                {/* Central journalism hub - pen representing journalism */}
                <g transform="translate(240, 180)">
                  <circle r="35" fill="url(#journalismGradient)" opacity="0.9"/>
                  <circle r="25" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.5)" strokeWidth="3"/>
                  
                  {/* Pen icon in center */}
                  <g transform="translate(-12, -12)">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" 
                          fill="white" 
                          transform="scale(1)"/>
                  </g>
                </g>
                
                {/* India map outline in background */}
                <g transform="translate(80, 60)" opacity="0.12">
                  <path d="M40 8 L60 12 L80 20 L93 33 L100 53 L93 73 L80 87 L60 93 L40 90 L20 80 L11 60 L13 40 L24 24 Z" 
                        fill="url(#indiaGradient)" 
                        stroke="#138808" 
                        strokeWidth="1.5"/>
                </g>
                
                {/* Growth sector nodes around the journalism hub */}
                <g>
                  {/* Manufacturing - top left */}
                  <circle cx="140" cy="80" r="22" fill="rgba(16,185,129,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="3">
                    <animate attributeName="r" values="22;26;22" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <g transform="translate(140, 80)">
                    <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" stroke="white" strokeWidth="2" fill="none" transform="scale(0.8) translate(-12, -12)"/>
                    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="scale(0.8) translate(-12, -12)"/>
                  </g>
                  
                  {/* Technology - top right */}
                  <circle cx="340" cy="80" r="22" fill="rgba(168,85,247,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="3">
                    <animate attributeName="r" values="22;26;22" dur="3.2s" repeatCount="indefinite"/>
                  </circle>
                  <g transform="translate(340, 80)">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="2" fill="none" transform="scale(0.8) translate(-12, -12)"/>
                    <path d="M8 21L16 21" stroke="white" strokeWidth="2" strokeLinecap="round" transform="scale(0.8) translate(-12, -12)"/>
                    <path d="M12 17L12 21" stroke="white" strokeWidth="2" strokeLinecap="round" transform="scale(0.8) translate(-12, -12)"/>
                    <circle cx="8" cy="10" r="2" fill="white" transform="scale(0.8) translate(-12, -12)"/>
                    <circle cx="16" cy="10" r="2" fill="white" transform="scale(0.8) translate(-12, -12)"/>
                    <path d="M10 10L14 10" stroke="white" strokeWidth="2" strokeLinecap="round" transform="scale(0.8) translate(-12, -12)"/>
                  </g>
                  
                  {/* Infrastructure - right */}
                  <circle cx="400" cy="180" r="22" fill="rgba(34,197,94,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="3">
                    <animate attributeName="r" values="22;26;22" dur="2.8s" repeatCount="indefinite"/>
                  </circle>
                  <g transform="translate(400, 180)">
                    <path d="M3 21L21 21" stroke="white" strokeWidth="2" strokeLinecap="round" transform="scale(0.8) translate(-12, -12)"/>
                    <path d="M5 21V7L12 2L19 7V21" stroke="white" strokeWidth="2" strokeLinejoin="round" fill="none" transform="scale(0.8) translate(-12, -12)"/>
                    <path d="M9 9H15" stroke="white" strokeWidth="2" strokeLinecap="round" transform="scale(0.8) translate(-12, -12)"/>
                    <path d="M9 13H15" stroke="white" strokeWidth="2" strokeLinecap="round" transform="scale(0.8) translate(-12, -12)"/>
                    <path d="M9 17H15" stroke="white" strokeWidth="2" strokeLinecap="round" transform="scale(0.8) translate(-12, -12)"/>
                  </g>
                  
                  {/* Sustainability - bottom right */}
                  <circle cx="340" cy="280" r="22" fill="rgba(59,130,246,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="3">
                    <animate attributeName="r" values="22;26;22" dur="3.5s" repeatCount="indefinite"/>
                  </circle>
                  <g transform="translate(340, 280)">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" fill="none" transform="scale(0.8) translate(-12, -12)"/>
                    <path d="M8 12L10 14L16 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="scale(0.8) translate(-12, -12)"/>
                    <path d="M12 2V6" stroke="white" strokeWidth="2" strokeLinecap="round" transform="scale(0.8) translate(-12, -12)"/>
                    <path d="M12 18V22" stroke="white" strokeWidth="2" strokeLinecap="round" transform="scale(0.8) translate(-12, -12)"/>
                    <path d="M4.93 4.93L7.76 7.76" stroke="white" strokeWidth="2" strokeLinecap="round" transform="scale(0.8) translate(-12, -12)"/>
                    <path d="M16.24 16.24L19.07 19.07" stroke="white" strokeWidth="2" strokeLinecap="round" transform="scale(0.8) translate(-12, -12)"/>
                  </g>
                  
                  {/* Economy - bottom left */}
                  <circle cx="140" cy="280" r="22" fill="rgba(251,146,60,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="3">
                    <animate attributeName="r" values="22;26;22" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                  <g transform="translate(140, 280)">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none" transform="scale(0.8) translate(-12, -12)"/>
                    <path d="M2 12H22" stroke="white" strokeWidth="2" transform="scale(0.8) translate(-12, -12)"/>
                    <path d="M12 2A15.3 15.3 0 0 1 12 22A15.3 15.3 0 0 1 12 2Z" stroke="white" strokeWidth="2" fill="none" transform="scale(0.8) translate(-12, -12)"/>
                    <circle cx="8" cy="8" r="1.5" fill="white" transform="scale(0.8) translate(-12, -12)"/>
                    <circle cx="16" cy="8" r="1.5" fill="white" transform="scale(0.8) translate(-12, -12)"/>
                    <circle cx="12" cy="16" r="1.5" fill="white" transform="scale(0.8) translate(-12, -12)"/>
                  </g>
                  
                  {/* Geopolitics - left */}
                  <circle cx="80" cy="180" r="22" fill="rgba(236,72,153,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="3">
                    <animate attributeName="r" values="22;26;22" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  <g transform="translate(80, 180)">
                    <path d="M12 2L4 6V12C4 17 8 21 12 22C16 21 20 17 20 12V6L12 2Z" stroke="white" strokeWidth="2" fill="none" transform="scale(0.8) translate(-12, -12)"/>
                    <path d="M9 10L11 12L15 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="scale(0.8) translate(-12, -12)"/>
                    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" fill="none" transform="scale(0.8) translate(-12, -12)"/>
                  </g>
                </g>
                
                {/* Connecting lines from journalism hub to growth sectors */}
                <g stroke="rgba(0,88,202,0.5)" strokeWidth="3" strokeLinecap="round">
                  <path d="M 215 155 L 158 98">
                    <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 265 155 L 322 98">
                    <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2.2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 275 180 L 382 180">
                    <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 265 205 L 322 262">
                    <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2.8s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 215 205 L 158 262">
                    <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 205 180 L 98 180">
                    <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="3.2s" repeatCount="indefinite"/>
                  </path>
                </g>
                
                {/* Flowing data particles */}
                <g fill="rgba(255,255,255,0.9)">
                  <circle cx="185" cy="125" r="2">
                    <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.8s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="295" cy="125" r="2">
                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.1s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="325" cy="165" r="2">
                    <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.4s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="295" cy="235" r="2">
                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.9s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="185" cy="235" r="2">
                    <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.6s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="155" cy="165" r="2">
                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.2s" repeatCount="indefinite"/>
                  </circle>
                </g>
              </svg>
            </motion.div>
          </div>

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
