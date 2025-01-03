import React from 'react'
import Head from 'next/head'
import { Footer, Navbar } from '.'
const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Head>
            <title>Ecommerce</title>
            <meta name='description' content='Ecommerce site' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <header>
            <Navbar/>
        </header>
        <main className='main-container'>
           {children}
        </main>
        <footer>
        <Footer/>
        </footer>


    </div>
  )
}

export default Layout