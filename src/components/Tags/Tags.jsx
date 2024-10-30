import Tag from "../Tag/Tag";
import "./tags.scss";
import { useEffect, useState } from "react";
import axios from "axios";
const Tags = () => {
  const [tags, setTags] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/tags");
      console.log("Fetched data:", data);
      setTags(data);
      return data;
    } catch (error) {
      console.error("Axios error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="tags-div">
      <h2>Tags</h2>
      <div className="tags">
        {tags.map((i) => {
          return <Tag key={i.id} src={i.src} name={i.name} />;
        })}
      </div>
    </div>
  );
};
export default Tags;
