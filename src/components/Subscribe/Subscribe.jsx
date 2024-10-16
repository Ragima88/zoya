import SubscribeInput from "../SubscribeInput/SubscribeInput";
import "./subscribe.scss";
const Subscribe = () => {
  return (
    <div className="subscribe">
      <h2>Subscribe to Newsletter</h2>
      <p>Receive news via email</p>
      <SubscribeInput className={"subscribe-input white"} />
    </div>
  );
};
export default Subscribe;
