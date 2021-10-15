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
  const [loading, setLoading]= React.useState(true)
  React.useEffect(async () => {
    const projelerim = db.collection("projects");
    const snapshot = await projelerim.get();
    let project_array = [];
    snapshot.forEach((doc) => {
      project_array.push(doc.data());
    });
    console.log(project_array);
    setState(project_array);
    setLoading(false)
  }, []);

  return (
    <div className="sections">
   {loading ? <h1>yukleniyor</h1> :    
    <div className="container">
      <Name/>
      <Projects/>
      <Made_with/>
      <Footer/>
    </div>
    
    
    }
   

    </div>
  );
}
