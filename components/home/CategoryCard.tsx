import React from 'react'
import Image from "next/image"

const CategoryCard = () => {
  return (
    <div className="w-[220px] h-[120px] bg-white rounded-2xl flex flex-col items-center justify-center p-4 shadow-lg transition-transform duration-200 hover:scale-105 cursor-pointer">
      {/* Category Icon */}
      <div className="bg-gray-100 p-3 rounded-full">
        <Image src="/electronics.svg" alt="electronics" width={40} height={40} />
      </div>

      {/* Category Name */}
      <p className="font-semibold mt-3 text-gray-800">Electronics</p>
    </div>
  )
}

export default CategoryCard