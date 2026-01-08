import React from "react";
import "./PricingPage.css";

const Brokerage = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-lg-8 col-12">
          <a href="/" className="text-decoration-none">
            <p className="fs-4 link-title">Brokerage calculator</p>
          </a>

          <ul className="small-text mt-4">
            <li>Call & Trade and RMS auto-squareoff: ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical contract notes: ₹20 per note + courier charges.
            </li>
            <li>
              NRI (non-PIS): 0.5% or ₹100 per order (lower one).
            </li>
            <li>
              NRI (PIS): 0.5% or ₹200 per order (lower one).
            </li>
            <li>
              Debit balance orders charged ₹40 instead of ₹20.
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-12">
          <a href="/" className="text-decoration-none">
            <p className="fs-4 link-title">List of charges</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
