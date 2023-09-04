import React from 'react';

const Features = ({ info }) => {
  return (
    <section className="features" id="feature">
      
        {info.map((item) => (
          <div className="feature__wrapper" key={item.id}>
            <div className="feature__wrapper--top">
              <div className="feature__wrapper--circle">
                <span className="feature__wrapper--circle-title">
                  {item.id}
                </span>
              </div>
            </div>
            <div className="feature__wrapper--bottom">
              <h1 className="feature__wrapper--title">{item.title}</h1>
              <p className="feature__wrapper--desc">{item.desc}</p>
            </div>
          </div>
        ))}
     
    </section>
  );
};

export default Features;
