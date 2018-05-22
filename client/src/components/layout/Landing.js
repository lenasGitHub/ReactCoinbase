import React, { Component } from "react";

import Portfolio from "./subLanding/Portfolio";
import Backdrop from "./subLanding/Backdrop";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="homepage cOPwHe">
          <div class="Hero__CTA">
            <h1 class="Hero__Title">Buy and sell digital currency</h1>
            <p class="Hero__Subtitle">
              Coinbase is the easiest and most trusted place to buy, sell, and
              manage your digital currency.
            </p>
          </div>
        </div>
        <Portfolio />
        <Backdrop />
      </div>
    );
  }
}

export default Landing;
