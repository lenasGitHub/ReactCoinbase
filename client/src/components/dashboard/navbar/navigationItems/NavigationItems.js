import React from "react";
import NavigationItem from "../navigationItem/NavigationItem";
import Aux from "../../../../hoc/Aux/Aux";
const NavigationItems = props => (
  <Aux>
    <div className="Navbar__Content Header__Wrapper_coinbase">
      <NavigationItem link="/" exact>
        <i className="fas fa-tachometer-alt" />
        <span className="Navbar__Title">Dashboard</span>
      </NavigationItem>
      <NavigationItem link="/buy" exact>
        <i className="fas fa-exchange-alt" />
        <span className="Navbar__Title">Buy/Sell</span>
      </NavigationItem>
      <NavigationItem link="/test" exact>
        <i className="fas fa-clone" />
        <span className="Navbar__Title">Accounts</span>
      </NavigationItem>
      <NavigationItem link="/user-profile" exact>
        <i className="fas fa-wrench" />
        <span className="Navbar__Title">Tools</span>
      </NavigationItem>
      <NavigationItem link="/settings" exact>
        <i className="fas fa-cog" />
        <span className="Navbar__Title">Settings</span>
      </NavigationItem>
    </div>
  </Aux>
);

export default NavigationItems;
