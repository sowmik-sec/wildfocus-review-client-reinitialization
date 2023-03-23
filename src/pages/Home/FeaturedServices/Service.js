import React, { useState } from "react";
import "./Image.css";

const Service = ({ service }) => {
  const { instructorName, serviceImg, title, instructorImage, description } =
    service;
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleClick = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img
          src={serviceImg}
          alt="photography"
          className="image"
          onClick={handleClick}
        />
        {isFullScreen && (
          <div className="fullscreen-overlay" onClick={handleClick}>
            <img className="fullscreen-image" src={serviceImg} alt="" />
          </div>
        )}
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
