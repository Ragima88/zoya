import "./top-products.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import TopProductsItem from "./TopProductsItem/TopProductsItem";
const TopProducts = () => {
  const [item, setItem] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/top-products-item"
      );
      console.log("Fetched top products:", data);
      setItem(data);
      return data;
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="top-products">
      <h2>Top Products</h2>
      {item.map((i) => (
        <TopProductsItem
          key={i.id}
          src={i.src}
          to={i.to}
          title={i.title}
          amount={i.amount}
        />
      ))}
    </div>
  );
};
export default TopProducts;
