import { Link } from "react-router-dom";
import Image from "../Image/Image";
import "./popular-post.scss";
const PopularPost = ({ src, date, title }) => {
  return (
    <div className="popular-post">
      <Link className="popular-post-img-link">
        <Image className={"popular-post-img"} src={src} />
      </Link>
      <Link>
        <span className={"popular-post-date"}>{date}</span>
      </Link>
      <Link>
        <p className={"popular-post-title"}>{title}</p>
      </Link>
    </div>
  );
};
export default PopularPost;
