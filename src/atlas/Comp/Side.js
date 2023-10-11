import React from "react";
import Nav from "./Nav";
import Home from "./Home";

function Side() {
  return (
    <>
      <div>
        <div className="gr"></div>

        <div className="grid-con">
          <div className="box box0">
            <h3 id="dash">Dashboard</h3>
          </div>
        </div>
        <div className="grid-conatianer">
          <div className="box box1 ">
            <div className="grid-con">
              <div className="grid-conatianer">
                <Nav/>
              </div>
            </div>
          </div>
          
          <div className="box box3"></div>
          <div className="box box4"></div>
          <div className="box box5"></div>
          <div className="box box6"></div>
          <div className="box box7"></div>
          <div className="box box9"></div>
          <div className="box box8"></div>
          <div className="box box8"></div>
        </div>
      </div>
    </>
  );
}

export default Side;
