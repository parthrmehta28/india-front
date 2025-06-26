import { motion } from "framer-motion";
import { Target, Users, Lightbulb, Leaf, TrendingUp, Shield } from "lucide-react";
import { AnimateOnScroll } from "@/pages/Home";

export default function WhySection() {
  const goals = [
    {
      icon: <Target className="h-7 w-7" />,
      title: "Strategic Solutions",
      description: "Solution-oriented journalism that provides clear, actionable pathways to growth",
      gradient: "from-blue-400 to-cyan-500",
      iconBg: "bg-gradient-to-br from-blue-400/20 to-cyan-500/20",
      iconColor: "text-blue-300"
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: "Growth-Focused Content",
      description: "Every article contributes to understanding economic opportunities and development strategies",
      gradient: "from-green-400 to-emerald-500",
      iconBg: "bg-gradient-to-br from-green-400/20 to-emerald-500/20",
      iconColor: "text-green-300"
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Evidence-Based Analysis",
      description: "Rigorous research and data-driven insights inform every piece of content",
      gradient: "from-orange-400 to-red-500",
      iconBg: "bg-gradient-to-br from-orange-400/20 to-red-500/20",
      iconColor: "text-orange-300"
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Technology Awareness",
      description: "Discussions that spotlight emerging technologies to be more future ready",
      gradient: "from-purple-400 to-violet-500",
      iconBg: "bg-gradient-to-br from-purple-400/20 to-violet-500/20",
      iconColor: "text-purple-300"
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Inclusive Ecosystems",
      description: "A solutions platform that fosters inclusive ecosystems by bringing changemakers together to achieve measured outcomes for sustained growth",
      gradient: "from-blue-400 to-cyan-500",
      iconBg: "bg-gradient-to-br from-blue-400/20 to-cyan-500/20",
      iconColor: "text-blue-300"
    },
    {
      icon: <Lightbulb className="h-7 w-7" />,
      title: "Nation-Building Mindset",
      description: "Inspire a mindset of empowerment, ownership, and nation-building",
      gradient: "from-yellow-400 to-amber-500",
      iconBg: "bg-gradient-to-br from-yellow-400/20 to-amber-500/20",
      iconColor: "text-yellow-300"
    },
    {
      icon: <Leaf className="h-7 w-7" />,
      title: "Sustainability First",
      description: "Highlight the importance of the sustainability first approach across growth sectors",
      gradient: "from-teal-400 to-green-500",
      iconBg: "bg-gradient-to-br from-teal-400/20 to-green-500/20",
      iconColor: "text-teal-300"
    }
  ];

  return (
    <section id="why" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 relative overflow-hidden">
      {/* Background Graphics - Similar to Hero Section */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-300/5 rounded-full blur-2xl"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-1/4 w-8 h-8 border-2 border-white/10 rotate-45"></div>
        <div className="absolute bottom-40 left-1/4 w-6 h-6 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-4 h-4 bg-white/5 rotate-45"></div>
        
        <motion.svg
          className="absolute top-1/4 left-1/4 w-16 h-16 text-white/10"
          viewBox="0 0 24 24"
          fill="currentColor"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
        </motion.svg>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll className="max-w-6xl mx-auto text-center section-accent mb-12 sm:mb-16">
          <div className="pt-4 sm:pt-8">
            <h2 className="headline-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight text-white px-4 sm:px-0" style={{letterSpacing: '0.01em'}}>
              The India Front Edge: Our Process, Quality, and Approach
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/60 to-white/40 rounded-full mx-auto mb-6 sm:mb-8"></div>
            <p className="headline-secondary text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 text-white/90 px-4 sm:px-0">
              Solutions-Focused Editorial Standards
            </p>
          </div>
        </AnimateOnScroll>
          
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="space-y-6 sm:space-y-8 lg:order-2">
            <div className="text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <p className="body-text text-base sm:text-lg md:text-xl text-white/95 leading-relaxed px-4 sm:px-0">
                  Our <strong>Process</strong> is built on deeply understanding India's potential. We don't just report; we dig deep to uncover real-world ideas, actionable insights, and smart strategies. We collaborate closely with experts, providing them with research assistance, clear editorial guidelines, and outlines. This partnership ensures we capture and present powerful ideas, strategies, and roadmaps effectively.
                </p>
                <p className="body-text text-base sm:text-lg md:text-xl text-white/95 leading-relaxed px-4 sm:px-0">
                  Our <strong>Quality</strong> shines in every detail. We identify topics that truly matter, delivering exclusive stories brimming with insights you won't find anywhere else. Our articles speak with an expert and authoritative voice, always direction-giving and thought-provoking. We provide inputs that truly unlock ecosystem growth.
                </p>
                <p className="body-text text-base sm:text-lg md:text-xl text-white/95 leading-relaxed px-4 sm:px-0">
                  Our <strong>Approach</strong> to journalism is clear: we aim to inform, educate, and grow business ecosystems through solutions-focused reporting. We're committed to being a driving force for progress, not just observers.
                </p>
                <p className="body-text text-base sm:text-lg md:text-xl text-white/95 leading-relaxed px-4 sm:px-0 font-semibold">
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
              Editorial Standards That Matter
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