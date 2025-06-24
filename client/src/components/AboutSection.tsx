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
    <section id="about" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="max-w-6xl mx-auto text-center section-accent mb-16">
          <div className="pt-8">
            <h2 className="headline-primary text-3xl md:text-5xl lg:text-6xl mb-8 leading-relaxed pb-2">
              About India Front Magazine
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue to-indigo-800 rounded-full mx-auto mb-8"></div>
            <p className="headline-secondary text-xl md:text-2xl mb-12">
              India's First Theme-Based Solutions Magazine
            </p>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Section with Celebrate India Elements */}
            <div className="flex justify-center lg:justify-end relative">
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
                  className="relative w-full max-w-sm h-auto rounded-xl shadow-2xl border border-white/20"
                />
              </div>
            </div>
            
            {/* Content Section - Unboxed */}
            <div className="lg:text-left text-center relative">
              <p className="body-text text-lg md:text-xl leading-relaxed text-gray-700">
                We believe our country's media can be a catalyst for economic progress. 
                Thought leadership and journalism have the power to inspire change. 
                The written word can become the guiding force for business ecosystems and contribute to national growth. 
                We have committed ourselves to this path and are excited to collaborate with leaders to be the catalyst of transformation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-blue/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
