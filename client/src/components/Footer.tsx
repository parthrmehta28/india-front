import { Logo } from "./Logo";

export default function Footer() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo className="filter brightness-0 invert" />
            </div>
            <p className="text-sm sm:text-base md:text-lg font-inter leading-relaxed mb-4 sm:mb-6 md:mb-8 max-w-2xl text-white/90">
              Accelerating India's progress with expert insights and solutions for a stronger, more inclusive economy.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-helvetica font-bold mb-4 sm:mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="font-inter text-base sm:text-lg text-white/80 hover:text-white transition-colors duration-300 block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Launch Notification & Community Section */}
        <div className="border-t border-white/20 pt-12 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Launch Notification Signup */}
            <div>
              <h3 className="text-xl font-helvetica font-bold mb-4 text-white">Be the First to Know</h3>
              <p className="text-white/90 font-inter mb-6">
                Get exclusive early access and launch updates for India's most influential thought leadership magazine.
              </p>
              
              <form 
                action="https://formspree.io/f/xanjaqle" 
                method="POST" 
                className="flex gap-3"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-white text-blue hover:bg-white/90 font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Notify Me
                </button>
              </form>
            </div>

            {/* Community Building */}
            <div>
              <h3 className="text-xl font-helvetica font-bold mb-4 text-white">Join Early Community</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:editor@indiafront.co.in" 
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-colors group"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Editorial Contributions</p>
                    <p className="text-white/70 text-sm">Share insights & analysis</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:sales@indiafront.co.in" 
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-colors group"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Brand Partnerships</p>
                    <p className="text-white/70 text-sm">Advertising & collaborations</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/70 font-inter text-sm">
              © 2025 India Front Magazine. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-white/70 hover:text-white font-inter text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white/70 hover:text-white font-inter text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}