import "./subscribe-input.scss";
const SubscribeInput = ({ className, placeholder, variant }) => {
  return (
    <>
      <div className={`subscribe-input ${className} ${variant}`}>
        <input type="text" placeholder={placeholder} />
      </div>
    </>
  );
};
export default SubscribeInput;
