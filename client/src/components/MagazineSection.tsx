import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/pages/Home";
import { motion } from "framer-motion";
import { FEATURED_ARTICLES } from "@/lib/constants";

export default function MagazineSection() {
  const topics = [
    {
      number: "01",
      color: "bg-blue",
      title: "India's Economic Renaissance",
      description: "A deep dive into India's rapid economic growth, emerging industries, and the challenges of inclusive development."
    },
    {
      number: "02",
      color: "bg-dark-blue",
      title: "Digital Revolution",
      description: "How technology is transforming governance, business, and daily life across urban and rural India."
    },
    {
      number: "03",
      color: "bg-gray",
      title: "The Geopolitical Pivot",
      description: "Examining India's emerging role as a key player in global diplomacy and international relations."
    },
    {
      number: "04",
      color: "bg-blue",
      title: "Cultural Renaissance",
      description: "The revival and evolution of India's rich cultural heritage in a globalized world."
    }
  ];

  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="magazine" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="text-center">
          <h2 className="text-3xl md:text-4xl font-helvetica font-bold mb-4">
            <span className="text-blue">Upcoming</span> <span className="text-gray">Content</span>
          </h2>
          <p className="text-xl font-nunito max-w-3xl mx-auto mb-12">
            A preview of our platform's featured stories and exclusive content
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll className="mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-2/5">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Indian professionals and entrepreneurs collaborating to build India's future" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            
            <div className="lg:w-3/5">
              <h3 className="text-2xl md:text-3xl font-helvetica font-bold mb-6">Launch Content: <span className="text-blue">The New India</span></h3>
              <p className="text-lg font-nunito mb-6">
                Our platform explores India's transformation in the 21st century, examining the economic, political, social, and cultural changes reshaping the nation and its global position.
              </p>
              
              <div className="space-y-6">
                {topics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-12 h-12 flex-shrink-0 ${topic.color} rounded-full flex items-center justify-center text-white font-bold`}>
                      {topic.number}
                    </div>
                    <div>
                      <h4 className="text-xl font-helvetica font-bold mb-1">{topic.title}</h4>
                      <p className="font-nunito">{topic.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button 
                  asChild
                  className="bg-blue hover:bg-dark-blue text-white transition-all hover:translate-y-[-2px] hover:shadow-lg font-semibold"
                >
                  <a href="#join">Join the Movement</a>
                </Button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll>
          <h3 className="text-2xl font-helvetica font-bold text-center mb-10">Featured Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_ARTICLES.map((article, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue text-white text-sm font-semibold rounded-full mb-3">
                    {article.category}
                  </span>
                  <h4 className="text-xl font-helvetica font-bold mb-3">{article.title}</h4>
                  <p className="text-gray-600 font-nunito mb-4">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-nunito text-gray-500">By {article.author}</span>
                    <a href="#" className="text-blue font-medium font-nunito hover:underline">Read Preview</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
