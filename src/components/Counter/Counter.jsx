import "./counter.scss";
const Counter = ({ style = {} }) => {
  return (
    <div style={style} className="adding-to-cart-div-number">
      <span>-</span>
      <input type="text" placeholder="1" />
      <span>+</span>
    </div>
  );
};
export default Counter;
