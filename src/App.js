import * as React from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio"
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import coverImage from "../src/assets/cover/cover-image.jpg"

function App() {
  return (
    <div className="background">
      <header className="flex-row px-1">
        <h2 className="title text-center">
          <a style={{textDecoration:"none"}} href="/">
             Philip Powers
          </a>
        </h2>
        <h3 className="text-center">
          Welcome to my Portfolio!
        </h3>
        <div class="background">
          <Nav></Nav>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
