import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import "../assets/styles/Address.scss";

const Address = ({id}) => {
  return (
    <div id={id} className="contacts">
      <h1>Contacts</h1>
      <p className="contacts__item">
        <FontAwesomeIcon icon={faPhone} className="icon" />
        <div className="contacts__item-details">
          <a href="tel:+994 051 548 92 72">
            <p> 051 548 92 72</p>
          </a>
        </div>
      </p>

      <p className="contacts__item">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <div className="contacts__item-details">
          <a href="mailto:someone@example.com">
            <p>dilberamrahova1@gmail.com</p>
          </a>
        </div>
      </p>

      <p className="contacts__item">
        <FontAwesomeIcon icon={faTwitter} className="icon" />
        <div className="contacts__item-details">
          <p>Twitter: </p>
          <a
            href="https://twitter.com/wordpress"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://twitter.com/wordpress
          </a>
        </div>
      </p>

      <p className="contacts__item">
        <FontAwesomeIcon icon={faFacebook} className="icon" />
        <di className="contacts__item-details">
          <p>Facebook: </p>
          <a
            href="https://www.facebook.com/facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.facebook.com/facebook
          </a>
        </di>
      </p>
      <p className="contacts__item">
        <FontAwesomeIcon icon={faSkype} className="icon" />
        <div className="contacts__item-details">
          <p>Skype: </p>
          <a href="skype:kamsolutions.pl">kamsolutions.pl</a>
        </div>
      </p>
    </div>
  );
};

export default Address;









