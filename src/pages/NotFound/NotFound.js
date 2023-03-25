import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex flex-col justify-center items-center">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-extrabold text-white mb-6">404</h1>
        <p className="text-2xl font-medium text-white mb-8">
          Oops! Page not found
        </p>
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
