import { Link } from "react-router-dom";
import "./black-button.scss";
const BlackButton = ({ name }) => {
  return (
    <Link className="black-button" to={""}>
      {name}
    </Link>
  );
};
export default BlackButton;
