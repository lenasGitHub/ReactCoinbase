import React, { Component } from "react";
import TopImg from "../../../img/atlassian wave adg30524.png";
class Backdrop extends Component {
  render() {
    return (
      <div>
        <img src={TopImg} />
        <div className="Backdrop">
          <div class="Stats__Backdrop-s1wls80i-0 ">
            <div class="StaticLayout__Section-o8qdo1-0 ebjFbn Flex-kFpfAw dcUsdS">
              <div class="Stats__Wrapper-s1wls80i-1 ghecXv Flex-kFpfAw AFbMF">
                <div class="Stats__Stat-s1wls80i-2 FDXcd">
                  <h1 class="Stats__Number-s1wls80i-3 dzXclC">$150B+</h1>
                  <div class="Stats__Description-s1wls80i-4 jtKMkF">
                    Digital currency exchanged
                  </div>
                </div>
                <div class="Stats__Stat-s1wls80i-2 FDXcd">
                  <h1 class="Stats__Number-s1wls80i-3 dzXclC">32</h1>
                  <div class="Stats__Description-s1wls80i-4 jtKMkF">
                    Countries supported
                  </div>
                </div>
                <div class="Stats__Stat-s1wls80i-2 FDXcd">
                  <h1 class="Stats__Number-s1wls80i-3 dzXclC">20M+</h1>
                  <div class="Stats__Description-s1wls80i-4 jtKMkF">
                    Customers served
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Backdrop;
