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
              <div className="flex items-center justify-center lg:justify-start mb-4 lg:mb-5">
                <div className="w-2 h-2 bg-blue/10 rounded-full mr-2"></div>
                <div className="w-2 h-2 bg-indigo/10 rounded-full mr-2"></div>
                <div className="w-2 h-2 bg-blue/10 rounded-full"></div>
              </div>
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
                width="520" 
                height="380" 
                viewBox="0 0 520 380" 
                className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
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
                
                {/* Journalism as Catalyst - Spark igniting economic progress */}
                
                {/* Central journalism spark/catalyst */}
                <g transform="translate(260, 180)">
                  {/* Main catalyst core - journalism */}
                  <circle r="35" fill="url(#journalismCore)" stroke="rgba(255,255,255,0.9)" strokeWidth="4" filter="url(#glow)">
                    <animate attributeName="r" values="35;40;35" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Inner spark */}
                  <circle r="25" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
                  
                  {/* Pen/Article icon at center */}
                  <g transform="translate(-12, -12)">
                    <rect x="2" y="2" width="20" height="16" rx="2" fill="white" fillOpacity="0.9"/>
                    <rect x="4" y="4" width="16" height="2" fill="rgba(0,88,202,0.8)"/>
                    <rect x="4" y="7" width="12" height="1.5" fill="rgba(0,88,202,0.6)"/>
                    <rect x="4" y="9.5" width="14" height="1.5" fill="rgba(0,88,202,0.6)"/>
                    <rect x="4" y="12" width="10" height="1.5" fill="rgba(0,88,202,0.6)"/>
                    <rect x="4" y="14.5" width="13" height="1.5" fill="rgba(0,88,202,0.6)"/>
                  </g>
                  
                  {/* "CATALYST" label */}
                  <text x="0" y="-50" textAnchor="middle" fill="rgba(0,88,202,0.9)" fontSize="13" fontWeight="bold">JOURNALISM</text>
                  <text x="0" y="-35" textAnchor="middle" fill="rgba(0,88,202,0.7)" fontSize="11" fontWeight="bold">THE CATALYST</text>
                  
                  {/* Radiating energy waves */}
                  <g stroke="rgba(255,165,0,0.6)" strokeWidth="3" fill="none">
                    <circle r="50">
                      <animate attributeName="r" values="50;70;50" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="stroke-opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle r="60">
                      <animate attributeName="r" values="60;80;60" dur="2.5s" repeatCount="indefinite"/>
                      <animate attributeName="stroke-opacity" values="0.4;0.1;0.4" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle r="70">
                      <animate attributeName="r" values="70;90;70" dur="3s" repeatCount="indefinite"/>
                      <animate attributeName="stroke-opacity" values="0.3;0.05;0.3" dur="3s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                </g>

                {/* Economic progress sectors - arranged in a circle around the catalyst */}
                
                {/* Innovation Hub - Top */}
                <g transform="translate(260, 80)">
                  <circle r="25" fill="url(#innovationGradient)" stroke="white" strokeWidth="3" filter="url(#glow)">
                    <animate attributeName="r" values="25;30;25" dur="3.5s" repeatCount="indefinite"/>
                  </circle>
                  <g transform="translate(-10, -10)">
                    <path d="M10 2l2.5 5L18 8l-4 4 1 5.5L10 15l-5 2.5L6 12l-4-4 5.5-1L10 2z" fill="white" fillOpacity="0.9"/>
                  </g>
                  <text x="0" y="40" textAnchor="middle" fill="rgba(139,92,246,0.9)" fontSize="11" fontWeight="bold">INNOVATION</text>
                  
                  {/* Energy flow from catalyst */}
                  <path d="M0 25 Q0 50 0 75" stroke="rgba(255,165,0,0.7)" strokeWidth="4" fill="none" strokeLinecap="round">
                    <animate attributeName="stroke-dasharray" values="0 100;50 0;0 100" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
                  </path>
                </g>

                {/* Manufacturing - Top Right */}
                <g transform="translate(380, 120)">
                  <circle r="25" fill="url(#economicGrowth)" stroke="white" strokeWidth="3" filter="url(#glow)">
                    <animate attributeName="r" values="25;30;25" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  <g transform="translate(-10, -8)">
                    <rect x="2" y="4" width="16" height="8" rx="2" fill="white" fillOpacity="0.9"/>
                    <rect x="5" y="1" width="10" height="3" rx="1" fill="white" fillOpacity="0.9"/>
                    <rect x="7" y="8" width="2" height="3" fill="rgba(16,185,129,0.7)"/>
                    <rect x="11" y="8" width="2" height="3" fill="rgba(16,185,129,0.7)"/>
                  </g>
                  <text x="0" y="40" textAnchor="middle" fill="rgba(16,185,129,0.9)" fontSize="11" fontWeight="bold">MANUFACTURING</text>
                  
                  {/* Energy flow from catalyst */}
                  <path d="M-25 -15 Q-50 -30 -85 -45" stroke="rgba(255,165,0,0.7)" strokeWidth="4" fill="none" strokeLinecap="round">
                    <animate attributeName="stroke-dasharray" values="0 120;60 0;0 120" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite"/>
                  </path>
                </g>

                {/* Digital Economy - Right */}
                <g transform="translate(420, 180)">
                  <circle r="25" fill="rgba(59,130,246,0.9)" stroke="white" strokeWidth="3" filter="url(#glow)">
                    <animate attributeName="r" values="25;30;25" dur="3.2s" repeatCount="indefinite"/>
                  </circle>
                  <g transform="translate(-10, -8)">
                    <rect x="3" y="2" width="14" height="10" rx="2" fill="white" fillOpacity="0.9"/>
                    <rect x="5" y="4" width="10" height="1" fill="rgba(59,130,246,0.7)"/>
                    <rect x="5" y="6" width="7" height="1" fill="rgba(59,130,246,0.7)"/>
                    <rect x="5" y="8" width="8" height="1" fill="rgba(59,130,246,0.7)"/>
                    <circle cx="15" cy="6" r="1.5" fill="rgba(59,130,246,0.7)"/>
                  </g>
                  <text x="0" y="40" textAnchor="middle" fill="rgba(59,130,246,0.9)" fontSize="11" fontWeight="bold">DIGITAL</text>
                  
                  {/* Energy flow from catalyst */}
                  <path d="M-25 0 Q-80 0 -125 0" stroke="rgba(255,165,0,0.7)" strokeWidth="4" fill="none" strokeLinecap="round">
                    <animate attributeName="stroke-dasharray" values="0 125;60 0;0 125" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
                  </path>
                </g>

                {/* Trade & Export - Bottom Right */}
                <g transform="translate(380, 240)">
                  <circle r="25" fill="rgba(234,179,8,0.9)" stroke="white" strokeWidth="3" filter="url(#glow)">
                    <animate attributeName="r" values="25;30;25" dur="3.8s" repeatCount="indefinite"/>
                  </circle>
                  <g transform="translate(-10, -8)">
                    <circle cx="10" cy="8" r="7" fill="white" fillOpacity="0.9"/>
                    <path d="M6 8h8M10 4v8" stroke="rgba(234,179,8,0.8)" strokeWidth="1.5"/>
                    <path d="M10 3l2 2-2 2M16 6l2 2-2 2" stroke="rgba(234,179,8,0.8)" strokeWidth="1" strokeLinecap="round"/>
                  </g>
                  <text x="0" y="40" textAnchor="middle" fill="rgba(234,179,8,0.9)" fontSize="11" fontWeight="bold">TRADE</text>
                  
                  {/* Energy flow from catalyst */}
                  <path d="M-25 15 Q-50 30 -85 45" stroke="rgba(255,165,0,0.7)" strokeWidth="4" fill="none" strokeLinecap="round">
                    <animate attributeName="stroke-dasharray" values="0 120;60 0;0 120" dur="2.8s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-opacity" values="0.7;1;0.7" dur="2.8s" repeatCount="indefinite"/>
                  </path>
                </g>

                {/* Employment - Bottom */}
                <g transform="translate(260, 280)">
                  <circle r="25" fill="rgba(16,185,129,0.9)" stroke="white" strokeWidth="3" filter="url(#glow)">
                    <animate attributeName="r" values="25;30;25" dur="4.2s" repeatCount="indefinite"/>
                  </circle>
                  <g transform="translate(-8, -8)">
                    <circle cx="6" cy="4" r="2" fill="white" fillOpacity="0.9"/>
                    <rect x="2" y="6" width="8" height="6" rx="1" fill="white" fillOpacity="0.9"/>
                    <circle cx="10" cy="4" r="2" fill="white" fillOpacity="0.9"/>
                    <rect x="6" y="6" width="8" height="6" rx="1" fill="white" fillOpacity="0.9"/>
                  </g>
                  <text x="0" y="40" textAnchor="middle" fill="rgba(16,185,129,0.9)" fontSize="11" fontWeight="bold">EMPLOYMENT</text>
                  
                  {/* Energy flow from catalyst */}
                  <path d="M0 -25 Q0 -50 0 -75" stroke="rgba(255,165,0,0.7)" strokeWidth="4" fill="none" strokeLinecap="round">
                    <animate attributeName="stroke-dasharray" values="0 100;50 0;0 100" dur="2.2s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-opacity" values="0.7;1;0.7" dur="2.2s" repeatCount="indefinite"/>
                  </path>
                </g>

                {/* Investment - Bottom Left */}
                <g transform="translate(140, 240)">
                  <circle r="25" fill="rgba(168,85,247,0.9)" stroke="white" strokeWidth="3" filter="url(#glow)">
                    <animate attributeName="r" values="25;30;25" dur="3.6s" repeatCount="indefinite"/>
                  </circle>
                  <g transform="translate(-8, -8)">
                    <rect x="2" y="8" width="12" height="6" rx="1" fill="white" fillOpacity="0.9"/>
                    <rect x="4" y="6" width="8" height="2" rx="1" fill="white" fillOpacity="0.9"/>
                    <rect x="6" y="4" width="4" height="2" rx="1" fill="white" fillOpacity="0.9"/>
                    <path d="M8 2l2 2-2 2" stroke="rgba(168,85,247,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
                  </g>
                  <text x="0" y="40" textAnchor="middle" fill="rgba(168,85,247,0.9)" fontSize="11" fontWeight="bold">INVESTMENT</text>
                  
                  {/* Energy flow from catalyst */}
                  <path d="M25 15 Q50 30 85 45" stroke="rgba(255,165,0,0.7)" strokeWidth="4" fill="none" strokeLinecap="round">
                    <animate attributeName="stroke-dasharray" values="0 120;60 0;0 120" dur="3.4s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-opacity" values="0.7;1;0.7" dur="3.4s" repeatCount="indefinite"/>
                  </path>
                </g>

                {/* Infrastructure - Left */}
                <g transform="translate(100, 180)">
                  <circle r="25" fill="rgba(239,68,68,0.9)" stroke="white" strokeWidth="3" filter="url(#glow)">
                    <animate attributeName="r" values="25;30;25" dur="2.9s" repeatCount="indefinite"/>
                  </circle>
                  <g transform="translate(-8, -6)">
                    <rect x="0" y="8" width="16" height="4" fill="white" fillOpacity="0.9"/>
                    <rect x="4" y="4" width="8" height="4" fill="white" fillOpacity="0.9"/>
                    <rect x="6" y="0" width="4" height="4" fill="white" fillOpacity="0.9"/>
                  </g>
                  <text x="0" y="40" textAnchor="middle" fill="rgba(239,68,68,0.9)" fontSize="11" fontWeight="bold">INFRASTRUCTURE</text>
                  
                  {/* Energy flow from catalyst */}
                  <path d="M25 0 Q80 0 125 0" stroke="rgba(255,165,0,0.7)" strokeWidth="4" fill="none" strokeLinecap="round">
                    <animate attributeName="stroke-dasharray" values="0 125;60 0;0 125" dur="2.6s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-opacity" values="0.7;1;0.7" dur="2.6s" repeatCount="indefinite"/>
                  </path>
                </g>

                {/* Progress indicators - ripple effects */}
                <g transform="translate(260, 180)">
                  <circle r="100" fill="none" stroke="rgba(255,165,0,0.2)" strokeWidth="2">
                    <animate attributeName="r" values="100;140;100" dur="4s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-opacity" values="0.2;0.05;0.2" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  <circle r="120" fill="none" stroke="rgba(255,165,0,0.15)" strokeWidth="1">
                    <animate attributeName="r" values="120;160;120" dur="5s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-opacity" values="0.15;0.03;0.15" dur="5s" repeatCount="indefinite"/>
                  </circle>
                </g>
                

                
                {/* Growth sector nodes - Enhanced design */}
                <g>
                  {/* Manufacturing - top left */}
                  <g className="cursor-pointer">
                    <circle cx="140" cy="80" r="24" fill="rgba(16,185,129,0.9)" stroke="rgba(255,255,255,0.8)" strokeWidth="3">
                      <animate attributeName="r" values="24;28;24" dur="3s" repeatCount="indefinite"/>
                      <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="140" cy="80" r="18" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
                    <g transform="translate(140, 80)">
                      <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.4" transform="scale(0.8) translate(-12, -12)"/>
                      <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" transform="scale(0.8) translate(-12, -12)"/>
                    </g>
                    <title>Manufacturing</title>
                  </g>
                  
                  {/* Technology - top right */}
                  <g className="cursor-pointer">
                    <circle cx="340" cy="80" r="24" fill="rgba(168,85,247,0.9)" stroke="rgba(255,255,255,0.8)" strokeWidth="3">
                      <animate attributeName="r" values="24;28;24" dur="3s" repeatCount="indefinite"/>
                      <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="340" cy="80" r="18" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
                    <g transform="translate(340, 80)">
                      <rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.4" transform="scale(0.8) translate(-12, -12)"/>
                      <path d="M8 21L16 21" stroke="white" strokeWidth="2.5" strokeLinecap="round" transform="scale(0.8) translate(-12, -12)"/>
                      <path d="M12 17L12 21" stroke="white" strokeWidth="2.5" strokeLinecap="round" transform="scale(0.8) translate(-12, -12)"/>
                    </g>
                    <title>Technology</title>
                  </g>
                  
                  {/* Infrastructure - right */}
                  <g className="cursor-pointer">
                    <circle cx="400" cy="180" r="24" fill="rgba(34,197,94,0.9)" stroke="rgba(255,255,255,0.8)" strokeWidth="3">
                      <animate attributeName="r" values="24;28;24" dur="3s" repeatCount="indefinite"/>
                      <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="400" cy="180" r="18" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
                    <g transform="translate(400, 180)">
                      <rect x="-8" y="-6" width="16" height="12" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.4"/>
                      <rect x="-5" y="-3" width="2.5" height="2.5" stroke="white" strokeWidth="1.5" fill="none"/>
                      <rect x="2.5" y="-3" width="2.5" height="2.5" stroke="white" strokeWidth="1.5" fill="none"/>
                      <rect x="-5" y="1" width="2.5" height="2.5" stroke="white" strokeWidth="1.5" fill="none"/>
                      <rect x="2.5" y="1" width="2.5" height="2.5" stroke="white" strokeWidth="1.5" fill="none"/>
                      <rect x="-1.5" y="4" width="3" height="2" stroke="white" strokeWidth="2" fill="white"/>
                    </g>
                    <title>Infrastructure</title>
                  </g>
                  
                  {/* Sustainability - bottom center */}
                  <g className="cursor-pointer">
                    <circle cx="240" cy="280" r="24" fill="rgba(59,130,246,0.9)" stroke="rgba(255,255,255,0.8)" strokeWidth="3">
                      <animate attributeName="r" values="24;28;24" dur="3s" repeatCount="indefinite"/>
                      <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="240" cy="280" r="18" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
                    <g transform="translate(240, 280)">
                      <path d="M0 -8C-2 -8 -4 -6 -4 -4C-4 -3 -3.5 -2 -3 -1.5C-5 -1 -6 1 -6 3C-6 5 -4 7 -2 7H2C4 7 6 5 6 3C6 1 5 -1 3 -1.5C3.5 -2 4 -3 4 -4C4 -6 2 -8 0 -8Z" 
                            stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.4"/>
                      <rect x="-1" y="7" width="2" height="6" fill="white"/>
                    </g>
                    <title>Sustainability</title>
                  </g>
                  
                  {/* Geopolitics - left */}
                  <g className="cursor-pointer">
                    <circle cx="80" cy="180" r="24" fill="rgba(236,72,153,0.9)" stroke="rgba(255,255,255,0.8)" strokeWidth="3">
                      <animate attributeName="r" values="24;28;24" dur="3s" repeatCount="indefinite"/>
                      <animate attributeName="stroke-opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="80" cy="180" r="18" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
                    <g transform="translate(80, 180)">
                      <circle cx="0" cy="0" r="10" stroke="white" strokeWidth="2.5" fill="white" fillOpacity="0.4"/>
                      <path d="M-10 0H10" stroke="white" strokeWidth="2.5"/>
                      <path d="M0 -10C5.5 -10 10 -5.5 10 0C10 5.5 5.5 10 0 10C-5.5 10 -10 5.5 -10 0C-10 -5.5 -5.5 -10 0 -10Z" stroke="white" strokeWidth="2" fill="none"/>
                      <circle cx="-4" cy="-4" r="1.5" fill="white"/>
                      <circle cx="4" cy="-4" r="1.5" fill="white"/>
                      <circle cx="0" cy="6" r="1.5" fill="white"/>
                    </g>
                    <title>Geopolitics</title>
                  </g>
                </g>
                
                {/* Enhanced connecting lines with energy flow */}
                <g>
                  <path d="M 215 155 L 164 104" stroke="rgba(0,88,202,0.8)" strokeWidth="3" strokeLinecap="round">
                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="strokeWidth" values="3;4;3" dur="3s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 265 155 L 316 104" stroke="rgba(0,88,202,0.8)" strokeWidth="3" strokeLinecap="round">
                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="3.2s" repeatCount="indefinite"/>
                    <animate attributeName="strokeWidth" values="3;4;3" dur="3.2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 272 180 L 376 180" stroke="rgba(0,88,202,0.8)" strokeWidth="3" strokeLinecap="round">
                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="3.5s" repeatCount="indefinite"/>
                    <animate attributeName="strokeWidth" values="3;4;3" dur="3.5s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 240 212 L 240 256" stroke="rgba(0,88,202,0.8)" strokeWidth="3" strokeLinecap="round">
                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="3.8s" repeatCount="indefinite"/>
                    <animate attributeName="strokeWidth" values="3;4;3" dur="3.8s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 208 180 L 104 180" stroke="rgba(0,88,202,0.8)" strokeWidth="3" strokeLinecap="round">
                    <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="4s" repeatCount="indefinite"/>
                    <animate attributeName="strokeWidth" values="3;4;3" dur="4s" repeatCount="indefinite"/>
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
