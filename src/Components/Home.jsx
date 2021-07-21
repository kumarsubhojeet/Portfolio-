import React from "react";
import ppp from "../img/pppppp-removebg-preview.png";
import { Link } from "react-router-dom";
import About from "./About";
import Edu from './Education'
import Technology from "./Technology"
import Projects from './Projects'
import Services from './Services'
import Contact from "./Contact";
import Footer from "./Footer"
import { BackTop } from 'antd';
import pdf from "../pdf/resume.pdf"

const Home = () => {
  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 40,
    backgroundColor: ' #2c3e50 ',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };

  return (
    <>
    
      <div className="photo">
        <div className="desc">
          <h2>Hi,I'am Subhojit</h2>

          <p>
            High level exprerience in web development,knowledge and producing
            quality Work
          </p>

          <a className="resume" href={pdf} download>
            Resume
            <span>
              <i className="fas fa-feather-alt faas"></i>
            </span>
          </a>
        </div>

        <div className="profilr_pic">
          <img src={ppp} className="ppp" alt="error" />
        </div>

        <div className="desc2">
          <h2>Hi,I'am Subhojit</h2>

          <p>
            High level exprerience in web development,knowledge and producing
            quality Work
          </p>

          <Link className="resume" to="/">
            Resume
            <span>
              <i className="fas fa-feather-alt faas"></i>
            </span>
          </Link>
        </div>
      </div>

    
     
 
      <div data-aos="fade-right"  className="tec_aoc">
        <About />
      </div>

   

<div data-aos="fade-left"  className="tec_aoc"><Edu /></div>





<div data-aos="fade-up-right"  className="tec_aoc">

<Services />
</div>

      

<div data-aos="fade-up-left"  className="tec_aoc"><Technology /></div>







<div data-aos="zoom-out" className="tec_aoc">
<Projects />
</div>

<div data-aos="zoom-out-down" className="tec_aoc">
<Contact/>
</div>

 <BackTop>
      <div style={style}><i className="fas fa-chevron-up"></i></div>
    </BackTop>


       <Footer />



    </>
  );
};

export default Home;
