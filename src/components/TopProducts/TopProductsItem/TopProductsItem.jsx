import { Link } from "react-router-dom";
import Image from "../../Image/Image";
import FiveStarRating from "../../FiveStarRating/FiveStarRating";
import "./top-products-item.scss";
const TopProductsItem = ({ to, src, title, amount }) => {
  return (
    <div className="top-products-item">
      <Link to={to} className="top-products-item-link">
        <Image className="top-products-item-link-pic" src={src} />
      </Link>
      <div className="top-products-item-content">
        <Link to={to} className="top-products-item-content-title">
          {title}
        </Link>
        <div className="top-products-item-content-amount">{amount}</div>
        <FiveStarRating
          rating={2.5}
          filledColor="#cfac9f"
          emptyColor="#eddbd5"
          gap="7px"
          size="10px"
        />
      </div>
    </div>
  );
};
export default TopProductsItem;
