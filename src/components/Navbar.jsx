import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container mx-auto pt-14 sm:pt-32 sm:px-0 px-4'>
        <img src={logo} alt="" />
    </nav>
  )
}

export default Navbar