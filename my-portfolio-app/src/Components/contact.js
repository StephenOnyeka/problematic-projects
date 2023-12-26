import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

function Contact() {
  const [state, setState] = useState(true);
  const display = function () {
    {
      state ? alert(`Not submitted, Error!`) : alert(`Submitted successfully`);
    }
  };
  const form = useRef();

  const { register, reset, errors, handleSubmit } = useForm();
  const registerHandler = () => {
    reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let body = "Name: " + name + "<br/> Email: " + email + "<br/> Subject: " + subject + "<br/> Message: " + message;
    console.log(body);
    // const config = {
    //   SecureToken: "d0dfe5d4-7921-4fc9-8c37-4753db0ace18",
    //   To: "ejeanobionyeka@gmail.com",
    //   From: "Name: " + name,
    //   Subject: "A message from your Portfolio Website",
    //   Body: body,
    // };
    // if (window.Email) {
    //   window.Email.send(config).then(() => {
    //     alert("Message sent");
    //   });
    // }
  };

  return (
    <div id="Contact">
      <div className="contact_container">
        <h2> SEND ME AN E-MAIL</h2>
        <h4> I AM VERY RESPONSIVE TO MESSAGES</h4>
        <form action="">
          <div className="contact_content">
            <input type="text" placeholder="Name" id="name" required />
            <input type="email" placeholder="Email" id="email" required />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              id="subject"
            />
            <textarea
              type="message"
              placeholder="Message"
              id="message"
              required
            />

            <button onClick={sendEmail} id="submit">
              Send Message
            </button>
          </div>
        </form>
        {/* <form
          // className={state? error('Not submitted, check your internet connection') : alert('Submitted successfully')}
           ref={form}
          onSubmit={sendEmail, display} 
          onClick={() => { setState(!state); handleSubmit(registerHandler)} }
        >
          <div className="contact_content">
            <input
              
              type="text"
              placeholder="Name"
              name="from_name"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="from_email"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              id="subject"
              required
            />
            <textarea
              type="message"
              placeholder="Message"
              name="message"
              required
            />

            <button type="submit" id="submit">
              Send Message
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
}

export default Contact;
