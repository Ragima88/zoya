import Share from "../../assets/icons/Share";
import Image from "../Image/Image";
import "./share-button.scss";
const ShareButton = () => {
  return (
    <div className="share-button">
      <Share className={"share-img"} />
      <span>Share</span>
    </div>
  );
};
export default ShareButton;
