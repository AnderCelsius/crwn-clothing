import {
  CartItemContainer,
  Img,
  ItemDetailsContainer,
  ItemName,
} from "./cart-item.styles.jsx";

const CartItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetailsContainer>
        <ItemName>{name}</ItemName>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
