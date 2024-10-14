import { Link } from "react-router-dom";
import "./black-button.scss";
const BlackButton = () => {
  return (
    <Link className="black-button" to={""}>
      Read More
    </Link>
  );
};
export default BlackButton;
