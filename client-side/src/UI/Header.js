import React, { useContext } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import LInkdeinLogo from "../assets/LinkedIn_logo_initials.png";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { SearchPopup } from "../PopUps/popupexport";
import HeaderOption from "./HeaderOption";
import { logout } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { UiContext } from "../DistributableContext";
const Header = () => {
  const dispatch = useDispatch();
  const [showsearchPop, setshowsearchPop] = React.useState(false);
  const toggleBorder = (e) => {
    [...document.querySelectorAll(".headerOption")].forEach((item) => {
      item.style.borderBottom = "none";
      item.style.color = "gray";
    });
    e.target.style.borderBottom = "2px solid black";
    e.target.style.color = "black";
  };
  const showBorder = (e) => {
    toggleBorder(e);
    console.log(e.target);
  };
  const logoutHandler = async (e) => {
    toggleBorder(e);
    dispatch(logout());
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={LInkdeinLogo} alt="Linkedin Logo" />

        <div className="header__search">
          <SearchIcon />
          <input
            onClick={() => setshowsearchPop((prev) => !prev)}
            type="text"
            placeholder="Search"
          />
          {showsearchPop ? <SearchPopup /> : null}
        </div>
      </div>

      <div className="header__right">
        <HeaderOption onClick={showBorder} Icon={HomeIcon} title="Home" />
        <HeaderOption
          onClick={showBorder}
          Icon={SupervisorAccountIcon}
          title="My Network"
        />
        <HeaderOption
          onClick={showBorder}
          Icon={BusinessCenterIcon}
          title="Jobs"
        />
        <HeaderOption onClick={showBorder} Icon={ChatIcon} title="Messaging" />
        <HeaderOption
          onClick={showBorder}
          Icon={NotificationsIcon}
          title="Notifications"
        />
        <HeaderOption title="Me" onClick={logoutHandler} avatar={true} />
      </div>
    </div>
  );
};

export default Header;
