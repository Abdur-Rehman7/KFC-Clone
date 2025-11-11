import { createSlice } from "@reduxjs/toolkit";

const load = () => {
  try {
    const data = localStorage.getItem("cartItems");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const save = (items) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

const initialState = {
  items: load(),
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        // ✅ Increment quantity if product already in cart
        existingItem.quantity += 1;
      } else {
        // ✅ Add new product with quantity = 1
        state.items.push({ ...item, quantity: 1 });
      }

      // Save to localStorage
      save(state.items);
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
      save(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
