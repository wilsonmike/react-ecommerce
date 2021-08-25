import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { CartContext } from "../../context/cart-context";
import ShoppingCart from "../../assets/shopping-bag.png";

const CartIcon = () => {
  const { itemCount } = useContext(CartContext);
  return (
    <div className="cart-container">
      <img className="bag" src={ShoppingCart} alt="shopping cart" />
      {itemCount > 0 ? (
        <span className="badge badge-pill badge-success"> {itemCount} </span>
      ) : null}
    </div>
  );
};

export default CartIcon;
