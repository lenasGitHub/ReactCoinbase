import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter
} from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/common/PrivateRoute";

import { setCurrentUser, logoutUser } from "./actions/authActions";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Settings from "./components/dashboard/layout/settingLayout/Settings";
import UserProfile from "./components/dashboard/layout/settingLayout/userProfile/UserProfile";
import "./App.css";
// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    //store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {/* <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch> */}
            <Switch>
              <PrivateRoute component={Dashboard}>
                <PrivateRoute path="/settings" component={Settings} />
                <PrivateRoute path="/user-profile" component={UserProfile} />
              </PrivateRoute>
            </Switch>
            {/* <Route path="/settings" component={Settings} /> */}
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
