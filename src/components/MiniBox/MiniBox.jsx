import Social from "../Social/Social";
import SubscribeInput from "../SubscribeInput/SubscribeInput";
import "./minibox.scss";
const MiniBox = ({ title, desc, type }) => {
  return (
    <div className="minibox">
      <h2>{title}</h2>
      <p>{desc}</p>
      {type === "subscribe" ? (
        <SubscribeInput className={"subscribe-input white"} />
      ) : (
        ""
      )}
      {type === "social" ? <Social /> : ""}
    </div>
  );
};
export default MiniBox;
