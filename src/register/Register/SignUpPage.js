import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../../Shared/Navbar/Navbar";

function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, update, googleSignIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        userUpdate(firstName, lastName, photoURL);
        console.log(user);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPhotoURL("");
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  const userUpdate = (firstName, lastName, photoURL) => {
    const profile = {
      displayName: `${firstName} ${lastName}`,
      photoURL,
    };
    update(profile)
      .then(() => console.log("user updated"))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 h-auto flex flex-col justify-center items-center">
        <div className="bg-white p-10 rounded-lg shadow-md">
          <h2 className="text-3xl text-center mb-8 font-bold text-gray-700">
            Create an Account
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label htmlFor="firstName" className="text-gray-700 font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label htmlFor="lastName" className="text-gray-700 font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label htmlFor="photoURL" className="text-gray-700 font-bold mb-2">
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              className="py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
            />
            <label htmlFor="email" className="text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password" className="text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="mt-2 text-sm text-red-600">{error}</p>
            <button
              type="submit"
              className="bg-indigo-600 py-2 px-4 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Register
            </button>
          </form>
          <p className="text-gray-700 text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 font-bold hover:underline"
            >
              Log In
            </Link>
          </p>
          <button
            type="submit"
            onClick={handleGoogleSignIn}
            className="bg-indigo-600 py-2 px-4 w-full mt-3 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
