import { PenIcon, Star, TrashIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const ReviewCard = () => {
  const starArray = [1, 2, 3, 4, 5];

  return (
    <div className="w-full bg-white shadow-lg px-6 py-6 rounded-lg flex flex-col gap-4 mb-6">
      {/* Action buttons for editing and deleting the review */}
      <div className="flex justify-between items-center">
        <span className="flex gap-4">
          <>
            {/* Trash button to delete review */}
            <button className="bg-gray-200 p-2 rounded-md cursor-pointer transition-all hover:bg-gray-300">
              <TrashIcon className="size-5 text-gray-600" />
            </button>

            {/* Pen button to edit review */}
            <button className="bg-gray-200 p-2 rounded-md cursor-pointer transition-all hover:bg-gray-300">
              <PenIcon className="size-5 text-gray-600" />
            </button>
          </>
        </span>

        {/* Information showing when the review was edited */}
        <span className="text-sm text-gray-500">
          <small className="block">edited...</small>
          <small>1 month ago</small>
        </span>
      </div>

      {/* Reviewer's profile and review content */}

      <div className="flex gap-4 items-center">
        {/* Profile picture */}
        <div className="w-[50px] h-[50px] rounded-full relative overflow-hidden border-2 border-gray-200">
          <Image
            src="/profile_pic.jpg"
            alt="profile_pic"
            className="object-cover rounded-full"
            fill
          />
        </div>

        {/* Review content including name, rating, and review text */}
        <div className="flex flex-col flex-1">
          <p className="font-semibold text-lg text-gray-800">John Doe</p>

          <div className="flex gap-1 mt-2">
            {starArray.map((star) => (
              <Star key={star} className="size-5 cursor-pointer fill-black" />
            ))}
          </div>

          {/* Review text */}
          <small className="text-gray-600 text-justify leading-6 mt-4 font-medium">
            Great product, I highly recommend it to anyone looking for quality.
          </small>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
