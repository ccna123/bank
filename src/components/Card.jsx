import React from "react";
import { useSelector } from "react-redux";

export const Card = ({
  title,
  maxIncome,
  maxSpending,
  totalIncome,
  totalSpending,
}) => {
  const transactions = useSelector((state) => state.expense.transactions);

  return (
    <div className="bg-[#2E26D9] rounded-xl w-full ">
      <div className="text-white flex justify-between items-center p-2">
        <p>{title}</p>
        <i className="fa-solid fa-ellipsis"></i>
      </div>
      <p className="p-2 text-3xl text-[#827DE8]">
        {title === "Daily Income" ? maxIncome : maxSpending}%
      </p>
      <div className="bg-white rounded-md m-2">
        <div className="p-2">
          <p className="text-xl text-slate-400">
            {title === "Daily Income" ? "My Income" : "Spending"}
          </p>
          <p
            className={`text-3xl font-bold ${
              title === "Daily Income" ? "text-green-500" : "text-red-500"
            }`}
          >
            $ {title === "Daily Income" ? totalIncome : totalSpending}
          </p>
        </div>
      </div>
    </div>
  );
};
