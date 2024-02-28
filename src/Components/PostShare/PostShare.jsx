import React, { useState, useRef, useEffect } from "react";
import "./PostShare.css";
import ProfileImg from "../../Assets/profileImg.jpg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
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

  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <>
      {isMobile ? (
        <div className="PostShare-m">
          <div>
            <img src={ProfileImg} alt="" />
            <input type="text" placeholder="What's happening?" />
          </div>
          <div>
          <div className="postOptions-m">
            <div
              className="Options-m"
              style={{ color: "var(--photo)" }}
              onClick={() => imageRef.current.click()}
            >
              <UilScenery /> Photo{" "}
            </div>
            <div
              className="Options-m"
              style={{ color: "var(--video)" }}
              onClick={() => imageRef.current.click()}
            >
              <UilPlayCircle /> Video{" "}
            </div>
            <div
              className="Options-m"
              style={{ color: "var(--location)" }}
            >
              <UilLocationPoint /> Location{" "}
            </div>
            <div
              className="Options-m"
              style={{ color: "var(--shedule)" }}
            >
              <UilSchedule /> Schedule{" "}
            </div>
            <button className=" button-m button-ps-m">Share</button>
            <div style={{ display: "none" }}>
              <input
                type="file"
                name="myImage"
                ref={imageRef}
                onChange={onImageChange}
              />
            </div>
          </div>
          {image && (
            <div className="previewImage-m">
              <UilTimes onClick={() => setImage(null)} />
              <img src={image.image} alt="" />
            </div>
          )}
          </div>
        </div>
      ) : (
        <div className="PostShare">
          <img src={ProfileImg} alt="" />
          <div>
            <input type="text" placeholder="What's happening?" />
            <div className="postOptions">
              <div
                className="Option"
                style={{ color: "var(--photo)" }}
                onClick={() => imageRef.current.click()}
              >
                <UilScenery /> Photo{" "}
              </div>
              <div
                className="Option"
                style={{ color: "var(--video)" }}
                onClick={() => imageRef.current.click()}
              >
                <UilPlayCircle /> Video{" "}
              </div>
              <div className="Option" style={{ color: "var(--location)" }}>
                <UilLocationPoint /> Location{" "}
              </div>
              <div className="Option" style={{ color: "var(--shedule)" }}>
                <UilSchedule /> Schedule{" "}
              </div>
              <button className="button ps-button">Share</button>
              <div style={{ display: "none" }}>
                <input
                  type="file"
                  name="myImage"
                  ref={imageRef}
                  onChange={onImageChange}
                />
              </div>
            </div>
            {image && (
              <div className="previewImage">
                <UilTimes onClick={() => setImage(null)} />
                <img src={image.image} alt="" />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PostShare;
