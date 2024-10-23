import { Link } from "react-router-dom";
import "./listing-item.scss";
import Image from "../Image/Image";
const ListingItem = ({ src, name, title, date }) => {
  return (
    <Link className="listing-item" to={""}>
      <Image className="listing-item-pic" src={src} />
      <span className="listing-item-name">{name}</span>
      <span className="listing-item-title">{title}</span>
      <span className="listing-item-date">{date}</span>
    </Link>
  );
};
export default ListingItem;
