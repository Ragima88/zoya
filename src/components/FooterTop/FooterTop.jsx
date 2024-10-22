import { Link } from "react-router-dom";

import "./footer-top.scss";
import Image from "../Image/Image";
import footerImg1 from "../../assets/images/footer-img1.jpg";
import footerImg2 from "../../assets/images/footer-img2.jpg";
import footerImg3 from "../../assets/images/footer-img3.jpg";
import footerImg4 from "../../assets/images/footer-img4.jpg";
import footerImg5 from "../../assets/images/footer-img5.jpg";
import footerImg6 from "../../assets/images/footer-img6.jpg";
import footerImg7 from "../../assets/images/footer-img7.jpg";
import footerImg8 from "../../assets/images/footer-img8.jpg";
const FooterTop = () => {
  const list = [
    {
      id: 1,
      image: footerImg1,
      to: "https://www.instagram.com/p/CPsiMrzrEFE/?_ga=2.224477786.1145075179.1728885078-1795553505.1726679370",
    },
    {
      id: 2,
      image: footerImg2,
      to: "https://www.instagram.com/p/CPsiEwgraSm/?_ga=2.221979992.1145075179.1728885078-1795553505.1726679370",
    },
    {
      id: 3,
      image: footerImg3,
      to: "https://www.instagram.com/p/CPsha9kLn2n/?_ga=2.221979992.1145075179.1728885078-1795553505.1726679370",
    },
    {
      id: 4,
      image: footerImg4,
      to: "https://www.instagram.com/p/CPshMAorZbq/?_ga=2.228746588.1145075179.1728885078-1795553505.1726679370",
    },
    {
      id: 5,
      image: footerImg5,
      to: "https://www.instagram.com/p/CNb8MR-Lcw0/?_ga=2.228746588.1145075179.1728885078-1795553505.1726679370",
    },
    {
      id: 6,
      image: footerImg6,
      to: "https://www.instagram.com/p/CNb8FcyLi2w/?_ga=2.228746588.1145075179.1728885078-1795553505.1726679370",
    },
    {
      id: 7,
      image: footerImg7,
      to: "https://www.instagram.com/p/CNb7-koL8Sy/?_ga=2.223560283.1145075179.1728885078-1795553505.1726679370",
    },
    {
      id: 8,
      image: footerImg8,
      to: "https://www.instagram.com/p/CNb79F8rl8y/?_ga=2.223560283.1145075179.1728885078-1795553505.1726679370",
    },
  ];
  return (
    <div className={"footer-top"}>
      {list.map((item) => {
        return (
          <Link key={item.id} className="footer-img-item" to={item.to}>
            <Image className={"footer-img"} src={item.image} />
          </Link>
        );
      })}
    </div>
  );
};
export default FooterTop;
