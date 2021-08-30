// import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from "../../icons";
import increase from "../../../assets/plusblue.png";
import trash from "../../../assets/removeblue.png";
import decrease from "../../../assets/minusblue.png";
import "./cart-page.styles.scss";

const CartItem = (product) => {
  const { title, imageUrl, price, quantity } = product;

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={imageUrl} alt="Product" />
      </div>
      <div className="details">
        <div className="name-price">
          <h4>{title}</h4>
          <p className="pricey">${price}</p>
        </div>
        <hr />
        <div className="quantity">
          <p>{`Quantity: ${quantity}`}</p>
        </div>
        <div className="btns-container">
          <button className="btn-increase">
            <img src={increase} alt="increase item quantity" width="20px" />
          </button>
          {quantity === 1 && (
            <button className="btn-trash">
              <img src={trash} alt="remove item from cart" width="20px" />
            </button>
          )}
          {quantity > 1 && (
            <button className="btn-decrease">
              <img src={decrease} alt="decrease item quantity" width="20px" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
