import React from 'react'
import Image from "next/image"

const CategoryBtn = () => {
  return (
    <button className="cat-btn">
      {/* Icon Container */}
      <div className="w-[40px] h-[40px] bg-white rounded-full overflow-hidden flex items-center justify-center shadow-sm">
        <Image
          src="/electronics.svg"
          width={30}
          height={30}
          className="object-contain"
          alt="thumbnail"
        />
      </div>

      {/* Category Name */}
      <p className="font-semibold text-gray-800 text-[16px]">Electronics</p>
    </button>
  )
}

export default CategoryBtn