import { ReactElement, useEffect, useState } from "react";
import { loadProducts } from "@/services/productsService";
import { store } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

const ProductList = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const products = useAppSelector((state) => state.products.products);
  const isLoading = useAppSelector((state) => state.products.isLoading);
  const isError = useAppSelector((state) => state.products.isError);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  if (isLoading) {
    return (
      <>
        Trwa ładowanie...
      </>
    )
  }

  if (isError) {
    return (
      <>
        Wystąpił błąd...
      </>
    )
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
      <input
        id="category-filter"
        value={filterCategory}
        placeholder="tytuł"
        onChange={(e) => setFilterCategory(e.target?.value)}
      />

      {products
        .filter((product) => {
          if (!filterTitle && !filterCategory) {
            return true;
          }

          return ((filterTitle && product.title === filterTitle) || (filterCategory && product.category === filterCategory));
        })
        .map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.images[0]} height="250"/>
            <p>{product.description}</p>
            <span>{product.price}</span>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
