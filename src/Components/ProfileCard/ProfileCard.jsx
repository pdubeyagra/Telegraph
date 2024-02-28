import React, { useState, useEffect } from "react";
import "./ProfileCard.css";
import Cover from "../../Assets/cover.png";
import Profile from "../../Assets/profileImg.jpg";
import {Link} from 'react-router-dom'

const ProfileCard = () => {
  const [windowDimension, setWindowDimension] = useState(null);
  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 768;

  return (
    <>
      {isMobile ? (
        <div className="ProfileCard-m"></div>
      ) : (
        <div className="ProfileCard">
          <div className="ProfileImages">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
          </div>

          <div className="ProfileName">
            <span>Pradyumn Dubey</span>
            <span> UI Developer</span>
          </div>

          <div className="followStatus">
            <hr />
            <div>
              <div className="follow">
                <span>186</span>
                <span>Followings</span>
              </div>
              <div className="vl"></div>
              <div className="follow">
                <span>243</span>
                <span>Followers</span>
              </div>
            </div>
            <hr />
          </div>
          <Link to='/Profile' className="Link-p">
          <span>My Profile</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default ProfileCard;
