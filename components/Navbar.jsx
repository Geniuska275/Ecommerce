import Link from 'next/link'
import React from 'react'
import {AiOutlineShopping} from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>
        Imperatrice Wristhub
        </Link>
      </p>
      <button className='cart-icon' onClick={()=>{
        console.log('clicked')
      }}>

        <AiOutlineShopping/>
        <span className='cart-item-qty'>1</span>
      </button>


    </div>
  )
}

export default Navbar