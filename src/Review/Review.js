import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Review = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(review);

    setReview("");
  };

  const handleInputChange = (event) => {
    setReview(event.target.value);
  };
  return (
    <div className="w-1/2 mx-auto border border-slate-300">
      {user ? (
        <>
          <input
            type="text"
            value={review}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit(e);
              }
            }}
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
