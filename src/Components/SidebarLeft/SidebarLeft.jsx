import React, { useState } from "react";
import "./SidebarLeft.css";
import Profile from "../../Assets/profileImg.jpg";
import { UilBookmark } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilReact } from "@iconscout/react-unicons";
import { UilArrowCircleDown } from "@iconscout/react-unicons";
// import { UilDraggabledots } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { UilTimes } from "@iconscout/react-unicons";

const SidebarLeft = ({ sidebarClosed }) => {
  const [followers, setFollowers] = useState(false)
  return (
    <div className="SidebarLeft">
      <div className="Sidebar-header">
        <div>
          <Link to="/Profile" className="Link-profile-img">
            <img src={Profile} alt="" />
          </Link>
          {/* <UilDraggabledots /> */}
          <UilTimes
            onClick={() => {
              sidebarClosed(false);
            }}
          />
        </div>
        <div>
          <span>
            <b>Pradyumn Dubey</b>
          </span>
          <span style={{ fontSize: "10px" }}>@pradyumnSpeaks</span>
        </div>
        <div>
          <span>
            <b>86</b> Following
          </span>
          <span>
          {/* {followers && <FollowersCard />} */}
            <b onClick={()=> {setFollowers(!followers)}}>34</b> Followers
          </span>
        </div>
      </div>
      <hr style={{ width: "100%" }}></hr>
      <div className="Sidebar-list">
        <ul>
          <li>
            <Link
              to="/Profile"
              style={{
                textDecoration: "none",
                display: "flex",
                gap: "1rem",
                color: "black",
              }}
            >
              <UilUser />
              Profile
            </Link>
          </li>
          <li>
            <UilReact />
            Premium
          </li>
          <li>
            <UilBookmark />
            Bookmarks
          </li>
        </ul>
        <hr style={{ width: "100%" }}></hr>
      </div>
      <div className="Sidebar-dropdowns">
        <ul>
          <li>
            Professional Tools
            <div>
              <UilArrowCircleDown />
              {/* <ul className="second-bropdown">
                <li>Ads</li>
              </ul> */}
            </div>
          </li>
          <li>
            Settings & Support
            <div>
              <UilArrowCircleDown />
              {/* <ul className="second-bropdown">
              <li>Settings and Privacy</li>
              <li>Help Center</li>
            </ul> */}
            </div>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/" className="logout">
          <span>Log Out</span>
        </Link>
      </div>
    </div>
  );
};

export default SidebarLeft;
