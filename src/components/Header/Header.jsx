import Section from "../Section/Section";
import Image from "../Image/Image";
import Search from "../Search/Search";
import logo from "../../assets/images/logo-header.png";
import iconLetter from "../../assets/icons/icon-letter.png";
import IconBag from "../../assets/icons/IconBag";
import linkedin from "../../assets/icons/icon-linkedin.svg";
import twitter from "../../assets/icons/icon-twitter.svg";
import facebook from "../../assets/icons/icon-facebook.svg";
import instagram from "../../assets/icons/icon-instagram.svg";
import behance from "../../assets/icons/icon-behance.svg";
import vimeo from "../../assets/icons/icon-vimeo.svg";
import pinterest from "../../assets/icons/icon-pinterest.svg";
import snapchat from "../../assets/icons/icon-snapchat.svg";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./header.scss";
import mobileLogo from "../../assets/images/logo-header.png";
import hamburger from "../../assets/icons/hamburger.jpeg";
const Header = () => {
  const items = [
    { name: "Landing", href: "/landing", order: 5 },
    { name: "Pages", href: "/pages", order: 2 },
    { name: "Shop", href: "/shop", order: 4 },
    { name: "Blog", href: "/blog", order: 3 },
    { name: "Home", href: "/home", order: 1 },
  ];
  return (
    <>
      {" "}
      <Section className={"header-mobile"}>
        <Link to={""} className="header-mobile-logo">
          <Image className="header-mobile-logo-pic" src={mobileLogo} />
        </Link>
        <Link to={""} className={"hamburger-menu"}>
          <Image className={"hamburger-menu-pic"} src={hamburger} />
        </Link>
      </Section>
      <header className={"header"}>
        <Section className={"header-top"}>
          <div className="header-top-title">
            Lifestyle and Fashion Blog Theme for Everyone!
          </div>
          <div className="header-top-link-div">
            <Image className={"header-top-link-icon"} src={iconLetter} />
            <Link
              className="header-top-link"
              to={"mailto:zoya@qodeinteractive.com"}
            >
              zoya@qodeinteractive.com
            </Link>
          </div>
        </Section>
        <Section className={"header-main"}>
          <Nav className="header-navigation" items={items} />
          <Link className="shopping-bag" to={""}>
            <Image className="shopping-bag-icon" svg={<IconBag />} />
            <span>(0)</span>
          </Link>
        </Section>
        <Section className={"header-bottom"}>
          <Search />
          <Link to={"/"}>
            <Image className={"header-logo"} src={logo} />
          </Link>

          <div className="header-bottom-icons">
            <a
              className={"header-bottom-icon"}
              href={
                "https://www.linkedin.com/company/qode-themes?_ga=2.251954831.764714972.1727255640-1795553505.1726679370"
              }
            >
              <Image className={"header-bottom-icon-img"} src={linkedin} />
            </a>
            <a
              className={"header-bottom-icon"}
              href={
                "https://x.com/QodeInteractive?_ga=2.74637844.764714972.1727255640-1795553505.1726679370"
              }
            >
              <Image className={"header-bottom-icon-img"} src={twitter} />
            </a>
            <a
              className={"header-bottom-icon"}
              href={
                "https://www.facebook.com/QodeInteractive?_ga=2.74637844.764714972.1727255640-1795553505.1726679370"
              }
            >
              <Image className={"header-bottom-icon-img"} src={facebook} />
            </a>
            <a
              className={"header-bottom-icon"}
              href={
                "https://www.instagram.com/QodeInteractive/?_ga=2.74637844.764714972.1727255640-1795553505.1726679370"
              }
            >
              <Image className={"header-bottom-icon-img"} src={instagram} />
            </a>
            <a
              className={"header-bottom-icon"}
              href={"https://www.behance.net/qodeinteractive"}
            >
              <Image className={"header-bottom-icon-img"} src={behance} />
            </a>
            <a
              className={"header-bottom-icon"}
              href={
                "https://vimeo.com/?_ga=2.80014097.764714972.1727255640-1795553505.1726679370"
              }
            >
              <Image className={"header-bottom-icon-img"} src={vimeo} />
            </a>
            <a
              className={"header-bottom-icon"}
              href={
                "https://www.pinterest.com/qodeinteractive/?_ga=2.80014097.764714972.1727255640-1795553505.1726679370"
              }
            >
              <Image className={"header-bottom-icon-img"} src={pinterest} />
            </a>
            <a
              className={"header-bottom-icon"}
              href={
                "https://www.snapchat.com/?_ga=2.21342653.764714972.1727255640-1795553505.1726679370"
              }
            >
              <Image className={"header-bottom-icon-img"} src={snapchat} />
            </a>
          </div>
        </Section>
      </header>
    </>
  );
};
export default Header;
