import Tag from "../Tag/Tag";
import "./tags.scss";
const Tags = () => {
  const tag = [
    {
      id: 1,
      name: "adventure",
      src: "",
    },
    {
      id: 2,
      name: "art",
      src: "",
    },
    {
      id: 3,
      name: "beauty",
      src: "",
    },
    {
      id: 4,
      name: "blog",
      src: "",
    },
    {
      id: 5,
      name: "contour",
      src: "",
    },
    {
      id: 6,
      name: "decor",
      src: "",
    },
    {
      id: 7,
      name: "design",
      src: "",
    },
    {
      id: 8,
      name: "diy",
      src: "",
    },
    {
      id: 9,
      name: "eyeshadow",
      src: "",
    },
    {
      id: 10,
      name: "fashion",
      src: "",
    },
    {
      id: 11,
      name: "food",
      src: "",
    },
    {
      id: 12,
      name: "health",
      src: "",
    },
    {
      id: 13,
      name: "hedonism",
      src: "",
    },
    {
      id: 14,
      name: "home",
      src: "",
    },
    {
      id: 15,
      name: "inspiration",
      src: "",
    },
    {
      id: 16,
      name: "lunch",
      src: "",
    },
    {
      id: 17,
      name: "magazine",
      src: "",
    },
    {
      id: 18,
      name: "makeup",
      src: "",
    },
    {
      id: 19,
      name: "perfume",
      src: "",
    },
    {
      id: 20,
      name: "roadtrip",
      src: "",
    },
    {
      id: 21,
      name: "style",
      src: "",
    },
    {
      id: 22,
      name: "travel",
      src: "",
    },
  ];
  return (
    <div className="tags-div">
      <h2>Tags</h2>
      <div className="tags">
        {tag.map((i) => {
          return <Tag key={i.id} src={i.src} name={i.name} />;
        })}
      </div>
    </div>
  );
};
export default Tags;
