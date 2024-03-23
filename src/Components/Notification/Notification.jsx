import React from "react";
import "./Notifications.css";

const Notification = () => {
  return (
    <div className="Notification">
      <div>
        <h3>Notifications</h3>
      </div>
      <div className="N-sections">
        <div>All</div>
        <div>Mentions</div>
      </div>
      <hr />
      <div>
        <ul>
          <li>Profile Image is updated</li>
          <li>Jeevesh singh posted a photo</li>
          <li>shelendra tomar liked your photo</li>
          <li>sandhya dubey commented on you photo</li>
          <li>manish chandel is posted a photo</li>
        </ul>
        <ul>
            <li>jeevesh singh mentioned you in a story</li>
            <li>shelendra dubey tagged you in photo</li>
            <li>manish chandel mentioned you in comment</li>
        </ul>
      </div>
    </div>
  );
};

export default Notification;
