import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img
          className="logo-dark"
          src="./assets/images/logo-dark.svg"
          alt="logo-dark"
        />
        <div className="socials">
          <img
            src="./assets/images/icon-facebook.svg"
            alt="facebook"
            className="icon"
          />
          <img
            src="./assets/images/icon-twitter.svg"
            alt="twitter"
            className="icon"
          />
          <img
            src="./assets/images/icon-instagram.svg"
            alt="instagram"
            className="icon"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
