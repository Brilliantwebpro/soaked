import { motion } from 'framer-motion'

const Pricing = () => {
  const pricingSections = [
    {
      title: 'Maintenance Cleaning',
      subtitle: 'For ongoing upkeep (limited one-off availability)',
      items: [
        { label: '1 Bed / 1 Bath', price: 'From $160' },
        { label: '2 Bed / 1 Bath', price: 'From $190' },
        { label: '3 Bed / 2 Bath', price: 'From $230' },
        { label: '4 Bed / 2 Bath', price: 'From $270' },
        { label: 'Larger Homes', price: 'Custom Quote' },
      ],
      footer: 'Minimum Service Fee: $150',
    },
    {
      title: 'Deep Cleaning (Full Reset)',
      subtitle: 'Most popular service – ideal for neglected or high-use homes',
      items: [
        { label: '1 Bed / 1 Bath', price: 'From $350' },
        { label: '2 Bed / 1 Bath', price: 'From $450' },
        { label: '3 Bed / 2 Bath', price: 'From $580' },
        { label: '4 Bed / 2 Bath', price: 'From $720' },
        { label: 'Large Homes', price: '$850+' },
      ],
    },
    {
      title: 'Bond Cleaning (End of Lease)',
      subtitle: 'Inspection-ready, real estate standard',
      items: [
        { label: '1 Bed / 1 Bath', price: 'From $500' },
        { label: '2 Bed / 1 Bath', price: 'From $650' },
        { label: '3 Bed / 2 Bath', price: 'From $800' },
        { label: '4 Bed / 2 Bath', price: 'From $950' },
        { label: 'Large / Double Storey', price: '$1,100–$1,500+' },
      ],
    },
    {
      title: 'Airbnb / Short Stay Cleaning',
      subtitle: 'Fast turnaround, presentation-focused',
      items: [
        { label: '1–2 Bed', price: 'From $160' },
        { label: '3 Bed', price: 'From $200' },
        { label: '4+ Bed', price: 'From $240+' },
      ],
      footer: 'Add-ons: Linen Service $60–$120 • Restocking $40–$80',
    },
  ]

  const pressureSections = [
    {
      title: 'Driveways',
      items: [
        { label: 'Small (1–2 cars)', price: '$120–$180' },
        { label: 'Medium (2–3 cars)', price: '$180–$280' },
        { label: 'Large / Long', price: '$300–$500+' },
      ],
    },
    {
      title: 'Outdoor Areas',
      items: [
        { label: 'Patios / Entertaining Areas', price: 'From $120–$300+' },
        { label: 'Pathways / Side Access', price: 'From $80–$250' },
      ],
    },
    {
      title: 'Full Exterior Packages',
      items: [
        { label: 'Small Homes', price: '$400–$700' },
        { label: 'Medium Homes', price: '$700–$1,000' },
        { label: 'Large Homes', price: '$1,000–$1,800+' },
      ],
    },
  ]

  const addOnItems = [
    { label: 'Oven Deep Clean', price: '$120–$160' },
    { label: 'Interior Windows', price: '$120–$220' },
    { label: 'Carpet Steam Cleaning', price: '$60–$80 per room' },
    { label: 'Wall Washing', price: 'From $120' },
    { label: 'Mould Treatment', price: 'From $150–$250' },
    { label: 'Garage Clean', price: 'From $120' },
    { label: 'Fridge Clean', price: '$50–$60' },
    { label: 'Pet Hair Removal', price: 'From $70–$90' },
  ]

  return (
    <section id="pricing" className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-sky/10 text-sky text-sm font-medium mb-4">
            SOAKED PROPERTY CLEANING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mb-4">
            Pricing Built for Every Property
          </h2>
          <p className="text-gray-600 text-lg">
            Straightforward starting rates, clear add-ons, and flexible exterior packages so you can see value at a glance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {pricingSections.map((section) => (
            <div key={section.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-semibold text-navy mb-2">{section.title}</h3>
                <p className="text-gray-500">{section.subtitle}</p>
              </div>

              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
                    <span className="text-sm text-gray-700">{item.label}</span>
                    <span className="text-sm font-semibold text-navy">{item.price}</span>
                  </div>
                ))}
              </div>

              {section.footer && (
                <p className="mt-6 text-sm text-gray-500 border-t border-slate-100 pt-4">{section.footer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="grid xl:grid-cols-[1.2fr_0.8fr] gap-6 mb-10">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-semibold text-navy mb-2">Pressure Cleaning (Exterior)</h3>
              <p className="text-gray-500">Driveways, patios, paths & full exterior restoration.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {pressureSections.map((section) => (
                <div key={section.title} className="rounded-3xl bg-slate-50 p-5">
                  <h4 className="text-lg font-semibold text-navy mb-4">{section.title}</h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    {section.items.map((item) => (
                      <div key={item.label} className="flex flex-col gap-1">
                        <span>{item.label}</span>
                        <span className="font-semibold text-navy">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-sky/5 p-8 shadow-soft">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-sky/20 px-3 py-1 text-sky text-xs uppercase tracking-[0.2em] font-semibold">
                Add-On Services
              </span>
              <h3 className="mt-4 text-2xl font-heading font-semibold text-navy">Enhance Your Clean</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              {addOnItems.map((item) => (
                <div key={item.label} className="rounded-3xl bg-white p-4 border border-slate-200">
                  <span className="block font-medium text-navy mb-2">{item.label}</span>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-6 items-start">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-sky/10 text-sky text-sm font-medium mb-4">
                Popular Upgrade Package
              </span>
              <h3 className="text-3xl font-heading font-semibold text-navy mb-3">Full Property Upgrade — $249</h3>
              <p className="text-gray-600 text-lg mb-6">
                Best value, most clients choose this package for a higher impact clean.
              </p>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky" />
                <span>Includes Oven Clean, Interior Windows, Detail Extras.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky" />
                <span>Perfect for homes that need a polished finish before move-in or sale.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky" />
                <span>Recommended for busy properties, short stays, and real estate presentation.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-navy text-white p-10 shadow-soft">
            <h3 className="text-2xl font-heading font-semibold mb-4">How Pricing Works</h3>
            <ul className="space-y-4 text-sm text-slate-100">
              <li>All prices are starting rates only.</li>
              <li>Final quote depends on property size, condition & access.</li>
              <li>Heavily soiled properties are priced accordingly.</li>
              <li>Photos recommended for accurate quotes.</li>
              <li>Minimum service fee applies.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
