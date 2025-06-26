import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, PenTool, Handshake } from "lucide-react";
import { AnimateOnScroll } from "@/pages/Home";

export default function ContactSection() {
  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-gray-100 relative overflow-hidden">
      {/* Background Graphics - Subtle light version */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gray-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 sm:w-48 h-32 sm:h-48 bg-blue-200/10 rounded-full blur-2xl"></div>
        
        {/* Geometric shapes - subtle gray */}
        <div className="hidden sm:block absolute top-20 right-1/4 w-8 h-8 border-2 border-gray-300/30 rotate-45"></div>
        <div className="hidden sm:block absolute bottom-40 left-1/4 w-6 h-6 bg-blue/20 rounded-full"></div>
        <div className="hidden sm:block absolute top-1/3 right-20 w-4 h-4 bg-gray-400/20 rotate-45"></div>
        
        {/* Grid pattern overlay - very subtle */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <h2 className="headline-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-2 sm:px-4 lg:px-0 text-gray-800" style={{letterSpacing: '0.01em'}}>
              Join India's Growth Story
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 lg:px-0">
              Partner with us to shape India's economic narrative through solutions-focused journalism.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 max-w-6xl mx-auto items-stretch">
          {/* Editorial Contributions */}
          <AnimateOnScroll className="h-full">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-indigo-200 via-indigo-300 to-indigo-400 h-full flex flex-col border border-indigo-400/50 relative overflow-hidden">
              {/* Background pattern for the card */}
              <div className="absolute inset-0">
                <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-indigo-500/20 rounded-full blur-lg"></div>
              </div>
              
              <CardHeader className="text-center pb-4 sm:pb-6 relative z-10">
                <div className="bg-white/30 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <PenTool className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-indigo-800" />
                </div>
                <CardTitle className="headline-secondary text-lg sm:text-xl md:text-2xl lg:text-3xl text-indigo-900">
                  Editorial
                </CardTitle>
                <CardDescription className="text-sm sm:text-base md:text-lg text-indigo-800/90 px-2 sm:px-0">
                  To submit a guest article, press release, or to speak with our editorial team
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4 sm:space-y-6 flex-grow flex flex-col px-3 sm:px-6 relative z-10">
                <div className="space-y-3 sm:space-y-4 flex-grow">
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-3 sm:p-4 rounded-lg h-20 sm:h-24 flex flex-col justify-center">
                    <h4 className="font-semibold text-indigo-900 mb-1 sm:mb-2 text-sm sm:text-base">Guest Articles</h4>
                    <p className="text-indigo-800 text-xs sm:text-sm">Contribute thought leadership pieces on growth sectors</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-3 sm:p-4 rounded-lg h-20 sm:h-24 flex flex-col justify-center">
                    <h4 className="font-semibold text-indigo-900 mb-1 sm:mb-2 text-sm sm:text-base">Press Releases</h4>
                    <p className="text-indigo-800 text-xs sm:text-sm">Share important announcements and industry updates</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-3 sm:p-4 rounded-lg h-20 sm:h-24 flex flex-col justify-center">
                    <h4 className="font-semibold text-indigo-900 mb-1 sm:mb-2 text-sm sm:text-base">Be a Guest Editor for our Inaugural Edition</h4>
                    <p className="text-indigo-800 text-xs sm:text-sm">Collaborate with our editorial team.</p>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="w-full h-10 sm:h-12 text-sm sm:text-base md:text-lg font-semibold bg-white/20 hover:bg-white/30 text-indigo-900 border border-white/30 hover:border-white/50 transition-all duration-300"
                    onClick={() => window.location.href = 'mailto:editor@indiafront.co.in'}
                  >
                    <Mail className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Write to Editorial Team</span>
                    <span className="sm:hidden">Contact Editorial</span>
                  </Button>
                </motion.div>
                
                <p className="text-sm sm:text-base font-medium text-indigo-900">
                  editor@indiafront.co.in
                </p>
              </CardContent>
            </Card>
          </AnimateOnScroll>

          {/* Brand Partnerships */}
          <AnimateOnScroll className="h-full">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 h-full flex flex-col border border-indigo-600/20 relative overflow-hidden">
              {/* Background pattern for the card */}
              <div className="absolute inset-0">
                <div className="absolute top-4 right-4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-indigo-300/10 rounded-full blur-lg"></div>
              </div>
              
              <CardHeader className="text-center pb-4 sm:pb-6 relative z-10">
                <div className="bg-white/20 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Handshake className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                </div>
                <CardTitle className="headline-secondary text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
                  Brand Partnerships
                </CardTitle>
                <CardDescription className="text-sm sm:text-base md:text-lg text-white/80 px-2 sm:px-0">
                  To advertise in our first edition and/or subsequent issues
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4 sm:space-y-6 flex-grow flex flex-col px-3 sm:px-6 relative z-10">
                <div className="space-y-3 sm:space-y-4 flex-grow">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 sm:p-4 rounded-lg h-20 sm:h-24 flex flex-col justify-center">
                    <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">First Edition Advertising</h4>
                    <p className="text-white/80 text-xs sm:text-sm">Premier placement in our inaugural launch issue</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 sm:p-4 rounded-lg h-20 sm:h-24 flex flex-col justify-center">
                    <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Subsequent Issues</h4>
                    <p className="text-white/80 text-xs sm:text-sm">Ongoing partnerships across themed editions</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 sm:p-4 rounded-lg h-20 sm:h-24 flex flex-col justify-center">
                    <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Custom Solutions</h4>
                    <p className="text-white/80 text-xs sm:text-sm">Tailored advertising and marketing opportunities</p>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="w-full h-10 sm:h-12 text-sm sm:text-base md:text-lg font-semibold bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 transition-all duration-300"
                    onClick={() => window.location.href = 'mailto:sales@indiafront.co.in'}
                  >
                    <Mail className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Partner With Us</span>
                    <span className="sm:hidden">Partner</span>
                  </Button>
                </motion.div>
                
                <p className="text-sm sm:text-base font-medium text-white/90">
                  sales@indiafront.co.in
                </p>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}