import Social from "../Social/Social";
import SubscribeInput from "../SubscribeInput/SubscribeInput";
import "./minibox.scss";
const MiniBox = ({ title, desc, type, placeholder, variant }) => {
  return (
    <div className="minibox">
      <h2>{title}</h2>
      <p>{desc}</p>
      {type === "subscribe" ? (
        <SubscribeInput
          placeholder={placeholder}
          className={"white"}
          variant={variant}
        />
      ) : (
        ""
      )}
      {type === "social" ? <Social /> : ""}
    </div>
  );
};
export default MiniBox;
