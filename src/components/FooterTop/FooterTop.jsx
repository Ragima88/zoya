import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./footer-top.scss";
import Image from "../Image/Image";

const FooterTop = () => {
  const [list, setList] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/list");
      console.log("Fetched data:", data);
      setList(data);
      return data;
    } catch (error) {
      console.error("Axios error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={"footer-top"}>
      {list.map((item) => {
        return (
          <Link key={item.id} className="footer-img-item" to={item.to}>
            <Image className={"footer-img"} src={item.image} />
          </Link>
        );
      })}
    </div>
  );
};
export default FooterTop;
