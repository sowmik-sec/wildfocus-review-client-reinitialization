import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../../Shared/Navbar/Navbar";

function SubmitForm() {
  const [serviceImg, setServiceImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendServiceToServer();
  };

  const data = {
    instructorName: user.displayName,
    serviceImg,
    title,
    instructorImage: user.photoURL,
    description,
  };

  const sendServiceToServer = () => {
    fetch(`http://localhost:5000/services`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-lg font-medium mb-4">Add a New Service</h2>
        <div className="mb-4">
          <label
            htmlFor="serviceImg"
            className="block text-gray-700 font-medium mb-2"
          >
            Service Image
          </label>
          <input
            type="text"
            id="serviceImg"
            name="serviceImg"
            value={serviceImg}
            onChange={(e) => setServiceImg(e.target.value)}
            className="border border-gray-400 p-2 w-full rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-400 p-2 w-full rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-400 p-2 w-full rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg"
        >
          Add Service
        </button>
      </form>
    </div>
  );
}

export default SubmitForm;
