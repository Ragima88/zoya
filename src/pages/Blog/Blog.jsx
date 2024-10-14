import "./blog.scss";
import Section from "../../components/Section/Section";
import BlogIn from "../../components/BlogIn/BlogIn";
import Aside from "../../components/Aside/Aside";
const Blog = () => {
  return (
    <Section className={"blog-section"}>
      <div className="blog-inner">
        <BlogIn />
      </div>
      <Aside />
    </Section>
  );
};
export default Blog;
