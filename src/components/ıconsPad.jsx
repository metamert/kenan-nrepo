
import React from 'react'
import { FaBitcoin} from "react-icons/fa"
import { SiTypescript,SiNextdotjs} from "react-icons/si"

import { DiNodejs,DiReact,DiFirebase,DiAndroid,DiMongodb ,DiPostgresql, DiGithub ,DiApple,} from 'react-icons/di';
import {Fade} from  "react-reveal"
export default function ıconsPad() {
    return (
        <div className="IconsPad leftAnimate">

          <DiNodejs fontSize={50} className="m1"></DiNodejs> 
          <SiTypescript fontSize={30} className="m1"></SiTypescript>
     
          <DiReact fontSize={50} className="m1"></DiReact>
          <FaBitcoin fontSize={40} className="m1"></FaBitcoin>
          <DiPostgresql fontSize={50} className="m1"></DiPostgresql>
         
          <SiNextdotjs fontSize={50} className="m1"></SiNextdotjs>
        </div>
    )
}
