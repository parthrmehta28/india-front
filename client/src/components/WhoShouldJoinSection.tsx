import { AnimateOnScroll } from "@/pages/Home";
import { motion } from "framer-motion";
import { User, Lightbulb, TrendingUp, Code } from "lucide-react";

export default function WhoShouldJoinSection() {
  const profiles = [
    {
      icon: <User className="h-6 w-6 text-navy" />,
      title: "Leaders & Entrepreneurs",
      description: "CEOs, CXOs, entrepreneurs, and founders driving innovation and growth"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-saffron" />,
      title: "Creators & Influencers",
      description: "Content creators and influencers with a voice that matters"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-indian-green" />,
      title: "Policymakers & Investors",
      description: "Innovators, investors, and policymakers shaping the future"
    },
    {
      icon: <Code className="h-6 w-6 text-navy" />,
      title: "Technologists & Strategists",
      description: "Technology experts, strategists, and social sector champions"
    }
  ];

  return (
    <section id="who" className="py-20 bg-lightGray">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-4">
            <span className="text-navy">Who Should</span> <span className="text-saffron">Join?</span>
          </h2>
          <div className="w-20 h-1 bg-indian-green mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profiles.map((profile, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    {profile.icon}
                  </div>
                  <h3 className="text-xl font-bold">{profile.title}</h3>
                </div>
                <p>{profile.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-playfair font-bold mb-4">Your Platform. Your Voice. Your Moment.</h3>
            <p className="text-lg">
              India First is looking for passionate individuals like you who are committed to driving India's progress 
              forward. If you see yourself in any of these roles, we invite you to join our movement.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}