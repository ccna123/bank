import React, { memo } from "react";

const PassInput = ({ password, setPassword }) => {
  return (
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
  );
};
export default memo(PassInput);
