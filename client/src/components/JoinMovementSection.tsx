import { AnimateOnScroll } from "@/pages/Home";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PenTool, Megaphone, ArrowRight, Users, TrendingUp, Award } from "lucide-react";

export default function JoinMovementSection() {
  const handleContributeClick = () => {
    // Scroll to contact section with context
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAdvertiseClick = () => {
    // Scroll to contact section with context
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="join" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Enhanced Section Header */}
          <AnimateOnScroll className="text-center mb-12 sm:mb-16 lg:mb-20 section-accent">
            <div className="pt-4 sm:pt-8">
              <h2 className="headline-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight px-4 sm:px-0" style={{paddingBottom: '8px', overflow: 'visible'}}>
                Join India's Growth Story
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue to-indigo-800 rounded-full mx-auto mb-6 sm:mb-8"></div>
              <p className="headline-secondary text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 px-4 sm:px-0">
                Two ways to be part of India Front Magazine
              </p>
            </div>
          </AnimateOnScroll>

          {/* Two CTA Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
            
            {/* Editorial Contributions Section */}
            <AnimateOnScroll>
              <motion.div 
                className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <PenTool size={128} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                      <PenTool className="text-white" size={20} />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-lora font-bold">Editorial Contributors</h3>
                  </div>
                  
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-lora mb-3 sm:mb-4">
                    Share Your Expertise. Shape India's Future.
                  </h4>
                  
                  <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 opacity-90 leading-relaxed">
                    Join thought leaders, industry experts, and visionaries contributing to India's first theme-based solutions magazine. Your insights can drive national progress.
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    <div className="flex items-center">
                      <Award size={14} className="mr-2 sm:mr-3 text-yellow-300 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Byline in India's premier thought leadership magazine</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={14} className="mr-2 sm:mr-3 text-yellow-300 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Reach decision-makers across business and policy</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp size={14} className="mr-2 sm:mr-3 text-yellow-300 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Build your reputation as an India growth expert</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleContributeClick}
                    className="cta-enhanced w-full text-white font-bold py-3 sm:py-4 lg:py-6 px-4 sm:px-6 lg:px-8 text-lg sm:text-xl lg:text-2xl rounded-xl sm:rounded-2xl border-2 border-white/20"
                  >
                    <span className="block sm:hidden">Contribute Article</span>
                    <span className="hidden sm:block">I Want to Contribute an Article</span>
                    <ArrowRight className="ml-2 sm:ml-3" size={18} />
                  </Button>
                </div>
              </motion.div>
            </AnimateOnScroll>

            {/* Advertiser Opportunities Section */}
            <AnimateOnScroll>
              <motion.div 
                className="bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <Megaphone size={128} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <Megaphone className="text-white" size={24} />
                    </div>
                    <h3 className="text-3xl font-playfair font-bold">Brand Partners</h3>
                  </div>
                  
                  <h4 className="text-2xl font-playfair mb-4">
                    Align Your Brand with India's Growth Vision.
                  </h4>
                  
                  <p className="text-xl mb-6 opacity-90 leading-relaxed">
                    Partner with India Front Magazine to reach influential leaders, policymakers, and business decision-makers who are actively shaping India's economic future.
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <TrendingUp size={16} className="mr-3 text-yellow-300" />
                      <span className="text-base">Access to India's most influential business leaders</span>
                    </div>
                    <div className="flex items-center">
                      <Award size={16} className="mr-3 text-yellow-300" />
                      <span className="text-base">Association with premium thought leadership content</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-3 text-yellow-300" />
                      <span className="text-base">Targeted reach to policy and decision makers</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleAdvertiseClick}
                    className="w-full bg-white text-indigo-800 hover:bg-gray-50 font-bold py-6 px-8 text-2xl rounded-2xl border-2 border-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  >
                    I Want to Advertise
                    <ArrowRight className="ml-3" size={24} />
                  </Button>
                </div>
              </motion.div>
            </AnimateOnScroll>
          </div>
          
          {/* Bottom Call to Action */}
          <AnimateOnScroll className="text-center mt-8 sm:mt-12 px-4 sm:px-0">
            <p className="text-lg sm:text-xl font-garamond text-gray-600">
              Ready to be part of India's transformation story? Get in touch with our team.
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}