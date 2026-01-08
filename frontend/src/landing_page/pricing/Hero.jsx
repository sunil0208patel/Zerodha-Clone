import React from "react";
import "./PricingPage.css";

const Hero = () => {
  return (
    <div className="container pricing-hero text-center">
      <div className="border-bottom pb-5 mb-5">
        <h1 className="text-muted">Pricing</h1>
        <h5 className="text-muted mt-3">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h5>
      </div>

      <div className="row g-4">
        <div className="col-lg-4 col-md-6 col-12 pricing-card">
          <img src="media/images/pricingEq.svg" alt="Equity" />
          <h3 className="mt-4 text-muted fs-4">Free equity delivery</h3>
          <p className="mt-3 text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 pricing-card">
          <img src="media/images/pricing20.svg" alt="Intraday" />
          <h3 className="mt-4 text-muted fs-4">Intraday and F&O trades</h3>
          <p className="mt-3 text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per order on intraday, equity,
            currency & commodity trades.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 pricing-card mx-auto">
          <img src="media/images/pricingEq.svg" alt="MF" />
          <h3 className="mt-4 text-muted fs-4">Free direct MF</h3>
          <p className="mt-3 text-muted">
            All direct mutual fund investments are absolutely free — ₹0
            commission & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
