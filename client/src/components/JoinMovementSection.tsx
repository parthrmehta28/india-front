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
    <section id="join" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-helvetica font-bold mb-6 text-gray-900 leading-tight">
              Join India's Growth Story
            </h2>
            <p className="text-xl md:text-2xl font-helvetica text-gray-600 mb-4">
              Two ways to be part of India Front Magazine
            </p>
          </AnimateOnScroll>

          {/* Two CTA Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Editorial Contributions Section */}
            <AnimateOnScroll>
              <motion.div 
                className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <PenTool size={128} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <PenTool className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-helvetica font-bold">Editorial Contributors</h3>
                  </div>
                  
                  <h4 className="text-xl font-helvetica mb-4">
                    Share Your Expertise. Shape India's Future.
                  </h4>
                  
                  <p className="text-lg mb-6 opacity-90 leading-relaxed">
                    Join thought leaders, industry experts, and visionaries contributing to India's first theme-based solutions magazine. Your insights can drive national progress.
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <Award size={16} className="mr-3 text-yellow-300" />
                      <span className="text-sm">Byline in India's premier thought leadership magazine</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-3 text-yellow-300" />
                      <span className="text-sm">Reach decision-makers across business and policy</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp size={16} className="mr-3 text-yellow-300" />
                      <span className="text-sm">Build your reputation as an India growth expert</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleContributeClick}
                    className="w-full bg-white text-blue-700 hover:bg-gray-100 font-semibold py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg"
                  >
                    I Want to Contribute an Article
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </div>
              </motion.div>
            </AnimateOnScroll>

            {/* Advertiser Opportunities Section */}
            <AnimateOnScroll>
              <motion.div 
                className="bg-gradient-to-br from-saffron to-orange-600 rounded-2xl p-8 text-white relative overflow-hidden"
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
                    <h3 className="text-2xl font-helvetica font-bold">Brand Partners</h3>
                  </div>
                  
                  <h4 className="text-xl font-helvetica mb-4">
                    Align Your Brand with India's Growth Vision.
                  </h4>
                  
                  <p className="text-lg mb-6 opacity-90 leading-relaxed">
                    Partner with India Front Magazine to reach influential leaders, policymakers, and business decision-makers who are actively shaping India's economic future.
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <TrendingUp size={16} className="mr-3 text-yellow-300" />
                      <span className="text-sm">Access to India's most influential business leaders</span>
                    </div>
                    <div className="flex items-center">
                      <Award size={16} className="mr-3 text-yellow-300" />
                      <span className="text-sm">Association with premium thought leadership content</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-3 text-yellow-300" />
                      <span className="text-sm">Targeted reach to policy and decision makers</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleAdvertiseClick}
                    className="w-full bg-white text-orange-700 hover:bg-gray-100 font-semibold py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg"
                  >
                    I Want to Advertise
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </div>
              </motion.div>
            </AnimateOnScroll>
          </div>
          
          {/* Bottom Call to Action */}
          <AnimateOnScroll className="text-center mt-12">
            <p className="text-lg font-inter text-gray-600">
              Ready to be part of India's transformation story? Get in touch with our team.
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}