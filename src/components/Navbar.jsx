import React from 'react'
import logo from '../assets/logo.png'
import logoBlanco from '../assets/elmarLogoWhite.png'

const Navbar = ({color}) => {
  return (
    <nav className='container mx-auto pt-14 sm:pt-32 sm:px-0 px-4'>
        <img src={color === 'white' ? logoBlanco : logo} alt="" />
    </nav>
  )
}

export default Navbar