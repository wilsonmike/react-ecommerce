import React, { useContext } from "react";
import { withRouter } from "react-router";
import "./cart-icon.styles.scss";
import { CartContext } from "../../context/cart-context";
import ShoppingCart from "../../assets/shopping-bag.png";

const CartIcon = ({ history }) => {
  const { itemCount, cartItems } = useContext(CartContext);
  console.log("CartItems:", cartItems);
  return (
    <div className="cart-container" onClick={() => history.push("/cart")}>
      <img className="bag" src={ShoppingCart} alt="shopping cart" />
      {itemCount > 0 ? (
        <span className="badge badge-pill badge-success"> {itemCount} </span>
      ) : null}
    </div>
  );
};

export default withRouter(CartIcon);
