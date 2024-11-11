import "./shop.scss";
import Section from "../../components/Section/Section";
import { useEffect, useState } from "react";
import axios from "axios";
import ShopList from "./ShopList/ShopList";
import SubscribeInput from "../../components/SubscribeInput/SubscribeInput";
import Filter from "../../components/Filter/Filter";
import TopProducts from "../../components/TopProducts/TopProducts";
import Categories from "../../components/Categories/Categories";
const Shop = () => {
  const [list, setList] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/shop-list");
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
    <Section className={"shop"}>
      <div className="shop-article">
        <div className="shop-top">
          <p>Showing 1–12 of 23 results</p>

          <select id="select" name="select">
            <option value="Default sorting">Default sorting</option>
            <option value="Sort by popularity">Sort by popularity</option>
            <option value="Sort by average rating">
              Sort by average rating
            </option>
            <option value="Sort by latest">Sort by latest</option>
            <option value="Sort by price: low to high">
              Sort by price: low to high
            </option>
            <option value="Sort by price: high to low">
              Sort by price: high to low
            </option>
          </select>
        </div>
        <div className="shop-items">
          {list.map((i) => {
            return (
              <ShopList
                key={i.id}
                to={i.to}
                src={i.src}
                name={i.name}
                amount={i.amount}
              />
            );
          })}
        </div>
      </div>
      <aside className="shop-aside">
        <SubscribeInput
          className={"shop-search"}
          variant={"search"}
          placeholder={"Search"}
        />
        <Filter />
        <TopProducts />
        <Categories title={"Categories"} />
      </aside>
    </Section>
  );
};
export default Shop;
