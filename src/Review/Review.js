import React from "react";

const Review = ({ rev }) => {
  const { review, displayName, photoURL, timestamp } = rev;
  return (
    <div className="border ">
      <div className="flex items-center p-3">
        <img src={photoURL} alt="" className="w-14 h-14 rounded-full" />
        <div className="bg-slate-300 p-2 rounded-md mt-3 ml-1">
          <p className="ml-2 font-bold">{displayName}</p>
          <p className="ml-2">{review}</p>
          <p className="ml-2">
            {timestamp ? timestamp : new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
