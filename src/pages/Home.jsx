import axios from 'axios'
import React, { useEffect } from 'react'

function Home() {
  const fetchProducts = async()=>{
    let {data} = await axios.get('https://fakestoreapi.com/products').catch((err)=>console.log(err))
    console.log(data);

  }
  useEffect(()=>{
    fetchProducts()
  })
  return (
    <div>Home</div>
  )
}

export default Home