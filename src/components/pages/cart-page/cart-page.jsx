import { useContext } from "react";
import { CartContext } from "../../../context/cart-context";
import Layout from "../../../shared/layout";
import CartItem from "./cart-items";
import Total from "./total";
import "./cart-page.styles.scss";

const CartPage = () => {
  const {
    cartItems,
    itemCount,
    total,
    increase,
    decrease,
    removeProduct,
    clearCart,
  } = useContext(CartContext);
  const funcpair = { increase, decrease, removeProduct };
  return (
    <Layout>
      <>
        <div className="cart-main">
          <h1 className="items-in-bag">Items In Your Bag</h1>
          <hr />
          <p className="tag-dono">
            $10 from every shirt sold goes directly back to the store creator.
          </p>
          <div className="browser-cart">
            {cartItems.length === 0 ? (
              <div className="empty-cart">Your Cart is empty</div>
            ) : (
              <>
                <div className="cart-page">
                  <div className="cart-item-container">
                    {cartItems.map((item) => (
                      <CartItem {...item} key={item.id} {...funcpair} />
                    ))}
                  </div>
                </div>
              </>
            )}
            <hr className="hr-mobile" />
            {itemCount >= 1 && (
              <div>
                <Total
                  itemCount={itemCount}
                  total={total}
                  clearCart={clearCart}
                />
              </div>
            )}
          </div>
        </div>
      </>
    </Layout>
  );
};

export default CartPage;
