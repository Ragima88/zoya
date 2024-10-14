import Image from "../Image/Image";
import search from "../../assets/icons/icon-search.svg";
import "./search.scss";
const Search = () => {
  return (
    <div className="search">
      <Image className={"search-icon"} src={search} />
      <input className="search-input" type="search" placeholder="Search" />
    </div>
  );
};
export default Search;
