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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue/5 to-indigo/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-indigo/5 to-blue/10 rounded-full blur-3xl floating-element" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue/5 rounded-full blur-2xl floating-element" style={{animationDelay: '4s'}}></div>
        
        {/* Geometric shapes - hidden on mobile to prevent overlap with coming soon banner */}
        <div className="hidden md:block absolute top-20 right-1/4 w-8 h-8 border-2 border-blue/20 rotate-45 floating-element"></div>
        <div className="hidden md:block absolute bottom-40 left-1/4 w-6 h-6 bg-indigo-200/30 rounded-full floating-element" style={{animationDelay: '1s'}}></div>
        <div className="hidden md:block absolute top-1/3 right-20 w-4 h-4 bg-blue/20 rotate-45 floating-element" style={{animationDelay: '3s'}}></div>
        
        {/* Grid pattern - lighter on mobile */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 sm:opacity-20 md:opacity-30"></div>
      </div>
      {/* Coming Soon Banner */}
      <motion.div 
        className="absolute top-20 sm:top-24 md:top-28 lg:top-32 left-0 right-0 z-20 text-center px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 md:px-6 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
          ✨ Coming Soon
        </div>
      </motion.div>

      <div className="container mx-auto relative z-10 w-full max-w-7xl">
        <motion.div 
          className="pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-8 sm:pb-12 md:pb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Content Section */}
            <motion.div className="lg:text-left text-center order-1 lg:order-1" variants={itemVariants}>
              <h1 className="headline-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight text-center lg:text-left px-2 sm:px-4 lg:px-0">
                Through an Unfiltered Lens: Chronicling India's<br /> Economic Success with<br /> Intent-Driven Journalism
              </h1>
              <div className="flex items-center justify-center lg:justify-start mb-3 sm:mb-4 lg:mb-5">
                <div className="w-2 h-2 bg-blue/10 rounded-full mr-2"></div>
                <div className="w-2 h-2 bg-indigo/10 rounded-full mr-2"></div>
                <div className="w-2 h-2 bg-blue/10 rounded-full"></div>
              </div>
              <p className="headline-secondary text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 sm:mb-4 lg:mb-6 leading-snug text-center lg:text-left px-2 sm:px-4 lg:px-0">
                India Front, India's first theme-based solutions magazine launching soon
              </p>
              <p className="body-text text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-12 max-w-lg lg:mx-0 mx-auto leading-relaxed px-2 sm:px-4 lg:px-0">
                India Front Magazine reveals the way, providing effective solutions and strategic intelligence that illuminates India's journey toward tangible economic success, powered by intent-driven journalism.
              </p>
            </motion.div>

            {/* Visual Element - Responsive SVG */}
            <motion.div 
              className="flex justify-center lg:justify-end px-4 lg:px-0 order-2 lg:order-2 mt-4 sm:mt-6 lg:-mt-8"
              variants={itemVariants}
            >
              <svg 
                width="600" 
                height="450" 
                viewBox="0 0 600 450" 
                className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-lg xl:max-w-xl"
              >
                <defs>
                  <linearGradient id="journalismCore" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0058CA" stopOpacity="0.95"/>
                    <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.95"/>
                  </linearGradient>
                  <linearGradient id="economicGrowth" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
                    <stop offset="50%" stopColor="#34d399" stopOpacity="0.9"/>
                    <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.8"/>
                  </linearGradient>
                  <linearGradient id="innovationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.8"/>
                  </linearGradient>
                  <linearGradient id="growthFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(0,88,202,0.2)"/>
                    <stop offset="50%" stopColor="rgba(0,88,202,0.9)"/>
                    <stop offset="100%" stopColor="rgba(16,185,129,0.7)"/>
                  </linearGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Simple central journalism hub */}
                
                {/* Central journalism hub */}
                <g transform="translate(300, 225)">
                  <circle r="35" fill="url(#journalismCore)" stroke="rgba(255,255,255,0.8)" strokeWidth="3" filter="url(#glow)">
                    <animate attributeName="r" values="35;40;35" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="22" fill="rgba(255,255,255,0.3)"/>
                  
                  {/* Article/document icon */}
                  <g transform="translate(-7, -7)">
                    <rect x="1" y="1" width="12" height="10" rx="1" fill="white" fillOpacity="0.9"/>
                    <rect x="2.5" y="2.5" width="7" height="1.2" fill="rgba(0,88,202,0.8)"/>
                    <rect x="2.5" y="4.5" width="5" height="1" fill="rgba(0,88,202,0.6)"/>
                    <rect x="2.5" y="6.5" width="6" height="1" fill="rgba(0,88,202,0.6)"/>
                    <rect x="2.5" y="8.5" width="4" height="1" fill="rgba(0,88,202,0.6)"/>
                  </g>
                </g>
                

                
                {/* Growth sector nodes - Enhanced design */}
                <g>
                  {/* Manufacturing - top left */}
                  <g className="cursor-pointer">
                    <circle cx="150" cy="90" r="30" fill="rgba(16,185,129,0.9)" stroke="rgba(255,255,255,0.8)" strokeWidth="3">
                      <animate attributeName="r" values="30;35;30" dur="3s" repeatCount="indefinite"/>
                      <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
                    </circle>

                    <g transform="translate(150, 90)">
                      <rect x="-10" y="-7" width="20" height="14" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.4"/>
                      <rect x="-6" y="-4" width="4" height="4" stroke="white" strokeWidth="1.5" fill="none"/>
                      <rect x="2" y="-4" width="4" height="4" stroke="white" strokeWidth="1.5" fill="none"/>
                      <rect x="-6" y="1" width="4" height="4" stroke="white" strokeWidth="1.5" fill="none"/>
                      <rect x="2" y="1" width="4" height="4" stroke="white" strokeWidth="1.5" fill="none"/>
                    </g>
                    <title>Manufacturing</title>
                  </g>
                  
                  {/* Technology - top right */}
                  <g className="cursor-pointer">
                    <circle cx="450" cy="90" r="30" fill="rgba(168,85,247,0.9)" stroke="rgba(255,255,255,0.8)" strokeWidth="3">
                      <animate attributeName="r" values="30;35;30" dur="3s" repeatCount="indefinite"/>
                      <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
                    </circle>

                    <g transform="translate(450, 90)">
                      <rect x="-10" y="-6" width="20" height="12" rx="2" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.4"/>
                      <path d="M-6 6L6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M0 2L0 6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                    </g>
                    <title>Technology</title>
                  </g>
                  
                  {/* Infrastructure - right */}
                  <g className="cursor-pointer">
                    <circle cx="520" cy="225" r="28" fill="rgba(34,197,94,0.9)" stroke="rgba(255,255,255,0.8)" strokeWidth="3">
                      <animate attributeName="r" values="28;32;28" dur="3s" repeatCount="indefinite"/>
                      <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
                    </circle>

                    <g transform="translate(520, 225)">
                      <rect x="-9" y="-7" width="18" height="14" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.4"/>
                      <rect x="-6" y="-3.5" width="3" height="3" stroke="white" strokeWidth="1.5" fill="none"/>
                      <rect x="3" y="-3.5" width="3" height="3" stroke="white" strokeWidth="1.5" fill="none"/>
                      <rect x="-6" y="1" width="3" height="3" stroke="white" strokeWidth="1.5" fill="none"/>
                      <rect x="3" y="1" width="3" height="3" stroke="white" strokeWidth="1.5" fill="none"/>
                      <rect x="-2" y="5" width="4" height="2.5" stroke="white" strokeWidth="2" fill="white"/>
                    </g>
                    <title>Infrastructure</title>
                  </g>
                  
                  {/* Sustainability - bottom center */}
                  <g className="cursor-pointer">
                    <circle cx="300" cy="360" r="30" fill="rgba(59,130,246,0.9)" stroke="rgba(255,255,255,0.8)" strokeWidth="3">
                      <animate attributeName="r" values="30;35;30" dur="3s" repeatCount="indefinite"/>
                      <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
                    </circle>

                    <g transform="translate(300, 360)">
                      <path d="M0 -10C-3 -10 -5 -7 -5 -4C-5 -2 -4 -1 -3 0C-6 1 -8 4 -8 7C-8 10 -5 13 -2 13H2C5 13 8 10 8 7C8 4 6 1 3 0C4 -1 5 -2 5 -4C5 -7 3 -10 0 -10Z" 
                            stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.4"/>
                      <rect x="-1.5" y="13" width="3" height="8" fill="white"/>
                    </g>
                    <title>Sustainability</title>
                  </g>
                  
                  {/* Agriculture - left */}
                  <g className="cursor-pointer">
                    <circle cx="90" cy="225" r="30" fill="rgba(34,197,94,0.9)" stroke="rgba(255,255,255,0.8)" strokeWidth="3">
                      <animate attributeName="r" values="30;35;30" dur="4.2s" repeatCount="indefinite"/>
                      <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="4.2s" repeatCount="indefinite"/>
                    </circle>

                    <g transform="translate(90, 225)">
                      {/* Wheat/grain icon */}
                      <path d="M0 -10 L-3 -7 L-5 -4 L-3 -1 L0 2 L3 -1 L5 -4 L3 -7 Z" fill="white" stroke="white" strokeWidth="1"/>
                      <path d="M0 2 L0 10" stroke="white" strokeWidth="2.5"/>
                      <circle cx="-3" cy="-6" r="1.2" fill="white"/>
                      <circle cx="3" cy="-6" r="1.2" fill="white"/>
                      <circle cx="-2" cy="-3" r="1" fill="white"/>
                      <circle cx="2" cy="-3" r="1" fill="white"/>
                    </g>
                    <title>Agriculture</title>
                  </g>
                  
                  {/* Power - top center */}
                  <g className="cursor-pointer">
                    <circle cx="300" cy="75" r="30" fill="rgba(251,191,36,0.9)" stroke="rgba(255,255,255,0.8)" strokeWidth="3">
                      <animate attributeName="r" values="30;35;30" dur="3.7s" repeatCount="indefinite"/>
                      <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="3.7s" repeatCount="indefinite"/>
                    </circle>

                    <g transform="translate(300, 75)">
                      {/* Lightning bolt icon */}
                      <path d="M-3 -10 L-6 -2 L-2 -2 L-1 6 L4 -2 L0 -2 L-3 -10Z" fill="white" stroke="white" strokeWidth="1.5"/>
                    </g>
                    <title>Energy</title>
                  </g>
                  
                  {/* Healthcare - bottom right */}
                  <g className="cursor-pointer">
                    <circle cx="450" cy="330" r="30" fill="rgba(239,68,68,0.9)" stroke="rgba(255,255,255,0.8)" strokeWidth="3">
                      <animate attributeName="r" values="30;35;30" dur="3.3s" repeatCount="indefinite"/>
                      <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="3.3s" repeatCount="indefinite"/>
                    </circle>

                    <g transform="translate(450, 330)">
                      {/* Medical cross icon */}
                      <path d="M-2 -8 L2 -8 L2 -2 L8 -2 L8 2 L2 2 L2 8 L-2 8 L-2 2 L-8 2 L-8 -2 L-2 -2 Z" fill="white" stroke="white" strokeWidth="1"/>
                    </g>
                    <title>Healthcare</title>
                  </g>
                  
                  {/* Banking & Finance - bottom left */}
                  <g className="cursor-pointer">
                    <circle cx="150" cy="360" r="30" fill="rgba(59,130,246,0.9)" stroke="rgba(255,255,255,0.8)" strokeWidth="3">
                      <animate attributeName="r" values="30;35;30" dur="3.6s" repeatCount="indefinite"/>
                      <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="3.6s" repeatCount="indefinite"/>
                    </circle>

                    <g transform="translate(150, 360)">
                      {/* Bank/Finance icon - building with columns */}
                      <rect x="-8" y="-2" width="16" height="8" fill="white" stroke="white" strokeWidth="1.5"/>
                      <rect x="-8" y="-8" width="16" height="3" fill="white" stroke="white" strokeWidth="1"/>
                      {/* Columns */}
                      <rect x="-6" y="-5" width="2" height="5" fill="white"/>
                      <rect x="-1" y="-5" width="2" height="5" fill="white"/>
                      <rect x="4" y="-5" width="2" height="5" fill="white"/>
                      {/* Steps */}
                      <rect x="-9" y="6" width="18" height="2" fill="white"/>
                    </g>
                    <title>Banking & Finance</title>
                  </g>
                </g>
                
                {/* Enhanced connecting lines with energy flow */}
                <g>
                  {/* Central hub to Manufacturing */}
                  <path d="M 270 200 L 180 120" stroke="rgba(0,88,202,0.8)" strokeWidth="4" strokeLinecap="round">
                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="strokeWidth" values="4;5;4" dur="3s" repeatCount="indefinite"/>
                  </path>
                  {/* Central hub to Power */}
                  <path d="M 300 190 L 300 110" stroke="rgba(0,88,202,0.8)" strokeWidth="4" strokeLinecap="round">
                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="3.2s" repeatCount="indefinite"/>
                    <animate attributeName="strokeWidth" values="4;5;4" dur="3.2s" repeatCount="indefinite"/>
                  </path>
                  {/* Central hub to Technology */}
                  <path d="M 330 200 L 420 120" stroke="rgba(0,88,202,0.8)" strokeWidth="4" strokeLinecap="round">
                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="3.5s" repeatCount="indefinite"/>
                    <animate attributeName="strokeWidth" values="4;5;4" dur="3.5s" repeatCount="indefinite"/>
                  </path>
                  {/* Central hub to Infrastructure */}
                  <path d="M 335 225 L 485 225" stroke="rgba(0,88,202,0.8)" strokeWidth="4" strokeLinecap="round">
                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="3.8s" repeatCount="indefinite"/>
                    <animate attributeName="strokeWidth" values="4;5;4" dur="3.8s" repeatCount="indefinite"/>
                  </path>
                  {/* Central hub to Healthcare */}
                  <path d="M 325 245 L 425 305" stroke="rgba(0,88,202,0.8)" strokeWidth="4" strokeLinecap="round">
                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="4s" repeatCount="indefinite"/>
                    <animate attributeName="strokeWidth" values="4;5;4" dur="4s" repeatCount="indefinite"/>
                  </path>
                  {/* Central hub to Oil & Gas */}
                  <path d="M 275 245 L 175 335" stroke="rgba(0,88,202,0.8)" strokeWidth="4" strokeLinecap="round">
                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="4.8s" repeatCount="indefinite"/>
                    <animate attributeName="strokeWidth" values="4;5;4" dur="4.8s" repeatCount="indefinite"/>
                  </path>
                  {/* Central hub to Sustainability */}
                  <path d="M 300 260 L 300 325" stroke="rgba(0,88,202,0.8)" strokeWidth="4" strokeLinecap="round">
                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="4.2s" repeatCount="indefinite"/>
                    <animate attributeName="strokeWidth" values="4;5;4" dur="4.2s" repeatCount="indefinite"/>
                  </path>
                  {/* Central hub to Agriculture */}
                  <path d="M 265 225 L 125 225" stroke="rgba(0,88,202,0.8)" strokeWidth="4" strokeLinecap="round">
                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="4.5s" repeatCount="indefinite"/>
                    <animate attributeName="strokeWidth" values="4;5;4" dur="4.5s" repeatCount="indefinite"/>
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
              href="#join" 
              className="inline-block cta-enhanced text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-lg sm:text-xl lg:text-2xl rounded-lg lg:rounded-2xl font-bold border-2 border-white/20 z-20 w-full sm:w-auto max-w-xs text-center"
              onClick={scrollToJoin}
            >
              Shape India's Next
            </a>
            

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
