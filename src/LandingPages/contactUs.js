import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import LandingNavibar from "./landingNarbar";
import SocialMedia from "./socialMlinks";
import "./contact.css";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

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
        }
      );
  };

  return (
      <div>
      <br></br>
      <SocialMedia/>
      <LandingNavibar/>
      <div className="contact-form-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="name" className="input-lable" />
        <label>Email</label>
        <input type="email" name="email" className="input-lable" />
        <label>Message</label>
        <textarea name="message" className="contact-text-area" />
        <input type="submit" value="Send" className="input-lable"/>
      </form>
      </div>
    </div>
  );
};

export default Contact;


