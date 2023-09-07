import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTransaction } from "../redux/expenseSlice";

export const Modal = ({ handleToggleModal }) => {
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("income");
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    handleToggleModal();
  };
  const handleAdd = () => {
    const newTransaction = {
      id: uuidv4(),
      content,
      type,
      price,
    };
    dispatch(addTransaction(newTransaction));
    setContent("");
    setPrice(0);
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
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          type="number"
          min={1}
          value={price}
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
