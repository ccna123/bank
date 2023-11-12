import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Transaction } from "../components/Transaction";
import { Modal } from "../components/Modal";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [maxSpending, setMaxSpending] = useState(0);
  const [maxIncome, setMaxIncome] = useState(0);
  const [income, setIncome] = useState(0);
  const [spending, setSpending] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await axios.get(
        `http://localhost:4000/getTransactions/${user.id}`
      );
      setTransactions(res.data);
    };
    fetchTransactions();
  }, [transactions.length]);

  useEffect(() => {
    let totalBalance = 0;
    transactions.forEach((t) => {
      if (t.type === "spending") {
        totalBalance -= parseFloat(t.amount);
      } else {
        totalBalance += parseFloat(t.amount);
      }
      setBalance(totalBalance);
    });
  }, [transactions]);

  useEffect(() => {
    const totalSpending = transactions.reduce((total, t) => {
      if (t.type === "spending") {
        return total + parseFloat(t.amount);
      } else {
        return total;
      }
    }, 0);
    setSpending(totalSpending);

    const totalIncome = transactions.reduce((total, t) => {
      if (t.type === "income") {
        return total + parseFloat(t.amount);
      } else {
        return total;
      }
    }, 0);
    setIncome(Math.floor(totalIncome));

    const spendingArray = transactions
      .filter((t) => t.type === "spending")
      .map((t) => parseFloat(t.amount));
    setMaxSpending(
      (Math.max(...spendingArray) / totalSpending).toFixed(1) * 100
    );
    const incomeArray = transactions
      .filter((t) => t.type === "income")
      .map((t) => parseFloat(t.amount));
    setMaxIncome((Math.max(...incomeArray) / totalIncome).toFixed(1) * 100);
  }, [transactions]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div className="bg-white rounded-md shadow-lg p-4 md:w-[80%]">
      <header className="App-header flex justify-between items-center mt-5">
        <div className="flex items-center gap-4">
          <i className="fa-solid fa-sack-dollar text-white bg-green-500 rounded-full p-3"></i>
          <p>MONFLOW</p>
        </div>
        <div className="flex items-center gap-2">
          <p>{user?.name}</p>
          <i className="fa-solid fa-user fa-xl text-orange-400 cursor-pointer"></i>
          <p
            onClick={handleLogout}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Log out
          </p>
        </div>
      </header>

      <section className="flex justify-between items-center my-10 relative">
        <div className="flex items-center">
          <sup className="text-4xl">$</sup>
          <p className="text-6xl">{balance.toLocaleString()}</p>
        </div>
      </section>

      <section className="mb-4">
        <div className="flex justify-between items-center">
          <p className="text-xl">Current Balance</p>
          <i className="fa-solid fa-ellipsis fa-xl cursor-pointer"></i>
        </div>
      </section>

      <section>
        <div className="flex justify-around gap-4">
          {["Daily Income", "Spending"].map((n) => (
            <Card
              key={n}
              title={n}
              maxIncome={maxIncome}
              maxSpending={maxSpending}
              totalIncome={income}
              totalSpending={spending}
            />
          ))}
        </div>
      </section>

      <section className="my-4 flex items-center gap-4">
        <p className="text-xl">Transactions History</p>
        <Link
          to={`/detail/${user.id}`}
          className="text-xl text-blue-500 hover:underline cursor-pointer"
        >
          View Detail
        </Link>
      </section>

      <section className="mb-6">
        <div className="h-[10rem] overflow-y-scroll">
          {transactions &&
            transactions.map((t) => (
              <Transaction
                key={t.id}
                content={t.content}
                cost={parseFloat(t.amount)}
                type={t.type}
              />
            ))}
        </div>
      </section>

      <section className="">
        <div className="w-fit ml-auto">
          <i
            onClick={handleToggleModal}
            className="fa-solid fa-plus cursor-pointer bg-blue-400 rounded-full p-5 text-white"
          ></i>
        </div>
      </section>
      {showModal && (
        <Modal
          handleToggleModal={handleToggleModal}
          setTransactions={setTransactions}
        />
      )}
    </div>
  );
};
