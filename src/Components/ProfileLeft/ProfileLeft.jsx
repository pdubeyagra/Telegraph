import React, { useState, useEffect } from "react";
import "./ProfileLeft.css";
import { UilPen } from "@iconscout/react-unicons";
import { SuggestionsData } from "../../Data/SuggestionsData";
import EditProfile from "../EditProfileModel/EditProfile";
import { Link } from "react-router-dom";

const ProfileLeft = () => {
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

  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      {isMobile ? (
        <div className="ProfileLeft-m"></div>
      ) : (
        <div className="ProfileLeft">
          <div className="ProfileInfo">
            <div>
              <h3>Profile Info</h3>
              <span>
                <UilPen
                  onClick={() => {
                    setModalOpened(!modalOpened);
                  }}
                  style={{ cursor: "pointer" }}
                />
                {modalOpened && (
                  <EditProfile
                    setModalOpened={setModalOpened}
                    className="EditProfileModal"
                  />
                )}
              </span>
            </div>
            <div>
              <span>Status</span>
              <span>Single</span>
            </div>
            <div>
              <span>Lives in</span>
              <span>Agra</span>
            </div>
            <div>
              <span>DOB</span>
              <span>July 6'th 2000</span>
            </div>
            <Link to='/' style={{textDecoration: "none", alignSelf: "flex-end"}}>
              <button className="button Logout-b">Log Out</button>
            </Link>
          </div>
          <h4>People You May Know</h4>
          {SuggestionsData.map((Suggestions, i) => {
            return (
              <div className="suggestions" key={i}>
                <div>
                  <img src={Suggestions.img} alt="" />
                  <div className="suggestions-name">
                    <span>{Suggestions.name}</span>
                    <span>@{Suggestions.username}</span>
                  </div>
                </div>
                <button className="button fc-button">Follow</button>
              </div>
            );
          })}
          <span>Show More</span>
        </div>
      )}
    </>
  );
};

export default ProfileLeft;
