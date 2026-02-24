import { motion } from 'framer-motion'
import { ArrowLeftRight } from 'lucide-react'

const BeforeAfter = () => {
  return (
    <section id="work" className="section-padding bg-navy">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sky-light text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            The Transformation Speaks
            <br />
            <span className="text-sky">for Itself.</span>
          </h2>
          <p className="text-white/60 text-lg">
            See the incredible difference our professional cleaning services can make 
            on any property.
          </p>
        </motion.div>

        {/* Image Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Before/After Comparison */}
          <div className="aspect-[16/10] md:aspect-[21/9] bg-navy-dark relative">
            {/* Grid of Comparisons */}
            <div className="grid md:grid-cols-2 gap-4 p-4 md:p-8 h-full">
              {/* Before */}
              <div className="relative rounded-2xl overflow-hidden bg-white/5">
                <img 
                  src="/Images/360_F_338521308_yi1el6qXLWqzUQH0POi1K9SprtqaXKAL.jpg" 
                  alt="Before cleaning" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* After */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-sky/20 to-sky/5 border border-sky/20">
                <img 
                  src="/Images/AA1NPgxf.jfif" 
                  alt="After cleaning" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Label Badges */}
            <div className="absolute top-6 left-6 md:left-10 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm">
              <span className="text-white/80 text-sm font-medium">Before</span>
            </div>
            <div className="absolute top-6 right-6 md:right-10 px-4 py-2 rounded-full bg-sky/80">
              <span backdrop-blur-sm className="text-white text-sm font-medium">After</span>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10"
        >
          {[
            { value: '100%', label: 'Satisfaction Guarantee' },
            { value: '24hr', label: 'Average Turnaround' },
            { value: '50+', label: 'Properties Transformed' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-sky mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BeforeAfter
