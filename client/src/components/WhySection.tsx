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
      icon: <Shield className="h-8 w-8" />,
      title: "Ethical Governance",
      description: "Promote transparent, ethical governance"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability First",
      description: "Build a sustainability-first approach into everything we create"
    }
  ];

  // Hexagon CSS shape using clip-path
  const hexagonClipPath = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

  return (
    <section id="why" className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
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
            <h3 className="text-2xl md:text-3xl font-helvetica font-bold text-center mb-16 text-gray-800">
              India Front exists to:
            </h3>
            
            {/* Hexagonal Grid Layout */}
            <div className="relative max-w-5xl mx-auto">
              {/* Background decorative hexagons */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div 
                  className="absolute w-32 h-32 bg-blue top-0 left-1/4 transform -translate-x-1/2"
                  style={{ clipPath: hexagonClipPath }}
                ></div>
                <div 
                  className="absolute w-24 h-24 bg-gray-400 top-1/3 right-1/4 transform translate-x-1/2"
                  style={{ clipPath: hexagonClipPath }}
                ></div>
                <div 
                  className="absolute w-20 h-20 bg-blue bottom-1/4 left-1/3"
                  style={{ clipPath: hexagonClipPath }}
                ></div>
              </div>

              {/* Hexagonal arrangement of goals */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 relative">
                {/* Center hexagon - first item */}
                <motion.div
                  className="md:col-start-2 lg:col-start-2 lg:col-span-2 flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="w-48 h-48 bg-white relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300"
                    style={{ clipPath: hexagonClipPath }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-blue to-blue-600 opacity-90"
                      whileHover={{ opacity: 1 }}
                    />
                    <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center text-white z-10">
                      <div className="w-12 h-12 mb-3 flex items-center justify-center">
                        {goals[0].icon}
                      </div>
                      <h4 className="font-helvetica font-bold text-sm mb-2">{goals[0].title}</h4>
                      <p className="font-nunito text-xs leading-tight">{goals[0].description.substring(0, 60)}...</p>
                    </div>
                  </div>
                </motion.div>

                {/* Top row hexagons */}
                <motion.div
                  className="lg:col-start-1 flex justify-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="w-40 h-40 bg-white relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                    style={{ clipPath: hexagonClipPath }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center z-10">
                      <div className="w-10 h-10 mb-2 text-blue flex items-center justify-center">
                        {goals[1].icon}
                      </div>
                      <h4 className="font-helvetica font-bold text-xs mb-1 text-gray-800">{goals[1].title}</h4>
                      <p className="font-nunito text-xs text-gray-600 leading-tight">{goals[1].description.substring(0, 50)}...</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="lg:col-start-4 flex justify-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="w-40 h-40 bg-white relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                    style={{ clipPath: hexagonClipPath }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center z-10">
                      <div className="w-10 h-10 mb-2 text-blue flex items-center justify-center">
                        {goals[2].icon}
                      </div>
                      <h4 className="font-helvetica font-bold text-xs mb-1 text-gray-800">{goals[2].title}</h4>
                      <p className="font-nunito text-xs text-gray-600 leading-tight">{goals[2].description.substring(0, 50)}...</p>
                    </div>
                  </div>
                </motion.div>

                {/* Middle row hexagons */}
                <motion.div
                  className="md:col-start-1 flex justify-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="w-36 h-36 bg-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ clipPath: hexagonClipPath }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 p-5 flex flex-col items-center justify-center text-center z-10">
                      <div className="w-8 h-8 mb-2 text-blue flex items-center justify-center">
                        {goals[3].icon}
                      </div>
                      <h4 className="font-helvetica font-bold text-xs mb-1 text-gray-800">{goals[3].title}</h4>
                      <p className="font-nunito text-xs text-gray-600 leading-tight">{goals[3].description.substring(0, 40)}...</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="md:col-start-3 flex justify-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="w-36 h-36 bg-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ clipPath: hexagonClipPath }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 p-5 flex flex-col items-center justify-center text-center z-10">
                      <div className="w-8 h-8 mb-2 text-blue flex items-center justify-center">
                        {goals[4].icon}
                      </div>
                      <h4 className="font-helvetica font-bold text-xs mb-1 text-gray-800">{goals[4].title}</h4>
                      <p className="font-nunito text-xs text-gray-600 leading-tight">{goals[4].description.substring(0, 40)}...</p>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom row hexagons */}
                <motion.div
                  className="md:col-start-2 lg:col-start-2 flex justify-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="w-32 h-32 bg-white relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                    style={{ clipPath: hexagonClipPath }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 p-4 flex flex-col items-center justify-center text-center z-10">
                      <div className="w-6 h-6 mb-1 text-blue flex items-center justify-center">
                        {goals[5].icon}
                      </div>
                      <h4 className="font-helvetica font-bold text-xs mb-1 text-gray-800">{goals[5].title}</h4>
                      <p className="font-nunito text-xs text-gray-600 leading-tight">{goals[5].description.substring(0, 30)}...</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="md:col-start-2 lg:col-start-3 flex justify-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="w-32 h-32 bg-white relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                    style={{ clipPath: hexagonClipPath }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 p-4 flex flex-col items-center justify-center text-center z-10">
                      <div className="w-6 h-6 mb-1 text-blue flex items-center justify-center">
                        {goals[6].icon}
                      </div>
                      <h4 className="font-helvetica font-bold text-xs mb-1 text-gray-800">{goals[6].title}</h4>
                      <p className="font-nunito text-xs text-gray-600 leading-tight">{goals[6].description.substring(0, 30)}...</p>
                    </div>
                  </div>
                </motion.div>
              </div>
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