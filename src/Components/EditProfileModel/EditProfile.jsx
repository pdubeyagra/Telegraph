import React, { useState, useEffect } from "react";
import "./EditProfile.css";
import { UilTimes } from "@iconscout/react-unicons";

const EditProfile = ({setModalOpened}) => {
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
        <div className="EditProfile-m">
          {/* <h3>Edit Profile</h3> */}
          <form className="Info-Profile-m"></form>
        </div>
      ) : (
        <div className="EditProfile">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ margin: "0" }}>Edit Profile</h3>
            <UilTimes onClick={()=>{setModalOpened(false)}} />
          </div>

          <form className="Info-Profile">
            <div className="Info-Profile-options first-last-name">
              <div>
                <span>First Name</span>
                <input type="text" placeholder="First Name" name="firstname" />
              </div>
              <div>
                <span>Last Name</span>
                <input type="text" placeholder="Last Name" name="lastname" />
              </div>
            </div>
            <div className="Info-Profile-options">
              <span>Email</span>
              <input
                type="email"
                placeholder="@gmail.com"
                name="emailaddress"
              />
            </div>
            <div className="">
              <span>Password</span>
              <input type="password  " placeholder="Password" name="password" />
            </div>
            <div className="Info-Profile-options ">
              <span>Password</span>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmpassword"
              />
            </div>
            <div className="Info-Profile-options verify">
              <input type="Checkbox" />
              <span>
                By clicking here, I state that I have read and understood the
                terms and conditions.
              </span>
            </div>
          </form>
          <button className="button button-save">Save</button>
        </div>
      )}
    </>
  );
};

export default EditProfile;
