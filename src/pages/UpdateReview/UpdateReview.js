import React, { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const UpdateReview = () => {
  const { _id, review, displayName, email, photoURL, serviceId } =
    useLoaderData();
  const [editReview, setEditReview] = useState(review);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/my-reviews";
  const handleUpdate = (e) => {
    e.preventDefault();
    const update = {
      editReview,
      displayName,
      email,
      photoURL,
      serviceId,
    };
    fetch(`http://localhost:5000/review-update/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Review Updated");
          navigate(from, { replace: true });
        }
      });
  };
  document.title = "Update Review";
  return (
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleUpdate}>
        <textarea
          value={editReview}
          onChange={(e) => setEditReview(e.target.value)}
          name=""
          id=""
          cols="60"
          rows="10"
          className="border-2"
        ></textarea>
        <br />
        <button className="btn btn-primary">Update Review</button>
      </form>
    </div>
  );
};

export default UpdateReview;
