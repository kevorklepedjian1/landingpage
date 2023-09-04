import React from 'react';

const Header = () => {
  return (
    <header>
      <img
        src="./assets/images/bg-pattern-1.svg"
        alt="bg-pattern-1"
        className="pattern-one"
      />
      <img
        src="./assets/images/bg-pattern-2.svg"
        alt="bg-pattern-2"
        className="pattern-two"
      />
      <div className="header-container">
        <nav>
          <img
            className="nav__img"
            src="./assets/images/logo-light.svg"
            alt="logo-light"
          />
          <h1 className="link">Apply for access</h1>
        </nav>
        <div className="hero">
          <div className="hero__wrapper">
            <h1 className="hero__wrapper-header">
              Data <strong>tailored</strong> to your needs.
            </h1>
            <button className="btn">Learn more</button>
          </div>
          <img
            className="hero__img"
            src="./assets/images/image-hero.webp"
            alt="img-hero"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
