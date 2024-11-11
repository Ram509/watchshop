import React from 'react';
import '../Css/ProductShowcase.css'; // Assuming CSS styling is in this file for layout and colors.
import watch_51 from "../../Assets/watch_51.jpg"; // Import the watch image 51
import watch_52 from "../../Assets/watch_52.jpg"; // Import the watch image 52


const ProductShowcase = () => {
  return (
    <div className="product-showcase">
      {/* First Section */}
      <div className="product-section">
        <div className="product-image">
          <img src={watch_51} alt="Watch Image 1" />
        </div>
        <div className="product-info">
          <h2>Best product for best time</h2>
          <p>
            Apple Watch can do what your other devices can't because it's on your wrist. When you wear it, you get a fitness partner that measures all the ways you move, meaningful health insights, and a connection to the people and things you care about most.
          </p>
          <button className="learn-more">Learn more</button>
        </div>
      </div>

      {/* Second Section */}
      <div className="product-section">
        <div className="product-info">
          <h2>Get product more information from the video</h2>
          <p>
            Jayonix Watch now has an innovative new sensor that tracks your temperature while you sleep. Cycle Tracking uses this data to provide a retrospective estimate of when you ovulated, which can be helpful for family planning. As always, your data is private and secure.
          </p>
          <button className="learn-more">Learn more</button>
        </div>
        <div className="product-image ">
          <img src={watch_52} alt="Watch Image 2" />
        </div>
      </div>

    </div>
  );
};

export default ProductShowcase;
