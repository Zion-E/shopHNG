import React from 'react'
import mainIcon from '../images/pageOne/mainLogo.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer-main">
  <div className='footer'>
    <div className="left-section" >
      <img src={mainIcon} alt="handcraft_image" />
      <p>We supply you the best of ceramic craft work <br/>
        and design to suit your taste
      </p>
      <button>Get Started</button>
    </div>
    <div className="right-section" >
      <div className="column">
        <h3>About Us</h3>
        <ul>
          <li>Vision</li>
          <li>Strength</li>
          <li>Awards</li>
          <li>Testimonials</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="column">
        <h3>Products</h3>
        <ul>
          <li>Pottery</li>
          <li>Cuttlery</li>
          <li>Spoon</li>
          <li>Flower Vase</li>
          <li>Hand Made Products</li>
        </ul>
      </div>
      <div className="column">
        <h3>Dealings</h3>
        <ul>
          <li>Home decoration</li>
          <li>Retails</li>
          <li>Wholesales</li>
          <li>Recycling</li>
          <li>Luxury</li>
        </ul>
      </div>
    </div>

  </div>

  <div className="footer-line"></div>
  <div className="lower-line">
    <p>Copyright 2024 Hand Craft | All Rights Reserved | 
    <u>Terms and Conditions</u> | <u>Privacy Policy</u></p>
  </div>
  </div>
  )
}

export default Footer