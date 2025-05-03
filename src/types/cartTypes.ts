import { IProduct } from "@/types/productTypes";

export interface ICartProduct extends IProduct {
  quantity: number
}
