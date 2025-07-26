import React from 'react'
import vector1 from '../assets/vector1-menu.png'
import vector2 from '../assets/vector2-menu.png'
import CloseIcon from '../assets/cerrar.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { useTranslation } from 'react-i18next'

const Menu = ({ isOpen, toggleMenu }) => {

    const { i18n, t } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'de' ? 'en' : 'de';
        i18n.changeLanguage(newLang)
    }

    return (
        <>
            <div
                className={`
          fixed top-0 left-0 w-full h-screen z-50 
          transform transition-transform duration-500 ease-in-out 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                <div className="bg-gray-100 overflow-hidden h-screen  ">
                    <div className="container mx-auto h-full md:pb-32 md:pt-20 relative md:px-0 px-6">
                        <img src={CloseIcon} alt="" onClick={toggleMenu} className="ml-auto cursor-pointer absolute md:relative right-5 top-13 z-20" />
                        <img className="absolute top-0 left-1/2 md:h-full h-auto md:-translate-x-20 translate-x-18" src={vector2} alt="" />
                        <img className="absolute top-0 right-3/7 md:h-full h-auto md:-translate-x-20 translate-x-38" src={vector1} alt="" />

                        <div className="relative">
                            <Navbar toggleMenu={toggleMenu} hide={'hidden'} bgLang={'bg-white text-black'} isOpen={isOpen} bgColor='bg-fuchsia-975 mix-blend-multiply text-white' />
                            <span
                                onClick={toggleLanguage}
                                className={`absolute md:left-2/7 md:translate-x-20 md:mt-0 mt-12 left-53 bg-white top-1 md:top-1/7 md:text-2xl text-xl w-fit font-bold rounded-full py-3 px-2 leading-none cursor-pointer select-none`}
                            >
                                {t('language')}
                            </span>
                        </div>

                        <div className="flex sm:flex-row flex-row-reverse items-center justify-center w-full ">
                            <div className="w-1/2"></div>
                            <ul className="w-1/2 flex flex-col items-start justify-start md:pl-24 gap-6 md:pt-0 pt-12">
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
                                <a href='#contact' onClick={toggleMenu} >
                                    <li className="text-4xl xl:text-6xl font-bold text-left text-sky cursor-pointer">Contact</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu

