import React from "react";

const Services = () => {
  return (
    <>
      <div className="service_main">
        <div className="ser_head">
          <h4>Services</h4>
          <i class="fas fa-concierge-bell faas"></i>
        </div>

        <div className="ser_item">
          <div className="Front_end">
            <i class="fas fa-laptop-code faas"></i>
            <h4>Front-End Development</h4>
            <p>
              A front-end architecture to build top-class solutions to meet your
              business needs
            </p>
          </div>

          <div className="Front_end">
          <i class="fab fa-node faas"></i>
            <h4>Back-End Development</h4>
            <p>
              Good Knowlodge of MongoDb and Nodejs to connect react to back-end
              and database and to authenticate users.
            </p>
          </div>

          <div className="Front_end">
          <i class="fas fa-mobile faas"></i>
            <h4>App Development</h4>
            <p>
              Develop software solutions to meet customer needs. A working
              knowledge of React Native.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
