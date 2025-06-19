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
        className="absolute top-6 md:top-24 left-0 right-0 z-20 text-center px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 md:px-6 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
          ✨ Coming Soon
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="pt-24 sm:pt-28 md:pt-32 lg:pt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Content Section */}
            <motion.div className="lg:text-left text-center px-4 lg:px-0" variants={itemVariants}>
              <h1 className="headline-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 lg:mb-8 leading-tight text-center lg:text-left">
                Journalism to Grow India
              </h1>
              <div className="w-24 lg:w-32 h-1 bg-gradient-to-r from-blue to-indigo-800 rounded-full lg:mx-0 mx-auto mb-6 lg:mb-8"></div>
              <p className="headline-secondary text-base sm:text-lg md:text-xl lg:text-2xl mb-4 lg:mb-6 leading-snug text-center lg:text-left">
                India Front — India's first theme-based solutions focused magazine launching soon
              </p>
              <p className="body-text mb-8 lg:mb-12 max-w-lg lg:mx-0 mx-auto text-base lg:text-lg leading-relaxed">
                Spotlighting strategies to grow business ecosystems, creating opportunities for our economy to be stronger, more inclusive, and fast-growing.
              </p>
            </motion.div>

            {/* Visual Element - Responsive SVG */}
            <motion.div 
              className="flex justify-center lg:justify-end px-4 lg:px-0"
              variants={itemVariants}
            >
              <svg 
                width="480" 
                height="360" 
                viewBox="0 0 480 360" 
                className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
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
                

                
                {/* Growth sector nodes around the journalism hub */}
                <g>
                  {/* Manufacturing - top left */}
                  <g className="cursor-pointer">
                    <circle cx="140" cy="80" r="22" fill="rgba(16,185,129,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="3">
                      <animate attributeName="r" values="22;26;22" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <g transform="translate(140, 80)">
                      <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" stroke="white" strokeWidth="2" fill="none" transform="scale(0.8) translate(-12, -12)"/>
                      <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="scale(0.8) translate(-12, -12)"/>
                    </g>
                    <title>Manufacturing</title>
                  </g>
                  
                  {/* Technology - top right */}
                  <g className="cursor-pointer">
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
                    <title>Technology</title>
                  </g>
                  
                  {/* Infrastructure - right */}
                  <g className="cursor-pointer">
                    <circle cx="400" cy="180" r="22" fill="rgba(34,197,94,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="3">
                      <animate attributeName="r" values="22;26;22" dur="2.8s" repeatCount="indefinite"/>
                    </circle>
                    <g transform="translate(400, 180)">
                      {/* Simple, visible building icon */}
                      <rect x="-8" y="-6" width="16" height="12" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.2"/>
                      <rect x="-5" y="-3" width="2.5" height="2.5" stroke="white" strokeWidth="1" fill="none"/>
                      <rect x="2.5" y="-3" width="2.5" height="2.5" stroke="white" strokeWidth="1" fill="none"/>
                      <rect x="-5" y="1" width="2.5" height="2.5" stroke="white" strokeWidth="1" fill="none"/>
                      <rect x="2.5" y="1" width="2.5" height="2.5" stroke="white" strokeWidth="1" fill="none"/>
                      <rect x="-1.5" y="4" width="3" height="2" stroke="white" strokeWidth="1.5" fill="none"/>
                    </g>
                    <title>Infrastructure</title>
                  </g>
                  
                  {/* Sustainability - bottom center */}
                  <g className="cursor-pointer">
                    <circle cx="240" cy="280" r="22" fill="rgba(59,130,246,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="3">
                      <animate attributeName="r" values="22;26;22" dur="3.5s" repeatCount="indefinite"/>
                    </circle>
                    <g transform="translate(240, 280)">
                      {/* Larger, centered tree icon */}
                      <path d="M0 -8C-2 -8 -4 -6 -4 -4C-4 -3 -3.5 -2 -3 -1.5C-5 -1 -6 1 -6 3C-6 5 -4 7 -2 7H2C4 7 6 5 6 3C6 1 5 -1 3 -1.5C3.5 -2 4 -3 4 -4C4 -6 2 -8 0 -8Z" 
                            stroke="white" strokeWidth="2.5" fill="white"/>
                      <rect x="-1" y="7" width="2" height="6" fill="white"/>
                    </g>
                    <title>Sustainability</title>
                  </g>
                  
                  {/* Geopolitics - left */}
                  <g className="cursor-pointer">
                    <circle cx="80" cy="180" r="22" fill="rgba(236,72,153,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="3">
                      <animate attributeName="r" values="22;26;22" dur="4s" repeatCount="indefinite"/>
                    </circle>
                    <g transform="translate(80, 180)">
                      <circle cx="0" cy="0" r="10" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="M-10 0H10" stroke="white" strokeWidth="2"/>
                      <path d="M0 -10C5.5 -10 10 -5.5 10 0C10 5.5 5.5 10 0 10C-5.5 10 -10 5.5 -10 0C-10 -5.5 -5.5 -10 0 -10Z" stroke="white" strokeWidth="2" fill="none"/>
                      <circle cx="-4" cy="-4" r="1.5" fill="white"/>
                      <circle cx="4" cy="-4" r="1.5" fill="white"/>
                      <circle cx="0" cy="6" r="1.5" fill="white"/>
                    </g>
                    <title>Geopolitics</title>
                  </g>
                </g>
                
                {/* Connecting lines from journalism hub to growth sectors */}
                <g stroke="rgba(0,88,202,0.5)" strokeWidth="3" strokeLinecap="round">
                  <path d="M 215 155 L 165 105">
                    <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 265 155 L 315 105">
                    <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2.2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 275 180 L 372 180">
                    <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 240 205 L 240 252">
                    <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2.8s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 205 180 L 108 180">
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
                  <circle cx="240" cy="235" r="2">
                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="1.9s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="155" cy="165" r="2">
                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.2s" repeatCount="indefinite"/>
                  </circle>
                </g>
              </svg>
            </motion.div>
          </div>

          <motion.div 
            className="flex flex-col items-center justify-center gap-3 lg:gap-4 px-4 lg:px-0"
            variants={itemVariants}
          >
            <a 
              href="#about" 
              className="inline-block cta-enhanced text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl rounded-xl lg:rounded-2xl font-bold border-2 border-white/20 z-20 w-full sm:w-auto max-w-xs text-center"
              onClick={(e) => e.stopPropagation()}
            >
              Know More
            </a>
            
            {/* Animated gradient text below button */}
            <motion.p
              className="text-sm sm:text-base font-inter text-center mt-2 lg:mt-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent font-semibold px-4"
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
