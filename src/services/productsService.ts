import { setIsLoading, setIsError } from "@/store/productSlice";
import { loadProducts as loadProductsRepo } from "@/repositories/productsRepo";
import { createAsyncThunk } from "@reduxjs/toolkit";

const productsService = {
  loadProducts: createAsyncThunk("products/load", async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setIsError(false));
      thunkAPI.dispatch(setIsLoading(true));

      const products = await loadProductsRepo();

      return products.products;
    } catch (e) {
      return thunkAPI.rejectWithValue("Błąd pobierania");
    } finally {
      thunkAPI.dispatch(setIsLoading(false));
    }
  }),
};

export const { loadProducts } = productsService;
