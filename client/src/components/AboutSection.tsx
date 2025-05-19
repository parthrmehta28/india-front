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
          <div className="w-20 h-1 bg-indian-green mx-auto mb-12"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Editorial team working on magazine content" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-playfair font-semibold mb-4">Our Vision</h3>
              <p className="text-lg mb-4">
                <span className="font-bold text-navy">India First</span> is a pioneering magazine dedicated to exploring the complex tapestry of contemporary India. We aim to be the premier platform for insightful analysis, thought-provoking perspectives, and rigorous journalism on India's evolving socio-political landscape.
              </p>
              <p className="text-lg mb-6">
                Our team of experienced journalists, leading academics, and prominent thinkers bring depth and nuance to discussions about India's domestic challenges and its emerging role on the global stage.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <div className="flex items-center mb-2">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
