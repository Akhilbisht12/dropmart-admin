import React from "react";
import { Link } from "react-router-dom";
import "./Components.css";
import icon from "../assets/icon.png";

function Header() {
  return (
    <div className="header">
      <div className="header-div">
        <div className="header-brand flex-center">
          <div>
            <img alt="logo" className="header-logo" src={icon} />
          </div>
          <div>Dropmart Admin</div>
        </div>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/payouts">Payouts</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
