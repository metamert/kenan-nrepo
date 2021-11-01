import React, { Component } from "react";

import * as ScrollMagic from "scrollmagic";
import "../styles/about.scss";
import Lottie from "react-lottie";
import { TimelineMax, Power3, Power0, Power2 } from "gsap";
import animationData from "../assets/lottie/wave2.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: new TimelineMax(),
      scroller: new ScrollMagic.Controller(),
    };
  }
  componentDidMount() {
    /**
     * @desc
     * Intro scene
     */
    this.state.intro
      .addLabel("enter", 1)
      .from(
        ".title",
        2,
        {
          autoAlpha: 0,
          rotationX: 90,
          transformOrigin: "50% 50% -100px",
          ease: Power3.easeOut,
        },
        "enter"
      )
      .from(
        ".std",
        2,
        {
          autoAlpha: 0,
          x: -32,
          ease: Power3.easeOut,
        },
        "enter+=1.5"
      );

    /**
     * @desc
     * Setup Time lines and Scenes
     */
    let duration = this.props.innerHeight;

    /**
     * @desc
     * header background scene
     */
    let tlHeader = new TimelineMax();

    tlHeader.to(".header-bg", 4, {
      autoAlpha: 1,
      ease: Power0.easeNone,
    });

    new ScrollMagic.Scene({
      triggerElement: "#about",
      offset: duration / 4,
      duration: duration,
    })
      .setTween(tlHeader)
      .addTo(this.state.scroller)
      .reverse(true);
  }
  componentWillUnmount() {
    this.state.scroller.destroy();
  }
  render() {
    return (
      <div id="about" className="wrapper">
         <div className="">
   
   <div class="spine">

   <Lottie
         options={defaultOptions}
       
         style={{
           position: "absolute",
           transition: "opacity 2s",
           width:600,
           height:600,
           top:-302,
           left:-300,
          
         

         }}
       />

   </div>
   <div class="spine-target">
     <div class="circle relative">
   
     </div>
     <div class="pulse"></div>
   </div>
 </div>
        <div></div>
        <div className="static-container">
          <h1 className="title">
            about(
            <span class="func">"me"</span>)
          </h1>

          <div className="std">
            <div className="first-fold">
              <ul className="about-contact">
                <li className="zin">
                  <a
                    href="www.linkedin.com/in/orkun-mert-ygt"
                    target="_blank"
                    title="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ico"
                      viewBox="0 0 16 16"
                      role="img"
                      aria-labelledby="LinkedinIcoTitle"
                    >
                      <title id="LinkedinIcoTitle">LinkedIn logo</title>
                      <path
                        stroke="none"
                        d="M14.8 0H1.2C.5 0 0 .5 0 1.2v13.7c0 .6.5 1.1 1.2 1.1h13.6c.7 0 1.2-.5 1.2-1.2V1.2c0-.7-.5-1.2-1.2-1.2zM4.7 13.6H2.4V6h2.4v7.6zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z"
                      />
                    </svg>
                  </a>
                </li>
                <li className="zin">
                  <a
                    href="https://github.com/mertyjsx"
                    target="_blank"
                    title="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ico"
                      viewBox="0 0 16 16"
                      role="img"
                      aria-labelledby="GithubIcoTitle"
                    >
                      <title id="GithubIcoTitle">GitHub logo</title>
                      <path
                        stroke="none"
                        fill-rule="evenodd"
                        d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6 0 1.3-.1 2-.1s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li className="zin">
                  Download my
                  <a
                    href="./resume.pdf"
                    target="_blank"
                    title="Download Resume"
                    className="bt"
                  >
                    resume{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ico"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        d="M8 11.4l3.3-2.9m-6.6 0L8 11.4V.5M.5 10.8v4.7h15v-4.7"
                      />
                    </svg>
                  </a>
                </li>
              </ul>

              <p className="-purple">
                I am a full-stack web and mobile developer . 
              </p>
              <p className="-gray">
                // 4+ years of experience
                <br />
              </p>
            </div>

            <div className="about-grid">
              <h2>Main skills</h2>
              <div className="columns fluent">
                <ul>
                  <li>
                    Frontend development,
                    <br />
                    UX/UI design,
                    <br />
                    Backend development,
                   
                  </li>
                  <li>
                    JavaScript, CSS, HTML
                    <br />
                    React, Redux, Material-ui
                  </li>
                  <li>
                   Seo,
                    <br />
                    Figma
                  </li>
                  <li>
                    Strategic thinking,
                    <br />
                    Modern ui design
                  </li>
                  <li>
                    E-commerce,
                    <br />
                    Social media,
                    <br />
                    Landing pages,
                    <br />
                    Admin panels
                    <br />
                    Scalping bots
                  </li>
                  <li>
                    Node.js, Graphql 
                    <br />
                    SQL , NoSql
                  </li>
                </ul>
              </div>

              <h2>Tools</h2>
              <div className="columns tools">
                <ul>
                  <li>React</li>
                  <li>Material.ui</li>
                  
                  <li>Tailwind.css</li>
                  <li>Bootstrap</li>
                </ul>
                <ul>
                  <li>Webpack</li>
                  <li>Node.js</li>
                  <li>npm</li>
                  <li>GitHub</li>
                  <li>REST APIs</li>
                  <li>Redux</li>
                </ul>
                <ul>
                  <li>Next.js</li>
                  <li>Jwt</li>
                  <li>Gatsby</li>
                  <li>Aws</li>
                  <li>MongoDB</li>
                  <li>DynamoDB</li>
                  <li>PostgreSql</li>
                </ul>
                <ul>
                  <li>Pencil & Paper</li>
                  <li>Tradingview</li>
                  <li>Binance</li>
                  <li>Puppeteer</li>
                </ul>
              </div>

              <h2>Experience</h2>
              <div className="columns experience">
                <ul>
                <li>
                    <b className="-purple">full-stack developer</b>
                    <br />
                    at own startup
                    <br />
                    2020 - now
                  </li>
                  <li>
                    <b className="-purple">full-stack developer</b>
                    <br />
                    at <a href="https://www.freelancer.com/u/mertyjsx">freelancer.com</a> (as a freelancer)
                    <br />
                    2017 - now
                  </li>
                  <li>
                    <b className="-purple">junior front-end developer</b>
                    <br />
                    at imagine signage
                    <br />
                    2020 - 2021
                  </li>
                  <li>
                    <b className="-purple">junior full-stack developer</b>
                    <br />
                    at Status 200
                    <br />
                    2020 - 2021
                  </li>
                  <li>
                    <b className="-purple">Full stack developer</b>
                    <br />
                    at Adnama Group
                    <br />
                    2020 - now
                  </li>
                 
                </ul>
              </div>

              <h2>Languages</h2>
              <div className="columns languages">
                <ul>
                  <li>
                    <span className="-comment">// fluent</span>
                    <br />
                    <i className="-purple">tr/</i>Turkish,
                    <br />
                    <i className="-purple">en</i> English
                  </li>
                 
                  <li>
                    <span className="-comment">// basic</span>
                    <br />
                    <i className="-purple">fr</i> French
                    <br />
                   
                  </li>
                </ul>
              </div>

              <h2>Also busy with</h2>
              <div className="columns busy">
                <ul>
                  <li>Trading</li>
                  <li>Gym</li>
                  <li>Music</li>
                  <li>E-commerce business</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
