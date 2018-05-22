import React, { Component } from "react";
import {
  Route,
  Switch,
  withRouter,
  Redirect,
  BrowserRouter,
  Link
} from "react-router-dom";
import Aux from "../../hoc/Aux/Aux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import BackDrop from "../UI/backdrop/Backdrop";

import Logo from "../../img/Bitcoin-Logo-White.png";
class Navbar extends Component {
  state = {
    showTggoleMenu: false,
    showModal: false
  };
  toggleDropdownMenu = () => {
    const doseShow = this.state.showTggoleMenu;
    this.setState({ showTggoleMenu: !doseShow, showModal: true });
  };
  closeModalHandler = () => {
    this.setState({ showModal: false, showTggoleMenu: false });
  };
  settingsShow = () => {
    this.setState({ showTggoleMenu: false, showModal: false });
    this.props.history.push("/user-profile");
  };
  onLogoutClick(e) {
    e.preventDefault();
    this.setState({ showTggoleMenu: false, showModal: false });
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    let DropdownMenu = null;
    if (this.state.showTggoleMenu) {
      DropdownMenu = (
        <div className="DropdownMenu__Wrapper">
          <div className="DropdownMenu__Dropdown">
            <div className="DropdownMenu__Header">
              <img
                className="Avatar__AvatarImage"
                src={user.avatar}
                alt={user.name}
                style={{ width: "60px", marginRight: "5px" }}
                title="You must have a Gravatar connected to your email to display an image"
              />

              <div className="DropdownMenu__Name">{user.name}</div>
              <div className="DropdownMenu__Email">{user.email}</div>
            </div>
            <div className="DropdownMenu__Separator" />
            <div
              className="DropdownMenu__DropdownLink"
              onClick={this.settingsShow}
            >
              <div className="DropdownMenu__Title">Settings</div>
            </div>
            <div className="DropdownMenu__Separator" />
            <div className="DropdownMenu__DropdownLink">
              <div className="DropdownMenu__Title">Contact support</div>
            </div>
            <div className="DropdownMenu__Separator" />
            <div className="DropdownMenu__DropdownLink">
              <div
                className="DropdownMenu__Title"
                onClick={this.onLogoutClick.bind(this)}
              >
                Sign out
              </div>
            </div>
          </div>
        </div>
      );
    }

    const authLinks = (
      <Aux>
        <div className="Header__Dropdown" onClick={this.toggleDropdownMenu}>
          <div className="Header__DropdownButton">
            <img
              className="Avatar__AvatarImage"
              src={user.avatar}
              alt={user.name}
              style={{ width: "34px", marginRight: "5px" }}
              title="You must have a Gravatar connected to your email to display an image"
            />
            <div className="Header__Username">{user.name}</div>
            <i className="fas fa-angle-down" />
          </div>
        </div>
        {DropdownMenu}
      </Aux>
    );
    const guestLinks = (
      <div className="DesktopNavigation__SideContainer_coinbase">
        <div className="DesktopNavigation__NavItem_coinbase">
          <Link className="DesktopNavigation__LinkStyle" to="/login">
            Log in
          </Link>
        </div>
        <span className="DesktopNavigation__SignupButton">
          <Link to="/register" className="DesktopNavigation__LinkStyle">
            Registration
          </Link>
        </span>
      </div>
    );
    return (
      <div className="Header__Navbar_coinbase">
        <div className="Header__Wrapper_coinbase">
          <div className="DesktopNavigation__CenterContainer_coinbase">
            <div className="DesktopNavigation__LeftSideContainer">
              <Link to="/">
                <img src={Logo} />
              </Link>
            </div>
            {/* <div class="DesktopNavigation__NavItem">
              <a class="DesktopNavigation__LinkStyle" href="">
                Charts
              </a>
              <a class="DesktopNavigation__LinkStyle" href="">
                Charts
              </a>
              <a class="DesktopNavigation__LinkStyle" href="">
                Charts
              </a>
            </div> */}
          </div>

          {isAuthenticated ? authLinks : guestLinks}
        </div>
        <BackDrop
          show={this.state.showModal}
          clicked={this.closeModalHandler}
        />
      </div>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
