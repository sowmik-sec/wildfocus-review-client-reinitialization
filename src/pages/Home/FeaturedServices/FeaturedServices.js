import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

const FeaturedServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services-3")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h3 className="text-3xl my-5 ml-8">Featured Services</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
      <div className="text-center my-5">
        <Link to="/services">
          <button className="btn">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedServices;
