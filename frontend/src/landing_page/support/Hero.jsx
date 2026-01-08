import React from "react";
import "./Support.css";

const Hero = () => {
  return (
    <div className="support-hero">
      <div className="container">
        <div className="row g-4">
          
          {/* LEFT */}
          <div className="col-lg-7 col-12">
            <h5>Support Portal</h5>
            <h5 className="fs-4 mt-4 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h5>

            <div className="search-box mb-3">
              <input
                type="text"
                placeholder="Eg: how do I activate F&O, why is my order rejected..."
              />
              <i className="fa fa-search search-icon"></i>
            </div>

            <div className="quick-links mt-3">
              <a href="/">Track account opening</a>
              <a href="/">Track segment activation</a>
              <a href="/">Intraday margins</a>
              <a href="/">Kite user manual</a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-5 col-12 featured">
            <div className="text-end mb-4">
              <a href="/" className="text-light">Track Tickets</a>
            </div>

            <h5>Featured</h5>
            <p>
              Due to the settlement holiday, account balance will not include
              the following credits:
            </p>

            <ul>
              <li>Intraday equity profits (Sept 13, 2024)</li>
              <li>
                Derivative credits (NFO, Currency, Commodity)
                <a href="/"> Read more</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
