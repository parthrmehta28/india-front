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
          <h2 className="text-3xl md:text-4xl font-helvetica font-bold text-center mb-6">
            <span className="text-blue">A platform to Accelerate India's Progress</span>
          </h2>
          <p className="text-xl md:text-2xl font-helvetica text-center font-semibold text-gray mb-12">
            — Powered by Ideas, Action & Impact
          </p>
          
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <img 
                src="attached_assets/man_1749923987079.jpg" 
                alt="Team collaborating on nation-building initiatives" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="md:w-1/2">
              <p className="text-lg font-inter mb-6 leading-relaxed">
                India is no longer an emerging nation — she's an emerging power. But true leadership demands continuity. That's where India Front comes in — a national movement designed to unite problem solvers, change-makers and thought-leaders on a single platform to shape India's next chapter.
              </p>
              <p className="text-lg font-inter mb-6 leading-relaxed">
                We are calling on Entrepreneurs, Start-Up Promoters & Innovators, CEOs, CTOs, CIOs, CHROs, Marketing Professionals, AI Experts, Strategists, NGO Founders, Social Activists, and Social Voices to step forward — to not just dream about India's future, but actively build it.
              </p>
              <p className="text-lg font-inter mb-8 leading-relaxed">
                This is not just a conversation. It's a movement for growth — <span className="highlighted-text">one built on thought-leadership</span> to devise measurable action plans to propel our country's economy further.
              </p>
              
              <div className="text-center">
                <a 
                  href="#join" 
                  className="inline-block cta-button text-white px-[35.2px] py-[17.6px] text-[19.8px] rounded-md font-semibold transition-all hover:translate-y-[-2px] hover:shadow-lg"
                >
                  It's your Voice — Make it Count
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
