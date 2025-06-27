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
        
        {/* Launch Notification Section */}
        <div className="border-t border-white/20 pt-12 mt-12">
          <div className="max-w-md">
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