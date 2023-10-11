import React from "react";
import { Link } from "react-router-dom";
import Dashboard from './dashboard.png'

function Nav() {
  return (
   <div >
    <span className="acc-in">
    <img id="acc-img" src={Dashboard} />
     <Link to="/">Dashboard</Link>
     </span>
        <Link to="/about">Sub-Admin</Link>
        <Link to="/renter">Renter</Link>
        <Link to="/Owner">Owner</Link>
   </div>
  
  );
}

export default Nav;
