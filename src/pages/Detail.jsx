import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DetailCard } from "../components/DetailCard";
import axios from "axios";

export const Detail = () => {
  const { id } = useParams();
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/getTransactions/${id}`
        );
        setTransactions(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <section className="absolute top-0 left-0 w-full">
      <div className="mb-10 grid grid-cols-1 gap-4 w-full h-[512px] p-4 overflow-y-scroll">
        {transactions.map((t) => (
          <DetailCard key={t.id} transaction={t} />
        ))}
      </div>
      <Link
        to="/home"
        className="bg-blue-400 text-white rounded-lg p-3 font-bold m-4"
      >
        Go Back
      </Link>
    </section>
  );
};
