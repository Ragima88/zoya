import Section from "../../components/Section/Section";
import "./listing.scss";
import { Link } from "react-router-dom";
import ListingItem from "../../components/ListingItem/ListingItem";
import MiniBox from "../../components/MiniBox/MiniBox";
import Categories from "../../components/Categories/Categories";
import PopularPosts from "../../components/PopularPosts/PopularPosts";
import { useEffect, useState } from "react";
import axios from "axios";

const Listing = () => {
  const [items, setItems] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/items");
      console.log("Fetched data:", data);
      setItems(data);
      return data;
    } catch (error) {
      console.error("Axios error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Section className={"title"}>
        <Link className="home-link" to={""}>
          Home
        </Link>
        <span className="line-span"></span>
        <span>Beauty</span>
      </Section>
      <Section className={"listing"}>
        <div className="listing-list">
          {items.map((i) => {
            return (
              <ListingItem
                key={i.id}
                src={i.src}
                name={i.name}
                title={i.title}
                date={i.date}
              />
            );
          })}
        </div>
        <aside className="listing-aside">
          <MiniBox
            title={"Search"}
            desc={"Type here & press enter"}
            type={"subscribe"}
            placeholder={"Search"}
            variant={"search"}
          />
          <Categories title={"Archive"} />
          <PopularPosts />
        </aside>
      </Section>
    </>
  );
};
export default Listing;
