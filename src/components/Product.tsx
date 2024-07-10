import React from 'react';
import { Link } from 'react-router-dom';
import saladplate from '../images/pageOne/saladplate.png'
import plateone from '../images/pageOne/plateone.png'
import platetwo from '../images/pageOne/platetwo.png'
import platethree from '../images/pageOne/platethree.png'
import platefour from '../images/pageOne/platefour.png'
import platefive from '../images/pageOne/platefive.png'
import star from '../images/pageOne/Star.png'
import './Product.css'

const Product = () => {
  const [quantity, setQuantity] = React.useState(1);
  return (
    <div className="product_container">
      <div className="product_column left">
        <img src={saladplate} alt="title" />
        <div className='small_images'>
          <img src={plateone} alt="plate" />
          <img src={platetwo} alt="plate" />
          <img src={platethree} alt="plate" />
          <img src={platefour} alt="plate" />
          <img src={platefive} alt="plate" />
        </div>
      </div>
      <div className="product_column right">
        <div className="content">
          <div>
            <h4>LARUBAWA CLAY RESERVOIR</h4>
            <img src={star} alt="star-rating" /> (1256 Reviews) Stock: in stock
          </div>
          <p>#99,500 #105,000</p>
        
          <div>
            Color: Clay
            <div className='clay_color_1'></div>
            <div className='clay_color_2'></div>
            <div className='clay_color_3'></div>
            <div className='clay_color_4'></div>
            <div className='clay_color_5'></div>
            <div className='clay_color_6'></div>
          </div>

          <div className="quantity_container">
            <div className='quantity_area'>
            <div className="quantity_button"
            onClick={() => setQuantity(quantity - 1)}>
              -
            </div>
            <div className="quantity">{quantity}</div>
              <div className="quantity_button"
              onClick={() => setQuantity(quantity + 1)}
              > +
              </div>
              </div>
            <p className="add-to-cart">
              <Link to={'/cartpage'}>
                ADD TO CART
                </Link>              
            </p>
          </div>
          <div className="buy_now">
            BUY NOW
          </div>

        </div>
    </div>
    </div>
  );
};

export default Product

