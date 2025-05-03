import { configureStore } from "@reduxjs/toolkit";
import productReducer, { EProductSlice } from "@/store/productSlice";
import cartReducer from "@/store/cartSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
