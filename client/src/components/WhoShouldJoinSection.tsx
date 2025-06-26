import { AnimateOnScroll } from "@/pages/Home";
import { motion } from "framer-motion";
import { User, Lightbulb, TrendingUp, Code } from "lucide-react";

export default function WhoShouldJoinSection() {
  const profiles = [
    {
      icon: <User className="h-6 w-6 text-blue" />,
      title: "Leaders & Entrepreneurs",
      description: "CEOs, CXOs, entrepreneurs, and founders driving innovation and growth"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-dark-blue" />,
      title: "Creators & Influencers",
      description: "Content creators and influencers with a voice that matters"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-gray" />,
      title: "Policymakers & Investors",
      description: "Innovators, investors, and policymakers shaping the future"
    },
    {
      icon: <Code className="h-6 w-6 text-blue" />,
      title: "Technologists & Strategists",
      description: "Technology experts, strategists, and social sector champions"
    },
    {
      icon: <User className="h-6 w-6 text-dark-blue" />,
      title: "Journalists & Advisors",
      description: "Editors, Columnists, Business Journalists, Media Owners"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-blue" />,
      title: "Young Innovators, Scholars and Academicians",
      description: "Exceptional talents who can shape India's future"
    }
  ];

  return (
    <section id="who" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="max-w-6xl mx-auto text-center section-accent mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="pt-2 sm:pt-4 md:pt-6 lg:pt-8">
            <h2 className="headline-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4 md:mb-6 leading-tight px-2 sm:px-4 lg:px-0">
              Who Are Our Contributors?
            </h2>
            <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue to-indigo-800 rounded-full mx-auto mb-4 sm:mb-6 md:mb-8"></div>
            <p className="headline-secondary text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 sm:px-4 lg:px-0">
              Changemakers Like You
            </p>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll className="max-w-4xl mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-2 sm:px-4 lg:px-0">
            {profiles.map((profile, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-3 sm:p-4 md:p-5 lg:p-6"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-light-blue flex items-center justify-center flex-shrink-0">
                    {profile.icon}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-helvetica font-bold leading-tight">{profile.title}</h3>
                </div>
                <p className="font-nunito text-sm sm:text-base leading-relaxed text-gray-700">{profile.description}</p>
              </motion.div>
            ))}
          </div>
          


        </AnimateOnScroll>
      </div>
    </section>
  );
}