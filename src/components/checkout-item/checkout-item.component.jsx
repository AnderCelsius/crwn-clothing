import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  ArrowButton,
  CheckoutItemContainer,
  ImageContainer,
  ItemName,
  ItemQuantity,
  Price,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

const CheckoutItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  const { removeItemFromCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const removeItemHandler = () => removeItemFromCart(item);

  const addItemHandler = () => addItemToCart(item);

  const clearItemHandler = () => clearItemFromCart(item);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <ItemName>{name}</ItemName>
      <ItemQuantity>
        <ArrowButton onClick={removeItemHandler}>&#10094;</ArrowButton>
        <Value>{quantity}</Value>
        <ArrowButton onClick={addItemHandler}>&#10095;</ArrowButton>
      </ItemQuantity>
      <Price>{price * quantity}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
