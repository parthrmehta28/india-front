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
            <h2 className="headline-primary text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight">
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
            {/* Image Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue/10 to-indigo-800/10 rounded-2xl blur-xl"></div>
                <img 
                  src="/india-crystal-final.png" 
                  alt="Crystal representing India's emerging power and radiant future" 
                  className="relative w-full max-w-sm h-auto rounded-xl shadow-2xl border border-white/20"
                />
              </div>
            </div>
            
            {/* Content Section */}
            <div className="lg:text-left text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-blue/10 shadow-xl">
                <p className="body-text text-lg md:text-xl leading-relaxed text-gray-700">
                  We believe our country's media can be a catalyst for economic progress. 
                  Thought leadership and journalism have the power to inspire change. 
                  The written word can become the guiding force for business ecosystems and contribute to national growth. 
                  We have committed ourselves to this path and are excited to collaborate with leaders to be the catalyst of transformation.
                </p>
              </div>
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
