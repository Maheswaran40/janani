import React, { useState } from 'react'
import "../style/index.css"
import products_data from './products/ProductsData'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate=useNavigate()
    let [count,setCount]=useState(0)
  return (
    <>
    <h1 className='h1-tag'>Home</h1>
    {products_data.map((v,i)=>(
      <div key={i}>
        <img src={v.image} alt="" onClick={()=>navigate(`/Product/${v.id}`)}/>
        <span>Name : {v.name}</span>
        <span>Price : {v.price}</span>
        <span>Quantity: {count}</span>
        <button onClick={()=>setCount(++count)}>+</button>
        <button onClick={()=>setCount(--count)}>-</button>
      </div>
    ))}
  


    </>
  )
}

export default Home