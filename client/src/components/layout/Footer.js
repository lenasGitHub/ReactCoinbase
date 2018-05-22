import React, { Component } from "react";
import { Link } from "react-router-dom";
import Aux from "../../hoc/Aux/Aux";
class Footer extends Component {
  render() {
    return (
      <Aux>
        <div className="hvLrBO bTBDKY clear">
          <div className="gACRnh FnsEJ">
            <div className="gTHKWe">
              <Link to="/" className="hzaXlf">
                <span>Home</span>
              </Link>
              <a href="/careers" className="hzaXlf">
                <span>Careers</span>
              </a>
              <a href="/legal/user_agreement" className="hzaXlf">
                <span>Legal &amp; Privacy</span>
              </a>
            </div>
            <div className="dnnlxI">
              <div className="eQcTdK">© 2018 Coinbase</div>
              <a
                href="https://support.coinbase.com/"
                className="Button__container___1Nus9 Button__primary___zYyzg Button__small___nAPfO"
                target="_blank"
              >
                <span>Need Help?</span>
              </a>{" "}
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Footer;
