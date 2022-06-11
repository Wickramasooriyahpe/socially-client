import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import LandingNavibar from "./landingNarbar";
import SocialMedia from "./socialMlinks";
import Footer from "./footer";
import "./contact.css";
import ContactHeader from "./contactHeadder";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();
  function success() {
    if(document.getElementById("email").value==="") { 
             document.getElementById('button').disabled = true; 
             
         } else { 
             document.getElementById('button').disabled = false;
         }
     }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4igonm8",
        "template_05w0dzq",
        form.current,
        "C4U58_HxSJ78Lu_Pm"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          console.log("add e mail");
          alert("add an e-mail")
        }
      );
  };

  return (
      <div>
      <br></br>
      <SocialMedia/>
      <LandingNavibar/>
      <ContactHeader/>
      <div className="row">
      <div className="contact-form-container">
        <div className="column " id="cont-column">
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <label>Name</label>
              <input type="text" name="name" className="input-lable" />
              <label>Email</label>
              <input type="email" name="email" id="email" className="input-lable" onkeyup="success()" />
              <label>Message</label>
              <textarea name="message" className="contact-text-area" /><br></br>
              <button type="submit" value="Send" className="contact-input-lable"  >Submit</button>
            </form>
            </div>
            </div>
          <div className="column " id="cont-column">
          <div className="contact-us-page-img-container">
          <img src="slidetwo.jpg" className="contact-us-page-img"></img></div>
          </div>
        
      </div>
      <Footer/>
    </div>
    </div>
  );
};

export default Contact;


