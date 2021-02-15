import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="ProjectsPage">
      <h1>My Projects</h1>
      <div className="Projects">
        <a href="https://t.me/DilmurodRahimov" target="_blank">
          <ProjectBoxes title={"Foodie"} />
        </a>

        <ProjectBoxes />
        <ProjectBoxes />
        <ProjectBoxes />
        <ProjectBoxes />
        <ProjectBoxes />
        <ProjectBoxes />
        <ProjectBoxes />
      </div>
    </div>
  );
}

export default Projects;

function ProjectBoxes({ title, image }) {
  return (
    <div className="Box">
      {image}
      <p>{title}</p>
    </div>
  );
}
