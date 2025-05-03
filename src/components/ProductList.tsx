import { ReactElement, useEffect, useState } from "react";
import { loadProducts } from "@/services/productsService";
import { store } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { IProduct } from "@/types/productTypes";
import ProductItem from "@/components/ProductItem";
import { handleAddProductToCart } from "@/services/cartService";

const ProductList = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const isLoading = useAppSelector((state) => state.products.isLoading);
  const isError = useAppSelector((state) => state.products.isError);

  const products = useAppSelector((state) => state.products.products);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const handleAddToCart = (product: IProduct, quantity: number) => {
    handleAddProductToCart(dispatch, product, quantity);
  };

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
            onAddToCart={() => handleAddToCart(product, 1)}
          />
        ))}
    </div>
  );
};

export default ProductList;
