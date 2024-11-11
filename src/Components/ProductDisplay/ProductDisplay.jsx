import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { watchProducts } from "../../Assets/watch";
import './ProductDisplay.css'; // Include the ProductCard styles

const ProductDisplay = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = watchProducts.find((item) => item.id === parseInt(id));
  const [message, setMessage] = useState('');

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleBuyNow = () => {
    addToCart(product); // Add the product to the cart
    navigate("/cart"); // Navigate to the cart page
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    setMessage(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="product-card">
      <div className="image-section">
        <img
          src={product.image}
          alt={product.name}
          className="main-image"
        />
        <div className="thumbnail-section">
          {product.thumbnails?.map((thumbnail, index) => (
            <img key={index} src={thumbnail} alt={`Thumbnail ${index + 1}`} />
          ))}
        </div>
      </div>

      <div className="details-section">
        <h2>{product.name}</h2>

        <div className="price-section">
          <h3>₹{product.new_price}</h3>
          <p className="original-price">₹{product.old_price}</p>
          {/* <span className="discount">({product.discount}% off)</span> */}
        </div>

        <div className="offers">
          <ul>
            {product.offers?.map((offer, index) => (
              <li key={index}>{offer}</li>
            ))}
          </ul>
        </div>

        <div className="buttons">
          <button onClick={handleAddToCart} className="emi-button">
            ADD TO CART
          </button>
        </div>
      </div>

      {message && <p className="success-message">{message}</p>} {/* Display success message */}
    </div>
  );
};

export default ProductDisplay;
