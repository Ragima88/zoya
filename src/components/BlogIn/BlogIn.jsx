import "./blog-in.scss";
import Image from "../../components/Image/Image";
import { Link } from "react-router-dom";
import BlackButton from "../../components/BlackButton/BlackButton";
import ShareButton from "../../components/ShareButton/ShareButton";

const BlogIn = ({ name, title, date, author, src, content }) => {
  return (
    <div className="blog-in">
      <div className="blog-name-div">
        <Link className="blog-name" to={""}>
          {name}
        </Link>
      </div>
      <Link className="blog-title" to={""}>
        {title}
      </Link>
      <div className="blog-desc">
        <Link to={""} className="blog-date">
          {date}
        </Link>
        <div></div>
        <Link to={""} className="blog-author">
          {author}
        </Link>
      </div>
      <Image className={"blog-img"} src={src} />
      <div className="blog-content">{content}</div>
      <div className="button-div">
        <BlackButton />
        <ShareButton />
      </div>
    </div>
  );
};
export default BlogIn;
