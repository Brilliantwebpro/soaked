import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky/10 mb-6">
              <Sparkles className="w-4 h-4 text-sky" />
              <span className="text-sky text-sm font-medium">About Us</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mb-6 leading-tight">
              Property Cleaning
              <br />
              <span className="text-sky">Done Properly.</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At SOAKED, we believe every property deserves to look its best. 
              Our team of certified professionals uses state-of-the-art equipment 
              and eco-friendly solutions to restore your property's original beauty.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              With years of experience and thousands of satisfied customers, we've 
              perfected our craft to deliver exceptional results on every project. 
              From residential homes to commercial properties, we treat each space 
              with the care and attention it deserves.
            </p>

            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-heading font-bold text-sky">50+</div>
                <div className="text-gray-500 text-sm">Properties Cleaned</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-sky">98%</div>
                <div className="text-gray-500 text-sm">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-sky">5+</div>
                <div className="text-gray-500 text-sm">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-soft">
              <img 
                src="/Images/orig.jfif" 
                alt="Property Cleaning Service" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-hover"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-sky" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-navy">Premium Service</div>
                  <div className="text-gray-500 text-sm">On Every Job</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
