import React from "react";
import { stack as Menu } from "react-burger-menu";
import githubIcon from "../../../src/assets/cover/GitHub-Mark.png";
import linkedInIcon from "../../../src/assets/cover/Linked-In.png";

class Nav extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Menu noOverlay>
        <a href="/" id="home" className="menu-item">
          Home
        </a>
        <br />
        <a href="/about" id="about" className="menu-item">
          About
        </a>
        <br />
        <a href="/portfolio" id="portfolio" className="menu-item">
          Portfolio
        </a>
        <br />
        <h3 className="contact"></h3>
        <br />
                <h5 className="container number">Phone:</h5>
        <h6 className="container">(860)336-9657</h6>
        <h5 className="container email">Email:</h5>
        <h6 className="contianer">phil.powers6793@gmail.com</h6>
        <br/>
        <div className="container">
        <a
          href="https://www.linkedin.com/in/philippowers93"
          className="icons"
        >
          <img alt="LinkedIn" src={linkedInIcon} />
        </a>
        <br />
        <a href="https://github.com/PhilipPowers67" className="icons">
          <img src={githubIcon} alt="GitHub-Icon" />
        </a>
        </div>
        <br />


        <a onClick={this.showSettings} className="menu-item--small" href=""></a>
      </Menu>
    );
  }
}

export default Nav;
