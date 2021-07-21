import React from "react";


const Footer = () => {


  return (
    <>
      <div className="f_m">
        <div className="footer_main">
          <div className="footer_details">
            <div className="mail_footer">
              <h4>
                <i class="far fa-envelope"></i>
                <span> Subhojeet567@gmail.com</span>
              </h4>
            </div>

            <div className="location">
              <h4>
                <i class="fas fa-map-marker-alt"></i>

                <span> Wagholi,Pune,Maharastra,India</span>
              </h4>
            </div>
          </div>

          <div className="my_name">
            <h4>Connect Socially</h4>

            <div className="logos">
              <a
                href="https://github.com/kumarsubhojeet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>
                  <i class="fab fa-github faass"></i>
                </h4>
              </a>

              <a href="/" target="_blank" rel="noopener noreferrer">
                <h4>
                  <i class="fab fa-instagram insta"></i>
                </h4>
              </a>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Footer;
