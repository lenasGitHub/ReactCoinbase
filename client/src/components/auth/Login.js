import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes, { element } from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../UI/input/TextFieldGroup";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="sign_in_page">
        <div className="container" id="page">
          <div className="session">
            <h2 className="header">Sign in to Coinbase</h2>
            <div className="account-form">
              <div className="form">
                <form onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="Email Address"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <TextFieldGroup
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                  />
                  <div class="control-group">
                    <div class="controls clearfix">
                      <input
                        type="submit"
                        name="commit"
                        value="Sign In"
                        className="btn btn-primary pull-right"
                        id="signin_button"
                        tabindex="4"
                        data-disable-with="Signing in..."
                      />
                    </div>
                  </div>
                </form>{" "}
              </div>
            </div>
            <div className="account-extras">
              <p>
                <a href="/password_resets/new">Forgot password?</a>
                <Link to="/register">Don't have an account?</Link>
                <a href="/legal/privacy">Privacy Policy</a>
                <br />
              </p>
              <p>
                <a
                  href="https://support.coinbase.com/customer/en/portal/articles/2488794-troubleshooting-2-factor-authentication"
                  target="_blank"
                >
                  Have an issue with 2-factor authentication?
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
