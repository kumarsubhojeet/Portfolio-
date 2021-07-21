import React from "react";

const Education = () => {
  return (
    <>
      <div className="edu_main">
        <div className="edu_head">
          <h4>Education</h4>

          <p><i class="fas fa-graduation-cap faas"></i></p>
        </div>

        <div className="timeline"></div>

        <div className="schools">
          
          <div className="svm">
            <h5>Graduation</h5>
            <p><i class="far fa-calendar-alt"></i> <span>2019-22</span></p>
            <a
              href="https://adypu.edu.in/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h6>Ajeenkya DY Patil University,Pune,Maharastra,India</h6>
            </a>
          </div>
<hr />
          <div className="svm">
            <h5>Diploma</h5>
            <p><i class="far fa-calendar-alt"></i> <span>2015-18</span></p>
            <a
              href="http://www.bittpolytechnic.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h6>BITT Polytechnic,Ranchi,Jharkhand,India</h6>
            </a>
          </div>
<hr />
          <div className="svm">
            <h5>High School</h5>
            <p><i class="far fa-calendar-alt"></i> <span>201-15</span></p>
            <a
              href="https://ssmshyamdih.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
            
              <h6>
                Saraswati Shishu Mandir,shyamdih,katrasbazar,Jharkhand,India
              </h6>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
