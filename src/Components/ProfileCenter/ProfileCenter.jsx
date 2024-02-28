import React, { useState, useEffect } from "react";
import "./ProfileCenter.css";
import Cover from "../../Assets/cover.png";
import ProfileImg from "../../Assets/profileImg.jpg";
import PostShare from "../PostShare/PostShare";
import Post from "../Post/Post";

const ProfileCenter = () => {
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
        <div className="ProfileCenter-m">
          <div className="ProfileCover-m">
            <img src={Cover} alt="" />
          </div>
          <div className="ProfileImage-m">
            <img src={ProfileImg} alt="" />
            <span>Edit Profile</span>
          </div>
          <div className="ProfileName-m">
            <span>Pradyumn Dubey</span>
            <span>@PradyumnSpeaks</span>
          </div>
          <div>
          <div>
            <span><b>Posts</b></span>
            <span>Media</span>
            <span>Likes</span>
          </div>
          <hr style={{width: "100%", margin: "0"}} />
          </div>
          <Post />
        </div>
      ) : (
        <div className="ProfileCenter">
          <div className="ProfileCenterHeader">
            <div>
              <img src={Cover} alt="" />
              <button className="button button-cover">Edit Cover</button>
              <div className="Profile-name">
                <h3>Pradyumn Dubey</h3>
                <span>( UI Developer )</span>
              </div>
            </div>
            <div>
              <img src={ProfileImg} alt="" className="ProfileImgCenter" />
              <div className="ProfileImgHeadings">
                <span>Timeline</span>
                <span>Media</span>
                <span>Likes</span>
              </div>
            </div>
          </div>
          <PostShare />
          <Post />
        </div>
      )}
    </>
  );
};

export default ProfileCenter;
