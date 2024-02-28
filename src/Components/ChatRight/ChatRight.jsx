import React from "react";
import "./ChatRight.css";
import img1 from "../../Assets/img1.jpg";

const ChatRight = () => {
  return (
    <div className="ChatRight">
      <div>
        <img src={img1} alt="" className="Chatimg" />
        <span><h4>Shelendra Tomar</h4></span>
      </div>
      {/* <hr style={{ width: "100%" }} /> */}
      <div>
        <input type="text" placeholder="Message..." />
        <div>
          <button className="button button-send">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatRight;
