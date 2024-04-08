import React from 'react'
import './Shop.css'
import img1 from '../../asset/shop.gif'

const Shop = () => {
  return (
    <>
    <div className="shop_mainContainer">
      <div className="shop_subContainer">
        <h1 className="shop_head">
          WE ARE GETTING AWSOME PRODUCTS SOON STAY TUNED .....
        </h1>
        <img src={img1} alt="" className="shop_image" />
      </div>
    </div>
    </>
  )
}

export default Shop;