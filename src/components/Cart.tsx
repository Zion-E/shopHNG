import React from 'react'
import './Cart.css'
import valovaseImage from '../images/pageOne/valovase.png'
import warrickImage from '../images/pageOne/warrick.png'
import coverImage from '../images/pageOne/cover.png'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Cart = () => {
interface CartItem {
    id: number;
    image: string;
    name: string;
    price: number;
    quantity: number;
    subtotal: number;
  }
  
  const cartItems: CartItem[] = [
    {
      id: 1,
      image: valovaseImage,
      name: 'IYAGANKU MATIC VASE',
      price: 25000,
      quantity: 2,
      subtotal: 50000
    },
    {
      id: 2,
      image: warrickImage,
      name: 'ANIKULAPO RAINBOW VASE',
      price: 15000,
      quantity: 3,
      subtotal: 45000
    },
    {
      id: 3,
      image: coverImage,
      name: 'LALUDE DINNER PLATE',
      price: 43000,
      quantity: 1,
      subtotal: 43000
    }
  ];

  // const [quantity, setQuantity] = useState ('');

  // const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>, quantity: number) => {
  //   setQuantity(event.target.value);
    
  // };

  // function handleCouponChange(e: React.ChangeEvent<HTMLInputElement>): void {
  //   throw new Error('');
  // }

    return (
      <div className="cart_page">
            <h2>Shopping Cart</h2>
            <table>
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Photo</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>

                         {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td><button>X</button></td>
                      <td><img src={item.image} alt={item.name} /></td>
                      <td>{item.name}</td>
                      <td>#{item.price}</td>
                      <td>
                        {item.quantity}
                      </td>
                      <td>#{item.subtotal}</td>
                    </tr>
                  ))} 

                    
                </tbody>
        </table>
        <div className="cart_totals">
                <div>
                  <h3>Cart Totals</h3>
                </div>
                
                <p>Subtotal: #{cartItems.reduce((acc, cur) => acc + cur.subtotal, 0)}</p>
                <p>Total: #{cartItems.reduce((acc, cur) => acc + cur.subtotal, 0)}</p>
        </div>
        <button className="proceed_to_checkout">
          <Link to='/checkoutpage'>
            Proceed to Checkout
          </Link>
          </button>
        <div className="coupon_code">
                <input
                    type="text"
                    placeholder="Coupon Code"
                     
                    />
            <button>Apply Coupon</button>
        </div>
      </div>
    );
  }
  
export default Cart