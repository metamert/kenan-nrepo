import React from "react";
import RevealText from "../components/revealText"
import Fade from "react-reveal/Fade";
import IconPad from "../components/ıconsPad"
import Lottie from "react-lottie";
import animationData from "../assets/lottie/wave2.json";
import Slick from "../components/slick"
import {Link} from "react-router-dom"
import Cubes from "../components/cubes"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Intro() {
  const [state, setState] = React.useState(0);
const [timer,setTimer]=React.useState(false)
  React.useEffect(() => {
    setTimeout(() => {
      setState(state + 1);
    }, 2000);
  }, [state]);

  React.useEffect(() => {
    setTimeout(() => {
      setTimer(true)
    }, 2400);
  }, [])

  return (
    <div id="intro" className="wrapper ">
      
     <div className="relative">
  
          <div class="spine" >

          {timer&& <Lottie
                options={defaultOptions}
              
                style={{
                  position: "absolute",
                  transition: "opacity 2s",
                  width:600,
                  height:600,
                  top:-302,
                  left:-300,
                  zIndex:-55,
                

                }}
              />}

          </div>
          <div class="spine-target">
            <div class="circle relative">
          
            </div>
            <div class="pulse"></div>
          </div>
        </div>
      <section class="scene-intro " id="intro">
      
        <div class="static-container ">
      
        <h1 class="title">
            <span class="iuri">I</span>
            <span class="func">.am</span>{"<"} a <span className="inline-block"><RevealText/>  dev.{"/>"} </span>
          </h1>

          <div class="std">
            <p class="-purple">Orkun Mert Yiğit</p>
            <p class="-gray">
              Fullstack web developer,
              <br />
              mobile developer and project Manager .
            </p>
          </div>
         <IconPad currentState={state}></IconPad>
        <div className="row  leftAnimate zin hoverMe">
        
        <Link to="/about" className="zin"> <div role="button" className="buttonApp hoverMe">About.me()</div></Link>
        </div>
        <h1 className="title " style={{marginTop:150}}>
        <span class="iuri">Co founder of</span> <a href="https://metaliga.io"> <span class="func">  metaliga.io</span> </a>
        </h1>
        </div>
       
        
      </section>
      
      <Slick></Slick>
    </div>
  );
}
