import React from "react";
import { Progress } from "@/components/ui/progress"


interface Props{
    rating: string;
    numRating: number

}


const RatingProgressBar = ({rating, numRating}: Props) => {
  return (
    <div className="flex items-center gap-4 w-full">
      <small className="w-[140px] text-gray-800 font-medium truncate max-sm:text-[10px] max-sm:w-[100px]">
        {rating}
      </small>

      <div className="flex-1">
      <Progress value={numRating * 2} className="h-2 bg-gray-200 rounded-md" />
      </div>

      <small className="w-[40px] text-gray-700 font-semibold text-right">{numRating}</small>


    </div>
  );
};

export default RatingProgressBar;
