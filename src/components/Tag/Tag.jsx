import { Link } from "react-router-dom";
import "./tag.scss";
const Tag = ({ src, name }) => {
  return (
    <Link className="tag" to={src}>
      {name}
    </Link>
  );
};
export default Tag;
