import { motion } from 'framer-motion'
import { 
  Droplets, 
  Car, 
  Home, 
  Trees, 
  Wind, 
  Building2 
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: 'Pressure Washing',
      description: 'High-powered cleaning that removes dirt, grime, and stains from driveways, sidewalks, and decks.',
    },
    {
      icon: Car,
      title: 'Driveway Cleaning',
      description: 'Transform your driveway with our specialized cleaning that removes oil stains and buildup.',
    },
    {
      icon: Home,
      title: 'Roof Cleaning',
      description: 'Gentle yet effective roof cleaning that removes algae, moss, and lichen buildup.',
    },
    {
      icon: Trees,
      title: 'Patio Restoration',
      description: 'Bring your outdoor living space back to life with deep cleaning and restoration services.',
    },
    {
      icon: Wind,
      title: 'Gutter Cleaning',
      description: 'Professional gutter cleaning to prevent water damage and maintain proper drainage.',
    },
    {
      icon: Building2,
      title: 'Commercial Cleaning',
      description: 'Keep your business property spotless with our comprehensive commercial cleaning solutions.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="section-padding bg-white">
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
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mb-4">
            Comprehensive Cleaning Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            From residential to commercial properties, we offer a full range of 
            exterior cleaning services to meet your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-surface rounded-3xl p-8 border border-transparent 
                         hover:border-sky/30 hover:shadow-hover card-hover cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center mb-6 
                              group-hover:bg-sky/10 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-navy group-hover:text-sky transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 
                              transform group-hover:translate-x-1 transition-all duration-300">
                <svg 
                  className="w-5 h-5 text-sky" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Hover Border Accent */}
              <div className="absolute inset-0 rounded-3xl border-2 border-sky/0 
                              group-hover:border-sky/20 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
