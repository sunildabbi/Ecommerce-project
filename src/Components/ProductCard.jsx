import React from 'react'
import './ProductCard.css';
const ProductCard = (props) => {
  return (
    <div className='Product-box'>
          <img src={props.Image} alt="burger" />
          <div className="description">
              <h2>{props.name}</h2>
        <p className="price"> { props.price}  <span>{ props.dis_price} </span></p>
              <p className="para"></p>
              <button className="btn">Buy Now</button>
          </div>
    </div>
  )
}

export default ProductCard;
