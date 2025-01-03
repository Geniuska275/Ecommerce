import  {urlFor}  from '../../lib/client'
import React from 'react'
import { client } from '../../lib/client'

const ProductDetails = ({product,products}) => {
    const {image,price,name}=product
    console.log(product)
  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src={urlFor(image && image[0])}/>
                </div>
                {/* <div className='small-images-container'>
                    {image.map((item,i)=>(
                        <img key={i} 
                        onMouseOut=''
                        src={urlFor(item)}/>
                    ))}

                </div> */}
            </div>  
        </div>
    </div>
  )
}
export const getStaticPaths=async () =>{
    const query=`*[_type == 'product']
    {
    slug {
    current
    }
    }`;
    const products=await client.fetch(query)
    const paths=products.map(product=>(
        {params:
            {
                slug:product.slug.current
            }
        }
    ))
    return {
        paths,
        fallback:'blocking'
    }
}



export const getStaticProps=async({params:{slug}})=>{
    console.log(slug)
    const query=`*[_type == "product" && slug.current == '${slug}'][0]`

    const productQuery=`*[_type=='product']`
    const product=await client.fetch(query)
    console.log(product)
    const products=await client.fetch(productQuery)
    return{
        props:{
            product,
            products
        }
    }

}


export default ProductDetails