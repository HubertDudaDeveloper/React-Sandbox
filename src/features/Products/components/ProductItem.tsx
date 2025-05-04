import { IProduct } from "@/features/Products/types/productTypes";

type ProductItemProps = {
  product: IProduct,
  onAddToCart: Function
};

const ProductItem = ({ product, onAddToCart }:ProductItemProps) => {
  

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.images[0]} height="250" />
      <p>{product.description}</p>
      <span>{product.price}</span>
      <button onClick={() => onAddToCart(product, 1)}>
        Dodaj do koszyka
      </button>
    </div>
  )
};

export default ProductItem;