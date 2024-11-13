import GalleryItem from "../../components/GalleryItem/GalleryItem";
import Zoomer from "../../components/Zoomer/Zoomer";
import galleryItemPic1 from "../../assets/images/gallery-item1-pic1.jpg";
import galleryItemPic2 from "../../assets/images/gallery-item1-pic2.jpg";
import galleryItemPic3 from "../../assets/images/gallery-item1-pic3.jpg";
import Section from "../../components/Section/Section";
import AddToCart from "../../components/AddToCart/AddToCart";

import "./shop-item.scss";
import { Link } from "react-router-dom";
import Counter from "../../components/Counter/Counter";
const ShopItem = () => {
  const items = [
    { id: 1, src: galleryItemPic1 },
    { id: 2, src: galleryItemPic2 },
    { id: 3, src: galleryItemPic3 },
  ];
  return (
    <Section className={"shop-gallery-item"}>
      <div className="gallery-div">
        <div className="gallery-div-pic">
          <Zoomer />
          <div className="gallery-pic-items">
            {items.map((i) => {
              return <GalleryItem key={i.id} src={i.src} />;
            })}
          </div>
        </div>
        <div className="gallery-item-content">
          <h1>Decorative Plates</h1>
          <div className="price">$115.00</div>
          <p>
            Homero accusam principes an duo. Feugiat accusam ne per, sea erat
            ubique voluptua ut. Nostro possim scriptorem an vel, et nec error
            nobis constituam. Solet ullamcorper
          </p>
          <div className="adding-to-cart-div">
            <Counter />
            <AddToCart
              hasIcon={false}
              style={{
                position: "relative",
                width: "176px",
                height: "54px",
                fontSize: "12px",
              }}
            />
          </div>
          <div className="text-div">
            <div className="sku-div">
              <span className="text-div-name">SKU: </span>
              <span className="text-div-desc">015</span>
            </div>
            <div className="categories-div">
              <span className="text-div-name">Categories: </span>
              <Link className="text-div-desc">Inspiration</Link>
              <span>, </span>
              <Link className="text-div-desc">Lifestyle</Link>
            </div>
            <div className="tag-div">
              <span className="text-div-name">Tags: </span>
              <Link className="text-div-desc">Decor</Link>
              <span>, </span>
              <Link className="text-div-desc">Kitchen</Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default ShopItem;
