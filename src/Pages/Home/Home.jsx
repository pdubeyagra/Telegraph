import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Post from "../../Components/Post/Post";
import HomeCenter from "../../Components/HomeCenter/HomeCenter";
import HomeLeft from "../../Components/HomeLeft/HomeLeft";
import HomeRight from "../../Components/HomeRight/HomeRight";
import PostShare from "../../Components/PostShare/PostShare";
import chat from "../../Assets/chat.png";
import { Link } from "react-router-dom";

const Home = () => {
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
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="Home">
      {isMobile ? (
        <div className="Home-m">
          <Navbar menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
          <PostShare />
          <Post />
          <Link to="/Chat">
            <img src={chat} alt="" className="Home-chat" />
          </Link>
        </div>
      ) : (
        <div className="Home-d">
          <Navbar />
          <div className="HomePage-d">
            <HomeLeft />
            <HomeCenter />
            <HomeRight />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
