import React, { useState } from "react";

export const Transaction = ({ content, cost, type }) => {
  return (
    <section>
      <div
        className={`flex items-center justify-between my-4 p-2 rounded-md mr-2 ${
          type === "income" ? "bg-green-400" : "bg-red-400"
        }`}
      >
        <div className="flex items-center gap-4">
          <div>
            <p className="font-bold">{content}</p>
            <small>10 Feb 2023</small>
          </div>
        </div>
        <p className="font-bold text-lg">
          {type === "income" ? "+" : "-"}${Math.abs(cost)}
        </p>
      </div>
      <hr />
    </section>
  );
};
