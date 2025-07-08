import React from 'react'
import logoBlanco from '../assets/elmarLogoWhite.png'
import MenuIcon from '../components/icons/MenuIcon'
import logoVioleta from '../assets/logo.png'


const Navbar = ({ color, toggleMenu }) => {
  return (
    <div className='container mx-auto xl:pt-32'>
      <div className='relative'>
        <img src={color === 'white' ? logoBlanco : logoVioleta} alt="" />
        <MenuIcon  onClick={toggleMenu} className="absolute left-1/4 top-1/7 cursor-pointer" />
        <span className="absolute left-2/7 top-1/7  text-xl font-bold text-fuchsia-975 bg-white rounded-full py-3 px-2 leading-none cursor-pointer">
          DE
        </span>
      </div>
    </div>
  )
}

export default Navbar