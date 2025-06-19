import { AnimateOnScroll } from "@/pages/Home";
import { motion } from "framer-motion";
import { Target, Lightbulb, Brain, Users, Building, Leaf } from "lucide-react";

export default function WhySection() {
  const goals = [
    {
      icon: <Target className="h-7 w-7" />,
      title: "Problem-Solving Focus",
      description: "Thought leadership that goes beyond problems, towards solutions",
      gradient: "from-orange-400 to-red-500",
      iconBg: "bg-gradient-to-br from-orange-400/20 to-red-500/20",
      iconColor: "text-orange-300"
    },
    {
      icon: <Building className="h-7 w-7" />,
      title: "Industry Empowerment", 
      description: "Content that offers practical, scalable insights to empower startups and industry",
      gradient: "from-green-400 to-emerald-500",
      iconBg: "bg-gradient-to-br from-green-400/20 to-emerald-500/20",
      iconColor: "text-green-300"
    },
    {
      icon: <Brain className="h-7 w-7" />,
      title: "Technology Awareness",
      description: "Discussions that spotlight emerging technologies to be more future ready",
      gradient: "from-purple-400 to-violet-500",
      iconBg: "bg-gradient-to-br from-purple-400/20 to-violet-500/20",
      iconColor: "text-purple-300"
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Inclusive Ecosystems",
      description: "A solutions platform that fosters inclusive ecosystems by bringing changemakers together to achieve measured outcomes for sustained growth",
      gradient: "from-blue-400 to-cyan-500",
      iconBg: "bg-gradient-to-br from-blue-400/20 to-cyan-500/20",
      iconColor: "text-blue-300"
    },
    {
      icon: <Lightbulb className="h-7 w-7" />,
      title: "Nation-Building Mindset",
      description: "Inspire a mindset of empowerment, ownership, and nation-building",
      gradient: "from-yellow-400 to-amber-500",
      iconBg: "bg-gradient-to-br from-yellow-400/20 to-amber-500/20",
      iconColor: "text-yellow-300"
    },
    {
      icon: <Leaf className="h-7 w-7" />,
      title: "Sustainability First",
      description: "Highlight the importance of the sustainability first approach across growth sectors",
      gradient: "from-teal-400 to-green-500",
      iconBg: "bg-gradient-to-br from-teal-400/20 to-green-500/20",
      iconColor: "text-teal-300"
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
                  className="relative bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 group overflow-hidden"
                  whileHover={{ y: -8, scale: 1.03 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-xl ${goal.iconBg} backdrop-blur-sm flex items-center justify-center mr-4 border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={goal.iconColor}>
                        {goal.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white font-helvetica group-hover:text-white/95 transition-colors duration-300">{goal.title}</h4>
                  </div>
                  <p className="text-white/85 leading-relaxed text-sm font-nunito group-hover:text-white/90 transition-colors duration-300">{goal.description}</p>
                  
                  {/* Subtle gradient border effect on hover */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${goal.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}