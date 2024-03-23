import React, { useState } from "react";
import "./ProfileRHeader.css";
import Home from "../../Assets/home.png";
import Notification from "../../Assets/noti.png";
import Comment from "../../Assets/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import Notifications from '../../Components/Notification/Notification'

const ProfileRHeader = () => {
  const [notificationOpened, setNotificationOpened] = useState(false)
  return (
    <div className="Profile-r-header">
      <div className="header-r header-home">
        <Link to="/Home"  className="Link-c">
          <img src={Home} alt="" />
        </Link>
      </div>

      <Link to="/Setting">
        <div className="header-r">
          <UilSetting />
        </div>
      </Link>
      <div className="header-r">
        <img src={Notification} alt="" onClick={()=> {setNotificationOpened(!notificationOpened)}} />
        {notificationOpened && <Notifications />}
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
