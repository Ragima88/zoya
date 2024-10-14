import "./blog-in.scss";
import Image from "../../components/Image/Image";
import { Link } from "react-router-dom";
import BlackButton from "../../components/BlackButton/BlackButton";
import ShareButton from "../../components/ShareButton/ShareButton";
import inspirationImg from "../../assets/images/blog-img-1.jpg";
const BlogIn = () => {
  return (
    <div className="inspiration-blog">
      <div className="inspiration">
        <Link className="inspiration-name" to={""}>
          Inspiration
        </Link>
      </div>
      <Link className="inspiration-title" to={""}>
        Ready for a getaway weekend
      </Link>
      <div className="inspiration-desc">
        <Link to={""} className="inspiration-date">
          March 1, 2021
        </Link>
        <div></div>
        <Link to={""} className="inspiration-author">
          {" "}
          By Katherine Bishop
        </Link>
      </div>
      <Image className={"inspiration-img"} src={inspirationImg} />
      <div className="inspiration-content">
        Lorem ipsum dolor sit amet, consectetu adipiscing elit. Aenean commodo
        ligula eget dolor. Cum socis Theme sed natoque ut penatibus. Etiam
        ultricies nisi vel augue. Cura bitur ullamcorper ultricies dictum felis
        eu pede sit. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
        rhoncus, sem quam semper libero, amet et adipiscing sem neque nula
        ipsum. Etiam ultricies nisi vel augue blandit vel, luctus pulvinar.
        Nullam quis ante. Etiam sit amet orci eget eros.
      </div>
      <div className="button-div">
        <BlackButton />
        <ShareButton />
      </div>
    </div>
  );
};
export default BlogIn;
