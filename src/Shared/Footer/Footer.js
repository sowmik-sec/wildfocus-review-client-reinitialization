import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Wildfocus Reviews</div>
        <div className="flex items-center">
          <a href="#" className="mr-4">
            <FaFacebook className="text-3xl" />
          </a>
          <a href="#" className="mr-4">
            <FaTwitter className="text-3xl" />
          </a>
          <a href="#" className="mr-4">
            <FaInstagram className="text-3xl" />
          </a>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8">
        &copy; 2023 Wildfocus Reviews. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
