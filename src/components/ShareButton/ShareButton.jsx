import Share from "../../assets/icons/Share";
import Social from "../Social/Social";
import "./share-button.scss";
const ShareButton = () => {
  return (
    <div className="share-widget">
      <div className={"share-button"}>
        <Share className={"share-img"} />
        <span>Share</span>
      </div>
      <Social share={true} />
    </div>
  );
};
export default ShareButton;
