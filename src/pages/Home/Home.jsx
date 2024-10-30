import Slider from "../../components/Slider/Slider";
import BlockQuote from "../../components/BlockQuote/BlockQuote";
import Section from "../../components/Section/Section";
import Aside from "../../components/Aside/Aside";
import inspirationImg from "../../assets/images/blog-img-1.jpg";
import lifestyleImg from "../../assets/images/blog-img-2.jpg";
import travelImg from "../../assets/images/blog-img-3.jpg";
import travelImg2 from "../../assets/images/blog-img-4.jpg";
import axios from "axios";

import "./home.scss";
import BlogInWithButtons from "../../components/BlogInWithButtons/BlogInWithButtons";
import { useEffect, useState } from "react";

const blogPostsImages = [
  {
    src: inspirationImg,
  },
  {
    src: lifestyleImg,
  },
  {
    src: travelImg,
  },
  {
    src: travelImg2,
  },
];

const Home = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [quotes, setQuotes] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/blog-posts");
      console.log("Fetched data:", data);
      setBlogPosts(data);
      return data;
    } catch (error) {
      console.error("Axios error:", error);
    }
  };
  const fetchData2 = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/quotes");
      console.log("Fetched data:", data);
      setQuotes(data);
      return data;
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData2();
  }, []);

  return (
    <div className="home-page">
      <Slider />
      <Section className={"blog-section"}>
        <div className="blog-inner">
          <BlogInWithButtons
            name={blogPosts?.[0]?.name}
            title={blogPosts?.[0]?.title}
            date={blogPosts?.[0]?.date}
            author={blogPosts?.[0]?.author}
            src={blogPostsImages?.[0]?.src}
            content={blogPosts?.[0]?.content}
            blackButton={blogPosts?.[0]?.blackButton}
          />
          <BlockQuote title={quotes?.[0]?.title} author={quotes?.[0]?.author} />
          <BlogInWithButtons
            name={blogPosts?.[1]?.name}
            title={blogPosts?.[1]?.title}
            date={blogPosts?.[1]?.date}
            author={blogPosts?.[1]?.author}
            src={blogPostsImages?.[1]?.src}
            content={blogPosts?.[1]?.content}
            blackButton={blogPosts?.[1]?.blackButton}
          />
          <BlogInWithButtons
            name={blogPosts?.[2]?.name}
            title={blogPosts?.[2]?.title}
            date={blogPosts?.[2]?.date}
            author={blogPosts?.[2]?.author}
            src={blogPostsImages?.[2]?.src}
            content={blogPosts?.[2]?.content}
            blackButton={blogPosts?.[2]?.blackButton}
          />
          <BlockQuote title={quotes?.[1]?.title} author={quotes?.[1]?.author} />
          <BlogInWithButtons
            name={blogPosts?.[3]?.name}
            title={blogPosts?.[3]?.title}
            date={blogPosts?.[3]?.date}
            author={blogPosts?.[3]?.author}
            src={blogPostsImages?.[3]?.src}
            content={blogPosts?.[3]?.content}
            blackButton={blogPosts?.[3]?.blackButton}
          />
        </div>
        <Aside />
      </Section>
    </div>
  );
};
export default Home;
