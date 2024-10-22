import "./blog.scss";
import BlockQuote from "../../components/BlockQuote/BlockQuote";
import Section from "../../components/Section/Section";
import BlogIn from "../../components/BlogIn/BlogIn";
import Aside from "../../components/Aside/Aside";
import inspirationImg from "../../assets/images/blog-img-1.jpg";
import lifestyleImg from "../../assets/images/blog-img-2.jpg";
import travelImg from "../../assets/images/blog-img-3.jpg";
import travelImg2 from "../../assets/images/blog-img-4.jpg";
import BlackButton from "../../components/BlackButton/BlackButton";
import ShareButton from "../../components/ShareButton/ShareButton";

const Blog = () => {
  return (
    <Section className={"blog-section"}>
      <div className="blog-inner">
        <div className="blog-in-div">
          <BlogIn
            name={"Inspiration"}
            title={"Ready for a getaway weekend"}
            date={"March 1, 2021"}
            author={"By Katherine Bishop"}
            src={inspirationImg}
            content={`Lorem ipsum dolor sit amet, consectetu adipiscing elit. Aenean commodo
        ligula eget dolor. Cum socis Theme sed natoque ut penatibus. Etiam
        ultricies nisi vel augue. Cura bitur ullamcorper ultricies dictum felis
        eu pede sit. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
        rhoncus, sem quam semper libero, amet et adipiscing sem neque nula
        ipsum. Etiam ultricies nisi vel augue blandit vel, luctus pulvinar.
        Nullam quis ante. Etiam sit amet orci eget eros.`}
          />
          <div className="button-div">
            <BlackButton name={"Read More"} />
            <ShareButton />
          </div>
        </div>

        <BlockQuote
          title={
            "Quality content with useful info and some of the best services I have experienced. Recommend it to all."
          }
          author={"by Josephina Robinson"}
        />
        <div className="blog-in-div">
          <BlogIn
            name={"Lifestyle"}
            title={"Best skincare routine for dry skin"}
            date={"March 5, 2021"}
            author={"By Katherine Bishop"}
            src={lifestyleImg}
            content="Lorem ipsum dolor sit amet, consectetu adipiscing elit. Aenean commodo ligula eget dolor. Cum socis Theme sed natoque ut penatibus. Etiam ultricies nisi vel augue. Cura bitur ullamcorper ultricies dictum felis eu pede sit. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, amet et adipiscing sem neque nula ipsum. Etiam ultricies nisi vel augue blandit vel, luctus pulvinar. Nullam quis ante. Etiam sit amet orci eget eros."
          />
          <div className="button-div">
            <BlackButton name={"Read More"} />
            <ShareButton />
          </div>
        </div>
        <div className="blog-in-div">
          <BlogIn
            name={"Travel"}
            title={"Amazing dresses and gowns for prom"}
            date={"March 6, 2021"}
            author={"By Katherine Bishop"}
            src={travelImg}
            content="Lorem ipsum dolor sit amet, consectetu adipiscing elit. Aenean commodo ligula eget dolor. Cum socis Theme sed natoque ut penatibus. Etiam ultricies nisi vel augue. Cura bitur ullamcorper ultricies dictum felis eu pede sit. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, amet et adipiscing sem neque nula ipsum. Etiam ultricies nisi vel augue blandit vel, luctus pulvinar. Nullam quis ante. Etiam sit amet orci eget eros."
          />
          <div className="button-div">
            <BlackButton name={"Read More"} />
            <ShareButton />
          </div>
        </div>

        <BlockQuote
          title={"Absolutely perfect designs for true fashion lovers."}
          author={"March 8, 2021"}
        />
        <div className="blog-in-div">
          <BlogIn
            name={"Travel"}
            title={"Ten best recipes for a light dinner"}
            date={"March 8, 2021"}
            author={"By Katherine Bishop"}
            src={travelImg2}
            content="Lorem ipsum dolor sit amet, consectetu adipiscing elit. Aenean commodo ligula eget dolor. Cum socis Theme sed natoque ut penatibus. Etiam ultricies nisi vel augue. Cura bitur ullamcorper ultricies dictum felis eu pede sit. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, amet et adipiscing sem neque nula ipsum. Etiam ultricies nisi vel augue blandit vel, luctus pulvinar. Nullam quis ante. Etiam sit amet orci eget eros."
          />
          <div className="button-div">
            <BlackButton name={"Read More"} />
            <ShareButton />
          </div>
        </div>
      </div>
      <Aside />
    </Section>
  );
};
export default Blog;
