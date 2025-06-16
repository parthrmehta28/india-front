import { AnimateOnScroll } from "@/pages/Home";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialSection() {
  const testimonialVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <AnimateOnScroll className="text-center">
          <h2 className="text-3xl md:text-4xl font-helvetica font-bold mb-12">
            <span className="text-navy">Expert</span> <span className="text-saffron">Endorsements</span>
          </h2>
        </AnimateOnScroll>
        
        <AnimateOnScroll className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md"
              variants={testimonialVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-current text-saffron h-4 w-4" />
                ))}
              </div>
              <p className="italic mb-4 font-nunito">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold font-helvetica">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 font-nunito">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
