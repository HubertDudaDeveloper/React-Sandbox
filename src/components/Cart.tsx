import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { ECartSlice } from "@/store/cartSlice";
import {
  changeQuantity,
  removeProductToCart,
  saveCart,
  loadSavedCart,
} from "@/services/cartService";
import { useEffect, useMemo } from "react";
import { ICartProduct } from "@/types/cartTypes";

export const Cart = () => {
  const dispatch = useAppDispatch();
  const {
    isError,
    isLoading,
    items: cartList,
  } = useAppSelector((store) => store[ECartSlice.NAME]);

  const handleRemoveProduct = (cartProduct: ICartProduct) => {
    removeProductToCart(dispatch, cartProduct.id);
  };

  const handleChangeQuantity = (cartProductId: number, value: string) => {
    changeQuantity(dispatch, cartProductId, value);
  };

  useEffect(() => loadSavedCart(dispatch), []);
  useEffect(() => saveCart(cartList), [cartList]);

  const handleGoToForm = () => {
    
  };

  const price = useMemo(
    () =>
      cartList.length
        ? cartList
            .map(
              (cartProduct: ICartProduct) =>
                cartProduct.price * cartProduct.quantity
            )
            .reduce((prev, next) => prev + next)
            .toFixed(2)
        : 0,
    [cartList]
  );

  if (isError) {
    return <>Wystąpił błąd</>;
  }

  if (isLoading) {
    return <>Trwa ładowanie...</>;
  }

  return (
    <div>
      {cartList.map((cartProduct: ICartProduct) => (
        <div key={cartProduct.id}>
          {cartProduct.title}
          <button onClick={() => handleRemoveProduct(cartProduct)}>
            Usuń produkt
          </button>
          <input
            type="number"
            value={cartProduct.quantity}
            onChange={(e) =>
              handleChangeQuantity(cartProduct.id, e.target.value)
            }
          />
        </div>
      ))}

      <span>Razem: {price}zł</span>

      <button onClick={handleGoToForm}>Przejdź do zamówienia</button>
    </div>
  );
};

export default Cart;
