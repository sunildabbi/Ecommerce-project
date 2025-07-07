import React from 'react'
import ProductCard from './ProductCard'

import Burger from '../assets/Burger.jpeg'
import Pizza from '../assets/pizza.jpeg'
import uasks from '../assets/react.svg'
import Image1 from '../assets/image1.jpeg'
import Image2 from '../assets/image2.jpeg'
import Image3 from '../assets/image3.jpeg'

const Card = () => {
  return (
    <div className='product'>
      <ProductCard
        Image={Image1}
        name="Mens Casual Cotton White Shirt Regular Fit"
        dis_price="1000"
        price="999 "
        description="White Shirt"
      />
       <ProductCard
        Image={Image2}
        name="Mens Casual Cotton Green Shirt Regular Fit"
        dis_price="2000"
        price="1009"
        description="Green Shirt"
      />
       <ProductCard
        Image={Image3}
        name="Mens Casual Cotton Black Shirt Regular Fit"
        dis_price="1500"
        price="2000 "
        description="Black Shirt"
      />
       <ProductCard
        Image={Image1}
        name="Mens Casual Cotton White Shirt Regular Fit"
        dis_price="1000"
        price="999 "
        description="White Shirt"
      />
       <ProductCard
        Image={Image2}
        name="Mens Casual Cotton Green Shirt Regular Fit"
        dis_price="2000"
        price="1009"
        description="Green Shirt"
      />
       <ProductCard
        Image={Image3}
        name="Mens Casual Cotton Black Shirt Regular Fit"
        dis_price="1500"
        price="2000 "
        description="Black Shirt"
      />
       <ProductCard
        Image={Image1}
        name="Mens Casual Cotton White Shirt Regular Fit"
        dis_price="1000"
        price="999 "
        description="White Shirt"
      />
       <ProductCard
        Image={Image2}
        name="Mens Casual Cotton Green Shirt Regular Fit"
        dis_price="2000"
        price="1009"
        description="Green Shirt"
      />
       <ProductCard
        Image={Image3}
        name="Mens Casual Cotton Black Shirt Regular Fit"
        dis_price="1500"
        price="2000 "
        description="Black Shirt"
      />
      
     
    </div>
  )
}

export default Card
