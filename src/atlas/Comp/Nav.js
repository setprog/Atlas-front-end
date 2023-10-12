
import { Link } from "react-router-dom";
import Dashboard from './dashboard.png';

function Nav() {
  return (
    <div className="sidebar">
    <span className="acc-in">
      <img id="acc-img" src={Dashboard} />
      <p id="acc-p">
        <Link to="/dash">Dashboard</Link>
      </p>
    </span>
    <span className="acc-in">
      <img id="acc-img" src={Dashboard} />
      <p id="acc-p">
        <Link to="/user">Sub-Admin</Link>
      </p>
    </span>
    <span className="acc-in">
      <img id="acc-img" src={Dashboard} />
      <p id="acc-p">
        <Link to="/renter">Renter</Link>
      </p>
    </span>
    <span className="acc-in">
      <img id="acc-img" src={Dashboard} />
      <p id="acc-p">
        <Link to="/Owner">Owner</Link>
      </p>
    </span>
    </div>
  
  );
}

export default Nav;
