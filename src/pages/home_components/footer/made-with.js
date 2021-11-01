import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../App.js";
import "./made-with-style.css";
import Box from "../../../components/box";
import Line from "../../../components/line"

export default function made_with() {
  return (
    <div className="made-with">
      <div className="tag">
        <a href="">About</a>
      </div>

      <div className="section-info col-lg-5"></div>

      <h1 className="introH m-20">skills()</h1>

      <div className="skills row">
       <Box title={"Front-end"} listArray={["React,Redux","Html,css","Bootsrap","Material-ui","Socket.io , Lottie"]}>

       </Box>
       <Box title={"Back-end"} listArray={["Node.js","Socket.io","Jwt, oAuth2 , Redis","MongoDB , Firebase","PostgreSql , MySql", "Rest Api , GraphQl"]}>

</Box>
<Box title={"Scalping"} listArray={["Puppeteer","Crypto-Scalping","Instagram , Twitter Bots","Trading Bots"]}>

</Box>
<Box title={"Platforms"} listArray={["Next.js","Gatsby","Aws"]}>

</Box>
      </div>

      
     

      <div className="section-info col-lg-5"></div>

      <h1 className="introH m-20">experience()</h1>

      <div className="skills row">
    
      </div>

      <div className="tag">
        <a href="">About</a>
      </div>
    </div>
  );
}
