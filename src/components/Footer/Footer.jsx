import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main_footer">
      <a href="https://github.com/haftamudesta" className="main_footer-icon">
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/haftamudesta"
        className="main_footer-icon"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.facebook.com/haftamudesta"
        className="main_footer-icon"
      >
        <BsFacebook />
      </a>

      <p className="main_footer-copy">
        Copyright © 2023 Haftamu Dest. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
