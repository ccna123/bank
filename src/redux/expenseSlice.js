import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  transactions: [],
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.transactions.push(action.payload);
      });
  },
});

export const fetchTransactions = createAsyncThunk(
  "expense/fetchTransactions",
  async () => {
    const res = await axios.get("http://localhost:8000/transactions");
    return res.data;
  }
);

export const addTransaction = createAsyncThunk(
  "expense/addTransaction",
  async (newTransaction) => {
    const res = await axios.post(
      "http://localhost:8000/transactions",
      newTransaction
    );
    return res.data;
  }
);

export const { add } = expenseSlice.actions;
export default expenseSlice.reducer;
