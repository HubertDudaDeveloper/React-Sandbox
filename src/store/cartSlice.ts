import { ICartProduct } from "@/types/cartTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ECartSlice {
  NAME = 'cart'
};

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
    addCartItem(state: ICartState, action: PayloadAction<ICartProduct>): void {
      const indexOfFoundProduct = state.items.findIndex((cartProduct: ICartProduct) => cartProduct.id === action.payload.id);
      const isProductAlreadyInCart = indexOfFoundProduct !== -1;

      if (isProductAlreadyInCart) {
        state.items[indexOfFoundProduct].quantity = state.items[indexOfFoundProduct].quantity + 1; 
        state.items = [...state.items];
        return;
      }

      state.items = [...state.items, action.payload];
    },
    loadCartItems(state: ICartState, action: PayloadAction<ICartProduct[]>): void {
      state.items = action.payload;
    },
    removeCartItems(state: ICartState, action: PayloadAction<number>): void {
      state.items = state.items.filter((cartProduct: ICartProduct) => cartProduct.id !== action.payload);
    },
    quantityChange(state: ICartState, action: PayloadAction<Record<string, number>>): void {
      const fCartProduct = state.items.find((cartProduct: ICartProduct) => cartProduct.id === action.payload.id);
      if (!fCartProduct) {
        return;
      }

      fCartProduct.quantity = action.payload.quantity;
      state.items = [...state.items];
    },
  }
})

export const { setIsLoading, setIsError , addCartItem, loadCartItems, removeCartItems, quantityChange } = cartSlice.actions;
export default cartSlice.reducer;