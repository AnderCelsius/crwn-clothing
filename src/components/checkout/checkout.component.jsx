import { useContext } from "react";
import CheckoutItem from "../checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const headers = ["Product", "Descriptioin", "Quantity", "Price", "Remove"];

const Checkout = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {headers.map((header, index) => (
          <span key={index} className="header-block">{header}</span>
        ))}
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}
      <span className="total">Total: {cartTotalPrice}</span>
    </div>
  );
};

export default Checkout;
