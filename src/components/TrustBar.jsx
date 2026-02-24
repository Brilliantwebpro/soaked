import { motion } from 'framer-motion'
import { Star, Shield, Zap, Wrench } from 'lucide-react'

const TrustBar = () => {
  const features = [
    {
      icon: Star,
      text: '5-Star Rated',
    },
    {
      icon: Shield,
      text: 'Fully Insured',
    },
    {
      icon: Zap,
      text: 'Fast Response',
    },
    {
      icon: Wrench,
      text: 'Professional Equipment',
    },
  ]

  return (
    <section className="py-12 bg-surface border-b border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy/5">
                <feature.icon className="w-6 h-6 text-sky" strokeWidth={1.5} />
              </div>
              <span className="font-heading font-semibold text-navy whitespace-nowrap">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
