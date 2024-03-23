import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../Assets/logo.png";
import ProfileImg from "../../Assets/profileImg.jpg";
import { UilSearch } from "@iconscout/react-unicons";
import ProfileRHeader from "../Profile-r-Header/ProfileRHeader";
import SidebarLeft from "../SidebarLeft/SidebarLeft";
import Notification from "../../Assets/Notification.svg";
import { Link } from "react-router-dom";


const Navbar = ({ menuOpened, setMenuOpened }) => {
  const [windowDimension, setWindowDimension] = useState(false);
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
    <div className="NavBar">
      {isMobile ? (
        <div className="Navbar-m">
          <div>
            <img
              src={ProfileImg}
              alt=""
              className="NavbarImg-m"
              onClick={() => {
                setMenuOpened(true);
              }}
            />
          </div>
          {menuOpened && <SidebarLeft sidebarClosed={setMenuOpened} />}
          {/* < UilTimes className= /> */}
          <div className="Search Search-m ">
            <input type="text" placeholder="#Explore" />
            <div className="s-icon">
              <UilSearch />
            </div>
          </div>
          <div>
            <img src={Notification} alt="" className="Navbar-notification" />
          </div>
        </div>
      ) : (
        <div className="Navbar">
          <div>
            <Link to="/Home" className="Link-logo-d">
              <div>
                <img src={Logo} alt="" className="ProfileNavImg" />
                <h3>TeleGraph</h3>
              </div>
            </Link>
          </div>

          <div>
            <div className="Search">
              <input type="text" placeholder="#Explore" />
              <div className="s-icon">
                <UilSearch />
              </div>
            </div>
          </div>
          <div>
            <ProfileRHeader />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// ref={dropdownRef} onClick={closeMenu}

// home page above return

// const [submenuOpen1, setSubmenuOpen1] = useState(true); // Default value is true
//   const dropdownRef = useRef(null);
//   const closeMenu = () => {
//     setSubmenuOpen1(false);
//   };
//   const Openmenu = () => {
//     var healthLinkClicked = document.getElementById('healthLink');
//     if (healthLinkClicked) {
//       setSubmenuOpen1(true);
//     }
//   };
//   <div onClick={event => {
//     if (event.target.id == 'healthLink' || event.target.id=='secondDropdown') {
//       Openmenu();
//     }
//     else {
//       closeMenu();
//     }
//   }}>
