import React from 'react'
import OrderContainer from './OrderContainer'

const PurchasedOrder = () => {
  return (
    <div className="main-max-width mx-auto padding-x">
      <p className="font-semibold text-2xl max-sm:text-[16px] text-gray-800 my-4 text-center">
        Purchased Orders
      </p>

      <OrderContainer />
    </div>
  )
}

export default PurchasedOrder