import React from 'react'

import "./about-style.css"
import "../../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import {faG} from "@fortawesome/free-solid-svg-icons";  for solid icons


import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faDownload} from "@fortawesome/free-solid-svg-icons"; 
export default function About() {
    return (
        <div className="about container">
       
       <div className="tag">
            <a href="">about</a>
          </div>


           <ul className="contact-about flex-start">
               <li>
               <a href="">
               <FontAwesomeIcon className="contact-icons" icon ={faLinkedin}></FontAwesomeIcon>
               </a>
               </li>
               <li>
               <a href="">
               <FontAwesomeIcon className="contact-icons" icon ={faGithub}></FontAwesomeIcon>
               </a>
               </li>
               <li className="comment">
                  Donwload my resume
                  <button type="button" className="center 
                  resume btn btn-success comment">resume <FontAwesomeIcon icon ={faDownload}></FontAwesomeIcon>

                  </button>
               </li>
           </ul>

           <div className="section-info ">
            <p>// I am a creative frontend developer.</p>
            <p>From Azerbaijan, based in Turkey.</p>
          </div>


          <div className="tag">
            <a href="">about</a>
          </div>

        </div>
    )
}
