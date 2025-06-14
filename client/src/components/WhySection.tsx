import { AnimateOnScroll } from "@/pages/Home";
import { motion } from "framer-motion";
import { Target, Lightbulb, Brain, Users, Building, Shield, Leaf } from "lucide-react";

export default function WhySection() {
  const goals = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Problem-Solving Focus",
      description: "Move beyond pointing at problems to problem-solving with purpose"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Industry Empowerment", 
      description: "Empower startups and industry with practical, scalable insights"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Technology Awareness",
      description: "Drive awareness around Artificial Intelligence and other emerging technologies"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Inclusive Ecosystems",
      description: "Foster inclusive ecosystems across education, supply chains, and infrastructure"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Nation-Building Mindset",
      description: "Inspire a mindset of empowerment, ownership, and nation-building"
    },

    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability First",
      description: "Build a sustainability-first approach into everything we create"
    }
  ];

  return (
    <section id="why" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-helvetica font-bold mb-6">
              <span className="text-blue">Why</span> <span className="text-gray">India Front?</span>
            </h2>
            <div className="w-24 h-1 bg-blue mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-nunito text-gray-700 max-w-4xl mx-auto leading-relaxed">
              India doesn't need more debates. It needs inclusive, action-driven roadmaps.
              It needs leaders who can drive goal roadmapping across every sphere — business, governance, technology, sustainability, and national security.
            </p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-helvetica font-bold text-center mb-8 text-gray-800">
              India Front exists to:
            </h3>
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
          
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <p className="text-xl md:text-2xl font-nunito font-semibold text-gray-800 leading-relaxed">
              This is not just a conversation. It's a movement for growth — <a href="#join" className="text-[#0058ca] font-bold hover:underline transition-colors">one built on thought-leadership</a> to devise measurable action plans to propel our country's economy further.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}