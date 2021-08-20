import React from "react";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  return (
    <div className="cart-container">
      <i className="bi bi-cart3"></i>
      <span className="cart-count"> 5 </span>
    </div>
  );
};

export default CartIcon;
