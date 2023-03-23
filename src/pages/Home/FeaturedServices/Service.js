import React from "react";

const Service = ({ service }) => {
  const { instructorName, serviceImg, title, instructorImage, description } =
    service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={serviceImg} alt="photography" className="h-60 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 50) + "..."}</p>
        <div className="flex items-center">
          <img
            src={instructorImage}
            alt=""
            className="w-14 h-14 rounded-full"
          />
          <p className="ml-2">{instructorName}</p>
        </div>
        <div className="text-center">
          <button className="btn btn-secondary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
