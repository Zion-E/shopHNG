import React from 'react'

import hmm from '../images/pageOne/hm.png'
import levis from '../images/pageOne/levis.png'
import lacoste from '../images/pageOne/lacoste.png'
import obey from '../images/pageOne/obey.png'
import shopify from '../images/pageOne/shopify.png'
import amazon from '../images/pageOne/amazon.png'
import smilinglady from '../images/pageOne/smilinglady.png'

import './Homepage.css'

const Homepage = () => {
  return (
    <div className='homepage'>
       <div className="container">
            
            <div className="content-container">
                <h1 className='text'>
                    <span className='container_let'>LET'S </span> 
                    <span>EXPLORE </span> 
                    <span className='container_unique'>UNIQUE </span> 
                    CRAFTS
                </h1>
                <div className="content-shopnow">
                    <h4>Elevate Your Space With Artifacts</h4>
                    <button>SHOP NOW</button>
                </div>
            </div>
            <div className="image-container">
                <img src={smilinglady} alt="Image" />
            </div>
        </div>


        <div className='brand'>
            <ul>
                <li>
                    <img src={hmm} alt="" />
                </li>
                <li>
                    <img src={obey} alt="" />
                </li>
                <li>
                    <img src={shopify} alt="" />
                </li>
                <li>
                    <img src={lacoste} alt="" />
                </li>
                <li>
                    <img src={levis} alt="" />
                </li>
                <li>
                    <img src={amazon} alt="" />
                </li>
            </ul>
        </div>

    </div>
    
  )
}

export default Homepage