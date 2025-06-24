import { AnimateOnScroll } from "@/pages/Home";
import { TrendingUp, Target, Lightbulb, Users } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="text-blue h-6 w-6" />,
    title: "Economic Progress",
    description: "Media as catalyst for growth"
  },
  {
    icon: <Target className="text-indigo-800 h-6 w-6" />,
    title: "Strategic Focus",
    description: "Solutions-oriented journalism"
  },
  {
    icon: <Lightbulb className="text-blue h-6 w-6" />,
    title: "Thought Leadership",
    description: "Ideas that inspire change"
  },
  {
    icon: <Users className="text-indigo-800 h-6 w-6" />,
    title: "Collaboration",
    description: "Leaders driving transformation"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="max-w-6xl mx-auto text-center section-accent mb-12 sm:mb-16">
          <div className="pt-4 sm:pt-8">
            <h2 className="headline-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 leading-relaxed pb-2">
              About India Front Magazine
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue to-indigo-800 rounded-full mx-auto mb-6 sm:mb-8"></div>
            <p className="headline-secondary text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 px-4 sm:px-0">
              India's First Theme-Based Solutions Magazine
            </p>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            {/* Image Section with Celebrate India Elements */}
            <div className="flex justify-center lg:justify-end relative order-1 lg:order-2 mb-8 lg:mb-0">
              {/* Subtle India celebration elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 opacity-20">
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <circle cx="32" cy="32" r="30" fill="none" stroke="#FF9933" strokeWidth="2" strokeDasharray="4 4">
                    <animateTransform attributeName="transform" type="rotate" values="0 32 32;360 32 32" dur="20s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-12 h-12 opacity-15">
                <svg viewBox="0 0 48 48" className="w-full h-full">
                  <polygon points="24,8 28,20 40,20 30,28 34,40 24,32 14,40 18,28 8,20 20,20" fill="#138808" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;0.3;0.6" dur="3s" repeatCount="indefinite"/>
                  </polygon>
                </svg>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue/10 to-indigo-800/10 rounded-2xl blur-xl"></div>
                <img 
                  src="/india-crystal-final.png" 
                  alt="Crystal representing India's emerging power and radiant future" 
                  className="relative w-full max-w-xs sm:max-w-sm h-auto rounded-xl shadow-2xl border border-white/20"
                />
              </div>
            </div>
            
            {/* Content Section - Unboxed */}
            <div className="lg:text-left text-center relative space-y-4 sm:space-y-6 order-2 lg:order-1">
              <p className="body-text text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 px-4 sm:px-0">
                We don't just focus on problems; we're all about finding and sharing real solutions for India's key growth areas. We believe our country's media can genuinely drive economic progress, and that thought leadership and journalism have the power to inspire lasting change. Our aim is to help build an economy that's stronger, more welcoming to all, and growing fast. We do this by shining a light on growth solutions and ideas that truly make a difference.
              </p>
              
              <p className="body-text text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 px-4 sm:px-0">
                Every issue of India Front Magazine has a specific theme. We dive deep into one particular sector or a major economic theme. This way, you get a full picture of the challenges and, more importantly, how to succeed. We're committed to this path and excited to work with leaders to help transform our nation. We give our readers—from leaders to business owners—the knowledge they need to actually help India's economy grow.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-blue/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue/10 to-indigo-800/10 rounded-lg mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="headline-secondary text-lg font-semibold mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="body-text text-sm text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
