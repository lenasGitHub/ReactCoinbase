import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = props => (
  <div className="Navbar__LinkContainer">
    <div className="Navbar__LinkContent">
      <NavLink to={props.link} exact={props.exact} activeClassName="active">
        {props.children}
      </NavLink>
    </div>
  </div>
);

export default NavigationItem;
