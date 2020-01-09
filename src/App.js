import React from 'react';
import { Route, Redirect, Switch } from "react-router";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import PrivateRoute from './utils/PrivateRoute';
import { loginUser, setJokes } from './actions';
import JokeList from './components/JokeList'
import "./App.css";

//import components
import FormikAccountForm from './components/user/CreateAccount'
import FormikLoginForm from './components/user/Login'
import Footer from "./components/Footer"
import LandingPage from './components/LandingPage';
import CreateLoginHeader from "./components/CreateLoginHeader";
import CreateAccount from './components/user/CreateAccount';
import Login from './components/user/Login';

function App() {
  return (
    <div className="App">
      <CreateLoginHeader />
      <Switch>
        <Route exact path="/" render={props => <LandingPage {...props} />} />
        <Route path="/home" component={JokeList} />
        <Route path="/" component={CreateAccount}/>
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
