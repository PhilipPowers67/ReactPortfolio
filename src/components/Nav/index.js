// import React from "react";
// import "./style.css";

// function Nav() {
//   return (
//     <header>
//       <nav>
//         <ul className="flex-row">
//           <li className="mx-2">
//             <a href="#about">AboutMe</a>
//           </li>
//           <li>
//             <a href="#portfolio">Portfolio</a>
//           </li>
//           <li>
//             <a href="#contact-me">ContactMe</a>
//           </li>
//           <li>
//             <a href="#resume">Resume</a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Nav;

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
          <a href="/contact" id="contact" className="menu-item">
            Contact
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
