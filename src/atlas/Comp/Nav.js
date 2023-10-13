import React from "react";
import { Link } from "react-router-dom";
import Dashboard from './dashboard.png'

function Nav() {
  return (
    <div className="sidebar">
    <span className="acc-in">
      <img id="acc-img" src={Dashboard} />
      <p id="acc-p">
        <Link to="/">Dashboard</Link>
      </p>
    </span>
    <span className="acc-in">
      <img id="acc-img" src={subadmin} />
      <p id="acc-p">
        <Link to="/about">Sub-Admin</Link>
      </p>
    </span>
    <span className="acc-in">
      <img id="acc-img" src={user} />
      <p id="acc-p">
        <Link to="/renter">Renter</Link>
      </p>
    </span>
    <span className="acc-in">
      <img id="acc-img" src={owner} />
      <p id="acc-p">
        <Link to="/Owner">Owner</Link>
      </p>
    </span>
    <span className="acc-in">
      <img id="acc-img" src={category} />
      <p id="acc-p">
        <Link to="/Category">Category</Link>
      </p>
    </span>
  </div>
  
  );
}

export default Nav;
