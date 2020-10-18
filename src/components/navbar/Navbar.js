import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeTwoTone,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import "./Navbar.css";
import { Button, Menu } from "antd";
import MediaQuery from "react-responsive";
const { SubMenu } = Menu;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  toggleCollapsed = () => {
    const { collapsed } = this.state;
    console.log(collapsed);
    this.setState({
      collapsed: !collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;

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
        <MediaQuery minDeviceWidth={1200}>
          <div className="links">
            <NavLink activeClassName="active-link" to="/search">
              <strong>Search</strong>
            </NavLink>
            <NavLink activeClassName="active-link" to="/discover">
              <strong>Discover</strong>
            </NavLink>
          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={812}>
          <div className="links">
            <Menu mode="horizontal" className="mobileMenu">
              <SubMenu
                icon={
                  <Button size="small" onClick={this.toggleCollapsed}>
                    {collapsed && (
                      <MenuUnfoldOutlined style={{ marginRight: "0px" }} />
                    )}
                    {!collapsed && (
                      <MenuFoldOutlined style={{ marginRight: "0px" }} />
                    )}
                  </Button>
                }
                className="mobileSub"
                style={{ borderBottom: "0px", marginTop: "0px", top: "0px" }}
              >
                <Menu.Item key="setting:0">
                  <NavLink activeClassName="active-link" to="/search">
                    <strong>Search</strong>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="setting:1">
                  <NavLink activeClassName="active-link" to="/discover">
                    <strong>Discover</strong>
                  </NavLink>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Navbar;
