import React from "react";
import { stack as Menu } from "react-burger-menu";



class Nav extends React.Component {
    showSettings(event) {
      event.preventDefault();
    }
    render() {
      return (
        <Menu noOverlay>
          <a href="/about" id="about" className="menu-item">
            About
          </a>
          <br/>
          <a href="/portfolio" id="portfolio" className="menu-item">
            Portfolio
          </a>
          <br/>
          <a
            onClick={this.showSettings}
            className="menu-item--small"
            href=""
          ></a>
        </Menu>
      );
    }
  }


export default Nav;
