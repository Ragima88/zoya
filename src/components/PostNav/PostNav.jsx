import "./post-nav.scss";
const PostNav = ({ title, desc }) => {
  return (
    <>
      <span className="post-nav-title">{title}</span>
      <span className="post-nav-desc">{desc}</span>
    </>
  );
};
export default PostNav;
