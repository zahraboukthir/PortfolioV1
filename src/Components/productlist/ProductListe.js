import React from 'react'
import { products } from '../../data'
import Product from '../product/Product'
import  './productList.css'
const ProductListe = () => {
    return (
        <div className="pl">
        {/* <div className="pl-texts">
        </div> */}
        <div className="pl-list">
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
      </div>
    )
}

export default ProductListe
