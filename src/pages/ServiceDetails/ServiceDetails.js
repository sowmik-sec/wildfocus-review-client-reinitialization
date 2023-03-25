import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../../Shared/Navbar/Navbar";

const ServiceDetails = () => {
  const {
    _id,
    title,
    serviceImg,
    description,
    instructorName,
    instructorImage,
  } = useLoaderData();
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState("");

  const { displayName, photoURL, email } = user;
  const data = {
    serviceId: _id,
    review,
    displayName,
    photoURL,
    email,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(review);
    sendReviewToServer();
    setReview("");
  };

  const sendReviewToServer = () => {
    fetch(`http://localhost:5000/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  const handleInputChange = (event) => {
    setReview(event.target.value);
  };
  return (
    <div>
      <Navbar />
      <div className="w-1/2 mx-auto p-3 my-4  border border-slate-500">
        <img src={serviceImg} alt="" className=" h-auto" />
        <h3 className="text-3xl">{title}</h3>
        <div className="flex items-center">
          <img
            src={instructorImage}
            alt=""
            className="w-14 h-14 rounded-full"
          />
          <p className="ml-2">{instructorName}</p>
        </div>
        <p className="">{description}</p>
      </div>
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
    </div>
  );
};

export default ServiceDetails;
