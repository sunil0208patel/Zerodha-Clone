import React from "react";
import "./AboutPage.css";

const Hero = () => {
  return (
    <div className="container about-hero">
      <div className="row text-center">
        <div className="col-12 my-5">
          <h1>
            We pioneered the discount broking model in India. <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>

      <div className="row border-top pt-5">
        <div className="col-12 col-md-6 mb-4">
          <p className="lh-lg">
            We kick-started operations on the 15th of August, 2010 with the
            goal of breaking all barriers that traders and investors face.
          </p>
          <p className="lh-lg">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
        </div>

        <div className="col-12 col-md-6">
          <p className="lh-lg">
            We run open online educational and community initiatives to
            empower retail traders and investors.
          </p>
          <p className="lh-lg">
            Catch up on the latest updates on our blog or see what the media
            is saying about us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
