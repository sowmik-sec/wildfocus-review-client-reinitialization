import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="text-2xl font-medium mb-8">Oops! Page not found</p>
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
