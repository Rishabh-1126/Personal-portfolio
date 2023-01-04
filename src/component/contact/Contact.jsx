import React, { useEffect } from "react";
import "./contact.css";
import { GrMapLocation } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import con_img from "./c1.png";
import con_img2 from "./c2.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="contact">
      <div className="heading">
        {/* <h1>Contact Me</h1> */}
        <p className="bg">let's chat ✌️</p>
      </div>
      <div className="container">
        <div className="img-container">
          <img
            data-aos="fade-up-left"
            data-aos-delay="100"
            src={con_img}
            alt=""
          />
          <img
            data-aos="fade-up-right"
            data-aos-delay="100"
            src={con_img2}
            alt=""
          />
        </div>
        <div data-aos="fade-right" className="contact-container">
          <p>
            <span>Got a project for me?</span>
            <br />
            <br />
            If you want to keep in touch, send me a message using my email or
            Contact detail below...
          </p>
          <div className="email line">
            <i>
              <MdEmail />
            </i>

            <p className="color">rishavkumar26112000@gmail.com</p>
          </div>
          <div className="phone line">
            <i>
              <FiPhoneCall />
            </i>
            <p className="color">
              +91 <span className="lg">8617588984</span>
            </p>
          </div>

          <div className="address line">
            <i>
              <GrMapLocation />
            </i>
            <p className="color">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
