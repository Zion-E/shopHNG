import React from 'react';
import './CheckoutPage.css'
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  return (
    <div className="checkout_page">
      <div className="column_1">
        <form>
          <div className="form_row">
            <div className="form_group first_line">
                <div>
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" />
                </div>
                <div>
                    <label>Surname</label>
                    <input type="text" placeholder="Surname" />
                </div>
            </div>
            <div className="form_group">
              
            </div>
          </div>
          <div className="form_row">
            <div className="form_group">
              <label>Company</label>
              <input type="text" placeholder="Company" />
            </div>
            <div className="form_group">
              <label>Country/Region</label>
              <input type="text" placeholder="Country/Region" />
            </div>
          </div>
          <div className="form_row">
            <div className="form_group">
              <label>Street Address</label>
              <input type="text" placeholder="Street Address" />
            </div>
          </div>
          <div className="form_row">
            <div className="form_group">
              <label>Town/City</label>
              <input type="text" placeholder="Town/City" />
            </div>
            <div className="form_group">
              <label>State</label>
              <input type="text" placeholder="State" />
            </div>
          </div>
          <div className="form_row">
            <div className="form_group">
              <label>ZIP Code</label>
              <input type="text" placeholder="ZIP Code" />
            </div>
            <div className="form_group">
              <label>Phone</label>
              <input type="text" placeholder="Phone" />
            </div>
          </div>
          <div className="form_row">
            <div className="form_group">
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
          </div>
          <div className="form_row">
            <div className="form_group">
              <label>Order Notes</label>
              <textarea placeholder="Order Notes" />
            </div>
          </div>
        </form>
        <button className="return_to_cart">
            <Link to='/cartpage'>RETURN TO CART </Link> 
        </button>
        <button className="return_to_shipping">CONTINUE TO SHIPPING</button>
      </div>
      <div className="column_2">
        <div className="product_information">
          <h2>Product</h2>
          <p>Subtotal</p>
          <hr />
          <ul>
            <li>Lalude Dinner Plate</li>
            <li>Iyaganku Matic Vase</li>
            <li>Yemoja Lunch Plate</li>
          </ul>
          <div className="cost">
            <p>Subtotal</p> <p> #9,225,000</p>
            <p>Shipping</p> <p> #20,000</p>
            <p>Total</p> <p> #9,245,000</p>
          </div>
          
        </div>
        <div className="payment_information">
          <h2>Payment</h2>
          <div className="credit_card">
            <h3>Credit Card</h3>
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Name on Card" />
            <div className="expiration_date">
              <input type="text" placeholder="Expiration Date (MM/YY)" />
              <input type="text" placeholder="Security Code" />
            </div>
          </div>
          <div className="paypal">
            <h3>PayPal</h3>
            <button>Pay with PayPal</button>
          </div>
        </div>
        <button className="place_order">PLACE ORDER</button>
        
      </div>
    </div>
  );
};

export default CheckoutPage;
