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
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="w-full md:w-1/2 flex justify-center md:pt-2">
              <img 
                src="/india-crystal-final.png" 
                alt="Crystal representing India's emerging power and radiant future" 
                className="w-full max-w-md md:max-w-lg h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col justify-start">
              <p className="text-lg font-inter mb-6 leading-relaxed">
                We believe our country's media can be a catalyst for economic progress. We believe thought leadership and journalism have the power to inspire change. The written word can become the guiding force for business ecosystems to grow and subsequently contribute to the country's growth. We have committed ourselves to this path and are excited to collaborate with leaders to enable the change we seek.
              </p>


            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
