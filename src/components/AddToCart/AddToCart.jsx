import IconBag from "../../assets/icons/IconBag";

import "./add-to-cart.scss";
const AddToCart = ({ hasIcon = true, style = {} }) => {
  return (
    <div style={style} className="add-to-cart-link">
      {hasIcon ? <IconBag stroke="white" /> : ""}
      <div className="add-to-cart-title">Add to cart</div>
    </div>
  );
};
export default AddToCart;
