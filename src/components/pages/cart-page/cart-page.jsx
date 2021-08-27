import { useContext } from "react";
import { CartContext } from "../../../context/cart-context";
import Layout from "../../../shared/layout";
import CartItem from "./cart-items";
import "./cart-page.styles.scss";

const CartPage = () => {
  const { cartItems, itemCount, total } = useContext(CartContext);
  return (
    <Layout>
      <>
        <div className="cart-main">
          <h1>Items In Your Bag</h1>
          <hr />
          <p className="tag-dono">
            $10 from every shirt sold goes directly back to the store creator.
          </p>
          {cartItems.length === 0 ? (
            <div className="empty-cart">Your Cart is empty</div>
          ) : (
            <>
              <div className="cart-page">
                <div className="cart-item-container">
                  {cartItems.map((item) => (
                    <CartItem {...item} key={item.id} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </>
    </Layout>
  );
};

export default CartPage;
