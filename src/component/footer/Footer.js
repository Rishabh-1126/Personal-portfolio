import React from "react";
import "./Footer.css";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer_body">
      <div>Designed and Developed by Risabh Pandey</div>
      <div>Copyright &#169; 2022 RP</div>
      <div className="footer_icons">
        <div>
          <BsGithub />
        </div>
        <div>
          <SiGmail />
        </div>
        <div>
          <FaLinkedin />
        </div>
        <div>
          <BsInstagram />
        </div>
      </div>
    </div>
  );
}

export default Footer;
