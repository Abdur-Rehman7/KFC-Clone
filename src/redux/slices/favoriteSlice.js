import { createSlice } from "@reduxjs/toolkit";

const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    items: storedFavorites,
  },

  reducers: {
    addFavorite: (state, action) => {
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.items));
      }
    },

    removeFavorite: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
