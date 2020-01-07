import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "../App.css";

function CreateLoginHeader(props) {
  return (
    <header className="landing-page-header">
      <div className="landing-login-buttons">
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
      <div className="help-button"><span>?</span></div>
    </header>
  );
}

export default CreateLoginHeader;