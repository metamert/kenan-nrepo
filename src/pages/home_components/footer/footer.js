import React from 'react'
import "../../../App.js"
import "./made-with-style.css";

export default function footer() {
    return (
        <div className="footer">
             
             <span>Thanks for visiting my website!</span>

             <p className="footer-content">
                 Check out my 
                 <br/>
                 <a href="/projects">
                     selected works
                 </a>
                 <br/>
                 for more details...
             </p>

        </div>
    )
}
