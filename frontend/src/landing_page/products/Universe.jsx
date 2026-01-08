import React from "react";
import "./ProductPage.css";
import { Link } from "react-router-dom";

const Universe = () => {
  return (
    <div className="universe">
      <h2>The Zerodha Universe</h2>
      <p>Extend your trading and investment experience further</p>

      <div className="universe-grid">
        {[
          ["zerodhaFundhouse.png", "Simple index funds"],
          ["sensibullLogo.svg", "Options trading platform"],
          ["tijori.svg", "Investment research"],
          ["streakLogo.png", "Strategy backtesting"],
          ["smallcaseLogo.png", "Thematic investing"],
          ["dittoLogo.png", "Insurance advice"],
        ].map((item, i) => (
          <div className="universe-card" key={i}>
            <img src={`media/images/${item[0]}`} alt="" />
            <p>{item[1]}</p>
          </div>
        ))}
      </div>
<Link to="/signup">
      <button className="btn-primary">Sign up for free</button></Link>
    </div>
  );
};

export default Universe;
