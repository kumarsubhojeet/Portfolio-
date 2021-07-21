import React from "react";
import About_pic from "../img/About.svg"

const About = () => {
  return (
    <div className="about_main" id="about_main">
      <h1>About Me</h1>
      <p>My Introduction</p>

      <div className="about_pic">
        
        <div className="pic">
              <img src={About_pic} className="About_pic" alt="Error" />

        </div>

        <div className="para_about">
          <h6>
            Hello there! I'm Kumar Subhojit. I'm a Web Developer and Software
            Developer Hard-Working individual with proficiency in web
            development and App development, as well as strong skills and
            ability in writing clean and efficient code. I'm a quick learner and
            always want to learn more and more, to enhance my skills. A strong
            individual and contributor as well as team player. A positive
            attitude and communicative, a dependable person is great at time
            management.
          </h6>
          <br />
          <br />
        
          <div className="prohect_about" style={{color: ' #a0000c '}}>
          10+
          <br />
                Project Completed
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
