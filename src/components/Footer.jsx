import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Pressure Washing',
    'Driveway Cleaning',
    'Roof Cleaning',
    'Patio Restoration',
    'Gutter Cleaning',
    'Commercial Cleaning',
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  return (
    <footer id="contact" className="bg-navy-dark pt-20 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <img 
                src="/Images/logo.png" 
                alt="SOAKED Property Cleaning" 
                className="h-16 w-auto object-contain"
              />
            </a>
            <p className="text-white/60 mb-6 leading-relaxed">
              Professional property cleaning services that restore your property to look brand new.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center 
                             hover:bg-sky/20 hover:scale-110 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-sky transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-sky transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sky mt-0.5" />
                <a
                  href="tel:+1234567890"
                  className="text-white/60 hover:text-sky transition-colors duration-200"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-sky mt-0.5" />
                <a
                  href="mailto:hello@soakedcleaning.com"
                  className="text-white/60 hover:text-sky transition-colors duration-200"
                >
                  hello@soakedcleaning.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky mt-0.5" />
                <span className="text-white/60">
                  Serving the Greater Area
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} SOAKED Property Cleaning. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/40 hover:text-sky transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-sky transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
