import React from "react";
import Tic from '../Project_img/Tic.png'
import todo from "../Project_img/todo.png"
import weather from "../Project_img/weather.png"
import rd from "../Project_img/rd.png"
import food from "../Project_img/food.png"

const Projects = () => {
  return (
    <>
      <div className="project_main">
        <div className="project_heading">
          <h4>Projects</h4>
          <p>
            <i class="fas fa-briefcase faas"></i>
          </p>
        </div>

        <div className="projects_item">
          
          <a target="_blank" rel="noopener noreferrer"href="https://avrngame.netlify.app/">
            <img src={Tic} alt="Error"className="Project_images" />
          </a>

          <a target="_blank" rel="noopener noreferrer"href="https://kumarsubhojeet.github.io/ReactRecipies/">
            <img src={food} alt="Error"className="Project_images" />
          </a>

          <a target="_blank" rel="noopener noreferrer"href="https://kumarsubhojeet.github.io/Todo/">
            <img src={todo} alt="Error"className="Project_images" />
          </a>

       
       
       
        </div>

        <div className="projects_item">
          
       

          <a target="_blank" rel="noopener noreferrer"href="https://kumarsubhojeet.github.io/WeatherApp/">
            <img src={weather} alt="Error"className="Project_images" />
          </a>

          <a target="_blank" rel="noopener noreferrer"href="https://kumarsubhojeet.github.io/Responsive-web-desigb/">
            <img src={rd} alt="Error"className="Project_images" />
          </a>
       
       
        </div>
      </div>
    </>
  );
};

export default Projects;
