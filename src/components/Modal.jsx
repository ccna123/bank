import React, { useState } from "react";
import axios from "axios";

export const Modal = ({ handleToggleModal, setTransactions }) => {
  const [content, setContent] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleCloseModal = () => {
    handleToggleModal();
  };
  const handleAdd = async () => {
    const newTransaction = {
      content,
      type,
      amount,
      id: user.id,
    };
    try {
      const res = await axios.post("http://localhost:4000/addTransaction", {
        newTransaction,
      });
      setTransactions((prev) => {
        return [...prev, res.data];
      });
    } catch (error) {
      console.log(error);
    }
    setContent("");
    setAmount(0);
    setType("income");
  };
  return (
    <div className="bg-gray-700/40 w-full h-screen absolute top-0 left-0 flex justify-center items-center">
      <div className="bg-white w-fit rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4">
        <div className="flex justify-end my-4">
          <i
            onClick={handleCloseModal}
            className="fa-solid fa-xmark fa-xl w-fit py-2 cursor-pointer "
          />
        </div>
        <input
          onChange={(e) => setContent(e.target.value.toUpperCase())}
          value={content}
          type="text"
          placeholder="Transactions"
          className="w-full border-2 border-blue-300 focus:outline-none p-2 rounded-lg"
        />
        <input
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          type="number"
          min={1}
          value={amount}
          className="w-full border-2 my-5 border-blue-300 focus:outline-none p-2 rounded-lg"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border-2 border-blue-300 focus:outline-none p-2 rounded-lg"
        >
          <option value="income">Income</option>
          <option value="spending">Spending</option>
        </select>

        <button
          onClick={handleAdd}
          type="button"
          className="bg-blue-600 text-white my-4 rounded-md font-bold p-2 w-full hover:scale-105 duration-150"
        >
          Add
        </button>
      </div>
    </div>
  );
};
