import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewCardContainer = () => {
  return (
    <div className="main-max-width mx-auto padding-x ">
      <h4 className="my-4 font-semibold">Reviews (3)</h4>
      <ReviewCard />
    </div>
  )
}

export default ReviewCardContainer