import React, { useState, useEffect } from "react";
import "./Chat.css";
import Navbar from "../../Components/Navbar/Navbar";
import ChatLeft from "../../Components/ChatLeft/ChatLeft";
import ChatRight from "../../Components/ChatRight/ChatRight";

const Chat = () => {
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

  // async function getData() {
  //   let a = await fetch('http://hn.algolia.com/api/v1/search?query=html');
  //   let data = await a.json();
  //   console.log(data)
  // }
  // useEffect(() => {
  //   getData();
  // }, [])
  
  return (
    <div className="Chat">
      {isMobile ? (
        <div className="Chat-m"></div>
      ) : (
        <div className="Chat-d">
          <Navbar />
          <div className="Chat-body-d">
            <ChatLeft />
            <ChatRight />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
