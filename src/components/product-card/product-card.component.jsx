import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import "./product-card.styles.jsx";
import { FooterContainer, ProductCardContainer, ProductName, ProductPrice } from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const {addItemToCart} = useContext(CartContext)


  const addProductToCart = () => addItemToCart(product)
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <FooterContainer>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </FooterContainer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
