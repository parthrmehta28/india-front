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
                India's continuous economic growth requires thought leaders to move beyond problem finding to highlighting solutions. We believe our country's media can be a catalyst for economic progress. To this end, performing "sectoral goal roadmapping" with leaders is crucial. We believe that solutions-focussed journalism and nation building oriented thought leadership can make India grow faster, more stronger, and more resilient. Our dream is to see journalism shaping the country's continuous progress. We are betting on you to help us fulfill our dream.
              </p>
              <p className="text-lg font-inter mb-6 leading-relaxed">
                We are calling on entrepreneurs, start-up promoters & innovators, CEOs, CTOs, CTIOs, CHROs, marketing professionals, AI experts, strategists, NGO founders, social activists, and social voices to step forward and contribute editorially by authoring thought leadership articles.
              </p>
              
              <div className="flex justify-center md:justify-start">
                <a 
                  href="#join" 
                  className="inline-block cta-button text-white px-6 md:px-[31.7px] py-3 md:py-[15.8px] text-base md:text-[17.8px] rounded-md font-semibold transition-all hover:translate-y-[-2px] hover:shadow-lg w-full md:w-auto max-w-xs md:max-w-none"
                >
                  Contribute Editorially
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
