import "./popular-posts.scss";
import popularPostImg1 from "../../assets/images/popular-post-img1.jpg";
import popularPostImg2 from "../../assets/images/popular-post-img2.jpg";
import popularPostImg3 from "../../assets/images/popular-post-img3.jpg";
import PopularPost from "../PopularPost/PopularPost";

const PopularPosts = () => {
  const posts = [
    {
      id: 1,
      src: popularPostImg1,
      date: "February 1, 2021",
      title: "Earrings girls love to wear all the time",
    },
    {
      id: 2,
      src: popularPostImg2,
      date: "January 14, 2021",
      title: "Trends we are loving this spring",
    },
    {
      id: 3,
      src: popularPostImg3,
      date: "December 1, 2020",
      title: "Ten amazing tips for a beautiful smile",
    },
  ];
  return (
    <div className="popular-posts">
      {posts.map((i) => {
        return (
          <PopularPost key={i.id} src={i.src} date={i.date} title={i.title} />
        );
      })}
    </div>
  );
};
export default PopularPosts;
