import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";
import ordersReducer from "./slices/orderSlice";
import favoriteReducer from "./slices/favoriteSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    orders: ordersReducer,
    favorites: favoriteReducer,
  },
});
