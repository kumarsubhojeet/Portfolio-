import React from "react";

import html from '../tech_img/html.png'
import node from '../tech_img/node.png'
import mongo from "../tech_img/index.jpg";
import react_img from '../tech_img/resct.png'
import boots from '../tech_img/boots.png'
import py from '../tech_img/py.png'

const Technology = () => {
  return (
    <>
      <div className="tech_main">
        <div className="tech_head">
          <h4>Tech i Use..</h4>
          <i class="fas fa-code faas"></i>
        </div>

        <div className="moving_crousal">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">

              <div className="carousel-item active">
                <img className="d-block crousal_item" src={mongo} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block crousal_item" src={html} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block  crousal_item" src={react_img} alt="Third slide" />
              </div>

              <div className="carousel-item">
                <img className="d-block  crousal_item" src={boots} alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block  crousal_item" src={py} alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block  crousal_item" src={node} alt="Third slide" />
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
             
            >
              <span
               
                aria-hidden="true"
              ></span>
             <i className="fas fa-backward" style={{color: ' #0e6655 '}}></i>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              
              <span
                
                aria-hidden="true"
               
              ></span>
             <i className="fas fa-forward" style={{color: ' #0e6655 '}}></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
