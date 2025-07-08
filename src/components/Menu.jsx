import React from 'react'
import logo from '../assets/logo.png'
import vector1 from '../assets/vector1-menu.png'
import vector2 from '../assets/vector2-menu.png'
import CloseIcon from './icons/CloseIcon'
import { Link } from 'react-router-dom'

const Menu = ({ isOpen, toggleMenu }) => {


    return (
        <>
            <div
                className={`
          fixed top-0 left-0 w-full h-svh z-50 
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? 'translate-y-0' : '-translate-y-full'}
        `}
            >
                <div className="bg-gray-100 overflow-hidden h-svh">
                    <div className="container mx-auto xl:pt-32 relative">
                        <CloseIcon onClick={toggleMenu} className="ml-auto cursor-pointer" />
                        <img className="absolute top-0 left-1/2 -translate-x-12" src={vector2} alt="" />
                        <img className="absolute top-0 right-3/7 -translate-x-12" src={vector1} alt="" />

                        <div className="relative">
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                            <span className="absolute left-2/7 top-1/7 text-xl font-bold text-fuchsia-975 bg-white rounded-full py-3 px-2 leading-none cursor-pointer">
                                DE
                            </span>
                        </div>

                        <div className="flex flex-row items-center justify-center w-full pb-48">
                            <div className="w-1/2"></div>
                            <ul className="w-1/2 flex flex-col items-start justify-start xl:pl-24 gap-6">
                                <Link to="/news">
                                    <li className="text-4xl font-bold text-left text-sky-600 cursor-pointer">News</li>
                                </Link>
                                <Link to="/about">
                                    <li className="text-4xl font-bold text-left text-sky-600 cursor-pointer">About</li>
                                </Link>
                                <Link to="/myMusic">
                                    <li className="text-4xl font-bold text-left text-sky-600 cursor-pointer">My music</li>
                                </Link>
                                <Link to="/media">
                                    <li className="text-4xl font-bold text-left text-sky-600 cursor-pointer">Media</li>
                                </Link>
                                <Link to="/calendar">
                                    <li className="text-4xl font-bold text-left text-sky-600 cursor-pointer">Calendar</li>
                                </Link>
                                <Link to="/contact">
                                    <li className="text-4xl font-bold text-left text-sky-600 cursor-pointer">Contact</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu