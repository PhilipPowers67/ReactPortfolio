import React, { Component } from "react";
import projects from "../../utils/projects.json";
import Card from "../Card";

class Portfolio extends Component {
  render() {
    return (
      <main>
        <div className="section">
          <div className="row container">
            <h1 style={{ color: "white", textAlign: "center" }}>Projects</h1>
          </div>
        </div>
        <div className="section">
          <div className="row">
            <Card
              title={projects[0].name}
              description={projects[0].description}
              image={projects[0].image}
              github={projects[0].git}
              site={projects[0].site}
            />
            <Card
              title={projects[1].name}
              description={projects[1].description}
              image={projects[1].image}
              github={projects[1].git}
              site={projects[1].site}
            />
          </div>
          <div className="row">
            <Card
              title={projects[2].name}
              description={projects[2].description}
              image={projects[2].image}
              github={projects[2].git}
              site={projects[2].site}
            />

            <Card
              title={projects[3].name}
              description={projects[3].description}
              image={projects[3].image}
              github={projects[3].git}
              site={projects[3].site}
            />
          </div>
          <div className="row">
            <Card
              title={projects[4].name}
              description={projects[4].description}
              image={projects[4].image}
              github={projects[4].git}
              site={projects[4].site}
            />
            <Card
              title={projects[5].name}
              description={projects[5].description}
              image={projects[5].image}
              github={projects[5].git}
              site={projects[5].site}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default Portfolio;
