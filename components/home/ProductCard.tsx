import React from 'react'
import Image from "next/image"

const ProductCard = () => {
  return (
    <div className="w-[260px] rounded-lg shadow-md bg-white flex flex-col items-center gap-4 px-5 py-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
        
      
    <div className="w-[200px] h-[200px] rounded-md overflow-hidden">
    <Image
          src="/gaming_pad.jpg"
          className="object-cover w-full h-full"
          width={200}
          height={200}
          alt="thumbnail"
        />
    </div>

    {/* Product Name */}
    <p className="text-center text-lg font-semibold text-gray-800">Apple Gaming Pad</p>

    {/* Product Price */}
    <p className="text-[18px] text-center font-bold text-black">$300.00</p>

   
  </div>
  )
}

export default ProductCard