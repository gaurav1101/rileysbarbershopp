'use client'

import { useState } from 'react'

export default function Home() {
  const [navOpen, setNavOpen] = useState(false)

  const businessData = {
    name: "Riley's Barbershop",
    rating: 4.5,
    reviewCount: 20,
    address: '730 Housman St, Mayfield, KY 42066',
    phone: '+1 270-705-9643',
    services: [
      { id: 1, name: 'Haircut' },
      { id: 2, name: 'Beard Trim' },
      { id: 3, name: 'Beard Dyeing' },
      { id: 4, name: 'Groom Packages' },
      { id: 5, name: 'Head Shave' },
      { id: 6, name: 'Hot Towel Shave' },
      { id: 7, name: 'Waxing' },
      { id: 8, name: 'Airbrush Enhancement' },
      { id: 9, name: 'Gentlemen Special' },
      { id: 10, name: 'Kids Haircuts (12 & Under)' },
    ],
  }

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ]

  const callNow = () => window.location.href = `tel:${businessData.phone}`
  const getDirections = () => window.location.href = `https://maps.google.com/maps?q=${encodeURIComponent(businessData.address)}`

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-gray-800">
        <div className="container-custom flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-lg font-black text-black">
            {businessData.name}
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-black font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={callNow}
              className="btn btn-primary btn-sm"
            >
              Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Menu"
          >
            <div className="w-5 h-0.5 bg-black"></div>
            <div className="w-5 h-0.5 bg-black"></div>
            <div className="w-5 h-0.5 bg-black"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <div className="md:hidden border-t-2 border-gray-800 bg-white">
            <div className="container-custom py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-800 hover:text-black font-bold text-sm uppercase tracking-wide"
                  onClick={() => setNavOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  callNow()
                  setNavOpen(false)
                }}
                className="btn btn-primary w-full mt-2"
              >
                Call Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="section-spacing-lg bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text Content */}
            <div className="max-w-xl">
              <h1 className="mb-6 leading-tight">
                Good haircut.<br />
                Good price.<br />
                Good people.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                No nonsense. Just a quality haircut from people who care. Walk-ins welcome.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={callNow}
                  className="btn btn-primary"
                >
                  Call Now
                </button>
                <button
                  onClick={getDirections}
                  className="btn btn-secondary"
                >
                  Get Directions
                </button>
              </div>
            </div>

            {/* Photo Placeholder */}
            <div className="bg-gray-300 rounded-sm aspect-[3/4] border-4 border-gray-800 flex items-center justify-center overflow-hidden">
              <div className="text-center text-gray-600">
                <div className="text-sm font-medium mb-2">HERO IMAGE</div>
                <div className="text-xs">Warm barbershop photography</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-spacing bg-white border-b-2 border-gray-300">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
              {/* Rating */}
              <div className="border-r-2 border-gray-300 md:border-r-2 pr-8 md:pr-12">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-5xl font-black text-black">
                    {businessData.rating}
                  </span>
                  <div className="flex flex-col">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-2xl leading-none">
                          {i < Math.floor(businessData.rating) ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {businessData.reviewCount} Google Reviews
                </p>
              </div>

              {/* Quick Service */}
              <div className="border-r-2 border-gray-300 md:border-r-2 pr-8 md:pr-12">
                <p className="text-3xl font-black text-black mb-2">Quick</p>
                <p className="text-gray-600">Fast, friendly service</p>
              </div>

              {/* Fair Prices */}
              <div className="pr-0">
                <p className="text-3xl font-black text-black mb-2">Fair</p>
                <p className="text-gray-600">Good prices, no surprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-spacing bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-16">What We Do</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {businessData.services.map((service) => (
              <div
                key={service.id}
                className="border-2 border-gray-800 p-5 md:p-6 text-center hover:bg-gray-50 transition-colors duration-150"
              >
                <h3 className="font-bold text-black text-sm md:text-base leading-tight">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-spacing-lg bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-300 rounded-sm aspect-square border-4 border-gray-800 flex items-center justify-center overflow-hidden">
                <div className="text-center text-gray-600">
                  <div className="text-sm font-medium mb-2">SHOP IMAGE</div>
                  <div className="text-xs">Warm interior photography</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 max-w-xl">
              <h2 className="mb-6">About Us</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-5">
                We're a local barbershop in Mayfield. We do one thing well: give you a great haircut.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Walk-ins welcome. No appointments needed. Friendly service, quick cuts, fair prices. No fuss. No corporate nonsense. Just a good neighborhood barber.
              </p>
              <button
                onClick={callNow}
                className="btn btn-primary"
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-spacing-lg bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-16">Gallery</h2>
          
          {/* Large Featured Image */}
          <div className="mb-8">
            <div className="bg-gray-300 rounded-sm aspect-video border-4 border-gray-800 flex items-center justify-center overflow-hidden mb-8">
              <div className="text-center text-gray-600">
                <div className="text-sm font-medium mb-2">FEATURED PHOTO</div>
                <div className="text-xs">Barbershop in action</div>
              </div>
            </div>
          </div>

          {/* Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-gray-300 rounded-sm aspect-square border-3 border-gray-800 flex items-center justify-center hover:bg-gray-350 transition-colors"
              >
                <div className="text-center text-gray-600">
                  <div className="text-xs font-medium">Photo</div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-600 text-sm mt-12 max-w-xl mx-auto">
            Real photos from Riley's Barbershop. Warm, welcoming atmosphere where good haircuts happen.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section-spacing bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-16">Reviews</h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 pb-8 border-b-2 border-gray-300">
              <p className="text-6xl font-black text-black mb-3">{businessData.rating}</p>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-3xl">
                    {i < Math.floor(businessData.rating) ? '★' : '☆'}
                  </span>
                ))}
              </div>
              <p className="text-gray-600">Based on {businessData.reviewCount} Google reviews</p>
            </div>
            <p className="text-gray-600 text-base">
              Verified customer reviews on Google. Read real feedback about haircuts, service, and pricing at Riley's Barbershop.
            </p>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="section-spacing-lg bg-white border-t-2 border-gray-300">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-12">Come In</h2>
            
            <div className="mb-10">
              <p className="text-gray-600 text-base mb-6">
                {businessData.address}
              </p>
              <a
                href={`tel:${businessData.phone}`}
                className="inline-block text-2xl font-black text-black mb-8 hover:text-gray-700 transition-colors"
              >
                {businessData.phone}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={getDirections}
                className="btn btn-secondary flex-1 sm:flex-none"
              >
                Get Directions
              </button>
              <button
                onClick={callNow}
                className="btn btn-primary flex-1 sm:flex-none"
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-spacing-lg bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-8">Ready?</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-xl mx-auto leading-relaxed">
            Walk-ins welcome. We're open and ready. Call now or stop by 730 Housman St, Mayfield.
          </p>
          <button
            onClick={callNow}
            className="btn btn-primary"
          >
            Call Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 border-t-2 border-gray-700">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h4 className="font-black text-white text-lg mb-3">{businessData.name}</h4>
              <p className="text-sm text-gray-500">Good haircuts. Good prices. Good people.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wide">Links</h4>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wide">Contact</h4>
              <p className="text-sm text-gray-500 mb-3">{businessData.address}</p>
              <a
                href={`tel:${businessData.phone}`}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-150 font-medium"
              >
                {businessData.phone}
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-600">
            <p>&copy; 2024 Riley's Barbershop.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
