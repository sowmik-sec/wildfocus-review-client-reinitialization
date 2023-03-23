import React from "react";
import Banner from "../Banner/Banner";
import FeaturedReview from "../FeaturedReview/FeaturedReview";
import FeaturedServices from "../FeaturedServices/FeaturedServices";
import Instructor from "../Instructor/Instructor";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedServices />
      <FeaturedReview />
      <Instructor />
    </div>
  );
};

export default Home;
