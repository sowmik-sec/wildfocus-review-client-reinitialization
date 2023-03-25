import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const ServiceDetails = () => {
  const { title, serviceImg, description, instructorName, instructorImage } =
    useLoaderData();
  return (
    <div>
      <Navbar />
      <div className="w-1/2 mx-auto">
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
    </div>
  );
};

export default ServiceDetails;
