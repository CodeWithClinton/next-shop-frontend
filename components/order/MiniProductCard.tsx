import React from 'react'
import Image from "next/image"

const MiniProductCard = () => {
  return (
    <div className="w-[220px] rounded-lg shadow-md bg-white flex flex-col items-center gap-3 px-4 py-5 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
    <div className="w-[160px] h-[160px] rounded-md overflow-hidden">
      <Image
        src="/gaming_pad.jpg"
        className="object-cover w-full h-full"
        width={160}
        height={160}
        alt="thumbnail"
      />
    </div>
  
    {/* Product Name */}
    <p className="text-center text-base font-medium text-gray-800">Apple Smart Watch</p>
  
    {/* Product Price */}
    <p className="text-[16px] text-center font-bold text-black">$300.00</p>
  

  </div>
  
  )
}

export default MiniProductCard