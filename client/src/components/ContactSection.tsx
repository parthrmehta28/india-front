import { motion } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, PenTool, Handshake } from "lucide-react";
import { AnimateOnScroll } from "@/pages/Home";

export default function ContactSection() {
  useEffect(() => {
    const handleFormSubmission = (formId: string, messageId: string) => {
      const form = document.getElementById(formId) as HTMLFormElement;
      const messageEl = document.getElementById(messageId) as HTMLParagraphElement;
      
      if (!form || !messageEl) return;
      
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);
        const action = form.getAttribute('action');
        
        if (!action || (!action.includes('xldnazpb') && !action.includes('xyzjlonj'))) {
          messageEl.innerHTML = '<span style="color: #ef4444;">Form configuration error. Please try again.</span>';
          return;
        }
        
        try {
          messageEl.innerHTML = '<span style="color: #fbbf24;">Sending...</span>';
          
          const response = await fetch(action, {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });
          
          if (response.ok) {
            form.reset();
            messageEl.innerHTML = '<span style="color: #22c55e;">✓ Thank you! Your submission has been sent successfully. We\'ll get back to you soon.</span>';
            
            // Hide success message after 5 seconds
            setTimeout(() => {
              messageEl.innerHTML = '';
            }, 5000);
          } else {
            const data = await response.json();
            if (data.errors) {
              const errorMessages = data.errors.map((error: any) => error.message).join(', ');
              throw new Error(errorMessages);
            } else {
              throw new Error('Form submission failed');
            }
          }
        } catch (error) {
          console.error('Form submission error:', error);
          messageEl.innerHTML = '<span style="color: #ef4444;">✗ Sorry, there was an error sending your submission. Please try again or contact us directly.</span>';
          
          // Hide error message after 8 seconds
          setTimeout(() => {
            messageEl.innerHTML = '';
          }, 8000);
        }
      });
    };
    
    // Initialize both forms
    handleFormSubmission('guestArticleForm', 'guestArticleFormMessage');
    handleFormSubmission('brandPartnershipForm', 'brandPartnershipFormMessage');
  }, []);

  return (
    <section id="join" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-gray-100 relative overflow-hidden">
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
            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 h-full flex flex-col border border-blue-600/20 relative overflow-hidden">
              {/* Background pattern for the card */}
              <div className="absolute inset-0">
                <div className="absolute top-4 right-4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-300/10 rounded-full blur-lg"></div>
              </div>
              
              <CardHeader className="text-center pb-4 sm:pb-6 relative z-10">
                <div className="bg-white/20 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <PenTool className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                </div>
                <CardTitle className="headline-secondary text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
                  For Guest Articles & Press Releases
                </CardTitle>
                <CardDescription className="text-sm sm:text-base md:text-lg text-white/80 px-2 sm:px-0">
                  Submit guest articles, press releases, or speak with our editorial team
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4 sm:space-y-6 flex-grow flex flex-col px-3 sm:px-6 relative z-10">
                
                {/* Editorial Email Display */}
                <div className="flex items-center justify-center mb-4 p-3 bg-white/10 rounded-lg border border-white/20">
                  <Mail className="h-5 w-5 text-white mr-3" />
                  <span className="text-white font-medium">editor@indiafront.co.in</span>
                </div>
                
                {/* Editorial Contact Form */}
                <form 
                  id="guestArticleForm"
                  action="https://formspree.io/f/xldnazpb" 
                  method="POST" 
                  className="space-y-3"
                >
                  <input type="hidden" name="_gotcha" style={{display: 'none'}} />
                  <input type="hidden" name="_subject" value="Guest Article / Press Release Inquiry" />
                  
                  <div>
                    <label htmlFor="editorial-name" className="block text-white text-sm font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      id="editorial-name"
                      name="name"
                      required
                      className="w-full px-3 py-2.5 bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="editorial-email" className="block text-white text-sm font-medium mb-2">Your Email *</label>
                    <input
                      type="email"
                      id="editorial-email"
                      name="email"
                      required
                      className="w-full px-3 py-2.5 bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="editorial-phone" className="block text-white text-sm font-medium mb-2">Your Contact Number</label>
                    <input
                      type="text"
                      id="editorial-phone"
                      name="phone"
                      className="w-full px-3 py-2.5 bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                      placeholder="Your contact number (optional)"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="editorial-company" className="block text-white text-sm font-medium mb-2">Your Company</label>
                    <input
                      type="text"
                      id="editorial-company"
                      name="company"
                      className="w-full px-3 py-2.5 bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                      placeholder="Your company name (optional)"
                    />
                  </div>
                  

                  

                  
                  <button
                    type="submit"
                    className="w-full h-11 text-sm font-semibold bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 transition-all duration-300 rounded-lg"
                  >
                    Send Inquiry
                  </button>
                </form>
                
                <p id="guestArticleFormMessage" className="text-sm text-center"></p>
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
                  For Advertising & Brand Partnerships
                </CardTitle>
                <CardDescription className="text-sm sm:text-base md:text-lg text-white/80 px-2 sm:px-0">
                  Advertise in our editions and explore partnership opportunities
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4 sm:space-y-6 flex-grow flex flex-col px-3 sm:px-6 relative z-10">
                
                {/* Brand Partnership Email Display */}
                <div className="flex items-center justify-center mb-4 p-3 bg-white/10 rounded-lg border border-white/20">
                  <Mail className="h-5 w-5 text-white mr-3" />
                  <span className="text-white font-medium">sales@indiafront.co.in</span>
                </div>
                
                {/* Brand Partnership Contact Form */}
                <form 
                  id="brandPartnershipForm"
                  action="https://formspree.io/f/xyzjlonj" 
                  method="POST" 
                  className="space-y-3"
                >
                  <input type="hidden" name="_gotcha" style={{display: 'none'}} />
                  <input type="hidden" name="_subject" value="Advertising / Brand Partnership Inquiry" />
                  
                  <div>
                    <label htmlFor="brand-name" className="block text-white text-sm font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      id="brand-name"
                      name="name"
                      required
                      className="w-full px-3 py-2.5 bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="brand-company" className="block text-white text-sm font-medium mb-2">Your Company</label>
                    <input
                      type="text"
                      id="brand-company"
                      name="company"
                      className="w-full px-3 py-2.5 bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                      placeholder="Your company name (optional)"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="brand-email" className="block text-white text-sm font-medium mb-2">Your Email *</label>
                    <input
                      type="email"
                      id="brand-email"
                      name="email"
                      required
                      className="w-full px-3 py-2.5 bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="brand-phone" className="block text-white text-sm font-medium mb-2">Your Contact Number</label>
                    <input
                      type="text"
                      id="brand-phone"
                      name="phone"
                      className="w-full px-3 py-2.5 bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                      placeholder="Your contact number (optional)"
                    />
                  </div>
                  

                  

                  
                  <button
                    type="submit"
                    className="w-full h-11 text-sm font-semibold bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 transition-all duration-300 rounded-lg"
                  >
                    Send Inquiry
                  </button>
                </form>
                
                <p id="brandPartnershipFormMessage" className="text-sm text-center"></p>
              </CardContent>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}