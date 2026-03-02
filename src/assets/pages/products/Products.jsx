import React from 'react'
import { useParams } from 'react-router-dom'
import products_data from './ProductsData'

function Products() {
  const {navid}=useParams()
  const selectedProduct=products_data.find((v)=>v.id == navid)
  return (
    <div>
      {selectedProduct.name}
      <img src={selectedProduct.image} alt="" />
      {selectedProduct.price}
    </div>
  )
}

export default Products