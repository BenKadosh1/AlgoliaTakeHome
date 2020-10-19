import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { HomeTwoTone } from "@ant-design/icons";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="NavbarContainer">
        <div className="homeIcon">
          <NavLink activeClassName="active-link" to="/">
            <strong>
              <HomeTwoTone id="iconId" />
              MovieSearch
            </strong>
          </NavLink>
        </div>
        <div className="links">
          <NavLink activeClassName="active-link" to="/search">
            <strong>Search</strong>
          </NavLink>
          <NavLink activeClassName="active-link" to="/discover">
            <strong>Discover</strong>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
