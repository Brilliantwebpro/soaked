import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Homeowner',
      rating: 5,
      text: 'SOAKED transformed our driveway from an eyesore to the best looking one on the block. The team was professional, punctual, and the results exceeded our expectations. Highly recommend!',
    },
    {
      name: 'James Rodriguez',
      location: 'Property Manager',
      rating: 5,
      text: 'We manage multiple properties and have used SOAKED for all our exterior cleaning needs. They consistently deliver excellent results and their communication is top-notch.',
    },
    {
      name: 'Emily Chen',
      location: 'Homeowner',
      rating: 5,
      text: 'I was amazed at how clean my patio looked after their service. It looked brand new! The team was friendly and efficient. Will definitely be using them again.',
    },
    {
      name: 'Michael Thompson',
      location: 'Business Owner',
      rating: 5,
      text: 'Our commercial building needed a deep clean and SOAKED delivered. They worked around our business hours and the results were phenomenal. Professional service throughout.',
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-sky/10 text-sky text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mb-4">
            What Our Clients
            <br />
            <span className="text-sky">Are Saying.</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-surface rounded-3xl p-8 md:p-12"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-2xl bg-sky/10 flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-sky" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-body">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky to-sky-light flex items-center justify-center">
                    <span className="text-white font-heading font-bold">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-navy">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center 
                         hover:border-sky hover:bg-sky/5 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-navy" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'w-8 bg-sky'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center 
                         hover:border-sky hover:bg-sky/5 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-navy" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
