import { AnimateOnScroll } from "@/pages/Home";
import { Search, Globe, Scale, Users } from "lucide-react";

const features = [
  {
    icon: <Search className="text-saffron h-5 w-5" />,
    title: "Insightful Analysis",
    description: "Deep reporting and expert analysis on key issues"
  },
  {
    icon: <Globe className="text-indian-green h-5 w-5" />,
    title: "Global Perspective",
    description: "Understanding India's place in the world"
  },
  {
    icon: <Scale className="text-navy h-5 w-5" />,
    title: "Balanced Coverage",
    description: "Multiple perspectives on complex issues"
  },
  {
    icon: <Users className="text-saffron h-5 w-5" />,
    title: "Cultural Insights",
    description: "Celebrating India's rich diversity"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="max-w-6xl mx-auto text-center section-accent mb-16">
          <div className="pt-8">
            <h2 className="headline-primary text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              A magazine to Build India
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue to-indigo-800 rounded-full mx-auto mb-8"></div>
            <p className="tagline text-xl md:text-2xl mb-16">
              Powered by Ideas, Actions, and IMPACT
            </p>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-6xl mx-auto">
            {/* Decorative background elements */}
            <div className="relative">
              <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue/20 rounded-full transform -translate-y-1/2"></div>
              <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-indigo-800/20 rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/6 w-1 h-1 bg-indian-green/30 rounded-full"></div>
              
              {/* Image with enhanced styling */}
              <div className="mb-8 flex justify-center relative">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue/10 to-indigo-800/10 rounded-2xl blur-xl"></div>
                  <img 
                    src="/india-crystal-final.png" 
                    alt="Crystal representing India's emerging power and radiant future" 
                    className="relative w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-xl shadow-2xl border border-white/20"
                  />
                </div>
              </div>
              
              {/* Enhanced text with visual elements */}
              <div className="max-w-4xl mx-auto relative">
                <div className="absolute -left-4 top-0 w-1 h-16 bg-gradient-to-b from-blue to-indigo-800 rounded-full opacity-30"></div>
                <div className="absolute -right-4 bottom-0 w-1 h-16 bg-gradient-to-t from-indian-green to-blue rounded-full opacity-30"></div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue/10 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue/5 to-indigo/5 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <p className="body-text text-xl md:text-2xl text-center leading-relaxed mb-6">
                      We believe our country's media can be a <span className="font-bold text-blue bg-blue/10 px-2 py-1 rounded">catalyst for economic progress</span>.
                    </p>
                    <p className="body-text text-xl md:text-2xl text-center leading-relaxed mb-6">
                      Thought leadership and journalism have the power to inspire change. The written word can become the guiding force for business ecosystems and contribute to national growth.
                    </p>
                    <p className="body-text text-xl md:text-2xl text-center leading-relaxed">
                      We have committed ourselves to this path and are excited to collaborate with leaders to be the <span className="font-bold text-indigo-800 bg-indigo/10 px-2 py-1 rounded">catalyst of transformation</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
