import React from 'react'
import CategoryCard from './CategoryCard'

const CategorySection = () => {
  return (
    <section className="main-max-width padding-x mx-auto">
      <h2 className="my-9 text-center text-xl font-bold text-gray-800">
        Browse By Category
      </h2>

      {/* Content */}
      <div className="flex justify-center flex-wrap gap-8">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />

      </div>
    </section>
  )
}

export default CategorySection