import "./css/Skills.css";
import SkillCard from './SkillCard'

const Skills = () => {

  const Skills = {
    JavaScript: "90%",
    CSharp: "90%",
    AWS: "70%",
    Azure: "65%",
    React: "85%",
    Devops: "60%",
    Golang: "75%",
    SQL: "85%",
    Web: "85%",
    WinForm: "90%"
  };

  return (
    <div className="container">

        <div className="section-heading" style={{ padding: 0 }}>
          <h3>Software development methodologies</h3>
          <div className="line-dec"></div>
        </div>
        

        <div className="col-md-12">
          <div className="right-text" data-aos="fade-left" data-aos-once={true}>
            <br />
            <br />
            <p>
                Experienced in <a href="https://en.wikipedia.org/wiki/Agile_software_development">Agile</a> and <a href="https://www.atlassian.com/agile/scrum">Scrum</a> methodologies. 
                Worked together with multiple teams and even led some. 
                I have had to handled team resources and requirements.
                Designed and developed multiple software and made sure the objectives set, had been met in time.
            </p>

            <p>
              During my latest work related project, I became proficient with planning software from design and architectural perspectives.
              I wrote extensive documentation and improved DTO usage hence making the application more memory efficient.
            </p>
          </div>
        </div>

      <div className="section-heading skills-heading">
        <div id="skills-waypoint"></div>
        <h3>Programming languages</h3>
        <div className="line-dec"></div>
      </div>

      <div className="row">
        <SkillCard img={`${process.env.PUBLIC_URL + "assets/images/dotnet.svg"}`} description={
                  <p>
                    Of all the technologies I'm most proficient with .NET.
                    I started my career with .NET and have worked on multiple projects using it.
                    I have worked with many projects using C#, Entity Framework, .NET Core, and others. 
                  </p>} />

                  <SkillCard img={`${process.env.PUBLIC_URL + "assets/images/python.svg"}`} description={
                  <p>
                    While studying AI, computer vision, and other computer learning-related technologies, Python has been the go-to.
                  </p>} />

                  <SkillCard img={`${process.env.PUBLIC_URL + "assets/images/javascript.svg"}`} description={
                  <p>
                    This site that you are on was built using JavaScript.
                    I have used JavaScript since the first day I started learning computer science with the most basic websites.
                    Among JavaScript, Node, TypeScript, and NEXT.JS, I have created many projects that help me in my everyday life.
                  </p>} />

                  <SkillCard img={`${process.env.PUBLIC_URL + "assets/images/cplusplus.svg"}`} description={
                  <p>
                    C++ is a reasonably new addition to my catalog.
                    Using C++, I aim to study computer graphics with OpenGL and later expand through parallel programming to CUDA programming and better understand computer graphics and related studies.
                  </p>} />
      </div>

    </div>
  );
}

export default Skills;