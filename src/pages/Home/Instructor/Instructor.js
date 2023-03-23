import React from "react";

const Instructor = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://media.istockphoto.com/id/1124668059/photo/handsome-middle-age-hoary-senior-man-wearin-glasses-over-isolated-background-inviting-to.jpg?s=612x612&w=0&k=20&c=XGlzAuLE_JnL7Bd0n_vBcp3f6xlPAe9s189Rh30gPMk="
          className="rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Become an instructor</h1>
          <p className="py-6">
            Instructors from around the world teach students photography. We
            provide the tools and skills to teach what you love.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
