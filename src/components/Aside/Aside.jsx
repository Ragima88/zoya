import { Link } from "react-router-dom";
import "./aside.scss";
import Image from "../Image/Image";
import author from "../../assets/images/author.png";
import PopularPosts from "../PopularPosts/PopularPosts";
import Tags from "../Tags/Tags";
import asideImg from "../../assets/images/aside-img.jpg";
import Categories from "../Categories/Categories";
import MiniBox from "../MiniBox/MiniBox";

const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside-author">
        <Link to={""}>
          <Image className={"author-img"} src={author} />
        </Link>
        <h3>Blogger</h3>
        <p>
          Welcome to my blog where I share my lifestyle tips, healthy snack
          ideas…
        </p>
      </div>
      <Categories title={"Categories"} />
      <PopularPosts />
      <MiniBox
        title={"Subscribe to Newsletter"}
        desc={"Receive news via email"}
        type={"subscribe"}
        placeholder={"Subscribe..."}
        variant={"email"}
      />
      <Tags />
      <Image className={"aside-img"} src={asideImg} />
      <Categories title={"Archive"} />
      <MiniBox
        title={"Follow Us"}
        desc={"Follow us on Social Network"}
        type={"social"}
        variant={"email"}
      />
    </aside>
  );
};
export default Aside;
