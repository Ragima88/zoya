import Section from "../Section/Section";
import Image from "../Image/Image";
import Search from "../Search/Search";
import logo from "../../assets/images/logo-header.png";
import IconLetter from "../../assets/icons/IconLetter";
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

const Header = () => {
  const items = [
    { name: "Landing", href: "/landing", order: 5 },
    { name: "Pages", href: "/pages", order: 2 },
    { name: "Shop", href: "/shop", order: 4 },
    { name: "Blog", href: "/blog", order: 3 },
    { name: "Home", href: "/home", order: 1 },
  ];
  return (
    <header className={"header"}>
      <Section className={"header-top"}>
        <div className="header-top-title">
          Lifestyle and Fashion Blog Theme for Everyone!
        </div>
        <div className="header-top-link-div">
          <Image className={"header-top-link-icon"} svg={<IconLetter />} />
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
        <Image className={"header-logo"} src={logo} />
        <div className="header-bottom-icons">
          <Link
            className={"header-bottom-icon"}
            to={
              "https://www.linkedin.com/company/qode-themes?_ga=2.251954831.764714972.1727255640-1795553505.1726679370"
            }
          >
            <Image className={"header-bottom-icon-img"} src={linkedin} />
          </Link>
          <Link
            className={"header-bottom-icon"}
            to={
              "https://x.com/QodeInteractive?_ga=2.74637844.764714972.1727255640-1795553505.1726679370"
            }
          >
            <Image className={"header-bottom-icon-img"} src={twitter} />
          </Link>
          <Link
            className={"header-bottom-icon"}
            to={
              "https://www.facebook.com/QodeInteractive?_ga=2.74637844.764714972.1727255640-1795553505.1726679370"
            }
          >
            <Image className={"header-bottom-icon-img"} src={facebook} />
          </Link>
          <Link
            className={"header-bottom-icon"}
            to={
              "https://www.instagram.com/QodeInteractive/?_ga=2.74637844.764714972.1727255640-1795553505.1726679370"
            }
          >
            <Image className={"header-bottom-icon-img"} src={instagram} />
          </Link>
          <Link
            className={"header-bottom-icon"}
            to={"https://www.behance.net/qodeinteractive"}
          >
            <Image className={"header-bottom-icon-img"} src={behance} />
          </Link>
          <Link
            className={"header-bottom-icon"}
            to={
              "https://vimeo.com/?_ga=2.80014097.764714972.1727255640-1795553505.1726679370"
            }
          >
            <Image className={"header-bottom-icon-img"} src={vimeo} />
          </Link>
          <Link
            className={"header-bottom-icon"}
            to={
              "https://www.pinterest.com/qodeinteractive/?_ga=2.80014097.764714972.1727255640-1795553505.1726679370"
            }
          >
            <Image className={"header-bottom-icon-img"} src={pinterest} />
          </Link>
          <Link
            className={"header-bottom-icon"}
            to={
              "https://www.snapchat.com/?_ga=2.21342653.764714972.1727255640-1795553505.1726679370"
            }
          >
            <Image className={"header-bottom-icon-img"} src={snapchat} />
          </Link>
        </div>
      </Section>
    </header>
  );
};
export default Header;
