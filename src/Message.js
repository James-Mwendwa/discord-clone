import "./Message.css";
import Avatar from "@mui/material/Avatar";

const Message = () => {
  return (
    <div className="message">
      <Avatar />

      <div className="message-info">
        <h4>
          King James
          <span className="message-timestamp">this is a timestamp</span>
        </h4>

        <p>This is a message</p>
      </div>
    </div>
  );
};

export default Message;
