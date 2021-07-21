import React from "react";


const Contact = () => {

  

  return (
    <div>
      <div className="contact_main">
        <div className="contact_head">
          <h4>Contact Me</h4>
          <i class="fas fa-envelope faas"></i>
        </div>

        <div className="contact_child">

      <div className="input_item">

      <div class="First_Name">
  <input type="text" class="form-control"
   placeholder="First Name" />
</div>

<div class="Last_name">
  <input type="text" class="form-control"
   placeholder="Last Name" />
</div>
      
      </div>   

      <div class="Email">
  <input type="text" class="form-control"
   placeholder="Your Email..." />
</div>

<textarea class="form-control textArea" placeholder="Any Suggestions" id="exampleFormControlTextarea1" rows="3"></textarea>
<button type="button" class="btn btn-success">Submit</button>
       
        </div>
      </div>
    </div>
  );
};

export default Contact;
