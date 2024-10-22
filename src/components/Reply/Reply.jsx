import BlackButton from "../BlackButton/BlackButton";
import Section from "../Section/Section";
import "./reply.scss";
const Reply = () => {
  return (
    <Section className={"reply"}>
      <h2>Leave a Reply</h2>
      <span>
        Your email address will not be published. Required fields are marked *
      </span>
      <textarea
        id="comment"
        name="comment"
        placeholder="Your Comment*"
      ></textarea>
      <div className="input-div">
        <input
          id="name"
          name="name"
          placeholder="Your Name*"
          type="text"
        ></input>
        <input
          id="email"
          name="email"
          placeholder="Your Email*"
          type="email"
        ></input>
      </div>
      <input id="url" name="url" placeholder="Website" type="text" />
      <div className="checkbox-div">
        <input id="checkbox" name="checkbox" type="checkbox" />
        <label for="checkbox">
          Save my name, email, and website in this browser for the next time I
          comment.
        </label>
      </div>
      <BlackButton name={"Post Comment"} />
    </Section>
  );
};
export default Reply;
