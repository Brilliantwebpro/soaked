import { motion } from 'framer-motion'
import { FileText, Calendar, Sparkles, Heart } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Request a Quote',
      description: 'Fill out our simple form or give us a call. We\'ll get back to you within 24 hours with a free estimate.',
    },
    {
      number: '02',
      icon: Calendar,
      title: 'Schedule Service',
      description: 'Choose a convenient time for your service. We work around your schedule to minimize disruption.',
    },
    {
      number: '03',
      icon: Sparkles,
      title: 'We Deep Clean',
      description: 'Our professional team arrives on time with all equipment and performs a thorough, detailed cleaning.',
    },
    {
      number: '04',
      icon: Heart,
      title: 'Enjoy the Results',
      description: 'Step back and admire your transformed property. We follow up to ensure your complete satisfaction.',
    },
  ]

  return (
    <section id="process" className="section-padding bg-surface overflow-hidden">
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
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mb-4">
            Simple. Efficient.
            <br />
            <span className="text-sky">Professional.</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our streamlined process makes getting your property cleaned hassle-free 
            from start to finish.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky/20 to-transparent -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-hover transition-shadow duration-300">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                    <span className="text-white font-heading font-bold text-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-sky/10 flex items-center justify-center mt-4 mb-6">
                    <step.icon className="w-7 h-7 text-sky" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-semibold text-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                      <svg className="w-4 h-4 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
