import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import "./projects-section-style.css";

import Project1 from "../../../img/project.jpeg";
import Project2 from "../../../img/project2.png";

export default function project_card() {
    return (
        <div className="project-card col-3">
             <div className="layer-1">
              <div className="layer-images">
                <img src={Project1} />
                <img src={Project2} />

              </div>

              <div className="layer-2"></div>
            </div>
        </div>
    )
}
