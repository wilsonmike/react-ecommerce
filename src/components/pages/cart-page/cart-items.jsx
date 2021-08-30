// import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from "../../icons";
import increasebtn from "../../../assets/plusblue.png";
import trash from "../../../assets/removeblue.png";
import decreasebtn from "../../../assets/minusblue.png";
import "./cart-page.styles.scss";

const CartItem = (props) => {
  const {
    title,
    imageUrl,
    price,
    quantity,
    id,
    description,
    increase,
    decrease,
  } = props;
  const product = { title, imageUrl, price, quantity, id, description };

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
          <button className="btn-increase" onClick={() => increase(product)}>
            <img src={increasebtn} alt="increase item quantity" width="20px" />
          </button>
          {quantity === 1 && (
            <button className="btn-trash">
              <img src={trash} alt="remove item from cart" width="20px" />
            </button>
          )}
          {quantity > 1 && (
            <button className="btn-decrease">
              <img
                src={decreasebtn}
                alt="decrease item quantity"
                width="20px"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
