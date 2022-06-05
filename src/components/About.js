import React, { useState } from "react";
import TypeWritingAnimator from "./utilities/TypeWritingAnimator"
import { getAge, getExperience } from "./utilities/DateCalculator"
import File from "./profile/Resume.pdf"
import "./css/AboutMe.css";

const About = () => {

  const [width, setWidth] = useState(document.documentElement.clientWidth);

  const onDownload = () => {
    // TODO
  }

  function getDetails() {
    return (
      <ul className="theme-list">
        <li><b>From:</b> Jyväskylä, Finland</li>
        <li><b>Age:</b> {getAge()}</li>
        <li><b>Studies:</b> Software Engineering @ <a href="https://www.jamk.fi/fi">JAMK</a></li>
        <li><b>Work:</b> <a href="https://www.recastsoftware.com/">Recast Software</a></li>
      </ul>
    );
  }

  React.useEffect(() => {
    var elements = document.getElementById('typewritetext');
    var toRotate = '["Full Stack Developer", "Software Engineer"]';
    var period = "2000";
    new TypeWritingAnimator(elements, JSON.parse(toRotate), period);
    window.addEventListener("resize", resize);
    return () => { window.removeEventListener('resize', resize) };
  }, []);

  function resize() {
    setWidth(document.documentElement.clientWidth);
  }

  return (
    <div className="container">

      <div id="aboutme-waypoint"></div>

      <div className="section-heading about-me-heading">
        <h2>About</h2>
        <div className="line-dec"></div>
      </div>

      <div className="left-image-post">
        <div className="row">
          <div className="col-md-5" >
            <div className="left-image fade-in-left">
              <img src="assets/images/about-img.jpg" alt="" />
              {
                width > 750
                  ?
                  <> <br /> <br /> {getDetails()} </>
                  :
                  <></>
              }
            </div>
          </div>
          <div className="col">
            <div className="right-text fade-in-right">

              <h1>Antti Veikkolainen</h1>
              <h5 id="typewritetext" className="typewrite">
                <span className="wrap"></span>
              </h5>

              <p>
                {getExperience()} years of experience in Software development with a variety of technologies
                such as Azure, .NET, React and other Front-End, Back-End technologies.
              </p>

              <p>
                Recently I've started writing blogs about technologies I find interesting. You can find my blog site <a href="https://av3boy.github.io/blog">here</a>.
                (Note: The site is currently down for revamp)
              </p>

              <p>
              I want to expand the field with my knowledge. You can see my contributions from my Grepper page.
                At this time, Grepper shows that I have helped over 50000 developers!
                </p>

              {
                width <= 750
                  ?
                  getDetails()
                  :
                  <></>
              }

              <div className="white-button">
                <button onClick={onDownload}>Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;