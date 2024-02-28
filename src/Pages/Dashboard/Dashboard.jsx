import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import './Dashboard.css'
import HomeRight from '../../Components/HomeRight/HomeRight'
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft'
import ProfileCenter from "../../Components/ProfileCenter/ProfileCenter";

const Dashboard = () => {
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
    <div className="Dashboard">
      {isMobile ? (
        <div className="Dashbooard-m">
          <ProfileCenter />
        </div>
      ) : (
        <div className="Dashboard-d">
            <Navbar />
            <div className="ProfilePage-d">
              <ProfileLeft />
              <ProfileCenter />
              <HomeRight />
            </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
