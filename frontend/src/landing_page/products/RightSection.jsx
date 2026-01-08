import React from "react";
import "./ProductPage.css";

const RightSection = ({
  imageUrl,
  productName,
  productDescription,
  learnMore,
  kiteConnect
}) => {
  return (
    <div className="section-container">
      <div className="section-row reverse">
        <div className="section-content">
          <h2>{productName}</h2>
          <p>{productDescription}</p>

          <div className="section-links">
            {learnMore && <a href="/">{learnMore} →</a>}
            {kiteConnect && <a href="/">{kiteConnect} →</a>}
          </div>
        </div>

        <div className="section-image">
          <img src={imageUrl} alt={productName} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
