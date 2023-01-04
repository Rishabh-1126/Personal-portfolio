import React from "react";

import "./about.css";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava, FaCss3Alt, FaGitAlt, FaReact, FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { motion } from "framer-motion";
import mainimg from "./main-img.png";
import middleimg from "./middle.png";
import mainimg2 from "./main-img2.png";
function About() {
  return (
    <section id="about">
      <p className="heading">About who I'M</p>
      <div className="about_container">
        <div className="left_box">
          <p>
            Hi Everyone , I am Rishabh Pandey from
            <span className="purple"> Bihar, India.</span>
          </p>
          <br />
          <p>
            I'm a Pre-final year Undergraduate at Sir M.Visvesvaraya Institute
            of Technology in Information Science and Engineering.
            <br />
            <br />
            I'M currently exploring various technologies and frameworks during
            which <span className="style">Front-End Development</span> Intrigued
            me the most. <br />
            <br />
          </p>
          <p className="space">
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li>playing games</li>
            <li>Reading fiction Web-Novel</li>
            <li>Watching Anime</li>
          </ul>

          <p className="quote">
            "Strive to build things that make a difference!"
          </p>
        </div>
        <div className="right_box">
          <img src={mainimg} alt="logo" className="img1" />

          {/* <motion.img
            animate={{
              scale: 1,
              rotate: [45, -45],
            }}
            transition={{
              ease: "linear",
              duration: 2,

              repeat: Infinity,
              repeatType: "reverse",
            }}
            src={middleimg}
            alt="logo"
            className="img2"
          /> */}
          <motion.img
            // initial={{ scale: 1 }}
            // animate={{ y: 100, scale: 1 }}
            // transition={{
            //   ease: "linear",
            //   duration: 2,
            //   repeat: Infinity,
            //   repeatType: "reverse",
            // }}
            src={mainimg2}
            alt="logo"
            className="img3"
          />
        </div>
      </div>
      <div className="skill_container">
        <div className="head">
          <p>
            {" "}
            professional <span className="color">skills</span>{" "}
          </p>
        </div>
        <div className="skill-set">
          <i>
            <TiHtml5 />
          </i>
          <i>
            <IoLogoJavascript />
          </i>
          <i>
            <FaJava />
          </i>
          <i>
            <SiCplusplus />
          </i>

          <i>
            <FaCss3Alt />
          </i>
          <i>
            <FaPython />
          </i>
          <i>
            <FaReact />
          </i>
          <i>
            <FaGitAlt />
          </i>
        </div>
      </div>
    </section>
  );
}
export default About;
