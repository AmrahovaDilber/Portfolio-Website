import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import "../assets/styles/Address.scss";

const Address = ({ id }) => {
  const handleMailClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:dilberamrahova1@gmail.com";
  };

  return (
    <>
      <h1>Contacts</h1>
      <div className="contacts">
        <FaPhoneAlt color="#26C17E" size={30} />
        <Link to="tel:+994 51 548 92 72">
          <h3>+994 51 548 92 72</h3>
        </Link>
      </div>
      <div className="contacts">
        <FaEnvelope color="#26C17E" size={30} />
        <Link to="dilberamrahova1@gmail.com" onClick={handleMailClick}>
          <h3>dilberamrahova1@gmail.com</h3>
        </Link>
      </div>
      <div className="contacts">
        <FaTwitter color="#26C17E" size={30} />
        <div>
          <h3>Twitter</h3>
          <Link to="https://twitter.com/wordpress">
            <span className="link">https://twitter.com/wordpress</span>
          </Link>
        </div>
      </div>
      <div className="contacts">
        <BsLinkedin color="#26C17E" size={30} />
        <div>
          <h3>LinkedIn</h3>
          <Link to="https://www.linkedin.com/in/dilb%C9%99r-%C9%99mrahova-12b384275/">
            <span className="link">
              https://www.linkedin.com/in/dilberamrahova
            </span>
          </Link>
        </div>
      </div>
      <div className="contacts">
        <FaFacebook color="#26C17E" size={30} />
        <div>
          <h3>Facebook</h3>
          <Link to="https://www.facebook.com/facebook">
            <span className="link">https://www.facebook.com/facebook</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Address;
