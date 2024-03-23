import React, { useState, useEffect } from "react";
import "./App.css";
import Auth from "./Pages/Auth/Auth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Chat from "./Pages/Chat/Chat";
import { Routes, Route } from "react-router-dom";
import Setting from "./Components/Setting/Setting";
import Notification from "./Components/Notification/Notification";

function App() {
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
    <div className="App">
      {isMobile ? (
        <div className="App-m">
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Profile" element={<Dashboard />}></Route>
            <Route path="/Chat" element={<Chat />}></Route>
          </Routes>
        </div>
      ) : (
        <div className="App-D">
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Profile" element={<Dashboard />}></Route>
            <Route path="/Chat" element={<Chat />}></Route>
            <Route path="/Setting" element={ <Setting /> }></Route>
            <Route path="/Notifications" element={ <Notification/> }></Route>
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
