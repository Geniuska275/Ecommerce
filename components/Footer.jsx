import React from 'react'
import { AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>Copyright © {new Date().getFullYear()} Imperatrice Wristhub. All rights reserved.</p>
      <p className='icons'>
        <AiFillInstagram/>
        <AiFillTwitterSquare/>

      </p>

    </div>
  )
}

export default Footer