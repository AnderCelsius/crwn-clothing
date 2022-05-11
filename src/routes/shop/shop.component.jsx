import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/products.context";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products ? (
        products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })
      ) : (
        <h1>There are no products to shop</h1>
      )}
    </div>
  );
};

export default Shop;
