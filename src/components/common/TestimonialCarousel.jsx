import React, { useState, useEffect } from 'react';
        import { motion, AnimatePresence } from 'framer-motion';

        const TestimonialCarousel = () => {
       const testimonials = [
  {
    id: 1,
    name: "Siva Satya",
    company: "Pon Payir",
    image: "/images/14.png",
    text: "MyProBuddy gave us the clarity and support we needed to scale faster. The expert guidance made grant access easy.",
    rating: 5,
    grant: "AgriTech Innovation Grant"
  },
  {
    id: 2,
    name: "Surender",
    company: "Hawky.ai",
    image: "/images/17.png",
    text: "From strategy to execution, their team stood with us. We gained both funding and confidence in our journey.",
    rating: 5,
    grant: "DeepTech & AI Startup Grant"
  },
  {
    id: 3,
    name: "Adithya Mohanavel",
    company: "Tradent",
    image: "/images/15.png",
    text: "Thanks to MyProBuddy, we secured crucial funding and grew faster. Their process made everything simple to follow.",
    rating: 5,
    grant: "Export Readiness Grant"
  },
  {
    id: 4,
    name: "Praveen",
    company: "Phosphene Ai",
    image: "/images/16.png",
    text: "The end-to-end support and expert mentorship helped us unlock new opportunities with ease and speed.",
    rating: 5,
    grant: "AI Research & Innovation Grant"
  }
];


          const [currentIndex, setCurrentIndex] = useState(0);

          useEffect(() => {
            const timer = setInterval(() => {
              setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            }, 4000); // Change every 4 seconds

            return () => clearInterval(timer);
          }, [testimonials.length]);

          return (
            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  >
                    {[0, 1, 2].map((offset) => {
                      const testimonialIndex = (currentIndex + offset) % testimonials.length;
                      const testimonial = testimonials[testimonialIndex];
                      
                      return (
                        <motion.div
                          key={`${testimonial.id}-${offset}`}
                          initial={{ y: 50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: offset * 0.1 }}
                          className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300"
                        >
                          {/* Rating Stars */}
                          <div className="flex items-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-400 text-xl">⭐</span>
                            ))}
                          </div>

                          {/* Testimonial Text */}
                          <p className="text-global-4 font-poppins text-lg leading-relaxed mb-6 italic">
                            "{testimonial.text}"
                          </p>

                          {/* Grant Badge */}
                          <div className="inline-block bg-gradient-to-r from-global-5 to-red-600 text-white px-4 py-2 rounded-full text-sm font-poppins font-semibold mb-6">
                            {testimonial.grant}
                          </div>

                          {/* User Info */}
                          <div className="flex items-center">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                              <h4 className="font-poppins font-bold text-global-4">
                                {testimonial.name}
                              </h4>
                              <p className="text-global-6 font-poppins text-sm">
                                {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-global-5 scale-125' :'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        };

        export default TestimonialCarousel;