import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="http://linkedin.com/in/kuldeep-tomar-0b266a190/" target="__blank">
          Kuldeep Tomar
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://www.instagram.com/life_racer/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="http://linkedin.com/in/kuldeep-tomar-0b266a190/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
