import Slider from "../../components/Slider/Slider";
import BlockQuote from "../../components/BlockQuote/BlockQuote";
import Section from "../../components/Section/Section";
import Aside from "../../components/Aside/Aside";
import inspirationImg from "../../assets/images/blog-img-1.jpg";
import lifestyleImg from "../../assets/images/blog-img-2.jpg";
import travelImg from "../../assets/images/blog-img-3.jpg";
import travelImg2 from "../../assets/images/blog-img-4.jpg";

import "./home.scss";
import BlogInWithButtons from "../../components/BlogInWithButtons/BlogInWithButtons";

const blogPosts = [
  {
    name: "Inspiration",
    title: "Ready for a getaway weekend",
    date: "March 1, 2021",
    author: "By Katherine Bishop",
    src: inspirationImg,
    content: `Lorem ipsum dolor sit amet, consectetu adipiscing elit. Aenean commodo
        ligula eget dolor. Cum socis Theme sed natoque ut penatibus. Etiam
        ultricies nisi vel augue. Cura bitur ullamcorper ultricies dictum felis
        eu pede sit. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
        rhoncus, sem quam semper libero, amet et adipiscing sem neque nula
        ipsum. Etiam ultricies nisi vel augue blandit vel, luctus pulvinar.
        Nullam quis ante. Etiam sit amet orci eget eros.`,
    blackButton: "Read More",
  },
  {
    name: "Lifestyle",
    title: "Best skincare routine for dry skin",
    date: "March 5, 2021",
    author: "By Katherine Bishop",
    src: lifestyleImg,
    content: `Lorem ipsum dolor sit amet, consectetu adipiscing elit. Aenean commodo
        ligula eget dolor. Cum socis Theme sed natoque ut penatibus. Etiam
        ultricies nisi vel augue. Cura bitur ullamcorper ultricies dictum felis
        eu pede sit. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
        rhoncus, sem quam semper libero, amet et adipiscing sem neque nula
        ipsum. Etiam ultricies nisi vel augue blandit vel, luctus pulvinar.
        Nullam quis ante. Etiam sit amet orci eget eros.`,
    blackButton: "Read More",
  },
  {
    name: "Travel",
    title: "Amazing dresses and gowns for prom",
    date: "March 6, 2021",
    author: "By Katherine Bishop",
    src: travelImg,
    content: `Lorem ipsum dolor sit amet, consectetu adipiscing elit. Aenean commodo
        ligula eget dolor. Cum socis Theme sed natoque ut penatibus. Etiam
        ultricies nisi vel augue. Cura bitur ullamcorper ultricies dictum felis
        eu pede sit. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
        rhoncus, sem quam semper libero, amet et adipiscing sem neque nula
        ipsum. Etiam ultricies nisi vel augue blandit vel, luctus pulvinar.
        Nullam quis ante. Etiam sit amet orci eget eros.`,
    blackButton: "Read More",
  },
  {
    name: "Travel",
    title: "Ten best recipes for a light dinner",
    date: "March 8, 2021",
    author: "By Katherine Bishop",
    src: travelImg2,
    content: `Lorem ipsum dolor sit amet, consectetu adipiscing elit. Aenean commodo
        ligula eget dolor. Cum socis Theme sed natoque ut penatibus. Etiam
        ultricies nisi vel augue. Cura bitur ullamcorper ultricies dictum felis
        eu pede sit. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
        rhoncus, sem quam semper libero, amet et adipiscing sem neque nula
        ipsum. Etiam ultricies nisi vel augue blandit vel, luctus pulvinar.
        Nullam quis ante. Etiam sit amet orci eget eros.`,
    blackButton: "Read More",
  },
];
const quotes = [
  {
    title:
      "Quality content with useful info and some of the best services I have experienced. Recommend it to all.",
    author: "by Josephina Robinson",
  },
  {
    title: "Absolutely perfect designs for true fashion lovers.",
    author: "March 8, 2021",
  },
];

const Home = () => {
  return (
    <div className="home-page">
      <Slider />
      <Section className={"blog-section"}>
        <div className="blog-inner">
          <BlogInWithButtons
            name={blogPosts[0]?.name}
            title={blogPosts[0]?.title}
            date={blogPosts[0]?.date}
            author={blogPosts[0]?.author}
            src={blogPosts[0]?.src}
            content={blogPosts[0]?.content}
            blackButton={blogPosts[0]?.blackButton}
          />
          <BlockQuote title={quotes[0]?.title} author={quotes[0]?.author} />
          <BlogInWithButtons
            name={blogPosts[1]?.name}
            title={blogPosts[1]?.title}
            date={blogPosts[1]?.date}
            author={blogPosts[1]?.author}
            src={blogPosts[1]?.src}
            content={blogPosts[1]?.content}
            blackButton={blogPosts[1]?.blackButton}
          />
          <BlogInWithButtons
            name={blogPosts[2]?.name}
            title={blogPosts[2]?.title}
            date={blogPosts[2]?.date}
            author={blogPosts[2]?.author}
            src={blogPosts[2]?.src}
            content={blogPosts[2]?.content}
            blackButton={blogPosts[2]?.blackButton}
          />
          <BlockQuote title={quotes[1]?.title} author={quotes[1]?.author} />
          <BlogInWithButtons
            name={blogPosts[3]?.name}
            title={blogPosts[3]?.title}
            date={blogPosts[3]?.date}
            author={blogPosts[3]?.author}
            src={blogPosts[3]?.src}
            content={blogPosts[3]?.content}
            blackButton={blogPosts[3]?.blackButton}
          />
        </div>
        <Aside />
      </Section>
    </div>
  );
};
export default Home;
