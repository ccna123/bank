import React, { memo } from "react";

const EmailInput = ({ email, setEmail }) => {
  return (
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
  );
};
export default memo(EmailInput);
