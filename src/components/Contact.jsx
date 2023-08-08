import React from "react";
import "../style/contact.scss"

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact us</h1>
        <form action="">
          <div>
            <label>Name  </label>&nbsp; &nbsp;
            <input required placeholder="abc" type="text" name="" id="" />
          </div>

          <div>
            <label>Email</label>&nbsp; &nbsp;
            <input
              required
              placeholder="abc@gmail.com"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <label>Message</label> &nbsp; &nbsp;
            <input
              required
              placeholder="Tell us about your querry"

              type="text"
              name=""
              id=""
            />
          </div>
          
            <button>Submit</button>
          
        </form>
      </main>
    </div>
  );
};

export default Contact;
