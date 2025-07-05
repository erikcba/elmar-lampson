import React from 'react'
import logo from '../assets/logo.png'
import vector1 from '../assets/vector1-menu.png'
import vector2 from '../assets/vector2-menu.png'
import CloseIcon from './icons/CloseIcon'

const Menu = ({ isOpen, toggleMenu }) => {
    return (
        <div
            className={`
        fixed top-0 left-0 w-full h-[75svh] overflow-hidden z-50 bg-gray-100
        transform transition-all duration-500 ease-in-out
        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
      `}
        >
            <div className='container mx-auto xl:pt-32 relative'>
                <CloseIcon onClick={toggleMenu} className="ml-auto cursor-pointer" />
                <img className='absolute top-0 left-1/2 -translate-12' src={vector2} alt="" />
                <img className='absolute top-0 right-3/7 -translate-12' src={vector1} alt="" />
                <div className='relative'>
                    <img src={logo} alt="" />
                    <span className="absolute left-2/7 top-1/7 text-xl font-bold text-fuchsia-975 bg-white rounded-full py-3 px-2 leading-none cursor-pointer">
                        DE
                    </span>
                </div>
                <div className='flex flex-row items-center justify-center w-full pb-48'>
                    <div className='w-1/2'></div>
                    <ul className='w-1/2 flex flex-col items-start justify-start xl:pl-24 gap-6'>
                        <li className='text-4xl font-bold text-left text-sky-600 cursor-pointer'>News</li>
                        <li className='text-4xl font-bold text-left text-sky-600 cursor-pointer'>About</li>
                        <li className='text-4xl font-bold text-left text-sky-600 cursor-pointer'>My music</li>
                        <li className='text-4xl font-bold text-left text-sky-600 cursor-pointer'>Media</li>
                        <li className='text-4xl font-bold text-left text-sky-600 cursor-pointer'>Calendar</li>
                        <li className='text-4xl font-bold text-left text-sky-600 cursor-pointer'>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu