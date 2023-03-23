import React from "react";
import { BsQuote } from "react-icons/bs";

const FeaturedReview = () => {
  return (
    <div>
      <h3 className="text-3xl ml-6">Featured review</h3>
      <div className="md:flex my-6">
        <div className="border border-slate-500 p-5 mx-6">
          <BsQuote className="h-10 w-10" />
          <p>
            I recently stumbled upon this wildlife photographer review website,
            and I have to say I'm blown away by the quality of the reviews. As
            someone who is passionate about wildlife photography, I'm always on
            the lookout for new photographers to follow and learn from, and this
            website is an incredible resource for that.
          </p>
          <div className="flex items-center">
            <img
              src="https://olympics.nbcsports.com/wp-content/uploads/sites/10/2013/02/uspw_6375366-e1361893354120.jpg"
              alt=""
              className="rounded-full w-14 h-14"
            />
            <p className="ml-2">Salvatore</p>
          </div>
        </div>
        <div className="border border-slate-500 p-5 mx-6 md:my-0 my-5">
          <BsQuote className="h-10 w-10" />
          <p>
            I've been following this wildlife photographer review website for a
            few months now, and I have to say it's quickly become one of my
            favorite resources for photography inspiration. The reviews are
            incredibly detailed and thoughtful, providing a deep dive into each
            photographer's work and approach.
          </p>
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHx8&w=1000&q=80"
              alt=""
              className="rounded-full w-14 h-14"
            />
            <p className="ml-2">Foster</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedReview;
