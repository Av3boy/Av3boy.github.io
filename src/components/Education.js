import "./css/Experience.css";
import TimeCard from "./TimeCard";

const Education = () => {
  return (
    <div className="container">

      <div className="section-heading experience-heading" style={{ paddingTop: 0 }}>
        <h2>Education</h2>
        <div className="line-dec"></div>
      </div>

      <ul className="timeline mt-4 pr-md-5">

        <TimeCard time={"Aug 2020 - Current"} company={"Jamk"} companyLink={"https://www.jamk.fi/fi"} jobtitles={["Software Engineer"]}
                  description={
                    <p>
                      Open Computer Science studies at the polytechnical of Jyväskylä.
                      During my time at Jamk, I have studied Software development, AI, Data understanding, Business understanding, and Leadership skills.
                      I aim to graduate by 2025.
                    </p>
                  }
        />

        <TimeCard time={"Aug 2016 - Feb 2020"} company={"Gradia"} companyLink={"https://www.gradia.fi/"} jobtitles={["Datanomi", "High School"]}
                  description={
                    <p>
                      I graduated from my dual degree studies (high school and professional bachelor's degree) at the beginning of 2020. 
                      During my studies, I also attended my mandatory military service.
                      My studies included .NET and C# development.
                    </p>
                  }
        />
      </ul>
    </div>
  );
}

export default Education;