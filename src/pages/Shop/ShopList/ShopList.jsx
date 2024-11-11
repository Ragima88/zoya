import { Link } from "react-router-dom";
import Image from "../../../components/Image/Image";

import "./shop-list.scss";
import AddToCart from "../../../components/AddToCart/AddToCart";
const ShopList = ({ src, name, amount, to, className }) => {
  return (
    <Link className={`shop-item ${className}`} to={to}>
      <div className="shop-item-pic-holder">
        <Image className="shop-item-pic" src={src} />
        <AddToCart className="add-to-cart-link" />
      </div>
      <p>{name}</p>
      <span>{amount}</span>
    </Link>
  );
};
export default ShopList;
