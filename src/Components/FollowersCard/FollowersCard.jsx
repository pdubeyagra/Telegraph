import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../Data/FollwersData";

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Who is Following You</h3>
      {Followers.map((followers, Id) => {
        return (
          <div className="followers" key={Id}>
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

export default FollowersCard;
