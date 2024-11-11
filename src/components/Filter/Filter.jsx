import "./filter.scss";
import PriceRangeSlider from "../../components/PriceRangeSlider/PriceRangeSlider";
const Filter = () => {
  return (
    <div className="filter-div">
      <h2>Filter by price</h2>
      <PriceRangeSlider min={20} max={450} step={10} label={"Price"} />
      <button className="filter-button">Filter</button>
    </div>
  );
};
export default Filter;
