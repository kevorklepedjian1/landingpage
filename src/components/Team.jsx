import React from 'react';

const Team = () => {
  return (
    <section className="team">
      <div className="team-container">
        <div className="team__top--wrapper">
          <img
            className="team__top--wrapper--img"
            src="../../assets/images/image-founder.webp"
            alt="founder"
          />
        </div>
        <div className="team__bottom--wrapper">
          <img
            src="../../assets/images/bg-pattern-3.svg"
            alt="bg-pattern-3"
            className="pattern-three"
          />
          <span className="team__bottom--wrapper--title">Be the first to test</span>
          <span className="team__bottom--wrapper--description">
            Hi, I'm Louis Graham, the founder of the company. Book a demo call
            with me to become a beta tester for our app and kickstart your
            company. Apply for access below and I’ll be in touch to schedule a
            call.
          </span>
          <button className="btn">Apply for access</button>
        </div>
      </div>
    </section>
  );
};

export default Team;
