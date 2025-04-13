import React from 'react'


const Hero = () => {
  return (
    <section className="bg-gray-200 px-6 py-16 text-center w-full">
    <div className="max-w-4xl mx-auto space-y-8 px-6 sm:px-12 md:px-16 lg:px-24">
      <h1 className="text-4xl font-extrabold text-gray-900 leading-snug md:text-5xl">
        Find the Perfect Product for Every Occasion
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Discover a curated selection of high-quality products designed to fit
        your lifestyle.
      </p>
      <a
        href="#product_section"
        className="inline-block bg-black text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-gray-900 transition-all duration-300"
      >
        Shop Now
      </a>
    </div>
  </section>
  )
}

export default Hero