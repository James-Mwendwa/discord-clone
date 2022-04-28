import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import GifBoxRoundedIcon from "@mui/icons-material/GifBoxRounded";
import EmojiEmotionsRoundedIcon from "@mui/icons-material/EmojiEmotionsRounded";

const Chat = () => {
  return (
    <div className="chat">
     <h2>Lets Chat</h2>
     <ChatHeader />
    </div>
  );
};

export default Chat;
