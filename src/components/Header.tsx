import React from 'react'
import { Link } from 'react-router-dom'
import mainLogo from '../images/pageOne/mainLogo.png'
import search from '../images/pageOne/search.png'
import cart from '../images/pageOne/cart.png'
import './Header.css'


const Header = () => {
  return (
    <div className='header'>
        <div className="left">
            <img src={mainLogo} alt="Logo"/>
        </div>
    <nav className="middle">
        <ul>
        <li><Link to="/">
            Home
            </Link>
        </li>
        <li>Shop</li>
        <li>About</li>
        <li>Deals</li>
        <li className='signup_button'>
            Sign up
        </li>
        </ul>
    </nav>
        <div className="right">
            <img className='search_icon' src={search} alt="Logo"/>
            <img src={cart} alt="Logo"/>
        </div>

    </div>
  )
}

export default Header