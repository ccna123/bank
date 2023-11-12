import React, { memo } from "react";

const LoginButton = ({ handleLogin }) => {
  return (
    <button
      onClick={(e) => handleLogin(e)}
      className="bg-blue-600 text-white rounded-lg px-3 py-1 w-full text-2xl"
    >
      Login
    </button>
  );
};
export default memo(LoginButton);
