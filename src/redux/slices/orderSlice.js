import { createSlice } from "@reduxjs/toolkit";

// Load orders from localStorage
const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    list: savedOrders,
  },
  reducers: {
    addOrder(state, action) {
      state.list.push(action.payload);
      localStorage.setItem("orders", JSON.stringify(state.list));
    },
    clearOrders(state) {
      state.list = [];
      localStorage.setItem("orders", JSON.stringify([]));
    }
  },
});

export const { addOrder, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
