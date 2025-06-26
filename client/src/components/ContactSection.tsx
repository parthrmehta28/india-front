import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, PenTool, Handshake } from "lucide-react";
import { AnimateOnScroll } from "@/pages/Home";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="headline-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Join India's Growth Story
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Partner with us to shape India's economic narrative through solutions-focused journalism.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto items-stretch">
          {/* Editorial Contributions */}
          <AnimateOnScroll className="h-full">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm h-full flex flex-col">
              <CardHeader className="text-center pb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PenTool className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="headline-secondary text-xl sm:text-2xl md:text-3xl">
                  Editorial
                </CardTitle>
                <CardDescription className="text-base sm:text-lg text-slate-600">
                  To submit a guest article, press release, or to speak with our editorial team
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6 flex-grow flex flex-col">
                <div className="space-y-4 flex-grow">
                  <div className="bg-blue-50 p-4 rounded-lg h-24 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-900 mb-2">Guest Articles</h4>
                    <p className="text-blue-700 text-sm">Contribute thought leadership pieces on growth sectors</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg h-24 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-900 mb-2">Press Releases</h4>
                    <p className="text-blue-700 text-sm">Share important announcements and industry updates</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg h-24 flex flex-col justify-center">
                    <h4 className="font-semibold text-blue-900 mb-2">Be a Guest Editor for our Inaugural Edition</h4>
                    <p className="text-blue-700 text-sm">Collaborate with our editorial team.</p>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="w-full h-12 text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                    onClick={() => window.location.href = 'mailto:editor@indiafront.co.in'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Write to Editorial Team
                  </Button>
                </motion.div>
                
                <p className="text-base font-medium text-slate-600">
                  editor@indiafront.co.in
                </p>
              </CardContent>
            </Card>
          </AnimateOnScroll>

          {/* Brand Partnerships */}
          <AnimateOnScroll className="h-full">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm h-full flex flex-col">
              <CardHeader className="text-center pb-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="headline-secondary text-xl sm:text-2xl md:text-3xl">
                  Brand Partnerships
                </CardTitle>
                <CardDescription className="text-base sm:text-lg text-slate-600">
                  To advertise in our first edition and/or subsequent issues
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6 flex-grow flex flex-col">
                <div className="space-y-4 flex-grow">
                  <div className="bg-purple-50 p-4 rounded-lg h-24 flex flex-col justify-center">
                    <h4 className="font-semibold text-purple-900 mb-2">First Edition Advertising</h4>
                    <p className="text-purple-700 text-sm">Premier placement in our inaugural launch issue</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg h-24 flex flex-col justify-center">
                    <h4 className="font-semibold text-purple-900 mb-2">Subsequent Issues</h4>
                    <p className="text-purple-700 text-sm">Ongoing partnerships across themed editions</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg h-24 flex flex-col justify-center">
                    <h4 className="font-semibold text-purple-900 mb-2">Custom Solutions</h4>
                    <p className="text-purple-700 text-sm">Tailored advertising and marketing opportunities</p>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="w-full h-12 text-base sm:text-lg font-semibold bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all duration-300"
                    onClick={() => window.location.href = 'mailto:sales@indiafront.co.in'}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Partner With Us
                  </Button>
                </motion.div>
                
                <p className="text-base font-medium text-slate-600">
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