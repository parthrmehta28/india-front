import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#why", label: "Unique to India Front" },
    { href: "#who", label: "Our Contributors" },
    { href: "#join", label: "Join the Community" }
  ];
  
  const navbarClasses = `fixed w-full z-[100] transition-all duration-300 ${
    scrolled ? "bg-white shadow-md py-1 md:py-2" : "bg-white/95 backdrop-blur-sm py-2 md:py-3"
  }`;

  return (
    <header className={`${navbarClasses} relative`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-18">
        <Logo />
        
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="font-bold text-lg hover:text-blue transition-colors font-nunito"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <button 
          className="md:hidden flex items-center" 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 bg-white w-full border-t border-gray-200 shadow-lg z-50"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="font-bold text-lg py-3 px-2 hover:text-blue hover:bg-gray-50 transition-colors font-nunito rounded-md block"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMobileMenu();
                    // Smooth scroll to section
                    const target = document.querySelector(link.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
