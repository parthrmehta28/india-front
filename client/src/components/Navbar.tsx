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
    { href: "#join", label: "Join the Community" },
    { href: "#contact", label: "Contact" }
  ];
  
  const navbarClasses = `fixed w-full z-[100] transition-all duration-300 ${
    scrolled ? "bg-white shadow-md py-1 md:py-2" : "bg-white/95 backdrop-blur-sm py-2 md:py-3"
  }`;

  return (
    <header className={navbarClasses}>
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
            className="md:hidden bg-white w-full border-t border-gray-200 shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="font-bold text-lg py-2 hover:text-blue transition-colors font-nunito"
                  onClick={closeMobileMenu}
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
