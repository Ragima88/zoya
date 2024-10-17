import { Link } from "react-router-dom";
import "./social.scss";
import Image from "../Image/Image";
import facebook from "../../assets/icons/icon-facebook.svg";
import twitter from "../../assets/icons/icon-twitter.svg";
import pinterest from "../../assets/icons/icon-pinterest.svg";
import instagram from "../../assets/icons/icon-instagram.svg";
import linkedin from "../../assets/icons/icon-linkedin.svg";
const Social = () => {
  return (
    <div className="social-div">
      <Link
        target="_blank"
        className="social-link"
        to={
          "https://www.facebook.com/QodeInteractive?_ga=2.189974123.1343042352.1729063051-1795553505.1726679370"
        }
      >
        <Image className="social-img" src={facebook} />
      </Link>
      <Link
        target="_blank"
        className="social-link"
        to={
          "https://x.com/QodeInteractive?_ga=2.198361711.1343042352.1729063051-1795553505.1726679370"
        }
      >
        <Image className="social-img" src={twitter} />
      </Link>
      <Link
        target="_blank"
        className="social-link"
        to={
          "https://www.pinterest.com/qodeinteractive/?_ga=2.198361711.1343042352.1729063051-1795553505.1726679370"
        }
      >
        <Image className="social-img" src={pinterest} />
      </Link>
      <Link
        target="_blank"
        className="social-link"
        to={
          "https://www.instagram.com/QodeInteractive/?_ga=2.155224315.1343042352.1729063051-1795553505.1726679370"
        }
      >
        <Image className="social-img" src={instagram} />
      </Link>
      <Link
        target="_blank"
        className="social-link"
        to={
          "https://www.linkedin.com/company/qode-themes/?_ga=2.155224315.1343042352.1729063051-1795553505.1726679370"
        }
      >
        <Image className="social-img" src={linkedin} />
      </Link>
    </div>
  );
};
export default Social;
