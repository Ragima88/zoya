import "./block-quote.scss";

const SquareContent = ({ title, date, author }) => {
  return (
    <blockquote className={"block-quote"}>
      <h2>{title}</h2>
      <span>{author ? author : date}</span>
    </blockquote>
  );
};
export default SquareContent;
