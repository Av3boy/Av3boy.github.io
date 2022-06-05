import "./css/Experience.css";

import TimeCard from "./TimeCard";
import Skills from "./Skills";

const Experience = () => {
  return (
    <div className="container">

      <div id="experience-waypoint"></div>
      <div className="section-heading experience-heading">
        <h2>Experience</h2>
        <div className="line-dec"></div>
      </div>

      <Skills />

      <div className="section-heading skills-heading">
        <div id="skills-waypoint"></div>
        <h3>Work experience</h3>
        <div className="line-dec"></div>
      </div>

      <ul className="timeline mt-4 pr-md-5">

        {/* Reacast */}
        <TimeCard time={"Mar 2022 - Current"} company={"Recast Software"} companyLink={"https://www.recastsoftware.com/"} jobtitles={["Software Engineer"]}
                  description={
                    <p>
                      After the American software company, Recast Software had acquired Centero Oy, my job continued working with Carillon and related products.
                      I have been working on revamping the project infrastructure and bringing new architectural changes to life.
                      Currently, my task is to build a new software replacement for Centero's Carillon. 
                    </p>
                  }
        />

        {/* Centero */}
        <TimeCard time={"Aug 2020 - Mar 2022"} company={"Centero Oy"} companyLink={"https://centero.fi/"} jobtitles={["Software Developer"]}
                  description={
                    <p>
                      My first tasks included developing new functionality for Centero's customer portal.
                      After that, I started to expand Centero's windows user management product, Carillon.
                      My job was to add new functionalities and make existing ones work with Azure Active Directory.
                    </p>
                  }
        />
      
        {/* Finnish Defence forces */}
        <TimeCard time={"Jan 2019 - Sep 2019"} company={"Finnish Defence Forces"} companyLink={"https://puolustusvoimat.fi/"} jobtitles={["Software Developer"]}
                  description={
                    <p>
                      I served my mandatory military service at Hämeenlinna's Armoured Brigade.
                      My main task was to create a new Attack Simulator and construct a VR simulator for a physical Anti-Air-Gun.
                      We built the simulators using Unreal Engine 4.
                    </p>
                  }
        />

        {/* Movya */}
        <TimeCard time={"Jun 2018 - Dec 2018"} company={"Movya"} companyLink={"https://www.movya.fi/"} jobtitles={["Software Developer"]}
                  description={
                    <p>
                      My task at Movya was to create a control panel application.
                      The application's tasks were downloading, updating, and deleting virtual reality software for Valmet Oyj.
                      I built the application using Unity 3D because of its UI capabilities.
                      </p>
                  }
        />

      </ul>
    </div>
  );
}

export default Experience;