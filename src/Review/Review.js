import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Review = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState("");
  return (
    <div className="w-1/2 mx-auto border border-slate-300">
      {user ? (
        <>
          <input
            type="text"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="py-2 px-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Add Review..."
          />
        </>
      ) : (
        <>
          <h3 className="text-3xl">Please login to add a review</h3>
        </>
      )}
    </div>
  );
};

export default Review;
