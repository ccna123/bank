import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-green-200 rounded-lg p-4 w-full md:w-[50%] mx-5">
      <h1 className="text-center font-bold text-4xl mb-5">Login</h1>
      <form action="">
        <div className="bg-white rounded-lg mb-4 flex items-center">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="focus:outline-none p-2 rounded-lg w-full"
            type="email"
            placeholder="Email"
          />
          <i className="fa-solid fa-envelope mr-5"></i>
        </div>
        <div className="bg-white rounded-lg mb-4 flex items-center">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="focus:outline-none p-2 rounded-lg w-full"
            type="password"
            placeholder="Password"
          />
          <i className="fa-solid fa-lock mr-5"></i>
        </div>
        <button
          onClick={(e) => handleLogin(e)}
          className="bg-blue-600 text-white rounded-lg px-3 py-1 w-full text-2xl"
        >
          Login
        </button>
      </form>
    </div>
  );
};
