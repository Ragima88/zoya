import "./cart.scss";
import Section from "../Section/Section";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import { useEffect, useState } from "react";
import axios from "axios";
const Cart = () => {
  const [item, setItem] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/cart-items");
      console.log("Fetched data:", data);
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
    <>
      <Section className={"cart-title"}>
        <Link className="home-link" to={""}>
          Home
        </Link>
        <span className="line-span"></span>
        <span>Cart</span>
      </Section>
      <Section className={"cart-content"}>
        <div className="cart-content-titles">
          <div className="close-up-div"></div>
          <div className="img-up-div"></div>
          <div className="cart-content-title-1 cart-content-titles-name">
            Product
          </div>
          <div className="cart-content-titles-name">Price</div>
          <div className="cart-content-titles-name">Quantity</div>
          <div className="cart-content-titles-name">Subtotal</div>
        </div>
        <div className="cart-items-div">
          {item.map((i) => {
            return (
              <CartItem
                key={i.id}
                to={i.to}
                src={i.src}
                title={i.title}
                price={i.price}
                subtotal={i.subtotal}
                quantity={i.quantity}
              />
            );
          })}
        </div>
        <div className="cart-totals-div">
          <h2>Cart totals</h2>
          <div className="subtotal-div">
            <p>Subtotal</p>
            <span>$188.00</span>
          </div>
          <div className="total-div">
            <p>Total</p>
            <span>$188.00</span>
          </div>
        </div>
      </Section>
    </>
  );
};
export default Cart;
