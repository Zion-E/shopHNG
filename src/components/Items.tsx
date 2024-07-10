import React from 'react'
import './Items.css'
import coverImage from '../images/pageOne/cover.png'
import valovaseImage from '../images/pageOne/valovase.png'
import opalImage from '../images/pageOne/opal.png'
import teacupImage from '../images/pageOne/teacup.png'
import cuppyImage from '../images/pageOne/jug.png'
import warrickImage from '../images/pageOne/jug.png'
import jugImage from '../images/pageOne/jug.png'
import { Link } from 'react-router-dom'

const Items = () => {
    const products = [
        {
            image: coverImage,
            name: 'LALUDE DINNER PLATE',
            price: 55000,
            description: 'This item is very wonderful!'
        },
        {
            image: valovaseImage,
            name: 'IYAGANKU MATIC VASE',
            price: 170000,
            description: 'This item is very wonderful!'
        },
        {
            image: opalImage,
            name: 'YEMOJA LUNCH PLATE',
            price: 90000,
            description: 'This item is very wonderful!'
        },
        {
            image: teacupImage,
            name: 'LISABI BOWL',
            price: 66000,
            description: 'This item is very wonderful!'
        },
        {
            image: jugImage,
            name: 'IYALERU CERAMIC DIMCA',
            price: 490000,
            description: 'This item is very wonderful!'
        },
        {
            image: cuppyImage,
            name: 'WATER MUG',
            price: 29000,
            description: 'This item is very wonderful!'
        },
        {
            image: warrickImage,
            name: 'ANIKULAPO RAINBOW VASE',
            price: 68000,
            description: 'This item is very wonderful!'
        },
        {
            image: coverImage,
            name: 'HNG Bowl',
            price: 49000,
            description: 'This item is very wonderful!'
        },

    ];
  return (
    <div className='item_container'>
        {/* <div>
            <h2>SIMILAR ITEMS</h2>
        </div> */}
        
        {products.map((product) => (
            <div className="grid_item">
                <img src={product.image} 
                alt={product.name} />
                <h3>{product.name}</h3>
                <p>#{product.price}</p>
                <p>{product.description}</p>
                <button>
                    <Link to={'/cartpage'}>
                    ADD TO CART
                    </Link>
                </button>

            </div>
        ))}
    </div>
  )
}

export default Items