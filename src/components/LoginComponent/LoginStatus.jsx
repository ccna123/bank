import React, { memo } from "react";

const LoginStatus = ({ resResult }) => {
  return (
    <>
      {resResult ? (
        <p
          className={`${
            resResult.status === 404
              ? "bg-red-300 text-red-600"
              : "bg-green-300 text-green-600"
          } rounded-md mb-4 p-2 font-bold`}
        >
          {resResult.mess}
        </p>
      ) : null}
    </>
  );
};
export default memo(LoginStatus);
