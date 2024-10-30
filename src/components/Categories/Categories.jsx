import "./categories.scss";
import Category from "./Category/Category";
import { useEffect, useState } from "react";
import axios from "axios";
const Categories = ({ title }) => {
  const [category, setCategory] = useState([]);
  const [archive, setArchive] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/category");
      console.log("Fetched data:", data);
      setCategory(data);
      return data;
    } catch (error) {
      console.error("Axios error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData2 = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/archive");
      console.log("Fetched data:", data);
      setArchive(data);
      return data;
    } catch (error) {
      console.error("Axios error:", error);
    }
  };
  useEffect(() => {
    fetchData2();
  }, []);

  return (
    <div className="categories">
      <h2>{title}</h2>
      {title === "Archive"
        ? archive.map((i) => {
            return <Category key={i.id} src={i.src} name={i.name} />;
          })
        : ""}
      {title === "Categories"
        ? category.map((i) => {
            return <Category key={i.id} src={i.src} name={i.name} />;
          })
        : ""}
    </div>
  );
};
export default Categories;
