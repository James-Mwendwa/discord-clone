import "./Chat.css";
import ChatHeader from "./ChatHeader";
import Message from './Message';


import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import GifBoxRoundedIcon from "@mui/icons-material/GifBoxRounded";
import EmojiEmotionsRoundedIcon from "@mui/icons-material/EmojiEmotionsRounded";

const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />

      <div className="chat-messages">
        <Message />
        <Message />
        <Message />
      </div>

      <div className="chat-input">
        <AddCircleOutlineRoundedIcon fontSize="large" />

        <form>
          <input placeholder={"Message #TEST CHANNEL"} />
          <button className="chat-inputButton" type="submit">
            Send Message
          </button>
        </form>
        <div className="chat-inputIcons">
          <CardGiftcardRoundedIcon />
          <EmojiEmotionsRoundedIcon />
          <GifBoxRoundedIcon />
        </div>
      </div>
    </div>
  );
};

export default Chat;
