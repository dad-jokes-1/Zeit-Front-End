import React from 'react';
import { Route, Redirect, Switch } from "react-router";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import PrivateRoute from './utils/PrivateRoute';
import { loginUser, setJokes } from './actions';
import "./App.css";

//import components
import FormikAccountForm from './components/user/CreateAccount'
import FormikLoginForm from './components/user/Login'
import Footer from "./components/Footer"
import LandingPage from './components/LandingPage';
import CreateLoginHeader from "./components/CreateLoginHeader";

function App() {
  return (
    <div className="App">
      <CreateLoginHeader />
      <Switch>
        <Route exact path="/" render={props => <LandingPage {...props} />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
