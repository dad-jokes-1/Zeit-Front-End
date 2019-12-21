import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import leftArrow from "../assets/left.svg";
import rightArrow from "../assets/right.svg";
import "../App.css";


const LandingPage = props => {
  return (
    <div className="wrapper">
      <div className="landing-page content">
        <div className="carousel">
          <img src={leftArrow} className="left-button" alt="left-arrow" />
          <div className="landing-page joke">
            <h2 className="landing-page joke-setup">
              What concert costs just 45 cents?
            </h2>
            <h2 className="landing-page joke-delivery">
              50 Cent featuring Nickelback!
            </h2>
          </div>
          <img src={rightArrow} className="right-button" alt="right-arrow" />
        </div>
        <div className="landing-page container">
          <p className="landing-page tagline">
            Dad jokes app
          </p>
          <span>
            <Button
              className="button1"
              onClick={e => {
                e.preventDefault();
                props.history.push("/signup");
              }}
            >
              Create an Account
            </Button>
          </span>
          <span>
            <Button
              className="button1"
              onClick={e => {
                e.preventDefault();
                props.history.push("/home");
              }}
            >
              Continue As Guest
            </Button>
          </span>
          <span className="loginlabel">
            Already have an account?{" "}
            <Link className="loginlink" to="/login">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;