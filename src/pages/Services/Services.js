import React from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Service from "../Home/FeaturedServices/Service";

const Services = () => {
  const services = useLoaderData();
  return (
    <div>
      <Navbar />
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-6">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
