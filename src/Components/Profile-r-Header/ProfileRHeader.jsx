import React from "react";
import "./ProfileRHeader.css";
import Home from "../../Assets/home.png";
import Notification from "../../Assets/noti.png";
import Comment from "../../Assets/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const ProfileRHeader = () => {
  return (
    <div className="Profile-r-header">
      <div className="header-r">
        <img src={Home} alt="" />
      </div>
      <div className="header-r">
        <UilSetting />
      </div>
      <div className="header-r">
        <img src={Notification} alt="" />
      </div>
      <div className="header-r">
        <Link to="/Chat" className="Link-c">
          <img src={Comment} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default ProfileRHeader;
