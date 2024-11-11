import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Cart.css';

const Cart = ({ cart: initialCart }) => {
  const [cart, setCart] = useState(initialCart);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.new_price * item.quantity, 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout', { state: { cart } }); // Passing the cart items as state
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {totalItems === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="product-info">
                      <img src={item.image} alt={item.name} className="product-image" />
                      <div>
                        <p>{item.name}</p>
                      </div>
                    </td>
                    <td>{item.quantity}</td>
                    <td>${item.new_price.toFixed(2)}</td>
                    <td>${(item.new_price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="summary">
            <table>
              <tbody>
                <tr>
                  <td>Grand Total</td>
                  <td className="grand-total">${totalPrice.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            <button className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
