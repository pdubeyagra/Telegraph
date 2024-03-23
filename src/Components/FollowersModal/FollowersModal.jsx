import React from "react";
import './FollowersModal.css'
import {Followers} from "../../Data/FollowersData";

const FollowersModal = () => {
  return (
    <div className="FollowersModal">
      <h3>Suggestions</h3>
      {Followers.map((followers, f) => {
        return (
          <div className="morefollowers" key={ f }>
            <div>
              <img src={followers.img} alt="" className="followerImg" />
              <div className="name">
                <span>{followers.name}</span>
                <span>@{followers.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follows</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersModal;
