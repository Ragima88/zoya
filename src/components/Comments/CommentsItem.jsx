import { Link } from "react-router-dom";
import Image from "../Image/Image";
import "./comments-item.scss";
const CommentsItem = ({ src, date, name, comment }) => {
  return (
    <li className="comments-item">
      <Image className={"comments-img"} src={src} />
      <div className="comments-content">
        <div className="comments-content-top">
          <Link to={""} className="comments-date">
            {date}
          </Link>
          <Link className="reply-btn" to={""}>
            Reply
          </Link>
        </div>

        <span className="comments-name">{name}</span>
        <span className="comments-comment">{comment}</span>
      </div>
    </li>
  );
};
export default CommentsItem;
