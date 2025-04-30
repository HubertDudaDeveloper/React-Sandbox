import { ReactElement, useEffect } from "react";
import { loadProducts } from "@/services/productsService";
import { store } from "@/store/store";
import { useAppDispatch } from "@/hooks/reduxHooks";

const ProductList = (): ReactElement => {
  loadProducts();
  
  const products = store.getState().products;

  return (
    <div>
      { products.products.map((product) => (
        <p>
          { product.title }
        </p>
      )) }
    </div>
  )
}

export default ProductList;