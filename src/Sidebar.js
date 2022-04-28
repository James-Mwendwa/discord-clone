import './Sidebar.css';

import SidebarChannel from "./SidebarChannel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import { Avatar } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h3>React Developer</h3>
        <KeyboardArrowDownIcon />
      </div>

      <div className="sidebar-channels">
        <div className="sidebar-channelsHeader">
          <div className="sidebar-header">
            <KeyboardArrowDownIcon />
            <h4>Text Channels</h4>
          </div>

          <AddIcon className="sidebar-addChannel" />
        </div>

        <div className="sidebar-channelList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>

      <div className="sidebar-voice">
        <SignalCellularAltIcon className="sidebar-voiceIcon" fontSize="large" />

        <div className="sidebar-voiceInfo">
          <h3>Voice Connected</h3>
          <p>stream</p>
        </div>

        <div className="sidebar-voiceIcons">
          <InfoOutlinedIcon />
          <PhoneIcon />
        </div>
      </div>

      <div className="sidebar-profile">
        <Avatar src="https://images.pexels.com/photos/7918293/pexels-photo-7918293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />

        <div className="sidebar-profileInfo">
          <h3>#King James</h3>
          <p>#thisIsMyId</p>
        </div>

        <div className="sidebar-profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
