import { Link } from "react-router-dom";
import "./aside.scss";
import Image from "../Image/Image";
import author from "../../assets/images/author.png";
import PopularPosts from "../PopularPosts/PopularPosts";
import Subscribe from "../Subscribe/Subscribe";
import Tags from "../Tags/Tags";
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
      <div className="categories">
        <h2>Categories</h2>
        <Link className="category" to={""}>
          Beauty
        </Link>
        <Link className="category" to={""}>
          Entertainment
        </Link>
        <Link className="category" to={""}>
          Home Decor
        </Link>
        <Link className="category" to={""}>
          Inspiration
        </Link>
        <Link className="category" to={""}>
          Interior
        </Link>
        <Link className="category" to={""}>
          Lifestyle
        </Link>
        <Link className="category" to={""}>
          Travel
        </Link>
      </div>

      <PopularPosts />
      <Subscribe />
      <Tags />
    </aside>
  );
};
export default Aside;
