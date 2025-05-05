import React from 'react';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h2>Trending Accessories</h2>
          <h1>Modern Sunglasses</h1>
          <p>Starting at $15.00</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <img src="/src/assets/images/banner.png" alt="Modern Sunglasses" className="banner-image" />
      </div>
    </div>
  );
};

export default Banner;