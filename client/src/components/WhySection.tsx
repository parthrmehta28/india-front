import { AnimateOnScroll } from "@/pages/Home";
import { motion } from "framer-motion";
import { Target, Lightbulb, Brain, Users, Building, Leaf } from "lucide-react";

export default function WhySection() {
  const goals = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Problem-Solving Focus",
      description: "Thought leadership that goes beyond problems, towards solutions"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Industry Empowerment", 
      description: "Content that offers practical, scalable insights to empower startups and industry"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Technology Awareness",
      description: "Discussions that spotlight emerging technologies to be more future ready"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Inclusive Ecosystems",
      description: "A solutions platform that fosters inclusive ecosystems by bringing changemakers together to achieve measured outcomes for sustained growth"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Nation-Building Mindset",
      description: "Inspire a mindset of empowerment, ownership, and nation-building"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Sustainability First",
      description: "Highlight the importance of the sustainability first approach across growth sectors"
    }
  ];

  return (
    <section id="why" className="py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 relative overflow-hidden">
      {/* Background Graphics - Similar to Hero Section */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/3 rounded-full blur-2xl"></div>
        
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-20 right-20 w-4 h-4 bg-white/20 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-32 left-16 w-6 h-6 bg-blue/30 rounded-full"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/3 left-8 w-3 h-3 bg-white/15 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll className="max-w-6xl mx-auto">
          <div className="text-center mb-16 section-accent">
            <div className="pt-8">
              <h2 className="text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight text-white drop-shadow-2xl font-bold font-helvetica">
                Why India Front
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-white to-blue-200 rounded-full mx-auto mb-8 shadow-lg"></div>
              <p className="headline-secondary text-xl md:text-2xl mb-12 text-white/90 drop-shadow-lg">
                Solutions-focused journalism for India's growth trajectory
              </p>
            </div>
          </div>
          
          {/* Key Message - No Paragraphs */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/20 shadow-2xl">
              <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                In an era where information overload often clouds strategic thinking, India Front Magazine cuts through the noise to deliver what matters most: actionable insights that drive real progress. We spotlight solutions, focusing on business ecosystem development, policy innovation, and strategic thinking that transforms ideas into measurable impact.
              </p>
            </div>
          </div>
          
          <div className="mb-12">
            <p className="headline-secondary text-xl md:text-2xl text-center mb-12 text-white font-semibold drop-shadow-lg">
              Editorial Standards That Matter
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                      <div className="text-white">
                        {goal.icon}
                      </div>
                    </div>
                    <h4 className="headline-secondary text-lg font-bold text-white">{goal.title}</h4>
                  </div>
                  <p className="body-text text-white/80 leading-relaxed text-sm">{goal.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}