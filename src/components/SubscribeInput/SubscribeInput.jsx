import "./subscribe-input.scss";
const SubscribeInput = ({ className }) => {
  return (
    <>
      <div className={`subscribe-input ${className}`}>
        <input type="email" placeholder="Subscribe..." />
      </div>
    </>
  );
};
export default SubscribeInput;
