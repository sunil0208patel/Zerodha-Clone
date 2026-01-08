import React from "react";
import "./Support.css";

const CreateTicket = () => {
  return (
    <div className="container ticket-section my-5">
      <h4 className="text-muted">
        To create a ticket, select a relevant topic
      </h4>

      <div className="row g-4 mt-4">

        {/* COLUMN 1 */}
        <div className="col-lg-4 col-md-6 col-12 ticket-card">
          <h5 className="text-muted">
            <i className="fa fa-plus-circle"></i> Account Opening
          </h5>
          <a href="/">Getting started</a>
          <a href="/">Online</a>
          <a href="/">Offline</a>
          <a href="/">Charges</a>

          <h5 className="text-muted mt-4">
            <i className="fa fa-credit-card"></i> Funds
          </h5>
          <a href="/">Fund withdrawal</a>
          <a href="/">Adding funds</a>
          <a href="/">Bank accounts</a>
        </div>

        {/* COLUMN 2 */}
        <div className="col-lg-4 col-md-6 col-12 ticket-card">
          <h5 className="text-muted">
            <i className="fa fa-user"></i> Your Account
          </h5>
          <a href="/">Login credentials</a>
          <a href="/">Profile</a>
          <a href="/">Segment addition</a>

          <h5 className="text-muted mt-4">
            <i className="fa fa-at"></i> Console
          </h5>
          <a href="/">IPO</a>
          <a href="/">Portfolio</a>
          <a href="/">Reports</a>
        </div>

        {/* COLUMN 3 */}
        <div className="col-lg-4 col-md-6 col-12 ticket-card">
          <h5 className="text-muted">
            <i className="fa fa-bar-chart"></i> Trading & Markets
          </h5>
          <a href="/">Trading FAQs</a>
          <a href="/">Kite</a>
          <a href="/">Margins</a>

          <h5 className="text-muted mt-4">
            <i className="fa fa-circle-thin"></i> Coin
          </h5>
          <a href="/">Mutual funds</a>
          <a href="/">Coin app</a>
          <a href="/">NPS</a>
        </div>

      </div>
    </div>
  );
};

export default CreateTicket;
