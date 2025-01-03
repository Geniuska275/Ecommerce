import React from 'react'
import { 
  Product,
  HeroBanner
 } from '../components'
import { client } from '../lib/client'
const Home = ({
  products,
  banners
}) => {
 console.log(products)
  return (
    <> 
    <HeroBanner herodata={ banners}/>
   <div className='products-heading'>
    <h2>Best Selling Products</h2>
    <p>Speakers of many variations</p>
   </div>
   <div className='products-container'>
    {products?.map(product=>(
      <Product  key={product.id} product={product}/>
    ))}

   </div>

    </>
  )
}
export const getServerSideProps=async()=>{
  const products=await client.fetch(`*[_type=='product']`)
  const banners=await client.fetch(`*[_type=='banner']`)
  return {
    props:{
      products,
      banners
    }
  }
}
export default Home