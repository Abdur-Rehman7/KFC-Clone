import { createSlice } from "@reduxjs/toolkit";

// Load existing addresses from localStorage
const savedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
const savedSelected =
  JSON.parse(localStorage.getItem("selectedAddress")) || null;

const addressSlice = createSlice({
  name: "address",
  initialState: {
    list: savedAddresses,
    selectedAddress: savedSelected,
  },

  reducers: {
    saveAddress: (state, action) => {
      state.list.push(action.payload);

      // Save updated list to localStorage
      localStorage.setItem("addresses", JSON.stringify(state.list));
    },

    deleteAddress: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);

      // Save updated list to localStorage
      localStorage.setItem("addresses", JSON.stringify(state.list));
    },

    clearAddresses: (state) => {
      state.list = [];
      localStorage.removeItem("addresses");
    },

    selectAddress: (state, action) => {
      state.selectedAddress = action.payload;
      localStorage.setItem("selectedAddress", JSON.stringify(action.payload));
    },

    updateAddress: (state, action) => {
      const index = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.list[index] = action.payload;
        localStorage.setItem("addresses", JSON.stringify(state.list));
      }
    },
  },
});

export const { saveAddress, deleteAddress, clearAddresses, selectAddress,  updateAddress } =
  addressSlice.actions;

export default addressSlice.reducer;
