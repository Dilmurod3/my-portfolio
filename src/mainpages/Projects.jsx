import React from "react";
import "./Projects.css";
import qadaa from "../assets/projects-images/Qadaa.png";
import foodie from "../assets/projects-images/Foodie.png";
import gameDashboard from "../assets/projects-images/Game dashboard.png";
import covid from "../assets/projects-images/Covid.png";

function Projects() {
  return (
    <div className="ProjectsPage">
      <h1>My Projects</h1>
      <div className="Projects">
        <ProjectBoxes
          link="https://www.figma.com/file/nErQiD4fgUF41NWff0o1VA/Qadaa-Calculator?node-id=405%3A336"
          image={qadaa}
        />

        <ProjectBoxes
          link="https://www.figma.com/proto/c0EXQakOUPvqECQZUgFTk5/Foods?node-id=102%3A3&viewport=77%2C126%2C0.1441030353307724&scaling=min-zoom"
          image={foodie}
        />
        <ProjectBoxes
          link="https://www.figma.com/file/GPXUB1aKyqlOL19pLjrxZb/Game-Dashboard?node-id=0%3A1"
          image={gameDashboard}
        />
        <ProjectBoxes
          link="https://dilmurod3.github.io/Corona-Virus-Stats/"
          image={covid}
        />
        <ProjectBoxes
          title={"Will be soon"}
          color={{ backgroundColor: "#F2C94C" }}
        />
        <ProjectBoxes
          title={"Will be soon"}
          color={{ backgroundColor: "#219653" }}
        />
        <ProjectBoxes
          title={"Will be soon"}
          color={{ backgroundColor: "#2F80ED" }}
        />
        <ProjectBoxes
          title={"Will be soon"}
          color={{ backgroundColor: "#BB6BD9" }}
        />
        <ProjectBoxes
          title={"Will be soon"}
          color={{ backgroundColor: "#6FCF97" }}
        />
        <ProjectBoxes
          title={"Will be soon"}
          color={{ backgroundColor: "#EB5757" }}
        />
        <ProjectBoxes
          title={"Will be soon"}
          color={{ backgroundColor: "#777777" }}
        />
        <ProjectBoxes
          title={"Will be soon"}
          color={{ backgroundColor: "#56CCF2" }}
        />
      </div>
    </div>
  );
}

export default Projects;

function ProjectBoxes({ title, image, link, color }) {
  return (
    <div className="Box" style={color}>
      <a href={link} target="_blank">
        <img src={image} width={"100%"} />
        <p>{title}</p>
      </a>
    </div>
  );
}
