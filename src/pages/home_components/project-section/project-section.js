import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./projects-section-style.css";

import Project1 from "../../../img/project.jpeg";
import Project2 from "../../../img/project2.png";
import Project_Card from "./project-card"

export default function project_section() {
  return (
    <div>
      <section className="projects-section">
        
        <div className="tag">
          <a href="">projects</a>
        </div>
        <div class="section-info col-lg-5">
                    <p>
                        // Some choose stuffs I've worked on.
                    </p>
                    <p>
                        Click projects for more
                    </p>
                </div>
        <div className="project-items row">
         <Project_Card/>
         <Project_Card/>
         <Project_Card/>

        </div>

        <div className="tag">
          <a href="">projects</a>
        </div>
        
      </section>
    </div>
  );
}
