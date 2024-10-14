import Slider from "../../components/Slider/Slider";
import Blog from "../Blog/Blog";
import "./home.scss";
const Home = () => {
  return (
    <div className="home-page">
      <Slider />
      <Blog />
    </div>
  );
};
export default Home;
