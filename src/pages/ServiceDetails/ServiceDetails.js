import React from "react";
import { useLoaderData } from "react-router-dom";
import Review from "../../Review/Review";
import Navbar from "../../Shared/Navbar/Navbar";

const ServiceDetails = () => {
  const { title, serviceImg, description, instructorName, instructorImage } =
    useLoaderData();
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
      <Review />
    </div>
  );
};

export default ServiceDetails;
