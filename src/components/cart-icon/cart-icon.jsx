import React from "react";
import "./cart-icon.styles.scss";
import ShoppingCart from "../../assets/shopping-bag.png";

const CartIcon = () => {
  return (
    <div className="cart-container">
      <img className="bag" src={ShoppingCart} alt="shopping cart" />
      <span className="badge badge-pill badge-success"> 5 </span>
    </div>
  );
};

export default CartIcon;
