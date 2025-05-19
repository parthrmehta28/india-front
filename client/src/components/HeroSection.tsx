import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://pixabay.com/get/g8339fa07ee316528cd7d858b8e5bf1ca6c142b2d3b30cb176a1f7f15cbeb468a661dd1dca5aa70e6fe73f3e1290ef4541a0f7b05a38766e8d82e92cb79108273_1280.jpg" 
          alt="India landscape with historic architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-playfair font-bold text-white text-shadow mb-6"
            variants={itemVariants}
          >
            Perspectives on India's Future
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8"
            variants={itemVariants}
          >
            A bold new magazine exploring India's politics, culture, economy, and global position
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Button 
              asChild
              size="lg"
              className="bg-saffron hover:bg-saffron/90 text-white transition-all hover:translate-y-[-2px] hover:shadow-lg"
            >
              <a href="#magazine">Preview Magazine</a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all hover:translate-y-[-2px] hover:shadow-lg"
            >
              <a href="#subscribe">Subscribe Now</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 text-center z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          ease: "easeInOut" 
        }}
      >
        <a href="#about" className="text-white inline-block">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
