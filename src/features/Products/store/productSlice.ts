import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IProductFilter } from "@/features/Products/types/productTypes";
import { loadProducts } from "@/features/Products/services/productsService";

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
    setIsLoading(state: IProductState, action: PayloadAction<boolean>): void {
      state.isLoading = action.payload;
    },
    setIsError(state: IProductState, action: PayloadAction<boolean>): void {
      state.isError = action.payload;
    },
    setProducts(state: IProductState, action: PayloadAction<IProduct[]>): void {
      state.products = action.payload;
    },
    setFilters(state: IProductState, action: PayloadAction<IProductFilter[]>): void {
      state.filters = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.fulfilled, (state, action) => {
        if (action.payload) {
          state.products = action.payload;
        }
      })
      .addCase(loadProducts.rejected, (state) => {
        state.isError = true;
      })
      .addCase(loadProducts.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const { setIsLoading, setIsError, setProducts, setFilters } = productSlice.actions;
export default productSlice.reducer;