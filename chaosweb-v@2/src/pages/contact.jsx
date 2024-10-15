import React, { useEffect, useRef } from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";
import appPages from "../utils/pages.js";

const Contact = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const formRef = useRef(null); // Create a ref for the contact form

  useEffect(() => {
    // --------------Random page navigation start-------------------------------
    // Generate random time between 10 and 30 seconds
    const randomTime = Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000;
    const randomPage = appPages[Math.floor(Math.random() * appPages.length)];
    const timer = setTimeout(() => {
      navigate(randomPage); // Navigate to the randomly selected page
    }, randomTime); 
    // --------------Random page navigation end-------------------------------

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
      clearTimeout(timer); // clear random page navigation timeout
    };
  }, [navigate]);

  // Function to stop the chaotic movement on click
  const handleClick = () => {
    if (formRef.current) {
      formRef.current.style.animationPlayState = "paused"; // Stop the animation
    }
  };

  return (
    <div
      className="contact-form-container"
      ref={formRef} // Attach the ref here
      onClick={handleClick} // Add click event to stop animation
    >
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
