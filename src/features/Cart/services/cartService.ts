import { IProduct } from "@/features/Products/types/productTypes";
import { AppDispatch } from "@/store/store";
import { addCartItem, removeCartItems, quantityChange, loadCartItems } from "@/features/Cart/store/cartSlice";
import { ICartProduct } from "@/features/Cart/types/cartTypes";

const cartService = {
  addProductToCart(dispatch: AppDispatch, product: IProduct, quantity: number): void {
    const cartItem = { ...product, quantity } as ICartProduct;
    dispatch(addCartItem(cartItem));
  },

  removeProductToCart(dispatch: AppDispatch, productId: number): void {
    dispatch(removeCartItems(productId));
  },

  changeQuantity(dispatch: AppDispatch, productId: number, quantity: number | string): void {
    if (Number(quantity) <= 0) {
      return;
    }

    dispatch(quantityChange({id: productId, quantity: Number(quantity)}));
  },

  saveCart(cartItems: ICartProduct[]): void {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  },

  loadSavedCart(dispatch: AppDispatch): void {
    const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') ?? '') : [];
    if (!cartItems.length) {
      return;
    };

    dispatch(loadCartItems(cartItems));
  },
};

export const {
  addProductToCart,
  removeProductToCart,
  changeQuantity,
  loadSavedCart,
  saveCart
} = cartService;
