import React from 'react'
import MenuIcon from '../components/icons/MenuIcon'
import ElmarLogo from '../components/ElmarLogo'

const Navbar = ({ bgColor, toggleMenu, bgLang }) => {
  return (
    <div className='container mx-auto xl:py-32'>
      <div className='relative'>
        <ElmarLogo bgColor={bgColor} />
        <MenuIcon  onClick={toggleMenu} className="absolute left-1/4 top-1/7 cursor-pointer" />
        <span className={`absolute left-2/7 top-1/7 text-xl font-bold ${bgLang} rounded-full py-3 px-2 leading-none cursor-pointer`}>
          DE
        </span>
      </div>
    </div>
  )
}

export default Navbar