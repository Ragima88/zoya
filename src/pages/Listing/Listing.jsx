import Section from "../../components/Section/Section";
import listingPic1 from "../../assets/images/listing-item1.jpg";
import listingPic2 from "../../assets/images/listing-item2.jpg";
import listingPic3 from "../../assets/images/listing-item3.jpg";
import listingPic4 from "../../assets/images/listing-item4.jpg";
import "./listing.scss";
import { Link } from "react-router-dom";
import ListingItem from "../../components/ListingItem/ListingItem";
import MiniBox from "../../components/MiniBox/MiniBox";
import Categories from "../../components/Categories/Categories";
import PopularPosts from "../../components/PopularPosts/PopularPosts";
const Listing = () => {
  const item = [
    {
      id: 1,
      src: listingPic1,
      name: "Beauty",
      title: "Inovative makeup ideas",
      date: "March 22, 2021",
    },
    {
      id: 2,
      src: listingPic2,
      name: "Beauty",
      title: "Amazing color palettes",
      date: "March 19, 2021",
    },
    {
      id: 3,
      src: listingPic3,
      name: "Beauty",
      title: "Beginner’s guide to luxury skincare brands",
      date: "December 30, 2020",
    },
    {
      id: 4,
      src: listingPic4,
      name: "Beauty",
      title: "Muted green interiors are the new trend",
      date: "December 12, 2020",
    },
    {
      id: 5,
      src: listingPic3,
      name: "Beauty",
      title: "Beginner’s guide to luxury skincare brands",
      date: "December 30, 2020",
    },
    {
      id: 6,
      src: listingPic4,
      name: "Beauty",
      title: "Muted green interiors are the new trend",
      date: "December 12, 2020",
    },
  ];
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
          {item.map((i) => {
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
