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
    <section id="about" className="py-20 bg-lightGray">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-4">
            <span className="text-saffron">About</span> <span className="text-navy">India First</span>
          </h2>
          <div className="w-20 h-1 bg-indian-green mx-auto mb-6"></div>
          
          <h3 className="text-xl md:text-2xl font-playfair text-center font-semibold mb-8">
            A Platform to Accelerate India's Progress — Powered by Ideas, Action & Impact
          </h3>
          
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Team collaborating on nation-building initiatives" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                India is no longer an emerging nation — she's an emerging power. But true leadership demands continuity. That's where India First comes in — a national movement designed to unite problem solvers, change-makers, and thought-leaders on a single platform to shape India's next chapter.
              </p>
              <p className="text-lg mb-6">
                We're calling on entrepreneurs, innovators, CXOs, creators, strategists, and social voices to step forward — to not just dream about India's future, but actively build it.
              </p>
              
              <p className="mb-4">
                This is not just a conversation. It's a movement for growth — one built on thought-leadership, cross-sector collaboration, and measurable action.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
