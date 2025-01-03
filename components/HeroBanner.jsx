import { urlFor } from '../lib/client'
import Link from 'next/link'
import React from 'react'

const HeroBanner = ({herodata}) => {
  console.log(herodata[1].image)

  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>{herodata[0].saleTime} </p>
            <h3>{herodata[0].largeText1}</h3>
            {/* <img src={urlFor(herodata[1]?.image)} alt='headphones' className='hero-banner-image'/> */}
            <div>
                <Link href='/product/id'>
                <button type='button'>{herodata[0].buttonText}</button>
                </Link>
                <div className='desc'>
                    <h5>Description</h5>
                    <p>DESCRIPTION</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner