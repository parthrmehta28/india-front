import { AnimateOnScroll } from "@/pages/Home";
import { motion } from "framer-motion";
import { Target, Lightbulb, Brain, Users, Building, Shield, Leaf } from "lucide-react";

export default function WhySection() {
  const goals = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Problem-Solving Focus",
      description: "Thought leadership that goes beyond problems, towards solutions"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Industry Empowerment", 
      description: "Content that offers practical, scalable insights to empower startups and industry"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Technology Awareness",
      description: "Discussions that spotlight emerging technologies to be more future ready"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Inclusive Ecosystems",
      description: "A solutions platform that fosters inclusive ecosystems by bringing changemakers together to achieve measured outcomes for sustained growth"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Nation-Building Mindset",
      description: "Inspire a mindset of empowerment, ownership, and nation-building"
    },

    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability First",
      description: "Highlight the importance of the sustainability first approach across growth sectors"
    }
  ];

  return (
    <section id="why" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="max-w-6xl mx-auto">
          <div className="text-center mb-16 section-accent">
            <div className="pt-8">
              <h2 className="headline-primary text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Why India Front Magazine?
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue to-indigo-800 rounded-full mx-auto mb-8"></div>
              <p className="headline-secondary text-xl md:text-3xl mb-8">
                Solutions-focused journalism for India's growth trajectory
              </p>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto mb-12">
            <p className="body-text text-center mb-6">
              In an era where information overload often clouds strategic thinking, India Front Magazine cuts through the noise to deliver what matters most: <span className="font-bold text-blue bg-blue/10 px-2 py-1 rounded">actionable insights that drive real progress</span>.
            </p>
            <p className="body-text text-center mb-6">
              We don't just report on India's challenges — we spotlight the solutions. Our editorial approach focuses on business ecosystem development, policy innovation, and strategic thinking that transforms ideas into measurable impact.
            </p>
            <p className="body-text text-center">
              Every article, every analysis, every expert perspective is curated to help leaders, innovators, and decision-makers navigate India's dynamic growth landscape with clarity and confidence.
            </p>
          </div>
          
          <div className="mb-12">
            <p className="headline-secondary text-xl md:text-2xl text-center mb-8">
              Unique to India Front Magazine - Editorial Standards That Matter
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue text-white flex items-center justify-center mr-4">
                      {goal.icon}
                    </div>
                    <h4 className="text-lg font-helvetica font-bold text-gray-800">{goal.title}</h4>
                  </div>
                  <p className="text-gray-600 font-nunito leading-relaxed">{goal.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          

        </AnimateOnScroll>
      </div>
    </section>
  );
}