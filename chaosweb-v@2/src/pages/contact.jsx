import React, { useEffect } from "react";
import "./contact.css";

const Contact = () => {
  useEffect(() => {
    // Create script elements
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    // Set attributes
    script1.src = "./assets/js/script.js";
    script2.src = "./assets/js/night_time.js";
    script2.defer = true;

    // Append scripts to the document
    document.body.appendChild(script1);
    document.body.appendChild(script2);

    // Cleanup function to remove the scripts when the component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <form id="contactForm">
        <div className="form-group">
          <input type="text" id="name" placeholder="Name" required />
        </div>
        <div className="form-group">
          <input type="text" id="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="text" id="phone" placeholder="Phone Number" required />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="description"
            placeholder="Description"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div id="popup" className="popup"></div>
    </div>
  );
};

export default Contact;
