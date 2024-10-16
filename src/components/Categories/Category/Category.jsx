import "./category.scss";
import { Link } from "react-router-dom";
const Category = ({ src, name }) => {
  return (
    <Link className="category" to={src}>
      {name}
    </Link>
  );
};
export default Category;
