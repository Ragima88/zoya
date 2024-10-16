import "./categories.scss";
import Category from "./Category/Category";
const Categories = ({ title }) => {
  const category = [
    {
      id: 1,
      name: "Beauty",
      src: "",
    },
    {
      id: 2,
      name: "Entertainment",
      src: "",
    },
    {
      id: 3,
      name: "Home Decor",
      src: "",
    },
    {
      id: 4,
      name: "Inspiration",
      src: "",
    },
    {
      id: 5,
      name: "Interior",
      src: "",
    },
    {
      id: 6,
      name: "Lifestyle",
      src: "",
    },
    {
      id: 7,
      name: "Travel",
      src: "",
    },
  ];
  const archive = [
    {
      id: 1,
      name: "April 2021",
      src: "",
    },
    {
      id: 2,
      name: "March 2021",
      src: "",
    },
    {
      id: 3,
      name: "February 2021",
      src: "",
    },
    {
      id: 4,
      name: "January 2021",
      src: "",
    },
    {
      id: 5,
      name: "December 2020",
      src: "",
    },
    {
      id: 6,
      name: "November 2020",
      src: "",
    },
    {
      id: 7,
      name: "October 2020",
      src: "",
    },
    {
      id: 8,
      name: "August 2020",
      src: "",
    },
    {
      id: 9,
      name: "July 2020",
      src: "",
    },
    {
      id: 10,
      name: "March 2020",
      src: "",
    },
    {
      id: 11,
      name: "December 2019",
      src: "",
    },
    {
      id: 12,
      name: "November 2019",
      src: "",
    },
    {
      id: 13,
      name: "October 2019",
      src: "",
    },
    {
      id: 14,
      name: "September 2019",
      src: "",
    },
    {
      id: 15,
      name: "August 2019",
      src: "",
    },
  ];
  return (
    <div className="categories">
      <h2>{title}</h2>
      {title === "Archive"
        ? archive.map((i) => {
            return <Category key={i.id} src={i.src} name={i.name} />;
          })
        : ""}
      {title === "Category"
        ? category.map((i) => {
            return <Category key={i.id} src={i.src} name={i.name} />;
          })
        : ""}
    </div>
  );
};
export default Categories;
