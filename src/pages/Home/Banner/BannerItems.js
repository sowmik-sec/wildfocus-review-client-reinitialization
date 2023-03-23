import React from "react";
import "./BannerItem.css";

const BannerItems = ({ slide }) => {
  const { image, prev, next, id } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-screen h-screen rounded-xl" />
      </div>
      <div className="absolute  transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold text-white">
          Explore the untamed
          <br />
          beauty of nature
          <br /> through stunning
          <br />
          wildlife photography
        </h1>
      </div>

      <div className="absolute transform -translate-y-1/2 w-2/5 left-24 top-3/4">
        <button className="btn btn-warning mr-5">Discover More</button>
        <button className="btn btn-outline btn-warning">Latest Project</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;
