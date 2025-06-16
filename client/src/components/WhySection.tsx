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
      description: "Discussions that spotlight emerging technologies to shape India's digital future"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Inclusive Ecosystems",
      description: "Foster inclusive ecosystems, bringing changemakers together to develop roadmaps, execute plans to achieve measured outcomes for sustained growth."
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
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-helvetica font-bold text-center mb-4 leading-tight tracking-normal text-gray-900">
              <span className="text-blue">Why</span> India Front?
            </h2>
            <p className="text-xl md:text-2xl font-helvetica text-center text-gray mb-12">
              Thought leadership to Grow India.
            </p>
            <p className="text-lg font-inter leading-relaxed text-center max-w-4xl mx-auto mb-12">
              India doesn't need more debates. It needs inclusive, action-driven roadmaps.
              It needs leaders who can drive goal roadmapping across every sphere — business, governance, technology, sustainability, and national security.
            </p>
          </div>
          
          <div className="mb-12">
            <p className="text-xl md:text-2xl font-helvetica text-center text-gray mb-8">
              Unique to India Front - The Thought Leadership Platform
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