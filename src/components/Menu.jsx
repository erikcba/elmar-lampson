import React from 'react'
import vector1 from '../assets/vector1-menu.png'
import vector2 from '../assets/vector2-menu.png'
import CloseIcon from '../assets/cerrar.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Menu = ({ isOpen, toggleMenu }) => {


    return (
        <>
            <div
                className={`
          fixed top-0 left-0 w-full h-svh z-50 
          transform transition-transform duration-500 ease-in-out 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                <div className="bg-gray-100 overflow-hidden h-svh  ">
                    <div className="container mx-auto h-full xl:pb-32 xl:pt-20 relative xl:px-0 px-6">
                        <img src={CloseIcon} alt="" onClick={toggleMenu} className="ml-auto cursor-pointer absolute md:relative right-10 top-10 z-20" />
                        <img className="absolute top-0 left-1/2 md:h-full h-auto md:-translate-x-20 translate-x-18" src={vector2} alt="" />
                        <img className="absolute top-0 right-3/7 md:h-full h-auto md:-translate-x-20 translate-x-38" src={vector1} alt="" />

                        <div className="relative">
                           <Navbar toggleMenu={toggleMenu} bgLang={'bg-white text-black'} isOpen={isOpen} bgColor='bg-fuchsia-975 mix-blend-multiply text-white' />
                        </div>

                        <div className="flex sm:flex-row flex-row-reverse items-center justify-center w-full ">
                            <div className="w-1/2"></div>
                            <ul className="w-1/2 flex flex-col items-start justify-start xl:pl-24 gap-6">
                                <Link to="/news">
                                    <li className="text-4xl xl:text-6xl font-bold text-left text-sky cursor-pointer">News</li>
                                </Link>
                                <Link to="/about">
                                    <li className="text-4xl xl:text-6xl font-bold text-left text-sky cursor-pointer">About</li>
                                </Link>
                                <Link to="/myMusic">
                                    <li className="text-4xl xl:text-6xl font-bold text-left text-sky cursor-pointer">My music</li>
                                </Link>
                                <Link to="/media">
                                    <li className="text-4xl xl:text-6xl font-bold text-left text-sky cursor-pointer">Media</li>
                                </Link>
                                <Link to="/calendar">
                                    <li className="text-4xl xl:text-6xl font-bold text-left text-sky cursor-pointer">Calendar</li>
                                </Link>
                                <Link to="/contact">
                                    <li className="text-4xl xl:text-6xl font-bold text-left text-sky cursor-pointer">Contact</li>
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