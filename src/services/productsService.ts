import { setIsLoading, setIsError, setProducts } from "@/store/productSlice";
import { store } from "@/store/store";
import { loadProducts as loadProductsRepo } from "@/repositories/productsRepo";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadProducts = (): void => {
  console.log('test');
  createAsyncThunk(
    'products/load',
    async () => {
      try {
        store.dispatch(setIsError(false));
        store.dispatch(setIsLoading(true));
        const products = await loadProductsRepo();
        store.dispatch(setProducts(products));
      } catch (e) {
        store.dispatch(setIsError(true));
      } finally {
        store.dispatch(setIsLoading(false));
        console.log(store.getState().products);
      }
    }
  )
};
