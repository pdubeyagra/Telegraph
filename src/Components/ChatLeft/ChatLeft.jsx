import React from "react";
import "./ChatLeft.css";
import { Chat } from "../../Data/ChatData";

const ChatLeft = () => {

  return (
    <div className="ChatLeft">
        <h3>Chats</h3>
      {Chat.map((Chat, c) => {
        return (
          <div className="Chat-l" key={c}>
            <div>
              <img src={Chat.img} alt="" />
            </div>
            <div>{Chat.name}</div>
          </div>
          // <hr style={{width: "100%", margin: "0"}} />
        );
      })}
    </div>
  );
};

export default ChatLeft;
