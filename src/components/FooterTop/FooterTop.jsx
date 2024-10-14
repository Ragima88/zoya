import { Link } from "react-router-dom";

import "./footer-top.scss";
import Image from "../Image/Image";
const FooterTop = () => {
  const list = [
    {
      id: 1,
      image: "../../../public/images/footer-img1.jpg",
      to: "https://www.instagram.com/p/CPsiMrzrEFE/?_ga=2.224477786.1145075179.1728885078-1795553505.1726679370",
    },
    {
      id: 2,
      image: "../../../public/images/footer-img2.jpg",
      to: "https://www.instagram.com/p/CPsiEwgraSm/?_ga=2.221979992.1145075179.1728885078-1795553505.1726679370",
    },
    {
      id: 3,
      image: "../../../public/images/footer-img3.jpg",
      to: "https://www.instagram.com/p/CPsha9kLn2n/?_ga=2.221979992.1145075179.1728885078-1795553505.1726679370",
    },
    {
      id: 4,
      image: "../../../public/images/footer-img4.jpg",
      to: "https://www.instagram.com/p/CPshMAorZbq/?_ga=2.228746588.1145075179.1728885078-1795553505.1726679370",
    },
    {
      id: 5,
      image: "../../../public/images/footer-img5.jpg",
      to: "https://www.instagram.com/p/CNb8MR-Lcw0/?_ga=2.228746588.1145075179.1728885078-1795553505.1726679370",
    },
    {
      id: 6,
      image: "../../../public/images/footer-img6.jpg",
      to: "https://www.instagram.com/p/CNb8FcyLi2w/?_ga=2.228746588.1145075179.1728885078-1795553505.1726679370",
    },
    {
      id: 7,
      image: "../../../public/images/footer-img7.jpg",
      to: "https://www.instagram.com/p/CNb7-koL8Sy/?_ga=2.223560283.1145075179.1728885078-1795553505.1726679370",
    },
    {
      id: 8,
      image: "../../../public/images/footer-img8.jpg",
      to: "https://www.instagram.com/p/CNb79F8rl8y/?_ga=2.223560283.1145075179.1728885078-1795553505.1726679370",
    },
  ];
  return (
    <div className={"footer-top"}>
      {list.map((item) => {
        return (
          <Link className="footer-img-item" to={item.to}>
            <Image className={"footer-img"} src={item.image} />
          </Link>
        );
      })}
    </div>
  );
};
export default FooterTop;
