import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, PenTool, Handshake } from "lucide-react";
import { AnimateOnScroll } from "@/pages/Home";

export default function ContactSection() {
  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 relative overflow-hidden">
      {/* Background Graphics - Similar to Why Section */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 sm:w-48 h-32 sm:h-48 bg-indigo-300/5 rounded-full blur-2xl"></div>
        
        {/* Geometric shapes - hidden on mobile to reduce clutter */}
        <div className="hidden sm:block absolute top-20 right-1/4 w-8 h-8 border-2 border-white/10 rotate-45"></div>
        <div className="hidden sm:block absolute bottom-40 left-1/4 w-6 h-6 bg-white/10 rounded-full"></div>
        <div className="hidden sm:block absolute top-1/3 right-20 w-4 h-4 bg-white/5 rotate-45"></div>
        
        {/* Grid pattern overlay - lighter on mobile */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] sm:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <h2 className="headline-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-2 sm:px-4 lg:px-0 text-white" style={{letterSpacing: '0.01em'}}>
              Join India's Growth Story
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 lg:px-0">
              Partner with us to shape India's economic narrative through solutions-focused journalism.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 max-w-6xl mx-auto items-stretch">
          {/* Editorial Contributions */}
          <AnimateOnScroll className="h-full">
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm h-full flex flex-col border border-white/20">
              <CardHeader className="text-center pb-4 sm:pb-6">
                <div className="bg-blue-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <PenTool className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-600" />
                </div>
                <CardTitle className="headline-secondary text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  Editorial
                </CardTitle>
                <CardDescription className="text-sm sm:text-base md:text-lg text-slate-600 px-2 sm:px-0">
                  To submit a guest article, press release, or to speak with our editorial team
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4 sm:space-y-6 flex-grow flex flex-col px-3 sm:px-6">
                <div className="space-y-3 sm:space-y-4 flex-grow">
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg h-20 sm:h-24 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-900 mb-1 sm:mb-2 text-sm sm:text-base">Guest Articles</h4>
                    <p className="text-blue-700 text-xs sm:text-sm">Contribute thought leadership pieces on growth sectors</p>
                  </div>
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg h-20 sm:h-24 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-900 mb-1 sm:mb-2 text-sm sm:text-base">Press Releases</h4>
                    <p className="text-blue-700 text-xs sm:text-sm">Share important announcements and industry updates</p>
                  </div>
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg h-20 sm:h-24 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-900 mb-1 sm:mb-2 text-sm sm:text-base">Be a Guest Editor for our Inaugural Edition</h4>
                    <p className="text-blue-700 text-xs sm:text-sm">Collaborate with our editorial team.</p>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="w-full h-10 sm:h-12 text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                    onClick={() => window.location.href = 'mailto:editor@indiafront.co.in'}
                  >
                    <Mail className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Write to Editorial Team</span>
                    <span className="sm:hidden">Contact Editorial</span>
                  </Button>
                </motion.div>
                
                <p className="text-sm sm:text-base font-medium text-slate-600">
                  editor@indiafront.co.in
                </p>
              </CardContent>
            </Card>
          </AnimateOnScroll>

          {/* Brand Partnerships */}
          <AnimateOnScroll className="h-full">
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm h-full flex flex-col border border-white/20">
              <CardHeader className="text-center pb-4 sm:pb-6">
                <div className="bg-purple-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Handshake className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-purple-600" />
                </div>
                <CardTitle className="headline-secondary text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  Brand Partnerships
                </CardTitle>
                <CardDescription className="text-sm sm:text-base md:text-lg text-slate-600 px-2 sm:px-0">
                  To advertise in our first edition and/or subsequent issues
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4 sm:space-y-6 flex-grow flex flex-col px-3 sm:px-6">
                <div className="space-y-3 sm:space-y-4 flex-grow">
                  <div className="bg-purple-50 p-3 sm:p-4 rounded-lg h-20 sm:h-24 flex flex-col justify-center">
                    <h4 className="font-semibold text-purple-900 mb-1 sm:mb-2 text-sm sm:text-base">First Edition Advertising</h4>
                    <p className="text-purple-700 text-xs sm:text-sm">Premier placement in our inaugural launch issue</p>
                  </div>
                  <div className="bg-purple-50 p-3 sm:p-4 rounded-lg h-20 sm:h-24 flex flex-col justify-center">
                    <h4 className="font-semibold text-purple-900 mb-1 sm:mb-2 text-sm sm:text-base">Subsequent Issues</h4>
                    <p className="text-purple-700 text-xs sm:text-sm">Ongoing partnerships across themed editions</p>
                  </div>
                  <div className="bg-purple-50 p-3 sm:p-4 rounded-lg h-20 sm:h-24 flex flex-col justify-center">
                    <h4 className="font-semibold text-purple-900 mb-1 sm:mb-2 text-sm sm:text-base">Custom Solutions</h4>
                    <p className="text-purple-700 text-xs sm:text-sm">Tailored advertising and marketing opportunities</p>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="w-full h-10 sm:h-12 text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all duration-300"
                    onClick={() => window.location.href = 'mailto:sales@indiafront.co.in'}
                  >
                    <Mail className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Partner With Us</span>
                    <span className="sm:hidden">Partner</span>
                  </Button>
                </motion.div>
                
                <p className="text-sm sm:text-base font-medium text-slate-600">
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