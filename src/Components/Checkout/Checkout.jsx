import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css';
import upiIcon from "../../Assets/images.png";
import visaIcon from "../../Assets/visa_icon.png";
import mastercardIcon from "../../Assets/mastercard-icon.png";

function Checkout() {
  const location = useLocation();
  const { cart = [] } = location.state || {}; // Default to an empty array if no cart is passed

  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    mobilenumber: '',
    state: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', expiry: '', cvv: '' });
  const [upiId, setUpiId] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
    setCardDetails({ cardNumber: '', expiry: '', cvv: '' }); // Reset card details
    setUpiId(''); // Reset UPI ID
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleSubmit = () => {
    // Basic form validation
    const { firstName, lastName, address, city, state, mobilenumber, email } = billingInfo;
    const newErrors = {};

    if (!firstName) newErrors.firstName = 'First Name is required';
    if (!lastName) newErrors.lastName = 'Last Name is required';
    if (!address) newErrors.address = 'Address is required';
    if (!city) newErrors.city = 'City is required';
    if (!state) newErrors.state = 'State is required';
    if (!mobilenumber) newErrors.mobilenumber = 'Mobile number is required';
    if (!email) newErrors.email = 'Email is required';

    if (paymentMethod === 'creditCard') {
      if (!cardDetails.cardNumber) newErrors.cardNumber = 'Card Number is required';
      if (!cardDetails.expiry) newErrors.expiry = 'Expiry date is required';
      if (!cardDetails.cvv) newErrors.cvv = 'CVV is required';
    } else if (paymentMethod === 'upi') {
      if (!upiId) newErrors.upiId = 'UPI ID is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert('Order has been placed successfully!');
    setBillingInfo({
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      mobilenumber: '',
      state: '',
      email: '',
    });
    setCardDetails({ cardNumber: '', expiry: '', cvv: '' });
    setUpiId('');
    setErrors({});
  };

  // Calculate total price
  const totalPrice = cart?.reduce((total, item) => total + item.new_price * item.quantity, 0);

  return (
    <div className="checkout-container">
      <div className="billing-section">
        <h2>Billing Address</h2>
        <p>Already have an account? <a href="/login">Login</a></p>

        <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <input type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        <input type="text" name="address" placeholder="Address, street, apartment, etc." onChange={handleInputChange} />
        {errors.address && <p className="error">{errors.address}</p>}

        <input type="text" name="city" placeholder="City" onChange={handleInputChange} />
        {errors.city && <p className="error">{errors.city}</p>}

        <input type="text" name="state" placeholder="Region / State" onChange={handleInputChange} />
        {errors.state && <p className="error">{errors.state}</p>}

        <input type="text" name="mobilenumber" placeholder="Mobile number" onChange={handleInputChange} />
        {errors.mobilenumber && <p className="error">{errors.mobilenumber}</p>}

        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="summary-section">
        <h2>Summary</h2>
        <table>
          <tbody>
            <tr><td>Product</td><td>Total</td></tr>
            {cart?.map(item => (
              <tr key={item.id}><td>{item.name} x {item.quantity}</td><td>${(item.new_price * item.quantity).toFixed(2)}</td></tr>
            ))}
            <tr><td>Free Shipping</td></tr>
            <tr><td>Order Total</td><td><strong style={{ color: 'red' }}>${totalPrice.toFixed(2)}</strong></td></tr>
          </tbody>
        </table>

        <h2>Payment Method</h2>
        <div className="payment-method">
          <label>
            <input type="radio" value="creditCard" checked={paymentMethod === 'creditCard'} onChange={handlePaymentChange} />
            Credit Card <img src={visaIcon} alt="Visa" /> <img src={mastercardIcon} alt="MasterCard" />
          </label>

          <label>
            <input type="radio" value="upi" checked={paymentMethod === 'upi'} onChange={handlePaymentChange} />
            UPI Payment <img src={upiIcon} alt="UPI" style={{ width: '30px', marginLeft: '10px' }} />
          </label>
        </div>

        {paymentMethod === 'creditCard' && (
          <div className="credit-card-inputs">
            <h3>Enter Credit Card Details</h3>
            <input type="text" name="cardNumber" placeholder="Card Number" onChange={handleCardInputChange} />
            {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
            <input type="text" name="expiry" placeholder="Valid Thru (MM/YY)" onChange={handleCardInputChange} />
            {errors.expiry && <p className="error">{errors.expiry}</p>}
            <input type="text" name="cvv" placeholder="CVV" onChange={handleCardInputChange} />
            {errors.cvv && <p className="error">{errors.cvv}</p>}
          </div>
        )}

        {paymentMethod === 'upi' && (
          <div className="upi-input">
            <h3>Enter UPI ID</h3>
            <input type="text" placeholder="Enter UPI ID" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
            {errors.upiId && <p className="error">{errors.upiId}</p>}
          </div>
        )}

        <button className="checkout-button" onClick={handleSubmit}>Checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
