import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IProductFilter } from "@/types/productTypes";

export enum EProductSlice {
  NAME= 'product',
}

interface IProductState {
  products: IProduct[],
  filters: IProductFilter[],
  isLoading: boolean,
  isError: boolean,
};

const initialState: IProductState = {
  products: [],
  filters: [],
  isLoading: false,
  isError: false,
};

const productSlice = createSlice({
  name: EProductSlice.NAME,
  initialState,
  reducers: {
    setIsLoading(state: IProductState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setIsError(state: IProductState, action: PayloadAction<boolean>) {
      state.isError = action.payload;
    },
    setProducts(state: IProductState, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
    setFilters(state: IProductState, action: PayloadAction<IProductFilter[]>) {
      state.filters = action.payload;
    }
  },
});

export const { setIsLoading, setIsError, setProducts, setFilters } = productSlice.actions;
export default productSlice.reducer;