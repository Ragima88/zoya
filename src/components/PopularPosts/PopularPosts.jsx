import "./popular-posts.scss";
import PopularPost from "../PopularPost/PopularPost";
import { useEffect, useState } from "react";
import axios from "axios";

const PopularPosts = () => {
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/popular-posts");
      console.log("Fetched data:", data);
      setPosts(data);
      return data;
    } catch (error) {
      console.error("Axios error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="popular-posts">
      <h2>Popular Posts</h2>
      <div className="popular-posts-div">
        {posts.map((i) => {
          return (
            <PopularPost key={i.id} src={i.src} date={i.date} title={i.title} />
          );
        })}
      </div>
    </div>
  );
};
export default PopularPosts;
