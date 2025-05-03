import { ReactElement, useEffect, useState } from "react";
import { loadProducts } from "@/services/productsService";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import ProductItem from "@/components/ProductItem";
import { addProductToCart, saveCart } from "@/services/cartService";
import { EProductSlice } from "@/store/productSlice";
import { ECartSlice } from "@/store/cartSlice";
import { IProduct } from "@/types/productTypes";

const ProductList = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const { isLoading, isError, products } = useAppSelector((store) => store[EProductSlice.NAME]);
  const { items: cartList } = useAppSelector((store) => store[ECartSlice.NAME]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const handleAddProductToCart = (product: IProduct): void => {
    addProductToCart(dispatch, product, 1);
    saveCart(cartList);
  }

  if (isLoading) {
    return <>Trwa ładowanie...</>;
  }

  if (isError) {
    return <>Wystąpił błąd...</>;
  }

  return (
    <div>
      <label htmlFor="title-filter">Tytuł</label>
      <input
        id="title-filter"
        value={filterTitle}
        placeholder="tytuł"
        onChange={(e) => setFilterTitle(e.target?.value)}
      />

      <label htmlFor="category-filter">Kategoria</label>

      <select
        id="category-filter"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target?.value)}
      >
        {["", ...new Set(products.map((product) => product.category))].map(
          (category, index) => {
            return (
              <option key={category + index} value={category}>
                {category}
              </option>
            );
          }
        )}
      </select>

      {products
        .filter((product) => {
          if (!filterTitle && !filterCategory) {
            return true;
          }

          return (
            (filterTitle &&
              product.title
                .toLowerCase()
                .includes(filterTitle.toLowerCase())) ||
            (filterCategory && product.category === filterCategory)
          );
        })
        .map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={() => handleAddProductToCart(product)}
          />
        ))}
    </div>
  );
};

export default ProductList;
