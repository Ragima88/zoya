import "./hamburger.scss";
import { Link } from "react-router-dom";
import hamburger from "../../assets/icons/hamburger.jpeg";
import close from "../../assets/icons/icon-close.svg";
import Image from "../Image/Image";
import Nav from "../Nav/Nav";
const Hamburger = ({ isOpen, setOpen, menu }) => {
  const handleOpen = () => {
    return setOpen(true);
  };
  const handleClose = () => {
    return setOpen(false);
  };
  return (
    <div className="hamburger-div">
      <div className="hamburger-icons">
        {isOpen ? (
          <Image
            className={"hamburger-close-pic"}
            onClick={handleClose}
            src={close}
          />
        ) : (
          <Image
            className={"hamburger-pic"}
            onClick={handleOpen}
            src={hamburger}
          />
        )}
      </div>
    </div>
  );
};
export default Hamburger;
