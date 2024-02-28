import React, { useState, useEffect } from "react";
import "./Auth.css";
import Logo from "../../Assets/logo.png";
import { useDispatch } from "react-redux";
import { logIn, signUp } from "../../Actions/AuthAction/AuthAction";
import { Link } from "react-router-dom";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpassword: "",
  });
  const [confirmPassword, setConfirmPassword] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpassword
        ? dispatch(signUp(data))
        : setConfirmPassword(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    setConfirmPassword(true);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpassword: "",
    });
  };

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
        <div className="Auth-m">
          <div className="Auth-m-left">
            <img src={Logo} alt="" />
            <div className="Webname-m">
              <h1>TeleGraph</h1>
              <h6>See World Through Our Eyes</h6>
            </div>
          </div>

          <div className="Auth-m-right">
            <form
              action=""
              className="info-m-Form Auth-m-form"
              onSubmit={handleSubmit}
            >
              <h3>{isSignUp ? "Sign up" : "Log In"}</h3>
              {isSignUp && (
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="info-m-Input"
                    name="firstname"
                    onChange={handleChange}
                    value={data.firstname}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="info-m-Input"
                    name="lastname"
                    onChange={handleChange}
                    value={data.lastname}
                  />
                </div>
              )}
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="info-m-Input"
                  name="username"
                  onChange={handleChange}
                  value={data.username}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="info-m-Input"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                />
                {isSignUp && (
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="info-m-Input"
                    name="confirmpassword"
                    onChange={handleChange}
                    value={data.confirmpassword}
                  />
                )}
              </div>
              <span
                style={{
                  display: confirmPassword ? "none" : "block",
                  color: "red",
                  fontSize: "9px",
                  alignSelf: "flex-end",
                  marginRight: "5px",
                }}
              >
                * Confirm Password is not same
              </span>
              <div>
                <span
                  className="signin-login-change"
                  style={{ fontSize: "9px", cursor: "pointer" }}
                  onClick={() => {
                    setIsSignUp((prev) => !prev);
                    resetForm();
                  }}
                >
                  {isSignUp
                    ? "Already have an account. Login!"
                    : "If you do not have account. Signup!"}
                </span>
              </div>
              <Link to="/Home" className="Link-hm">
                <button className="button info-button" type="Submit">
                  {isSignUp ? "Signup" : "Log In"}
                </button>
              </Link>
            </form>
          </div>
        </div>
      ) : (
        <div className="Auth">
          <div className="Auth-left">
            <img src={Logo} alt="" />
            <div className="Webname">
              <h1>TeleGraph</h1>
              <h6>See World Through Our Eyes</h6>
            </div>
          </div>

          <div className="Auth-right">
            <form
              action=""
              className="infoForm Auth-form"
              onSubmit={handleSubmit}
            >
              <h3>{isSignUp ? "Sign up" : "Log In"}</h3>
              {isSignUp && (
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="infoInput"
                    name="firstname"
                    onChange={handleChange}
                    value={data.firstname}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="infoInput"
                    name="lastname"
                    onChange={handleChange}
                    value={data.lastname}
                  />
                </div>
              )}
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="infoInput"
                  name="username"
                  onChange={handleChange}
                  value={data.username}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="infoInput"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                />
                {isSignUp && (
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="infoInput"
                    name="confirmpassword"
                    onChange={handleChange}
                    value={data.confirmpassword}
                  />
                )}
              </div>
              <span
                style={{
                  display: confirmPassword ? "none" : "block",
                  color: "red",
                  fontSize: "12px",
                  alignSelf: "flex-end",
                  marginRight: "5px",
                }}
              >
                * Confirm Password is not same
              </span>
              <div>
                <span
                  style={{ fontSize: "12px", cursor: "pointer" }}
                  onClick={() => {
                    setIsSignUp((prev) => !prev);
                    resetForm();
                  }}
                >
                  {isSignUp
                    ? "Already have an account. Login!"
                    : "If you do not have account. Signup!"}
                </span>
              </div>
              <Link to="/Home" className="Link-h">
                <button className="button info-button" type="Submit">
                  {isSignUp ? "Signup" : "Log In"}
                </button>
              </Link>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;
