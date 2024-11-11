import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { watchProducts } from "../../Assets/watch";
import "../Css/Product.css";

const Products = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate(); // Initialize useNavigate

  // Calculate indexes for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = watchProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(watchProducts.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Navigate to the product display page
  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Use the product ID to navigate
  };

  return (
    <div className="product-collection">
      <div className="products">
        {currentItems.map((item) => (
          <div key={item.id} className="item-card" onClick={() => handleProductClick(item.id)}> {/* Add click handler */}
            <img src={item.image} alt={item.name} className="item-image" />
            <h3>{item.name}</h3>
            <p className="price">
              <span className="new-price">${item.new_price.toFixed(2)}</span>
              <span className="old-price">
                <s>${item.old_price.toFixed(2)}</s>
              </span>
            </p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
