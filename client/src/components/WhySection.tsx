import { motion } from "framer-motion";
import { Target, Users, Lightbulb, Leaf, TrendingUp, Shield } from "lucide-react";
import { AnimateOnScroll } from "@/pages/Home";

export default function WhySection() {
  const goals = [
    {
      icon: <Target className="h-7 w-7" />,
      title: "Unlocking Growth Pathways",
      description: "We move beyond criticism to offer actionable insights and strategic pathways for genuine growth",
      gradient: "from-blue-400 to-cyan-500",
      iconBg: "bg-gradient-to-br from-blue-400/20 to-cyan-500/20",
      iconColor: "text-blue-300"
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: "Deep Sector Analysis",
      description: "Every edition deep dives into growth sectors, pinpointing solutions to pressing economic issues",
      gradient: "from-green-400 to-emerald-500",
      iconBg: "bg-gradient-to-br from-green-400/20 to-emerald-500/20",
      iconColor: "text-green-300"
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Expert Collaboration",
      description: "We partner with industry leaders, providing research assistance and editorial guidelines for authoritative content",
      gradient: "from-orange-400 to-red-500",
      iconBg: "bg-gradient-to-br from-orange-400/20 to-red-500/20",
      iconColor: "text-orange-300"
    },
    {
      icon: <Lightbulb className="h-7 w-7" />,
      title: "Exclusive Insights",
      description: "Direction-giving, thought-provoking stories that unlock ecosystem growth with insights.",
      gradient: "from-purple-400 to-violet-500",
      iconBg: "bg-gradient-to-br from-purple-400/20 to-violet-500/20",
      iconColor: "text-purple-300"
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Business Ecosystem Empowerment",
      description: "Intent-driven journalism that empowers key business sectors to accelerate economic progress",
      gradient: "from-teal-400 to-cyan-500",
      iconBg: "bg-gradient-to-br from-teal-400/20 to-cyan-500/20",
      iconColor: "text-teal-300"
    },
    {
      icon: <Leaf className="h-7 w-7" />,
      title: "Nation-Building Focus",
      description: "Journalism as a driving force for progress, channeling media energy to build India's economic future",
      gradient: "from-yellow-400 to-amber-500",
      iconBg: "bg-gradient-to-br from-yellow-400/20 to-amber-500/20",
      iconColor: "text-yellow-300"
    }
  ];

  return (
    <section id="why" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 relative overflow-hidden">
      {/* Background Graphics - Similar to Hero Section */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 sm:w-48 h-32 sm:h-48 bg-indigo-300/5 rounded-full blur-2xl"></div>
        
        {/* Geometric shapes - hidden on mobile to reduce clutter */}
        <div className="hidden sm:block absolute top-20 right-1/4 w-8 h-8 border-2 border-white/10 rotate-45"></div>
        <div className="hidden sm:block absolute bottom-40 left-1/4 w-6 h-6 bg-white/10 rounded-full"></div>
        <div className="hidden sm:block absolute top-1/3 right-20 w-4 h-4 bg-white/5 rotate-45"></div>
        
        <motion.svg
          className="hidden sm:block absolute top-1/4 left-1/4 w-12 sm:w-16 h-12 sm:h-16 text-white/10"
          viewBox="0 0 24 24"
          fill="currentColor"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
        </motion.svg>
        
        {/* Grid pattern overlay - lighter on mobile */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] sm:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll className="max-w-6xl mx-auto text-center section-accent mb-8 sm:mb-12 md:mb-16">
          <div className="pt-2 sm:pt-4 md:pt-6 lg:pt-8">
            <h2 className="headline-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4 md:mb-6 leading-tight text-white px-2 sm:px-4 lg:px-0" style={{letterSpacing: '0.01em'}}>
              The India Front Edge: Our Process,<br />Quality, and Approach
            </h2>
            <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-white/60 to-white/40 rounded-full mx-auto mb-4 sm:mb-6 md:mb-8"></div>
            <p className="headline-secondary text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 text-white/90 px-2 sm:px-4 lg:px-0">
              Solutions-Focused Editorial Standards
            </p>
          </div>
        </AnimateOnScroll>
          
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:order-2">
            <div className="text-center lg:text-left px-2 sm:px-4 lg:px-0">
              <div className="space-y-4 sm:space-y-6">
                <p className="body-text text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed px-2 sm:px-4 lg:px-0">
                  Our <strong>Process</strong> is built on deeply understanding India's potential. We don't just report; we dig deep to uncover real-world ideas, actionable insights, and smart strategies. We collaborate closely with experts, providing them with research assistance, clear editorial guidelines, and outlines. This partnership ensures we capture and present powerful ideas, strategies, and roadmaps effectively.
                </p>
                <p className="body-text text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed px-2 sm:px-4 lg:px-0">
                  Our <strong>Quality</strong> shines in every detail. We identify topics that truly matter, delivering exclusive stories brimming with insights. Our articles speak with an expert and authoritative voice, always direction-giving and thought-provoking. We provide inputs that truly unlock ecosystem growth.
                </p>
                <p className="body-text text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed px-2 sm:px-4 lg:px-0">
                  Our <strong>Approach</strong> to journalism is clear: we aim to inform, educate, and grow business ecosystems through solutions-focused reporting. We're committed to being a driving force for progress, not just observers.
                </p>
                <p className="body-text text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed px-2 sm:px-4 lg:px-0 font-semibold">
                  Join us in shaping India's economic future.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end lg:order-1 order-1 mb-6 sm:mb-8 lg:mb-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/5 to-blue-400/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl max-w-xs sm:max-w-sm lg:max-w-md">
                {/* Abstract geometric illustration representing insights and solutions */}
                <svg 
                  width="280" 
                  height="200" 
                  viewBox="0 0 280 200" 
                  className="w-full h-auto"
                >
                  {/* Background grid pattern */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                    </pattern>
                    <linearGradient id="insightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#34D399" stopOpacity="0.8"/>
                    </linearGradient>
                  </defs>
                  
                  <rect width="280" height="200" fill="url(#grid)" opacity="0.3"/>
                  
                  {/* Central hub representing India Front */}
                  <circle cx="140" cy="100" r="25" fill="url(#insightGradient)" opacity="0.9"/>
                  <circle cx="140" cy="100" r="15" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
                  
                  {/* Connecting lines representing solutions flow */}
                  <path d="M 140 75 L 90 40" stroke="rgba(96,165,250,0.6)" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M 140 75 L 190 40" stroke="rgba(52,211,153,0.6)" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M 165 100 L 220 100" stroke="rgba(168,85,247,0.6)" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M 140 125 L 190 160" stroke="rgba(251,191,36,0.6)" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M 140 125 L 90 160" stroke="rgba(239,68,68,0.6)" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M 115 100 L 60 100" stroke="rgba(20,184,166,0.6)" strokeWidth="3" strokeLinecap="round"/>
                  
                  {/* Solution nodes */}
                  <circle cx="90" cy="40" r="12" fill="rgba(96,165,250,0.7)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                  <circle cx="190" cy="40" r="12" fill="rgba(52,211,153,0.7)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                  <circle cx="220" cy="100" r="12" fill="rgba(168,85,247,0.7)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                  <circle cx="190" cy="160" r="12" fill="rgba(251,191,36,0.7)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                  <circle cx="90" cy="160" r="12" fill="rgba(239,68,68,0.7)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                  <circle cx="60" cy="100" r="12" fill="rgba(20,184,166,0.7)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                  
                  {/* Flowing particles representing insights */}
                  <circle cx="125" cy="60" r="2" fill="rgba(255,255,255,0.8)">
                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="155" cy="60" r="2" fill="rgba(255,255,255,0.8)">
                    <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="180" cy="85" r="2" fill="rgba(255,255,255,0.8)">
                    <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="100" cy="85" r="2" fill="rgba(255,255,255,0.8)">
                    <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.8s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <div className="text-center mb-8 sm:mb-12">
            <p className="headline-secondary text-lg sm:text-xl md:text-2xl text-white/90 font-semibold">
              We Aim to Drive Real-World Impact
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`flex items-center justify-center w-10 h-10 ${goal.iconBg} rounded-lg mb-3`}>
                  <div className={goal.iconColor}>
                    {goal.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-lora font-bold mb-2 sm:mb-3 text-white">
                  {goal.title}
                </h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}