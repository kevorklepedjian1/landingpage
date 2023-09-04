import React from 'react';
import logoDark from '../../assets/images/logo-dark.svg';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import instagramIcon from '../../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img
          className="logo-dark"
          src={logoDark}
          alt="logo-dark"
        />
        <div className="socials">
          <img
            src={facebookIcon}
            alt="facebook"
            className="icon"
          />
          <img
            src={twitterIcon}
            alt="twitter"
            className="icon"
          />
          <img
            src={instagramIcon}
            alt="instagram"
            className="icon"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
