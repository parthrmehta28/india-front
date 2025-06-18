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
        <AnimateOnScroll className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-helvetica font-bold text-center mb-6 leading-tight tracking-normal text-gray-900">
            A magazine to <span className="text-blue">Build India</span>
          </h2>
          <p className="text-xl md:text-2xl font-helvetica text-center text-gray mb-12">
            — Powered by Ideas, Actions, and IMPACT
          </p>
          
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8 flex justify-center">
              <img 
                src="/india-crystal-final.png" 
                alt="Crystal representing India's emerging power and radiant future" 
                className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl font-inter leading-relaxed text-center px-4">
                We believe our country's media can be a catalyst for economic progress. We believe thought leadership and journalism have the power to inspire change. The written word can become the guiding force for business ecosystems and subsequently contribute to the country's growth. We have committed ourselves to this path and are excited to collaborate with leaders to be the catalyst of transformation.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
