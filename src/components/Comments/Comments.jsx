import "./comments.scss";
import CommentsItem from "./CommentsItem";
import commentImg1 from "../../assets/images/comment-img1.jpg";
import commentImg2 from "../../assets/images/comment-img2.jpg";
import commentImg3 from "../../assets/images/comment-img3.jpg";
const Comments = () => {
  const list = [
    {
      id: 1,
      src: commentImg1,
      date: "April 7, 2021",
      name: "Nicole Cunningham",
      comment:
        "Aenean sollicitudin, lorem auci elit consequat ipsutissem niuis sed odio sit amet vulputate cursus nibh a sit amet ullamcorper. Curabitur ultricies nisi. Nam eget dui.",
    },
    {
      id: 2,
      src: commentImg2,
      date: "April 7, 2021",
      name: "Madison Burton",
      comment:
        "Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sollicitudin, lorem auci elit consequat ipsutissem niuis sed odio sit amet vulputate cursus nibh a sit amet ullamcorper. Curabitur ultricies nisi. Nam eget dui.",
    },
    {
      id: 3,
      src: commentImg3,
      date: "April 7, 2021",
      name: "Linda Ford",
      comment:
        "Lorem auci elit odio sit amet vulputate cursus nibh a sit amet ullamcorper. Curabitur ultricies nisi. Nam eget dui.",
    },
  ];
  return (
    <div className="comments">
      <h2>Comments</h2>
      <ul className="comments-list">
        {list.map((item) => {
          return (
            <CommentsItem
              key={item.id}
              src={item.src}
              date={item.date}
              name={item.name}
              comment={item.comment}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Comments;
