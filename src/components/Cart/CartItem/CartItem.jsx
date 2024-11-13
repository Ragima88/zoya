import { Link } from "react-router-dom";
import Image from "../../Image/Image";
import "./cart-item.scss";
import Counter from "../../Counter/Counter";
import cartItemClose from "../../../assets/icons/icon-close.svg";
const CartItem = ({ id, to, src, title, price, subtotal, quantity }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-close-holder">
        <Image className={"cart-item-close"} src={cartItemClose} />
      </div>
      <Link className="cart-item-link" to={""}>
        <Image className={"cart-item-pic"} src={src} />
      </Link>
      <Link className="cart-item-1 cart-product-name">{title}</Link>
      <div className="cart-item-1 cart-product-price">
        <span>{price}</span>
      </div>
      <div className="cart-item-1 cart-product-quantity">
        <Counter
          style={{
            marginBottom: "0px",
            marginRight: "0px",
          }}
        >
          {quantity}
        </Counter>
      </div>
      <div className="cart-item-1 cart-product-subtotal">
        <span>{subtotal}</span>
      </div>
    </div>
  );
};
export default CartItem;
