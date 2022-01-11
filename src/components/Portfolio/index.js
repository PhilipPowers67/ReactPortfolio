import React, { Component } from "react";
import projects from "../../utils/projects.json";
import Card from "../Card";

class Portfolio extends Component {
  render() {
    return (
      <main>
        <div className="section">
          <div className="container">
            <h1 style={{ color: "white", textAlign: "center" }}>Projects</h1>
          <br/>
          <br/>
          <br/>
          </div>
        </div>
        <div className="container">
          <div className="container">
            <Card
              title={projects[0].name}
              description={projects[0].description}
              image={projects[0].image}
              github={projects[0].git}
              site={projects[0].site}
            />
            <br/>
            <Card
              title={projects[1].name}
              description={projects[1].description}
              image={projects[1].image}
              github={projects[1].git}
              site={projects[1].site}
            />
          </div>
          <br/>
          <div className="container">
            <Card
              title={projects[2].name}
              description={projects[2].description}
              image={projects[2].image}
              github={projects[2].git}
              site={projects[2].site}
            />
            <br/>
            <Card
              title={projects[3].name}
              description={projects[3].description}
              image={projects[3].image}
              github={projects[3].git}
              site={projects[3].site}
            />
          </div>
          <br/>
          <div className="container">
            <Card
              title={projects[4].name}
              description={projects[4].description}
              image={projects[4].image}
              github={projects[4].git}
              site={projects[4].site}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default Portfolio;
