import "./author.scss";
import Image from "../Image/Image";
import { Link } from "react-router-dom";
const Author = ({ src, title, name, desc }) => {
  return (
    <Link className="author-div">
      <Image className={"author-div-img"} src={src} />
      <div className="author-div-content">
        <span className="author-div-title">{title}</span>
        <span className="author-div-name">{name}</span>
        <span>{desc}</span>
      </div>
    </Link>
  );
};
export default Author;
