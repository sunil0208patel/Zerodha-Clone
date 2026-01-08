import React from "react";
import "./ProductPage.css";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) => {
  return (
    <div className="section-container">
      <div className="section-row">
        <div className="section-image">
          <img src={imageUrl} alt={productName} />
        </div>

        <div className="section-content">
          <h2>{productName}</h2>
          <p>{productDescription}</p>

          <div className="section-links">
            {tryDemo && <a href="/">{tryDemo} →</a>}
            {learnMore && <a href="/">{learnMore} →</a>}
          </div>

          {(googlePlay || appStore) && (
            <div className="app-badges">
              {googlePlay && <img src={googlePlay} alt="Google Play" />}
              {appStore && <img src={appStore} alt="App Store" />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
