import { Link } from "react-router-dom";
import "./aside.scss";
import Image from "../Image/Image";
import author from "../../assets/images/author.png";
import PopularPosts from "../PopularPosts/PopularPosts";
import Subscribe from "../Subscribe/Subscribe";
import Tags from "../Tags/Tags";
import asideImg from "../../assets/images/aside-img.jpg";
import Categories from "../Categories/Categories";
const Aside = () => {
  return (
    <aside>
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
      <Subscribe />
      <Tags />
      <Image className={"aside-img"} src={asideImg} />
      <Categories title={"Archive"} />
      <Subscribe />
    </aside>
  );
};
export default Aside;
