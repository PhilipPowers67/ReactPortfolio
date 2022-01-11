import * as React from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import weddingPhoto from '../src/assets/cover/wedding.jpg';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <div className="background">
      <header className="flex-row px-1">
        <h1 className="title text-center">
          <a style={{ textDecoration: "none" }} href="/">
            Philip Powers
          </a>
        </h1>
        <h2 className="container text-center">Welcome to my Portfolio!</h2>
        <br/>
        <div class="background">
          <Nav></Nav>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </header>
      <img class="wedding" src={weddingPhoto} />
      <footer></footer>
    </div>
  );
}

export default App;
