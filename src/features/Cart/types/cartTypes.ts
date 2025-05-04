import { IProduct } from "@/features/Products/types/productTypes";

export interface ICartProduct extends IProduct {
  quantity: number
}
