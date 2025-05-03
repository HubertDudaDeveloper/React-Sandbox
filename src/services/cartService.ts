import { useAppDispatch } from "@/hooks/reduxHooks";
import { IProduct } from "@/types/productTypes";
import { ICartProduct, addCartItems, removeCartItems } from "@/store/cartSlice";
import { AppDispatch } from "@/store/store";

const cartService = {
  handleAddProductToCart(dispatch: AppDispatch, product: IProduct, quantity: number): void {
    const cartItem = { ...product, quantity } as ICartProduct;
    dispatch(addCartItems(cartItem));
  },

  handleRemoveProductToCart(dispatch: AppDispatch, product: IProduct): void {
    dispatch(removeCartItems(product.id));
  },
};

export const { handleAddProductToCart, handleRemoveProductToCart } = cartService;
