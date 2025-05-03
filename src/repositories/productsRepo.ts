import { EDummyJSON, IProduct } from "@/types/productTypes";

export const loadProducts = async (): Promise<Record<string, IProduct[]>> => {

  const res = await fetch(`${EDummyJSON.URL}${EDummyJSON.PRODUCTS}`);

  if (!res.ok) {
    throw new Error('Błąd pobierania produktów');
  }

  const data = await res.json();

  return data as Record<string, IProduct[]>;
};