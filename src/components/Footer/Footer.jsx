import "./footer.scss";
import Section from "../Section/Section";
import Image from "../Image/Image";
import footerLogo from "../../assets/images/footer-logo.png";
import { Link } from "react-router-dom";
import FooterTop from "../FooterTop/FooterTop";
const Footer = () => {
  return (
    <footer className={"footer-page"}>
      <FooterTop />
      <Section className={"footer-main"}>
        <div className="footer-main-social">
          <h2>Social</h2>
          <a
            target="_blank"
            href="https://www.facebook.com/QodeInteractive?_ga=2.125732874.1000655486.1727781644-1795553505.1726679370"
          >
            Facebook
          </a>
          <a
            target="_blank"
            href="https://www.pinterest.com/qodeinteractive/?_ga=2.197504047.1000655486.1727781644-1795553505.1726679370"
          >
            Pinterest
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/QodeInteractiveVideos"
          >
            Youtube
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/QodeInteractive/?_ga=2.155077816.1000655486.1727781644-1795553505.1726679370"
          >
            Instagram
          </a>
          <a
            target="_blank"
            href="https://x.com/QodeInteractive?_ga=2.155077816.1000655486.1727781644-1795553505.1726679370"
          >
            Twitter
          </a>
        </div>
        <div className="footer-main-logo">
          <Link to={"/"}>
            <Image className="footer-main-logo-img" src={footerLogo} />
          </Link>

          <p>
            The perfect place for telling & sharing all the stories that truly
            matter.
          </p>
          <input type="email" placeholder="Subscribe..." />
        </div>
        <div className="footer-main-posts">
          <h2>Posts</h2>
          <Link to={""}>Beauty</Link>
          <Link to={""}>Entertainment</Link>
          <Link to={""}>Home Decor</Link>
          <Link to={""}>Lifestyle</Link>
          <Link to={""}>Travel</Link>
        </div>
      </Section>
      <Section className={"footer-bottom"}>
        <p>© 2021 Qode Interactive, All Rights Reserved</p>
      </Section>
    </footer>
  );
};
export default Footer;
