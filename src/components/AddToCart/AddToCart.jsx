import { Link } from "react-router-dom";
import IconBag from "../../assets/icons/IconBag";

import "./add-to-cart.scss";
const AddToCart = () => {
  return (
    <div className="add-to-cart-link">
      <IconBag stroke="white" />
      <div className="add-to-cart-title">Add to cart</div>
    </div>
  );
};
export default AddToCart;
