import React from "react";
import "./home-style.css";
import "../../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import db from "../../firebase";
import Card from "./project-car"
import Name from "../../pages/home_components/name/name"
import Projects from "../home_components/project-section/project-section"
import Made_with from "./footer/made-with";
import Footer from "../home_components/footer/footer"

export default function Home() {
  const [state, setState] = React.useState([]);
  


  return (
    <div className="sections">
 
    <div className="container">
      <Name/>
      <Footer/>
      <Projects/>
      <Made_with/>
    
    </div>
    
    
    

    </div>
  );
}
