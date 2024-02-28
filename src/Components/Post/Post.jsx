import React, { useState, useEffect } from "react";
import "./Post.css";
import { PostsData } from "../../Data/PostsData";
import Like from "../../Assets/like.png";
import NotLike from "../../Assets/notlike.png";
import Share from "../../Assets/share.png";
import Comment from "../../Assets/comment.png";
// import {UilSave} from '@iconscout/react-unicons'

const Post = () => {
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
    <>
      {isMobile ? (
        <div className="Posts-m">
          {PostsData.map((Posts, p) => {
            return (
              <div className="Post-m" key={p}>
                <img src={Posts.img} alt="" />
                <div className="postReact-m">
                  <img src={Posts.liked ? Like : NotLike} alt="" />
                  <img src={Comment} alt="" />
                  <img src={Share} alt="" />
                  {/* <UilSave /> */}
                </div>
                <div>
                  <span>{Posts.likes} likes</span>
                </div>
                <div className="detail-m">
                  <span>{Posts.name}</span>
                  <span>{Posts.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="Posts">
          {PostsData.map((Posts, p) => {
            return (
              <div className="Post" key={p}>
                <img src={Posts.img} alt="" />
                <div className="postReact">
                  <img src={Posts.liked ? Like : NotLike} alt="" />
                  <img src={Comment} alt="" />
                  <img src={Share} alt="" />
                </div>
                <div>
                  <span>{Posts.likes} likes</span>
                </div>
                <div className="detail">
                  <span>{Posts.name}</span>
                  <span>{Posts.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Post;
