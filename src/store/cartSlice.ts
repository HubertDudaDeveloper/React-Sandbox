import { IProduct } from "@/types/productTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ECartSlice {
  NAME = 'cart'
};

export interface ICartProduct extends IProduct {
  quantity: number
}

interface ICartState {
  isLoading: boolean,
  isError: boolean,
  items: ICartProduct[],
}

const initialState: ICartState = {
  isLoading: false,
  isError: false,
  items: [],
}

const cartSlice = createSlice({
  name: ECartSlice.NAME,
  initialState,
  reducers: {
    setIsLoading(state: ICartState, action: PayloadAction<boolean>): void {
      state.isLoading = action.payload;
    },
    setIsError(state: ICartState, action: PayloadAction<boolean>): void {
      state.isError = action.payload;
    },
    addCartItems(state: ICartState, action: PayloadAction<ICartProduct>): void {
      state.items = [...state.items, action.payload];
    },
    removeCartItems(state: ICartState, action: PayloadAction<number>): void {
      state.items = state.items.filter((cartProduct: ICartProduct) => cartProduct.id !== action.payload);
    },
  }
})

export const { setIsLoading, setIsError , addCartItems, removeCartItems } = cartSlice.actions;
export default cartSlice.reducer;