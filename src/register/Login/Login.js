import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
        <div className="bg-white p-10 rounded-lg shadow-md">
          <h2 className="text-3xl text-center mb-8 font-bold text-gray-700">
            Log In
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="bg-indigo-600 py-2 px-4 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Log In
            </button>
          </form>
          <p className="text-gray-700 text-center mt-4">
            New to WildFocus Review?{" "}
            <Link
              to="/register"
              className="text-indigo-600 font-bold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
