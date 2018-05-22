import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import PrivateRoute from "../common/PrivateRoute";
import Aux from "../../hoc/Aux/Aux";
import NavigationItems from "./navbar/navigationItems/NavigationItems";
import Settings from "./layout/settingLayout/Settings";
import UserProfile from "./layout/settingLayout/userProfile/UserProfile";

const Dashboard = props => (
  <Aux>
    <NavigationItems />
    <main className="Content">
      {/* {props.children} */}
      <Route path="/settings" component={Settings} />
      <Route path="/user-profile" component={UserProfile} />
    </main>
  </Aux>
);

export default Dashboard;
