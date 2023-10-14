import React from "react";
import Sidebar from "./Sidebar";
import Report from "./Report";
import Table from "./Table";
import owner2  from './owner2.png'
import gmail from './gmail.png'
import Nav from "./Nav"



function Home() {
  return (
    <div>
      
      <div className="gr">
        <Nav  />
      </div>

      <div className="grid-con">
        <div className="boxb box0b">
          <h3 id="dash">Dashboard</h3>
        </div>
      </div>
      <div className="grid-conatianer">
        <div className="boxb box2b">
        <Sidebar
                names="Total Owner"
                num="50"
                image={owner2}
                foot="Today-"
                foot1="This Month-"
              />
        </div>
        <div className="boxb box3b">
        <Sidebar
                names="Total User"
                num="30"
                image={owner2}
                foot="Today-"
                foot1="This Month-"
              />
        </div>
        <div className="boxb box4b" id="bo">
        <Sidebar
                names="Total List"
                num="100"
                image={owner2}
                foot="Today-"
                foot1="This Month-"
              />
        </div>
        <div className="boxb box5b">
        <Report
              img={gmail}
              nums="65%"

        />
        </div>
        <div className="boxb box6b">
        <Report
              img={gmail}
              nums="65%"

        />
        </div>
        <div className="boxb box7b" id="bo"> <Report
              img={gmail}
              nums="65%"

        /> </div>
        <div className="boxb box9b"><p id="recently">Recent Bookings</p></div>
        <div className="boxb box8b"><Table/></div>
      
      </div>
    </div>
  );
}

export default Home;
