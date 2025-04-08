import CategorySection from '@/components/home/CategorySection'
import Hero from '@/components/home/Hero'
import ProductSection from '@/components/home/ProductSection'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <Hero />
    <CategorySection />
    <ProductSection title="Featured Products" />
    </>
  )
}

export default HomePage