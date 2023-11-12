import React from "react";

export const DetailCard = ({ transaction }) => {
  return (
    <div
      className={`${
        transaction.type === "income" ? "bg-green-500" : "bg-red-500"
      }  rounded-md p-3 cursor-pointer shadow-lg font-bold text-white`}
    >
      <div>{transaction.content}</div>
      <div>{transaction.amount}</div>
      <div>{transaction.date}</div>
    </div>
  );
};
