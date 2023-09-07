import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
export const PieChart = ({ maxIncome, maxSpending }) => {
  return (
    <Pie
      data={{
        labels: [],
        datasets: [
          {
            label: "Transaction Statistic",
            backgroundColor: ["#4ADE80", "#F87171"],
            data: [maxIncome, maxSpending],
            borderWidth: 1,
          },
        ],
      }}
    />
  );
};
