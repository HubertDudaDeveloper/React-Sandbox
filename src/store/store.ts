import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/features/Products/store/productSlice";
import cartReducer from "@/features/Cart/store/cartSlice";
import checkoutReducer from "@/features/Checkout/store/checkoutSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    checkout: checkoutReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
