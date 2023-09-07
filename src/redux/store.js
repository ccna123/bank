import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expenseSlice";

const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
  devTools: true,
});

export default store;
