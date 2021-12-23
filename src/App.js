import * as React from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import coverImage from "../src/assets/cover/cover-image.jpg";
import githubIcon from "../src/assets/cover/GitHub-Mark.png";
import linkedInIcon from "../src/assets/cover/Linked-In.png";

function App() {
  return (
    <div className="background">
      <header className="flex-row px-1">
        <h2 className="title text-center">
          <a style={{ textDecoration: "none" }} href="/">
            Philip Powers
          </a>
        </h2>
        <h3 className="text-center">Welcome to my Portfolio!</h3>
        <div class="background">
          <Nav></Nav>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </header>
      <img alt="coding" src={coverImage} />
      <div>
        <a href="https://www.linkedin.com/in/philippowers93" className="LinkedIn">
          <img alt="LinkedIn" src={linkedInIcon} />
        </a>
        <a href="https://github.com/PhilipPowers67" className="GitHub">
          <img src={githubIcon} alt="GitHub-Icon" />
        </a>
      </div>
    </div>
  );
}

export default App;
