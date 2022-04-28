import "./ChatHeader.css";

import NotificationsIcon from "@mui/icons-material/Notifications";
import EditLocationRoundedIcon from "@mui/icons-material/EditLocationRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

const ChatHeader = () => {
    return (
      <div className="chatHeader">
        <div className="chatHeader-left">
          <h3>
            <span className="chatHeader-hash">#</span>Test channel name
          </h3>
        </div>

        <div className="chatHeader-right">
          <NotificationsIcon />
          <EditLocationRoundedIcon />
          <PeopleAltRoundedIcon />

          <div className="chatHeader-search">
            <input placeholder="search" />
            <SearchRoundedIcon />
          </div>

          <SendRoundedIcon />
          <HelpRoundedIcon />
        </div>
      </div>
    );
}
 
export default ChatHeader;