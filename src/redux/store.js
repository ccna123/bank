import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expenseSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    expense: expenseReducer,
    user: userReducer,
  },
  devTools: true,
});

export default store;
