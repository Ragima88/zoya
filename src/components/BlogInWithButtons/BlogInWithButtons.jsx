import BlogIn from "../../components/BlogIn/BlogIn";
import BlackButton from "../../components/BlackButton/BlackButton";
import ShareButton from "../../components/ShareButton/ShareButton";

const BlogInWithButtons = ({
  name,
  title,
  date,
  author,
  src,
  content,
  blackButton,
}) => {
  return (
    <div className="blog-in-div">
      <BlogIn
        name={name}
        title={title}
        date={date}
        author={author}
        src={src}
        content={content}
      />
      <div className="button-div">
        <BlackButton name={blackButton} />
        <ShareButton />
      </div>
    </div>
  );
};

export default BlogInWithButtons;
