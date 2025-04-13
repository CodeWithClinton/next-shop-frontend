import React from 'react'
import Image from "next/image"

const SignupPage = () => {
  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen px-4">
    <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 max-w-sm w-full flex flex-col gap-6">
      <h2 className="text-3xl font-semibold text-center text-gray-900">
        Welcome!
      </h2>
  
      <form>
        <button className="w-full flex items-center cursor-pointer justify-center border border-gray-300 hover:border-gray-500 text-gray-700 font-medium py-3 rounded-lg shadow-sm transition-all duration-300 bg-white hover:bg-gray-100">
          <Image
            src="/google.png"
            alt="Google Icon"
            width={30}
            height={30}
            className="mr-3"
          />
          Continue with Google
        </button>
      </form>
    </div>
  </div>
  )
}

export default SignupPage