import React from 'react'
import IndividualOrder from './IndividualOrder'

const OrderContainer = () => {
  return (
    <div className="w-full h-[400px] overflow-y-auto px-6 space-y-6 rounded-md">
      <IndividualOrder />
      <IndividualOrder />
      <IndividualOrder />
    </div>
  )
}

export default OrderContainer