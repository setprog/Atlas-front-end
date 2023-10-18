import React, {useState} from "react";
import Sidebar from "./Sidebar";
import Report from "./Report";
import Table from "./Table";
import owner2 from "./owner2.png";
import owners from "./owners.png"
import gmail from "./gmail.png";
import Nav from "./Nav";
import './Home.css'

function Home() {
  

  return (
    <div className="borderRed">
      <div className="gr"></div>

      <div className="grid-con">
        <div className="box box0">
          <h3 id="dash">Dashboard</h3>
        </div>
      </div>
      <div className="grid-conatianer">
        <div className="box box2">
          <Sidebar
            names="Total Owner"
            num="50"
            image={owners}
            foot="Today-"
            foot1="This Month-"
          />
        </div>
        <div className="box box3">
          <Sidebar
            names="Total User"
            num="30"
            image={owner2}
            foot="Today-"
            foot1="This Month-"
          />
        </div>
        <div className="box box4">
          <Sidebar
            names="Total List"
            num="100"
            image={owner2}
            foot="Today-"
            foot1="This Month-"
          />
        </div>
        <div className="box box5">
          <Report img={gmail} nums="65%" />
        </div>
        <div className="box box6">
          <Report img={gmail} nums="65%" />
        </div>
        <div className="box box7">
          {" "}
          <Report img={gmail} nums="65%" />{" "}
        </div>
        <div className="box box9">
          <p id="recently">Recent Bookings</p>
        </div>

        <div className="box box10">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Home;
