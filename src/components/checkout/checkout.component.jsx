import { useContext } from "react";
import CheckoutItem from "../checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.styles";

const headers = ["Product", "Descriptioin", "Quantity", "Price", "Remove"];

const Checkout = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {headers.map((header, index) => (
          <HeaderBlock key={index}>{header}</HeaderBlock>
        ))}
      </CheckoutHeader>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}
      <Total>Total: {cartTotalPrice}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
