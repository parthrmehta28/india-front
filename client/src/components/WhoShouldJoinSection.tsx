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
    <section id="who" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-helvetica font-bold text-center mb-4 leading-tight tracking-normal">
            <span className="text-blue">Who Should</span> <span className="text-gray">Join?</span>
          </h2>
          <p className="text-xl md:text-2xl font-helvetica text-center text-gray mb-12">Changemakers Like You</p>
          <div className="w-20 h-1 bg-blue mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-light-blue flex items-center justify-center">
                    {profile.icon}
                  </div>
                  <h3 className="text-xl font-helvetica font-bold">{profile.title}</h3>
                </div>
                <p className="font-nunito">{profile.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-helvetica font-bold mb-4">Your Platform. Your Voice. Your Moment.</h3>
            <p className="text-lg font-nunito">
              India Front Magazine is looking for passionate individuals like you who are committed to driving India's progress 
              forward. If you see yourself in any of these roles, we invite you to join our readership community.
            </p>
          </div>

        </AnimateOnScroll>
      </div>
    </section>
  );
}